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

interface FAQ {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const faqs: FAQ[] = [
  {
    question: "How can I join the LCWKR Community?",
    answer:
      'Click on the "Join Community" button on the website. You will be redirected to WhatsApp where you can join our community.',
    icon: <Users className="h-6 w-6 text-green-600" />,
  },
  {
    question: "What are the rules of the community?",
    answer:
      "Respect every member, avoid spam, be supportive, and follow community guidelines to maintain a positive environment.",
    icon: <ShieldCheck className="h-6 w-6 text-green-600" />,
  },
  {
    question: "What is the New Member Group?",
    answer:
      "The New Member Group helps beginners get started with resources, introductions, and guidance.",
    icon: <User className="h-6 w-6 text-green-600" />,
  },
  {
    question: "How do I choose the right group for me?",
    answer:
      "Choose the group based on your learning level and interests. Our admins can also help you decide.",
    icon: <Users className="h-6 w-6 text-green-600" />,
  },
  {
    question: "What happens if I break the rules?",
    answer:
      "Depending on the violation, warnings, temporary restrictions, or removal from the community may occur.",
    icon: <MessageCircle className="h-6 w-6 text-green-600" />,
  },
  {
    question: "Where can I get help if I need it?",
    answer:
      "Reach out to our support team or community admins anytime for assistance.",
    icon: <LifeBuoy className="h-6 w-6 text-green-600" />,
  },
  {
    question: "How can I become an active member?",
    answer:
      "Participate in discussions, complete learning tasks, help others, and stay engaged with the community.",
    icon: <BadgeCheck className="h-6 w-6 text-green-600" />,
  },
  {
    question: "Is my personal information safe here?",
    answer:
      "Yes. We respect your privacy and never share your personal information without permission.",
    icon: <Lock className="h-6 w-6 text-green-600" />,
  },
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

  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            FAQs
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            Frequently Asked{" "}
            <span className="text-green-600">Questions</span>
          </h2>

          <p className="mt-5 text-lg text-gray-500">
            Here are some common questions about our community.
            <br />
            If you need more help, feel free to contact our support team.
          </p>
        </div>

        {/* FAQ Grid */}

        <div className="grid gap-6 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              index={index}
              open={open}
              setOpen={setOpen}
            />
          ))}
        </div>

        {/* Bottom Card */}

        <div className="mt-16 rounded-3xl border border-green-100 bg-gradient-to-r from-green-50 to-white p-8 shadow-sm">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="flex items-center gap-6">
              <div className="rounded-full bg-green-100 p-6">
                <Headphones className="h-14 w-14 text-green-600" />
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  Still have questions?
                </h3>

                <p className="mt-2 text-gray-600">
                  We're here to help! Contact our support team anytime.
                </p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
              >
                <MessageCircle className="h-5 w-5" />
                Contact Support
              </a>

              <p className="mt-4 text-gray-500">
                🕒 Available: 10AM - 10PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}