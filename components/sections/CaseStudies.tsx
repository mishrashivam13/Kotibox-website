'use client'
import React, { useRef, useEffect, useState } from 'react';
const caseStudies = [
  {
    id: 1,
    category: 'Online Food Ordering App',
    title: 'Koushi',
    description: 'Koushi lets users order food online, book restaurant tables, and choose self pickup with a smooth and secure experience.',
    bgColor: 'bg-[#A96F12]',
    image: 'images/casestudies/kaushi2.png',
  },
  {
    id: 2,
    category: 'Entertainment & Party App',
    title: 'Vani',
    description: 'Vani is a social entertainment app where users can join parties, chat with friends, enjoy live activities, and connect in fun interactive rooms.',
    bgColor: 'bg-[#1C102E]',
    image: 'images/casestudies/vani1.png',
  },
  {
    id: 3,
    category: 'OTT Streaming App',
    title: 'Drustee TV',
    description: 'StreamFlix lets users watch movies, web series, and live TV online with smooth streaming and secure subscription plans.',
    bgColor: 'bg-[#FF3D55]',
    image: 'images/casestudies/ott1.png',
  },
  {
    id: 4,
    category: 'Food Delivery App',
    title: 'Mazza By Marlene',
    description: 'Mazza By Marlene delivers delicious food, quick ordering, and smooth delivery for a convenient and satisfying dining experience.',
    bgColor: 'bg-[#313131]',
    image: 'images/casestudies/sbs1.png',
  },
  {
    id: 5,
    category: 'Business & Networking App',
    title: 'Sparqly',
    description: 'Sparqly connects businesses, creators, job seekers, and users in one platform to discover opportunities, services, and meaningful connections.',
    bgColor: 'bg-[#6C61DB]',
    image: 'images/casestudies/sparqlycase1.png',
  },
];

export default function CaseStudies() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-sliding logic
  useEffect(() => {
    if (isHovered) return; // Slider pause ho jayega agar user mouse hover kar raha hai

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        
        // Ek card ki width + gap (24px for gap-6) nikalna
        const firstChild = sliderRef.current.firstElementChild as HTMLElement;
        const scrollAmount = firstChild ? firstChild.clientWidth + 24 : clientWidth / 2;

        // Agar hum end me pahuch gaye hain, toh wapas start pe jao
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Aage slide karo
          sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3000); // 3 seconds me slide hoga (aap isko change kar sakte hain)

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isHovered]);

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-white w-full font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h6 className="text-slate-800 font-bold text-sm tracking-wide mb-2 uppercase">
              Case Studies
            </h6>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-0">
              Transforming Ideas Into Impact
            </h2>
            {/* Orange Underline Accent */}
            <div className="w-16 h-1 bg-orange-500 mt-5 rounded-full"></div>
          </div>

          <div className="shrink-0">
            <button className="border border-slate-300 text-slate-700 font-medium px-8 py-3 rounded-lg hover:border-orange-500 hover:text-orange-500 transition-all duration-300 cursor-pointer bg-transparent">
              View All
            </button>
          </div>
        </div>

        {/* Carousel / Slider Area */}
        <div 
          ref={sliderRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-2 -mx-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
        >
          {caseStudies.map((study) => (
            <div 
              key={study.id} 
              className={`${study.bgColor} min-w-full md:min-w-[calc(50%-12px)] rounded-3xl p-8 md:p-12 shrink-0 snap-center flex flex-col md:flex-row items-center justify-between gap-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-${study.bgColor.replace('bg-[', '').replace(']', '')}/20`}
            >
              
              {/* Left Content */}
              <div className="flex-1 text-left w-full">
                <h6 className="text-white/90 font-semibold text-sm mb-3 tracking-wide">
                  {study.category}
                </h6>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {study.title}
                </h3>
                <p className="text-white/80 text-base leading-relaxed mb-8 max-w-sm">
                  {study.description}
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.23)] hover:-translate-y-0.5 cursor-pointer">
                  View Case Study
                </button>
              </div>

              {/* Right Image */}
              <div className="w-full md:w-auto flex justify-center md:justify-end shrink-0 relative">
                {/* Subtle glow effect behind the image */}
                <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full"></div>
                <img 
                  src={study.image} 
                  alt={`${study.title} App Image`} 
                  className="max-h-[250px] md:max-h-[300px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-500 relative z-10"
                />
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}