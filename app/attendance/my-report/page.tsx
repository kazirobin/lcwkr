// app/attendance/my-report/page.tsx
"use client";

import { useEffect, useState } from "react";
import { CalendarCheck } from "lucide-react";

export default function MyAttendanceReportPage() {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    async function fetchAttendance() {
      try {
        const res = await fetch("/api/attendance");
        const json = await res.json();
        if (json.success) {
          setLogs(json.data);
        }
      } catch (e) {
        console.error(e);
      }
    }
    fetchAttendance();
  }, []);

  const total = logs.length;
  const presents = logs.filter((l) => l.status === "present").length;
  const lates = logs.filter((l) => l.status === "late").length;
  const absents = logs.filter((l) => l.status === "absent").length;
  const percentage = total > 0 ? (((presents + lates * 0.5) / total) * 100).toFixed(1) : "0";

  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-10">
      <div className="mx-auto max-w-4xl space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Attendance Summary & Activity</h1>
          <p className="text-sm text-slate-400">Overall percentage calculations and dated historical record</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <span className="text-xs text-slate-400">Percentage</span>
            <p className="mt-1 text-2xl font-bold text-indigo-400">{percentage}%</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <span className="text-xs text-slate-400">Total Count</span>
            <p className="mt-1 text-2xl font-bold text-slate-200">{total}</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <span className="text-xs text-slate-400">Present</span>
            <p className="mt-1 text-2xl font-bold text-emerald-400">{presents}</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <span className="text-xs text-slate-400">Absent</span>
            <p className="mt-1 text-2xl font-bold text-red-400">{absents}</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-800 bg-slate-900 text-xs text-slate-400">
              <tr>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Course / Class</th>
                <th className="px-6 py-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {logs.map((log) => (
                <tr key={log._id} className="hover:bg-slate-900/50">
                  <td className="px-6 py-3 font-mono text-slate-300">{log.date}</td>
                  <td className="px-6 py-3 text-slate-400">{log.class}</td>
                  <td className="px-6 py-3 text-right">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        log.status === "present"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : log.status === "late"
                          ? "bg-amber-500/10 text-amber-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {log.status.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}