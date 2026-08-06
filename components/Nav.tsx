"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useLanguage } from "@/app/context/LanguageContext";
import ThemeButton from "./ThemeButton";

type NavKey = "home" | "pdf"|"apps" |"intro" | "community";

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
    key: "apps",
    href: "/apps",
  },
  {
    key: "intro",
    href: "/intro",
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
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-background">
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
              className={`relative text-sm font-extrabold transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                pathname === link.href
                  ? "text-primary after:scale-x-100"
                  : "text-text hover:text-primary"
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
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium transition cursor-pointer"
          >
            🌐 {language === "en" ? "বাংলা" : "English"}
          </button>
          <ThemeButton/>
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
        <div className="border-t border-gray-200 bg-background md:hidden">
          <div className="space-y-2 px-4 py-3">
           {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.key}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`group relative flex items-center rounded-xl px-6 py-4 text-lg font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute left-0 h-10 w-1.5 rounded-r-full bg-primary" />
                      )}
                      <span className="ml-4">{t.nav[link.key]}</span>
                      {isActive && (
                        <span className="ml-auto text-sm font-medium text-primary">
                          Active
                        </span>
                      )}
                    </Link>
                  );
                })}

             <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setLanguage(language === "en" ? "bn" : "en");
                    }}
                    className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium transition hover:bg-gray-50"
                  >
                    {language === "en" ? "বাংলা" : "English"}
                  </button>
                  <div className="shrink-0">
                    <ThemeButton />
                  </div>
                </div>
          </div>
        </div>
      )}
    </nav>
  );
}