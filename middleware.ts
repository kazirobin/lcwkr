// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;
    const role = token?.role;

    const teacherOrAdminRoutes = [
      "/attendance/mark",
      "/results/publish",
      "/quizzes/create",
    ];

    if (teacherOrAdminRoutes.some((route) => path.startsWith(route))) {
      if (role !== "admin" && role !== "teacher") {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/login",
    },
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/attendance/:path*",
    "/results/:path*",
    "/quizzes/:path*",
    "/notices/:path*",
  ],
};