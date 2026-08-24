
// app/attendance/mark/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Check, X, Clock, Save, Loader2 } from "lucide-react";

interface Student {
  _id: string;
  name: string;
  studentId: string;
  class: string;
}

export default function MarkAttendancePage() {
  const [targetClass, setTargetClass] = useState("HSK-1");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [students, setStudents] = useState<Student[]>([]);
  const [statusMap, setStatusMap] = useState<Record<string, "present" | "absent" | "late">>({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setStudents([
      { _id: "65f1a0b1e1a1a1a1a1a1a101", name: "Rahim Ahmed", studentId: "STU-001", class: targetClass },
      { _id: "65f1a0b1e1a1a1a1a1a1a102", name: "Li Wei", studentId: "STU-002", class: targetClass },
      { _id: "65f1a0b1e1a1a1a1a1a1a103", name: "Ananya Sen", studentId: "STU-003", class: targetClass },
    ]);

    setStatusMap({
      "65f1a0b1e1a1a1a1a1a1a101": "present",
      "65f1a0b1e1a1a1a1a1a1a102": "present",
      "65f1a0b1e1a1a1a1a1a1a103": "present",
    });
  }, [targetClass]);

  const toggleStatus = (id: string, status: "present" | "absent" | "late") => {
    setStatusMap((prev) => ({ ...prev, [id]: status }));
  };

  const handleBulkSubmit = async () => {
    setSaving(true);
    setMessage(null);

    const payload = {
      date,
      class: targetClass,
      records: Object.entries(statusMap).map(([studentId, status]) => ({
        studentId,
        status,
      })),
    };

    try {
      const res = await fetch("/api/attendance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Attendance records successfully updated.");
      } else {
        setMessage(data.error || "Failed to update attendance.");
      }
    } catch {
      setMessage("Error sending attendance payload.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-10">
      <div className="mx-auto max-w-4xl space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Daily Attendance Marking</h1>
          <p className="text-sm text-slate-400">Select class, date, and toggle student presence status</p>
        </div>

        <div className="grid gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Class / Cohort</label>
            <select
              value={targetClass}
              onChange={(e) => setTargetClass(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
            >
              <option value="HSK-1">HSK Level 1 (Chinese)</option>
              <option value="HSK-2">HSK Level 2 (Chinese)</option>
              <option value="HSK-3">HSK Level 3 (Chinese)</option>
              <option value="Bengali-A1">Bengali Language Foundation</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-800 bg-slate-900 text-xs font-semibold text-slate-400">
              <tr>
                <th className="px-6 py-3">Roll ID</th>
                <th className="px-6 py-3">Student Name</th>
                <th className="px-6 py-3 text-right">Status Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {students.map((student) => {
                const currentStatus = statusMap[student._id] || "present";
                return (
                  <tr key={student._id} className="hover:bg-slate-900/50">
                    <td className="px-6 py-4 font-mono text-slate-400">{student.studentId}</td>
                    <td className="px-6 py-4 font-medium text-slate-200">{student.name}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="inline-flex rounded-lg border border-slate-800 bg-slate-950 p-1">
                        <button
                          onClick={() => toggleStatus(student._id, "present")}
                          className={`flex items-center gap-1 rounded px-3 py-1 text-xs font-medium transition ${
                            currentStatus === "present"
                              ? "bg-emerald-600 text-white"
                              : "text-slate-400 hover:text-white"
                          }`}
                        >
                          <Check className="h-3.5 w-3.5" /> Present
                        </button>
                        <button
                          onClick={() => toggleStatus(student._id, "absent")}
                          className={`flex items-center gap-1 rounded px-3 py-1 text-xs font-medium transition ${
                            currentStatus === "absent"
                              ? "bg-red-600 text-white"
                              : "text-slate-400 hover:text-white"
                          }`}
                        >
                          <X className="h-3.5 w-3.5" /> Absent
                        </button>
                        <button
                          onClick={() => toggleStatus(student._id, "late")}
                          className={`flex items-center gap-1 rounded px-3 py-1 text-xs font-medium transition ${
                            currentStatus === "late"
                              ? "bg-amber-600 text-white"
                              : "text-slate-400 hover:text-white"
                          }`}
                        >
                          <Clock className="h-3.5 w-3.5" /> Late
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {message && (
          <div className="rounded-lg border border-slate-800 bg-slate-900 p-3 text-center text-sm font-medium text-indigo-400">
            {message}
          </div>
        )}

        <div className="flex justify-end">
          <button
            onClick={handleBulkSubmit}
            disabled={saving}
            className="flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500 disabled:opacity-50"
          >
            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            Submit Attendance
          </button>
        </div>
      </div>
    </div>
  );
}