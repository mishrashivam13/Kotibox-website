'use client'
import React from 'react';

export default function BusinessGrowth() {
  return (
    <section className="bg-[#f8fafc] py-24 px-6 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center">
        
        {/* --- HEADER SECTION --- */}
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#0a1628] leading-tight mb-6 tracking-tight">
          Use Complete Technology to Drive Your <br className="hidden md:block" />
          <span className="relative inline-block mt-2 md:mt-0 text-[#f5a623]">
            Business Growth
            {/* Orange Underline */}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-1.5 bg-[#f5a623] rounded-full"></span>
          </span>
        </h2>
        
        <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-16 font-medium">
          Obtain a comprehensive set of "ready-to-use" base products that are easily customizable to meet your changing business requirements.
        </p>

        {/* --- SINGLE IMAGE SECTION --- */}
        <div className="relative max-w-[950px] mx-auto flex justify-center">
          <img 
            src="/images/kgtapp/foodkgtapp.png" /* Yahan apni single image ka path daal dijiye */
            alt="Business Growth Technology" 
            className="w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

      </div>
    </section>
  );
}