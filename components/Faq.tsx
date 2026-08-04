"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

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
        answer: (
          <>
            Click the <strong>"Join Community"</strong> button on the website.
            You will be redirected to our WhatsApp group where you can become a
            member.
          </>
        ),
      },
      {
        question: "Do I need any previous Chinese language knowledge?",
        answer:
          "No. Our course is beginner-friendly. You can start learning Chinese from zero.",
      },
      {
        question: "Where can I watch the Pinyin lessons?",
        answer: (
          <>
            All Pinyin video lessons are available through our{" "}
            <Link
              href="https://drive.google.com/drive/folders/12fEKjDBRU5NgnpgE4WluoRMer94LIkaQ"
              target="_blank"
              className="font-medium text-blue-600 hover:underline"
            >
              Google Drive
            </Link>
            .
          </>
        ),
      },
      {
        question: "How do I submit my Pinyin pronunciation practice?",
       answer: (
  <>
    Record your pronunciation and submit it as a voice message in the{" "}
    <a
      href="https://chat.whatsapp.com/EBP79wEaAfAEvMtMee6HTY"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-green-600 hover:underline"
    >
      designated WhatsApp group
    </a>
    .
  </>
),
      },
      {
        question: "Will I receive support if I have questions?",
        answer:
          "Yes. Our instructors and community members are always available to help you.",
      },
      {
        question: "Is the learning community free to join?",
        answer: "Yes. Joining our learning community is completely free.",
      },
      {
        question: "How can I stay active in the community?",
        answer:
          "Practice regularly, complete assignments, participate in discussions, and communicate with other learners.",
      },
    ] as FAQItem[],

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
        answer: (
          <>
            ওয়েবসাইটের <strong>Join Community</strong> বাটনে ক্লিক করুন।
            এরপর আপনাকে আমাদের WhatsApp গ্রুপে নিয়ে যাওয়া হবে।
          </>
        ),
      },
      {
        question: "চীনা ভাষা শেখার জন্য আগে থেকে কিছু জানা কি প্রয়োজন?",
        answer:
          "না। আমাদের কোর্স সম্পূর্ণ নতুনদের জন্য তৈরি। আপনি একদম শুরু থেকেই শিখতে পারবেন।",
      },
      {
        question: "আমি Pinyin-এর ভিডিওগুলো কোথায় পাব?",
        answer: (
          <>
            সব Pinyin ভিডিও আমাদের{" "}
            <Link
              href="https://drive.google.com/drive/folders/12fEKjDBRU5NgnpgE4WluoRMer94LIkaQ"
              target="_blank"
              className="font-medium text-blue-600 hover:underline"
            >
              Google Drive
            </Link>{" "}
            থেকে দেখতে পারবেন।
          </>
        ),
      },
      {
        question: "Pinyin উচ্চারণের ভয়েস কীভাবে জমা দেব?",


        answer: (
  <>
    আপনার উচ্চারণ রেকর্ড করে{" "}
    <a
      href="https://chat.whatsapp.com/EBP79wEaAfAEvMtMee6HTY"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-green-600 hover:underline"
    >
      WhatsApp গ্রুপে
    </a>{" "}
    ভয়েস মেসেজ হিসেবে পাঠিয়ে দিন।
  </>
),
      },

      
      {
        question: "পড়ার সময় কোনো সমস্যা হলে কি সাহায্য পাব?",
        answer:
          "অবশ্যই। আমাদের শিক্ষক ও কমিউনিটির সদস্যরা সবসময় সাহায্য করতে প্রস্তুত।",
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
    ] as FAQItem[],

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

export default function FAQ() {
  const { language } = useLanguage();

  const [open, setOpen] = useState<number | null>(0);

  const data = language === "bn" ? faq.bn : faq.en;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4">

        <div className="mb-10 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            {data.badge}
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            {data.title.first}{" "}
            <span className="text-blue-600">{data.title.highlight}</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            {data.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {data.items.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-gray-200"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold hover:bg-gray-50"
                >
                  <span>{item.question}</span>

                  {isOpen ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>

                {isOpen && (
                  <div className="border-t border-gray-200 px-5 py-4 leading-7 text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl bg-blue-50 p-8 text-center">
          <h3 className="text-2xl font-bold">
            {data.support.title}{" "}
            <span className="text-blue-600">{data.support.highlight}</span>
          </h3>

          <p className="mt-3 text-gray-600">
            {data.support.description}
          </p>

          <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
<a href="https://wa.me/8801787881334">
            {data.support.button}
</a>

          </button>

          <p className="mt-3 text-sm text-gray-500">
            {data.support.available}
          </p>
        </div>
      </div>
    </section>
  );
}