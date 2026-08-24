// app/quizzes/[id]/result/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CheckCircle2, XCircle, Award, Home } from "lucide-react";
import Link from "next/link";

export default function QuizResultPage() {
  const params = useParams();
  const quizId = params.id as string;
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem(`quiz_result_${quizId}`);
    if (raw) {
      setResult(JSON.parse(raw));
    }
  }, [quizId]);

  if (!result) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-6 text-slate-400">
        <p>No active assessment session data found.</p>
        <Link href="/dashboard" className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-10">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600/20 text-indigo-400">
            <Award className="h-10 w-10" />
          </div>
          <h1 className="mt-4 text-3xl font-black text-white">Assessment Results</h1>
          <p className="text-sm text-slate-400">Review evaluation report and answer keys</p>

          <div className="mt-6 flex justify-center gap-6">
            <div className="rounded-xl border border-slate-800 bg-slate-950 px-6 py-4">
              <span className="text-xs text-slate-400">Score</span>
              <p className="text-2xl font-bold text-white">{result.score} / {result.totalQuestions}</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950 px-6 py-4">
              <span className="text-xs text-slate-400">Percentage</span>
              <p className="text-2xl font-bold text-indigo-400">{result.percentage}%</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950 px-6 py-4">
              <span className="text-xs text-slate-400">Result</span>
              <p className={`text-2xl font-bold ${result.isPassed ? "text-emerald-400" : "text-red-400"}`}>
                {result.isPassed ? "PASSED" : "FAILED"}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">Evaluation Breakdown</h2>

          {result.detailedReview?.map((rev: any, idx: number) => (
            <div
              key={idx}
              className={`rounded-xl border p-6 space-y-3 ${
                rev.isCorrect
                  ? "border-emerald-900/40 bg-emerald-950/10"
                  : "border-red-900/40 bg-red-950/10"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-semibold text-slate-100">
                  {idx + 1}. {rev.questionText}
                </span>
                {rev.isCorrect ? (
                  <span className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-bold text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Correct
                  </span>
                ) : (
                  <span className="flex items-center gap-1 rounded-full bg-red-500/20 px-2.5 py-0.5 text-xs font-bold text-red-400">
                    <XCircle className="h-3.5 w-3.5" /> Incorrect
                  </span>
                )}
              </div>

              <div className="grid gap-2 sm:grid-cols-2 pt-2">
                {rev.options.map((opt: string, optIdx: number) => {
                  const isCorrectAnswer = optIdx === rev.correctOptionIndex;
                  const isUserSelected = optIdx === rev.userSelectedIndex;

                  let borderClass = "border-slate-800 bg-slate-950/40 text-slate-400";
                  if (isCorrectAnswer) {
                    borderClass = "border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold";
                  } else if (isUserSelected && !rev.isCorrect) {
                    borderClass = "border-red-500 bg-red-950/40 text-red-200 font-semibold";
                  }

                  return (
                    <div key={optIdx} className={`rounded-lg border p-3 text-sm flex items-center gap-2 ${borderClass}`}>
                      <span className="font-mono text-xs">{String.fromCharCode(65 + optIdx)}.</span>
                      <span>{opt}</span>
                    </div>
                  );
                })}
              </div>

              {rev.explanation && (
                <div className="rounded-lg bg-slate-900/80 p-3 text-xs text-slate-300 border border-slate-800">
                  <span className="font-bold text-indigo-400">Explanation: </span>
                  {rev.explanation}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            <Home className="h-4 w-4" /> Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}