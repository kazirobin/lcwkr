"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Globe, Users } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const hero = t.hero;

  return (
    <section className="bg-background text-text">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">

       <div className=" flex flex-wrap items-center gap-16">

        

          {/* ================= RIGHT ================= */}

          <div className="relative">
                      

        

            <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

            <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-secondary bg-secondary p-4">

              <Image
                src="/assets/hero1.png"
                alt="Chinese Teacher"
                width={700}
                height={850}
                priority
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />

              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-secondary bg-background/90 p-5 backdrop-blur">

              

               

                <div className="mt-3 flex items-center justify-between text-sm">

                  <span className="text-text/70">

                    Learning Progress

                  </span>

                  <span className="font-semibold text-primary">

                    Beginner Friendly

                  </span>

                </div>

              </div>

            </div>

          </div>
  {/* ================= LEFT ================= */}

          <div>

            {/* Badge */}

            <Link
              href="/community"
              className="inline-flex items-center gap-2 rounded-full border border-secondary px-4 py-2 text-sm font-semibold text-primary transition hover:opacity-90"
            >
              <Globe size={18} />

              {hero.title.badge}
            </Link>

            {/* Heading */}

            <h1 className="mt-8 text-4xl font-black leading-tight md:text-5xl xl:text-6xl">

              {hero.title.line1}

              <span className="block text-primary">
                {hero.title.line2}
              </span>

              <span className="block">
                {hero.title.line3}
              </span>

              <span className="mt-2 block text-primary">
                {hero.title.line4}
              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-text/80">

              {hero.description}

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/community"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 font-semibold text-background transition hover:scale-[1.02]"
              >
                <Users size={20} />

                {hero.buttons.whatsapp}

              </Link>

              <Link
                href="/pdf"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-secondary bg-background px-8 py-4 font-semibold transition hover:bg-secondary"
              >
                <BookOpen size={20} />

                {hero.buttons.resources}

                <ArrowRight size={18} />

              </Link>

            </div>

        

          </div>
        </div>

      </div>
    </section>
  );
}