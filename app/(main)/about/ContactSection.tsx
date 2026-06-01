'use client'
import { useState } from 'react'
import { MapPin, Mail, Phone, Send, User, MessageSquare, Briefcase } from 'lucide-react'

const flags = [
  { src: '/images/footer/flag1.png', country: 'India' },
  { src: '/images/footer/flag2.png', country: 'UK' },
  { src: '/images/footer/flag3.png', country: 'UAE' },
]

const services = [
  'Mobile App Development',
  'Web Development',
  'AI Solutions',
  'Digital Marketing',
  'UI/UX Design',
  'Other',
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section className="bg-[#f8f4f0] py-14 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* LEFT - Info */}
          <div className="w-full lg:w-[45%]">

            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 
                            rounded-full bg-[#f5a623]/15 border border-[#f5a623]/30 
                            mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f5a623]" />
              <span className="text-[#f5a623] text-xs font-bold tracking-widest uppercase">
                Contact Us
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] 
                           leading-tight mb-6">
              AI-Powered Excellence{' '}
              <span className="text-[#f5a623]">for Next-Gen</span> Ideas
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-10">
              Leverage the power of artificial intelligence to transform your 
              vision into innovative solutions. Our cutting-edge AI technologies 
              drive smarter decisions, and future-ready outcomes for businesses 
              of all sizes.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 mb-10" />

            {/* Our Presence */}
            <div className="mb-8">
              <h4 className="text-[#0a1628] font-bold text-lg mb-4">
                Our Presence
              </h4>
              <div className="flex items-center gap-3 mb-6">
                {flags.map((flag) => (
                  <div key={flag.country}
                    className="w-12 h-12 rounded-full overflow-hidden 
                               border-2 border-white shadow-md
                               hover:scale-110 transition-transform">
                    <img src={flag.src} alt={flag.country}
                      className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white 
                              rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#f5a623]/15 
                                flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#f5a623]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0a1628] uppercase 
                                tracking-wider mb-1">Address</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    214, giriraj nagar, Sumer Nagar, Mansarovar,<br />
                    Jaipur, Rajasthan 302020
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white 
                              rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#f5a623]/15 
                                flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[#f5a623]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0a1628] uppercase 
                                tracking-wider mb-1">Email</p>
                  <p className="text-gray-500 text-sm">
                    business@kotiboxglobaltech.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white 
                              rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#f5a623]/15 
                                flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[#f5a623]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0a1628] uppercase 
                                tracking-wider mb-1">Phone</p>
                  <p className="text-gray-500 text-sm">+91 72402-47809</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT - Form */}
          <div className="w-full lg:flex-1">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 
                            overflow-hidden">

              {/* Form Header */}
              <div className="bg-[#0a1f3c] px-8 py-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  Get Your Custom App Today
                </h3>
                <p className="text-white/60 text-sm">
                  Fill in the form below and our team will connect with you shortly.
                </p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-8 space-y-5">

                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User size={16} className="absolute left-4 top-1/2 
                                               -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border 
                                 border-gray-200 text-sm text-gray-700
                                 focus:outline-none focus:border-[#f5a623] 
                                 focus:ring-2 focus:ring-[#f5a623]/20
                                 placeholder:text-gray-400 transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 
                                               -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border 
                                 border-gray-200 text-sm text-gray-700
                                 focus:outline-none focus:border-[#f5a623] 
                                 focus:ring-2 focus:ring-[#f5a623]/20
                                 placeholder:text-gray-400 transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone size={16} className="absolute left-4 top-1/2 
                                              -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border 
                               border-gray-200 text-sm text-gray-700
                               focus:outline-none focus:border-[#f5a623] 
                               focus:ring-2 focus:ring-[#f5a623]/20
                               placeholder:text-gray-400 transition-all"
                  />
                </div>

                {/* Service Dropdown */}
                <div className="relative">
                  <Briefcase size={16} className="absolute left-4 top-1/2 
                                                  -translate-y-1/2 text-gray-400" />
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border 
                               border-gray-200 text-sm text-gray-500
                               focus:outline-none focus:border-[#f5a623] 
                               focus:ring-2 focus:ring-[#f5a623]/20
                               appearance-none bg-white transition-all"
                  >
                    <option value="">Select a Service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="relative">
                  <MessageSquare size={16} className="absolute left-4 top-4 
                                                      text-gray-400" />
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border 
                               border-gray-200 text-sm text-gray-700
                               focus:outline-none focus:border-[#f5a623] 
                               focus:ring-2 focus:ring-[#f5a623]/20
                               placeholder:text-gray-400 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#f5a623] text-white 
                             font-bold text-base flex items-center justify-center 
                             gap-2 hover:bg-[#e8950f] transition-all
                             shadow-[0_4px_24px_rgba(245,166,35,0.35)]
                             hover:shadow-[0_6px_30px_rgba(245,166,35,0.5)]"
                >
                  <Send size={18} />
                  Send Message
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}