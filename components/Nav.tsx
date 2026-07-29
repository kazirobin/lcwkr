"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useLanguage } from "@/app/context/LanguageContext";

type NavKey = "home" | "pdf"  | "community";

const navLinks: {
  key: NavKey;
  href: string;
}[] = [
  {
    key: "home",
    href: "/",
  },
  {
    key: "pdf",
    href: "/pdf",
  },

  {
    key: "community",
    href: "/community",
  },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // ✅ Hook must be inside component
  const { t, language, setLanguage } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" aria-label="lcwkr" className="shrink-0">
          <div className="relative h-10 w-30 sm:h-11.25 sm:w-35 md:h-12.5 md:w-40">
            <Image
              src="/assets/logo.png"
              alt="lcwkr"
              fill
              priority
              className="object-contain"
              sizes="(max-width:640px) 120px, (max-width:768px) 140px, 160px"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`text-sm font-extrabold transition-colors ${
                pathname === link.href
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {t.nav[link.key]}
            </Link>
          ))}

          {/* Language Toggle */}
          <button
            onClick={() =>
              setLanguage(language === "en" ? "bn" : "en")
            }
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium transition hover:bg-gray-100"
          >
            🌐 {language === "en" ? "বাংলা" : "English"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="space-y-2 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-extrabold text-center ${
                  pathname === link.href
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {t.nav[link.key]}
              </Link>
            ))}

            <button
              onClick={() =>
                setLanguage(language === "en" ? "bn" : "en")
              }
              className="mt-3 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium transition hover:bg-gray-100"
            >
              🌐 {language === "en" ? "বাংলা" : "English"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}