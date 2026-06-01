'use client';
import React, { useEffect, useRef, useState } from 'react';

const perks = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    label: 'Remote Friendly',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    label: 'Fast Growth',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    label: 'Flexible Hours',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    label: 'Global Team',
  },
];

const openRoles = [
  { title: 'Senior React Developer', dept: 'Engineering', loc: 'Remote / Jaipur', type: 'Full-time' },
  { title: 'UI/UX Designer', dept: 'Design', loc: 'Jaipur, India', type: 'Full-time' },
  { title: 'Node.js Backend Engineer', dept: 'Engineering', loc: 'Remote', type: 'Full-time' },
  { title: 'Digital Marketing Lead', dept: 'Marketing', loc: 'Jaipur / Dubai', type: 'Full-time' },
];

function useEntrance(delay = 80) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return visible;
}

export default function CareerHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const visible = useEntrance(80);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const bg = sectionRef.current.querySelector('.parallax-bg') as HTMLElement;
      if (bg) bg.style.transform = `translateY(${window.scrollY * 0.25}px) scale(1.1)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeUp = (delay: number, extra?: React.CSSProperties): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
    ...extra,
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-[#07101f]"
    >
      {/* BG */}
      <div
        className="parallax-bg absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.1]"
        style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20241030/pngtree-personal-development-or-career-growth-success-ai-illustration-image_16473836.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#07101f]/88" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07101f] via-[#07101f]/85 to-[#07101f]/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07101f]/70 via-transparent to-[#07101f]/98" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Amber glow */}
      <div className="absolute top-0 left-0 w-[700px] h-[500px] opacity-[0.06]"
        style={{ background: 'radial-gradient(ellipse at 20% 30%, #f5a623 0%, transparent 65%)' }} />

      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 h-[1px] opacity-25"
        style={{ background: 'linear-gradient(90deg,transparent,#f5a623 25%,rgba(255,255,255,0.5) 50%,#f5a623 75%,transparent)' }} />

      {/* Left vertical accent */}
      <div className="absolute left-10 sm:left-16 top-28 bottom-28 w-[1px] opacity-[0.15]"
        style={{ background: 'linear-gradient(180deg,transparent,#f5a623 30%,rgba(255,255,255,0.3) 70%,transparent)' }} />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pt-32 pb-20">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8" style={fadeUp(0.1)}>
          <div className="w-7 h-[1.5px] bg-[#f5a623]" />
          <span
            className="text-[#f5a623] text-[10.5px] font-semibold tracking-[0.26em] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Careers at Kotibox
          </span>
          <div className="w-7 h-[1.5px] bg-[#f5a623] opacity-35" />
        </div>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 lg:gap-16 items-start">

          {/* LEFT */}
          <div>
            <h1
              className="text-[2.5rem] sm:text-[3.1rem] md:text-[3.7rem] lg:text-[4rem] text-white leading-[1.12] mb-7"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                letterSpacing: '-0.01em',
                ...fadeUp(0.2),
              }}
            >
              Build Your Career
              <br />
              <span style={{ fontWeight: 400, fontStyle: 'italic', color: 'rgba(255,255,255,0.72)' }}>with </span>
              <span style={{ color: '#f5a623', fontStyle: 'italic', fontWeight: 700 }} className="relative inline-block">
                Kotibox
                <span
                  className="absolute -bottom-1 left-0 h-[2px] bg-[#f5a623] rounded-full"
                  style={{ width: visible ? '100%' : '0%', transition: 'width 0.9s cubic-bezier(0.4,0,0.2,1) 1s', opacity: 0.4 }}
                />
              </span>
            </h1>

            <p
              className="text-[14.5px] sm:text-[15px] text-white/52 leading-[1.92] mb-10 max-w-[500px]"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, ...fadeUp(0.35) }}
            >
              Join a team of passionate engineers, designers, and strategists
              building cutting-edge products that power businesses across 3 continents.
              Your next chapter starts here.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12" style={fadeUp(0.48)}>
              <button
                className="group relative overflow-hidden bg-[#f5a623] text-[#07101f] px-7 py-3.5 text-sm font-bold tracking-wide rounded-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span className="relative z-10">View Open Positions</span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
              </button>
              <button
                className="group flex items-center gap-2.5 border border-white/18 text-white/80 px-7 py-3.5 text-sm font-medium tracking-wide rounded-sm hover:border-[#f5a623]/50 hover:text-white transition-all duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span>Life at Kotibox</span>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform duration-200">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Perk pills */}
            <div className="flex flex-wrap gap-2.5" style={fadeUp(0.6)}>
              {perks.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-[#07101f]/60 border border-white/[0.12] text-white/60 px-3.5 py-2 rounded-sm text-[12px] font-medium hover:border-[#f5a623]/35 hover:text-white/80 hover:bg-[#0d1e35]/70 transition-all duration-200 cursor-default backdrop-blur-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span className="text-[#f5a623] opacity-80">{p.icon}</span>
                  {p.label}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Open Roles card */}
          <div
            className="hidden lg:block"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(28px)',
              transition: 'opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s',
            }}
          >
            {/* Card header */}
            <div className="flex items-center justify-between mb-4">
              <span
                className="text-[10.5px] uppercase tracking-[0.2em] text-white/35 font-semibold"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Open Positions
              </span>
              <span
                className="text-[10px] font-semibold px-2.5 py-1 rounded-sm"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  background: 'rgba(245,166,35,0.12)',
                  color: '#f5a623',
                  border: '1px solid rgba(245,166,35,0.22)',
                }}
              >
                {openRoles.length} Roles
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {openRoles.map((role, i) => (
                <div
                  key={i}
                  className="group flex items-start justify-between gap-3 bg-[#07101f]/70 border border-white/[0.10] px-4 py-3.5 rounded-sm hover:bg-[#0d1e35]/90 hover:border-[#f5a623]/30 transition-all duration-250 cursor-pointer backdrop-blur-sm"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(14px)',
                    transition: `opacity 0.55s ease ${0.55 + i * 0.1}s, transform 0.55s ease ${0.55 + i * 0.1}s, background 0.25s, border-color 0.25s`,
                  }}
                >
                  <div className="min-w-0">
                    <p
                      className="text-white text-[13px] font-semibold mb-1 truncate group-hover:text-[#f5a623] transition-colors duration-200"
                      style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.01em' }}
                    >
                      {role.title}
                    </p>
                    <div className="flex items-center gap-2 text-white/35 text-[11px]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <span>{role.dept}</span>
                      <span className="w-[3px] h-[3px] rounded-full bg-white/25 flex-shrink-0" />
                      <span>{role.loc}</span>
                    </div>
                  </div>
                  <span
                    className="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-sm mt-0.5"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      background: 'rgba(255,255,255,0.06)',
                      color: 'rgba(255,255,255,0.4)',
                      border: '1px solid rgba(255,255,255,0.09)',
                    }}
                  >
                    {role.type}
                  </span>
                </div>
              ))}
            </div>

            {/* View all link */}
            <div className="mt-4 flex justify-end">
              <button
                className="flex items-center gap-1.5 text-[11.5px] text-white/30 hover:text-[#f5a623] transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
              >
                View all openings
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-16 pt-8 border-t border-white/[0.07] grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4"
          style={fadeUp(0.72)}
        >
          {[
            { val: '150+', label: 'Team Members' },
            { val: '8+', label: 'Tech Stacks' },
            { val: '3', label: 'Global Offices' },
            { val: '4.8★', label: 'Glassdoor Rating' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-start">
              <div
                className="text-[1.9rem] md:text-[2.15rem] text-white leading-none mb-1.5"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                {s.val.includes('★') ? (
                  <>
                    {s.val.replace('★', '')}
                    <span className="text-[#f5a623] text-[1.4rem]">★</span>
                  </>
                ) : (
                  <>
                    {s.val.replace(/\D+$/, '')}
                    <span className="text-[#f5a623]">{s.val.replace(/^\d+/, '')}</span>
                  </>
                )}
              </div>
              <div
                className="text-[10px] uppercase tracking-[0.18em] text-white/35 font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: visible ? 0.35 : 0, transition: 'opacity 0.6s ease 1.3s' }}
      >
        <span className="text-[9px] uppercase tracking-[0.22em] text-white/50 font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Scroll</span>
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