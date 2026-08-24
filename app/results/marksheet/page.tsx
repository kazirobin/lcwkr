// app/results/marksheet/page.tsx
"use client";

import { useEffect, useState } from "react";
import { Printer } from "lucide-react";

export default function StudentMarksheetPage() {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    async function loadResults() {
      const res = await fetch("/api/results");
      const json = await res.json();
      if (json.success) setResults(json.data);
    }
    loadResults();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-10">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex items-center justify-between print:hidden">
          <div>
            <h1 className="text-2xl font-bold text-white">Student Academic Marksheets</h1>
            <p className="text-sm text-slate-400">View and print official academic transcripts</p>
          </div>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
          >
            <Printer className="h-4 w-4" /> Print Transcript
          </button>
        </div>

        {results.map((res) => (
          <div
            key={res._id}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl print:border-black print:bg-white print:text-black"
          >
            <div className="border-b border-slate-800 pb-6 text-center print:border-black">
              <h2 className="text-2xl font-black uppercase tracking-wider text-white print:text-black">
                Official Language Center Transcript
              </h2>
              <p className="text-sm font-medium text-indigo-400 print:text-gray-700">{res.examName}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 text-sm text-slate-300 print:text-gray-800">
              <div>
                <p><span className="font-semibold text-slate-400">Student:</span> {res.student?.name}</p>
                <p><span className="font-semibold text-slate-400">Roll ID:</span> {res.student?.studentId || "N/A"}</p>
              </div>
              <div className="text-right">
                <p><span className="font-semibold text-slate-400">Class:</span> {res.class}</p>
                <p><span className="font-semibold text-slate-400">Date:</span> {new Date(res.createdAt).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-lg border border-slate-800 print:border-gray-300">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-xs font-semibold text-slate-300 print:bg-gray-100 print:text-black">
                  <tr>
                    <th className="p-3">Subject</th>
                    <th className="p-3 text-center">Marks Obtained</th>
                    <th className="p-3 text-center">Total Marks</th>
                    <th className="p-3 text-right">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 print:divide-gray-300">
                  {res.subjects.map((sub: any, i: number) => (
                    <tr key={i}>
                      <td className="p-3 font-medium text-slate-200 print:text-black">{sub.subjectName}</td>
                      <td className="p-3 text-center text-slate-300 print:text-black">{sub.marksObtained}</td>
                      <td className="p-3 text-center text-slate-400 print:text-black">{sub.totalMarks}</td>
                      <td className="p-3 text-right font-bold text-indigo-400 print:text-black">{sub.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4 print:border-gray-400">
              <div>
                <p className="text-xs text-slate-400 print:text-gray-600">Overall Letter Grade</p>
                <p className="text-2xl font-black text-emerald-400 print:text-black">{res.overallGrade}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400 print:text-gray-600">Total Marks: {res.totalMarksObtained} / {res.totalPossibleMarks}</p>
                <p className="text-lg font-bold text-white print:text-black">{res.totalPercentage}% Score</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}