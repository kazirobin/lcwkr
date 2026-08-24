// app/notices/page.tsx
"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, Plus } from "lucide-react";

export default function NoticesPage() {
  const [notices, setNotices] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [audience, setAudience] = useState("all");
  const [priority, setPriority] = useState("normal");

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const res = await fetch("/api/notices");
      const json = await res.json();
      if (json.success) setNotices(json.data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/notices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, audience, priority }),
    });
    if (res.ok) {
      setShowModal(false);
      setTitle("");
      setContent("");
      fetchNotices();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Notice & Bulletin Board</h1>
            <p className="text-sm text-slate-400">Institutional circulars and administrative alerts</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            <Plus className="h-4 w-4" /> Post Notice
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {notices.map((n) => (
            <div
              key={n._id}
              className={`flex flex-col justify-between rounded-xl border p-5 ${
                n.priority === "urgent"
                  ? "border-red-900/40 bg-red-950/10"
                  : "border-slate-800 bg-slate-900/50"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      n.priority === "urgent"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-slate-800 text-slate-300"
                    }`}
                  >
                    {n.priority === "urgent" && <AlertTriangle className="h-3 w-3" />}
                    {n.priority.toUpperCase()}
                  </span>
                  <span className="text-xs text-slate-500">Audience: {n.audience}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-slate-100">{n.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">{n.content}</p>
              </div>

              <div className="mt-4 border-t border-slate-800/80 pt-3 text-xs text-slate-500">
                Posted by {n.author?.name} on {new Date(n.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-xl font-bold text-white">New Bulletin Post</h2>
              <form onSubmit={handleCreate} className="mt-4 space-y-4">
                <div>
                  <label className="text-xs text-slate-400 font-semibold">Title</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 font-semibold">Content</label>
                  <textarea
                    rows={4}
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 font-semibold">Audience</label>
                    <select
                      value={audience}
                      onChange={(e) => setAudience(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white"
                    >
                      <option value="all">All</option>
                      <option value="students">Students</option>
                      <option value="teachers">Teachers</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 font-semibold">Priority</label>
                    <select
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white"
                    >
                      <option value="normal">Normal</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
                  >
                    Publish
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}