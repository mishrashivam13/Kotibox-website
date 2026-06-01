'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
import { useEffect } from 'react'
import {
  X, User, Mail, Phone, FileText, Send,
  Zap, Shield, Clock, CheckCircle2, Star,
} from 'lucide-react'

// ─── Context ───────────────────────────────────────────────────────────────

type ModalContextType = { openModal: () => void }
const ModalContext = createContext<ModalContextType>({ openModal: () => {} })

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <ModalContext.Provider value={{ openModal: () => setIsOpen(true) }}>
      {children}
      <ConsultationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)

// ─── Left-panel data ───────────────────────────────────────────────────────

const benefits = [
  { icon: Zap,          text: 'Response within 2 business hours' },
  { icon: Shield,       text: 'NDA & complete confidentiality' },
  { icon: Clock,        text: 'Free 30-min strategy call' },
  { icon: CheckCircle2, text: 'No commitment required' },
]

const stats = [
  { num: '2000+', label: 'Projects' },
  { num: '45+',   label: 'Countries' },
  { num: '98%',   label: 'Satisfaction' },
]

const reviews = [
  { name: 'Sachin Khandelwal.', role: 'CEO, TechStartup', text: 'Delivered in half the time we expected. Exceptional quality.' },
  { name: 'Sarah K.', role: 'Founder, E-Shop', text: 'The AI chatbot they built increased our leads by 3×.' },
]

const services = [
  'Mobile App Development',
  'Web Development',
  'AI Solutions',
  'Digital Marketing',
  'UI/UX Design',
  'Other',
]

// ─── Modal ─────────────────────────────────────────────────────────────────

function ConsultationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', project: '' })
  const [submitted, setSubmitted] = useState(false)
  const [reviewIdx] = useState(0)

  // Lock scroll when open, restore when closed/unmounted
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', phone: '', service: '', project: '' })
      onClose()
    }, 2500)
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop — no blur */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      {/* Modal container */}
      <div className="relative w-full max-w-[740px] rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row max-h-[95vh]">

        {/* ── LEFT PANEL ────────────────────────────────────────── */}
        <div className="relative bg-[#07101f] md:w-[42%] flex-shrink-0 flex flex-col justify-between p-8 overflow-hidden">

          {/* Background decorations */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-[0.08]"
            style={{ background: 'radial-gradient(circle, #f5a623, transparent)' }} />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-[0.05]"
            style={{ background: 'radial-gradient(circle, #f5a623, transparent)' }} />
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#f5a623] to-transparent" />

          {/* Top content */}
          <div className="relative z-10">
            {/* Brand */}
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-8 h-8 bg-[#f5a623] rounded-lg flex items-center justify-center font-extrabold text-[#07101f] text-xs">
                KB
              </div>
              <span className="text-white font-bold text-base tracking-wide">Kotibox</span>
              <span className="ml-auto text-[#f5a623] text-[10px] font-semibold tracking-widest uppercase border border-[#f5a623]/30 px-2 py-0.5 rounded-full">
                Google Certified
              </span>
            </div>

            {/* Heading */}
            <h3 className="text-2xl font-extrabold text-white leading-snug mb-3">
              Let's Build Something{' '}
              <span className="text-[#f5a623]">Remarkable</span>{' '}
              Together
            </h3>
            <p className="text-white/55 text-sm leading-relaxed mb-8">
              Tell us about your project and our experts will craft a solution tailored to your goals.
            </p>

            {/* Benefits */}
            <div className="flex flex-col gap-3.5 mb-8">
              {benefits.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#f5a623]/12 border border-[#f5a623]/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={13} className="text-[#f5a623]" />
                  </div>
                  <span className="text-white/70 text-sm">{text}</span>
                </div>
              ))}
            </div>

            {/* Client review */}
            <div className="bg-white/[0.05] border border-white/10 rounded-xl p-4 mb-6">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-[#f5a623] fill-[#f5a623]" />
                ))}
              </div>
              <p className="text-white/65 text-xs leading-relaxed italic mb-3">
                "{reviews[reviewIdx].text}"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#f5a623]/20 flex items-center justify-center text-[#f5a623] text-[10px] font-bold">
                  {reviews[reviewIdx].name[0]}
                </div>
                <div>
                  <p className="text-white text-xs font-semibold leading-none">{reviews[reviewIdx].name}</p>
                  <p className="text-white/40 text-[10px] mt-0.5">{reviews[reviewIdx].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="relative z-10 grid grid-cols-3 gap-2 pt-6 border-t border-white/[0.08]">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-extrabold text-[#f5a623] leading-none">{s.num}</div>
                <div className="text-white/40 text-[10px] mt-1 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT PANEL — FORM ─────────────────────────────────── */}
        <div className="flex-1 bg-white flex flex-col overflow-y-auto">

          {/* Form header */}
          <div className="flex items-start justify-between px-8 pt-8 pb-6 border-b border-gray-100">
            <div>
              <h4 className="text-xl font-extrabold text-[#0a1628]">Start Your Project</h4>
              <p className="text-gray-400 text-sm mt-1">Fill in the details and we'll be in touch shortly.</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all flex-shrink-0 ml-4 mt-0.5"
            >
              <X size={15} />
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="px-8 py-6 flex flex-col gap-4 flex-1">

              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <input
                    type="text" placeholder="Full Name" required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#f5a623] focus:ring-2 focus:ring-[#f5a623]/15 transition-all"
                  />
                </div>
                <div className="relative">
                  <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <input
                    type="email" placeholder="Email Address" required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#f5a623] focus:ring-2 focus:ring-[#f5a623]/15 transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <input
                  type="tel" placeholder="Phone Number" required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#f5a623] focus:ring-2 focus:ring-[#f5a623]/15 transition-all"
                />
              </div>

              {/* Service select */}
              <div className="relative">
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-500 focus:outline-none focus:border-[#f5a623] focus:ring-2 focus:ring-[#f5a623]/15 appearance-none bg-white transition-all"
                >
                  <option value="">Select a Service</option>
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </div>

              {/* Project description */}
              <div className="relative">
                <FileText size={15} className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none" />
                <textarea
                  placeholder="Briefly describe your project or requirements..."
                  rows={3} required
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#f5a623] focus:ring-2 focus:ring-[#f5a623]/15 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#f5a623] hover:bg-[#e8950f] text-[#07101f] font-extrabold py-3.5 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(245,166,35,0.35)] hover:shadow-[0_6px_28px_rgba(245,166,35,0.5)] group"
              >
                Send My Request
                <Send size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Trust line */}
              <div className="flex items-center justify-center gap-5 pt-1">
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <Shield size={12} className="text-green-500" />
                  100% Confidential
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <Zap size={12} className="text-[#f5a623]" />
                  Reply in 2 hrs
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <CheckCircle2 size={12} className="text-blue-500" />
                  No spam
                </div>
              </div>

            </form>
          ) : (
            /* Success state */
            <div className="flex-1 flex flex-col items-center justify-center px-8 py-12 text-center">
              <div className="w-20 h-20 rounded-full bg-green-50 border-4 border-green-100 flex items-center justify-center mb-5">
                <CheckCircle2 size={36} className="text-green-500" />
              </div>
              <h4 className="text-2xl font-extrabold text-[#0a1628] mb-2">Request Sent!</h4>
              <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-6">
                Thank you! Our team will review your project and reach out within{' '}
                <strong className="text-[#0a1628]">2 business hours</strong>.
              </p>
              <div className="flex items-center gap-2 bg-[#f5a623]/10 border border-[#f5a623]/25 px-5 py-2.5 rounded-full">
                <Zap size={14} className="text-[#f5a623]" />
                <span className="text-[#0a1628] text-sm font-semibold">Check your email for confirmation</span>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
