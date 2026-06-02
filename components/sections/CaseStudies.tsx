'use client'
import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    category: 'Food & Restaurant',
    title: 'Koushi',
    tagline: 'Smart Food Ordering & Table Booking Platform',
    description: 'Koushi lets users order food online, book restaurant tables, and choose self pickup with a smooth and secure experience. Built for multiple restaurant chains across the Middle East.',
    bgColor: '#A96F12',
    gradient: 'from-[#A96F12] to-[#7A4E0A]',
    image: 'images/casestudies/kaushi2.png',
    metrics: [
      { value: '40K+', label: 'Monthly Orders' },
      { value: '4.8★', label: 'App Rating' },
      { value: '3 Mo', label: 'Delivered In' },
    ],
    platforms: ['iOS', 'Android'],
    tags: ['React Native', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    category: 'Entertainment & Social',
    title: 'Vani',
    tagline: 'Live Party & Social Entertainment App',
    description: 'Vani is a social entertainment app where users can join parties, chat with friends, enjoy live activities, and connect in fun interactive rooms. Features real-time voice and video.',
    bgColor: '#1C102E',
    gradient: 'from-[#2D1B4E] to-[#1C102E]',
    image: 'images/casestudies/vani1.png',
    metrics: [
      { value: '200K+', label: 'Active Users' },
      { value: '4.7★', label: 'App Rating' },
      { value: '5 Mo', label: 'Delivered In' },
    ],
    platforms: ['iOS', 'Android'],
    tags: ['Flutter', 'Firebase', 'WebRTC'],
  },
  {
    id: 3,
    category: 'OTT & Streaming',
    title: 'Drustee TV',
    tagline: 'AI-Powered Video Streaming Platform',
    description: 'Drustee TV lets users watch movies, web series, and live TV online with smooth adaptive streaming, AI-driven recommendations, and secure multi-device subscription plans.',
    bgColor: '#C0283D',
    gradient: 'from-[#FF3D55] to-[#C0283D]',
    image: 'images/casestudies/ott1.png',
    metrics: [
      { value: '50K+', label: 'Subscribers' },
      { value: '4.9★', label: 'App Rating' },
      { value: '4 Mo', label: 'Delivered In' },
    ],
    platforms: ['iOS', 'Android', 'Web'],
    tags: ['React Native', 'AWS', 'Python'],
  },
  {
    id: 4,
    category: 'Food Delivery',
    title: 'Mazza By Marlene',
    tagline: 'On-Demand Food Delivery Ecosystem',
    description: 'Mazza By Marlene delivers delicious food with quick ordering, live tracking, and smooth doorstep delivery. Includes customer app, rider app, and restaurant dashboard.',
    bgColor: '#2A2A2A',
    gradient: 'from-[#404040] to-[#1A1A1A]',
    image: 'images/casestudies/sbs1.png',
    metrics: [
      { value: '100K+', label: 'Deliveries' },
      { value: '4.8★', label: 'App Rating' },
      { value: '4 Mo', label: 'Delivered In' },
    ],
    platforms: ['iOS', 'Android'],
    tags: ['Flutter', 'Node.js', 'Redis'],
  },
  {
    id: 5,
    category: 'Business & Networking',
    title: 'Sparqly',
    tagline: 'All-in-One Business Networking Platform',
    description: 'Sparqly connects businesses, creators, job seekers, and users in one platform to discover opportunities, services, and meaningful connections across industries.',
    bgColor: '#4A3FAF',
    gradient: 'from-[#6C61DB] to-[#4A3FAF]',
    image: 'images/casestudies/sparqlycase1.png',
    metrics: [
      { value: '80K+', label: 'Members' },
      { value: '4.6★', label: 'App Rating' },
      { value: '6 Mo', label: 'Delivered In' },
    ],
    platforms: ['iOS', 'Android', 'Web'],
    tags: ['React Native', 'Laravel', 'MySQL'],
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 250);
  }, [animating]);

  const next = useCallback(() => goTo((active + 1) % caseStudies.length), [active, goTo]);
  const prev = useCallback(() => goTo((active - 1 + caseStudies.length) % caseStudies.length), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, 4500);
    return () => { if (timerRef.current) clearTimeout(timerRef.current) };
  }, [active, paused, next]);

  const study = caseStudies[active];

  return (
    <section className="bg-[#0a1628] py-14 md:py-24 px-4 sm:px-6 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.06] pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 80% 10%, ${study.bgColor}, transparent 65%)`, transition: 'background 0.5s ease' }} />

      <div className="max-w-[1300px] mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="mb-4">
              <span className="text-[#f5a623] text-xs font-semibold tracking-[0.22em] uppercase">
                Case Studies
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-white leading-snug">
              Transforming Ideas{' '}
              <span className="text-[#f5a623]">Into Impact</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Nav arrows */}
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-[#f5a623] hover:text-[#f5a623] transition-all duration-200"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-[#f5a623] hover:text-[#f5a623] transition-all duration-200"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Main card */}
        <div
          className="rounded-3xl overflow-hidden relative"
          style={{ background: `linear-gradient(135deg, ${study.bgColor}ee 0%, ${study.bgColor}99 100%)`, transition: 'background 0.5s ease' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

          <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-0"
            style={{ opacity: animating ? 0 : 1, transition: 'opacity 0.25s ease' }}
          >
            {/* LEFT: Content */}
            <div className="p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between">
              <div>
                {/* Category + platforms */}
                <div className="flex flex-wrap items-center gap-2.5 mb-6">
                  <span className="text-xs font-medium tracking-widest uppercase text-white/60 bg-white/10 px-3 py-1.5 rounded-full">
                    {study.category}
                  </span>
                  {study.platforms.map((p) => (
                    <span key={p} className="text-xs font-normal text-white/55 bg-white/10 px-2.5 py-1 rounded-full">
                      {p}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-snug">
                  {study.title}
                </h3>
                <p className="text-white/70 text-sm font-medium tracking-wide mb-6 uppercase">
                  {study.tagline}
                </p>

                {/* Description */}
                <p className="text-white/75 text-base leading-relaxed mb-8 max-w-lg">
                  {study.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {study.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-white/50 border border-white/15 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics + CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Metrics */}
                <div className="flex gap-6">
                  {study.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-2xl font-bold text-white leading-none">{m.value}</div>
                      <div className="text-white/50 text-xs font-medium mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-px h-10 bg-white/15" />

                {/* CTA */}
                <button className="flex items-center gap-2 bg-white text-[#0a1628] font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#f5a623] hover:text-white transition-all duration-200 shadow-lg flex-shrink-0">
                  View Case Study
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="relative flex items-end justify-center lg:justify-end overflow-hidden min-h-[280px] lg:min-h-0">
              {/* Glow behind image */}
              <div className="absolute bottom-0 right-0 w-full h-full opacity-20 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 60% 80%, #ffffff, transparent 65%)` }} />
              <img
                src={study.image}
                alt={study.title}
                className="relative z-10 max-h-[320px] lg:max-h-[400px] w-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.4)] translate-y-4 lg:translate-y-0"
                style={{ transition: 'opacity 0.25s ease', opacity: animating ? 0 : 1 }}
              />
            </div>
          </div>
        </div>

        {/* Bottom: dots + counter */}
        <div className="flex items-center justify-between mt-8">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {caseStudies.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? 'w-8 h-2 bg-[#f5a623]'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <span className="text-white/35 text-sm font-medium">
            <span className="text-white/70 font-bold">{String(active + 1).padStart(2, '0')}</span>
            {' / '}
            {String(caseStudies.length).padStart(2, '0')}
          </span>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-[2px] bg-white/[0.08] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#f5a623] rounded-full"
            style={{
              width: `${((active + 1) / caseStudies.length) * 100}%`,
              transition: 'width 0.4s ease',
            }}
          />
        </div>

      </div>
    </section>
  );
}
