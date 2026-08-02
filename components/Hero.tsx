"use client"
import { useLanguage } from '@/app/context/LanguageContext'
import { Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Hero = () => {
  const { t } = useLanguage()
  const hero = t.hero
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative w-full overflow-hidden min-h-[90vh] md:min-h-[85vh] flex items-center">
      {/* ========== AMBIENT BACKGROUND EFFECTS ========== */}
      
      {/* Animated gradient orb - top right */}
      <div className="absolute -top-40 -right-40 w-150 h-150 bg-linear-to-br from-rose-400/20 via-pink-400/10 to-transparent rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      
      {/* Animated gradient orb - bottom left */}
      <div className="absolute -bottom-60 -left-60 w-175 h-175 bg-linear-to-tr from-blue-400/20 via-sky-400/10 to-transparent rounded-full blur-3xl animate-pulse-slow-delay pointer-events-none" />

      {/* ========== DESKTOP BACKGROUND (≥1280px) ========== */}
      <div
        className="absolute inset-0 hidden xl:block bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: `
            linear-gradient(
              105deg,
              rgba(255,255,255,0.98) 0%,
              rgba(255,255,255,0.92) 35%,
              rgba(255,255,255,0.4) 60%,
              rgba(255,255,255,0) 100%
            ),
            url('/assets/hero3.png')
          `,
        }}
      />

      {/* ========== TABLET BACKGROUND (768px – 1279px) ========== */}
      <div
        className="absolute inset-0 hidden md:block xl:hidden bg-cover bg-right bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: `
            linear-gradient(
              100deg,
              rgba(255,255,255,0.97) 0%,
              rgba(255,255,255,0.85) 45%,
              rgba(255,255,255,0.2) 75%,
              rgba(255,255,255,0) 100%
            ),
            url('/hero-bg.png')
          `,
        }}
      />

      {/* ========== MOBILE BACKGROUND (≤767px) ========== */}
      <div
        className="absolute inset-0 block md:hidden bg-cover bg-top bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.92) 0%,
              rgba(255,255,255,0.6) 50%,
              rgba(255,255,255,0.4) 100%
            ),
            url('/assets/hero3.png')
          `,
        }}
      />

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc0IiBudW1PY3RhdmVzPSIzIiAvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iMC4xIiAvPjwvc3ZnPg==')]" />

      {/* Content Container */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-14 lg:gap-20">
          
          {/* ========== LEFT - TEXT CONTENT ========== */}
          <div className="w-full lg:w-[55%] max-w-2xl mx-auto lg:mx-0">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50/90 backdrop-blur-sm border border-rose-200/50 shadow-sm mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
              </span>
              <Link href="/msg">
              <span className="text-xs font-medium text-rose-700 tracking-wide">
                {hero.title.badge}
              </span>
              </Link>
            </div>

            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-5xl 2xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                {hero.title.line1}
              </span>
              <br />
              <span className="bg-linear-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                {hero.title.line2}
              </span>
              <br />
              <span className="inline-flex items-center gap-2 flex-wrap">
                {hero.title.line3}
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-linear-to-r from-rose-500 to-pink-500 rounded-lg blur-md opacity-30 animate-pulse"></span>
                  <span className="relative bg-linear-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-black">
                    HSK 6
                  </span>
                </span>
                —
              </span>
              <br />
              <span className="inline-flex items-center gap-2 flex-wrap">
                {hero.title.line4}
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-linear-to-r from-emerald-500 to-teal-500 rounded-lg blur-md opacity-30 animate-pulse"></span>
                  <span className="relative bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-black">
                    {hero.title.free}
                  </span>
                </span>
              </span>
            </h1>

            <p className={`mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-slate-600 max-w-lg transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {hero.description}
            </p>

            {/* CTA Buttons */}
            <div className={`mt-8 flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Link
                href="/intro"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-linear-to-r from-rose-600 to-pink-600 text-sm font-semibold text-white shadow-xl shadow-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/40 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 overflow-hidden w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-linear-to-r from-rose-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2.5">
                  <Globe />
                  <span>{hero.buttons.whatsapp}</span>
                </span>
                <span className="absolute inset-0 rounded-2xl ring-2 ring-rose-500/20 group-hover:ring-rose-500/40 transition-all duration-300"></span>
              </Link>

              <Link
                href="/pdf"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-slate-200 bg-white/80 backdrop-blur-sm text-sm font-semibold text-slate-700 hover:border-rose-300 hover:bg-rose-50/50 hover:text-rose-700 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 shadow-sm hover:shadow-md w-full sm:w-auto"
              >
                {hero.buttons.resources}
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className={`mt-10 flex flex-wrap items-center gap-6 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative w-10 h-10 rounded-full border-2 border-white bg-linear-to-br from-slate-200 to-slate-300 shadow-sm">
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-slate-600">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
                <div className="relative w-10 h-10 rounded-full border-2 border-white bg-linear-to-br from-rose-500 to-pink-500 shadow-sm flex items-center justify-center text-xs font-bold text-white">
                  +
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  <span className="text-rose-600">500+</span> students enrolled
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ========== RIGHT - IMAGE ========== */}
          <div className={`w-full lg:w-[45%] max-w-md lg:max-w-none transition-all duration-700 delay-150 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-8 rounded-[40px] bg-linear-to-br from-rose-400/20 via-pink-400/10 to-blue-400/20 blur-2xl" />
              
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-linear-to-br from-rose-400 to-pink-400 rounded-2xl rotate-12 shadow-lg shadow-rose-500/30 animate-float-slow hidden sm:block">
                <span className="absolute inset-0 flex items-center justify-center text-2xl">🎯</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-linear-to-br from-blue-400 to-sky-400 rounded-xl -rotate-6 shadow-lg shadow-blue-500/30 animate-float-slow-delay hidden sm:block">
                <span className="absolute inset-0 flex items-center justify-center text-xl">📚</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-10 h-10 bg-linear-to-br from-emerald-400 to-teal-400 rounded-full shadow-lg shadow-emerald-500/30 animate-float-slowest hidden xl:block">
                <span className="absolute inset-0 flex items-center justify-center text-lg">⭐</span>
              </div>

              {/* Image Container */}
              <div className="relative rounded-4xl overflow-hidden shadow-2xl shadow-slate-900/20 ring-1 ring-white/20 backdrop-blur-sm">
                {/* linear overlay on image */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent z-10 pointer-events-none" />
                
                <Image
                  src="/assets/hero1.png"
                  alt="Chinese teacher"
                  width={501}
                  height={454}
                  priority
                  className="h-auto w-full object-cover object-top scale-105 hover:scale-100 transition-transform duration-700 ease-out"
                />

                {/* Bottom linear overlay for depth */}
                <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-slate-900/30 to-transparent z-10 pointer-events-none" />

                {/* Floating badge on image */}
                <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center gap-3 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-white/50">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-linear-to-br from-emerald-400 to-teal-400 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-700">100% Free</p>
                    <p className="text-[10px] text-slate-500">No hidden fees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes pulse-slow-delay {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.08); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
        @keyframes float-slow-delay {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-8px) rotate(-6deg); }
        }
        @keyframes float-slowest {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-pulse-slow-delay {
          animation: pulse-slow-delay 7s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        .animate-float-slow-delay {
          animation: float-slow-delay 4.5s ease-in-out infinite;
        }
        .animate-float-slowest {
          animation: float-slowest 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero