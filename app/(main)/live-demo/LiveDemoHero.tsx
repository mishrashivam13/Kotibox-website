'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useModal } from '@/components/providers/ModalContext';

const stats = [
  { value: 20,  suffix: '+',    label: 'Ready Products' },
  { value: 7,   suffix: ' Days', label: 'Quick Launch' },
  { value: 500, suffix: '+',    label: 'Happy Clients' },
  { value: 100, suffix: '%',    label: 'Customizable' },
];

const products = [
  { name: 'E-Commerce Platform',    tag: 'Web + App', color: '#f5a623' },
  { name: 'AI Chatbot Suite',       tag: 'AI',        color: '#4a9eff' },
  { name: 'Food Delivery App',      tag: 'Mobile',    color: '#34d399' },
  { name: 'OTT Video Platform',     tag: 'Web + App', color: '#a78bfa' },
  { name: 'CRM & Sales Dashboard',  tag: 'SaaS',      color: '#f5a623' },
  { name: 'Telemedicine Platform',  tag: 'Enterprise', color: '#4a9eff' },
];

function CountUp({ target, suffix, duration = 1600, start }: { target: number; suffix: string; duration?: number; start: boolean }) {
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
  return <>{start ? count : 0}{suffix}</>;
}

export default function LiveDemoHero() {
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
      if (bg) bg.style.transform = `translateY(${window.scrollY * 0.22}px) scale(1.1)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const fade = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a1628]">

      {/* Background */}
      <div className="parallax-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&q=85')" }} />
      <div className="absolute inset-0 bg-[#0a1628]/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/40 via-transparent to-[#0a1628]/80" />

      {/* Glows */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[400px] opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 25%, #f5a623, transparent 65%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 80%, #4a9eff, transparent 65%)' }} />

      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #f5a623 25%, rgba(255,255,255,0.4) 50%, #f5a623 75%, transparent)' }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-8 md:px-14 lg:px-20 pt-28 pb-16">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6" style={fade(0.08)}>
          <div className="w-7 h-[1.5px] bg-[#f5a623]" />
          <span className="text-[#f5a623] text-xs font-semibold tracking-[0.28em] uppercase">
            Live Demo Showcase
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-start">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full border border-[#f5a623]/25 bg-[#f5a623]/10" style={fade(0.14)}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
              <span className="text-[#f5a623] text-xs font-semibold tracking-wide">Ready-To-Launch Digital Products</span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.1] tracking-tight mb-5"
              style={{ ...fade(0.2), textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
            >
              Future-Ready Digital{' '}
              <span className="text-[#f5a623]">Products</span>
              <br />Built For Growth
            </h1>

            <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-8 max-w-[500px]" style={fade(0.3)}>
              Launch scalable, secure, and fully customizable digital products designed to
              accelerate your business growth — delivered in days, not months.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-8" style={fade(0.4)}>
              <Link
                href="#products"
                className="group relative overflow-hidden bg-[#f5a623] text-[#0a1628] px-7 py-3.5 text-sm font-semibold rounded-lg hover:shadow-[0_6px_24px_rgba(245,166,35,0.45)] hover:scale-[1.02] transition-all duration-300 flex items-center gap-2"
              >
                <span className="relative z-10">Explore Products</span>
                <svg className="relative z-10 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 14 14">
                  <path d="M1 7h12M8 2l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
              </Link>
              <button
                onClick={openModal}
                className="flex items-center gap-2 border border-white/25 text-white/85 px-7 py-3.5 text-sm font-medium rounded-lg hover:border-white/50 hover:text-white transition-all duration-300"
              >
                Get Free Consultation
              </button>
            </div>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2" style={fade(0.5)}>
              {['7-Day Quick Launch', '100% Customizable', 'Enterprise Security', 'Built to Scale'].map((f) => (
                <span key={f} className="bg-white/[0.07] border border-white/[0.14] text-white/65 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide">
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — product list (hidden on mobile) */}
          <div className="hidden lg:block"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(24px)', transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s' }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-semibold">Featured Products</span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#f5a623]/14 text-[#f5a623] border border-[#f5a623]/25">20+ Solutions</span>
            </div>
            <div className="flex flex-col gap-2">
              {products.map((p, i) => (
                <div key={p.name}
                  className="group flex items-center justify-between gap-3 bg-white/[0.06] border border-white/[0.1] px-4 py-3 rounded-xl hover:bg-white/[0.11] hover:border-[#f5a623]/30 transition-all duration-200 cursor-pointer"
                  style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(14px)', transition: `opacity 0.5s ease ${0.5 + i * 0.08}s, transform 0.5s ease ${0.5 + i * 0.08}s` }}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.color }} />
                    <span className="text-white/85 text-sm font-medium truncate group-hover:text-[#f5a623] transition-colors">{p.name}</span>
                  </div>
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-full text-white/40 border border-white/10 bg-white/[0.05] flex-shrink-0">{p.tag}</span>
                </div>
              ))}
            </div>
            <Link href="/live-demo" className="mt-4 flex justify-end items-center gap-1.5 text-xs text-white/35 hover:text-[#f5a623] transition-colors font-medium">
              View all products
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 14 14">
                <path d="M1 7h12M8 2l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 pt-8 border-t border-white/[0.10]" style={fade(0.65)}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={s.label} className="flex flex-col items-center sm:items-start">
                <span className="text-2xl sm:text-3xl font-bold text-white leading-none">
                  <CountUp target={s.value} suffix={s.suffix} duration={1500 + i * 120} start={visible} />
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-white/40 font-medium mt-1.5">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: visible ? 0.35 : 0, transition: 'opacity 0.6s ease 1.3s' }}>
        <span className="text-[9px] uppercase tracking-[0.22em] text-white/50 font-semibold">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] opacity-20"
        style={{ background: 'linear-gradient(90deg, transparent, #f5a623 40%, rgba(255,255,255,0.3) 60%, transparent)' }} />
    </section>
  );
}
