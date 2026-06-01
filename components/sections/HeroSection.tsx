'use client'
import Link from 'next/link'
import { useModal } from '@/components/providers/ModalContext'

export default function HeroSection() {
  const { openModal } = useModal()

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=90')" }}
      />
      <div className="absolute inset-0 bg-[#0a1628]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_400px_at_50%_30%,rgba(245,166,35,0.06),transparent)]" />

      <div className="relative z-10 flex-1 flex flex-col items-center
                      justify-center text-center px-6 pt-24 pb-10">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full
                        bg-[#f5a623]/12 border border-[#f5a623]/30 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#f5a623] animate-pulse" />
          <span className="text-[#f5c56a] text-sm font-semibold">
            Google Certified AI Agency
          </span>
        </div>

        <h1 className="text-6xl font-extrabold leading-tight tracking-tight
                       text-white mb-6">
          Develop{' '}
          <span className="text-[#f5a623]">AI-powered</span>
          <br />products in weeks not months.
        </h1>

        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          We're a <strong className="text-white font-bold">Google-certified AI agency</strong>{' '}
          designing, building and deploying web apps, mobile apps, chatbots and
          automations —{' '}
          <strong className="text-white font-bold">50% faster</strong>{' '}
          than traditional agencies at a fraction of the cost.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={openModal}
            className="px-8 py-4 rounded-full bg-[#f5a623] text-white
                       font-bold text-base hover:bg-[#e8950f] transition-all
                       shadow-[0_4px_24px_rgba(245,166,35,0.4)]"
          >
            Talk To Consultant →
          </button>
          <Link
            href="/live-demo"
            className="px-8 py-4 rounded-full border border-white/50
                       text-white font-semibold hover:bg-white/10 transition-all"
          >
            View Our Work
          </Link>
        </div>
      </div>

      <div className="relative z-10 py-8 flex justify-center gap-20 flex-wrap">
        {[
          { num: '10+', label: 'Years Excellence' },
          { num: '2000+', label: 'Projects Delivered' },
          { num: '50+', label: 'Expert Team' },
          { num: '45+', label: 'Countries Served' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-extrabold text-[#f5a623]">{stat.num}</div>
            <div className="text-sm text-white/55 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
