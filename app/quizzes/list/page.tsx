// app/quizzes/list/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen, Clock, HelpCircle, ArrowRight } from "lucide-react";

export default function QuizListPage() {
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadQuizzes() {
      try {
        const res = await fetch("/api/quizzes");
        const json = await res.json();
        if (json.success) setQuizzes(json.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadQuizzes();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Online Examination Hub</h1>
          <p className="text-sm text-slate-400">Available MCQ assessments with live timers and automated grading</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {quizzes.map((quiz) => (
            <div
              key={quiz._id}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-700"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-bold text-indigo-400">
                    {quiz.targetLevel}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="h-3.5 w-3.5" /> {quiz.timeLimitMinutes} Mins
                  </div>
                </div>

                <h3 className="mt-3 text-lg font-bold text-white">{quiz.title}</h3>
                <p className="mt-1 text-xs text-slate-400 line-clamp-2">{quiz.description}</p>
                <p className="mt-3 text-xs text-slate-500">Total Questions: {quiz.questions?.length}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <Link
                  href={`/quizzes/${quiz._id}/take`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
                >
                  Start Examination <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}