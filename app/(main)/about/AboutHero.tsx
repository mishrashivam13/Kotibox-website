'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useModal } from '@/components/providers/ModalContext';

const stats = [
  { value: '500+', label: 'Global Clients' },
  { value: '12+', label: 'Years of Excellence' },
  { value: '98%', label: 'Client Retention' },
  { value: '3', label: 'Countries' },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let st: number | null = null;
    const step = (ts: number) => {
      if (!st) st = ts;
      const p = Math.min((ts - st) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const bg = sectionRef.current?.querySelector('.parallax-bg') as HTMLElement;
      if (bg) bg.style.transform = `translateY(${window.scrollY * 0.25}px) scale(1.08)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const fade = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-[#0a1628]"
    >
      {/* Background image */}
      <div
        className="parallax-bg absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=85')" }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#0a1628]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/80 via-[#0a1628]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/50 via-transparent to-[#0a1628]/80" />

      {/* Amber glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] opacity-[0.08] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 10% 20%, #f5a623, transparent 65%)' }} />

      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #f5a623 30%, rgba(255,255,255,0.4) 50%, #f5a623 70%, transparent)' }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pt-28 pb-20">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6" style={fade(0.1)}>
          <div className="w-8 h-[1.5px] bg-[#f5a623]" />
          <span className="text-[#f5a623] text-xs font-semibold tracking-[0.28em] uppercase">
            About Kotibox Global Technologies
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6 max-w-[700px]"
          style={{ ...fade(0.2), textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
        >
          Your Trusted Partner
          <br />
          <span className="text-white/60">in </span>
          <span className="text-[#f5a623] relative inline-block">
            Digital Innovation
            <span
              className="absolute -bottom-1.5 left-0 h-[3px] bg-[#f5a623] rounded-full"
              style={{ width: visible ? '100%' : '0%', transition: 'width 1s cubic-bezier(0.4,0,0.2,1) 0.9s', opacity: 0.5 }}
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg text-white/80 leading-relaxed mb-10 max-w-[540px]"
          style={fade(0.35)}
        >
          We help businesses embrace the future with cutting-edge AI solutions,
          innovative strategies, and technology-driven transformation that unlocks
          measurable growth and lasting competitive advantage.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16" style={fade(0.48)}>
          <button
            onClick={openModal}
            className="group relative overflow-hidden bg-[#f5a623] text-[#0a1628] px-8 py-3.5 text-sm font-extrabold tracking-wide rounded-lg transition-all duration-300 hover:shadow-[0_6px_24px_rgba(245,166,35,0.45)] hover:scale-[1.02]"
          >
            <span className="relative z-10">Get Free Consultation</span>
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
          </button>
          <a
            href="#who-we-are"
            className="flex items-center gap-2 border border-white/25 text-white/85 px-8 py-3.5 text-sm font-medium rounded-lg hover:border-white/50 hover:text-white transition-all duration-300"
          >
            Discover Our Story
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-white/[0.12]"
          style={fade(0.6)}
        >
          {stats.map((stat, i) => {
            const num = parseInt(stat.value.replace(/\D/g, ''));
            const suffix = stat.value.replace(/[0-9]/g, '');
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const count = useCountUp(num, 1600 + i * 150, visible);
            return (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-extrabold text-white leading-none">
                  {visible ? count : 0}
                  <span className="text-[#f5a623]">{suffix}</span>
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-white/45 font-medium mt-1.5">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: visible ? 0.4 : 0, transition: 'opacity 0.6s ease 1.2s' }}
      >
        <span className="text-[9px] uppercase tracking-[0.22em] text-white/50 font-semibold">Scroll</span>
        <div className="w-[1px] h-9 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] opacity-20"
        style={{ background: 'linear-gradient(90deg, transparent, #f5a623 40%, rgba(255,255,255,0.3) 60%, transparent)' }} />
    </section>
  );
}
