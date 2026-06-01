'use client'
import React, { useState, useEffect } from 'react';

// Updated Slides Array (6 items as requested)
const slides = [
  {
    id: 1,
    title: 'Food Delivery',
    image: '/images/kgtapp/hp_banner_app.webp', 
  },
  {
    id: 2,
    title: 'Home Services',
    image: '/images/kgtapp/hp_banner_app1.webp', 
  },
  {
    id: 3,
    title: 'Laundary Service',
    image: '/images/kgtapp/hp_banner_app2.webp', 
  },
  {
    id: 4,
    title: 'Taxi-Delivery',
    image: '/images/kgtapp/hp_banner_app3.webp', 
  },
  {
    id: 5,
    title: 'Online Consult',
    image: '/images/kgtapp/hp_banner_app4.webp', // Replaced with a unique placeholder
  },
  {
    id: 6,
    title: 'E-commerce Delivery ',
    image: '/images/kgtapp/hp_banner_app5.webp', // Replaced with a unique placeholder
  },
  {
    id: 7,
    title: 'Home Service',
    image: '/images/kgtapp/hp_banner_app6.webp', // Replaced with a unique placeholder
  }
];

export default function KgtAppsHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-sliding logic (Changes every 3 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // 3000ms = 3 seconds
    return () => clearInterval(timer);
  }, []);

  // Helper function to calculate slide positions
  const getSlideStyle = (index: number) => {
    const total = slides.length;
    // Calculate distance from current index (-1 is left, 0 is center, 1 is right)
    let offset = (index - currentIndex) % total;
    
    // Adjust offset to handle looping perfectly for both odd and even array lengths
    if (offset < -Math.floor(total / 2)) offset += total;
    if (offset > Math.floor(total / 2)) offset -= total;

    // Styling based on position
    if (offset === 0) {
      // Center active slide
      return "translate-x-0 scale-100 opacity-100 z-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]";
    } else if (offset === 1 || offset === -1) {
      // Adjacent slides (Left & Right)
      const direction = offset === 1 ? 'translate-x-[70%] md:translate-x-[90%]' : '-translate-x-[70%] md:-translate-x-[90%]';
      return `${direction} scale-[0.85] opacity-40 z-10`;
    } else {
      // Hidden slides (Peeche chale jayenge aur invisible ho jayenge)
      return "translate-x-0 scale-50 opacity-0 z-0 pointer-events-none";
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-[#09182b] overflow-hidden px-6 py-20 font-sans">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
        
        {/* --- LEFT CONTENT --- */}
        <div className="flex flex-col z-30 pt-10 lg:pt-0">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-[1.5px] bg-[#f5a623]" />
            <span className="text-[#f5a623] text-xs font-semibold tracking-[0.28em] uppercase">KGT Apps</span>
          </div>

          <p className="text-white/60 text-sm sm:text-base font-normal mb-3 max-w-sm">
            AI-powered app solutions for every business need
          </p>

          {/* Dynamic animated title */}
          <div className="h-[72px] sm:h-[90px] md:h-[110px] relative mb-5">
            {slides.map((slide, index) => (
              <h1
                key={slide.id}
                className={`absolute top-0 left-0 text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-bold text-[#f5a623] leading-tight transition-all duration-500 ease-in-out
                  ${currentIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
              >
                {slide.title}
              </h1>
            ))}
          </div>

          <h2 className="text-lg sm:text-xl font-semibold text-white leading-snug mb-6 max-w-md">
            Designing impactful solutions to elevate your digital presence
          </h2>

          <div className="flex flex-wrap gap-3">
            <button className="group relative overflow-hidden bg-[#f5a623] hover:bg-[#e0931c] text-[#0a1628] font-semibold px-7 py-3.5 rounded-lg text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(245,166,35,0.35)] hover:shadow-[0_6px_28px_rgba(245,166,35,0.5)] cursor-pointer">
              <span className="relative z-10">View Live Demo</span>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
            </button>
            <button className="border border-white/25 text-white/80 px-7 py-3.5 rounded-lg text-sm font-medium hover:border-white/50 hover:text-white transition-all duration-300 cursor-pointer">
              Get Custom Quote
            </button>
          </div>
        </div>

        {/* --- RIGHT CAROUSEL (Mobile Screens) --- */}
        <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
          
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`absolute top-1/2 -translate-y-1/2 w-[240px] md:w-[280px] h-[500px] md:h-[580px] rounded-[2.5rem] bg-black border-[6px] border-slate-800 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${getSlideStyle(index)}`}
            >
              {/* Fake Mobile Notch/Header */}
              <div className="absolute top-0 inset-x-0 h-6 bg-transparent z-10 flex justify-center">
                <div className="w-1/3 h-4 bg-slate-800 rounded-b-xl"></div>
              </div>

              {/* Mobile Screen Image */}
              <img 
                src={slide.image} 
                alt={slide.title.replace('\n', ' ')} 
                className="w-full h-full object-cover"
              />
              
              {/* Soft overlay on inactive slides for depth */}
              {currentIndex !== index && (
                <div className="absolute inset-0 bg-[#09182b]/30"></div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}