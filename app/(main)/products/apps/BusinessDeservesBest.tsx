'use client'
import React from 'react';

const features = [
  "Branded Website",
  "iOS Android Ordering Apps",
  "Ordering Management Dashboard",
  "Merchant Panel",
  "Delivery Management System",
  "Delivery Agent App",
  "Advance Reports Analytics",
  "In App Chat Solution"
];

export default function BusinessDeservesBest() {
  return (
    <section className="bg-white py-24 px-6 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#0a1628] leading-tight mb-6 tracking-tight">
            Your Business <span className="relative inline-block">
              Deserves
              {/* Orange Underline exactly under 'Deserves' */}
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#f5a623] rounded-full"></span>
            </span> the <span className="text-[#f5a623]">Best.</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Essential for the Success of Your Internet Business
          </p>
        </div>

        {/* --- TWO COLUMN LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Features List */}
          <div className="flex flex-col gap-6 pl-0 md:pl-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative flex items-center pl-6 cursor-default transition-transform duration-300 hover:translate-x-2"
              >
                {/* Animated Left Border Indicator */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0 bg-[#f5a623] rounded-full transition-all duration-300 group-hover:h-full opacity-0 group-hover:opacity-100"></div>
                
                {/* Text */}
                <h3 className="text-xl md:text-2xl font-bold text-[#0a1628] group-hover:text-[#f5a623] transition-colors duration-300">
                  {feature}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Column: Isometric Image */}
          <div className="relative w-full flex justify-center lg:justify-end">
            <img 
              src="/images/kgtapp/ui-ux.png" /* Yahan apni actual image ka path daal dijiye */
              alt="UI/UX Isometric Design Illustration" 
              className="w-full max-w-[600px] h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

        </div>

      </div>
    </section>
  );
}