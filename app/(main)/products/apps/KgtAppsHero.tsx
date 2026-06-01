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
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* --- LEFT CONTENT --- */}
        <div className="flex flex-col z-30 pt-10 lg:pt-0">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-8 max-w-xl">
            Designing Impactful Solutions to Elevate Your Digital Presence
          </h2>
          
          {/* Dynamic Title with Fade transition */}
          <div className="h-[120px] md:h-[150px] relative mb-10">
            {slides.map((slide, index) => (
              <h1 
                key={slide.id}
                className={`absolute top-0 left-0 text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#f5a623] leading-tight whitespace-pre-line transition-all duration-500 ease-in-out
                  ${currentIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                {slide.title}
              </h1>
            ))}
          </div>

          <div>
            <button className="bg-[#f5a623] hover:bg-[#e0931c] text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors duration-300 shadow-lg cursor-pointer">
              Live Demo
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