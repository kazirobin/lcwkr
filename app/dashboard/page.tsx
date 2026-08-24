// app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import { CalendarCheck, BookOpen, PlusCircle } from "lucide-react";
import { connectDB } from "@/lib/mongodb";
import "@/models/User";
import { Notice } from "@/models/Notice";

interface NoticeItem {
  id: string;
  title: string;
  content: string;
  priority: string;
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  let notices: NoticeItem[] = [];

  try {
    await connectDB();

    // Standard JavaScript/TypeScript object without needing Mongoose internal types
    const query: Record<string, any> = {};

    if (session.user.role === "student") {
      query.audience = { $in: ["all", "students"] };
    } else if (session.user.role === "teacher") {
      query.audience = { $in: ["all", "teachers"] };
    }

    const rawNotices = await Notice.find(query)
      .sort({ createdAt: -1 })
      .limit(3)
      .lean();

    notices = rawNotices.map((n: any) => ({
      id: n._id.toString(),
      title: String(n.title || ""),
      content: String(n.content || ""),
      priority: String(n.priority || "normal"),
    }));
  } catch (error) {
    console.error("Dashboard notice query error:", error);
    notices = [];
  }

  const user = session.user;

  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Hello, {user.name}</h1>
            <p className="text-xs text-slate-400">
              Role: <span className="font-semibold text-indigo-400 uppercase">{user.role}</span>
              {user.class && ` • Class: ${user.class}`}
              {user.studentId && ` • ID: ${user.studentId}`}
            </p>
          </div>
          <Link
            href="/api/auth/signout"
            className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-red-950/40 hover:text-red-400 transition"
          >
            Sign Out
          </Link>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {(user.role === "teacher" || user.role === "admin") && (
            <>
              <Link
                href="/attendance/mark"
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 hover:border-indigo-500 transition-colors"
              >
                <CalendarCheck className="h-6 w-6 text-indigo-400" />
                <h3 className="mt-3 font-semibold text-white">Mark Attendance</h3>
                <p className="mt-1 text-xs text-slate-400">Bulk mark Present / Absent / Late</p>
              </Link>

              <Link
                href="/quizzes/create"
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 hover:border-purple-500 transition-colors"
              >
                <PlusCircle className="h-6 w-6 text-purple-400" />
                <h3 className="mt-3 font-semibold text-white">Create MCQ Exam</h3>
                <p className="mt-1 text-xs text-slate-400">Author Chinese / Bengali questions</p>
              </Link>
            </>
          )}

          {user.role === "student" && (
            <Link
              href="/attendance/my-report"
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 hover:border-indigo-500 transition-colors"
            >
              <CalendarCheck className="h-6 w-6 text-indigo-400" />
              <h3 className="mt-3 font-semibold text-white">My Attendance</h3>
              <p className="mt-1 text-xs text-slate-400">View percentage logs</p>
            </Link>
          )}

          <Link
            href="/quizzes/list"
            className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 hover:border-amber-500 transition-colors"
          >
            <BookOpen className="h-6 w-6 text-amber-400" />
            <h3 className="mt-3 font-semibold text-white">Online Quizzes</h3>
            <p className="mt-1 text-xs text-slate-400">Take timed tests & see scores</p>
          </Link>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-slate-200">Notices</h2>
            <Link href="/notices" className="text-xs text-indigo-400 hover:underline">
              View All
            </Link>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {notices.length === 0 ? (
              <p className="text-xs text-slate-500">No notices found.</p>
            ) : (
              notices.map((n) => (
                <div key={n.id} className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                  <span className="text-[10px] font-bold uppercase text-indigo-400">{n.priority}</span>
                  <h4 className="mt-1 font-semibold text-slate-200">{n.title}</h4>
                  <p className="mt-1 text-xs text-slate-400 line-clamp-2">{n.content}</p>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}