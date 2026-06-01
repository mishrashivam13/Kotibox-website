'use client'
import React from 'react';

export default function TryKGTApps() {
  return (
    <section className="bg-[#f36c34] pt-24 px-6 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
        
        {/* --- HEADER SECTION --- */}
        <div className="mb-16 z-10 relative">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Believing is building Try KGT Apps Now
          </h2>
          <p className="text-white/90 text-lg md:text-2xl font-medium max-w-4xl mx-auto tracking-wide">
            Launch Your On-Demand Business App Concept Quickly and Increase ROI by Up to 10x
          </p>
        </div>

        {/* --- SINGLE MOCKUP IMAGE --- */}
        {/* The negative margin bottom (-mb-4 or more) ensures it cuts off cleanly at the section's edge if needed */}
        <div className="relative w-[120vw] sm:w-[100vw] md:w-[110%] max-w-[1600px] flex justify-center -mb-2 mt-4 hover:scale-[1.01] transition-transform duration-700 ease-out">
          <img 
            src="/images/kgtapp/kgtapp.webp" // Replace with your actual single combined image path
            alt="Multiple Mobile App Mockups by KGT Apps" 
            className="w-full h-auto object-cover drop-shadow-[0_-20px_50px_rgba(0,0,0,0.15)]"
          />
        </div>

      </div>
    </section>
  );
}