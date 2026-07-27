// app/pinyin-start/page.tsx
"use client"
import Image from "next/image";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Pinyin = () => {
      const { language } = useLanguage();
  
  const t = (bn: string, en: string) =>
    language === "bn" ? bn : en;
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-purple-50/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* ===== HEADER ===== */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-200 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {t("🎯 ধাপ ১: পিনইন উচ্চারণ", "🎯 STEP 1: PINYIN PRONUNCIATION")}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            {t("সঠিকভাবে পিনইন শিখুন ও উচ্চারণ করুন", "Learn & Pronounce Pinyin Correctly")}
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            {t(
  "ভিডিওগুলো দেখুন, উচ্চারণ অনুশীলন করুন, তারপর আপনার কণ্ঠ রেকর্ড করে আমাদের WhatsApp গ্রুপে পাঠান।",
  "Watch the videos, practice the sounds, then record your voice and send it to our WhatsApp group."
)}
          </p>
        </div>

        {/* ===== PINYIN IMAGE ===== */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-10">
          <div className="relative w-full aspect-video">
            <Image
              src="/assets/pinyin.png"
              alt={t("পিনইন উচ্চারণ চার্ট", "Pinyin Pronunciation Chart")}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          </div>
          <div className="bg-linear-to-r from-purple-50 to-blue-50 px-6 py-3 text-center border-t border-gray-100">
            <p className="text-sm text-gray-600">
              {t(
  "🎯 কণ্ঠ রেকর্ড করার আগে এই পিনইন চার্টটি ভালোভাবে অধ্যয়ন করুন",
  "🎯 Study this Pinyin chart carefully before recording your voice"
)}
            </p>
          </div>
        </div>

        {/* ===== 3 SIMPLE STEPS ===== */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            {t("এই ৩টি সহজ ধাপ অনুসরণ করুন", "Follow These 3 Simple Steps")}
          </h2>
          
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex items-start gap-4 bg-blue-50 rounded-2xl p-4 border border-blue-100">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{t("📺 উচ্চারণের ভিডিও দেখুন", "📺 Watch Pronunciation Videos")}</h3>
                <p className="text-sm text-gray-600">{t(
  "Google Drive থেকে সব পিনইন ভিডিও ডাউনলোড করে দেখুন",
  "Download and watch all Pinyin videos from Google Drive"
)}</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4 bg-purple-50 rounded-2xl p-4 border border-purple-100">
              <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{t("🎤 অনুশীলন করুন ও রেকর্ড করুন", "🎤 Practice & Record")}</h3>
                <p className="text-sm text-gray-600">{t(
  "সব পিনইন সঠিকভাবে অনুশীলন করুন, তারপর আপনার কণ্ঠ রেকর্ড করুন",
  "Practice all Pinyin sounds clearly, then record your voice"
)}</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4 bg-emerald-50 rounded-2xl p-4 border border-emerald-100">
              <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{t("💬 ভয়েস মেসেজ পাঠান", "💬 Send Voice Message")}</h3>
                <p className="text-sm text-gray-600">{t(
  "আপনার রেকর্ড করা ভয়েস মেসেজ আমাদের WhatsApp গ্রুপে পাঠান",
  "Send your recorded voice message to our WhatsApp group"
)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== ACTION BUTTONS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Google Drive Button */}
          <a
            href="https://drive.google.com/drive/folders/12fEKjDBRU5NgnpgE4WluoRMer94LIkaQ"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl p-6 text-center transition shadow-lg shadow-blue-200"
          >
            <div className="text-4xl mb-2">📁</div>
            <h3 className="font-bold text-lg">{t("ভিডিও ডাউনলোড করুন", "Download Videos")}</h3>
            <p className="text-blue-100 text-sm mt-1">{t(
  "সব পিনইন উচ্চারণের ভিডিও দেখুন",
  "Watch all Pinyin pronunciation videos"
)}</p>
            <div className="mt-3 text-sm font-medium text-blue-200 group-hover:text-white transition">
              {t("Google Drive খুলুন →", "Open Google Drive →")}
            </div>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://chat.whatsapp.com/EBP79wEaAfAEvMtMee6HTY"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-linear-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white rounded-2xl p-6 text-center transition shadow-lg shadow-emerald-200"
          >
            <div className="text-4xl mb-2">💬</div>
            <h3 className="font-bold text-lg">{t("WhatsApp গ্রুপে যোগ দিন", "Join WhatsApp Group")}</h3>
            <p className="text-emerald-100 text-sm mt-1">{t(
  "এখানে আপনার ভয়েস মেসেজ পাঠান",
  "Send your voice message here"
)}</p>
            <div className="mt-3 text-sm font-medium text-emerald-200 group-hover:text-white transition">
              {t("গ্রুপে যোগ দিন →", "Join Group →")}
            </div>
          </a>
        </div>

        {/* ===== IMPORTANT NOTE ===== */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3">
          <span className="text-2xl shrink-0">⚠️</span>
          <div>
            <p className="font-semibold text-amber-800">{t("গুরুত্বপূর্ণ:", "Important:")}</p>
            <p className="text-sm text-amber-700">
              {t(
  "ভিডিওগুলো দেখার ও অনুশীলনের পর পরিষ্কারভাবে আপনার কণ্ঠ রেকর্ড করুন এবং WhatsApp গ্রুপে পাঠান। আমাদের টিম আপনার উচ্চারণ যাচাই করবে।",
  "After watching the videos and practicing, record your voice clearly and send it to the WhatsApp group. Our team will verify your pronunciation."
)}
            </p>
          </div>
        </div>

        {/* ===== FOOTER ===== */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            {t(
  "❤️ কাজী রবিনের সাথে চাইনিজ শিখুন — পিনইন আয়ত্ত করুন, আত্মবিশ্বাসের সাথে কথা বলুন",
  "❤️ Learn Chinese with Kazi Robin — Master Pinyin, Speak Confidently"
)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pinyin;