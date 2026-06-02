import React from 'react';

// Brand SVG Icons
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" fill="none"/>
    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(120 12 12)"/>
  </svg>
);

const FlutterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M14 2L4 12l3.5 3.5L20.5 2H14z" fill="#54C5F8"/>
    <path d="M14 22l6.5-6.5-3.5-3.5L7.5 21.5 14 22z" fill="#01579B"/>
    <path d="M17 12.5l-3 3 3 3 3-3-3-3z" fill="#29B6F6"/>
  </svg>
);

const SwiftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect x="2" y="2" width="20" height="20" rx="5" fill="#F05138"/>
    <path d="M17.5 15.5c-2.5 1.5-5.5 1.2-7.8-.3 2.3.8 5.2.2 7-2.2-1.8-2.4-2-6-1.2-8.5C17 7 18.5 10 18 13c.8.3 1.5.2 2-.2-.5 1.2-1.3 2.1-2.5 2.7z" fill="white"/>
  </svg>
);

const KotlinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M2 2h10L2 12V2z" fill="#7F52FF"/>
    <path d="M2 22L12 12 22 22H2z" fill="#E44857"/>
    <path d="M12 2h10L2 22V12L12 2z" fill="#C811E1"/>
  </svg>
);

const NextjsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <circle cx="12" cy="12" r="10" fill="#000"/>
    <path d="M8 8v8l7-8v8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const VueIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M2 3h4l6 10.5L18 3h4L12 21 2 3z" fill="#4FC08D"/>
    <path d="M6.5 3h3.5L12 6.5 14 3h3.5L12 12 6.5 3z" fill="#35495E"/>
  </svg>
);

const AngularIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M12 2L3 5.5l1.4 12.1L12 22l7.6-4.4L21 5.5 12 2z" fill="#DD0031"/>
    <path d="M12 2v20l7.6-4.4L21 5.5 12 2z" fill="#C3002F"/>
    <path d="M12 5.5L8 15h1.5l.8-2h3.4l.8 2H16L12 5.5zm0 3.2l1.2 3.1h-2.4L12 8.7z" fill="white"/>
  </svg>
);

const NodejsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" fill="#339933"/>
    <path d="M12 2v20l9-5V7L12 2z" fill="#2D8A2D"/>
    <path d="M9 13V9l3 5 3-5v4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M12 2c-2.8 0-4.5 1.2-4.5 3v2h4.5v1H6C3.5 8 2 9.5 2 12s1.5 4 4 4h1v-2.5c0-1.5 1.2-2.5 3-2.5h4c1.5 0 2.5-1 2.5-2.5V5c0-1.5-1.5-3-4.5-3zm-1 2.5a.8.8 0 110 1.6.8.8 0 010-1.6z" fill="#3776AB"/>
    <path d="M12 22c2.8 0 4.5-1.2 4.5-3v-2H12v-1h5.5c2.5 0 4-1.5 4-4s-1.5-4-4-4H16v2.5c0 1.5-1.2 2.5-3 2.5H9c-1.5 0-2.5 1-2.5 2.5V19c0 1.5 1.5 3 4.5 3zm1-2.5a.8.8 0 110-1.6.8.8 0 010 1.6z" fill="#FFD43B"/>
  </svg>
);

const LaravelIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M22 8.5L13.5 3 5 7.5v9L13.5 21l8.5-4.5V8.5z" fill="#FF2D20"/>
    <path d="M13.5 12L22 8.5M13.5 12v9M13.5 12L5 7.5" stroke="white" strokeWidth="0.8" opacity="0.5"/>
    <text x="10" y="14" fill="white" fontSize="7" fontWeight="bold">L</text>
  </svg>
);

const DjangoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect width="24" height="24" rx="4" fill="#092E20"/>
    <path d="M13 4h2.5v10.5c0 4-1.8 5.5-4.8 5.5-2.5 0-4-1.3-4.7-3l2.3-1.4c.4.8 1 1.4 2.4 1.4 1.3 0 2.3-.7 2.3-2.5V4zm4.5 0H20v3h-2.5V4z" fill="#44B78B"/>
  </svg>
);

const OpenAIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M12 2a7.5 7.5 0 015.5 12.6A7.5 7.5 0 016.5 4.9 7.5 7.5 0 0112 2z" stroke="#10A37F" strokeWidth="1.5" fill="none"/>
    <path d="M12 6.5c3 0 5.5 2.5 5.5 5.5S15 17.5 12 17.5 6.5 15 6.5 12 9 6.5 12 6.5z" stroke="#10A37F" strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="12" r="2" fill="#10A37F"/>
  </svg>
);

const TensorFlowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M12 2v20M4 6l8-4 8 4M4 12l8-4 8 4M4 18l8-4 8 4" stroke="#FF6F00" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="4" cy="6" r="1.5" fill="#FF6F00"/>
    <circle cx="12" cy="2" r="1.5" fill="#FF6F00"/>
    <circle cx="20" cy="6" r="1.5" fill="#FF6F00"/>
  </svg>
);

const LangChainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect x="2" y="9" width="7" height="6" rx="3" stroke="#1C7ED6" strokeWidth="1.8" fill="none"/>
    <rect x="15" y="9" width="7" height="6" rx="3" stroke="#1C7ED6" strokeWidth="1.8" fill="none"/>
    <path d="M9 12h6" stroke="#1C7ED6" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const HuggingFaceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <circle cx="12" cy="12" r="10" fill="#FFD21E"/>
    <circle cx="9" cy="10.5" r="1.2" fill="#333"/>
    <circle cx="15" cy="10.5" r="1.2" fill="#333"/>
    <path d="M8.5 14.5c1 1.5 6 1.5 7 0" stroke="#333" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M8 8c-.5-1.5.5-2.5 2-2" stroke="#333" strokeWidth="1" strokeLinecap="round"/>
    <path d="M16 8c.5-1.5-.5-2.5-2-2" stroke="#333" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

const MongoDBIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M12 2C9 5 7 8.5 7 12c0 3.5 2 6.5 5 8.5V22l.5-1.5C15.5 18.5 17 15.5 17 12c0-3.5-2-7-5-10z" fill="#47A248"/>
    <path d="M12 2v20" stroke="#3E8E41" strokeWidth="1" opacity="0.5"/>
  </svg>
);

const PostgreSQLIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <ellipse cx="11" cy="7" rx="7" ry="5" stroke="#4169E1" strokeWidth="1.5" fill="none"/>
    <path d="M4 7v7c0 2.8 3.1 5 7 5s7-2.2 7-5V7" stroke="#4169E1" strokeWidth="1.5" fill="none"/>
    <path d="M18 7c1.5 0 2.5.8 2.5 2V14c0 1-.8 2-2 2" stroke="#4169E1" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M18 16l.5 3.5" stroke="#4169E1" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const MySQLIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M3 6h18v12H3V6z" rx="2" fill="#4479A1" opacity="0.15"/>
    <path d="M3 8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" stroke="#4479A1" strokeWidth="1.5" fill="none"/>
    <path d="M7 9v6M7 9l3 3 3-3v6M17 9v6M17 9l-2 3" stroke="#4479A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FirebaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M5.5 21L4 7.5l5 2.5L12 3l3 7 2.5-3L19 21H5.5z" fill="#FFCA28"/>
    <path d="M12 3l3 7 2.5-3L19 21H12V3z" fill="#F57C00"/>
    <path d="M5.5 21L9 12l3 9H5.5z" fill="#FF8F00"/>
  </svg>
);

const AWSIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M6.5 15.5C4 14.5 2.5 12 3 9.5c.5-2.5 3-4 5.5-3.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M17.5 15.5C20 14.5 21.5 12 21 9.5c-.5-2.5-3-4-5.5-3.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M7 15.5h10" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 19l-2-3.5M12 19v-3.5M15 19l2-3.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const GCPIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M12 5.5A6.5 6.5 0 0118.5 12 6.5 6.5 0 0112 18.5 6.5 6.5 0 015.5 12 6.5 6.5 0 0112 5.5z" stroke="#4285F4" strokeWidth="1.5" fill="none"/>
    <path d="M12 8v4l3 2" stroke="#4285F4" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 12h2M2 12h2M12 2v2M12 20v2" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect x="2" y="11" width="3" height="2.5" rx="0.5" fill="#2496ED"/>
    <rect x="6" y="11" width="3" height="2.5" rx="0.5" fill="#2496ED"/>
    <rect x="10" y="11" width="3" height="2.5" rx="0.5" fill="#2496ED"/>
    <rect x="14" y="11" width="3" height="2.5" rx="0.5" fill="#2496ED"/>
    <rect x="10" y="7.5" width="3" height="2.5" rx="0.5" fill="#2496ED"/>
    <rect x="14" y="7.5" width="3" height="2.5" rx="0.5" fill="#2496ED"/>
    <path d="M2 14.5s1-1 3.5-.5c.5-2 2-3 4-3 0-2 1.5-3 3.5-2.5" stroke="#2496ED" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    <path d="M20 13c-.5-2-2.5-3-4.5-2.5" stroke="#2496ED" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="20" cy="10" r="1" fill="#2496ED"/>
  </svg>
);

const AzureIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M13 3L6 14h5l-3 7 10-11h-6l4-7H13z" fill="#0078D4"/>
  </svg>
);

// ─── Tech data ───────────────────────────────────────────────────────────────

type TechItem = { name: string; Icon: () => React.ReactElement; bg: string };
type Category = { label: string; color: string; bg: string; border: string; techs: TechItem[] };

