'use client'
import React from 'react';

export default function CTASection() {
  return (
    <section className="bg-slate-50 py-16 px-6 font-sans flex justify-center">
      <div className="max-w-[1300px] w-full">
        
        {/* Banner Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#173a56] via-[#224564] to-[#4e5168]">
          
          {/* Subtle Diagonal Stripes Pattern (CSS Based) */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{ 
              backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(255, 255, 255, 0.05) 5px, rgba(255, 255, 255, 0.05) 6px)' 
            }}
          ></div>

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 py-12 md:px-16 md:py-14 gap-8 text-center md:text-left">
            
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-[2.5rem] text-white mb-4 tracking-wide">
                <span className="font-semibold">Let’s Discuss </span>
                <span className="font-extrabold">Your Project</span>
              </h2>
              <p className="text-slate-200 text-[15px] md:text-[17px] font-medium leading-relaxed max-w-2xl">
                Get a free consultation to discuss how we will transform your idea into an amazing digital product.
              </p>
            </div>

            {/* CTA Button */}
            <div className="shrink-0">
              <button className="bg-[#f5a623] hover:bg-[#e0931c] text-white font-bold px-8 py-4 rounded-md uppercase tracking-wider text-[15px] transition-transform duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                Get Free Consultation
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}