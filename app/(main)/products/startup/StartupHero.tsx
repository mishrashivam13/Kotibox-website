'use client'
import React, { useEffect, useState } from 'react';
import { useModal } from '@/components/providers/ModalContext';

const chips = [
  'Business Planning',
  'Legal Setup',
  'UI/UX Design',
  'Marketing Strategy',
  'Pitch Deck',
];

export default function StartupHero() {
  const [visible, setVisible] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(18px)',
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0a1628]">

      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&q=85')" }} />
      <div className="absolute inset-0 bg-[#0a1628]/72" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/60 to-[#0a1628]/20" />

      {/* Accent glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[400px] opacity-[0.08] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 10% 15%, #f5a623, transparent 65%)' }} />

      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #f5a623 30%, rgba(255,255,255,0.35) 50%, #f5a623 70%, transparent)' }} />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-8 md:px-14 lg:px-20 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">

          {/* LEFT */}
          <div className="flex flex-col items-start">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5" style={fade(0.08)}>
              <div className="w-6 h-[1.5px] bg-[#f5a623]" />
              <span className="text-[#f5a623] text-xs font-semibold tracking-[0.28em] uppercase">KGT Startup</span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.1] tracking-tight mb-5"
              style={{ ...fade(0.18), textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
            >
              Launch Your Startup
              <br />
              <span className="text-[#f5a623]">From Zero to One</span>
            </h1>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8 max-w-[480px]" style={fade(0.28)}>
              Everything your startup needs under one roof — from legal setup and
              business planning to product design and go-to-market strategy.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-8" style={fade(0.38)}>
              <button
                onClick={openModal}
                className="group relative overflow-hidden bg-[#f5a623] text-[#0a1628] px-7 py-3.5 text-sm font-semibold rounded-lg hover:shadow-[0_6px_24px_rgba(245,166,35,0.45)] hover:scale-[1.02] transition-all duration-300"
              >
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
              </button>
              <a href="#bundle"
                className="flex items-center gap-2 border border-white/25 text-white/80 px-7 py-3.5 text-sm font-medium rounded-lg hover:border-white/50 hover:text-white transition-all duration-300">
                See What's Included
              </a>
            </div>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2" style={fade(0.48)}>
              {chips.map((c) => (
                <span key={c} className="bg-white/[0.07] border border-white/[0.14] text-white/65 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — illustration */}
          <div className="relative flex justify-center lg:justify-end" style={fade(0.35)}>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full opacity-10 blur-3xl"
                style={{ background: 'radial-gradient(circle, #f5a623, transparent)' }} />
            </div>
            <img
              src="/images/kgtstartup/Startup-life.png"
              alt="Startup Launch"
              className="relative z-10 w-full max-w-[460px] h-auto object-contain drop-shadow-2xl hover:-translate-y-2 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] opacity-20"
        style={{ background: 'linear-gradient(90deg, transparent, #f5a623 40%, rgba(255,255,255,0.3) 60%, transparent)' }} />
    </section>
  );
}
