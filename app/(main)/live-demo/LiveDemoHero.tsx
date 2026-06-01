'use client';
import React, { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    text: '7-Day Quick Launch',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    text: '100% Customizable',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    text: 'Enterprise Grade Security',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    text: 'Built to Scale',
  },
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
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const StatItem = ({ value, suffix, label, index, animate }: {
  value: number; suffix: string; label: string; index: number; animate: boolean;
}) => {
  const count = useCountUp(value, 1500 + index * 120, animate);
  return (
    <div className="flex flex-col items-center" style={{
      opacity: animate ? 1 : 0,
      transform: animate ? 'translateY(0)' : 'translateY(16px)',
      transition: `opacity 0.55s ease ${0.7 + index * 0.12}s, transform 0.55s ease ${0.7 + index * 0.12}s`,
    }}>
      <div className="text-[2.2rem] sm:text-[2.6rem] leading-none font-bold text-white mb-1.5"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
        {animate ? count : 0}
        <span className="text-[#f5a623]">{suffix}</span>
      </div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-white/38 font-medium"
        style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {label}
      </div>
    </div>
  );
};

export default function LiveDemoHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const visible = useEntrance(80);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const bg = sectionRef.current.querySelector('.parallax-bg') as HTMLElement;
      if (bg) bg.style.transform = `translateY(${window.scrollY * 0.22}px) scale(1.1)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-[#07101f]"
    >
      {/* BG Image */}
      <div
        className="parallax-bg absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.1]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000')" }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#07101f]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07101f] via-[#07101f]/88 to-[#07101f]/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07101f]/65 via-transparent to-[#07101f]/98" />

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.032]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
        backgroundSize: '72px 72px',
      }} />

      {/* Amber glow top-left */}
      <div className="absolute -top-40 -left-40 w-[750px] h-[550px] opacity-[0.07]"
        style={{ background: 'radial-gradient(ellipse at 25% 30%, #f5a623 0%, transparent 65%)' }} />

      {/* Blue tech glow bottom-right */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] opacity-[0.05]"
        style={{ background: 'radial-gradient(ellipse at 80% 80%, #4a9eff 0%, transparent 65%)' }} />

      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 h-[1px] opacity-25"
        style={{ background: 'linear-gradient(90deg,transparent,#f5a623 25%,rgba(255,255,255,0.4) 50%,#f5a623 75%,transparent)' }} />

      {/* Left vertical accent */}
      <div className="absolute left-10 sm:left-16 top-28 bottom-28 w-[1px] opacity-[0.14]"
        style={{ background: 'linear-gradient(180deg,transparent,#f5a623 30%,rgba(255,255,255,0.3) 70%,transparent)' }} />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pt-32 pb-20">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8" style={fadeUp(0.1)}>
          <div className="w-7 h-[1.5px] bg-[#f5a623]" />
          <span className="text-[#f5a623] text-[10.5px] font-semibold tracking-[0.26em] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Live Demo Showcase
          </span>
          <div className="w-7 h-[1.5px] bg-[#f5a623] opacity-35" />
        </div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-14 lg:gap-16 items-start">

          {/* LEFT */}
          <div>
            {/* Badge pill */}
            <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border border-[#f5a623]/20 bg-[#f5a623]/08"
              style={{ ...fadeUp(0.15), background: 'rgba(245,166,35,0.08)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] animate-pulse" />
              <span className="text-[#f5a623] text-[11px] font-semibold tracking-wide"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Ready-To-Launch Digital Products
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-[2.5rem] sm:text-[3.1rem] md:text-[3.7rem] lg:text-[4rem] text-white leading-[1.1] mb-7"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                letterSpacing: '-0.01em',
                ...fadeUp(0.22),
              }}
            >
              Future-Ready
              <br />
              <span style={{ fontWeight: 400, fontStyle: 'italic', color: 'rgba(255,255,255,0.72)' }}>Web & Mobile </span>
              <span style={{ color: '#f5a623', fontStyle: 'italic', fontWeight: 700 }} className="relative inline-block">
                Apps
                <span className="absolute -bottom-1 left-0 h-[2px] bg-[#f5a623] rounded-full"
                  style={{ width: visible ? '100%' : '0%', transition: 'width 0.85s cubic-bezier(0.4,0,0.2,1) 0.95s', opacity: 0.4 }} />
              </span>
              <br />
              <span style={{ fontWeight: 700, color: 'rgba(255,255,255,0.95)' }}>Built For Growth</span>
            </h1>

            {/* Body */}
            <p className="text-[14.5px] sm:text-[15px] text-white/52 leading-[1.92] mb-10 max-w-[500px]"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, ...fadeUp(0.35) }}>
              Launch scalable, secure, and fully customizable digital products
              designed to accelerate business growth, improve customer experience,
              and help you dominate your market faster.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10" style={fadeUp(0.46)}>
              <button
                className="group relative overflow-hidden bg-[#f5a623] text-[#07101f] px-7 py-3.5 text-sm font-bold tracking-wide rounded-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  Explore Products
                </span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
              </button>
              <button
                className="group flex items-center gap-2.5 border border-white/18 text-white/80 px-7 py-3.5 text-sm font-medium tracking-wide rounded-sm hover:border-[#f5a623]/50 hover:text-white transition-all duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span>Get Free Consultation</span>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform duration-200">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2.5" style={fadeUp(0.58)}>
              {features.map((f, i) => (
                <div key={i}
                  className="flex items-center gap-2 bg-[#07101f]/60 border border-white/[0.10] text-white/55 px-3.5 py-2 rounded-sm text-[11.5px] font-medium hover:border-[#f5a623]/30 hover:text-white/80 transition-all duration-200 cursor-default backdrop-blur-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <span className="text-[#f5a623] opacity-80">{f.icon}</span>
                  {f.text}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Product showcase card */}
          <div className="hidden lg:block" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(28px)',
            transition: 'opacity 0.7s ease 0.42s, transform 0.7s ease 0.42s',
          }}>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10.5px] uppercase tracking-[0.2em] text-white/35 font-semibold"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Our Products
              </span>
              <span className="text-[10px] font-semibold px-2.5 py-1 rounded-sm"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  background: 'rgba(245,166,35,0.12)',
                  color: '#f5a623',
                  border: '1px solid rgba(245,166,35,0.22)',
                }}>
                20+ Solutions
              </span>
            </div>

            {/* Product list */}
            <div className="flex flex-col gap-2.5">
              {products.map((p, i) => (
                <div key={i}
                  className="group flex items-center justify-between gap-3 bg-[#07101f]/70 border border-white/[0.08] px-4 py-3.5 rounded-sm hover:bg-[#0d1e35]/85 hover:border-[#f5a623]/25 transition-all duration-200 cursor-pointer backdrop-blur-sm"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(14px)',
                    transition: `opacity 0.55s ease ${0.52 + i * 0.09}s, transform 0.55s ease ${0.52 + i * 0.09}s, background 0.2s, border-color 0.2s`,
                  }}>
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Color dot */}
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.color }} />
                    <span className="text-white text-[13px] font-semibold truncate group-hover:text-[#f5a623] transition-colors duration-200"
                      style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.01em' }}>
                      {p.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-sm"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        background: 'rgba(255,255,255,0.05)',
                        color: 'rgba(255,255,255,0.38)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}>
                      {p.tag}
                    </span>
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none"
                      className="text-white/20 group-hover:text-[#f5a623] group-hover:translate-x-0.5 transition-all duration-200">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* View all */}
            <div className="mt-4 flex justify-end">
              <button className="flex items-center gap-1.5 text-[11.5px] text-white/30 hover:text-[#f5a623] transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
                View all products
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.07]" style={fadeUp(0.7)}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4">
            <StatItem value={20} suffix="+" label="Solutions" index={0} animate={visible} />
            <StatItem value={100} suffix="%" label="Customizable" index={1} animate={visible} />
            <StatItem value={7} suffix=" Days" label="Quick Launch" index={2} animate={visible} />
            <StatItem value={500} suffix="+" label="Happy Clients" index={3} animate={visible} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: visible ? 0.35 : 0, transition: 'opacity 0.6s ease 1.3s' }}>
        <span className="text-[9px] uppercase tracking-[0.22em] text-white/50 font-semibold"
          style={{ fontFamily: "'DM Sans', sans-serif" }}>Scroll</span>
        <div className="w-[1px] h-9 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] opacity-15"
        style={{ background: 'linear-gradient(90deg,transparent,#f5a623 40%,rgba(255,255,255,0.3) 60%,transparent)' }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400;1,700&family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>
    </section>
  );
}