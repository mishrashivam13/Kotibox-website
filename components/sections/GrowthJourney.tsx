'use client';
import { ArrowRight, BrainCircuit, Users, Settings, MessageSquareShare } from 'lucide-react';

const featured = [
  {
    id: 1,
    icon: BrainCircuit,
    tag: 'Artificial Intelligence',
    title: 'AI-Powered Transformation',
    description:
      'From predictive analytics to intelligent automation, we deploy AI to solve complex business challenges and uncover new opportunities.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: 4,
    icon: MessageSquareShare,
    tag: 'Open Communication',
    title: 'Transparent Collaboration',
    description:
      'Stay informed throughout the entire development process with clear timelines, regular updates, and completely open communication.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=900',
  },
];

const compact = [
  {
    id: 2,
    icon: Users,
    tag: 'User Experience',
    title: 'Human-Centric Approach',
    description:
      'Our seasoned developers ensure the human touch remains at the core, crafting exceptional user experiences.',
    dark: true,
  },
  {
    id: 3,
    icon: Settings,
    tag: 'Scalable Architecture',
    title: 'Future-Proof Scalability',
    description:
      'We build solutions that adapt and grow with your business — seamlessly scaling for future needs.',
    dark: false,
  },
];

export default function GrowthJourney() {
  return (
    <section className="bg-white py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-[1300px] mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block text-[11px] font-semibold text-[#f5a623] tracking-[0.22em] uppercase mb-5 bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full">
            Our Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-[#0a1628] tracking-tight max-w-2xl">
            <span className="block">How We Empower Your</span>
            <span className="block mt-3 text-[#f5a623]">Digital Growth Journey</span>
          </h2>
          <div className="w-14 h-[3px] bg-[#f5a623] rounded-full mt-6 mb-7" />
          <p className="text-slate-500 text-base max-w-lg mx-auto leading-relaxed">
            We blend innovation, strategy, and technology to accelerate your digital growth with
            scalable, future-ready solutions.
          </p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Row 1 — Featured large (left) */}
          <FeaturedCard card={featured[0]} />

          {/* Row 1 — Compact stack (right) */}
          <div className="md:col-span-1 flex flex-col gap-6">
            {compact.map((card) => (
              <CompactCard key={card.id} card={card} />
            ))}
          </div>

          {/* Row 2 — Featured large (full row on its own or right-heavy) */}
          <div className="md:col-span-3">
            <FeaturedCardWide card={featured[1]} />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── Featured Card (tall, image bg) ─────────────────── */
function FeaturedCard({ card }: { card: typeof featured[0] }) {
  const Icon = card.icon;
  return (
    <div className="md:col-span-2 group relative rounded-3xl overflow-hidden min-h-[420px] flex flex-col justify-end cursor-default">
      <img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
      />
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-transparent" />

      {/* tag pill */}
      <span className="absolute top-6 left-6 text-[11px] font-semibold text-white bg-[#f5a623] px-3 py-1 rounded-full tracking-wide z-10">
        {card.tag}
      </span>

      {/* step number decorative */}
      <span className="absolute top-4 right-6 text-[6rem] font-black text-white/10 leading-none select-none z-10">
        0{card.id}
      </span>

      {/* content */}
      <div className="relative z-10 p-8 md:p-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#f5a623] flex items-center justify-center">
            <Icon size={18} strokeWidth={2} className="text-white" />
          </div>
          <span className="text-[11px] font-bold text-white/50 tracking-[0.18em] uppercase">Step 0{card.id}</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 leading-snug">{card.title}</h3>
        <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">{card.description}</p>
        <button className="group/btn flex items-center gap-2 text-[#f5a623] font-semibold text-sm hover:text-amber-300 transition-colors">
          Explore Strategy
          <ArrowRight size={14} strokeWidth={2.5} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}

/* ─── Compact Card (no image, solid bg) ──────────────── */
function CompactCard({ card }: { card: typeof compact[0] }) {
  const Icon = card.icon;
  const dark = card.dark;
  return (
    <div
      className={`group relative rounded-3xl p-7 flex flex-col flex-1 overflow-hidden cursor-default transition-transform duration-300 hover:-translate-y-1 ${
        dark ? 'bg-[#0a1628]' : 'bg-[#f5a623]'
      }`}
    >
      {/* decorative step number */}
      <span
        className={`absolute -bottom-4 -right-2 text-[7rem] font-black leading-none select-none ${
          dark ? 'text-white/5' : 'text-white/20'
        }`}
      >
        0{card.id}
      </span>

      <div className="flex items-center gap-3 mb-5 relative z-10">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            dark ? 'bg-white/10' : 'bg-white/30'
          }`}
        >
          <Icon size={18} strokeWidth={2} className="text-white" />
        </div>
        <span className={`text-[11px] font-bold tracking-[0.18em] uppercase ${dark ? 'text-white/40' : 'text-white/70'}`}>
          Step 0{card.id}
        </span>
      </div>

      <span className={`text-[10px] font-semibold tracking-widest uppercase mb-3 relative z-10 ${dark ? 'text-[#f5a623]' : 'text-white/80'}`}>
        {card.tag}
      </span>

      <h3 className="text-lg font-bold text-white leading-snug mb-3 relative z-10">{card.title}</h3>
      <p className={`text-sm leading-relaxed relative z-10 ${dark ? 'text-white/60' : 'text-white/80'}`}>
        {card.description}
      </p>
    </div>
  );
}

/* ─── Wide Featured Card (bottom, full width) ────────── */
function FeaturedCardWide({ card }: { card: typeof featured[0] }) {
  const Icon = card.icon;
  return (
    <div className="group relative rounded-3xl overflow-hidden min-h-[280px] md:min-h-[240px] flex flex-col md:flex-row cursor-default">
      <img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/70 to-transparent" />

      {/* tag */}
      <span className="absolute top-6 left-6 text-[11px] font-semibold text-white bg-[#f5a623] px-3 py-1 rounded-full tracking-wide z-10">
        {card.tag}
      </span>

      {/* step decorative */}
      <span className="absolute top-4 right-6 text-[6rem] font-black text-white/10 leading-none select-none z-10">
        0{card.id}
      </span>

      <div className="relative z-10 p-8 md:p-12 flex flex-col justify-end max-w-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#f5a623] flex items-center justify-center">
            <Icon size={18} strokeWidth={2} className="text-white" />
          </div>
          <span className="text-[11px] font-bold text-white/50 tracking-[0.18em] uppercase">Step 0{card.id}</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 leading-snug">{card.title}</h3>
        <p className="text-white/70 text-sm leading-relaxed mb-6">{card.description}</p>
        <button className="group/btn flex items-center gap-2 text-[#f5a623] font-semibold text-sm hover:text-amber-300 transition-colors w-fit">
          Explore Strategy
          <ArrowRight size={14} strokeWidth={2.5} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}
