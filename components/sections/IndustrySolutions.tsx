'use client'
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const industries = [
  {
    id: 1,
    title: 'Healthcare',
    description: 'AI-enabled appointment systems, patient support, diagnostics workflows, reports, and more.',
    image: 'https://images.unsplash.com/photo-1584982751601-97ddc0d2a09e?w=800&q=85',
  },
  {
    id: 2,
    title: 'Technology',
    description: 'AI copilots, automation dashboards, SaaS intelligence, analytics, and custom machine learning.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=85',
  },
  {
    id: 3,
    title: 'Education',
    description: 'AI learning assistants, smart assessments, student progress analytics, and personalized learning.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=85',
  },
  {
    id: 4,
    title: 'Hospitality',
    description: 'AI chat support, booking automation, demand forecasting, and guest experience personalization.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=85',
  },
  {
    id: 5,
    title: 'Real Estate',
    description: 'Automated property listings, lead tracking, virtual staging, and agency coordination workflows.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85',
  },
  {
    id: 6,
    title: 'Finance',
    description: 'Fraud detection algorithms, algorithmic trading, automated risk assessment, and smart chatbots.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=85',
  },
  {
    id: 7,
    title: 'Retail & E-commerce',
    description: 'Inventory prediction, personalized recommendations, automated customer service, and pricing.',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=85',
  },
  {
    id: 8,
    title: 'Manufacturing',
    description: 'Predictive maintenance, supply chain optimization, quality control using computer vision.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=85',
  },
  {
    id: 9,
    title: 'Logistics & Delivery',
    description: 'Route optimization, fleet management, automated dispatch, and delivery time prediction.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85',
  },
  {
    id: 10,
    title: 'Entertainment',
    description: 'Content recommendation engines, AI-generated graphics, video analysis, and audience insights.',
    image: 'https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?w=800&q=85',
  },
  {
    id: 11,
    title: 'Agriculture',
    description: 'Crop monitoring, yield prediction, automated irrigation systems, and drone data analysis.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=85',
  },
  {
    id: 12,
    title: 'Automotive',
    description: 'Autonomous driving models, driver fatigue monitoring, and smart infotainment systems.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=85',
  },
  {
    id: 13,
    title: 'Energy',
    description: 'Smart grid optimization, consumption forecasting, and renewable energy yield prediction.',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=85',
  },
  {
    id: 14,
    title: 'Telecommunications',
    description: 'Network optimization, predictive maintenance of cell towers, and automated support.',
    image: 'https://images.unsplash.com/photo-1520869562399-e772f042f422?w=800&q=85',
  },
  {
    id: 15,
    title: 'Legal',
    description: 'Contract analysis, automated document review, case outcome prediction, and legal research.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=85',
  },
  {
    id: 16,
    title: 'Construction',
    description: 'Site safety monitoring, automated progress tracking, and generative design architecture.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85',
  },
];

export default function IndustrySolutions() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -340 : 340,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-[#0a1628] py-16 md:py-24 px-4 md:px-8 lg:px-16 overflow-hidden">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <p className="text-xs font-semibold text-[#f5a623] tracking-[0.2em] uppercase mb-4">
          Industry Expertise
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-white mb-4 leading-tight">
          We Build <span className="text-[#f5a623]">AI Solutions</span> For
          <span className="text-white/70"> 16+ Different Industries</span>
        </h2>
        <div className="w-12 h-[2px] bg-[#f5a623] rounded-full mx-auto mb-5" />
        <p className="text-slate-300 text-[0.95rem] md:text-base leading-relaxed">
          AI-powered digital solutions helping businesses automate workflows, improve
          decisions, and scale faster — across every major industry.
        </p>
      </div>

      {/* Slider */}
      <div className="relative max-w-[1400px] mx-auto">

        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-11 h-11 bg-[#1a2f4e] hover:bg-[#f5a623] text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-200 border border-white/10 cursor-pointer group"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-11 h-11 bg-[#1a2f4e] hover:bg-[#f5a623] text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-200 border border-white/10 cursor-pointer group"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>

        {/* Cards */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 pt-2 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="relative min-w-[260px] sm:min-w-[300px] w-[260px] sm:w-[300px] h-[400px] sm:h-[440px] rounded-2xl overflow-hidden shrink-0 snap-center group cursor-pointer"
            >
              {/* Image */}
              <img
                src={industry.image}
                alt={industry.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Always-on dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/95 via-[#0a1628]/55 to-black/20" />

              {/* Hover orange tint */}
              <div className="absolute inset-0 bg-[#f5a623]/0 group-hover:bg-[#f5a623]/10 transition-colors duration-500" />

              {/* AI Powered badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-orange-500/40 text-orange-400 text-[10px] font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  AI Powered
                </span>
              </div>

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#f5a623] transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                  {industry.description}
                </p>
              </div>

              {/* Bottom border glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f5a623] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
