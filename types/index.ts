// types/index.ts
import { DefaultSession } from "next-auth";

export type Role = "admin" | "teacher" | "student";

export interface UserSessionPayload {
  id: string;
  role: Role;
  name: string;
  email: string;
  studentId?: string;
  class?: string;
  section?: string;
}

declare module "next-auth" {
  interface Session {
    user: UserSessionPayload & DefaultSession["user"];
  }
  interface User extends UserSessionPayload {}
}

declare module "next-auth/jwt" {
  interface JWT extends UserSessionPayload {}
}