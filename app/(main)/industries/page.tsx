'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useModal } from '@/components/providers/ModalContext'
import {
  Heart, Cpu, GraduationCap, UtensilsCrossed,
  Building2, Banknote, ShoppingBag, Factory,
  Truck, Tv, Leaf, Car, Zap, Radio, Scale, HardHat,
  CheckCircle2, ArrowRight, Bot, BrainCircuit,
  Sparkles, Wand2, Lightbulb, Monitor, TrendingUp,
  BarChart3, Shield, Eye, MessageSquare, LineChart,
} from 'lucide-react'

// ─── Industries Data ──────────────────────────────────────────────────────────

const industries = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: Heart,
    color: '#ef4444',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80',
    tagline: 'AI-powered care that never sleeps',
    stat: { val: '70%', label: 'Admin burden reduced' },
    intro: 'We build AI systems that streamline patient care, automate clinical workflows, and support medical professionals — while staying fully HIPAA-compliant.',
    whatWeBuild: [
      'AI Patient Support & Appointment Chatbot',
      'Medical Image Analysis (X-ray, MRI, CT)',
      'Patient Readmission Risk Scoring',
      'Clinical Document Extraction & Summarisation',
      'Drug Interaction & Adverse Event Prediction',
      'Insurance Claim Anomaly Detection',
    ],
    services: [
      { label: 'AI Chatbot', href: '/services/ai-chatbot' },
      { label: 'Machine Learning', href: '/services/machine-learning' },
      { label: 'AI Automation', href: '/services/ai-automation' },
    ],
  },
  {
    id: 'technology',
    title: 'Technology & SaaS',
    icon: Cpu,
    color: '#6366f1',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80',
    tagline: 'AI that makes your product smarter',
    stat: { val: '3x', label: 'Faster AI feature delivery' },
    intro: 'We help SaaS companies embed AI into their products, reduce churn, and automate support — shipping production-ready ML features in weeks, not months.',
    whatWeBuild: [
      'In-Product AI Copilot & Assistant',
      'User Churn Prediction & Health Scoring',
      'Personalised Onboarding & Activation Flows',
      'Internal Knowledge Base AI',
      'Automated Support Agent (GPT-4 + RAG)',
      'Natural Language Reporting & BI Querying',
    ],
    services: [
      { label: 'AI Chatbot', href: '/services/ai-chatbot' },
      { label: 'Machine Learning', href: '/services/machine-learning' },
      { label: 'Generative AI', href: '/services/generative-ai' },
    ],
  },
  {
    id: 'education',
    title: 'Education & EdTech',
    icon: GraduationCap,
    color: '#8b5cf6',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80',
    tagline: 'Personalised learning at infinite scale',
    stat: { val: '60%', label: 'Student drop-off reduced' },
    intro: 'We build adaptive learning engines, AI tutors, and student analytics platforms that personalise education at scale — reducing drop-off and improving outcomes.',
    whatWeBuild: [
      'Adaptive Learning Path Engine',
      'AI Doubt Resolution & Tutoring Chatbot',
      'Student At-Risk Prediction & Alerts',
      'Automated Quiz & Content Generation',
      'Course Recommendation System',
      'Parent & Batch Communication Automation',
    ],
    services: [
      { label: 'AI Chatbot', href: '/services/ai-chatbot' },
      { label: 'Generative AI', href: '/services/generative-ai' },
      { label: 'Machine Learning', href: '/services/machine-learning' },
    ],
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Hotels',
    icon: UtensilsCrossed,
    color: '#f59e0b',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80',
    tagline: 'Effortless guest experiences, automated',
    stat: { val: '28%', label: 'Increase in direct bookings' },
    intro: 'We build AI guest concierges, dynamic pricing engines, and operations automation that increases revenue, reduces workload, and elevates the guest experience.',
    whatWeBuild: [
      'AI Guest Concierge (WhatsApp & Web)',
      'Dynamic Pricing & Revenue Management',
      'Guest Sentiment Analysis (Reviews AI)',
      'Automated Booking & Cancellation Flows',
      'Housekeeping & Maintenance Scheduling AI',
      'Upsell & Room Upgrade Recommendations',
    ],
    services: [
      { label: 'AI Chatbot', href: '/services/ai-chatbot' },
      { label: 'Machine Learning', href: '/services/machine-learning' },
      { label: 'AI Automation', href: '/services/ai-automation' },
    ],
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    icon: Building2,
    color: '#14b8a6',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80',
    tagline: 'Smarter valuations. Faster deals.',
    stat: { val: '4x', label: 'More qualified leads per month' },
    intro: 'We engineer automated valuation models, AI lead qualification bots, and contract intelligence tools that help agencies, portals, and developers close more deals faster.',
    whatWeBuild: [
      'Automated Valuation Model (AVM) — <4% Error',
      'Lead Qualification & Scoring Chatbot',
      'Investment Opportunity Ranking Model',
      'Dynamic Rental Pricing Optimisation',
      'Contract Clause Extraction & Review AI',
      'Site Visit Scheduling Automation',
    ],
    services: [
      { label: 'Machine Learning', href: '/services/machine-learning' },
      { label: 'AI Chatbot', href: '/services/ai-chatbot' },
      { label: 'Generative AI', href: '/services/generative-ai' },
    ],
  },
  {
    id: 'finance',
    title: 'Finance & Banking',
    icon: Banknote,
    color: '#0ea5e9',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80',
    tagline: 'Risk intelligence at transaction speed',
    stat: { val: '97%', label: 'Fraud detection precision' },
    intro: 'We build fraud detection systems, credit risk models, AML engines, and AI financial assistants that help banks, NBFCs, and fintechs make smarter decisions in real time.',
    whatWeBuild: [
      'Real-Time Fraud & Anomaly Detection (<20ms)',
      'Credit Scoring & Loan Default Prediction',
      'AML & Financial Crime Pattern Detection',
      'AI Banking Support Chatbot (Secure)',
      'Customer LTV & Wallet Share Modelling',
      'KYC Document Extraction & Verification',
    ],
    services: [
      { label: 'Machine Learning', href: '/services/machine-learning' },
      { label: 'AI Chatbot', href: '/services/ai-chatbot' },
      { label: 'AI Automation', href: '/services/ai-automation' },
    ],
  },
  {
    id: 'retail',
    title: 'Retail & E-commerce',
    icon: ShoppingBag,
    color: '#ec4899',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&q=80',
    tagline: 'Convert more, stock smarter, serve faster',
    stat: { val: '+32%', label: 'Revenue from recommendations' },
    intro: 'We build personalised recommendation engines, demand forecasting systems, dynamic pricing tools, and AI customer support — so retailers sell more with less overhead.',
    whatWeBuild: [
      'Product Recommendation Engine (Hybrid)',
      'Demand Forecasting & Auto-Replenishment',
      'Dynamic Pricing Optimisation Engine',
      'AI Customer Support Bot (Web + WhatsApp)',
      'Visual Search & Style Matching',
      'Cart Recovery & Churn Automation',
    ],
    services: [
      { label: 'Machine Learning', href: '/services/machine-learning' },
      { label: 'AI Chatbot', href: '/services/ai-chatbot' },
      { label: 'Generative AI', href: '/services/generative-ai' },
    ],
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    icon: Factory,
    color: '#a855f7',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80',
    tagline: 'Zero unplanned downtime. Zero defects.',
    stat: { val: '67%', label: 'Less unplanned downtime' },
    intro: 'We deploy IoT predictive maintenance systems, computer vision quality inspection, and supply chain AI that eliminate costly downtime and defects on the factory floor.',
    whatWeBuild: [
      'Predictive Maintenance from IoT Sensors',
      'Computer Vision Quality Inspection (99.2%)',
      'Production Yield Optimisation AI',
      'Supply Chain Disruption Prediction',
      'Energy Consumption Optimisation',
      'Worker Safety Monitoring (CV + CCTV)',
    ],
    services: [
      { label: 'Machine Learning', href: '/services/machine-learning' },
      { label: 'AI Automation', href: '/services/ai-automation' },
      { label: 'AI Consulting', href: '/services/ai-consulting' },
    ],
  },
  {
    id: 'logistics',
    title: 'Logistics & Delivery',
    icon: Truck,
    color: '#22c55e',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    tagline: 'Every shipment, perfectly predicted',
    stat: { val: '94%', label: 'ETA prediction accuracy' },
    intro: 'We build route optimisation engines, ETA predictors, warehouse AI, and shipment chatbots that cut costs, improve on-time delivery, and reduce WISMO calls.',
    whatWeBuild: [
      'Dynamic Route & Load Optimisation',
      'Delivery ETA Predictor (XGBoost)',
      'AI Shipment Tracking Chatbot',
      'Warehouse Slotting & Picking AI',
      'Failed Delivery Prediction & Prevention',
      'Demand Forecasting for Distribution Centres',
    ],
    services: [
      { label: 'Machine Learning', href: '/services/machine-learning' },
      { label: 'AI Chatbot', href: '/services/ai-chatbot' },
      { label: 'AI Automation', href: '/services/ai-automation' },
    ],
  },
  {
    id: 'entertainment',
    title: 'Entertainment & Media',
    icon: Tv,
    color: '#f97316',
    image: 'https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?w=900&q=80',
    tagline: 'Keep audiences watching. Keep content flowing.',
    stat: { val: '2.5x', label: 'Content engagement increase' },
    intro: 'We build personalised content feeds, subscriber churn models, AI moderation pipelines, and generative tools that help media companies grow and retain their audience.',
    whatWeBuild: [
      'Personalised Content Recommendation Feed',
      'Subscriber Churn Prediction & Retention',
      'AI Content Moderation at Scale',
      'AI Thumbnail & Metadata Generation',
      'Audience Segmentation & Analytics',
      'Automated Subtitle Generation & Translation',
    ],
    services: [
      { label: 'Machine Learning', href: '/services/machine-learning' },
      { label: 'Generative AI', href: '/services/generative-ai' },
      { label: 'AI Automation', href: '/services/ai-automation' },
    ],
  },
  {
    id: 'agriculture',
    title: 'Agriculture & AgriTech',
    icon: Leaf,
    color: '#84cc16',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&q=80',
    tagline: 'Precision farming powered by data',
    stat: { val: '31%', label: 'Crop yield improvement' },
    intro: 'We build crop yield predictors, drone image analysis systems, smart irrigation AI, and price forecasting models that maximise output and minimise waste.',
    whatWeBuild: [
      'Crop Yield Prediction (Satellite + Sensors)',
      'Drone Image Disease & Pest Detection',
      'Smart Irrigation Scheduling AI',
      'Soil Health & Fertility Modelling',
      'Commodity Price Forecasting Model',
      'Farmer Advisory & Support Chatbot',
    ],
    services: [
      { label: 'Machine Learning', href: '/services/machine-learning' },
      { label: 'AI Automation', href: '/services/ai-automation' },
      { label: 'AI Chatbot', href: '/services/ai-chatbot' },
    ],
  },
  {
    id: 'automotive',
    title: 'Automotive',
    icon: Car,
    color: '#64748b',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80',
    tagline: 'Intelligent vehicles. Smarter dealerships.',
    stat: { val: '44%', label: 'Dealer service conversion lift' },
    intro: 'We build predictive maintenance, dealer chatbots, driver behaviour analytics, and parts forecasting systems that improve safety, service revenue, and operations.',
    whatWeBuild: [
      'Predictive Vehicle Maintenance (Telematics)',
      'Smart Dealer Lead Qualification Bot',
      'Driver Behaviour & Safety Scoring',
      'Spare Parts Demand Forecasting',
      'Fleet Management & Route AI',
      'Warranty Claim Fraud Detection',
    ],
    services: [
      { label: 'Machine Learning', href: '/services/machine-learning' },
      { label: 'AI Chatbot', href: '/services/ai-chatbot' },
      { label: 'AI Integration', href: '/services/ai-integration' },
    ],
  },
  {
    id: 'energy',
    title: 'Energy & Utilities',
    icon: Zap,
    color: '#eab308',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=900&q=80',
    tagline: 'Smarter grids. Lower costs. Fewer faults.',
    stat: { val: '22%', label: 'Energy waste reduced' },
    intro: 'We build smart meter analytics, grid fault prediction, renewable energy forecasting, and customer AI tools that help utilities cut waste and improve reliability.',
    whatWeBuild: [
      'Smart Meter Fraud & Anomaly Detection',
      'Grid Load Forecasting & Balancing AI',
      'Solar & Wind Generation Prediction',
      'Equipment Fault Prediction (SCADA)',
      'Customer Bill Analysis Chatbot',
      'EV Charging Demand Modelling',
    ],
    services: [
      { label: 'Machine Learning', href: '/services/machine-learning' },
      { label: 'AI Automation', href: '/services/ai-automation' },
      { label: 'AI Integration', href: '/services/ai-integration' },
    ],
  },
  {
    id: 'telecom',
    title: 'Telecommunications',
    icon: Radio,
    color: '#06b6d4',
    image: 'https://images.unsplash.com/photo-1520869562399-e772f042f422?w=900&q=80',
    tagline: 'Retain customers before the signal drops',
    stat: { val: '71%', label: 'Customer churn reduced' },
    intro: 'We build churn prediction models, network anomaly detection, AI support agents, and revenue assurance tools that help telcos retain subscribers and protect revenue.',
    whatWeBuild: [
      'Customer Churn Prediction & Retention AI',
      'Network Anomaly & Degradation Detection',
      'AI Support Agent (Web, WhatsApp, IVR)',
      'Revenue Assurance & Fraud Detection',
      'Next Best Offer Recommendation Engine',
      'Predictive Network Capacity Planning',
    ],
    services: [
      { label: 'Machine Learning', href: '/services/machine-learning' },
      { label: 'AI Chatbot', href: '/services/ai-chatbot' },
      { label: 'AI Automation', href: '/services/ai-automation' },
    ],
  },
  {
    id: 'legal',
    title: 'Legal & LegalTech',
    icon: Scale,
    color: '#78716c',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=900&q=80',
    tagline: 'Review contracts in minutes, not days',
    stat: { val: '80%', label: 'Faster document review' },
    intro: 'We build contract intelligence platforms, AI legal assistants, compliance monitoring tools, and document automation systems that multiply fee earner productivity.',
    whatWeBuild: [
      'Contract Review & Clause Extraction (94%)',
      'Legal Research AI Assistant (RAG-powered)',
      'Case Outcome Prediction Model',
      'Compliance Gap Monitoring Automation',
      'Due Diligence Document Processing',
      'Billing & Time-Entry Automation',
    ],
    services: [
      { label: 'Generative AI', href: '/services/generative-ai' },
      { label: 'Machine Learning', href: '/services/machine-learning' },
      { label: 'AI Automation', href: '/services/ai-automation' },
    ],
  },
  {
    id: 'construction',
    title: 'Construction & PropTech',
    icon: HardHat,
    color: '#d97706',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    tagline: 'Build safer. Deliver faster. Waste less.',
    stat: { val: '58%', label: 'Fewer safety incidents' },
    intro: 'We deploy site safety CV systems, schedule prediction models, automated cost estimators, and progress tracking tools that reduce risk and keep projects on time.',
    whatWeBuild: [
      'Site Safety Computer Vision (CCTV)',
      'Project Schedule Delay Prediction',
      'AI-Powered Cost Estimation',
      'BIM & Construction Progress Tracking',
      'Material Procurement Forecasting',
      'Contractor Performance Scoring',
    ],
    services: [
      { label: 'Machine Learning', href: '/services/machine-learning' },
      { label: 'AI Automation', href: '/services/ai-automation' },
      { label: 'Generative AI', href: '/services/generative-ai' },
    ],
  },
]

