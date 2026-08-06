// src/components/community/CommunityPage.tsx
"use client";

import {
  Users,
  Award,
  Shield,
  Crown,
  Phone,
  MessageCircle,
  UsersRound,
  Briefcase,
  Clock,
  BadgeCheck,
  Sparkles,
  Layers,
  ExternalLink,
} from "lucide-react";
import { communityData } from "../data/communityData";
import { useLanguage } from "../context/LanguageContext";

// ============================================
// COMMUNITY DATA
// ============================================

export const community = {
  en: {
    header: {
      badge: "Community Leaders",
      title: "Community Admins",
      subtitle: "Leading our community with passion and dedication.",
    },
    founder: {
      role: "Founder & Lead Admin",
      manages: "All Community Groups",
    },
    coAdmins: [
      {
        role: "Co-Admin",
        manages: "Chinese Learning Groups",
      },
    ],
    management: {
      title: "Management Team",
      subtitle: "Working behind the scenes to keep everything organized.",
      manager: "Manager",
      items: [
        {
          manages: "General Support & Queries",
        },
      ],
    },
    teachers: {
      title: "Our Teachers",
      subtitle: "Experienced mentors who guide your learning journey.",
      items: [
        {
          subject: "Chinese Language",
          group: "5pm Class Group",
          schedule: "Mon, Wed • 7:00 PM",
        },
      ],
    },
  },
  bn: {
    header: {
      badge: "কমিউনিটি নেতৃত্ব",
      title: "কমিউনিটি অ্যাডমিন",
      subtitle: "ভালোবাসা ও আন্তরিকতার সাথে কমিউনিটি পরিচালনা করছি।",
    },
    founder: {
      role: "প্রতিষ্ঠাতা ও প্রধান অ্যাডমিন",
      manages: "সকল কমিউনিটি গ্রুপ",
    },
    coAdmins: [
      {
        role: "সহকারী অ্যাডমিন",
        manages: "ওয়েব ডেভেলপমেন্ট ও প্রোগ্রামিং গ্রুপ",
      },
    ],
    management: {
      title: "ম্যানেজমেন্ট টিম",
      subtitle: "কমিউনিটির সার্বিক কার্যক্রম পরিচালনা করেন।",
      manager: "ম্যানেজার",
      items: [
        {
          manages: "সাধারণ সহায়তা ও প্রশ্ন",
        },
      ],
    },
    teachers: {
      title: "আমাদের শিক্ষকবৃন্দ",
      subtitle: "অভিজ্ঞ শিক্ষকরা আপনাকে শেখাবেন।",
      items: [
        {
          subject: "চীনা ভাষা",
          group: "৫টার ক্লাস গ্রুপ",
          schedule: "সোম, বুধ • রাত ৮টা",
        },
      ],
    },
  },
};

// Helper function to format WhatsApp number
const formatWhatsApp = (number: string) => {
  if (number.startsWith("880")) {
    return `+${number.slice(0, 4)} ${number.slice(4, 8)}-${number.slice(8)}`;
  }
  return number;
};

// ============================================
// HOOKS
// ============================================

const useTranslation = () => {
  const { language } = useLanguage();
  return (bn: string, en: string) => language === "bn" ? bn : en;
};

// ============================================
// COMPONENTS
// ============================================

