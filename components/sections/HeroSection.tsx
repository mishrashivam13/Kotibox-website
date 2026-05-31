'use client'
import Link from 'next/link'
import { useState } from 'react'
import { X, User, Mail, Phone, FileText, Send, CheckCircle2, Zap, Shield, Clock } from 'lucide-react'

function LeadModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center 
                  bg-black/70 backdrop-blur-md p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl 
                      overflow-hidden flex flex-col md:flex-row max-h-[90vh]">

        {/* LEFT - Dark Side */}
        <div className="bg-[#0a1628] md:w-[42%] p-8 flex flex-col 
                        justify-between relative overflow-hidden">

          {/* BG decoration */}
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full 
                          bg-[#f5a623]/10 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full 
                          bg-[#f5a623]/5 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            {/* Logo / Brand */}
            <div className="flex items-center gap-2 mb-10">
              <div className="w-9 h-9 bg-[#f5a623] rounded-lg flex items-center 
                              justify-center font-black text-white text-sm">
                KB
              </div>
              <span className="text-white font-bold text-lg">Kotibox</span>
            </div>

            {/* Heading */}
            <h3 className="text-3xl font-extrabold text-white leading-tight mb-4">
              Let's Build Something{' '}
              <span className="text-[#f5a623]">Amazing</span> Together
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-10">
              Share your project details and our experts will craft a custom 
              solution tailored to your needs.
            </p>

            {/* Benefits */}
            <div className="space-y-5">
              {[
                { Icon: Zap, text: 'Response within 2 business hours' },
                { Icon: Shield, text: 'NDA & complete confidentiality' },
                { Icon: Clock, text: 'Free 30-min consultation call' },
                { Icon: CheckCircle2, text: 'No commitment required' },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f5a623]/15 
                                  flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-[#f5a623]" />
                  </div>
                  <span className="text-white/75 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom stats */}
          <div className="relative z-10 grid grid-cols-3 gap-3 mt-10 
                          pt-8 border-t border-white/10">
            {[
              { num: '2000+', label: 'Projects' },
              { num: '45+', label: 'Countries' },
              { num: '98%', label: 'Satisfaction' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-lg font-extrabold text-[#f5a623]">
                  {s.num}
                </div>
                <div className="text-white/50 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - Form Side */}
        <div className="flex-1 p-8 overflow-y-auto">

          {/* Close Button */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h4 className="text-xl font-extrabold text-[#0a1628]">
                Start Your Project
              </h4>
              <p className="text-gray-400 text-sm mt-1">
                Fill in the form and we'll be in touch shortly
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 
                         flex items-center justify-center transition-all"
            >
              <X size={18} className="text-gray-500" />
            </button>
          </div>

          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <User size={15} className="absolute left-3.5 top-1/2 
                                           -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200
                             text-sm text-gray-700 placeholder-gray-400
                             focus:outline-none focus:border-[#f5a623] 
                             focus:ring-2 focus:ring-[#f5a623]/20 transition-all"
                />
              </div>
              <div className="relative">
                <Mail size={15} className="absolute left-3.5 top-1/2 
                                           -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200
                             text-sm text-gray-700 placeholder-gray-400
                             focus:outline-none focus:border-[#f5a623] 
                             focus:ring-2 focus:ring-[#f5a623]/20 transition-all"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone size={15} className="absolute left-3.5 top-1/2 
                                          -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200
                           text-sm text-gray-700 placeholder-gray-400
                           focus:outline-none focus:border-[#f5a623] 
                           focus:ring-2 focus:ring-[#f5a623]/20 transition-all"
              />
            </div>

            {/* Service Select */}
            <select
              className="w-full px-4 py-3 rounded-xl border border-gray-200
                         text-sm text-gray-500
                         focus:outline-none focus:border-[#f5a623] 
                         focus:ring-2 focus:ring-[#f5a623]/20 
                         appearance-none bg-white transition-all"
            >
              <option value="">Select a Service</option>
              {[
                'Mobile App Development',
                'Web Development',
                'AI Solutions',
                'Digital Marketing',
                'UI/UX Design',
                'Other',
              ].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            {/* Budget Select */}
            <select
              className="w-full px-4 py-3 rounded-xl border border-gray-200
                         text-sm text-gray-500
                         focus:outline-none focus:border-[#f5a623] 
                         focus:ring-2 focus:ring-[#f5a623]/20 
                         appearance-none bg-white transition-all"
            >
              <option value="">Estimated Budget</option>
              {[
                'Under $5,000',
                '$5,000 - $15,000',
                '$15,000 - $50,000',
                '$50,000+',
              ].map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>

            {/* Message */}
            <div className="relative">
              <FileText size={15} className="absolute left-3.5 top-3.5 
                                             text-gray-400" />
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200
                           text-sm text-gray-700 placeholder-gray-400
                           focus:outline-none focus:border-[#f5a623] 
                           focus:ring-2 focus:ring-[#f5a623]/20 
                           transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#f5a623] text-white 
                         font-bold text-base flex items-center justify-center 
                         gap-2 hover:bg-[#e8950f] transition-all
                         shadow-[0_4px_20px_rgba(245,166,35,0.4)] group"
            >
              Send My Request
              <Send size={17} className="group-hover:translate-x-1 
                                         transition-transform" />
            </button>

            <p className="text-center text-xs text-gray-400">
              🔒 Your information is 100% secure and confidential
            </p>
          </form>
        </div>

      </div>
    </div>
  )
}

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      {modalOpen && <LeadModal onClose={() => setModalOpen(false)} />}

      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=90')" }}
        />
        <div className="absolute inset-0 bg-[#0a1628]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_400px_at_50%_30%,rgba(245,166,35,0.06),transparent)]" />

        <div className="relative z-10 flex-1 flex flex-col items-center 
                        justify-center text-center px-6 pt-24 pb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                          bg-[#f5a623]/12 border border-[#f5a623]/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#f5a623] animate-pulse" />
            <span className="text-[#f5c56a] text-sm font-semibold">
              Google Certified AI Agency
            </span>
          </div>

          <h1 className="text-6xl font-extrabold leading-tight tracking-tight 
                         text-white mb-6">
            Develop{' '}
            <span className="text-[#f5a623]">AI-powered</span>
            <br />products in weeks not months.
          </h1>

          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            We're a <strong className="text-white font-bold">Google-certified AI agency</strong>{' '}
            designing, building and deploying web apps, mobile apps, chatbots and
            automations —{' '}
            <strong className="text-white font-bold">50% faster</strong>{' '}
            than traditional agencies at a fraction of the cost.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-4 rounded-full bg-[#f5a623] text-white 
                         font-bold text-base hover:bg-[#e8950f] transition-all
                         shadow-[0_4px_24px_rgba(245,166,35,0.4)]"
            >
              Talk To Consultant →
            </button>
            <Link href="/live-demo"
              className="px-8 py-4 rounded-full border border-white/50
                         text-white font-semibold hover:bg-white/10 transition-all">
              View Our Work
            </Link>
          </div>
        </div>

        <div className="relative z-10 py-8 flex justify-center gap-20 flex-wrap">
          {[
            { num: '10+', label: 'Years Excellence' },
            { num: '2000+', label: 'Projects Delivered' },
            { num: '50+', label: 'Expert Team' },
            { num: '45+', label: 'Countries Served' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-[#f5a623]">{stat.num}</div>
              <div className="text-sm text-white/55 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}