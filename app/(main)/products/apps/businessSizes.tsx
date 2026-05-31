'use client'
import React from 'react';

// --- Custom Solid Icons matching the screenshot ---
const SingleUserIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

const TwoUsersIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);

const ThreeUsersIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-8-3c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3zm16 0c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zM4 14.5c0-.6.28-1.15.75-1.5-.76-.41-1.66-.63-2.75-.63-2.33 0-7 1.17-7 3.5V19h4.5v-1.92c0-1.04.48-1.96 1.25-2.58zm20 1.37v2.63h4.5v-2.5c0-2.33-4.67-3.5-7-3.5-1.09 0-2 .22-2.75.63.47.35.75.9.75 1.5.77.62 1.25 1.54 1.25 2.58H24z" style={{transform: "scale(0.85)", transformOrigin: "center"}}/>
  </svg>
);
// ----------------------------------------------

const businessSizes = [
  {
    id: 1,
    title: 'Startups Small Businesses',
    description: 'Want to construct one from the ground up? With a cutting-edge tech suite, start small and expand as you go.',
    Icon: SingleUserIcon,
  },
  {
    id: 2,
    title: 'Medium Sized Businesses',
    description: 'Expanding an already-existing company? With the ideal all-in-one solution, scale your technology.',
    Icon: TwoUsersIcon,
  },
  {
    id: 3,
    title: 'Large Businesses Enterprises',
    description: 'Do you play a significant role in the industry? Obtain solutions that are tailored to your unique business requirements.',
    Icon: ThreeUsersIcon,
  }
];

export default function RegardlessOfSize() {
  return (
    <section className="bg-[#fcf9f4] py-24 px-6 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight">
            Regardless <span className="relative inline-block">
              of Your
              {/* Orange Underline centered under "of Your" */}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[85%] h-[4px] bg-[#f5a623] rounded-full"></span>
            </span> Size
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-medium">
            KGT Apps is committed to helping you succeed.
          </p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessSizes.map((item) => {
            const Icon = item.Icon;
            
            return (
              <div 
                key={item.id}
                className="group bg-white rounded-2xl p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 border border-slate-50"
              >
                {/* Icon Container with Light Orange Background */}
                <div className="w-16 h-16 rounded-full bg-[#fdf2e3] flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-[#f5a623]" />
                </div>

                {/* Title */}
                <h3 className="text-[22px] font-bold text-[#1a1a1a] mb-4">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-500 text-[15px] leading-relaxed mb-10 min-h-[70px]">
                  {item.description}
                </p>

                {/* Button */}
                <button className="mt-auto px-8 py-3.5 bg-[#f5a623] hover:bg-[#e0931c] text-white font-bold text-sm rounded-lg transition-colors duration-300 shadow-md w-full sm:w-auto cursor-pointer">
                  Book Free Demo
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}