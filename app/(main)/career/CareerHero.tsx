'use client'
import React from 'react';
export default function CareerHero() {
  return (
    <section className="relative min-h-[55vh] flex flex-col items-center 
                        justify-center text-center px-6 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20241030/pngtree-personal-development-or-career-growth-success-ai-illustration-image_16473836.jpg')" }}
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#0a1628]/80" />

      {/* Blue glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_400px_at_50%_50%,rgba(10,50,120,0.4),transparent)]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl pt-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white 
                       leading-tight tracking-tight mb-6">
          Build Your Career{' '}
          <span className="text-[#f5a623]">With Us</span>
        </h1>
        <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          Join our team of innovative developers and designers creating 
          cutting-edge web applications that make a difference.
        </p>
      </div>

    </section>
  )
}