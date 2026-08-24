// app/quizzes/create/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Plus, Trash2, Save, Loader2 } from "lucide-react";

const QuizSchema = Yup.object().shape({
  title: Yup.string().required("Quiz title is required"),
  targetLevel: Yup.string().required("Target level is required"),
  timeLimitMinutes: Yup.number().min(1, "At least 1 minute").required(),
  questions: Yup.array().of(
    Yup.object().shape({
      questionText: Yup.string().required("Question text required"),
      options: Yup.array().of(Yup.string().required("Option cannot be blank")).min(2),
      correctOptionIndex: Yup.number().required(),
      explanation: Yup.string(),
    })
  ).min(1, "At least one question is required"),
});

export default function CreateQuizPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-10">
      <div className="mx-auto max-w-4xl space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Create MCQ Exam (Formik Powered)</h1>
          <p className="text-sm text-slate-400">Supports Chinese & Bengali character sets with auto-evaluation keys</p>
        </div>

        <Formik
          initialValues={{
            title: "HSK 1 Grammar & Character MCQ Test",
            description: "Evaluation for Chinese character identification and grammatical rules.",
            targetLevel: "HSK-1",
            timeLimitMinutes: 15,
            questions: [
              {
                questionText: "“了” (le) বাক্যে কী নির্দেশ করে?",
                options: [
                  "কাজ সম্পন্ন হওয়া বা অবস্থার পরিবর্তন",
                  "ভবিষ্যৎ পরিকল্পনা",
                  "বহুবচন",
                  "তুলনা",
                ],
                correctOptionIndex: 0,
                explanation: "✅ উত্তর: A) 了 (le) সাধারণত ক্রিয়ার সমাপ্তি প্রকাশে ব্যবহৃত হয়।",
              },
            ],
          }}
          validationSchema={QuizSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const res = await fetch("/api/quizzes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
              });
              if (res.ok) {
                router.push("/quizzes/list");
              }
            } catch (error) {
              console.error(error);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ values, isSubmitting, setFieldValue }) => (
            <Form className="space-y-6">
              <div className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:grid-cols-3">
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase text-slate-400">Quiz Title</label>
                  <Field
                    name="title"
                    type="text"
                    className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white"
                  />
                  <ErrorMessage name="title" component="div" className="mt-1 text-xs text-red-400" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase text-slate-400">Time (Minutes)</label>
                  <Field
                    name="timeLimitMinutes"
                    type="number"
                    min={1}
                    className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label className="text-xs font-semibold uppercase text-slate-400">Target Level</label>
                  <Field
                    name="targetLevel"
                    type="text"
                    className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white"
                  />
                </div>
              </div>

              {/* Dynamic Questions via FieldArray */}
              <FieldArray name="questions">
                {({ push, remove }) => (
                  <div className="space-y-4">
                    {values.questions.map((q, qIdx) => (
                      <div key={qIdx} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-indigo-400">Question {qIdx + 1}</span>
                          <button
                            type="button"
                            onClick={() => remove(qIdx)}
                            className="text-slate-500 hover:text-red-400"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        <Field
                          name={`questions.${qIdx}.questionText`}
                          type="text"
                          placeholder="Question text (supports 汉字 / বাংলা / English)"
                          className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white"
                        />

                        <div className="grid gap-3 sm:grid-cols-2">
                          {q.options.map((_, optIdx) => (
                            <div
                              key={optIdx}
                              className={`flex items-center gap-2 rounded-lg border p-2 ${
                                q.correctOptionIndex === optIdx
                                  ? "border-emerald-500/50 bg-emerald-950/20"
                                  : "border-slate-800 bg-slate-950"
                              }`}
                            >
                              <button
                                type="button"
                                onClick={() => setFieldValue(`questions.${qIdx}.correctOptionIndex`, optIdx)}
                                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                                  q.correctOptionIndex === optIdx
                                    ? "bg-emerald-500 text-white"
                                    : "border border-slate-700 text-slate-400"
                                }`}
                              >
                                {String.fromCharCode(65 + optIdx)}
                              </button>
                              <Field
                                name={`questions.${qIdx}.options.${optIdx}`}
                                type="text"
                                placeholder={`Option ${String.fromCharCode(65 + optIdx)}`}
                                className="w-full bg-transparent text-sm text-white outline-none"
                              />
                            </div>
                          ))}
                        </div>

                        <Field
                          name={`questions.${qIdx}.explanation`}
                          type="text"
                          placeholder="Explanation / Answer Key reference"
                          className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-300"
                        />
                      </div>
                    ))}

                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() =>
                          push({
                            questionText: "",
                            options: ["", "", "", ""],
                            correctOptionIndex: 0,
                            explanation: "",
                          })
                        }
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800"
                      >
                        <Plus className="h-4 w-4" /> Add Question
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 disabled:opacity-50"
                      >
                        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                        Publish Exam
                      </button>
                    </div>
                  </div>
                )}
              </FieldArray>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}