'use client';
import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '500+', label: 'Global Clients' },
  { value: '12+', label: 'Years of Excellence' },
  { value: '98%', label: 'Client Retention' },
  { value: '3', label: 'Countries' },
];

const certBadges = ['ISO 9001:2015', 'CMMI Level 3', 'Google Partner', 'AWS Certified'];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const StatCard = ({ value, label, index, animate }: { value: string; label: string; index: number; animate: boolean }) => {
  const numericPart = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  const count = useCountUp(numericPart, 1600 + index * 150, animate);

  return (
    <div
      className="flex flex-col items-center sm:items-start text-center sm:text-left"
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${0.8 + index * 0.12}s, transform 0.6s ease ${0.8 + index * 0.12}s`,
      }}
    >
      <div className="text-3xl md:text-4xl text-white leading-none" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
        {animate ? count : 0}
        <span className="text-[#f5a623]">{suffix}</span>
      </div>
      <div className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {label}
      </div>
    </div>
  );
};

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  // Subtle parallax on bg
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrollY = window.scrollY;
      const bg = sectionRef.current.querySelector('.parallax-bg') as HTMLElement;
      if (bg) bg.style.transform = `translateY(${scrollY * 0.28}px) scale(1.08)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[#07101f]"
    >
      {/* ── Background image with parallax ── */}
      <div
        className="parallax-bg absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.08]"
        style={{
          backgroundImage:
            "url('https://img.magnific.com/free-photo/diverse-businesspeople-having-meeting_53876-103954.jpg?semt=ais_hybrid&w=740&q=80')",
        }}
      />

      {/* ── Multi-layer overlays for depth ── */}
      <div className="absolute inset-0 bg-[#07101f]/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07101f]/60 via-transparent to-[#07101f]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07101f]/70 via-transparent to-[#07101f]/30" />

      {/* ── Architectural grid lines ── */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── Amber accent glow top-left ── */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #f5a623 0%, transparent 70%)' }}
      />

      {/* ── Fine horizontal rule top ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-30"
        style={{ background: 'linear-gradient(90deg, transparent, #f5a623 30%, #f5a623 70%, transparent)' }}
      />

      {/* ── Vertical accent line left ── */}
      <div
        className="absolute left-8 sm:left-14 top-32 bottom-32 w-[1px] opacity-20"
        style={{ background: 'linear-gradient(180deg, transparent, #f5a623 30%, rgba(255,255,255,0.4) 70%, transparent)' }}
      />

      {/* ── Main Content ── */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pt-28 pb-16">

        {/* ── Eyebrow ── */}
        <div
          className="flex items-center gap-3 mb-8 justify-center lg:justify-start"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s',
          }}
        >
          <div className="w-8 h-[1.5px] bg-[#f5a623]" />
          <span className="text-[#f5a623] text-[10.5px] font-semibold tracking-[0.24em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            About Kotibox Global Technologies
          </span>
          <div className="w-8 h-[1.5px] bg-[#f5a623] opacity-40" />
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left column */}
          <div>
            {/* Heading */}
            <h1
              className="text-[2.6rem] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[4.2rem] text-white leading-[1.14] mb-7"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                letterSpacing: '-0.01em',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.65s ease 0.22s, transform 0.65s ease 0.22s',
              }}
            >
              Your Trusted Partner
              <br />
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontStyle: 'italic', color: 'rgba(255,255,255,0.75)' }}>in </span>
              <span
                className="relative inline-block"
                style={{ color: '#f5a623', fontStyle: 'italic', fontWeight: 700 }}
              >
                Digital Innovation
                <span
                  className="absolute -bottom-1 left-0 h-[2px] bg-[#f5a623] rounded-full"
                  style={{
                    width: visible ? '100%' : '0%',
                    transition: 'width 0.9s cubic-bezier(0.4,0,0.2,1) 0.95s',
                    opacity: 0.45,
                  }}
                />
              </span>
            </h1>

            {/* Body */}
            <p
              className="text-[15px] sm:text-[15.5px] text-white/55 leading-[1.9] mb-10 max-w-[490px]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease 0.38s, transform 0.6s ease 0.38s',
              }}
            >
              We help businesses embrace the future with cutting-edge digital
              solutions, innovative strategies, and technology-driven transformation
              that unlocks measurable growth and long-term competitive advantage.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-12"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s',
              }}
            >
              <button className="group relative overflow-hidden bg-[#f5a623] text-[#07101f] px-7 py-3.5 text-sm font-bold tracking-wide rounded-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <span className="relative z-10">Explore Our Work</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
              </button>
              <button className="group flex items-center gap-2.5 border border-white/20 text-white px-7 py-3.5 text-sm font-semibold tracking-wide rounded-sm hover:border-[#f5a623]/60 hover:bg-white/5 transition-all duration-300">
                <span>Contact Us</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform duration-200">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Cert badges */}
            <div
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.6s ease 0.65s',
              }}
            >
              {certBadges.map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/40 border border-white/10 px-3 py-1.5 rounded-sm hover:border-[#f5a623]/30 hover:text-white/60 transition-colors duration-200 cursor-default"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — Feature card stack */}
          <div
            className="hidden lg:flex flex-col gap-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s',
            }}
          >
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                ),
                title: 'Technology-First Thinking',
                desc: 'Every solution we build is architected for scale, resilience, and future-readiness from day one.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                  </svg>
                ),
                title: 'Agile Delivery Model',
                desc: 'Sprint-based execution with transparent milestones keeps projects on time, on budget, always.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                title: 'Dedicated Expert Teams',
                desc: 'Senior engineers, designers and strategists embedded as an extension of your organisation.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex gap-4 items-start bg-white/[0.04] border border-white/[0.07] rounded-sm px-5 py-4 hover:bg-white/[0.07] hover:border-[#f5a623]/25 transition-all duration-300 cursor-default"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(20px)',
                  transition: `opacity 0.6s ease ${0.6 + i * 0.12}s, transform 0.6s ease ${0.6 + i * 0.12}s, background 0.3s, border-color 0.3s`,
                }}
              >
                <div className="mt-0.5 w-9 h-9 flex-shrink-0 rounded-sm bg-[#f5a623]/10 border border-[#f5a623]/20 flex items-center justify-center text-[#f5a623] group-hover:bg-[#f5a623]/18 transition-colors duration-200">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white text-[13.5px] font-semibold mb-1" style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.01em' }}>{item.title}</p>
                  <p className="text-white/40 text-[12.5px] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Stats row ── */}
        <div
          className="mt-14 pt-10 border-t border-white/[0.08]"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s ease 0.75s',
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4">
            {stats.map((stat, i) => (
              <StatCard key={i} value={stat.value} label={stat.label} index={i} animate={visible} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: visible ? 0.4 : 0,
          transition: 'opacity 0.6s ease 1.2s',
        }}
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/50 font-semibold">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>

      {/* ── Bottom fine rule ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px] opacity-20"
        style={{ background: 'linear-gradient(90deg, transparent, #f5a623 40%, rgba(255,255,255,0.3) 60%, transparent)' }}
      />

      {/* Fonts: Playfair Display (headings) + DM Sans (body) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400;1,700&family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>
    </section>
  );
}