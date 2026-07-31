"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export function Roadmap() {
  const { t } = useLanguage();

  const roadmap = t.roadmap;

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-green-50 via-white to-red-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
            {roadmap.badge}
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            {roadmap.title.normal}{" "}
            <span className="text-red-600">
              {roadmap.title.highlight}
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {roadmap.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-12 lg:grid-cols-[1fr_auto_1fr]">
          {/* Step 1 */}
          <div className="relative rounded-3xl border-2 border-red-200 bg-white p-8 shadow-xl">
            <span className="absolute -top-5 left-8 rounded-xl bg-red-600 px-5 py-2 text-sm font-bold text-white">
              {roadmap.step1.badge}
            </span>

            <div className="mb-6 text-6xl">{roadmap.step1.emoji}</div>

            <h3 className="text-3xl font-bold text-slate-900">
              {roadmap.step1.title}
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              {roadmap.step1.description}
            </p>

            <div className="mt-8 space-y-3">
              {roadmap.step1.checklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>

            <a
              href={roadmap.step1.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex w-full items-center justify-center rounded-xl bg-red-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
            >
              {roadmap.step1.button}
            </a>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <div className="rounded-full bg-green-500 p-5 text-4xl text-white shadow-xl">
              ➜
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative rounded-3xl border border-green-200 bg-white p-8 shadow-xl">
            <span className="absolute -top-5 left-8 rounded-xl bg-green-600 px-5 py-2 text-sm font-bold text-white">
              {roadmap.step2.badge}
            </span>

            <div className="mb-6 text-6xl">{roadmap.step2.emoji}</div>

            <h3 className="text-3xl font-bold text-slate-900">
              {roadmap.step2.title}
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              {roadmap.step2.description}
            </p>

            <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">
              <p className="font-semibold text-green-700">
                {roadmap.step2.notice}
              </p>
            </div>

            <a
              href={roadmap.step2.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex w-full items-center justify-center rounded-xl bg-green-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
            >
              {roadmap.step2.button}
            </a>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="mt-16 rounded-3xl border border-yellow-300 bg-yellow-50 p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            {roadmap.bottom.title}
          </h3>
          

          <p className="mt-3 text-lg text-slate-600">
            {roadmap.bottom.descriptionBefore}{" "}
            <span className="font-bold text-green-600">
              {roadmap.bottom.highlight}
            </span>{" "}
            {roadmap.bottom.descriptionAfter}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;