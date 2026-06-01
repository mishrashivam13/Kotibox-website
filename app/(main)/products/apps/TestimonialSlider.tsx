'use client'
import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

// Testimonials Data
const testimonials = [
  {
    id: 1,
    quote: "I'm incredibly impressed with the attention to detail and creative solutions provided. They took our vague ideas and turned them into a stunning reality. The project was completed on time and within budget.",
    name: "Sarah Johnson",
    role: "CEO, Innovate Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 2,
    quote: "The team's technical expertise and quick turnaround time helped us launch our application weeks ahead of schedule. Their post-launch support has been nothing short of exceptional.",
    name: "Michael Chen",
    role: "Founder, TechFlow App",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 3,
    quote: "Working with them was a breeze. They understood our market requirements perfectly and delivered a highly scalable product. Highly recommend them for any serious enterprise needs.",
    name: "Emily Rodriguez",
    role: "Director of Ops, NextGen Retail",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality (Changes every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-[#f8fafc] py-14 md:py-24 px-6 font-sans">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center">
        
        {/* --- HEADER SECTION --- */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight mb-6 tracking-tight">
            Here Are A Few Of Our Contented <br className="hidden md:block" />
            <span className="relative inline-block mt-2 md:mt-0">
              Customers
              {/* Orange Underline centered exactly under "Customers" */}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-1.5 bg-[#f5a623] rounded-full"></span>
            </span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-medium mt-8">
            Hear from businesses that have transformed with our solutions.
          </p>
        </div>

        {/* --- TESTIMONIAL CARD --- */}
        <div className="relative w-full max-w-[800px] animate-in fade-in duration-700" key={currentIndex}>
          
          <div className="bg-[#0b1f38] rounded-2xl p-10 md:p-14 text-left shadow-xl relative">
            {/* Quote Icon */}
            <Quote size={40} className="text-white/10 mb-6 fill-current" />
            
            {/* Testimonial Text */}
            <p className="text-white text-[17px] md:text-xl leading-relaxed italic font-light">
              "{currentTestimonial.quote}"
            </p>

            {/* Little Triangle Pointing Down */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0b1f38] rotate-45 rounded-sm"></div>
          </div>

        </div>

        {/* --- USER PROFILE SECTION --- */}
        <div className="flex flex-col items-center mt-12 animate-in fade-in duration-700" key={`profile-${currentIndex}`}>
          <img 
            src={currentTestimonial.avatar} 
            alt={currentTestimonial.name} 
            className="w-16 h-16 rounded-full object-cover shadow-md mb-4 border-2 border-white"
          />
          <h4 className="text-[#0a1628] font-bold text-lg">
            {currentTestimonial.name}
          </h4>
          <p className="text-[#f5a623] font-medium text-sm">
            {currentTestimonial.role}
          </p>
        </div>

        {/* --- PAGINATION DOTS --- */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'w-3 h-3 bg-[#f5a623]' 
                  : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}