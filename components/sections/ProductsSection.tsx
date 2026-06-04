'use client'
import Link from 'next/link'
import { Monitor, MessageSquare, Mic, UtensilsCrossed, Wand2, ArrowRight, Zap, Landmark } from 'lucide-react'

const products = [
  {
    id: 'ott-platform',
    tag: ' OTT',
    accentColor: '#ef4444',
    title: 'AI-Powered  OTT Platform',
    description: 'Niche OTT solution with 4K video streaming, AI content recommendations, subscriptions, and creator panels.',
    features: ['AI Recommendations', '4K Streaming', 'Subscription Engine'],
    Icon: Monitor,
    image: '/images/products/ai-powered-ott-platform.jpeg',
  },
  {
    id: 'ai-chatbot',
    tag: 'AI CHATBOT',
    accentColor: '#3b82f6',
    title: 'AI Chatbot Web & App Suite',
    description: 'Smart support and sales chatbot with custom knowledge base training, lead capture, and CRM handoff.',
    features: ['Custom KB Training', 'CRM Integration', '90+ Languages'],
    Icon: MessageSquare,
    image: '/images/products/ai-chatbot-web-app-suite.jpg.jpeg',
  },
  {
    id: 'voice-ai',
    tag: 'VOICE AI',
    accentColor: '#f5a623',
    title: 'Voice-to-Voice AI Assistant',
    description: 'Real-time voice conversation AI for calls, bookings, FAQs, and follow-ups — human-like, 24/7.',
    features: ['<500ms Latency', 'Voice Cloning', 'Booking Workflows'],
    Icon: Mic,
    image: '/images/products/voice-ai.jpeg',
  },
  {
    id: 'food-delivery',
    tag: 'FOOD DELIVERY',
    accentColor: '#22c55e',
    title: 'AI Food Delivery Platform',
    description: 'End-to-end food delivery with AI route optimization, rider tracking, restaurant portal, and analytics.',
    features: ['AI Route Optimizer', 'Live Tracking', '3 Apps Included'],
    Icon: UtensilsCrossed,
    image: '/images/products/ai-food-delivery-platform.jpg.jpeg',
  },
  {
    id: 'ai-image-generation',
    tag: 'AI IMAGE GEN',
    accentColor: '#a855f7',
    title: 'AI Image Generation Suite',
    description: 'Text-to-image, bulk background removal, style transfer, upscaling, and product photo enhancement.',
    features: ['Text-to-Image', 'Bulk BG Removal', 'LoRA Fine-tuning'],
    Icon: Wand2,
    image: '/images/products/ai-image-generation.jpeg',
  },
  {
    id: 'banking-software',
    tag: 'Banking Software',
    accentColor: '#14b8a6',
    title: 'Banking Software',
    description: 'Modern banking platform with online banking, payment processing, customer management, fraud detection, and real-time transaction monitoring.',
    features: ['Online Banking', 'Fraud Detection', 'Real-Time Transactions'],
    Icon: Landmark,
    image: '/images/products/banking-software.jpeg',
  },
]

export default function ProductsSection() {
  return (
    <section id="products-section" className="bg-[#f8fafc] py-16 md:py-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1300px] mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center gap-1.5 text-[11px] font-bold text-[#f5a623] tracking-[0.2em] uppercase">
                <Zap size={11} className="fill-[#f5a623]" />
                Product Suites
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a1628] leading-snug max-w-lg">
              Ready-to-Launch <span className="text-[#f5a623]">AI Product Suites</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-3 max-w-md leading-relaxed">
              Fully built, customisable AI-powered products — OTT, chatbots, voice AI, food delivery, image generation, and more.
            </p>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-3 flex-shrink-0">
            <div className="flex gap-2 flex-wrap sm:justify-end">
              {['6 AI Suites', 'Web + App', '4–6 Week Launch'].map((t) => (
                <span key={t} className="text-[11px] font-semibold text-slate-500 border border-slate-200 px-3 py-1 rounded-full bg-white">
                  {t}
                </span>
              ))}
            </div>
            <Link
              href="/live-demo"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f5a623] text-[#0a1628] text-sm font-bold hover:bg-[#e8950f] hover:-translate-y-0.5 transition-all shadow-[0_4px_20px_rgba(245,166,35,0.25)]"
            >
              Browse All Products
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => {
            const Icon = product.Icon
            return (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group rounded-2xl overflow-hidden bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-[240px] overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Tag */}
                  <span
                    className="absolute top-4 left-4 text-[10px] font-bold text-white px-2.5 py-1 rounded-full"
                    style={{ background: product.accentColor }}
                  >
                    {product.tag}
                  </span>

                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white shadow-md flex items-center justify-center">
                    <Icon size={16} style={{ color: product.accentColor }} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="w-8 h-[2px] rounded-full mb-3" style={{ background: product.accentColor }} />

                  <h3 className="text-base font-bold text-[#0a1628] mb-2 leading-snug group-hover:text-[#f5a623] transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                    {product.description}
                  </p>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.features.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                        style={{ color: product.accentColor, borderColor: product.accentColor + '40', background: product.accentColor + '12' }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3.5 border-t border-slate-100">
                    <span className="flex items-center gap-1.5 text-sm font-semibold transition-colors" style={{ color: product.accentColor }}>
                      Explore Suite
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium border border-slate-200 px-2.5 py-1 rounded-full">
                      Web + App
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}
