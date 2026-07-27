import React from "react";
import {
  CalendarDays,
  CheckCircle2,
  MessageCircleMore,
  Users,
  Award,
  Shield,
  Star,
  Monitor,
  Palette,
  Code,
  Megaphone,
  PenTool,
  ChevronRight,
  Crown,
  UserCheck,
  Phone,
  MessageCircle,
  UsersRound,
  Briefcase,
  Calendar,
  Clock,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

// ============================================
// ALL DATA AT THE TOP - EDIT HERE ONLY
// ============================================
const communityData = {
  // Header
  header: {
    title: "CommunityAdmins",
    subtitle: "Leading our community with passion and dedication.",
    badge: "Community Leaders",
  },

  // Founder
  founder: {
    name: "Kazi Robin",
    role: "Founder & LeadAdmin",
    image: "/assets/community/robin.png",
    whatsapp: "8801787881334", // Remove + and spaces for wa.me link
    manages: "All Community Groups",
  },

  // Co-Admins
  coAdmins: [
    {
      name: "Tanvir Hasan",
      role: "Co-Admin",
      image: "/assets/community/jahid.pngtanvir.jpg",
      whatsapp: "8801234567891",
      manages: "Web Development & Programming Groups",
    },
    {
      name: "Rakibul Islam",
      role: "Co-Admin",
      image: "/assets/community/jahid.pngrakibul.jpg",
      whatsapp: "8801234567892",
      manages: "Design & Marketing Groups",
    },
  ],

  // Management Team
  managers: [
    {
      name: "Jahid Hasan",
      image: "/assets/community/jahid.png",
      manages: "General Support & Queries",
      whatsapp: "8801521751608",
    },
    {
      name: "Subrata Sarker",
      image: "/assets/community/ss.png",
      manages: "Event Management & Scheduling",
      whatsapp: "8801681879654",
    },
    {
      name: "Mehedi Hasan",
      image: "/assets/community/jahid.pngmehedi.jpg",
      manages: "Content Moderation & Quality",
      whatsapp: "8801234567895",
    },
    {
      name: "Nusrat Jahan",
      image: "/assets/community/jahid.pngnusrat.jpg",
      manages: "Member Engagement & Feedback",
      whatsapp: "8801234567896",
    },
    {
      name: "Sabbir Ahmed",
      image: "/assets/community/jahid.pngsabbir.jpg",
      manages: "Technical Support & Issues",
      whatsapp: "8801234567897",
    },
    {
      name: "Jannatul Ferdous",
      image: "/assets/community/jahid.pngjannatul.jpg",
      manages: "New Member Onboarding",
      whatsapp: "8801234567898",
    },
  ],

  // Teachers
  teachers: [
    {
      name: "Arafat Hossain",
      subject: "Web Development",
      icon: Monitor,
      color: "blue",
      image: "/assets/community/jahid.pngarafat.jpg",
      whatsapp: "8801234567899",
      group: "Web Dev Mastery Group",
      schedule: "Mon, Wed, Fri • 8:00 PM",
    },
    {
      name: "Sadia Afrin",
      subject: "Graphic Design",
      icon: Palette,
      color: "pink",
      image: "/assets/community/jahid.pngsadia.jpg",
      whatsapp: "8801234567900",
      group: "Design Creators Hub",
      schedule: "Tue, Thu • 7:00 PM",
    },
    {
      name: "Mahmudul Hasan",
      subject: "Programming",
      icon: Code,
      color: "purple",
      image: "/assets/community/jahid.pngmahmudul.jpg",
      whatsapp: "8801234567901",
      group: "Code Masters Community",
      schedule: "Mon, Wed • 9:00 PM",
    },
    {
      name: "Sumaiya Islam",
      subject: "Digital Marketing",
      icon: Megaphone,
      color: "orange",
      image: "/assets/community/jahid.pngsumaiya.jpg",
      whatsapp: "8801234567902",
      group: "Digital Growth Network",
      schedule: "Tue, Thu, Sat • 6:00 PM",
    },
    {
      name: "Hasibul Hasan",
      subject: "Content Writing",
      icon: PenTool,
      color: "green",
      image: "/assets/community/jahid.pnghasibul.jpg",
      whatsapp: "8801234567903",
      group: "Content Writers Guild",
      schedule: "Fri, Sat • 8:00 PM",
    },
  ],
};

// Helper function to format WhatsApp number for display
const formatWhatsApp = (number: string) => {
  if (number.startsWith("880")) {
    return `+${number.slice(0, 4)} ${number.slice(4, 8)}-${number.slice(8)}`;
  }
  return number;
};

// Static community events data (inline)
const eventsData = {
  kicker: "📅 Upcoming events",
  title: "Community events & meetups",
  items: [
    { date: "Aug 15", title: "Frontend workshop", time: "7:00 PM – 9:00 PM" },
    { date: "Aug 22", title: "Design thinking session", time: "6:30 PM – 8:30 PM" },
    { date: "Sep 5", title: "Code review & Q&A", time: "8:00 PM – 10:00 PM" },
  ],
  joinTitle: "Join our community",
  joinDescription: "Connect with admins, teachers, and fellow learners.",
};

// Button component (inline)
const CommunityButton = () => {
  return (
    <a
      href="https://chat.whatsapp.com/EBP79wEaAfAEvMtMee6HTY"
      className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-sm hover:shadow-md"
    >
      <MessageCircleMore className="w-5 h-5" />
      <span>Join WhatsApp</span>
    </a>
  );
};

export function Community() {
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
                {communityData.header.badge}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900">
              {communityData.header.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              {communityData.header.subtitle}
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
                      {communityData.founder.role}
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
                      <span>Manages: {communityData.founder.manages}</span>
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
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-50 rounded-xl">
                        <Shield className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900">{admin.name}</p>
                        <span className="text-sm text-gray-500">{admin.role}</span>
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
                          <span>Manages: {admin.manages}</span>
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
                  Community Management Team
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Working behind the scenes to keep everything organized and smooth.
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
                    <span>{manager.manages}</span>
                  </div>
                  {/* WhatsApp Card */}
                  <div className="border border-emerald-200 rounded-lg p-3 hover:border-emerald-300 transition-all duration-300">
                    <a
                      href={`https://wa.me/${manager.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="flex items-center justify-between">
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
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Teachers</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Experienced mentors who guide you on your learning journey.
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
                          {teacher.subject}
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
                          <div className="flex items-center justify-between">
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
                        <span className="text-gray-600">{teacher.group}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span>{teacher.schedule}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Events + Join section (fully integrated) */}
      <section className="community-events section site-container bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="library-heading mb-8 text-center">
            <span className="inline-block text-sm font-semibold text-indigo-600 bg-indigo-50 px-4 py-1 rounded-full mb-2">
              {eventsData.kicker}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{eventsData.title}</h2>
          </div>

          <div className="event-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {eventsData.items.map((item, idx) => (
              <article
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-all"
              >
                <CalendarDays className="w-8 h-8 text-indigo-500 flex-shrink-0 mt-1" />
                <div>
                  <b className="text-sm text-indigo-600 block">{item.date}</b>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="community-join bg-white border border-gray-200 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <MessageCircleMore className="w-10 h-10 text-indigo-500" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{eventsData.joinTitle}</h2>
                <p className="text-gray-600">{eventsData.joinDescription}</p>
              </div>
            </div>
            <div className="md:ml-auto">
              <CommunityButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Community;