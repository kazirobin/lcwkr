import Image from "next/image";

export default function ClassRoutineSection() {
  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          
          {/* ========== LEFT CARD – Class Routine ========== */}
          <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-800 sm:text-[1.7rem]">
              আমাদের ক্লাস রুটিন
            </h2>
            <p className="mt-1.5 text-sm text-slate-500">
              আমাদের ক্লাস সপ্তাহে ৫ দিন অনুষ্ঠিত হয়।
            </p>

            <div className="mt-7 space-y-3.5">
              {/* Sunday – Wednesday */}
              {[    { day: "শনিবার", type: "লাইভ ক্লাস", color: "bg-emerald-500" },
                { day: "রবিবার", type: "লাইভ ক্লাস", color: "bg-emerald-500" },
                { day: "সোমবার", type: "লাইভ ক্লাস", color: "bg-emerald-500" },
                { day: "মঙ্গলবার", type: "লাইভ ক্লাস", color: "bg-emerald-500" },
                { day: "বুধবার", type: "লাইভ ক্লাস", color: "bg-emerald-500" },
              ].map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between rounded-xl bg-slate-50/80 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full ${item.color} text-[11px] font-bold text-white`}
                    >
                      ম
                    </span>
                    <span className="font-medium text-slate-700">{item.day}</span>
                  </div>
                  <span className="text-sm font-medium text-emerald-600">
                    {item.type}
                  </span>
                </div>
              ))}

              {/* Thursday – Exam */}
              <div className="flex items-center justify-between rounded-xl bg-orange-50/70 px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-400 text-[11px] font-bold text-white">
                    ম
                  </span>
                  <span className="font-medium text-slate-700">বৃহস্পতিবার</span>
                </div>
                <span className="text-sm font-medium text-orange-600">
                  সাপ্তাহিক পরীক্ষা
                </span>
              </div>

              {/* Friday – Holiday */}
              <div className="flex items-center justify-between rounded-xl bg-rose-50/70 px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-[11px] font-bold text-white">
                    ×
                  </span>
                  <span className="font-medium text-slate-700">শুক্রবার</span>
                </div>
                <span className="text-sm font-medium text-rose-600">
                  সাপ্তাহিক ছুটি
                </span>
              </div>
            </div>

            {/* Note */}
            <div className="mt-6 flex items-start gap-2.5 rounded-xl bg-slate-50 px-4 py-3">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm text-slate-500">
                প্রতিটি ক্লাসের হাজিরা নেওয়া হয়।
              </p>
            </div>
          </div>

          {/* ========== RIGHT CARD – Learning Steps ========== */}
          <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-800 sm:text-[1.7rem]">
              শেখার ধাপ
            </h2>

            <div className="mt-8 flex gap-6">
              {/* Timeline */}
              <div className="relative flex flex-col items-center">
                {/* Vertical line */}
                <div className="absolute top-3 bottom-10 w-0.5 bg-gradient-to-b from-emerald-400 via-emerald-300 to-amber-300" />

                {[
                  { label: "Pinyin (উচ্চারণ)", active: true },
                  { label: "Level 1", active: true },
                  { label: "Level 2", active: true },
                  { label: "Level 3", active: true },
                  { label: "...", active: false },
                  { label: "Level 6", active: true },
                ].map((step, i) => (
                  <div key={i} className="relative z-10 mb-5 flex items-center gap-4 last:mb-0">
                    <div
                      className={`h-3.5 w-3.5 shrink-0 rounded-full border-2 ${
                        step.active
                          ? "border-emerald-500 bg-emerald-500"
                          : "border-slate-300 bg-white"
                      }`}
                    />
                    <span
                      className={`rounded-lg px-3.5 py-1.5 text-sm font-medium ${
                        step.label === "..."
                          ? "text-slate-400"
                          : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                ))}

                {/* HSK Preparation */}
                <div className="relative z-10 mt-1 flex items-center gap-4">
                  <div className="h-3.5 w-3.5 shrink-0 rounded-full border-2 border-amber-400 bg-amber-400" />
                  <span className="rounded-lg bg-amber-100 px-3.5 py-1.5 text-sm font-semibold text-amber-700">
                    HSK Preparation
                  </span>
                </div>
              </div>

              {/* Illustration + text */}
              <div className="flex flex-1 flex-col items-center justify-center text-center">
                <div className="relative mb-4">
                  {/* Books stack */}
                  <div className="relative h-28 w-28">
                    <div className="absolute bottom-0 left-2 h-16 w-20 rotate-[-6deg] rounded-md bg-blue-500 shadow-md" />
                    <div className="absolute bottom-2 left-4 h-16 w-20 rotate-[3deg] rounded-md bg-red-500 shadow-md" />
                    <div className="absolute bottom-4 left-6 h-16 w-20 rotate-[-2deg] rounded-md bg-amber-400 shadow-md" />
                    {/* Graduation cap */}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2">
                      <svg
                        className="h-10 w-12 text-slate-800"
                        viewBox="0 0 64 48"
                        fill="currentColor"
                      >
                        <path d="M32 4L2 18l30 14 30-14L32 4z" />
                        <path d="M10 22v12c0 4 10 8 22 8s22-4 22-8V22l-22 10L10 22z" opacity="0.9" />
                        <circle cx="54" cy="20" r="2.5" />
                        <path d="M54 22v10" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                  </div>
                </div>

                <p className="max-w-[180px] text-sm leading-relaxed text-slate-500">
                  প্রতিটি লেভেল সফলভাবে শেষ করার পর পরবর্তী লেভেলে উন্নীত করা হয়।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}