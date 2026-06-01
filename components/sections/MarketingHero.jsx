'use client'
import React from 'react';
import { TrendingUp } from 'lucide-react';
import { useModal } from '@/components/providers/ModalContext';

/* ── Brand icon SVGs ─────────────────────────────────────────────────────── */
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" stroke="none" />
  </svg>
);
const WhatsappIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

/* ─────────────────────────────────────────────────────────────────────────── */
// 5 icons × 72° apart → delay = 16s × (72/360) = 3.2s each
const orbitIcons = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    bg: '#0077b5',
    glow: 'rgba(0,119,181,0.55)',
    delay: '0s',
    icon: <LinkedinIcon />,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    bg: 'linear-gradient(135deg,#f09433,#dc2743,#bc1888)',
    glow: 'rgba(220,39,67,0.55)',
    delay: '-3.2s',
    icon: <InstagramIcon />,
  },
  {
    id: 'youtube',
    label: 'YouTube',
    bg: '#FF0000',
    glow: 'rgba(255,0,0,0.45)',
    delay: '-6.4s',
    icon: <YoutubeIcon />,
  },
  {
    id: 'facebook',
    label: 'Facebook',
    bg: '#1877F2',
    glow: 'rgba(24,119,242,0.55)',
    delay: '-9.6s',
    icon: <FacebookIcon />,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    bg: '#25D366',
    glow: 'rgba(37,211,102,0.55)',
    delay: '-12.8s',
    icon: <WhatsappIcon />,
  },
];

export default function MarketingHero() {
  const { openModal } = useModal();

  return (
    <section className="relative bg-[#0b1727] min-h-screen py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans flex items-center">

      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-slate-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">

        {/* ── LEFT: Text ── */}
        <div className="flex flex-col items-start text-left max-w-2xl">
          <div className="flex items-center gap-2 text-[#a3e635] mb-6 font-semibold tracking-[0.2em] uppercase text-sm">
            <TrendingUp size={20} strokeWidth={2.2} />
            Premium Marketing Solutions
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
            Your One-Stop Marketing{' '}
            <br className="hidden md:block" />
            Agency for{' '}
            <span className="text-[#f5a623]">
              Complete 360°{' '}
              <br className="hidden md:block" />
              Brand Growth
            </span>
          </h1>

          <button
            onClick={openModal}
            className="bg-[#f5a623] hover:bg-[#e0931c] text-[#0b1727] font-extrabold text-base px-8 py-4 rounded-xl shadow-[0_8px_24px_rgba(245,166,35,0.35)] hover:shadow-[0_12px_32px_rgba(245,166,35,0.5)] transition-all duration-300 hover:-translate-y-1"
          >
            Start Your Marketing Journey →
          </button>
        </div>

        {/* ── RIGHT: Orbit Visual ── */}
        <div className="relative w-full max-w-[480px] mx-auto aspect-square flex items-center justify-center">

          {/* Dashed orbit ring (decorative) */}
          <div
            className="absolute rounded-full border border-dashed border-white/[0.12] pointer-events-none"
            style={{ width: '91%', height: '91%' }}
          />

          {/* White outer ring */}
          <div
            className="absolute rounded-full bg-white shadow-2xl"
            style={{ inset: '4%' }}
          />

          {/* Yellow circle + image */}
          <div
            className="absolute rounded-full overflow-hidden flex items-end justify-center"
            style={{ inset: '7%', background: '#fde047' }}
          >
            <img
              src="https://img.magnific.com/free-photo/cute-freelance-girl-using-laptop-sitting-floor-smiling_176420-20221.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Marketing Professional"
              className="h-full w-auto object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_0%,transparent_65%)] pointer-events-none" />
          </div>

          {/* ── Orbiting social icons ── */}
          {orbitIcons.map((item) => (
            <div
              key={item.id}
              className="orbit-node"
              style={{ animationDelay: item.delay }}
            >
              {/*
                .orbit-icon-pill counter-rotates at the same speed
                so the pill stays visually upright while orbiting.
              */}
              <div
                className="orbit-icon-pill"
                style={{ animationDelay: item.delay }}
              >
                <div
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-bold tracking-wide whitespace-nowrap select-none"
                  style={{
                    background: item.bg,
                    boxShadow: `0 6px 20px ${item.glow}`,
                  }}
                >
                  {item.icon}
                  {item.label}
                </div>
              </div>
            </div>
          ))}

          {/* Stats card */}
          <div className="absolute bottom-[-3%] left-[3%] bg-white rounded-2xl p-3.5 shadow-2xl flex flex-col items-center gap-2 w-36 md:w-44 z-10">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none" stroke="#f1f5f9" strokeWidth="4"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none" stroke="#2dd4bf" strokeWidth="4"
                  strokeDasharray="35, 100"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none" stroke="#3b82f6" strokeWidth="4"
                  strokeDasharray="65, 100" strokeDashoffset="-35"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-sm font-extrabold text-slate-800 leading-none">491K</span>
                <span className="text-[9px] text-slate-500 font-medium text-center leading-tight mt-0.5">
                  Total<br />Audience
                </span>
              </div>
            </div>
            <div className="flex justify-between w-full px-1">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                <span className="text-[10px] font-bold text-slate-600">65%</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#2dd4bf]" />
                <span className="text-[10px] font-bold text-slate-600">35%</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
