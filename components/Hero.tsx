import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
      <section className="relative w-full overflow-hidden">
      {/* ========== DESKTOP BACKGROUND (≥1280px) ========== */}
      <div
        className="absolute inset-0 hidden xl:block bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-linear(
              105deg,
              rgba(255,255,255,0.97) 0%,
              rgba(255,255,255,0.93) 38%,
              rgba(255,255,255,0.25) 62%,
              rgba(255,255,255,0) 100%
            ),
            url('/assets/hero3.png')
          `,
        }}
      />

      {/* ========== LAPTOP BACKGROUND (768px – 1279px) ========== */}
      <div
        className="absolute inset-0 hidden md:block xl:hidden bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage: `
            linear-linear(
              100deg,
              rgba(255,255,255,0.96) 0%,
              rgba(255,255,255,0.88) 45%,
              rgba(255,255,255,0.3) 70%,
              rgba(255,255,255,0) 100%
            ),
            url('/hero-bg.png')
          `,
        }}
      />

      {/* ========== MOBILE BACKGROUND (≤767px) ========== */}
      <div
        className="absolute inset-0 block md:hidden bg-cover bg-position-[center_top] bg-no-repeat"
        style={{
          backgroundImage: `
            url('/assets/hero3.png')
          `,
        }}
      />

      {/* Soft blue overlay for consistency */}
      <div className="absolute inset-0 bg-linear-to-br from-sky-50/40 via-transparent to-blue-50/30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col-reverse items-center gap-10 py-12 md:flex-row md:items-center md:justify-between md:gap-8 md:py-16 lg:py-20 xl:gap-16">
          
          {/* Left – Text Content */}
          <div className="w-full max-w-xl text-center md:text-left">
            <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
              Learn Chinese
              <br />
              From Beginner
              <br />
              to <span className="text-rose-600">HSK 6</span> —
              <br />
              Completely <span className="text-rose-600">Free</span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg md:max-w-md">
              Join our active WhatsApp learning community where students learn
              Chinese every day through live classes, weekly exams, structured study
              materials, and continuous teacher support.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
              <Link
                href="https://chat.whatsapp.com/EBP79wEaAfAEvMtMee6HTY"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-rose-500/40"
              >
                {/* WhatsApp icon */}
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <h1 className="text-white">Join WhatsApp Community</h1>
              </Link>

              <Link
                href="/hsk-materials"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 hover:-translate-y-0.5"
              >
                Explore Resources
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right – Person Image */}
          <div className="relative w-full max-w-85 sm:max-w-85 md:max-w-90 lg:max-w-105">
            {/* Soft glow circle */}
            <div className="absolute -inset-4 rounded-full bg-sky-200/50 blur-2xl" />
            
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/15">
              <Image
                src="/assets/hero1.png"
                alt="Chinese teacher"
                width={501}
                height={454}
                priority
                className="h-auto w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero