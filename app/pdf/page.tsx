// src/components/hsk/PDF.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Headphones,
  FileText,
  ClipboardList,
  Library,
  Download,
  Sparkles,
  ChevronRight,
  Layers,
  Zap,
  Globe,
  Users,
  Award,
  CheckCircle,
  ExternalLink,
  FolderOpen,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// ============================================
// ALL DATA FROM hskData.ts
// ============================================

export interface HSKLevel {
  id: string;
  level: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: string;
  resources: {
    books: boolean;
    audio: boolean;
    mockTest: boolean;
    vocabulary: boolean;
  };
  driveLinks?: {
    books?: string;
    audio?: string;
    mockTest?: string;
    vocabulary?: string;
  };
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export const hskLevels: HSKLevel[] = [
  {
    id: "hsk-1",
    level: "HSK Level 1",
    title: "Beginner",
    description: "Start your Chinese journey with basic vocabulary and simple sentences.",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    icon: "🌱",
    resources: {
      books: true,
      audio: true,
      mockTest: true,
      vocabulary: true,
    },
    driveLinks: {
      books: "https://drive.google.com/drive/folders/1GFvFiWDtFa5blOe26a-kKOwCACGY_eCK?usp=drive_link",
      audio: "https://drive.google.com/drive/folders/1X8bv142wtkENNHZWd30c5t1Dvrl6NeQU?usp=drive_link",
      mockTest: "https://drive.google.com/drive/folders/1s7SXAqakvPpEKHnZP3-TC9F4NTjR10vu?usp=drive_link",
      vocabulary: "https://drive.google.com/file/d/1k6gwM5t4PwwW7Cc-mlHfC6oCt0oXqlQt/view?usp=drive_link",
    },
  },
  {
    id: "hsk-2",
    level: "HSK Level 2",
    title: "Elementary",
    description: "Build your foundation with everyday conversations and basic grammar.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    icon: "📘",
    resources: {
      books: true,
      audio: true,
      mockTest: true,
      vocabulary: true,
    },
    driveLinks: {
      books: "https://drive.google.com/drive/folders/1uyTpWA-cpmc0oMv7mmdDd-Xy1yjoHBOa?usp=drive_link",
      audio: "https://drive.google.com/drive/folders/1F-hJc2XVYcp6diXP7tuQnf4uFfPBNMH9?usp=drive_link",
      mockTest: "https://drive.google.com/drive/folders/1W78AO00XWiwslWvOZHHK-fu_dtqMGA26?usp=drive_link",
      vocabulary: "https://drive.google.com/file/d/1GVndWJG1bY9M_mqh1XhkQqGXijnxO2YO/view?usp=drive_link",
    },
  },
  {
    id: "hsk-3",
    level: "HSK Level 3",
    title: "Pre-Intermediate",
    description: "Communicate confidently in daily life and work situations.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    icon: "📗",
    resources: {
      books: true,
      audio: true,
      mockTest: true,
      vocabulary: true,
    },
    driveLinks: {
      books: "https://drive.google.com/drive/folders/1_OXK_Iuee5iuryPMDR76Ea8hiOHVux25?usp=drive_link",
      audio: "https://drive.google.com/drive/folders/1Sp9QQtlfdEc37uSgVTQYyhS8cQ7dBoGu?usp=drive_link",
      mockTest: "https://drive.google.com/drive/folders/1sUz0twM8nkmP3z6ENb0K8Pt_l2-85KlJ?usp=drive_link",
      vocabulary: "https://drive.google.com/file/d/1TCFTv128jQMbGI9NZUNUD1sJXWUX9ibv/view?usp=drive_link",
    },
  },
  {
    id: "hsk-4",
    level: "HSK Level 4",
    title: "Intermediate",
    description: "Express complex ideas and understand native-level content.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    icon: "📕",
    resources: {
      books: true,
      audio: true,
      mockTest: true,
      vocabulary: true,
    },
    driveLinks: {
      books: "https://drive.google.com/drive/folders/1J3Dr7JFql5IKQxcBMeSu2YmizQ8HVihg?usp=drive_link",
      audio: "https://drive.google.com/drive/folders/17thaoXjYhT-SCuuaLN-WUqLWVgrO2jjV?usp=drive_link",
      mockTest: "https://drive.google.com/drive/folders/1uqPrzOaGjo0jeJghSD1BOH0ZGNENB9mv?usp=drive_link",
      vocabulary: "https://drive.google.com/file/d/1Q8uDOg2i88CQoQWq-wcvPB-Eyor2gjb9/view?usp=drive_link",
    },
  },
  {
    id: "hsk-5",
    level: "HSK Level 5",
    title: "Advanced",
    description: "Master advanced vocabulary and tackle complex reading materials.",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    icon: "📙",
    resources: {
      books: true,
      audio: true,
      mockTest: true,
      vocabulary: true,
    },
    driveLinks: {
      books: "https://drive.google.com/drive/folders/16FImlIM8fd_Cx76xxQGVqyCMhEGpUAEk?usp=drive_link",
      audio: "https://drive.google.com/drive/folders/1qKG7mGdM-CKdSMxKGwWpS3GEiAFvhb_p?usp=drive_link",
      mockTest: "https://drive.google.com/drive/folders/1uoLtBYNROdAcmJzSIfho-0B2a7EV7Nm1?usp=drive_link",
      vocabulary: "https://drive.google.com/file/d/1M3VYLjf7sEolzoIaNjbhXOotl3Dmb2bC/view?usp=drive_link",
    },
  },
  {
    id: "hsk-6",
    level: "HSK Level 6",
    title: "Proficient",
    description: "Achieve professional-level Chinese proficiency and fluency.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    icon: "📚",
    resources: {
      books: true,
      audio: true,
      mockTest: true,
      vocabulary: true,
    },
    driveLinks: {
      books: "https://drive.google.com/drive/folders/18sx8UmwzK93fZea7l28wI_PJFRFaNaEr?usp=drive_link",
      audio: "https://drive.google.com/drive/folders/1zUQ45S_XeUHWUVglTrzR5B9rxksAeiaQ?usp=drive_link",
      mockTest: "https://drive.google.com/drive/folders/1hWlp_SAcMyNPr2zDT5KVbg9YFxay_fHE?usp=drive_link",
      vocabulary: "https://drive.google.com/file/d/1LziYNVQzFa7YQMUqEP_7-XW2j9gZ8HZl/view?usp=drive_link",
    },
  },
];

export const allResources: ResourceItem[] = [
  {
    id: "all-books",
    title: "All Resources",
    description: "Get full resources",
    icon: "📖",
    link: "https://drive.google.com/drive/folders/13EV97xZHlKU-uUeHElDnHuBu5sCIJj0m?usp=drive_link",
  },
];

// ============================================
// INLINE COMPONENTS
// ============================================

// Resource link item component
const ResourceLink = ({ 
  label, 
  icon: Icon, 
  link, 
  available 
}: { 
  label: string; 
  icon: any; 
  link?: string; 
  available: boolean;
}) => {
  if (!available || !link) return null;
  
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between p-2.5 bg-slate-50 hover:bg-slate-100 rounded-lg transition-all group/link"
    >
      <div className="flex items-center gap-2.5">
        <Icon className="w-4 h-4 text-slate-600" />
        <span className="text-sm text-slate-700">{label}</span>
      </div>
      <ExternalLink className="w-4 h-4 text-slate-400 group-hover/link:text-slate-600" />
    </a>
  );
};

