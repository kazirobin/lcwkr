"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Rule, rulesData } from "@/data/rulesData";
import {
  GraduationCap,
  Target,
  Calendar,
  BookOpen,
  Clock,
  FileCheck,
  Coffee,
  Headphones,
  Users,
  Award,
  Repeat,
  Flame,
  Clock3,
  Timer,
  DoorClosed,
  CheckCircle2,
  AlertOctagon,
  FileEdit,
  UserX,
  Zap,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  HelpCircle,
  LucideIcon,
} from "lucide-react";

// আইকন ম্যাপিং
const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Target,
  Calendar,
  BookOpen,
  Clock,
  FileCheck,
  Coffee,
  Headphones,
  Users,
  Award,
  Repeat,
  Flame,
  Clock3,
  Timer,
  DoorClosed,
  CheckCircle2,
  AlertOctagon,
  FileEdit,
  UserX,
  Zap,
  TrendingUp,
  Sparkles,
  ShieldCheck,
};

const CommunityRules: React.FC = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const t = (bn: string, en: string) => (language === "bn" ? bn : en);

  const categories = [
    { key: "all", bn: "সবগুলো", en: "All Rules" },
    { key: "overview", bn: "পরিচিতি", en: "Overview" },
    { key: "schedule", bn: "ক্লাস ও রুটিন", en: "Schedule" },
    { key: "chain_system", bn: "চেইন সিস্টেম", en: "Chain System" },
    { key: "rules", bn: "কঠোর নিয়মাবলী", en: "Squad Rules" },
    { key: "commitment", bn: "যোগদান ও লাভ", en: "Commitment" },
  ];

  const filteredRules =
    activeCategory === "all"
      ? rulesData
      : rulesData.filter((rule) => rule.category === activeCategory);

  return (
    <section className="relative overflow-hidden py-16 px-4 md:px-8 bg-background text-text transition-colors duration-300">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
            {t("🐉 ম্যান্ডারিন এলিট স্কোয়াড", "🐉 Mandarin Elite Squad")}
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            {t("কমিউনিটি ও স্টাডি", "Community & Study")}{" "}
            <span className="text-primary">{t("গাইডলাইন", "Guidelines")}</span>
          </h2>

          <p className="text-text/70 text-sm md:text-base leading-relaxed">
            {t(
              "সম্পূর্ণ বিনামূল্যে চীনা ভাষা শেখার এক অনন্য ও সুশৃঙ্খল প্ল্যাটফর্ম। একটি সুন্দর ও ফলপ্রসূ পরিবেশ বজায় রাখতে নিচের সকল নিয়ম অনুসরণ করুন।",
              "A structured and 100% free Chinese learning platform. Please follow all guidelines below to maintain an effective learning environment."
            )}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.key
                  ? "bg-primary text-white shadow-md shadow-primary/25 border border-primary"
                  : "bg-text/5 hover:bg-text/10 text-text/70 hover:text-text border border-text/10"
              }`}
            >
              {t(cat.bn, cat.en)}
            </button>
          ))}
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRules.map((rule: Rule) => {
            const IconComponent = iconMap[rule.icon] || HelpCircle;

            return (
              <div
                key={rule.id}
                className="group relative p-6 rounded-2xl bg-text/5 border border-text/10 hover:border-primary/40 hover:bg-text/10 transition-all duration-300 flex flex-col justify-between shadow-sm backdrop-blur-sm"
              >
                <div>
                  {/* Top Bar: Icon, Tag & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                        {t(rule.tagBn, rule.tagEn)}
                      </span>
                    </div>
                    <span className="text-sm font-mono text-text/40 group-hover:text-primary transition-colors">
                      #{String(rule.id).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors mb-2">
                    {t(rule.titleBn, rule.titleEn)}
                  </h3>

                  {/* Description */}
                  <p className="text-text/70 text-sm leading-relaxed">
                    {t(rule.descBn, rule.descEn)}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-4 border-t border-text/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    <span className="text-xs text-text/50 group-hover:text-text/80 transition-colors">
                      {rule.category === "rules"
                        ? t("কঠোরভাবে প্রযোজ্য", "Strictly Enforced")
                        : t("গুরুত্বপূর্ণ নির্দেশিকা", "Key Guideline")}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Notice Card */}
        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 text-primary">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-text text-sm md:text-base">
                {t(
                  "শৃঙ্খলা রক্ষা ও সহায়তা কেন্দ্র",
                  "Discipline & Support Desk"
                )}
              </p>
              <p className="text-xs md:text-sm text-text/70">
                {t(
                  "অনুমতি ছাড়া অনুপস্থিতি বা নিয়ম ভঙ্গ করলে জরিমানা ও স্থায়ী বহিষ্কার প্রযোজ্য হবে। যে কোনো সহায়তায় যোগাযোগ করুন।",
                  "Unexcused absences or breaking rules incur fines and squad dismissal. Contact us for any assistance."
                )}
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/8801787881334"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20 text-xs font-semibold transition-all inline-flex items-center gap-2"
          >
            <span>{t("যোগাযোগ করুন", "Need Help?")}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunityRules;
