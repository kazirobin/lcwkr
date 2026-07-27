

export function Roadmap() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-red-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
            🚨 Required Before Joining
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Learn <span className="text-red-600">Pinyin First</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            To maintain the quality of our practice group, every student must
            first complete the Pinyin lessons and then submit a voice recording.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-12 lg:grid-cols-[1fr_auto_1fr]">
          {/* Step 1 */}
          <div className="relative rounded-3xl border-2 border-red-200 bg-white p-8 shadow-xl">
            <span className="absolute -top-5 left-8 rounded-xl bg-red-600 px-5 py-2 text-sm font-bold text-white">
              STEP 1
            </span>

            <div className="mb-6 text-6xl">📚</div>

            <h3 className="text-3xl font-bold text-slate-900">
              Learn Chinese Pinyin
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Watch our complete Pinyin video lessons and practice all four
              tones before joining the practice group.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-slate-700">
                ✅ Watch all lessons
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                ✅ Practice pronunciation
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                ✅ Complete before Step 2
              </div>
            </div>

            <a
              href="https://drive.google.com/drive/folders/12fEKjDBRU5NgnpgE4WluoRMer94LIkaQ"
              target="_blank"
              className="mt-10 flex w-full items-center justify-center rounded-xl bg-red-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
            >
              ▶ Watch Pinyin Course
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
              STEP 2
            </span>

            <div className="mb-6 text-6xl">🎤</div>

            <h3 className="text-3xl font-bold text-slate-900">
              Submit Voice Recording
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              After completing the Pinyin course, join our WhatsApp Practice
              Group and submit your pronunciation recording.
            </p>

            <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">
              <p className="font-semibold text-green-700">
                🎯 Our moderators will review your pronunciation and approve you
                for Level 1.
              </p>
            </div>

            <a
              href="https://chat.whatsapp.com/EBP79wEaAfAEvMtMee6HTY"
              target="_blank"
              className="mt-10 flex w-full items-center justify-center rounded-xl bg-green-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
            >
              🚀 Submit Voice Recording
            </a>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="mt-16 rounded-3xl border border-yellow-300 bg-yellow-50 p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            🎉 After Completing These 2 Steps
          </h3>

          <p className="mt-3 text-lg text-slate-600">
            Once your pronunciation is verified, you'll be invited to our
            <span className="font-bold text-green-600">
              {" "}
              Level 1 Chinese Class
            </span>{" "}
            and continue your learning journey.
          </p>
        </div>
      </div>
    </section>
  );
}