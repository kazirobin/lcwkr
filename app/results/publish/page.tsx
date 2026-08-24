// app/results/publish/page.tsx
"use client";

import { useState } from "react";
import { Plus, Trash2, Award, Loader2 } from "lucide-react";

export default function PublishResultPage() {
  const [studentId, setStudentId] = useState("");
  const [examName, setExamName] = useState("HSK Semester Final Exam 2026");
  const [className, setClassName] = useState("HSK-1");
  const [subjects, setSubjects] = useState([
    { subjectName: "Chinese Characters & Vocabulary", marksObtained: 88, totalMarks: 100 },
    { subjectName: "Listening Comprehension", marksObtained: 92, totalMarks: 100 },
  ]);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const addSubjectRow = () => {
    setSubjects([...subjects, { subjectName: "", marksObtained: 0, totalMarks: 100 }]);
  };

  const removeSubjectRow = (index: number) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const updateSubject = (index: number, field: string, value: any) => {
    const updated = [...subjects];
    updated[index] = { ...updated[index], [field]: value };
    setSubjects(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg("");

    try {
      const res = await fetch("/api/results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId,
          examName,
          class: className,
          subjects,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatusMsg("Result published and marksheet generated successfully.");
      } else {
        setStatusMsg(data.error || "Failed to publish marks.");
      }
    } catch {
      setStatusMsg("An unexpected submission error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Publish Exam Marksheet</h1>
          <p className="text-sm text-slate-400">Enter student marks and calculate letter grades automatically</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="text-xs font-semibold uppercase text-slate-400">Student ObjectId</label>
              <input
                type="text"
                required
                placeholder="MongoDB User ID"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-slate-400">Exam Title</label>
              <input
                type="text"
                required
                value={examName}
                onChange={(e) => setExamName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-slate-400">Class</label>
              <input
                type="text"
                required
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-200">Subject Breakdown</span>
              <button
                type="button"
                onClick={addSubjectRow}
                className="inline-flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-indigo-300"
              >
                <Plus className="h-3.5 w-3.5" /> Add Row
              </button>
            </div>

            {subjects.map((sub, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Subject Name"
                  required
                  value={sub.subjectName}
                  onChange={(e) => updateSubject(idx, "subjectName", e.target.value)}
                  className="flex-1 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                />
                <input
                  type="number"
                  placeholder="Obtained"
                  required
                  value={sub.marksObtained}
                  onChange={(e) => updateSubject(idx, "marksObtained", e.target.value)}
                  className="w-24 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                />
                <input
                  type="number"
                  placeholder="Total"
                  required
                  value={sub.totalMarks}
                  onChange={(e) => updateSubject(idx, "totalMarks", e.target.value)}
                  className="w-24 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeSubjectRow(idx)}
                  className="rounded-lg p-2 text-slate-500 hover:bg-red-950/40 hover:text-red-400"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          {statusMsg && (
            <p className="text-center text-sm font-medium text-indigo-400">{statusMsg}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 py-2.5 font-semibold text-white transition hover:bg-indigo-500 disabled:opacity-50"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Award className="h-4 w-4" />}
            Save & Publish Marksheet
          </button>
        </form>
      </div>
    </div>
  );
}