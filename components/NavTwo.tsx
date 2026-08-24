// components/Nav.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { 
  LogOut, 
  Menu, 
  X, 
  BookOpen, 
  CalendarCheck, 
  Award, 
  Bell, 
  LayoutDashboard, 
  User,
  LogIn,
  UserPlus
} from "lucide-react";

export default function NavTwo() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLoggedIn = status === "authenticated";
  const user = session?.user;

  const handleSignOut = () => {
    signOut({ callbackUrl: "/login" });
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href={isLoggedIn ? "/dashboard" : "/"} className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white shadow-lg shadow-indigo-600/30">
            文
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Lingua<span className="text-indigo-400">LMS</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex md:items-center md:gap-1">
          {isLoggedIn ? (
            /* ================= LOGGED IN NAVBAR ================= */
            <>
              <Link
                href="/dashboard"
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition ${
                  isActive("/dashboard")
                    ? "bg-indigo-600/15 text-indigo-400"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <LayoutDashboard className="h-4 w-4" /> Dashboard
              </Link>

              {(user?.role === "teacher" || user?.role === "admin") && (
                <>
                  <Link
                    href="/attendance/mark"
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition ${
                      isActive("/attendance/mark")
                        ? "bg-indigo-600/15 text-indigo-400"
                        : "text-slate-300 hover:bg-slate-900 hover:text-white"
                    }`}
                  >
                    <CalendarCheck className="h-4 w-4" /> Attendance
                  </Link>

                  <Link
                    href="/quizzes/create"
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition ${
                      isActive("/quizzes/create")
                        ? "bg-indigo-600/15 text-indigo-400"
                        : "text-slate-300 hover:bg-slate-900 hover:text-white"
                    }`}
                  >
                    <Award className="h-4 w-4" /> Create Exam
                  </Link>
                </>
              )}

              {user?.role === "student" && (
                <>
                  <Link
                    href="/attendance/my-report"
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition ${
                      isActive("/attendance/my-report")
                        ? "bg-indigo-600/15 text-indigo-400"
                        : "text-slate-300 hover:bg-slate-900 hover:text-white"
                    }`}
                  >
                    <CalendarCheck className="h-4 w-4" /> My Attendance
                  </Link>

                  <Link
                    href="/results/marksheet"
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition ${
                      isActive("/results/marksheet")
                        ? "bg-indigo-600/15 text-indigo-400"
                        : "text-slate-300 hover:bg-slate-900 hover:text-white"
                    }`}
                  >
                    <Award className="h-4 w-4" /> Marksheet
                  </Link>
                </>
              )}

              <Link
                href="/quizzes/list"
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition ${
                  isActive("/quizzes/list")
                    ? "bg-indigo-600/15 text-indigo-400"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <BookOpen className="h-4 w-4" /> Quizzes
              </Link>

              <Link
                href="/notices"
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition ${
                  isActive("/notices")
                    ? "bg-indigo-600/15 text-indigo-400"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <Bell className="h-4 w-4" /> Notices
              </Link>
            </>
          ) : (
            /* ================= LOGGED OUT (PUBLIC) NAVBAR ================= */
            <>
              <Link
                href="/"
                className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                  isActive("/")
                    ? "text-indigo-400"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/hsk"
                className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                  isActive("/hsk")
                    ? "text-indigo-400"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                HSK Courses
              </Link>
              <Link
                href="/community"
                className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                  isActive("/community")
                    ? "text-indigo-400"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                Community
              </Link>
            </>
          )}
        </div>

        {/* Right Side Actions (User Badge / Auth Buttons) */}
        <div className="hidden md:flex md:items-center md:gap-3">
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              {/* User Profile Pill */}
              <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-1.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-400">
                  <User className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold leading-tight text-white">{user?.name}</p>
                  <p className="text-[10px] font-semibold uppercase text-indigo-400">{user?.role}</p>
                </div>
              </div>

              {/* Sign Out Button */}
              <button
                onClick={handleSignOut}
                className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-300 transition hover:border-red-500/40 hover:bg-red-950/20 hover:text-red-400"
              >
                <LogOut className="h-3.5 w-3.5" /> Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:bg-slate-800 hover:text-white"
              >
                <LogIn className="h-3.5 w-3.5" /> Log In
              </Link>
              <Link
                href="/register"
                className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500"
              >
                <UserPlus className="h-3.5 w-3.5" /> Get Started
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg border border-slate-800 p-2 text-slate-400 hover:bg-slate-900 hover:text-white md:hidden"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {isLoggedIn ? (
              <>
                <div className="mb-2 flex items-center gap-2 border-b border-slate-800 pb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-400">
                    <User className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{user?.name}</p>
                    <p className="text-xs uppercase text-indigo-400">{user?.role}</p>
                  </div>
                </div>

                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-900"
                >
                  Dashboard
                </Link>
                <Link
                  href="/quizzes/list"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-900"
                >
                  Online Quizzes
                </Link>
                <Link
                  href="/notices"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-900"
                >
                  Notices
                </Link>
                
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleSignOut();
                  }}
                  className="mt-2 flex items-center gap-2 rounded-lg bg-red-950/30 px-3 py-2 text-left text-sm font-semibold text-red-400"
                >
                  <LogOut className="h-4 w-4" /> Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-900"
                >
                  Home
                </Link>
                <Link
                  href="/hsk"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-900"
                >
                  HSK Courses
                </Link>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-indigo-400 hover:bg-slate-900"
                >
                  Log In
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}