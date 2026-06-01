'use client'
import Link from 'next/link'
import { useModal } from '@/components/providers/ModalContext'

export default function HeroSection() {
  const { openModal } = useModal()

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a1628]">

      {/* Background image — AI neural network visualization */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=90')" }}
      />
      <div className="absolute inset-0 bg-[#0a1628]/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/40 via-transparent to-[#0a1628]/80" />

      {/* Subtle orange glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #f5a623, transparent 65%)' }} />

      {/* ── Content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-20 pb-10">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                        bg-white/[0.07] border border-white/[0.15] mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
          <span className="text-white/80 text-xs font-medium tracking-[0.14em] uppercase">
            Google Certified AI Agency
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.6rem] lg:text-[4.2rem]
                       font-bold text-white leading-[1.08] tracking-[-0.03em] mb-6
                       max-w-xs sm:max-w-2xl md:max-w-4xl">
          Develop <span className="text-[#f5a623]">AI-powered</span>
          <br className="hidden sm:block" /> products in weeks, not months.
        </h1>

        {/* Subtext */}
        <p className="text-[0.95rem] sm:text-base md:text-lg text-white/75
                      max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-9 leading-relaxed">
          We are a <strong className="text-white font-semibold">Google-certified AI agency</strong> designing,
          building and deploying web apps, mobile apps, chatbots and automations —{' '}
          <strong className="text-white font-semibold">50% faster</strong> than traditional agencies.
        </p>

        {/* CTA */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={openModal}
            className="px-7 py-3 rounded-lg bg-[#f5a623] text-[#0a1628]
                       font-semibold text-sm tracking-wide
                       hover:bg-[#e8950f] hover:-translate-y-0.5 transition-all
                       shadow-[0_4px_20px_rgba(245,166,35,0.4)]"
          >
            Talk To a Consultant
          </button>
          <Link
            href="/live-demo"
            className="px-7 py-3 rounded-lg border border-white/30
                       text-white text-sm font-medium
                       hover:border-white/55 hover:bg-white/[0.06] transition-all"
          >
            View Our Work →
          </Link>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="relative z-10 border-t border-white/[0.10]">
        <div className="max-w-4xl mx-auto px-4 py-5 grid grid-cols-2 sm:grid-cols-4
                        gap-4 sm:gap-0 sm:divide-x divide-white/[0.10]">
          {[
            { num: '10+',   label: 'Years Excellence' },
            { num: '2000+', label: 'Projects Delivered' },
            { num: '50+',   label: 'Expert Team' },
            { num: '45+',   label: 'Countries Served' },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:px-6">
              <div className="text-xl sm:text-2xl font-bold text-[#f5a623] tracking-tight">{stat.num}</div>
              <div className="text-[11px] text-white/55 mt-0.5 uppercase tracking-[0.1em] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
