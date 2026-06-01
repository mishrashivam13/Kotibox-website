'use client'
import React from 'react';
export default function WhoWeAre() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left - Team Image */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipOhGVXvdRbsEcZeMAf_1qTcaf2t5B2yDhCU-Is=s1360-w1360-h1020-rw"
                alt="Kotibox Team"
                className="w-full h-full object-cover
                           hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right - Text */}
          <div className="flex-1">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#f5a623]" />
              <span className="text-[#f5a623] text-xs font-semibold tracking-[0.25em] uppercase">
                Our Story
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] mb-4">
              Who We Are
            </h2>
            <div className="w-16 h-1 bg-[#f5a623] rounded-full mb-8" />

            <div className="space-y-6 text-gray-600 text-base leading-relaxed">
              <p>
                A passion for technology unites our team of talented developers, 
                imaginative designers, and strategic thinkers. We use a methodical 
                but adaptable development process based on cooperation, creativity, 
                and openness. Each solution is customized to meet the needs of the 
                client, guaranteeing scalable, impactful, and user-friendly digital 
                products that enable companies to thrive.
              </p>
              <p>
                Our group of enthusiastic developers, designers, and strategists is 
                dedicated to producing digital solutions that have a significant 
                positive business impact. Our agile development methodology 
                prioritizes teamwork and creativity throughout the process, 
                producing user-centered, scalable, and customized products that 
                satisfy customer objectives and promote long-term growth.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}