const categories: Category[] = [
  {
    label: 'Mobile Development',
    color: '#3b82f6',
    bg: 'from-blue-50 to-white',
    border: 'border-blue-100',
    techs: [
      { name: 'React Native', Icon: ReactIcon,  bg: '#61DAFB18' },
      { name: 'Flutter',      Icon: FlutterIcon, bg: '#54C5F818' },
      { name: 'Swift',        Icon: SwiftIcon,   bg: '#F0513818' },
      { name: 'Kotlin',       Icon: KotlinIcon,  bg: '#7F52FF18' },
    ],
  },
  {
    label: 'Web & Frontend',
    color: '#10b981',
    bg: 'from-emerald-50 to-white',
    border: 'border-emerald-100',
    techs: [
      { name: 'React.js', Icon: ReactIcon,  bg: '#61DAFB18' },
      { name: 'Next.js',  Icon: NextjsIcon, bg: '#00000010' },
      { name: 'Vue.js',   Icon: VueIcon,    bg: '#4FC08D18' },
      { name: 'Angular',  Icon: AngularIcon, bg: '#DD003118' },
    ],
  },
  {
    label: 'Backend',
    color: '#8b5cf6',
    bg: 'from-violet-50 to-white',
    border: 'border-violet-100',
    techs: [
      { name: 'Node.js', Icon: NodejsIcon,  bg: '#33993318' },
      { name: 'Python',  Icon: PythonIcon,  bg: '#3776AB18' },
      { name: 'Laravel', Icon: LaravelIcon, bg: '#FF2D2018' },
      { name: 'Django',  Icon: DjangoIcon,  bg: '#092E2018' },
    ],
  },
  {
    label: 'AI & Machine Learning',
    color: '#f5a623',
    bg: 'from-orange-50 to-white',
    border: 'border-orange-100',
    techs: [
      { name: 'OpenAI',       Icon: OpenAIIcon,      bg: '#10A37F18' },
      { name: 'TensorFlow',   Icon: TensorFlowIcon,  bg: '#FF6F0018' },
      { name: 'LangChain',    Icon: LangChainIcon,   bg: '#1C7ED618' },
      { name: 'Hugging Face', Icon: HuggingFaceIcon, bg: '#FFD21E28' },
    ],
  },
  {
    label: 'Database',
    color: '#06b6d4',
    bg: 'from-cyan-50 to-white',
    border: 'border-cyan-100',
    techs: [
      { name: 'MongoDB',    Icon: MongoDBIcon,    bg: '#47A24818' },
      { name: 'PostgreSQL', Icon: PostgreSQLIcon, bg: '#4169E118' },
      { name: 'MySQL',      Icon: MySQLIcon,      bg: '#4479A118' },
      { name: 'Firebase',   Icon: FirebaseIcon,   bg: '#FFCA2818' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    color: '#ec4899',
    bg: 'from-pink-50 to-white',
    border: 'border-pink-100',
    techs: [
      { name: 'AWS',          Icon: AWSIcon,    bg: '#FF990018' },
      { name: 'Google Cloud', Icon: GCPIcon,    bg: '#4285F418' },
      { name: 'Docker',       Icon: DockerIcon, bg: '#2496ED18' },
      { name: 'Azure',        Icon: AzureIcon,  bg: '#0078D418' },
    ],
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function TechStack() {
  return (
    <section className="bg-slate-50 py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-[1300px] mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold text-[#f5a623] tracking-[0.2em] uppercase mb-4">Technology Stack</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-[#0a1628] mb-4 leading-snug max-w-2xl">
            Built With the <span className="text-[#f5a623]">Best Technologies</span> in the Industry
          </h2>
          <div className="w-12 h-[2px] bg-[#f5a623] rounded-full mb-5" />
          <p className="text-slate-500 text-[0.95rem] md:text-base max-w-xl leading-relaxed">
            We pick the right tools for every project — from cross-platform mobile apps
            to enterprise AI systems, we master what matters most.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className={`relative bg-gradient-to-br ${cat.bg} rounded-2xl border ${cat.border} p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group`}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-70"
                style={{ background: `linear-gradient(90deg, ${cat.color}, ${cat.color}55)` }}
              />

              {/* Category label */}
              <div className="flex items-center gap-2.5 mb-5 mt-1">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: cat.color }} />
                <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: cat.color }}>
                  {cat.label}
                </span>
              </div>

              {/* Tech items grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {cat.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2.5 bg-white/80 hover:bg-white border border-white hover:border-slate-200 rounded-xl px-3 py-3 transition-all duration-200 cursor-default shadow-sm hover:shadow-md group/item"
                  >
                    {/* Icon */}
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 p-1.5"
                      style={{ background: tech.bg }}
                    >
                      <tech.Icon />
                    </div>
                    {/* Name */}
                    <span className="text-slate-700 text-[13px] font-medium leading-snug group-hover/item:text-[#0a1628] transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom badges */}
        <div className="mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-3">
          {['ISO Certified', 'AWS Partner', 'Clutch Top Company', '10+ Years Experience'].map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-600 text-xs font-medium px-4 py-2.5 rounded-full shadow-sm hover:border-[#f5a623]/40 hover:text-[#0a1628] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
              {badge}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
