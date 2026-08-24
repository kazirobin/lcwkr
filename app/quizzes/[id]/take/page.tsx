// app/quizzes/[id]/take/page.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { Clock, ChevronRight, ChevronLeft } from "lucide-react";

export default function TakeQuizPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = params.id as string;

  const [quiz, setQuiz] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [submitting, setSubmitting] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    async function loadQuiz() {
      try {
        const res = await fetch(`/api/quizzes/${quizId}`);
        const data = await res.json();
        if (data.success) {
          setQuiz(data.data);
          setTimeLeft(data.data.timeLimitMinutes * 60);
        }
      } catch (e) {
        console.error("Failed to load quiz", e);
      } finally {
        setLoading(false);
      }
    }
    loadQuiz();
  }, [quizId]);

  useEffect(() => {
    if (timeLeft <= 0 && quiz && !submitting) {
      handleSubmit();
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timeLeft, quiz]);

  const selectOption = (optIndex: number) => {
    setAnswers((prev) => ({ ...prev, [currentIndex]: optIndex }));
  };

  const handleSubmit = async () => {
    if (submitting) return;
    setSubmitting(true);
    if (timerRef.current) clearInterval(timerRef.current);

    const submissionPayload = {
      selectedAnswers: Object.entries(answers).map(([qIdx, optIdx]) => ({
        questionIndex: Number(qIdx),
        selectedOptionIndex: optIdx,
      })),
    };

    try {
      const res = await fetch(`/api/quizzes/${quizId}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionPayload),
      });
      const data = await res.json();
      if (data.success) {
        sessionStorage.setItem(`quiz_result_${quizId}`, JSON.stringify(data.data));
        router.push(`/quizzes/${quizId}/result`);
      }
    } catch (e) {
      console.error(e);
      setSubmitting(false);
    }
  };

  if (loading || !quiz) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-400">
        Loading test portal...
      </div>
    );
  }

  const currentQ = quiz.questions[currentIndex];
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-10">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">{quiz.targetLevel}</span>
            <h1 className="text-xl font-bold text-white">{quiz.title}</h1>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-amber-400">
            <Clock className="h-5 w-5 animate-pulse" />
            <span className="font-mono text-lg font-bold">
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {quiz.questions.map((_: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-9 w-9 rounded-lg font-medium text-xs transition ${
                currentIndex === idx
                  ? "bg-indigo-600 text-white ring-2 ring-indigo-400"
                  : answers[idx] !== undefined
                  ? "bg-emerald-600/30 border border-emerald-500 text-emerald-300"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:bg-slate-800"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <span className="text-xs font-bold text-slate-500 uppercase">Question {currentIndex + 1} of {quiz.questions.length}</span>
            <span className="text-xs text-slate-400">1 Mark</span>
          </div>

          <h2 className="text-xl font-semibold text-slate-100 leading-relaxed">
            {currentQ.questionText}
          </h2>

          <div className="space-y-3 pt-2">
            {currentQ.options.map((opt: string, optIdx: number) => {
              const isSelected = answers[currentIndex] === optIdx;
              return (
                <button
                  key={optIdx}
                  onClick={() => selectOption(optIdx)}
                  className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
                    isSelected
                      ? "border-indigo-500 bg-indigo-600/10 text-white"
                      : "border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                      isSelected ? "bg-indigo-600 text-white" : "border border-slate-700 bg-slate-900 text-slate-400"
                    }`}
                  >
                    {String.fromCharCode(65 + optIdx)}
                  </div>
                  <span className="text-base font-medium">{opt}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <button
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((prev) => prev - 1)}
            className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-300 hover:bg-slate-800 disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </button>

          {currentIndex < quiz.questions.length - 1 ? (
            <button
              onClick={() => setCurrentIndex((prev) => prev + 1)}
              className="flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 disabled:opacity-50"
            >
              {submitting ? "Submitting..." : "Submit Examination"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}