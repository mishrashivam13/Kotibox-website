import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// 15+ Industries Data
const industries = [
  {
    id: 1,
    title: 'Healthcare',
    description: 'AI-enabled appointment systems, patient support, diagnostics workflows, reports, and more.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Technology',
    description: 'AI copilots, automation dashboards, SaaS intelligence, analytics, and custom machine learning.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Education',
    description: 'AI learning assistants, smart assessments, student progress analytics, and personalized learning.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Hospitality',
    description: 'AI chat support, booking automation, demand forecasting, and guest experience personalization.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    title: 'Real Estate',
    description: 'Automated property listings, lead tracking, virtual staging, and agency coordination workflows.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    title: 'Finance',
    description: 'Fraud detection algorithms, algorithmic trading, automated risk assessment, and smart chatbots.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 7,
    title: 'Retail & E-commerce',
    description: 'Inventory prediction, personalized recommendations, automated customer service, and pricing.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 8,
    title: 'Manufacturing',
    description: 'Predictive maintenance, supply chain optimization, quality control using computer vision.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 9,
    title: 'Logistics & Delivery',
    description: 'Route optimization, fleet management, automated dispatch, and delivery time prediction.',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 10,
    title: 'Entertainment',
    description: 'Content recommendation engines, AI-generated graphics, video analysis, and audience insights.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 11,
    title: 'Agriculture',
    description: 'Crop monitoring, yield prediction, automated irrigation systems, and drone data analysis.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 12,
    title: 'Automotive',
    description: 'Autonomous driving models, driver fatigue monitoring, and smart infotainment systems.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 13,
    title: 'Energy',
    description: 'Smart grid optimization, consumption forecasting, and renewable energy yield prediction.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 14,
    title: 'Telecommunications',
    description: 'Network optimization, predictive maintenance of cell towers, and automated support.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 15,
    title: 'Legal',
    description: 'Contract analysis, automated document review, case outcome prediction, and legal research.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 16,
    title: 'Construction',
    description: 'Site safety monitoring, automated progress tracking, and generative design architecture.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
  }
];

export default function IndustrySolutions() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 350; // Width of card + gap
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-[#0f172a] min-h-screen py-20 px-4 md:px-8 lg:px-16 overflow-hidden flex flex-col items-center">
      
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          We Build <span className="text-[#f97316]">AI Solutions For 15+ different</span> Industries
        </h2>
        <p className="text-slate-300 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
          We create AI-powered digital solutions for different industries, helping businesses
          automate workflows, improve decisions, personalize experiences, and scale faster.
        </p>
      </div>

      {/* Slider Section */}
      <div className="relative w-full max-w-[1400px]">
        
        {/* Navigation Buttons */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 z-10 bg-[#1e293b] hover:bg-[#334155] text-white p-3 rounded-full shadow-lg transition-colors border border-slate-700/50 cursor-pointer"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 z-10 bg-[#1e293b] hover:bg-[#334155] text-white p-3 rounded-full shadow-lg transition-colors border border-slate-700/50 cursor-pointer"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Cards Container */}
        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
        >
          {industries.map((industry) => (
            <div 
              key={industry.id} 
              className="relative min-w-[300px] w-[300px] h-[420px] rounded-2xl overflow-hidden shrink-0 snap-center group border border-slate-800"
            >
              {/* Background Image with Hover Scale effect */}
              <img 
                src={industry.image} 
                alt={industry.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#0f172a]/80 to-transparent p-6 flex flex-col justify-end">
                
                {/* AI Powered Badge */}
                <div className="border border-orange-500/40 bg-orange-500/10 text-orange-400 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-md w-fit mb-4">
                  AI Powered
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}