'use client'
import React from 'react';
export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center 
                        justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://img.magnific.com/free-photo/diverse-businesspeople-having-meeting_53876-103954.jpg?semt=ais_hybrid&w=740&q=80')" }} />
      <div className="absolute inset-0 bg-[#0a1628]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_300px_at_50%_30%,rgba(245,166,35,0.06),transparent)]" />

      <div className="relative z-10 max-w-4xl pt-20">
        <p className="text-white/80 text-base font-semibold mb-4 tracking-wide">
          About Us
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white 
                       leading-tight tracking-tight mb-6">
          Your Trusted Partner in{' '}
          <span className="text-[#f5a623]">Digital Innovation</span>
        </h1>
        <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
          We help businesses embrace the future with cutting-edge digital 
          solutions, innovative strategies, and technology-driven transformation 
          that unlocks growth and long-term success.
        </p>
      </div>
    </section>
  )
}