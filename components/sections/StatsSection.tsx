import Image from 'next/image';
import { Award, TrendingUp, Users, Cpu, Globe, ShieldCheck } from 'lucide-react';

const stats = [
  {
    num: '10+',
    label: 'Years of Digital\nEngineering Excellence',
    color: 'text-[#0a1628]',
    iconBg: 'bg-slate-100 group-hover:bg-[#0a1628]',
    iconColor: 'text-[#0a1628] group-hover:text-white',
    icon: Award,
  },
  {
    num: '2000+',
    label: 'Business Ventures\nTransformed',
    color: 'text-[#f5a623]',
    iconBg: 'bg-[#f5a623]/15 group-hover:bg-[#f5a623]',
    iconColor: 'text-[#f5a623] group-hover:text-white',
    icon: TrendingUp,
  },
  {
    num: '50+',
    label: 'Team of Professionals',
    color: 'text-[#0a1628]',
    iconBg: 'bg-slate-100 group-hover:bg-[#0a1628]',
    iconColor: 'text-[#0a1628] group-hover:text-white',
    icon: Users,
  },
  {
    num: '25+',
    label: 'AI-Powered Enterprise\nSolutions',
    color: 'text-[#f5a623]',
    iconBg: 'bg-[#f5a623]/15 group-hover:bg-[#f5a623]',
    iconColor: 'text-[#f5a623] group-hover:text-white',
    icon: Cpu,
  },
  {
    num: '45+',
    label: 'Countries We Proudly\nServe',
    color: 'text-[#0a1628]',
    iconBg: 'bg-slate-100 group-hover:bg-[#0a1628]',
    iconColor: 'text-[#0a1628] group-hover:text-white',
    icon: Globe,
  },
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
    <section className="bg-white py-24 px-6 font-sans">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading Area */}
        <div className="flex flex-col items-center mb-20">
          {/* Changed from font-extrabold to font-bold */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] text-center mb-6 leading-tight tracking-tight">
            Architecting Digital Excellence For <br className="hidden md:block" />
            <span className="text-[#f5a623]">2,000+ Industry Leaders</span>
          </h2>
          {/* Subtle Orange Underline */}
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#f5a623] to-orange-400 rounded-full" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0 md:divide-x divide-gray-200/80 mb-24">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            
            return (
              <div
                key={stat.label}
                className="group flex flex-col items-center text-center px-4 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Icon Circle */}
                <div 
                  className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ease-out shadow-sm group-hover:shadow-lg ${stat.iconBg}`}
                >
                  <IconComponent size={32} strokeWidth={1.75} className={`transition-colors duration-300 ${stat.iconColor}`} />
                </div>

                {/* Number - Changed from font-extrabold to font-bold */}
                <div className={`text-4xl lg:text-5xl font-bold mb-3 tracking-tight ${stat.color}`}>
                  {stat.num}
                </div>

                {/* Label - Changed from font-semibold to font-medium */}
                <p className="text-sm lg:text-base font-medium text-slate-600 leading-relaxed whitespace-pre-line group-hover:text-[#0a1628] transition-colors">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Badges Section */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
          
          {/* Recognized For Excellence Title */}
          <div className="text-center mb-10 flex justify-center">
            {/* Changed from font-bold to font-semibold */}
            <div className="inline-flex items-center gap-2.5 text-sm font-semibold text-[#0a1628] tracking-[0.2em] uppercase bg-white px-6 py-2.5 rounded-full shadow-sm border border-slate-100">
              <ShieldCheck size={18} strokeWidth={2} className="text-[#f5a623]" />
              Recognized For Excellence
            </div>
          </div>

          {/* Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {badges.map((badge) => (
              <div 
                key={badge.alt}
                className="relative flex items-center justify-center"
              >
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  width={120}
                  height={120}
                  className="object-contain w-20 h-20 md:w-28 md:h-28 drop-shadow-sm"
                />
              </div>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
}