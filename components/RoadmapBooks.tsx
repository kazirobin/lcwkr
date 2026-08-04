"use client";

import Image from "next/image";
import { Mic, BookOpen, MessageCircle, GraduationCap } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

type Step = {
  title: string;
  description: string;
};

export default function RoadmapBooks() {
  const { t } = useLanguage();

  const roadmap = t.roadmap;

  const icons = [
    <BookOpen key={0} className="h-6 w-6" />,
    <Mic key={1} className="h-6 w-6" />,
    <MessageCircle key={2} className="h-6 w-6" />,
    <GraduationCap key={3} className="h-6 w-6" />,
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
            {roadmap.badge}
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-5xl">
            {roadmap.title}
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            {roadmap.description}
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2">

          {/* Image */}

          <div className="rounded-3xl border bg-white p-5 shadow-sm">
            <Image
              src="/assets/pinyin2.jpeg"
              alt={roadmap.imageAlt}
              width={501}
              height={454}
              className="mx-auto rounded-xl"
            />

            <div className="mt-5 rounded-xl bg-green-50 p-4 text-center">
              <p className="font-semibold text-green-700">
                {roadmap.imageNote}
              </p>
            </div>
          </div>

          {/* Steps */}

          <div className="space-y-5">

            {roadmap.steps.map((step: Step, index: number) => (
              <div
                key={index}
                className="flex gap-4 rounded-2xl border bg-white p-5 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                  {icons[index]}
                </div>

                <div>
                  <div className="mb-1 text-sm font-semibold text-green-700">
                    {roadmap.stepLabel} {index + 1}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Result */}

            <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
              <h3 className="text-xl font-bold text-green-800">
                {roadmap.finalTitle}
              </h3>

              <p className="mt-2 text-green-700">
                {roadmap.finalDescription}
              </p>
            </div>

            {/* Buttons */}

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">

              <a
                href="https://drive.google.com/drive/folders/12fEKjDBRU5NgnpgE4WluoRMer94LIkaQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-xl bg-green-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-green-700"
              >
                {roadmap.learnButton}
              </a>

              <a
                href="https://chat.whatsapp.com/EBP79wEaAfAEvMtMee6HTY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-xl border border-green-600 px-6 py-4 text-center font-semibold text-green-700 transition hover:bg-green-50"
              >
                {roadmap.submitButton}
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}