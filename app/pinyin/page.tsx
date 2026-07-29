"use client";

import { useLanguage } from "../context/LanguageContext";


export default function ClassRoutineSection() {
  const { language } = useLanguage();

  const t = (bn: string, en: string) =>
    language === "bn" ? bn : en;


  const routine = [
    {
      day: t("শনিবার", "Saturday"),
      type: t("লাইভ ক্লাস", "Live Class"),
      color: "bg-emerald-500",
    },
    {
      day: t("রবিবার", "Sunday"),
      type: t("লাইভ ক্লাস", "Live Class"),
      color: "bg-emerald-500",
    },
    {
      day: t("সোমবার", "Monday"),
      type: t("লাইভ ক্লাস", "Live Class"),
      color: "bg-emerald-500",
    },
    {
      day: t("মঙ্গলবার", "Tuesday"),
      type: t("লাইভ ক্লাস", "Live Class"),
      color: "bg-emerald-500",
    },
    {
      day: t("বুধবার", "Wednesday"),
      type: t("লাইভ ক্লাস", "Live Class"),
      color: "bg-emerald-500",
    },
  ];


  const steps = [
    t("Pinyin (উচ্চারণ)", "Pinyin (Pronunciation)"),
    t("Level 1", "Level 1"),
    t("Level 2", "Level 2"),
    t("Level 3", "Level 3"),
    "...",
    t("Level 12", "Level 12"),
  ];


  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">


          {/* Class Routine */}

          <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm sm:p-8">

            <h2 className="text-2xl font-bold text-slate-800 sm:text-[1.7rem]">
              {t("আমাদের ক্লাস রুটিন", "Our Class Routine")}
            </h2>


            <p className="mt-1.5 text-sm text-slate-500">
              {t(
                "আমাদের ক্লাস সপ্তাহে ৫ দিন অনুষ্ঠিত হয়।",
                "Our classes are conducted 5 days a week."
              )}
            </p>



            <div className="mt-7 space-y-3.5">

              {routine.map((item) => (

                <div
                  key={item.day}
                  className="flex items-center justify-between rounded-xl bg-slate-50/80 px-4 py-3"
                >

                  <div className="flex items-center gap-3">

                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full ${item.color} text-[11px] font-bold text-white`}
                    >
                      C
                    </span>

                    <span className="font-medium text-slate-700">
                      {item.day}
                    </span>

                  </div>


                  <span className="text-sm font-medium text-emerald-600">
                    {item.type}
                  </span>


                </div>

              ))}



              {/* Exam */}

              <div className="flex items-center justify-between rounded-xl bg-orange-50/70 px-4 py-3">

                <div className="flex items-center gap-3">

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-400 text-[11px] font-bold text-white">
                    E
                  </span>

                  <span className="font-medium text-slate-700">
                    {t("বৃহস্পতিবার", "Thursday")}
                  </span>

                </div>


                <span className="text-sm font-medium text-orange-600">
                  {t("সাপ্তাহিক পরীক্ষা", "Weekly Exam")}
                </span>

              </div>




              {/* Holiday */}

              <div className="flex items-center justify-between rounded-xl bg-rose-50/70 px-4 py-3">

                <div className="flex items-center gap-3">

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-[11px] font-bold text-white">
                    ×
                  </span>


                  <span className="font-medium text-slate-700">
                    {t("শুক্রবার", "Friday")}
                  </span>

                </div>


                <span className="text-sm font-medium text-rose-600">
                  {t("সাপ্তাহিক ছুটি", "Weekly Holiday")}
                </span>


              </div>


            </div>



            <div className="mt-6 rounded-xl bg-slate-50 px-4 py-3">

              <p className="text-sm text-slate-500">
                {t(
                  "প্রতিটি ক্লাসের হাজিরা নেওয়া হয়।",
                  "Attendance is taken in every class."
                )}
              </p>

            </div>


          </div>





          {/* Learning Steps */}


          <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm sm:p-8">


            <h2 className="text-2xl font-bold text-slate-800 sm:text-[1.7rem]">
              {t("শেখার ধাপ", "Learning Steps")}
            </h2>



            <div className="mt-8 flex gap-6">


              <div className="relative flex flex-col items-center">

                <div className="absolute top-3 bottom-10 w-0.5 bg-gradient-to-b from-emerald-400 via-emerald-300 to-amber-300" />


                {steps.map((step, i) => (

                  <div
                    key={i}
                    className="relative z-10 mb-5 flex items-center gap-4 last:mb-0"
                  >

                    <div
                      className={`h-3.5 w-3.5 rounded-full border-2 ${
                        step === "..."
                          ? "border-slate-300 bg-white"
                          : "border-emerald-500 bg-emerald-500"
                      }`}
                    />


                    <span
                      className={`rounded-lg px-3.5 py-1.5 text-sm font-medium ${
                        step === "..."
                          ? "text-slate-400"
                          : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {step}
                    </span>


                  </div>

                ))}



                <div className="relative z-10 mt-1 flex items-center gap-4">

                  <div className="h-3.5 w-3.5 rounded-full border-2 border-amber-400 bg-amber-400" />


                  <span className="rounded-lg bg-amber-100 px-3.5 py-1.5 text-sm font-semibold text-amber-700">
                    {t("HSK প্রস্তুতি", "HSK Preparation")}
                  </span>


                </div>


              </div>




              <div className="flex flex-1 flex-col items-center justify-center text-center">


                <div className="relative mb-4">

                  <div className="relative h-28 w-28">

                    <div className="absolute bottom-0 left-2 h-16 w-20 rotate-[-6deg] rounded-md bg-blue-500 shadow-md" />

                    <div className="absolute bottom-2 left-4 h-16 w-20 rotate-[3deg] rounded-md bg-red-500 shadow-md" />

                    <div className="absolute bottom-4 left-6 h-16 w-20 rotate-[-2deg] rounded-md bg-amber-400 shadow-md" />

                  </div>

                </div>



                <p className="max-w-[200px] text-sm leading-relaxed text-slate-500">

                  {t(
                    "প্রতিটি লেভেল সফলভাবে শেষ করার পর পরবর্তী লেভেলে উন্নীত করা হয়।",
                    "After completing each level successfully, students move to the next level."
                  )}

                </p>


              </div>


            </div>


          </div>


        </div>

      </div>
    </section>
  );
}