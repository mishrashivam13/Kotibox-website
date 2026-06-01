'use client'
import React from 'react';

const highlights = [
  { label: '12+ Years', desc: 'Industry Experience' },
  { label: '500+', desc: 'Projects Delivered' },
  { label: '3', desc: 'Countries Served' },
];

export default function VisionaryLeader() {
  return (
    <section className="bg-white py-14 md:py-24 px-6 relative overflow-hidden">

      {/* Subtle top border to separate from hero */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#f5a623] to-transparent opacity-60" />

      {/* Light amber glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[400px] opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 10%, #f5a623 0%, transparent 65%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-[2px] bg-[#f5a623]" />
          <span className="text-[#f5a623] text-xs font-semibold tracking-[0.25em] uppercase">
            Leadership
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-16">

          {/* Left â€” CEO Photo + Stats */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <div className="h-80 overflow-hidden bg-gray-100">
                <img
                  src="/images/about/sir.jpg"
                  alt="Sachin Khandelwal"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-6 py-5 bg-[#0a1628]">
                <h3 className="text-xl font-bold text-white mb-0.5">
                  Sachin Khandelwal
                </h3>
                <p className="text-[#f5a623] text-sm font-semibold tracking-wide uppercase">
                  Founder & CEO
                </p>
              </div>
            </div>

            {/* Stats under photo */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="bg-[#fdf8f3] border border-[#f5a623]/20 rounded-xl px-3 py-4 text-center"
                >
                  <div className="text-base font-bold text-[#0a1628] leading-none mb-1">{h.label}</div>
                  <div className="text-gray-400 text-[10px] font-medium leading-snug">{h.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right â€” Content */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-4 leading-tight">
              Meet Our{' '}
              <span className="text-[#f5a623]">Visionary Leader</span>
            </h2>
            <div className="w-16 h-1 bg-[#f5a623] rounded-full mb-8" />

            {/* Pull quote */}
            <div className="relative pl-6 border-l-4 border-[#f5a623] bg-[#fdf8f3] py-4 pr-5 rounded-r-xl mb-8">
              <p className="text-[#0a1628]/80 text-base leading-relaxed italic font-medium">
                "We are committed to creating technology that gives businesses more power.
                Our mission is to transform every idea into a scalable digital product
                that drives real business impact across the globe."
              </p>
            </div>

            <div className="space-y-4 text-gray-500 text-base leading-relaxed">
              <p>
                With over 12 years of expertise in web and mobile app development,
                Sachin Khandelwal leads Kotibox Global Technologies with a clear vision â€”
                to empower businesses with cutting-edge digital solutions that unlock
                measurable growth and competitive advantage.
              </p>
              <p>
                Under his leadership, Kotibox has grown from a small startup into
                a globally recognised technology company serving clients across India,
                UAE, and the United States. His agile development philosophy and
                client-first approach have been the cornerstone of the company's success.
              </p>
              <p>
                Today, Kotibox continues to push boundaries with AI-driven solutions,
                enterprise-grade platforms, and innovative mobile applications that
                redefine digital experiences and build lasting business value worldwide.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
