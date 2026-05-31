'use client'
import React, { useState } from 'react';
import { X, User, Mail, Phone, FileText, Send } from 'lucide-react';

export default function LeadCaptureModal() {
  // Modal open/close state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* --- DEMO TRIGGER BUTTON (Aap isko apne kisi bhi button se replace kar sakte hain) --- */}
      <div className="flex justify-center p-10 bg-[#0a1628]">
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#f5a623] hover:bg-[#e0931c] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          Let's Talk AI (Open Modal)
        </button>
      </div>

      {/* --- MODAL OVERLAY --- */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 transition-opacity duration-300">
          
          {/* Modal Container */}
          <div className="bg-[#172c45] w-full max-w-lg rounded-2xl shadow-2xl border border-slate-700/50 relative overflow-hidden animate-in zoom-in-95 fade-in duration-300">
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#f5a623] to-[#e0931c]"></div>

            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors bg-[#0a1628]/50 hover:bg-[#0a1628] p-2 rounded-full"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="px-8 pt-10 pb-6 border-b border-white/10">
              <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                Start Your <span className="text-[#f5a623]">Project</span>
              </h3>
              <p className="text-slate-300 text-sm font-medium">
                Leave your details below and our experts will get back to you shortly.
              </p>
            </div>

            {/* Form */}
            <form className="p-8 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              
              {/* Name Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User size={18} className="text-slate-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-lg bg-white border-none text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f5a623] transition-all shadow-inner"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-slate-400" />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-lg bg-white border-none text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f5a623] transition-all shadow-inner"
                />
              </div>

              {/* Contact Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone size={18} className="text-slate-400" />
                </div>
                <input 
                  type="tel" 
                  placeholder="Contact Number" 
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-lg bg-white border-none text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f5a623] transition-all shadow-inner"
                />
              </div>

              {/* Project Description Field */}
              <div className="relative">
                <div className="absolute top-3.5 left-0 pl-4 pointer-events-none">
                  <FileText size={18} className="text-slate-400" />
                </div>
                <textarea 
                  placeholder="Briefly describe your project..." 
                  rows={4}
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-lg bg-white border-none text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f5a623] transition-all shadow-inner resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="mt-2 w-full flex items-center justify-center gap-2 bg-[#f5a623] hover:bg-[#e0931c] text-white font-bold px-6 py-4 rounded-lg transition-all duration-300 shadow-md group cursor-pointer"
              >
                Submit Request
                <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <p className="text-center text-xs text-slate-500 mt-2">
                We respect your privacy. No spam, ever.
              </p>

            </form>
          </div>
        </div>
      )}
    </>
  );
}