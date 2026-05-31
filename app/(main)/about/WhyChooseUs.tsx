'use client'
import React from 'react';
import Link from 'next/link'
import { Shuffle, Headphones, Truck, Cpu, Settings, MessageCircle } from 'lucide-react'

const features = [
  { Icon: Shuffle, label: 'Flexible engagement models' },
  { Icon: Headphones, label: '24×7 Support across timezones' },
  { Icon: Truck, label: 'Competitive pricing & on-time delivery' },
  { Icon: Cpu, label: 'State of the art IT infrastructure' },
  { Icon: Settings, label: 'Strong technology competency' },
  { Icon: MessageCircle, label: 'Seamless communication' },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left - Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] 
                           leading-tight mb-4">
              Why Customers in over{' '}
              <span className="text-[#f5a623]">45+ countries</span>{' '}
              choose Our Company?
            </h2>
            <div className="w-16 h-1 bg-[#f5a623] rounded-full mb-10" />

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-10">
              {features.map((feature) => (
                <div key={feature.label} className="flex flex-col items-start gap-3">
                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-full bg-[#0a1f3c] 
                                  flex items-center justify-center flex-shrink-0">
                    <feature.Icon size={22} className="text-white" />
                  </div>
                  <span className="text-gray-600 text-sm font-medium">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 
                         bg-[#0a1f3c] text-white font-bold text-base 
                         rounded-xl hover:bg-[#1a2f4e] transition-all"
            >
              Get a Free Consultation →
            </Link>
          </div>

          {/* Right - Images */}
          <div className="w-full lg:w-[480px] flex-shrink-0 relative">
            {/* Main Team Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipOlhmCEY9TWOs37BU71047hfOk3hwEEeg2T2gs=s1360-w1360-h1020-rw"
                alt="Kotibox Team"
                className="w-full h-[420px] object-cover object-top
                           hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Small Circle Image - bottom left */}
            <div className="absolute -bottom-6 -left-6 w-36 h-36 
                            rounded-full overflow-hidden border-4 border-white 
                            shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipOhGVXvdRbsEcZeMAf_1qTcaf2t5B2yDhCU-Is=s1360-w1360-h1020-rw"
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}