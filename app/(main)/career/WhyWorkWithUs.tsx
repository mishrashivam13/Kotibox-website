'use client'
import React from 'react';

import { DollarSign, MonitorCheck, GraduationCap, Clock, Plane, Users } from 'lucide-react'

const benefits = [
  {
    Icon: DollarSign,
    title: 'Competitive Salary',
    description: 'We offer industry-standard compensation packages with regular reviews and bonuses.',
  },
  {
    Icon: MonitorCheck,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs to keep you at your best.',
    featured: true,
  },
  {
    Icon: GraduationCap,
    title: 'Learning & Development',
    description: 'Annual budget for conferences, courses, and materials to support your growth.',
  },
  {
    Icon: Clock,
    title: 'Flexible Hours',
    description: "We focus on results, not hours clocked. Work when you're most productive.",
  },
  {
    Icon: Plane,
    title: 'Paid Time Off',
    description: 'Generous vacation policy with unlimited sick days and parental leave.',
    featured: true,
  },
  {
    Icon: Users,
    title: 'Awesome Team',
    description: 'Work with talented, supportive colleagues in a collaborative environment.',
  },
]

export default function WhyWorkWithUs() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-4">
            Why Work With Us
          </h2>
          <div className="w-20 h-1 bg-[#f5a623] rounded-full mx-auto mb-6" />
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We value our team members and provide benefits that help you grow 
            both personally and professionally
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={`rounded-2xl p-8 text-center flex flex-col 
                         items-center transition-all duration-300
                         hover:-translate-y-1 hover:shadow-xl
                         ${benefit.featured
                           ? 'bg-[#0a1f3c] scale-105 shadow-lg'
                           : 'bg-[#0d2240]'
                         }`}
            >
              {/* Icon */}
              <div className="mb-6">
                <benefit.Icon
                  size={48}
                  className="text-[#f5a623]"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}