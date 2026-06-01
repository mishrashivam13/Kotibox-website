'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useModal } from '@/components/providers/ModalContext';

const perks = [
  { label: 'Remote Friendly' },
  { label: 'Fast Growth' },
  { label: 'Flexible Hours' },
  { label: 'Global Team' },
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
    transform: visible ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-[#0a1628]"
    >
      {/* BG image */}
      <div
        className="parallax-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=85')" }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#0a1628]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/85 via-[#0a1628]/40 to-[#0a1628]/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/45 via-transparent to-[#0a1628]/75" />

      {/* Amber glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[450px] opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 15% 25%, #f5a623, transparent 65%)' }} />

      {/* Top accent */}
      <div className="absolute top-0 inset-x-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #f5a623 30%, rgba(255,255,255,0.4) 50%, #f5a623 70%, transparent)' }} />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pt-28 pb-20">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8" style={fade(0.1)}>
          <div className="w-7 h-[1.5px] bg-[#f5a623]" />
          <span className="text-[#f5a623] text-xs font-semibold tracking-[0.28em] uppercase">
            Careers at Kotibox
          </span>
          <div className="w-7 h-[1.5px] bg-[#f5a623] opacity-35" />
        </div>

        {/* Two-col */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">

          {/* LEFT */}
          <div>
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6"
              style={{ ...fade(0.2), textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
            >
              Build Your Career
              <br />
              <span className="text-white/55">with </span>
              <span className="text-[#f5a623] relative inline-block">
                Kotibox
                <span
                  className="absolute -bottom-1.5 left-0 h-[3px] bg-[#f5a623] rounded-full"
                  style={{ width: visible ? '100%' : '0%', transition: 'width 1s cubic-bezier(0.4,0,0.2,1) 1s', opacity: 0.5 }}
                />
              </span>
            </h1>

            <p
              className="text-base sm:text-lg text-white/80 leading-relaxed mb-10 max-w-[480px]"
              style={fade(0.35)}
            >
              Join passionate engineers, designers, and strategists building
              cutting-edge products that power businesses across 3 continents.
              Your next chapter starts here.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10" style={fade(0.48)}>
              <button
                onClick={openModal}
                className="group relative overflow-hidden bg-[#f5a623] text-[#0a1628] px-8 py-3.5 text-sm font-extrabold tracking-wide rounded-lg hover:shadow-[0_6px_24px_rgba(245,166,35,0.45)] hover:scale-[1.02] transition-all duration-300"
              >
                <span className="relative z-10">Get Free Consultation</span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
              </button>
              <button className="flex items-center gap-2 border border-white/25 text-white/85 px-8 py-3.5 text-sm font-medium rounded-lg hover:border-white/50 hover:text-white transition-all duration-300">
                View Open Positions
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Perk pills */}
            <div className="flex flex-wrap gap-2.5" style={fade(0.6)}>
              {perks.map((p) => (
                <span
                  key={p.label}
                  className="bg-white/[0.08] border border-white/[0.14] text-white/75 px-4 py-2 rounded-full text-xs font-semibold tracking-wide"
                >
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — Open Roles */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(28px)',
              transition: 'opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s',
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-[0.2em] text-white/45 font-semibold">
                Open Positions
              </span>
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(245,166,35,0.14)', color: '#f5a623', border: '1px solid rgba(245,166,35,0.25)' }}
              >
                {openRoles.length} Roles
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              {openRoles.map((role, i) => (
                <div
                  key={i}
                  className="group flex items-start justify-between gap-3 bg-white/[0.07] border border-white/[0.12] px-4 py-4 rounded-xl hover:bg-white/[0.12] hover:border-[#f5a623]/35 transition-all duration-200 cursor-pointer"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(14px)',
                    transition: `opacity 0.55s ease ${0.55 + i * 0.1}s, transform 0.55s ease ${0.55 + i * 0.1}s`,
                  }}
                >
                  <div className="min-w-0">
                    <p className="text-white text-sm font-semibold mb-1 group-hover:text-[#f5a623] transition-colors">
                      {role.title}
                    </p>
                    <div className="flex items-center gap-2 text-white/45 text-xs">
                      <span>{role.dept}</span>
                      <span className="w-[3px] h-[3px] rounded-full bg-white/30 flex-shrink-0" />
                      <span>{role.loc}</span>
                    </div>
                  </div>
                  <span
                    className="flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-full text-white/50 border border-white/12 mt-0.5 whitespace-nowrap"
                    style={{ background: 'rgba(255,255,255,0.06)' }}
                  >
                    {role.type}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-end">
              <button className="text-xs text-white/35 hover:text-[#f5a623] transition-colors font-medium flex items-center gap-1.5">
                View all openings
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div
          className="mt-14 pt-8 border-t border-white/[0.10] grid grid-cols-2 sm:grid-cols-4 gap-6"
          style={fade(0.72)}
        >
          {[
            { val: '150+', label: 'Team Members' },
            { val: '8+', label: 'Tech Stacks' },
            { val: '3', label: 'Global Offices' },
            { val: '4.8★', label: 'Glassdoor Rating' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="text-2xl md:text-3xl font-extrabold text-white leading-none">
                {s.val.replace('★', '')}<span className="text-[#f5a623]">{s.val.includes('★') ? '★' : ''}</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/40 font-medium mt-1.5">{s.label}</span>
            </div>
          ))}
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
