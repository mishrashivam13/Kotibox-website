'use client'
import React from 'react';

export default function StartupHero() {
  return (
    <section className="bg-[#0a1628] py-20 md:py-28 px-6 font-sans overflow-hidden min-h-[85vh] flex items-center">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* --- LEFT COLUMN: Text Content --- */}
        <div className="flex flex-col items-start text-left z-10">
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white leading-[1.15] mb-6 tracking-tight">
            Start Your Business from the Ground Up
          </h1>
          
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-[540px] font-medium">
            Starting from scratch or need help in specific areas? We have the resources and tools necessary to position your startup for success.
          </p>

          <button className="bg-[#f5a623] hover:bg-[#e0931c] text-white font-bold px-8 py-4 rounded-xl text-[15px] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer">
            Begin Your Startup Adventure
          </button>
        </div>

        {/* --- RIGHT COLUMN: 3D Illustration --- */}
        <div className="relative w-full flex justify-center lg:justify-end mt-10 lg:mt-0 z-10">
          {/* Subtle glow behind the image to make the 3D element pop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>
          
          <img 
            src="/images/kgtstartup/Startup-life.png" // Yahan apni actual 3D isometric image ka path daal dijiyega
            alt="Startup Rocket Launch from Laptop" 
            className="w-full max-w-[550px] h-auto object-contain drop-shadow-2xl hover:-translate-y-3 transition-transform duration-700 ease-out"
          />
        </div>

      </div>
    </section>
  );
}