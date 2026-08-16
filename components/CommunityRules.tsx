"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Rule, rulesData } from "@/data/rulesData"; // ফাইলের নামের বানান চেক করুন

const CommunityRules: React.FC = () => {
  const { language } = useLanguage();

  const t = (bn: string, en: string) => (language === "bn" ? bn : en);

  return (
    <section className="relative overflow-hidden py-16 px-4 md:px-8 bg-background text-text transition-colors duration-300">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
            {t("কমিউনিটি গাইডলাইন", "Community Guidelines")}
          </span>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            {t("আমাদের কমিউনিটি", "Our Community")}{" "}
            <span className="text-primary">
              {t("নিয়মাবলী", "Rules")}
            </span>
          </h2>
          
          <p className="text-text/70 text-sm md:text-base leading-relaxed">
            {t(
              "একটি সুন্দর ও ফলপ্রসূ শিক্ষার পরিবেশ বজায় রাখতে নিচের নিয়মগুলো মেনে চলার জন্য অনুরোধ করা হলো।",
              "Please adhere to the following rules to maintain a productive and respectful learning environment."
            )}
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rulesData.map((rule: Rule) => (
            <div
              key={rule.id}
              className="group relative p-6 rounded-2xl bg-text/5 border border-text/10 hover:border-primary/40 hover:bg-text/10 transition-all duration-300 flex flex-col justify-between shadow-sm backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                    {t(rule.tagBn, rule.tagEn)}
                  </span>
                  <span className="text-sm font-mono text-text/40 group-hover:text-primary transition-colors">
                    #{String(rule.id).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors mb-2">
                  {t(rule.titleBn, rule.titleEn)}
                </h3>

                <p className="text-text/70 text-sm leading-relaxed">
                  {t(rule.descBn, rule.descEn)}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-text/10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                <span className="text-xs text-text/50 group-hover:text-text/80 transition-colors">
                  {t("মেনে চলা বাধ্যতামূলক", "Strictly Mandatory")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Notice Card */}
        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 text-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-text text-sm md:text-base">
                {t("নিয়ম লঙ্ঘনের ক্ষেত্রে ব্যবস্থা", "Action on Rule Violation")}
              </p>
              <p className="text-xs md:text-sm text-text/70">
                {t(
                  "বারবার নিয়ম ভঙ্গ করলে কমিউনিটি এবং ফ্রি ক্লাস থেকে স্থায়ীভাবে রিমুভ করা হতে পারে।",
                  "Repeated violations may lead to a permanent ban from the group and live classes."
                )}
              </p>
            </div>
          </div>
          <button className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-text/5 hover:bg-text/10 border border-text/10 text-xs font-semibold text-text transition-all">
             <a
                      href="https://wa.me/8801787881334"
                      target="_blank"
                      rel="noopener noreferrer"
                     
                    >
                
            {t("সহায়তা প্রয়োজন?", "Need Help?")}
                    </a>
          </button>
        </div>

      </div>
    </section>
  );
};

export default CommunityRules;