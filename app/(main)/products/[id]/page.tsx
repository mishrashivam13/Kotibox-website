'use client'
import { use, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ChevronDown, ChevronUp, Code2, ArrowRight, Rocket, Building2, Users } from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

type Product = {
  id: string
  tag: string
  accentColor: string
  title: string
  description: string
  longDescription: string
  features: string[]
  image: string
  gallery: string[]
  faqs: { question: string; answer: string }[]
  techStack: string[]
  stats: { value: string; label: string }[]
  useCases: { icon: 'startup' | 'enterprise' | 'agency'; title: string; desc: string }[]
}

const products: Product[] = [
  {
    id: 'ott-platform',
    tag: 'VERTICAL OTT',
    accentColor: '#ef4444',
    title: 'AI-Powered Vertical OTT Platform',
    description: 'Niche OTT solution with video streaming, subscriptions, AI recommendations, creator panels, and content DRM.',
    longDescription: 'Launch your own scalable video streaming platform in weeks. Our OTT suite comes packed with AI-driven content recommendations, seamless subscription management, and a powerful creator dashboard. Perfect for niche content creators and media houses looking to own their audience and monetize their content library.',
    features: ['AI Content Recommendations', '4K Adaptive Streaming', 'Subscription & Paywall', 'Creator Analytics Dashboard', 'Multi-device Support', 'Content DRM Protection'],
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80',
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      'https://images.unsplash.com/photo-1536240478700-b869ad10e2e8?w=800&q=80',
    ],
    faqs: [
      { question: 'How long does it take to launch my own OTT platform?', answer: 'Since our core suite is ready, we typically launch a fully branded platform within 4–6 weeks, including customizations and content migration.' },
      { question: 'Can I monetize my content?', answer: 'Yes, the platform supports SVOD (Subscription), TVOD (Pay-per-view), and AVOD (Ad-supported) monetization models simultaneously.' },
      { question: 'Does it support 4K streaming?', answer: 'Absolutely. Our infrastructure handles scalable HD streaming up to 4K with adaptive bitrate for all connection speeds.' },
    ],
    techStack: ['MERN Stack', 'React Native (Mobile)', 'AWS MediaLive', 'Python (AI Engine)', 'MongoDB', 'CloudFront CDN'],
    stats: [{ value: '4K', label: 'Streaming Quality' }, { value: '4–6wk', label: 'Launch Time' }, { value: 'Multi', label: 'Monetization Models' }],
    useCases: [
      { icon: 'startup', title: 'Content Creators', desc: 'Own your audience and content library — stop losing 30% to third-party platforms.' },
      { icon: 'enterprise', title: 'Media Houses', desc: 'Launch niche vertical OTT channels with branded apps on all major platforms.' },
      { icon: 'agency', title: 'EdTech & Faith', desc: 'Stream courses, sermons, fitness, or any niche content with subscription access.' },
    ],
  },
  {
    id: 'ai-chatbot',
    tag: 'AI CHATBOT',
    accentColor: '#3b82f6',
    title: 'AI Chatbot Web & App Suite',
    description: 'Smart support and sales chatbot with knowledge base training, lead capture, analytics, and CRM handoff.',
    longDescription: 'Automate your customer support and lead generation with our advanced AI Chatbot suite. Train the bot on your own company data, capture leads 24/7, and seamlessly hand off complex queries to human agents via your CRM. Deploy in days, not months, across your website, WhatsApp, and social channels.',
    features: ['Custom Knowledge Base Training', 'Human-Agent Handoff', 'Lead Capture Workflows', 'Multi-language Support (90+)', 'CRM Integration', 'Analytics Dashboard'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
      'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    ],
    faqs: [
      { question: 'Can I train the AI on my own website data?', answer: 'Yes, upload PDFs, Word documents, or provide your website URL. The AI ingests the data and answers queries based exclusively on your context.' },
      { question: 'Does it integrate with my CRM?', answer: 'Yes, it integrates natively with Salesforce, HubSpot, and Zoho, allowing seamless lead syncing and human agent handoff.' },
      { question: 'What languages does the chatbot support?', answer: 'The chatbot supports 90+ languages globally, automatically detecting and responding in the user\'s language.' },
    ],
    techStack: ['Next.js', 'Node.js', 'Python (LangChain)', 'Redis', 'PostgreSQL', 'OpenAI / Claude API'],
    stats: [{ value: '90+', label: 'Languages' }, { value: '24/7', label: 'Availability' }, { value: '<500ms', label: 'Response Time' }],
    useCases: [
      { icon: 'startup', title: 'E-Commerce', desc: 'Answer product questions, track orders, and recover abandoned carts automatically.' },
      { icon: 'enterprise', title: 'SaaS Companies', desc: 'Deflect 70% of support tickets and qualify inbound leads without human agents.' },
      { icon: 'agency', title: 'Service Businesses', desc: 'Book appointments, answer FAQs, and capture leads from your website 24/7.' },
    ],
  },
  {
    id: 'voice-ai',
    tag: 'VOICE-TO-VOICE',
    accentColor: '#f5a623',
    title: 'Voice-to-Voice AI Assistant',
    description: 'Real-time voice AI for calls, bookings, FAQs, follow-ups, and customer workflows — human-like, 24/7.',
    longDescription: 'Revolutionize phone support with our ultra-low latency Voice AI. It sounds human, understands context, and executes workflows like booking appointments, checking order status, and making follow-up calls automatically — 24/7 without fatigue, at a fraction of call center costs.',
    features: ['Ultra-low Latency (<500ms)', 'Custom Voice Cloning', 'Booking & Workflow Execution', 'Emotion & Tone Detection', 'Multi-language Voice Support', 'Call Recording & Analytics'],
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
      'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800&q=80',
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80',
    ],
    faqs: [
      { question: 'Is there any lag during the conversation?', answer: 'No. We use ultra-optimized models with response times under 500ms, making the conversation feel completely natural.' },
      { question: 'Can I choose or clone a specific voice?', answer: 'Yes, choose from premium pre-built voices or securely clone a brand ambassador\'s voice with their consent.' },
      { question: 'Does this work over standard phone lines?', answer: 'Yes. SIP trunking and Twilio/Vapi integrations let the AI make and receive standard phone calls.' },
    ],
    techStack: ['React.js', 'Flutter (App)', 'Python (STT/TTS)', 'WebRTC', 'Node.js', 'Twilio / Vapi'],
    stats: [{ value: '<500ms', label: 'Response Latency' }, { value: '24/7', label: 'No Downtime' }, { value: '80%', label: 'Cost vs Call Center' }],
    useCases: [
      { icon: 'startup', title: 'Healthcare', desc: 'Book appointments, send reminders, and answer patient FAQs over the phone automatically.' },
      { icon: 'enterprise', title: 'Banking & Finance', desc: 'Handle balance enquiries, loan follow-ups, and KYC verification calls at scale.' },
      { icon: 'agency', title: 'Real Estate', desc: 'Qualify leads, schedule site visits, and send follow-up calls without human effort.' },
    ],
  },
  {
    id: 'food-delivery',
    tag: 'AI FOOD DELIVERY',
    accentColor: '#22c55e',
    title: 'AI Food Delivery Platform',
    description: 'Food ordering with AI recommendations, route optimization, live rider tracking, and restaurant analytics.',
    longDescription: 'A complete end-to-end food delivery ecosystem. Includes a customer app, restaurant portal, and rider app — all powered by AI to optimize delivery routes, predict preparation times, and offer personalized food recommendations based on each user\'s behavior and preferences.',
    features: ['AI Route Optimization', 'Real-time Order Tracking', 'Personalized Food AI', 'Automated Dispatch System', 'Restaurant Analytics', 'Multi-payment Support'],
    image: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
    ],
    faqs: [
      { question: 'Are the Rider and Restaurant apps included?', answer: 'Yes, the suite includes 3 apps: Customer App, Restaurant/Vendor Dashboard, and Rider Delivery App.' },
      { question: 'How does AI optimize delivery?', answer: 'The AI considers traffic patterns, preparation times, and rider availability to batch orders and calculate the fastest routes automatically.' },
      { question: 'Can we integrate our local payment gateway?', answer: 'Yes, the platform supports Stripe, Razorpay, PayPal, and any local gateway of your choice.' },
    ],
    techStack: ['MERN Stack', 'Flutter (Customer/Rider Apps)', 'Redis (Live Tracking)', 'Python (Routing ML)', 'Google Maps API', 'AWS'],
    stats: [{ value: '3 Apps', label: 'Included' }, { value: 'AI', label: 'Route Optimizer' }, { value: 'Multi-city', label: 'Support' }],
    useCases: [
      { icon: 'startup', title: 'Cloud Kitchens', desc: 'Launch delivery from multiple kitchen brands without building tech from scratch.' },
      { icon: 'enterprise', title: 'Restaurant Chains', desc: 'Own your delivery channel instead of paying 30% commissions to aggregators.' },
      { icon: 'agency', title: 'Food Aggregators', desc: 'Build a Swiggy/Zomato-style platform for your city or food niche.' },
    ],
  },
  {
    id: 'ai-image-generation',
    tag: 'AI IMAGE GEN',
    accentColor: '#a855f7',
    title: 'AI Image Generation & Transformation',
    description: 'Creative AI suite for text-to-image, bulk background removal, style transfer, upscaling, and brand visuals.',
    longDescription: 'Empower your marketing and design teams with our AI image suite. Generate high-quality visuals from text prompts, automatically remove backgrounds in bulk, apply your brand style to existing product photos instantly — and fine-tune the model on your own products for unique lifestyle imagery.',
    features: ['Text-to-Image Generation', 'Bulk Background Removal', 'Brand Style Transfer', 'High-Res Upscaling (4×)', 'Product Photo Enhancement', 'REST API Access'],
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
      'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    ],
    faqs: [
      { question: 'Who owns the copyright of generated images?', answer: 'You do. All images generated through your licensed platform belong entirely to your brand for commercial use.' },
      { question: 'Is there an API for my other apps?', answer: 'Yes, the suite includes a REST API so you can integrate image generation directly into your SaaS or mobile apps.' },
      { question: 'Can I train the AI on my specific product photos?', answer: 'Yes. You can fine-tune the model using LoRA to generate new lifestyle images featuring your exact physical products.' },
    ],
    techStack: ['Next.js', 'FastAPI (Python)', 'PyTorch / Stable Diffusion', 'PostgreSQL', 'AWS S3', 'CUDA GPU Cluster'],
    stats: [{ value: '4× ', label: 'Image Upscaling' }, { value: 'Bulk', label: 'Background Removal' }, { value: 'Custom', label: 'Model Fine-tuning' }],
    useCases: [
      { icon: 'startup', title: 'E-Commerce Brands', desc: 'Generate professional product photos and lifestyle shots at a fraction of photoshoot costs.' },
      { icon: 'enterprise', title: 'Marketing Teams', desc: 'Create on-brand social media visuals, ad creatives, and banners in seconds.' },
      { icon: 'agency', title: 'Creative Agencies', desc: 'Offer AI-powered visual creation as a service to clients at massive scale.' },
    ],
  },
  {
    id: 'job-seeker',
    tag: 'AI JOB SEEKER',
    accentColor: '#14b8a6',
    title: 'AI Job Seeker & Career Platform',
    description: 'Career platform with AI resume builder, job matching, mock interviews, recruiter tools, and ATS.',
    longDescription: 'Bridge the gap between talent and companies. Our AI-driven career platform automatically matches candidates to the right roles, helps them build ATS-friendly resumes, provides AI mock interview practice, and gives recruiters intelligent applicant ranking and pipeline management tools.',
    features: ['AI Resume Parsing & Scoring', 'Smart Candidate Matching', 'AI Mock Video Interviews', 'Recruiter ATS Dashboard', 'Job Alert Automation', 'Employer Branding Pages'],
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    ],
    faqs: [
      { question: 'How does the AI score and rank resumes?', answer: 'The AI parses the job description and resume, scoring based on keyword overlap, experience relevance, and skill matching.' },
      { question: 'Are AI mock video interviews supported?', answer: 'Yes, candidates practice via webcam. The AI asks questions and analyzes tone, pace, and answer quality with feedback.' },
      { question: 'Is the platform ATS compliant?', answer: 'Yes. Resumes generated by our builder are 100% ATS-friendly, passing standard screening software easily.' },
    ],
    techStack: ['Laravel (Backend)', 'React.js (Web)', 'React Native (App)', 'Python (NLP & ATS)', 'MySQL', 'OpenAI API'],
    stats: [{ value: 'AI', label: 'Resume Matching' }, { value: '10×', label: 'Faster Screening' }, { value: 'ATS', label: '100% Compliant' }],
    useCases: [
      { icon: 'startup', title: 'Job Boards', desc: 'Launch a niche job board with AI candidate-job matching for specific industries.' },
      { icon: 'enterprise', title: 'HR Teams', desc: 'Streamline the entire hiring pipeline from job posting to offer letter.' },
      { icon: 'agency', title: 'Staffing Firms', desc: 'Manage multiple employer clients and candidate pools from one smart dashboard.' },
    ],
  },
]

