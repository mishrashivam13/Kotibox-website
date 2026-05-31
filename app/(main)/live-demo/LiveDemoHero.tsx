import React from 'react';
import { Rocket } from 'lucide-react';

export default function LiveDemoHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0b1727] px-6 py-20 font-sans overflow-hidden">
      
      {/* Background Image & Deep Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000"
          alt="Developer working on laptop"
          className="w-full h-full object-cover opacity-20"
        />
        {/* Gradients to blend the image into the dark theme seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1727]/95 via-[#0b1727]/80 to-[#0b1727]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.03)_0%,transparent_60%)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center mt-10">
        
        {/* Top Pill/Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-sm">
          <Rocket size={16} className="text-white" />
          <span className="text-white text-sm font-medium tracking-wide">
            Ready-To-Launch Digital Products
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.1] mb-6 tracking-tight">
          Future-Ready <span className="text-[#f5a623]">Web & Mobile<br className="hidden md:block" /> Apps</span> Built For Growth
        </h1>

        {/* Subheading */}
        <p className="text-slate-300 text-lg md:text-xl max-w-3xl leading-relaxed mb-14 font-light">
          Launch scalable, secure, and fully customizable digital products designed to accelerate business growth, improve customer experience, and help you dominate your market faster.
        </p>

        {/* Stats Grid */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 mb-16">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-extrabold text-[#f5a623] mb-2 tracking-tight">20+</span>
            <span className="text-slate-300 text-sm md:text-base font-medium">Solutions</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-extrabold text-[#f5a623] mb-2 tracking-tight">100%</span>
            <span className="text-slate-300 text-sm md:text-base font-medium">Customizable</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-extrabold text-[#f5a623] mb-2 tracking-tight">7 Days</span>
            <span className="text-slate-300 text-sm md:text-base font-medium">Quick Launch</span>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#142845] hover:bg-[#1c3860] text-white font-semibold transition-all duration-300 shadow-lg cursor-pointer">
            Explore Products
          </button>
          
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-transparent hover:bg-white/10 text-white font-semibold transition-all duration-300 border border-slate-400 hover:border-white cursor-pointer">
            Get Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
}