'use client'
import React from 'react';
const stats = [
  { num: '2000+', label: 'Projects Completed' },
  { num: '100%', label: 'Client Satisfaction' },
  { num: '50+', label: 'Team Members' },
  { num: '12+', label: 'Awards Won' },
]

export default function AboutStats() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0a1f3c] rounded-2xl px-8 py-10
                         flex flex-col items-center justify-center text-center
                         hover:bg-[#1a2f4e] transition-all duration-300"
            >
              <div className="text-4xl font-bold text-[#f5a623] mb-3">
                {stat.num}
              </div>
              <div className="text-white/80 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}