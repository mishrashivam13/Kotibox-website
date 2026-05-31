'use client'
import React from 'react';
import { Phone, Video, Calendar } from 'lucide-react';

const contactOptions = [
  {
    id: 1,
    title: 'Quick Call',
    icon: Phone,
    description: '15-minute consultation to discuss your project needs',
    buttonText: 'Schedule Now'
  },
  {
    id: 2,
    title: 'Video Meeting',
    icon: Video,
    description: '30-minute detailed discussion with screen sharing',
    buttonText: 'Schedule Now'
  },
  {
    id: 3,
    title: 'In-Person Meeting',
    icon: Calendar,
    description: 'Face-to-face meeting at our office (local clients)',
    buttonText: 'Schedule Now'
  }
];

export default function TalkDirectly() {
  return (
    <section className="bg-[#f8fafc] py-24 px-6 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] mb-6 tracking-tight">
            Prefer to <span className="relative inline-block">
              Talk Directly?
              {/* Orange Underline matching the screenshot */}
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#f5a623] rounded-full"></span>
            </span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">
            Schedule a call with our development team to discuss your project in detail
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {contactOptions.map((option) => {
            const Icon = option.icon;
            
            return (
              <div 
                key={option.id}
                className="group bg-white rounded-2xl p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100"
              >
                {/* Icon Container */}
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <Icon size={48} strokeWidth={2} className="text-[#f5a623]" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#0a1628] mb-4">
                  {option.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed mb-8 min-h-[50px]">
                  {option.description}
                </p>

                {/* Button (Outlined default, solid on hover) */}
                <button className="mt-auto px-8 py-3 rounded-lg border border-[#0a1628] text-[#0a1628] font-bold text-sm transition-all duration-300 group-hover:bg-[#0a1628] group-hover:text-white cursor-pointer w-full sm:w-auto">
                  {option.buttonText}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}