// HSK Level Card
const HSKLevelCard = ({ level }: { level: HSKLevel }) => {
  // Extract color without 'text-' prefix for bg and border
  const colorClass = level.color.replace('text-', '');
  
  return (
    <div className={`group bg-white rounded-2xl border ${level.borderColor} overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
      <div className={`h-1.5 ${level.color.replace('text', 'bg')}`}></div>
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2.5 ${level.bgColor} rounded-xl text-2xl`}>
            {level.icon}
          </div>
          <div>
            <span className={`text-xs font-bold ${level.color} ${level.bgColor} px-2.5 py-1 rounded-full`}>
              {level.level}
            </span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-1">{level.title}</h3>
        <p className="text-sm text-slate-500 mb-4">{level.description}</p>
        
        {/* Resource Links */}
        <div className="space-y-2 mb-4">
          <ResourceLink 
            label="Textbook & Books" 
            icon={BookOpen} 
            link={level.driveLinks?.books} 
            available={level.resources.books} 
          />
          <ResourceLink 
            label="Audio Files" 
            icon={Headphones} 
            link={level.driveLinks?.audio} 
            available={level.resources.audio} 
          />
          <ResourceLink 
            label="Mock Tests" 
            icon={ClipboardList} 
            link={level.driveLinks?.mockTest} 
            available={level.resources.mockTest} 
          />
          <ResourceLink 
            label="Vocabulary List" 
            icon={FileText} 
            link={level.driveLinks?.vocabulary} 
            available={level.resources.vocabulary} 
          />
        </div>
        
        {/* Download All Button - uses the first available drive link or a generic folder */}
        <a
          href={level.driveLinks?.books || level.driveLinks?.audio || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-all"
        >
          <Download className="w-4 h-4" />
          Download All Materials
        </a>
      </div>
    </div>
  );
};

// All Resources Card
const AllResourcesCard = ({ resource }: { resource: ResourceItem }) => {
  return (
    <a
      href={resource.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      <div className="text-5xl mb-4">{resource.icon}</div>
      <h3 className="text-lg font-bold text-slate-800">{resource.title}</h3>
      <p className="text-sm text-slate-500 mt-1">{resource.description}</p>
      <div className="flex items-center justify-center gap-1.5 mt-3 text-sm text-indigo-600 font-medium">
        <span>Access Now</span>
        <ExternalLink className="w-4 h-4" />
      </div>
    </a>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

export default function PDF() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const filteredLevels = selectedLevel
    ? hskLevels.filter((level) => level.id === selectedLevel)
    : hskLevels;
    const { language } = useLanguage();

const t = (bn: string, en: string) =>
  language === "bn" ? bn : en;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-r from-blue-600 to-indigo-700 text-white py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              HSK
              {t(" রিসোর্স হাব", " Resource Hub")}
              </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            📚 
            {t("HSK বই ও সকল স্টাডি ম্যাটেরিয়াল", "HSK Books & All Materials")}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            
            {t("সহজেই চাইনিজ শেখার সব রিসোর্স খুঁজুন ও ডাউনলোড করুন", "Find, Download & Learn Chinese Easily")}
          </p>

          {/* Level Selector Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setSelectedLevel(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !selectedLevel
                  ? "bg-white text-blue-600 shadow-lg"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              
              {t("সব লেভেল", "All Levels")}
            </button>
            {hskLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedLevel === level.id
                    ? "bg-white text-blue-600 shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {level.icon} {level.level.replace('HSK Level ', 'HSK ')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 md:p-10 border border-blue-100">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Award className="w-8 h-8 text-indigo-600" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800">
              🎯
              {t("HSK রিসোর্স হাবে আপনাকে স্বাগতম!", " Welcome to HSK Resource Hub!")}
            </h2>
          </div>
          <p className="text-slate-600 text-center max-w-3xl mx-auto">
            
            {t("এখানে আপনি সকল HSK লেভেলের বই এবং সম্পূর্ণ শেখার রিসোর্স পাবেন। আপনার পছন্দের লেভেল নির্বাচন করে PDF, Audio, Mock Test, Vocabulary এবং অন্যান্য ফাইল Google Drive থেকে ডাউনলোড করুন।", `Here you will find all HSK level books and complete learning materials.
            Choose your preferred level and download PDF, audio, mock test, vocabulary
            and more from Google Drive.`)}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <span className="inline-flex items-center gap-1.5 text-xs bg-white px-3 py-1.5 rounded-full border border-slate-200">
              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
              
              {t("৬টি HSK লেভেল", "6 HSK Levels")}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs bg-white px-3 py-1.5 rounded-full border border-slate-200">
              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
              PDF
              {t(" বই", " Books")}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs bg-white px-3 py-1.5 rounded-full border border-slate-200">
              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
              
              {t("অডিও ফাইল", "Audio Files")}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs bg-white px-3 py-1.5 rounded-full border border-slate-200">
              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
              
              {t("মক টেস্ট", "Mock Tests")}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs bg-white px-3 py-1.5 rounded-full border border-slate-200">
              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
              
              {t("ভোকাবুলারি", "Vocabulary")}
            </span>
          </div>
        </div>
      </section>

      {/* HSK Levels Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="p-2 bg-indigo-50 rounded-lg">
            <Layers className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
              📖 HSK
              {t(" বই ও স্টাডি ম্যাটেরিয়াল", " Books & Materials")}
            </h2>
            <p className="text-sm text-slate-500 mt-0.5">
              {filteredLevels.length}
               
               {t(" টি লেভেল ", " level ")}
              {filteredLevels.length > 1 ? '' : ''} 
              {t(" পাওয়া যাচ্ছে ", " available")}
            </p> 
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredLevels.map((level) => (
            <HSKLevelCard key={level.id} level={level} />
          ))}
        </div>
      </section>

      {/* All-in-One Resources Section */}
      <section className="bg-slate-50 border-t border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="p-2 bg-emerald-50 rounded-lg">
              <FolderOpen className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
                📦 
                {t("সকল স্টাডি ম্যাটেরিয়াল একসাথে", "All-in-One Learning Materials")}
              </h2>
              <p className="text-sm text-slate-500 mt-0.5">
                
                {t("এক জায়গায় সকল HSK রিসোর্স", "Complete collection of HSK resources in one place")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {allResources.map((resource) => (
              <AllResourcesCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 text-center">
            <div className="text-3xl sm:text-4xl font-bold text-indigo-600">6</div>
            <div className="text-sm text-slate-500 mt-1">
              
              {t("HSK লেভেল", "HSK Levels")}
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 text-center">
            <div className="text-3xl sm:text-4xl font-bold text-emerald-600">24</div>
            <div className="text-sm text-slate-500 mt-1">
              
              {t("রিসোর্স", "Resources")}
              </div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 text-center">
            <div className="text-3xl sm:text-4xl font-bold text-purple-600">5000+</div>
            <div className="text-sm text-slate-500 mt-1">
              
              {t("ভোকাবুলারি", "Vocabulary")}
              </div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 text-center">
            <div className="text-3xl sm:text-4xl font-bold text-orange-600">100%</div>
            <div className="text-sm text-slate-500 mt-1">
              
              {t("ফ্রি অ্যাক্সেস", "Free Access")}
              </div>

          </div>
        </div>
      </section>

     
    </div>
  );
}