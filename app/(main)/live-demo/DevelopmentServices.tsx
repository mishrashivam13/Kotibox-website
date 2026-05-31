'use client'
import React from 'react';
import { Laptop, Smartphone, Paintbrush, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and frameworks.',
    icon: Laptop,
  },
  {
    id: 2,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    icon: Smartphone,
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User-centered designs that enhance engagement and conversion rates.',
    icon: Paintbrush,
  }
];

export default function DevelopmentServices() {
  return (
    <section className="bg-[#f8fafc] py-24 px-6 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] mb-6 tracking-tight">
            Our <span className="relative inline-block">
              Development
              {/* Orange Underline matching the screenshot */}
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#f5a623] rounded-full"></span>
            </span> Services
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">
            We offer end-to-end web and app development solutions tailored to your business needs
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            
            return (
              <div 
                key={service.id}
                className="group bg-[#1a365d] rounded-2xl p-10 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                {/* Orange Icon */}
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <Icon size={48} strokeWidth={1.5} className="text-[#f5a623]" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-300 leading-relaxed mb-8 min-h-[60px] text-[15px]">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-auto flex items-center justify-center gap-2 text-[#f5a623] font-bold text-sm transition-colors duration-300">
                  Learn more 
                  <ArrowRight size={18} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}