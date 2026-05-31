'use client'
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "Quick 24-hour response",
  "Detailed project estimate",
  "No obligation consultation",
  "Customized solution proposal",
  "Transparent pricing, no surprises",
  "Expert industry team",
  "Agile, timely delivery",
  "Scalable business solutions",
  "Dedicated project manager",
  "Support and maintenance included"
];

export default function ProjectQuote() {
  return (
    <section className="bg-[#1e3a5f] py-20 px-6 md:px-12 lg:px-20 font-sans min-h-screen flex items-center">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        
        {/* LEFT COLUMN: Content & Benefits */}
        <div className="flex flex-col text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Get a Free Project Quote
          </h2>
          
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-light">
            Tell us about your project requirements and we'll provide you with a detailed estimate.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                {/* Custom filled look for Lucide Icon */}
                <div className="text-[#f5a623] bg-white rounded-full flex items-center justify-center w-5 h-5 shrink-0">
                  <CheckCircle2 size={24} className="text-[#f5a623]" fill="currentColor" />
                </div>
                <span className="text-white text-base font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Inquiry Form */}
        <div className="w-full max-w-[600px] mx-auto lg:ml-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            
            <h3 className="text-3xl font-bold text-[#0a1628] mb-8 text-center">
              Project Inquiry Form
            </h3>

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-[#0a1628]">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter your name" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#f5a623] focus:ring-2 focus:ring-[#f5a623]/20 transition-all"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-[#0a1628]">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#f5a623] focus:ring-2 focus:ring-[#f5a623]/20 transition-all"
                />
              </div>

              {/* Phone Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-semibold text-[#0a1628]">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="Enter your phone number" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#f5a623] focus:ring-2 focus:ring-[#f5a623]/20 transition-all"
                />
              </div>

              {/* Service Select */}
              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm font-semibold text-[#0a1628]">
                  Service Needed
                </label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-600 focus:outline-none focus:border-[#f5a623] focus:ring-2 focus:ring-[#f5a623]/20 transition-all appearance-none bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>Select a service</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="web">Web Development</option>
                  <option value="ai">AI Solutions & Automation</option>
                  <option value="ecommerce">E-Commerce Setup</option>
                  <option value="uiux">UI/UX Design</option>
                </select>
              </div>

              {/* Project Details */}
              <div className="flex flex-col gap-2">
                <label htmlFor="details" className="text-sm font-semibold text-[#0a1628]">
                  Project Details
                </label>
                <textarea 
                  id="details" 
                  rows={4}
                  placeholder="Describe your project requirements" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#f5a623] focus:ring-2 focus:ring-[#f5a623]/20 transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="mt-2">
                <button 
                  type="submit" 
                  className="bg-[#f5a623] hover:bg-[#e0931c] text-white font-bold px-8 py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer w-auto"
                >
                  Submit Request
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}