'use client'
import React from 'react';
import { Shuffle, Headphones, Truck, Cpu, Settings, MessageCircle } from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const features = [
  { Icon: Shuffle, label: 'Flexible engagement models' },
  { Icon: Headphones, label: '24×7 Support across timezones' },
  { Icon: Truck, label: 'Competitive pricing & on-time delivery' },
  { Icon: Cpu, label: 'State of the art IT infrastructure' },
  { Icon: Settings, label: 'Strong technology competency' },
  { Icon: MessageCircle, label: 'Seamless communication' },
]

export default function WhyChooseUs() {
  const { openModal } = useModal()

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-16">

          {/* Left - Content */}
          <div className="flex-1">

            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#f5a623]" />
              <span className="text-[#f5a623] text-xs font-semibold tracking-[0.25em] uppercase">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] leading-tight mb-4">
              Why Customers in over{' '}
              <span className="text-[#f5a623]">45+ countries</span>{' '}
              choose Our Company?
            </h2>
            <div className="w-16 h-1 bg-[#f5a623] rounded-full mb-10" />

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#f5a623]/30 hover:bg-[#fdf8f3] transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0a1f3c] flex items-center justify-center flex-shrink-0 group-hover:bg-[#f5a623] transition-colors duration-200">
                    <feature.Icon size={20} className="text-white" />
                  </div>
                  <span className="text-[#0a1628] text-sm font-semibold leading-snug">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a1f3c] text-white font-bold text-base rounded-xl hover:bg-[#f5a623] transition-all duration-300"
            >
              Get a Free Consultation
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Right - Images */}
          <div className="w-full lg:w-[460px] flex-shrink-0 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipOlhmCEY9TWOs37BU71047hfOk3hwEEeg2T2gs=s1360-w1360-h1020-rw"
                alt="Kotibox Team"
                className="w-full h-[420px] object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-gray-100 px-6 py-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f5a623]/15 flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#0a1628] leading-none">500+</div>
                <div className="text-gray-500 text-xs font-medium mt-0.5">Happy Clients</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
