// app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          await connectDB();
          const cleanEmail = credentials.email.toLowerCase().trim();
          
          const user = await User.findOne({ email: cleanEmail }).select("+password");

          if (!user || !user.password) {
            return null;
          }

          const isMatch = await bcrypt.compare(credentials.password, user.password);
          if (!isMatch) {
            return null;
          }

          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            role: user.role,
            studentId: user.studentId,
            class: user.class,
            section: user.section,
          };
        } catch (error) {
          console.error("NextAuth authorize error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.name = user.name;
        token.email = user.email;
        token.studentId = user.studentId;
        token.class = user.class;
        token.section = user.section;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.id as string;
        session.user.role = token.role as any;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.studentId = token.studentId as string | undefined;
        session.user.class = token.class as string | undefined;
        session.user.section = token.section as string | undefined;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "fallback_super_secret_jwt_key_12345",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };