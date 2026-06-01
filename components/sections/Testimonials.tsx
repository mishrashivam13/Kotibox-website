'use client'
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Custom SVG for the large orange quote icon
const QuoteIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="#f5a623" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 17H17L19 13V7H13V13H16L14 17ZM6 17H9L11 13V7H5V13H8L6 17Z" />
  </svg>
);

// Multiple Testimonials Data
const testimonials = [
  {
    id: 1,
    name: 'Friya',
    review: 'â€œBeautiful travel website design, fast booking experience, and smooth user navigation overall.â€',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    rating: 5
  },
  {
    id: 2,
    name: 'Amit Patel',
    review: 'â€œQuick delivery and flawless execution. The custom E-commerce platform works like a charm and sales are up!â€',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 5
  },
  {
    id: 3,
    name: 'Elena Rostova',
    review: 'â€œFrom UI/UX design to final deployment, they handled everything perfectly. Best digital agency we have worked with.â€',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 5
  },
  {
    id: 4,
    name: 'Rohan Sharma',
    review: 'â€œThe AI automation dashboard they built saved us hours of manual work. Highly professional team!â€',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    rating: 5
  },
  {
    id: 5,
    name: 'Sarah Jenkins',
    review: 'â€œExceptional service! Their React Native app development is top-notch. Highly recommended for startups.â€',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    rating: 5
  }
];

// Floating Background Avatars (Pushed far left and right to avoid the card)
const cornerAvatars = [
  // Extreme Left Side
  { id: 1, top: '20%', left: '5%', size: 'w-16 h-16', delay: '0s', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200' },
  { id: 2, top: '50%', left: '12%', size: 'w-20 h-20', delay: '1.5s', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200' },
  { id: 3, top: '80%', left: '6%', size: 'w-14 h-14', delay: '0.8s', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200' },
  // Extreme Right Side
  { id: 4, top: '15%', right: '8%', size: 'w-20 h-20', delay: '0.5s', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200' },
  { id: 5, top: '45%', right: '15%', size: 'w-16 h-16', delay: '2.2s', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
  { id: 6, top: '75%', right: '6%', size: 'w-24 h-24', delay: '1.2s', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#0b1727] py-14 md:py-24 px-4 overflow-hidden font-sans relative min-h-[600px] md:min-h-[850px] flex flex-col items-center justify-center">
      
      {/* Header Section */}
      <div className="text-center z-20 mb-16 max-w-3xl mx-auto px-4 mt-8">
        <p className="text-xs font-semibold text-[#f5a623] tracking-[0.2em] uppercase mb-4">Client Reviews</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-white mb-4">
          What Our Clients Say
        </h2>
        <div className="w-12 h-[2px] bg-[#f5a623] rounded-full mx-auto mb-5" />
        <p className="text-slate-300 text-[0.95rem] md:text-base font-normal leading-relaxed">
          We are proud to deliver results our clients love. Here's what they have to say.
        </p>
      </div>

      {/* Main Container - Adjusted width to ensure avatars have space */}
      <div className="relative w-full max-w-[1400px] flex-1 flex items-center justify-center mx-auto mt-4 px-4 lg:px-24">
        
        {/* Floating Corner Avatars (Hidden on mobile/tablet to keep UI perfectly clean) */}
        <div className="absolute inset-0 hidden lg:block pointer-events-none z-0">
          {cornerAvatars.map((avatar) => (
            <div 
              key={avatar.id}
              className={`absolute ${avatar.size} rounded-full border-[3px] border-[#f5a623] overflow-hidden shadow-xl animate-[bounce_4s_infinite] pointer-events-auto cursor-pointer transition-transform duration-300 hover:scale-110`}
              style={{
                top: avatar.top,
                left: avatar.left,
                right: avatar.right,
                animationDelay: avatar.delay,
              }}
            >
              <img 
                src={avatar.img} 
                alt="Decorative Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Center Navigation & Card Area */}
        <div className="relative z-20 w-full max-w-[700px] flex items-center justify-center pt-16 pb-8">
          
          {/* Previous Arrow */}
          <button 
            onClick={handlePrev}
            className="absolute left-[-20px] md:left-[-60px] top-[60%] -translate-y-1/2 z-30 bg-[#1e293b] hover:bg-[#f5a623] text-white p-3 md:p-4 rounded-full border border-slate-700/50 transition-all duration-300 shadow-xl cursor-pointer"
            aria-label="Previous Review"
          >
            <ChevronLeft size={24} />
          </button>
          
          {/* Single Review Card */}
          <div 
            key={currentIndex} 
            className="relative w-full bg-white rounded-[2rem] p-8 md:p-12 pt-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center text-center animate-[fadeIn_0.5s_ease-in-out]"
          >
            {/* Top Overlapping Image (Fixed perfectly at center top) */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-[6px] border-[#0b1727] overflow-hidden shadow-2xl bg-white z-10">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quote Icon */}
            <div className="mb-6 mt-4">
              <QuoteIcon />
            </div>

            {/* Review Text */}
            <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-8 italic font-medium min-h-[100px] flex items-center justify-center">
              {testimonials[currentIndex].review}
            </p>

            {/* Client Name */}
            <h4 className="text-[#0b1727] text-2xl font-bold mb-3">
              {testimonials[currentIndex].name}
            </h4>

            {/* 5 Stars */}
            <div className="flex items-center gap-1.5">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star 
                  key={i} 
                  size={22} 
                  fill="#f5a623" 
                  className="text-[#f5a623]" 
                />
              ))}
            </div>
          </div>

          {/* Next Arrow */}
          <button 
            onClick={handleNext}
            className="absolute right-[-20px] md:right-[-60px] top-[60%] -translate-y-1/2 z-30 bg-[#1e293b] hover:bg-[#f5a623] text-white p-3 md:p-4 rounded-full border border-slate-700/50 transition-all duration-300 shadow-xl cursor-pointer"
            aria-label="Next Review"
          >
            <ChevronRight size={24} />
          </button>

        </div>

      </div>
      
      {/* Optional Custom CSS for Fade Animation directly in the component */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}