interface MemberCardProps {
  name: string;
  role: string;
  image: string;
  whatsapp: string;
  manages?: string;
  subject?: string;
  group?: string;
  schedule?: string;
  icon: any;
}

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  role,
  image,
  whatsapp,
  manages,
  subject,
  group,
  schedule,
  icon: Icon,
}) => {
  const t = useTranslation();

  // All colors now use primary (red) theme
  const colors = {
    bg: "bg-primary/10 dark:bg-primary/20",
    border: "border-primary/20 dark:border-primary/30",
    text: "text-primary dark:text-primary",
    badge: "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary",
  };

  return (
    <div className="group rounded-xl border border-secondary bg-background p-5 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1">
      {/* Header with Icon & Role */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`rounded-lg p-2.5 ${colors.bg}`}>
          <Icon className={`h-5 w-5 ${colors.text}`} />
        </div>
        <div>
          <h4 className="font-semibold text-text">{name}</h4>
          <span className={`text-xs font-medium ${colors.text}`}>{role}</span>
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt={name}
          className="h-20 w-20 rounded-full border-2 border-secondary object-cover transition-all group-hover:border-primary"
        />
      </div>

      {/* Info Section - SAME for everyone */}
      <div className="text-center mb-3 min-h-[40px]">
        {subject && (
          <>
            <p className="text-sm font-medium text-text">{subject}</p>
            {group && <p className="text-xs text-text/50">{group}</p>}
          </>
        )}
        {manages && (
          <p className="text-sm text-text/70">{t("ম্যানেজ করে", "Manages")}: {manages}</p>
        )}
        {!subject && !manages && (
          <p className="text-sm text-text/50">{role}</p>
        )}
      </div>

      {/* Schedule - SAME position for everyone */}
      {schedule && (
        <div className="flex items-center justify-center gap-2 text-xs text-text/50 mb-3">
          <Clock className="h-3 w-3" />
          <span>{schedule}</span>
        </div>
      )}

      {/* WhatsApp Card - SAME for everyone */}
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`block rounded-lg border p-3 transition-all hover:shadow-md ${colors.border} hover:border-primary`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`rounded-lg p-1.5 ${colors.bg}`}>
              <MessageCircle className={`h-3.5 w-3.5 ${colors.text}`} />
            </div>
            <div>
              <p className="text-xs font-medium text-text">WhatsApp</p>
              <p className="text-[10px] text-text/50">{formatWhatsApp(whatsapp)}</p>
            </div>
          </div>
          <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${colors.badge}`}>
            {t("অ্যাকটিভ", "Active")}
          </span>
        </div>
      </a>
    </div>
  );
};

// ============================================
// SECTION HEADER COMPONENT
// ============================================

interface SectionHeaderProps {
  icon: any;
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon: Icon, title, subtitle }) => {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className={`rounded-lg p-2 bg-primary/10 text-primary dark:bg-primary/20`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-text">{title}</h2>
        <p className="text-sm text-text/50">{subtitle}</p>
      </div>
    </div>
  );
};

// ============================================
// MEMBER SECTION COMPONENT
// ============================================

interface MemberSectionProps {
  members: any[];
  title: string;
  subtitle: string;
  icon: any;
  type: "management" | "teachers";
  lang: any;
}

const MemberSection: React.FC<MemberSectionProps> = ({
  members,
  title,
  subtitle,
  icon,
  type,
  lang,
}) => {
  const t = useTranslation();

  return (
    <section className="border-t border-secondary bg-secondary/5 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          icon={icon}
          title={title}
          subtitle={subtitle}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, idx) => {
            const Icon = member.icon;

            if (type === "teachers") {
              return (
                <MemberCard
                  key={idx}
                  name={member.name}
                  role={t("শিক্ষক", "Teacher")}
                  image={member.image}
                  whatsapp={member.whatsapp}
                  icon={Icon}
                  subject={lang.teachers.items[idx]?.subject}
                  group={lang.teachers.items[idx]?.group}
                  schedule={lang.teachers.items[idx]?.schedule}
                />
              );
            } else {
              // Management
              return (
                <MemberCard
                  key={idx}
                  name={member.name}
                  role={lang.management.manager}
                  image={member.image}
                  whatsapp={member.whatsapp}
                  manages={lang.management.items[0]?.manages}
                  icon={Briefcase}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

export default function CommunityPage() {
  const { language } = useLanguage();
  const t = useTranslation();
  const lang = community[language as "en" | "bn"];

  return (
    <div className="min-h-screen bg-background text-text">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-primary py-16 sm:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 h-72 w-72 rounded-full bg-background mix-blend-multiply blur-xl animate-pulse" />
          <div className="absolute bottom-0 -right-4 h-72 w-72 rounded-full bg-background/50 mix-blend-multiply blur-xl animate-pulse delay-1000" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-background/20 px-4 py-1.5 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium text-background">
              {lang.header.badge}
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-background sm:text-4xl md:text-5xl">
            👥 {lang.header.title}
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-base text-background/80 sm:text-lg">
            {lang.header.subtitle}
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="relative z-10 mx-auto max-w-7xl -mt-6 px-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { value: "1", label: t("প্রতিষ্ঠাতা", "Founder") },
            { value: "2", label: t("সহ-অ্যাডমিন", "Co-Admins") },
            { value: "3", label: t("ম্যানেজার", "Managers") },
            { value: "5", label: t("শিক্ষক", "Teachers") },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-secondary bg-background p-4 text-center shadow-sm"
            >
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-text/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Founder & Co-Admins Section */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Founder */}
          <MemberCard
            name={communityData.founder.name}
            role={lang.founder.role}
            image={communityData.founder.image}
            whatsapp={communityData.founder.whatsapp}
            manages={lang.founder.manages}
            icon={Crown}
          />

          {/* Co-Admins */}
          {communityData.coAdmins.map((admin, idx) => (
            <MemberCard
              key={idx}
              name={admin.name}
              role={lang.coAdmins[idx].role}
              image={admin.image}
              whatsapp={admin.whatsapp}
              manages={lang.coAdmins[idx].manages}
              icon={Shield}
            />
          ))}
        </div>
      </section>

      {/* Management Team */}
      <MemberSection
        members={communityData.managers}
        title={lang.management.title}
        subtitle={lang.management.subtitle}
        icon={Users}
        type="management"
        lang={lang}
      />

      {/* Teachers Section */}
      <MemberSection
        members={communityData.teachers}
        title={lang.teachers.title}
        subtitle={lang.teachers.subtitle}
        icon={Award}
        type="teachers"
        lang={lang}
      />
    </div>
  );
}