const useCaseIcons = { startup: Rocket, enterprise: Building2, agency: Users }

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { openModal } = useModal()

  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white pt-20">
        <p className="text-2xl font-bold text-[#0a1628] mb-4">Product not found</p>
        <Link href="/" className="text-[#f5a623] font-semibold hover:underline">← Back to Home</Link>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ── */}
      <div className="relative h-[65vh] min-h-[480px] overflow-hidden">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/65 to-[#0a1628]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/80 via-transparent to-transparent" />

        {/* Back */}
        <div className="absolute top-28 left-6 md:left-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full transition-colors"
          >
            <ArrowLeft size={15} /> Back to Home
          </Link>
        </div>

        {/* Content */}
        <div className="absolute bottom-10 left-6 md:left-12 max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-4" style={{ background: product.accentColor }}>
            {product.tag}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
            {product.title}
          </h1>
          <p className="text-white/75 text-base md:text-lg leading-relaxed mb-6">{product.description}</p>
          {/* Stats badges */}
          <div className="flex flex-wrap gap-3">
            {product.stats.map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-center">
                <div className="text-base font-black text-white">{s.value}</div>
                <div className="text-[10px] text-white/60 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="lg:col-span-2 flex flex-col gap-14">

            {/* Overview */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px]" style={{ background: product.accentColor }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: product.accentColor }}>Overview</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <p className="text-gray-600 text-base leading-relaxed">{product.longDescription}</p>
                <img src={product.gallery[0]} alt={product.title} className="rounded-2xl object-cover w-full h-52 shadow-md" />
              </div>
            </div>

            {/* Who Is It For */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px]" style={{ background: product.accentColor }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: product.accentColor }}>Who Is It For</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {product.useCases.map((uc, i) => {
                  const Icon = useCaseIcons[uc.icon]
                  return (
                    <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-gray-200 transition-all">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: product.accentColor + '18' }}>
                        <Icon size={16} style={{ color: product.accentColor }} />
                      </div>
                      <h4 className="font-bold text-[#0a1628] text-sm mb-1.5">{uc.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{uc.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Screenshots */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px]" style={{ background: product.accentColor }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: product.accentColor }}>Screenshots</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {product.gallery.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden aspect-video bg-gray-100 shadow-sm">
                    <img src={img} alt={`${product.title} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px]" style={{ background: product.accentColor }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: product.accentColor }}>FAQs</span>
              </div>
              <div className="flex flex-col gap-3">
                {product.faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-[#0a1628] font-semibold text-sm md:text-base pr-4">{faq.question}</span>
                      {openFaq === i
                        ? <ChevronUp size={18} style={{ color: product.accentColor }} className="flex-shrink-0" />
                        : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />}
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT Sidebar */}
          <div className="flex flex-col gap-6">

            {/* Features */}
            <div className="bg-[#0a1628] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-3 h-3 rounded-full" style={{ background: product.accentColor }} />
                <span className="text-white font-bold text-base">Key Features</span>
              </div>
              <div className="flex flex-col gap-3">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: product.accentColor }} />
                    <span className="text-white/80 text-sm leading-snug">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Code2 size={16} className="text-[#0a1628]" />
                <span className="text-[#0a1628] font-bold text-base">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full text-xs font-semibold text-[#0a1628] border border-gray-300 bg-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1a2f4e 100%)' }}>
              <div className="w-12 h-1 rounded-full mb-4" style={{ background: product.accentColor }} />
              <h3 className="text-lg font-extrabold mb-2">Interested in this product?</h3>
              <p className="text-white/65 text-sm leading-relaxed mb-5">
                Get a free demo and custom pricing tailored to your business needs.
              </p>
              <button
                onClick={openModal}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all"
                style={{ background: product.accentColor }}
              >
                Request a Free Demo
              </button>
              <Link
                href="/live-demo"
                className="w-full flex items-center justify-center gap-2 py-3 mt-3 rounded-xl font-semibold text-sm border border-white/20 text-white/80 hover:bg-white/10 transition-all"
              >
                Browse All Products <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ── Suggestion Cards ── */}
      <div className="bg-[#f8fafc] py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#f5a623]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#f5a623]">Explore More</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0a1628] mb-10">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-[#f5a623]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
              >
                <div className="h-44 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-3" style={{ background: p.accentColor }}>
                    {p.tag}
                  </span>
                  <h3 className="font-bold text-[#0a1628] group-hover:text-[#f5a623] transition-colors mb-2 text-base leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-4">{p.description}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#f5a623]">
                    View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
