'use client'
import React from 'react';
import { CheckCircle2 } from 'lucide-react'

const points = [
  'Open and transparent communication',
  'Regular team building activities',
  'Focus on work-life balance',
  'Commitment to diversity and inclusion',
  'Flat hierarchy with open-door policy',
]

export default function OurCulture() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left - Image */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipOhGVXvdRbsEcZeMAf_1qTcaf2t5B2yDhCU-Is=s1360-w1360-h1020-rw"
                alt="Our Culture"
                className="w-full h-[480px] object-cover object-top
                           hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] mb-4">
              Our Culture
            </h2>
            <div className="w-16 h-1 bg-[#f5a623] rounded-full mb-8" />

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              At Kotibox Global Technologies we believe that great products 
              are built by happy, motivated teams. We've created an environment 
              that fosters creativity, collaboration, and continuous learning.
            </p>

            {/* Checklist */}
            <div className="space-y-5">
              {points.map((point) => (
                <div key={point}
                  className="flex items-center gap-4">
                  <CheckCircle2
                    size={22}
                    className="text-[#f5a623] flex-shrink-0"
                  />
                  <span className="text-gray-600 text-base font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}