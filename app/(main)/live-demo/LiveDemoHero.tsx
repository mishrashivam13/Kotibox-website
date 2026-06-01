'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useModal } from '@/components/providers/ModalContext';

const features = [
  { text: '7-Day Quick Launch' },
  { text: '100% Customizable' },
  { text: 'Enterprise Security' },
  { text: 'Built to Scale' },
];

const products = [
  { name: 'E-Commerce Platform', tag: 'Web App', color: '#f5a623' },
  { name: 'CRM Dashboard', tag: 'SaaS', color: '#4a9eff' },
  { name: 'On-Demand Delivery', tag: 'Mobile', color: '#34d399' },
  { name: 'Hospital Management', tag: 'Enterprise', color: '#a78bfa' },
  { name: 'EdTech LMS', tag: 'Web App', color: '#f5a623' },
  { name: 'Real Estate Portal', tag: 'Web + Mobile', color: '#4a9eff' },
];

function useEntrance(delay = 80) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return visible;
}

function useCountUp(target: number, duration = 1600, start = false) {
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

export default function LiveDemoHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const visible = useEntrance(80);
  const { openModal } = useModal();

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

  const stats = [
    { value: 20, suffix: '+', label: 'Solutions' },
    { value: 100, suffix: '%', label: 'Customizable' },
    { value: 7, suffix: ' Days', label: 'Quick Launch' },
    { value: 500, suffix: '+', label: 'Happy Clients' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-[#0a1628]"
    >
      {/* BG image */}
      <div
        className="parallax-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&q=85')" }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#0a1628]/58" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/85 via-[#0a1628]/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/45 via-transparent to-[#0a1628]/78" />

      {/* Amber glow */}
      <div className="absolute -top-32 -left-32 w-[700px] h-[500px] opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 25%, #f5a623, transparent 65%)' }} />

      {/* Blue glow right */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 80%, #4a9eff, transparent 65%)' }} />

      {/* Top accent */}
      <div className="absolute top-0 inset-x-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #f5a623 25%, rgba(255,255,255,0.4) 50%, #f5a623 75%, transparent)' }} />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pt-28 pb-16">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8" style={fade(0.1)}>
          <div className="w-7 h-[1.5px] bg-[#f5a623]" />
          <span className="text-[#f5a623] text-xs font-semibold tracking-[0.28em] uppercase">
            Live Demo Showcase
          </span>
          <div className="w-7 h-[1.5px] bg-[#f5a623] opacity-35" />
        </div>

        {/* Two-col */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-14 items-start">

          {/* LEFT */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border border-[#f5a623]/25"
              style={{ ...fade(0.15), background: 'rgba(245,166,35,0.1)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] animate-pulse" />
              <span className="text-[#f5a623] text-xs font-semibold tracking-wide">
                Ready-To-Launch Digital Products
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6"
              style={{ ...fade(0.22), textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
            >
              Future-Ready Digital
              <br />
              <span className="text-[#f5a623]">Products</span>
              <span className="text-white/70"> Built</span>
              <br />
              <span className="text-white">For Growth</span>
            </h1>

            <p
              className="text-base sm:text-lg text-white/80 leading-relaxed mb-10 max-w-[480px]"
              style={fade(0.35)}
            >
              Launch scalable, secure, and fully customizable digital products
              designed to accelerate your business growth and help you dominate
              your market faster.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10" style={fade(0.46)}>
              <button
                className="group relative overflow-hidden bg-[#f5a623] text-[#0a1628] px-8 py-3.5 text-sm font-extrabold tracking-wide rounded-lg hover:shadow-[0_6px_24px_rgba(245,166,35,0.45)] hover:scale-[1.02] transition-all duration-300"
              >
                <span className="relative z-10flex items-center gap-2">Explore Products</span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
              </button>
              <button
                onClick={openModal}
                className="flex items-center gap-2 border border-white/25 text-white/85 px-8 py-3.5 text-sm font-medium rounded-lg hover:border-white/50 hover:text-white transition-all duration-300"
              >
                Get Free Consultation
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2.5" style={fade(0.58)}>
              {features.map((f) => (
                <span
                  key={f.text}
                  className="bg-white/[0.08] border border-white/[0.14] text-white/75 px-4 py-2 rounded-full text-xs font-semibold tracking-wide"
                >
                  {f.text}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — Product list */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(28px)',
              transition: 'opacity 0.7s ease 0.42s, transform 0.7s ease 0.42s',
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-[0.2em] text-white/45 font-semibold">Our Products</span>
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(245,166,35,0.14)', color: '#f5a623', border: '1px solid rgba(245,166,35,0.25)' }}
              >
                20+ Solutions
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              {products.map((p, i) => (
                <div
                  key={i}
                  className="group flex items-center justify-between gap-3 bg-white/[0.07] border border-white/[0.12] px-4 py-3.5 rounded-xl hover:bg-white/[0.12] hover:border-[#f5a623]/30 transition-all duration-200 cursor-pointer"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(14px)',
                    transition: `opacity 0.55s ease ${0.52 + i * 0.09}s, transform 0.55s ease ${0.52 + i * 0.09}s`,
                  }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.color }} />
                    <span className="text-white text-sm font-semibold truncate group-hover:text-[#f5a623] transition-colors">
                      {p.name}
                    </span>
                  </div>
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full text-white/45 border border-white/12 flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.06)' }}
                  >
                    {p.tag}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-end">
              <button className="text-xs text-white/35 hover:text-[#f5a623] transition-colors font-medium flex items-center gap-1.5">
                View all products
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.10]" style={fade(0.7)}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
            {stats.map((s, i) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const count = useCountUp(s.value, 1500 + i * 120, visible);
              return (
                <div key={s.label} className="flex flex-col items-center sm:items-start">
                  <span className="text-3xl font-extrabold text-white leading-none">
                    {visible ? count : 0}<span className="text-[#f5a623]">{s.suffix}</span>
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-white/40 font-medium mt-1.5">
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: visible ? 0.4 : 0, transition: 'opacity 0.6s ease 1.3s' }}
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
