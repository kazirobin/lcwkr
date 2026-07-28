"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Users,
  ShieldCheck,
  User,
  MessageCircle,
  LifeBuoy,
  Lock,
  BadgeCheck,
  Headphones,
} from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

interface FAQ {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

export const faq = {
  en: {
    badge: "FAQs",
    title: {
      first: "Frequently Asked",
      highlight: "Questions",
    },
    subtitle:
      "Here are some common questions about our Chinese learning community. If you need more help, feel free to contact our support team.",

    items: [
      {
        question: "How can I join the Chinese Learning Community?",
        answer:
          'Click the "Join Community" button on the website. You will be redirected to our WhatsApp group where you can become a member.',
      },
      {
        question: "Do I need any previous Chinese language knowledge?",
        answer:
          "No. Our course is beginner-friendly. You can start learning Chinese from zero.",
      },
      {
        question: "Where can I watch the Pinyin lessons?",
        answer:
          "All Pinyin video lessons are available through the Google Drive link provided on the website.",
      },
      {
        question: "How do I submit my Pinyin pronunciation practice?",
        answer:
          "Record your pronunciation and submit the voice message in the designated WhatsApp group.",
      },
      {
        question: "Will I receive support if I have questions?",
        answer:
          "Yes. Our instructors and community members are always available to help you with your learning journey.",
      },
      {
        question: "Can I learn at my own pace?",
        answer:
          "Absolutely. All lessons are recorded, so you can study whenever it is convenient for you.",
      },
      {
        question: "Is the learning community free to join?",
        answer:
          "Yes. Joining our learning community is completely free.",
      },
      {
        question: "How can I stay active in the community?",
        answer:
          "Practice regularly, complete assignments, participate in discussions, and communicate with other learners.",
      },
    ],

    support: {
      title: "Still have questions?",
      highlight: "We're here to help!",
      description:
        "If you can't find the answer you're looking for, feel free to contact our support team.",
      button: "Contact Support",
      available: "Available: 10:00 AM - 10:00 PM",
    },
  },

  bn: {
    badge: "প্রশ্নোত্তর",
    title: {
      first: "সচরাচর",
      highlight: "জিজ্ঞাসিত প্রশ্ন",
    },
    subtitle:
      "আমাদের চীনা ভাষা শেখার কমিউনিটি সম্পর্কে সাধারণ কিছু প্রশ্নের উত্তর এখানে দেওয়া হয়েছে। আরও সাহায্যের প্রয়োজন হলে আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।",

    items: [
      {
        question: "আমি কীভাবে চীনা ভাষা শেখার কমিউনিটিতে যোগ দিতে পারি?",
        answer:
          "ওয়েবসাইটের 'Join Community' বাটনে ক্লিক করুন। এরপর আপনাকে আমাদের WhatsApp গ্রুপে নিয়ে যাওয়া হবে, যেখানে আপনি সহজেই যোগ দিতে পারবেন।",
      },
      {
        question: "চীনা ভাষা শেখার জন্য আগে থেকে কিছু জানা কি প্রয়োজন?",
        answer:
          "না। আমাদের কোর্স সম্পূর্ণ নতুনদের জন্য তৈরি। আপনি একদম শুরু থেকেই শিখতে পারবেন।",
      },
      {
        question: "আমি Pinyin-এর ভিডিওগুলো কোথায় পাব?",
        answer:
          "ওয়েবসাইটে দেওয়া Google Drive লিংকের মাধ্যমে সব Pinyin ভিডিও দেখতে পারবেন।",
      },
      {
        question: "Pinyin উচ্চারণের ভয়েস কীভাবে জমা দেব?",
        answer:
          "আপনার উচ্চারণ রেকর্ড করে নির্ধারিত WhatsApp গ্রুপে ভয়েস মেসেজ হিসেবে পাঠিয়ে দিন।",
      },
      {
        question: "পড়ার সময় কোনো সমস্যা হলে কি সাহায্য পাব?",
        answer:
          "অবশ্যই। আমাদের শিক্ষক ও কমিউনিটির সদস্যরা আপনার প্রশ্নের উত্তর দিতে এবং সাহায্য করতে প্রস্তুত।",
      },
      {
        question: "আমি কি নিজের সুবিধামতো সময়ে শিখতে পারব?",
        answer:
          "হ্যাঁ। সব ক্লাস রেকর্ড করা থাকে, তাই আপনি নিজের সুবিধামতো সময়ে শিখতে পারবেন।",
      },
      {
        question: "কমিউনিটিতে যোগ দিতে কি কোনো ফি দিতে হবে?",
        answer:
          "না। আমাদের শেখার কমিউনিটিতে যোগদান সম্পূর্ণ বিনামূল্যে।",
      },
      {
        question: "কমিউনিটিতে সক্রিয় সদস্য হওয়ার উপায় কী?",
        answer:
          "নিয়মিত অনুশীলন করুন, অ্যাসাইনমেন্ট সম্পন্ন করুন, আলোচনায় অংশ নিন এবং অন্যান্য শিক্ষার্থীদের সঙ্গে যোগাযোগ রাখুন।",
      },
    ],

    support: {
      title: "আরও কোনো প্রশ্ন আছে?",
      highlight: "আমরা সাহায্য করতে প্রস্তুত!",
      description:
        "আপনার প্রয়োজনীয় উত্তর না পেলে আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।",
      button: "সাপোর্টে যোগাযোগ করুন",
      available: "সময়: সকাল ১০টা - রাত ১০টা",
    },
  },
};
const icons = [
  <Users className="h-6 w-6 text-green-600" />,
  <ShieldCheck className="h-6 w-6 text-green-600" />,
  <User className="h-6 w-6 text-green-600" />,
  <Users className="h-6 w-6 text-green-600" />,
  <MessageCircle className="h-6 w-6 text-green-600" />,
  <LifeBuoy className="h-6 w-6 text-green-600" />,
  <BadgeCheck className="h-6 w-6 text-green-600" />,
  <Lock className="h-6 w-6 text-green-600" />,
];
function AccordionItem({
  faq,
  index,
  open,
  setOpen,
}: {
  faq: FAQ;
  index: number;
  open: number | null;
  setOpen: (index: number | null) => void;
}) {
  const isOpen = open === index;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <button
        onClick={() => setOpen(isOpen ? null : index)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-green-50 p-3">{faq.icon}</div>

          <h3
            className={`text-lg font-semibold ${
              isOpen ? "text-green-600" : "text-gray-900"
            }`}
          >
            {faq.question}
          </h3>
        </div>

        {isOpen ? (
          <ChevronUp className="text-green-600" />
        ) : (
          <ChevronDown className="text-gray-500" />
        )}
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 pl-20 text-gray-600">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
   const [open, setOpen] = useState<number | null>(0);

  const { language } = useLanguage();

  const t = language === "bn" ? faq.bn : faq.en;

  return (
    <section className="bg-linear-to-b from-white to-green-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          {t.badge}
          </span>

         <h2 className="mt-6 text-4xl font-bold md:text-6xl">
  {t.title.first}{" "}
  <span className="text-green-600">
    {t.title.highlight}
  </span>
</h2>

          <p className="mt-5 text-lg text-gray-500">
  {t.subtitle}
</p>
        </div>

        {/* FAQ Grid */}

        <div className="grid gap-6 lg:grid-cols-2">
          {t.items.map((item, index) => (
            <AccordionItem
    key={index}
    faq={{
      ...item,
      icon: icons[index],
    }}
    index={index}
    open={open}
    setOpen={setOpen}
  />
          ))}
        </div>

        {/* Bottom Card */}

        <div className="mt-16 rounded-3xl border border-green-100 bg-linear-to-r from-green-50 to-white p-8 shadow-sm">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="flex items-center gap-6">
              <div className="rounded-full bg-green-100 p-6">
                <Headphones className="h-14 w-14 text-green-600" />
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  {t.support.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  {t.support.description}
                </p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
              >
                <MessageCircle className="h-5 w-5" />
                {t.support.button}
              </a>

              <p className="mt-4 text-gray-500">
                🕒 {t.support.available}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}