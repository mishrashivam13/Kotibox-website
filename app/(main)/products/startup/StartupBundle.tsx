'use client'
import React from 'react';

const bundleServices = [
  {
    title: "Actionable Market Research",
    items: [
      "Market size and potential for expansion",
      "Competitor analysis and positioning"
    ]
  },
  {
    title: "Plans for Strategic Business",
    items: [
      "Model of Business and Revenue",
      "Analysis of the market and competition"
    ]
  },
  {
    title: "UI/UX Designs",
    items: [
      "User journey mapping that is intuitive",
      "Wireframing and prototyping"
    ]
  },
  {
    title: "Legal Assistance for Startups",
    items: [
      "Observance of the law and risk reduction",
      "Protection of businesses and intellectual property"
    ]
  },
  {
    title: "Effective Marketing Roadmaps",
    items: [
      "12-month plan for executing marketing",
      "Strategies before and after launch"
    ]
  },
  {
    title: "Pitch Decks for Investors",
    items: [
      "Market fit and business model",
      "Forecasts for growth and financials"
    ]
  }
];

export default function StartupBundle() {
  return (
    <section className="bg-[#151515] py-20 px-6 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="mb-14 max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-white leading-tight tracking-tight">
            Choose any service individually, or unlock the complete Startup <span className="relative inline-block mt-2 lg:mt-0">
              Bundle
              {/* Orange Underline exactly under 'Bundle' */}
              <span className="absolute -bottom-1 left-0 w-full h-[4px] bg-[#f5a623] rounded-full"></span>
            </span> with all six services together.
          </h2>
        </div>

        {/* --- TWO COLUMN LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6 Service Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {bundleServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-[#172c45] rounded-xl p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#f5a623]/30"
              >
                <h3 className="text-xl md:text-[22px] font-semibold text-white mb-6 leading-snug">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-white/90 text-[15px] leading-relaxed">
                      <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-4 bg-[#172c45] rounded-xl p-8 shadow-2xl sticky top-24">
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="bundleName" className="text-sm font-medium text-white">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="bundleName" 
                  placeholder="Enter your name" 
                  className="w-full px-4 py-3 rounded-md bg-white border-none text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f5a623] transition-all"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="bundleEmail" className="text-sm font-medium text-white">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="bundleEmail" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 rounded-md bg-white border-none text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f5a623] transition-all"
                />
              </div>

              {/* Phone Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="bundlePhone" className="text-sm font-medium text-white">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  id="bundlePhone" 
                  placeholder="Enter your phone number" 
                  className="w-full px-4 py-3 rounded-md bg-white border-none text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f5a623] transition-all"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="bundleMessage" className="text-sm font-medium text-white">
                  Your Message
                </label>
                <textarea 
                  id="bundleMessage" 
                  rows={3}
                  placeholder="Enter your message" 
                  className="w-full px-4 py-3 rounded-md bg-white border-none text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f5a623] transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="mt-2">
                <button 
                  type="submit" 
                  className="w-full bg-[#f5a623] hover:bg-[#e0931c] text-white font-bold px-6 py-3.5 rounded-md transition-all duration-300 shadow-md cursor-pointer"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}