import { hero } from "./components/hero";

const bn = {
  nav: {
    home: "হোম",
    pdf: "পিডিএফ",
    apps: "এপ্যস",
    pinyin: "পিনইন",
    intro: "সূচনা ",
    community: "কমিউনিটি",
  },

  home: {
    title: "সহজে চাইনিজ শিখুন",
    subtitle: "আজই আপনার শেখা শুরু করুন।"
  },

  buttons: {
    watchVideo: "ভিডিও দেখুন",
    joinWhatsapp: "হোয়াটসঅ্যাপে যোগ দিন"
  },
   hero: {
    ...hero,

    title: {
      line1: "চাইনিজ শিখুন",
      line2: "একদম শুরু ",
      line3: "থেকে",
      hsk: "HSK 6",
      line4: "সম্পূর্ণ",
      free: "ফ্রি",
      badge: "লাইভ ক্লাস হয়",
    },

    description:
      "আমাদের WhatsApp কমিউনিটিতে যোগ দিন এবং প্রতিদিন চাইনিজ শিখুন।",

    buttons: {
      whatsapp: "চীনা ভাষার পরিচিতি",
      resources: "📚 বইগুলো দেখুন",
    },

    links: {
      whatsapp:
        "https://chat.whatsapp.com/EBP79wEaAfAEvMtMee6HTY",
      resources: "/hsk-materials",
    },

    images: {
      teacher: "/assets/hero1.png",
      background: "/assets/hero3.png",
      teacherAlt: "চাইনিজ শিক্ষক",
    },
  },
  roadmap: {
  badge: "🚨 যোগদানের আগে অবশ্যই সম্পন্ন করতে হবে",

  title: {
    normal: "প্রথমে",
    highlight: "পিনইন শিখুন",
  },

  description:
    "আমাদের প্র্যাকটিস গ্রুপের মান বজায় রাখতে প্রত্যেক শিক্ষার্থীকে প্রথমে পিনইন কোর্স সম্পন্ন করে একটি ভয়েস রেকর্ডিং জমা দিতে হবে।",

  step1: {
    badge: "ধাপ ১",
    emoji: "📚",
    title: "চাইনিজ পিনইন শিখুন",
    description:
      "সম্পূর্ণ পিনইন ভিডিও কোর্স দেখুন এবং চারটি টোন ভালোভাবে অনুশীলন করুন।",

    checklist: [
      "✅ সব ভিডিও দেখুন",
      "✅ উচ্চারণ অনুশীলন করুন",
      "✅ এরপর ধাপ ২ সম্পন্ন করুন",
    ],

    button: "▶ পিনইন কোর্স দেখুন",

    link:
      "https://drive.google.com/drive/folders/12fEKjDBRU5NgnpgE4WluoRMer94LIkaQ",
  },

  step2: {
    badge: "ধাপ ২",
    emoji: "🎤",
    title: "ভয়েস রেকর্ডিং জমা দিন",
    description:
      "পিনইন কোর্স শেষ করার পর আমাদের WhatsApp Practice Group-এ যোগ দিয়ে আপনার উচ্চারণের রেকর্ডিং জমা দিন।",

    notice:
      "🎯 আমাদের মডারেটররা আপনার উচ্চারণ যাচাই করে আপনাকে Level 1-এ অনুমোদন করবেন।",

    button: "🚀 ভয়েস রেকর্ডিং জমা দিন",

    link:
      "https://chat.whatsapp.com/EBP79wEaAfAEvMtMee6HTY",
  },

  bottom: {
    title: "🎉 এই ২টি ধাপ সম্পন্ন করার পর",

    descriptionBefore:
      "আপনার উচ্চারণ যাচাই হলে আপনাকে আমাদের",

    highlight: "লেভেল ১ চাইনিজ ক্লাসে",

    descriptionAfter:
      "যোগ করা হবে এবং সেখান থেকে আপনার শেখার যাত্রা শুরু হবে।",
  },
},
};

export default bn;