'use client'
import React from 'react';
import { Lightbulb, Handshake, Medal, Heart } from 'lucide-react'

const values = [
  {
    Icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace new technologies and creative approaches to solve complex problems.',
  },
  {
    Icon: Handshake,
    title: 'Collaboration',
    description: 'We believe in working closely with our clients to deliver exceptional results.',
  },
  {
    Icon: Medal,
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality in every project.',
  },
  {
    Icon: Heart,
    title: 'Passion',
    description: 'We love what we do, and that drives us to create remarkable solutions.',
  },
]

export default function OurValues() {
  return (
    <section className="bg-[#0a1628] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Our Values
          </h2>
          <div className="w-16 h-1 bg-[#f5a623] rounded-full mx-auto" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white rounded-2xl p-8 text-center
                         hover:shadow-xl hover:-translate-y-1
                         transition-all duration-300"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-full bg-[#f5a623]/15
                              flex items-center justify-center mx-auto mb-6">
                <value.Icon size={28} className="text-[#f5a623]" />
              </div>

              <h3 className="text-lg font-bold text-[#0a1628] mb-3">
                {value.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}