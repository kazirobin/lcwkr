import { hero } from "./components/hero";

const en = {
  nav: {
    home: "Home",
    pdf: "PDF",
    pinyin: "Pinyin",
    community: "Community",
  },

  home: {
    title: "Learn Chinese Easily",
    subtitle: "Start your Chinese learning journey."
  },

  buttons: {
    watchVideo: "Watch Video",
    joinWhatsapp: "Join WhatsApp"
  },
   hero: {
    ...hero,

    title: {
      line1: "Learn Chinese",
      line2: "From Beginner",
      line3: "to",
      hsk: "HSK 6",
      line4: "Completely",
      free: "Free",
      badge: "Live Class Available",
    },

    description:
      "Join our active WhatsApp learning community where students learn Chinese every day.",

    buttons: {
      whatsapp: "Join WhatsApp Community",
      resources: "Explore Resources",
    },

    links: {
      whatsapp:
        "https://chat.whatsapp.com/EBP79wEaAfAEvMtMee6HTY",
      resources: "/hsk-materials",
    },

    images: {
      teacher: "/assets/hero1.png",
      background: "/assets/hero3.png",
      teacherAlt: "Chinese teacher",
    },
    
  },roadmap: {
  badge: "🚨 Required Before Joining",

  title: {
    normal: "Learn",
    highlight: "Pinyin First",
  },

  description:
    "To maintain the quality of our practice group, every student must first complete the Pinyin lessons and then submit a voice recording.",

  step1: {
    badge: "STEP 1",
    emoji: "📚",
    title: "Learn Chinese Pinyin",
    description:
      "Watch our complete Pinyin video lessons and practice all four tones before joining the practice group.",

    checklist: [
      "✅ Watch all lessons",
      "✅ Practice pronunciation",
      "✅ Complete before Step 2",
    ],

    button: "▶ Watch Pinyin Course",

    link:
      "https://drive.google.com/drive/folders/12fEKjDBRU5NgnpgE4WluoRMer94LIkaQ",
  },

  step2: {
    badge: "STEP 2",
    emoji: "🎤",
    title: "Submit Voice Recording",
    description:
      "After completing the Pinyin course, join our WhatsApp Practice Group and submit your pronunciation recording.",

    notice:
      "🎯 Our moderators will review your pronunciation and approve you for Level 1.",

    button: "🚀 Submit Voice Recording",

    link:
      "https://chat.whatsapp.com/EBP79wEaAfAEvMtMee6HTY",
  },

  bottom: {
    title: "🎉 After Completing These 2 Steps",

    descriptionBefore:
      "Once your pronunciation is verified, you'll be invited to our",

    highlight: "Level 1 Chinese Class",

    descriptionAfter:
      "and continue your learning journey.",
  },
},
};

export default en;