import { Languages } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-red-50 to-white border border-red-100 py-16 px-6 text-center">

      <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-red-100 blur-3xl opacity-50" />
      <div className="absolute -right-10 bottom-0 h-52 w-52 rounded-full bg-orange-100 blur-3xl opacity-50" />

      <div className="relative z-10">

        <div className="flex items-center justify-center gap-2 text-red-600 font-semibold uppercase tracking-[4px]">
          <div className="h-[2px] w-10 bg-red-500" />
          Overview
          <div className="h-[2px] w-10 bg-red-500" />
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
            <Languages size={40} />
          </div>
        </div>

        <h1 className="mt-8 text-4xl font-black md:text-6xl">
          Chinese Language{" "}
          <span className="text-red-600">Overview</span>
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
          Discover the beauty, history, culture and worldwide influence of the
          Chinese language.
        </p>

      </div>
    </section>
  );
}