// Capabilities we bring to every industry
const capabilities = [
  { Icon: BrainCircuit, title: 'Machine Learning Models', desc: 'Custom-trained predictive models for churn, fraud, demand, risk, and classification — built on your data.' },
  { Icon: Bot, title: 'AI Chatbots', desc: 'GPT-powered assistants deployed on Web, WhatsApp, and mobile — trained on your knowledge base.', featured: true },
  { Icon: Eye, title: 'Computer Vision', desc: 'Image and video analysis for quality inspection, safety monitoring, medical imaging, and visual search.' },
  { Icon: MessageSquare, title: 'NLP & Text AI', desc: 'Extract, classify, and summarise unstructured text from contracts, reviews, tickets, and documents.' },
  { Icon: LineChart, title: 'Predictive Analytics', desc: 'Time-series forecasting and predictive dashboards for demand, pricing, maintenance, and planning.', featured: true },
  { Icon: Sparkles, title: 'AI Automation', desc: 'End-to-end workflow automation that eliminates repetitive tasks and integrates AI decisions into operations.' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function IndustriesPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [activeId, setActiveId] = useState('healthcare')
  const { openModal } = useModal()

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const bg = sectionRef.current?.querySelector('.parallax-bg') as HTMLElement
      if (bg) bg.style.transform = `translateY(${window.scrollY * 0.22}px) scale(1.1)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const fade = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  })

  const active = industries.find(i => i.id === activeId)!
  const ActiveIcon = active.icon

  const handleSelect = (id: string) => {
    setActiveId(id)
    // scroll to detail section smoothly
    const el = document.getElementById('industry-detail')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        ref={sectionRef}
        className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a1628]"
      >
        {/* Background */}
        <div
          className="parallax-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=85')" }}
        />
        <div className="absolute inset-0 bg-[#0a1628]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/50 to-[#0a1628]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/40 via-transparent to-[#0a1628]/80" />

        {/* Amber glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[450px] opacity-[0.07] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 15% 25%, #f5a623, transparent 65%)' }} />

        {/* Top accent */}
        <div className="absolute top-0 inset-x-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, transparent, #f5a623 30%, rgba(255,255,255,0.4) 50%, #f5a623 70%, transparent)' }} />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pt-28 pb-20">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8" style={fade(0.1)}>
            <div className="w-7 h-[1.5px] bg-[#f5a623]" />
            <span className="text-[#f5a623] text-xs font-semibold tracking-[0.28em] uppercase">
              Industry Expertise
            </span>
            <div className="w-7 h-[1.5px] bg-[#f5a623] opacity-35" />
          </div>

          {/* Two-col layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">

            {/* LEFT */}
            <div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.1] tracking-tight mb-4 sm:mb-6"
                style={{ ...fade(0.2), textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
              >
                AI Solutions Built for
                <br />
                <span className="text-white/55">Every </span>
                <span className="text-[#f5a623] relative inline-block">
                  Industry
                  <span
                    className="absolute -bottom-1.5 left-0 h-[3px] bg-[#f5a623] rounded-full"
                    style={{ width: visible ? '100%' : '0%', transition: 'width 1s cubic-bezier(0.4,0,0.2,1) 1s', opacity: 0.5 }}
                  />
                </span>
                <span className="text-white/55"> That Matters</span>
              </h1>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-10 max-w-[500px]" style={fade(0.35)}>
                From hospitals and factories to fintech and farms — we engineer custom AI
                systems that solve the specific prediction, automation, and intelligence
                problems your industry faces.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-10" style={fade(0.48)}>
                <button
                  onClick={openModal}
                  className="group relative overflow-hidden bg-[#f5a623] text-[#0a1628] px-8 py-3.5 text-sm font-bold tracking-wide rounded-lg hover:shadow-[0_6px_24px_rgba(245,166,35,0.45)] hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="relative z-10">Get Free Consultation</span>
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
                </button>
                <a
                  href="#industries-grid"
                  className="flex items-center gap-2 border border-white/25 text-white/85 px-8 py-3.5 text-sm font-medium rounded-lg hover:border-white/50 hover:text-white transition-all duration-300"
                >
                  Explore Industries
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2.5" style={fade(0.6)}>
                {['16+ Industries', 'Production-Ready AI', 'Domain-Specific Models', 'Full Code Ownership'].map((p) => (
                  <span key={p} className="bg-white/[0.08] border border-white/[0.14] text-white/75 px-4 py-2 rounded-full text-xs font-semibold tracking-wide">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT — industry list */}
            <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(28px)', transition: 'opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s' }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-[0.2em] text-white/45 font-semibold">Industries We Serve</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: 'rgba(245,166,35,0.14)', color: '#f5a623', border: '1px solid rgba(245,166,35,0.25)' }}>
                  16 Verticals
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {industries.slice(0, 8).map((ind, i) => {
                  const Icon = ind.icon
                  return (
                    <button
                      key={ind.id}
                      onClick={() => handleSelect(ind.id)}
                      className="group flex items-center gap-3 bg-white/[0.07] border border-white/[0.12] px-4 py-3 rounded-xl hover:bg-white/[0.12] hover:border-[#f5a623]/35 transition-all duration-200 text-left"
                      style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(14px)', transition: `opacity 0.55s ease ${0.55 + i * 0.07}s, transform 0.55s ease ${0.55 + i * 0.07}s` }}
                    >
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${ind.color}25` }}>
                        <Icon size={14} style={{ color: ind.color }} />
                      </div>
                      <span className="text-white/80 text-sm font-medium group-hover:text-[#f5a623] transition-colors">{ind.title}</span>
                      <ArrowRight size={12} className="ml-auto text-white/20 group-hover:text-[#f5a623] transition-colors" />
                    </button>
                  )
                })}
              </div>
              <button
                onClick={() => { const el = document.getElementById('industries-grid'); if (el) el.scrollIntoView({ behavior: 'smooth' }) }}
                className="mt-3 flex justify-end items-center gap-1.5 text-xs text-white/35 hover:text-[#f5a623] transition-colors font-medium w-full"
              >
                View all 16 industries
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

          </div>

          {/* Bottom stats */}
          <div className="mt-14 pt-8 border-t border-white/[0.10] grid grid-cols-2 sm:grid-cols-4 gap-6" style={fade(0.72)}>
            {[
              { val: '16+', label: 'Industries Served' },
              { val: '50+', label: 'AI Systems in Production' },
              { val: '500+', label: 'Happy Clients' },
              { val: '94%', label: 'Avg. Model Accuracy' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-white leading-none">
                  {s.val.replace('+', '')}<span className="text-[#f5a623]">{s.val.includes('+') ? '+' : s.val.includes('%') ? '%' : ''}</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-white/40 font-medium mt-1.5">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: visible ? 0.4 : 0, transition: 'opacity 0.6s ease 1.3s' }}>
          <span className="text-[9px] uppercase tracking-[0.22em] text-white/50 font-semibold">Scroll</span>
          <div className="w-[1px] h-9 bg-gradient-to-b from-white/50 to-transparent" />
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 inset-x-0 h-[1px] opacity-20"
          style={{ background: 'linear-gradient(90deg, transparent, #f5a623 40%, rgba(255,255,255,0.3) 60%, transparent)' }} />
      </section>

      {/* ── Industries Grid ───────────────────────────────────────────────── */}
      <section id="industries-grid" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-[#f5a623]" />
              <span className="text-[#f5a623] text-xs font-semibold tracking-[0.25em] uppercase">All Industries</span>
              <div className="w-8 h-[2px] bg-[#f5a623] opacity-40" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-4">
              Select Your Industry
            </h2>
            <div className="w-16 h-1 bg-[#f5a623] rounded-full mx-auto mb-5" />
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Click any industry below to see exactly what AI systems we build and what business outcomes we deliver.
            </p>
          </div>

          {/* 4-col image card grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
            {industries.map((ind) => {
              const Icon = ind.icon
              const isActive = activeId === ind.id
              return (
                <button
                  key={ind.id}
                  onClick={() => handleSelect(ind.id)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer text-left transition-all duration-300 ${isActive ? 'ring-2 shadow-xl scale-[1.02]' : 'hover:shadow-xl hover:-translate-y-1'}`}
                  style={{ ringColor: ind.color, ...(isActive ? { boxShadow: `0 0 0 2px ${ind.color}, 0 20px 40px rgba(0,0,0,0.15)` } : {}) }}
                >
                  {/* Image */}
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#0a1628]/50 to-black/15" />
                    {/* Active tint */}
                    {isActive && <div className="absolute inset-0 opacity-20" style={{ background: ind.color }} />}

                    {/* AI badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-orange-500/40 text-orange-400 text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        <span className="w-1 h-1 rounded-full bg-orange-400" />
                        AI Powered
                      </span>
                    </div>

                    {/* Active check */}
                    {isActive && (
                      <div className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: ind.color }}>
                        <CheckCircle2 size={13} className="text-white" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: isActive ? ind.color : `${ind.color}30` }}>
                          <Icon size={12} style={{ color: isActive ? '#fff' : ind.color }} />
                        </div>
                        <h3 className="text-sm font-bold text-white leading-tight group-hover:text-[#f5a623] transition-colors">
                          {ind.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white/60 text-[10px]">{ind.stat.val}</span>
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        <span className="text-white/50 text-[10px]">{ind.stat.label}</span>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-500 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                      style={{ background: ind.color, transformOrigin: 'left' }} />
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Industry Detail ───────────────────────────────────────────────── */}
      <section id="industry-detail" className="bg-[#f8fafc] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-16">

            {/* Left — Image + stat card */}
            <div className="w-full lg:w-1/2 flex-shrink-0 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  key={active.id}
                  src={active.image}
                  alt={active.title}
                  className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-gray-100 px-6 py-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${active.color}18` }}>
                  <TrendingUp size={20} style={{ color: active.color }} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0a1628] leading-none" style={{ color: active.color }}>{active.stat.val}</div>
                  <div className="text-gray-500 text-xs font-medium mt-0.5">{active.stat.label}</div>
                </div>
              </div>
              {/* Industry badge */}
              <div className="absolute top-5 right-5">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-bold shadow-lg" style={{ background: active.color }}>
                  <ActiveIcon size={12} />
                  {active.title}
                </span>
              </div>
            </div>

            {/* Right — Content */}
            <div className="flex-1 pt-4">
              {/* Section label */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px]" style={{ background: active.color }} />
                <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: active.color }}>
                  {active.title}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a1628] mb-4 leading-tight">
                {active.tagline}
              </h2>
              <div className="w-16 h-1 rounded-full mb-7" style={{ background: active.color }} />

              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {active.intro}
              </p>

              {/* What we build checklist */}
              <p className="text-[#0a1628] font-bold text-sm uppercase tracking-widest mb-4">What We Build</p>
              <div className="space-y-3 mb-8">
                {active.whatWeBuild.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="flex-shrink-0" style={{ color: active.color }} />
                    <span className="text-gray-600 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Service tags */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {active.services.map((svc) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border transition-all hover:shadow-sm hover:-translate-y-0.5"
                    style={{ borderColor: `${active.color}40`, color: active.color, background: `${active.color}08` }}
                  >
                    {svc.label}
                    <ArrowRight size={11} />
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base hover:opacity-90 transition-all hover:scale-[1.02] hover:shadow-lg"
                style={{ background: active.color }}
              >
                Build AI for {active.title.split(' ')[0]}
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ── AI Capabilities We Bring ──────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-[#f5a623]" />
              <span className="text-[#f5a623] text-xs font-semibold tracking-[0.25em] uppercase">Our Capabilities</span>
              <div className="w-8 h-[2px] bg-[#f5a623] opacity-40" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-4">
              What We Bring to Every Industry
            </h2>
            <div className="w-16 h-1 bg-[#f5a623] rounded-full mx-auto mb-5" />
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Six core AI disciplines that we apply across all 16 verticals — tailored to your domain's data and workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className={`rounded-2xl p-8 text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${cap.featured ? 'bg-[#0a1f3c] scale-105 shadow-lg' : 'bg-[#0d2240]'}`}
              >
                <div className="mb-6">
                  <cap.Icon size={48} className="text-[#f5a623]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Work ───────────────────────────────────────────────────── */}
      <section className="bg-[#f8fafc] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-16">

            {/* Left — Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-[#f5a623]" />
                <span className="text-[#f5a623] text-xs font-semibold tracking-[0.25em] uppercase">Our Approach</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight mb-4">
                We Don't Sell Generic AI.<br />
                <span className="text-[#f5a623]">We Engineer for Your Industry.</span>
              </h2>
              <div className="w-16 h-1 bg-[#f5a623] rounded-full mb-8" />
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                The biggest failure in AI projects is applying a generic model to a domain-specific problem.
                We start by deeply understanding your industry's data, workflows, and constraints — then we engineer the right solution from the ground up.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { Icon: BarChart3, label: 'Business metric-first — not just model accuracy' },
                  { Icon: Shield, label: 'Compliance & domain constraints built in' },
                  { Icon: Lightbulb, label: 'Industry data expertise, not generic datasets' },
                  { Icon: Sparkles, label: 'Integrated into your existing systems & workflows' },
                  { Icon: Monitor, label: 'Monitored in production — drift detection included' },
                  { Icon: Wand2, label: '100% source code & model ownership on delivery' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#f5a623]/30 hover:bg-[#fdf8f3] transition-all duration-200 group">
                    <div className="w-11 h-11 rounded-xl bg-[#0a1f3c] flex items-center justify-center flex-shrink-0 group-hover:bg-[#f5a623] transition-colors duration-200">
                      <item.Icon size={19} className="text-white" />
                    </div>
                    <span className="text-[#0a1628] text-sm font-semibold leading-snug">{item.label}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={openModal}
                className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-[#0a1f3c] text-white font-bold text-base rounded-xl hover:bg-[#f5a623] transition-all duration-300"
              >
                Get a Free Consultation
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Right — Image */}
            <div className="w-full lg:w-[460px] flex-shrink-0 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80"
                  alt="Kotibox AI Team"
                  className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-gray-100 px-6 py-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f5a623]/15 flex items-center justify-center flex-shrink-0">
                  <BrainCircuit size={22} className="text-[#f5a623]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0a1628] leading-none">50<span className="text-[#f5a623]">+</span></div>
                  <div className="text-gray-500 text-xs font-medium mt-0.5">AI Systems in Production</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────────────────── */}
      <section className="bg-[#0a1628] py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {[
              { val: '16+', label: 'Industries Served' },
              { val: '50+', label: 'Production AI Systems' },
              { val: '500+', label: 'Happy Clients' },
              { val: '3', label: 'Global Offices' },
            ].map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white leading-none mb-2">
                  {s.val.replace('+', '')}<span className="text-[#f5a623]">{s.val.includes('+') ? '+' : ''}</span>
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/40 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2240 100%)' }}>
            {/* Glow */}
            <div className="absolute top-0 left-0 w-[500px] h-[300px] opacity-[0.08] pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 10% 30%, #f5a623, transparent 65%)' }} />
            <div className="absolute top-0 inset-x-0 h-[2px]"
              style={{ background: 'linear-gradient(90deg, transparent, #f5a623 30%, rgba(255,255,255,0.3) 50%, #f5a623 70%, transparent)' }} />

            <div className="relative z-10 px-8 md:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-7 h-[1.5px] bg-[#f5a623]" />
                  <span className="text-[#f5a623] text-xs font-semibold tracking-[0.25em] uppercase">Free AI Audit</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                  Not Sure Where to Start?<br />
                  <span className="text-[#f5a623]">Let's Find Your #1 AI Opportunity.</span>
                </h2>
                <p className="text-white/60 text-base leading-relaxed">
                  Share your industry and biggest operational challenge. We'll identify the highest-ROI AI use case and send you a free solution brief in 48 hours — no commitment required.
                </p>
              </div>
              <div className="flex flex-col sm:items-end gap-4">
                <button
                  onClick={openModal}
                  className="group relative overflow-hidden bg-[#f5a623] text-[#0a1628] px-8 py-4 text-sm font-bold rounded-xl hover:shadow-[0_6px_24px_rgba(245,166,35,0.45)] hover:scale-[1.02] transition-all duration-300 flex items-center gap-2"
                >
                  <span className="relative z-10">Get Your Free AI Audit</span>
                  <ArrowRight size={16} className="relative z-10" />
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
                </button>
                <Link
                  href="/services/ai-consulting"
                  className="flex items-center gap-2 border border-white/25 text-white/85 px-8 py-4 text-sm font-medium rounded-xl hover:border-white/50 hover:text-white transition-all duration-300"
                >
                  Talk to an AI Consultant
                  <ArrowRight size={14} />
                </Link>
                {/* Industry quick links */}
                <div className="flex flex-wrap gap-1.5 sm:justify-end pt-2">
                  {industries.slice(0, 6).map((ind) => {
                    const Icon = ind.icon
                    return (
                      <button key={ind.id} onClick={() => handleSelect(ind.id)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white/35 border border-white/10 hover:text-white/65 hover:border-white/25 transition-all">
                        <Icon size={9} />
                        {ind.title.split(' ')[0]}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
