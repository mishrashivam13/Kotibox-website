'use client'
import React from 'react';
import { Lightbulb, Rocket, Globe, Award, Star } from 'lucide-react'

const milestones = [
  {
    year: '2015',
    title: 'The Beginning',
    description: 'Founded with a vision to transform digital experiences through innovative solutions and cutting-edge technology.',
    Icon: Lightbulb,
    side: 'right', // side determines desktop layout
  },
  {
    year: '2017',
    title: 'Rapid Growth',
    description: 'Expanded our team and services, delivering exceptional results for clients across various industries.',
    Icon: Rocket,
    side: 'left',
  },
  {
    year: '2020',
    title: 'Global Expansion',
    description: 'Established international presence with offices in three countries, serving clients worldwide.',
    Icon: Globe,
    side: 'right',
  },
  {
    year: '2022',
    title: 'Industry Recognition',
    description: 'Received multiple awards for innovation, design excellence, and outstanding client satisfaction.',
    Icon: Award,
    side: 'left',
  },
  {
    year: '2025',
    title: 'Future Vision',
    description: 'Continuing to push boundaries with AI-driven solutions and sustainable digital transformation.',
    Icon: Star,
    side: 'right',
  },
];

export default function OurJourney() {
  return (
    <section className="bg-[#0b1727] py-24 px-4 md:px-8 overflow-hidden font-sans relative">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#f5a623]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Heading Section */}
        <div className="text-center mb-24 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Star size={16} className="text-[#f5a623]" />
            <span className="text-sm font-bold tracking-widest uppercase text-white/80">Company Timeline</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Our <span className="text-[#f5a623]">Journey</span> So Far
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#f5a623] to-orange-400 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Main Vertical Center Line (Responsive positioning) */}
          {/* Mobile: Left aligned. Desktop: Center aligned. */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f5a623]/0 via-[#f5a623]/30 to-[#f5a623]/0" />

          <div className="flex flex-col gap-12 md:gap-20">
            {milestones.map((item, index) => (
              <div 
                key={item.year} 
                className={`relative flex items-center group ${
                  // On mobile, flex-row. On desktop, keep row but use justify based on side.
                  item.side === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'
                } flex-row`}
              >

                {/* Timeline Node (The Year Bubble) */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 z-20">
                  {/* Outer glowing ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#f5a623]/30 bg-[#0b1727] group-hover:border-[#f5a623] group-hover:scale-110 transition-all duration-500 shadow-[0_0_15px_rgba(245,166,35,0)] group-hover:shadow-[0_0_20px_rgba(245,166,35,0.4)]"></div>
                  {/* Inner text */}
                  <span className="relative text-[#f5a623] font-bold text-base md:text-lg group-hover:text-white transition-colors duration-300">
                    {item.year}
                  </span>
                </div>

                {/* Spacer for the other side (Desktop only) */}
                <div className="hidden md:block w-1/2"></div>

                {/* Content Card Area */}
                {/* Mobile: takes full width minus left padding. Desktop: takes exactly half width minus padding */}
                <div className="w-full md:w-1/2 pl-24 md:pl-0">
                  <div className={`
                    relative 
                    bg-white/[0.02] backdrop-blur-sm 
                    border border-white/10 group-hover:border-[#f5a623]/50
                    rounded-3xl p-6 md:p-8 
                    transition-all duration-500 ease-out
                    hover:-translate-y-2 hover:bg-white/[0.04]
                    hover:shadow-2xl hover:shadow-[#f5a623]/10
                    ${item.side === 'left' ? 'md:mr-16 md:text-right' : 'md:ml-16 md:text-left'}
                  `}>
                    
                    {/* Connecting Pointer (Desktop only) */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-px bg-white/20 group-hover:bg-[#f5a623]/50 transition-colors duration-500 ${
                      item.side === 'left' ? '-right-8' : '-left-8'
                    }`}></div>

                    {/* Card Content Structure */}
                    <div className={`flex flex-col ${item.side === 'left' ? 'md:items-end' : 'md:items-start'} items-start`}>
                      
                      {/* Icon Container */}
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1a2f4e] to-[#0b1727] border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                        <item.Icon size={24} className="text-[#f5a623]" strokeWidth={1.5} />
                      </div>
                      
                      {/* Text Content */}
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}