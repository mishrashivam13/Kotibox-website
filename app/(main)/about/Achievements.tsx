'use client'
import React from 'react';
const awards = [
  { src: '/images/badges/Awarded-1.png', alt: 'GoodFirms', bg: 'bg-[#e8f5e9]' },
  { src: '/images/badges/Awarded-2.png', alt: 'Clutch', bg: 'bg-[#e3f2fd]' },
  { src: '/images/badges/Awarded-3.png', alt: 'Upwork Top Rated', bg: 'bg-[#fce4ec]' },
  { src: '/images/badges/Awarded-4.png', alt: 'ISO Certified', bg: 'bg-[#f9fbe7]' },
  { src: '/images/badges/Awarded-5.png', alt: 'Web Guru Awards', bg: 'bg-[#e8f5e9]' },
  { src: '/images/badges/Awarded-6.png', alt: 'Selected Firms', bg: 'bg-[#e3f2fd]' },
  { src: '/images/badges/Awarded-7.png', alt: 'Top Firms', bg: 'bg-[#fffde7]' },
  { src: '/images/badges/Awarded-8.png', alt: 'SoftwareWorld', bg: 'bg-[#fce4ec]' },
]

export default function Achievements() {
  return (
    <section className="bg-[#fdf8f3] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left - Text */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <h2 className="text-4xl font-extrabold text-[#0a1628] 
                           leading-tight mb-4">
              Celebrating Excellence & Achievements
            </h2>
            <div className="w-16 h-1 bg-[#f5a623] rounded-full mb-6" />
            <p className="text-gray-500 text-base leading-relaxed">
              Recognizing our journey of innovation, dedication, and success 
              through the awards and milestones that reflect our commitment 
              to delivering exceptional solutions worldwide.
            </p>
          </div>

          {/* Right - Awards Grid */}
          <div className="flex-1 w-full">
            <div className="bg-white rounded-2xl border border-gray-100 
                            shadow-sm p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {awards.map((award) => (
                  <div
                    key={award.alt}
                    className={`${award.bg} rounded-xl p-4 flex items-center 
                               justify-center aspect-square
                               hover:scale-105 transition-transform duration-300`}
                  >
                    <img
                      src={award.src}
                      alt={award.alt}
                      className="w-full h-full object-contain max-w-[100px] 
                                 max-h-[100px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}