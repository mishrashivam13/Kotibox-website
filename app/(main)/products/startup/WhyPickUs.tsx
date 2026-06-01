import React from 'react';
import { HandCoins, Award, Headset, Lightbulb } from 'lucide-react';

const reasons = [
  {
    id: 1,
    title: "Affordable & Flexible",
    description: "Choose only the services that match your goals and scale at your own pace. Enjoy complete flexibility to build a solution that fits your business without unnecessary add-ons.",
    icon: HandCoins,
  },
  {
    id: 2,
    title: "Proven Expertise You Can Rely On",
    description: "Backed by years of experience working with startups across various industries, our team understands real-world challenges and delivers strategies that drive measurable results.",
    icon: Award,
  },
  {
    id: 3,
    title: "Dedicated Support, Every Step of the Way",
    description: "We don't just provide servicesâ€”we become your growth partners. From planning to launch and beyond, we guide you through every stage of your business journey with reliable, hands-on support.",
    icon: Headset,
  },
  {
    id: 4,
    title: "Innovative Solutions Built for Growth",
    description: "We combine modern tools, creative thinking, and industry insights to deliver solutions that help your business move faster. Our approach is designed to keep you ahead of the competition and ready for what's next.",
    icon: Lightbulb,
  }
];

export default function WhyPickUs() {
  return (
    <section className="bg-[#fafbfc] py-14 md:py-24 px-6 font-sans">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-start">
        
        {/* --- LEFT COLUMN: Header & Image --- */}
        {/* 'lg:sticky' ensures it stays in place while the user scrolls through the cards on desktop */}
        <div className="flex flex-col lg:sticky lg:top-28">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] leading-[1.2] mb-6 tracking-tight">
            Why Pick Us to Help You <span className="text-[#f5a623]">Launch</span> Your <br className="hidden md:block" />
            <span className="relative inline-block">
              Business?
              {/* Orange Underline slightly offset */}
              <span className="absolute -bottom-2 left-0 w-[80%] h-1.5 bg-[#f5a623]"></span>
            </span>
          </h2>
          
          <p className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-md">
            We provide more than just services; we also offer the knowledge, assistance, and adaptability you need to be successful.
          </p>

          {/* Feature Image */}
          <div className="w-full relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            {/* Replace this src with your actual 'Summary Report' image path */}
            <img 
              src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800" 
              alt="Business Summary Report" 
              className="w-full h-auto md:h-[350px] object-cover hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle overlay to match the darker/blueish tint in the screenshot */}
            <div className="absolute inset-0 bg-[#0a1628]/10 pointer-events-none"></div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: Features Cards --- */}
        <div className="flex flex-col gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div 
                key={reason.id} 
                className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-lg hover:border-[#f5a623]/20 transition-all duration-300 flex flex-col md:flex-row gap-6 group cursor-default"
              >
                {/* Icon Container */}
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-[#fdf4e6] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#f5a623] transition-all duration-300">
                    <Icon size={26} strokeWidth={2} className="text-[#f5a623] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}