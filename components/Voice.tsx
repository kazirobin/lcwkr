"use client";

import { Volume2 } from "lucide-react";

export default function Voice() {
  return (
    <section className="">
      <div className="mx-auto max-w-2xl px-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-full bg-green-100 p-3">
              <Volume2 className="h-6 w-6 text-green-600" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Voice Instruction
              </h2>
              <p className="text-sm text-slate-500">
                Listen carefully before starting.
              </p>
            </div>
          </div>

          <audio controls className="w-full">
            <source src="/assets/audio/voice.mp3" type="audio/mpeg" />
            Your browser does not support audio.
          </audio>
        </div>
      </div>
    </section>
  );
}