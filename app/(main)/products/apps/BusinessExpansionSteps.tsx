'use client'
import React from 'react';
import { Rocket, BarChart2, Target } from 'lucide-react';

const steps = [
  {
    id: 'launch',
    title: 'Launch',
    subtitle: 'Prepare for the Market With A Complete Power Move',
    description: "Don't wait any longer! You get 80% of the solution ready to use with KGT Apps. It is now feasible to create your business website and app in a matter of days.",
    themeColor: 'bg-[#f5a623]',
    borderColor: 'border-[#f5a623]',
    icon: Rocket,
    reversed: false,
  },
  {
    id: 'run',
    title: 'Run',
    subtitle: 'Utilize Cutting-Edge Features to Create an Amazing Experience',
    description: "Bid farewell to universally applicable solutions. Tailor it to your precise business needs and provide exceptional customer service.",
    themeColor: 'bg-[#112942]',
    borderColor: 'border-[#112942]',
    icon: BarChart2,
    reversed: true,
  },
  {
    id: 'grow',
    title: 'Grow',
    subtitle: 'Grow Your Company With Robust Integrations',
    description: "Integrate everything to increase your return on investment over time. KGT Apps is an extremely reliable and scalable solution to meet all of your future requirements.",
    themeColor: 'bg-[#f5a623]',
    borderColor: 'border-[#f5a623]',
    icon: Target,
    reversed: false,
  }
];

export default function BusinessExpansionSteps() {
  return (
    <section className="bg-white py-24 px-6 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-24 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] leading-[1.3] mb-6 tracking-tight max-w-4xl">
            Examine the countless opportunities to start, manage, and expand <span className="relative inline-block">
              your
              {/* Orange Underline under 'your' */}
              <span className="absolute -bottom-1 left-0 w-full h-[5px] bg-[#f5a623]"></span>
            </span> <span className="text-[#f5a623]">on-demand company.</span>
          </h2>
          <p className="text-slate-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Make your ideas a reality with the help of strong tools, astute technology, and knowledgeable advice that will help your on-demand business expand more quickly.
          </p>
        </div>

        {/* --- STEPS SECTION --- */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div 
                key={step.id} 
                className={`flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 
                           ${step.reversed ? 'lg:flex-row-reverse' : ''}`}
              >
                
                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                  <h3 className="text-2xl font-bold text-[#0a1628] mb-3">
                    {step.title}
                  </h3>
                  <h4 className="text-[22px] font-bold text-[#0a1628] mb-4 leading-snug">
                    {step.subtitle}
                  </h4>
                  <p className="text-slate-600 text-[17px] leading-relaxed mb-8">
                    {step.description}
                  </p>
                  <button className="bg-[#f5a623] hover:bg-[#e0931c] text-white font-bold px-8 py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
                    Book Free Demo
                  </button>
                </div>

                {/* Custom Icon Design (Circular Arc & Shadow) */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="relative w-[300px] h-[300px] flex items-center justify-center group">
                    
                    {/* Outer Broken Arc (Rotating slightly on hover for a nice effect) */}
                    <div className={`absolute inset-0 border-[6px] ${step.borderColor} border-l-transparent border-b-transparent rounded-full rotate-[-45deg] group-hover:rotate-0 transition-transform duration-700 ease-out`}></div>
                    
                    {/* Inner White Circle with Shadow */}
                    <div className="absolute w-[260px] h-[260px] bg-white rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.1)] z-10 flex items-center justify-center">
                      
                      {/* Innermost Colored Circle with Icon */}
                      <div className={`w-[210px] h-[210px] ${step.themeColor} rounded-full flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500`}>
                        <Icon size={85} strokeWidth={1.5} className="text-white" />
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}