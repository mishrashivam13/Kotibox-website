import Image from 'next/image';
import { Award, TrendingUp, Users, Cpu, Globe, ShieldCheck } from 'lucide-react';

const stats = [
  { num: '10+',   label: 'Years of Excellence',         color: '#0a1628', icon: Award,     iconBg: '#0a162810' },
  { num: '2000+', label: 'Businesses Transformed',      color: '#f5a623', icon: TrendingUp, iconBg: '#f5a62312' },
  { num: '50+',   label: 'Team of Professionals',       color: '#0a1628', icon: Users,     iconBg: '#0a162810' },
  { num: '25+',   label: 'Enterprise AI Solutions',     color: '#f5a623', icon: Cpu,       iconBg: '#f5a62312' },
  { num: '45+',   label: 'Countries Served',            color: '#0a1628', icon: Globe,     iconBg: '#0a162810' },
];

const badges = [
  { src: '/images/badges/Awarded-1.png', alt: 'GoodFirms' },
  { src: '/images/badges/Awarded-2.png', alt: 'Clutch' },
  { src: '/images/badges/Awarded-3.png', alt: 'Selected Firms' },
  { src: '/images/badges/Awarded-4.png', alt: 'ISO Certified' },
  { src: '/images/badges/Awarded-5.png', alt: 'Web Guru Awards' },
  { src: '/images/badges/Awarded-6.png', alt: 'SoftwareWorld' },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-bold
                         text-[#0a1628] mb-4 leading-tight tracking-tight max-w-2xl">
            Architecting Digital Excellence For{' '}
            <span className="text-[#f5a623]">2,000+ Industry Leaders</span>
          </h2>
          <div className="w-12 h-[2px] bg-[#f5a623] rounded-full" />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0 md:divide-x divide-slate-100 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="group flex flex-col items-center text-center px-4 cursor-default">

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: stat.iconBg }}
                >
                  <Icon size={20} strokeWidth={1.8} style={{ color: stat.color }} />
                </div>

                {/* Number */}
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1.5 tracking-tight" style={{ color: stat.color }}>
                  {stat.num}
                </div>

                {/* Label */}
                <p className="text-xs md:text-sm text-slate-500 leading-snug font-normal">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Awards row */}
        <div className="bg-slate-50 rounded-2xl py-8 px-6 md:px-10 border border-slate-100">
          <div className="flex items-center justify-center gap-2 mb-7">
            <ShieldCheck size={15} strokeWidth={2} className="text-[#f5a623]" />
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
              Recognized For Excellence
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-14">
            {badges.map((badge) => (
              <Image
                key={badge.alt}
                src={badge.src}
                alt={badge.alt}
                width={100}
                height={100}
                className="object-contain w-16 h-16 md:w-20 md:h-20 opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
