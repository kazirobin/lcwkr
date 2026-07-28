"use client"
import {
  MessageCircleMore,
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
} from "lucide-react";
import { communityData } from "../data/communityData";
import { community } from "../data/language/components/community";
import { useLanguage } from "../context/LanguageContext";

// ============================================
// ALL DATA AT THE TOP - EDIT HERE ONLY
// ============================================


// Helper function to format WhatsApp number for display
const formatWhatsApp = (number: string) => {
  if (number.startsWith("880")) {
    return `+${number.slice(0, 4)} ${number.slice(4, 8)}-${number.slice(8)}`;
  }
  return number;
};



export function CommunityPage() {
  const { language } = useLanguage();

const t = community[language as "en" | "bn"];
  return (
    <>
      {/* Main Community Section - No Background */}
      <div className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 border border-gray-200 px-4 sm:px-6 py-2 rounded-full mb-6">
              <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
              <span className="text-xs sm:text-sm font-medium text-gray-600">
                {t.header.badge}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900">
              {t.header.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              {t.header.subtitle}
            </p>
          </div>

          {/* Founder & Co-Admins */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Founder */}
              <div className="md:col-span-1 border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-yellow-50 rounded-xl">
                    <Crown className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-600">
                      {t.founder.role}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4 mb-4">
                  <img
                    src={communityData.founder.image}
                    alt={communityData.founder.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-yellow-300"
                  />
                  <div className="text-center">
                    <p className="text-xl font-semibold text-gray-900">
                      {communityData.founder.name}
                    </p>
                    <span className="text-sm text-yellow-600">✦ Lead Admin</span>
                  </div>
                </div>
                {/* WhatsApp Card */}
                <div className="mt-4 border border-green-200 rounded-xl p-4 hover:border-green-300 transition-all duration-300">
                  <a
                    href={`https://wa.me/${communityData.founder.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-50 rounded-lg">
                          <MessageCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">WhatsApp</p>
                          <p className="text-xs text-gray-500">
                            {formatWhatsApp(communityData.founder.whatsapp)}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        Active
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                      <UsersRound className="w-3 h-3" />
                      <span>Manages: {t.founder.manages}</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Co-Admins */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {communityData.coAdmins.map((admin, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                     <img
                    src={admin.image}
                    alt={communityData.founder.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-yellow-300 mx-auto"
                  />
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-50 rounded-xl">
                        <Shield className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900">{admin.name}</p>
                        <span className="text-sm text-gray-500"> {t.coAdmins[idx].role}</span>
                      </div>
                    </div>
                    {/* WhatsApp Card */}
                    <div className="border border-blue-200 rounded-xl p-4 hover:border-blue-300 transition-all duration-300">
                      <a
                        href={`https://wa.me/${admin.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-50 rounded-lg">
                              <MessageCircle className="w-4 h-4 text-blue-500" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-700">WhatsApp</p>
                              <p className="text-xs text-gray-500">
                                {formatWhatsApp(admin.whatsapp)}
                              </p>
                            </div>
                          </div>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                            Active
                          </span>
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                          <UsersRound className="w-3 h-3" />
                          <span>Manages:  {t.coAdmins[idx].manages}</span>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Management Team */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-50 rounded-lg">
                <Users className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {t.management.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                 {t.management.subtitle}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {communityData.managers.map((manager, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center gap-3 mb-3">
                    <img
                      src={manager.image}
                      alt={manager.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-900">{manager.name}</p>
                      <span className="text-xs text-emerald-600">Manager</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-3">
                    <Briefcase className="w-3 h-3 text-emerald-600" />
                    <span>{manager.role}</span>
                  </div>
                  {/* WhatsApp Card */}
                  <div className="border border-emerald-200 rounded-lg p-3 hover:border-emerald-300 transition-all duration-300">
                    <a
                      href={`https://wa.me/${manager.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="flex-col items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Phone className="w-3 h-3 text-emerald-600" />
                          <span className="text-xs text-gray-600">
                            {formatWhatsApp(manager.whatsapp)}
                          </span>
                        </div>
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                          Active
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Teachers Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-pink-50 rounded-lg">
                <Award className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{t.teachers.title}</h2>
                <p className="text-sm text-gray-500 mt-1">
                  {t.teachers.subtitle}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
              {communityData.teachers.map((teacher, idx) => {
                const colorMap: Record<string, string> = {
                  blue: "blue",
                  pink: "pink",
                  purple: "purple",
                  orange: "orange",
                  green: "green",
                };
                const color = colorMap[teacher.color] || "gray";
                return (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 bg-${color}-50 rounded-lg`}>
                        <teacher.icon className={`w-5 h-5 text-${color}-500`} />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-gray-500">
                           {t.teachers.items[idx].subject}
                        </span>
                        <div className="flex items-center gap-1">
                          <BadgeCheck className="w-3 h-3 text-blue-500" />
                          <span className="text-xs text-blue-600">Verified Mentor</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-3 mb-3">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className={`w-16 h-16 rounded-full object-cover border-2 border-${color}-200`}
                      />
                      <div className="text-center">
                        <p className="text-sm font-semibold text-gray-900">{teacher.name}</p>
                        <span className="text-xs text-gray-500">Teacher</span>
                      </div>
                    </div>
                    {/* WhatsApp & Group Details */}
                    <div className="space-y-2">
                      <div
                        className={`border border-${color}-200 rounded-lg p-3 hover:border-${color}-300 transition-all duration-300`}
                      >
                        <a
                          href={`https://wa.me/${teacher.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="flex-col items-center justify-between">
                            <div className="flex items-center gap-2">
                              <MessageCircle className={`w-3 h-3 text-${color}-500`} />
                              <span className="text-xs text-gray-600">
                                {formatWhatsApp(teacher.whatsapp)}
                              </span>
                            </div>
                            <span
                              className={`text-xs bg-${color}-100 text-${color}-700 px-2 py-0.5 rounded-full`}
                            >
                              Active
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <UsersRound className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-600">{t.teachers.items[idx].group}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span>{t.teachers.items[idx].schedule}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    
    </>
  );
}

export default CommunityPage;