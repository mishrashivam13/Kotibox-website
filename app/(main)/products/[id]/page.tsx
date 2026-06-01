'use client'
import { use, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ChevronDown, ChevronUp, Code2 } from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const products = [
  {
    id: 'ott-platform',
    tag: 'VERTICAL OTT',
    accentColor: '#ef4444',
    title: 'AI-Powered Vertical OTT Platform',
    description: 'Niche OTT solution with video streaming, subscriptions, recommendations, creator panels, and AI content.',
    longDescription: 'Launch your own scalable video streaming platform in weeks. Our OTT suite comes packed with AI-driven content recommendations, seamless subscription management, and a powerful creator dashboard. Perfect for niche content creators and media houses looking to own their audience.',
    features: ['AI Content Recommendations', '4K Video Streaming', 'Subscription & Paywall', 'Creator Analytics Dashboard', 'Multi-device Support', 'Content DRM Protection'],
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80',
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    ],
    faqs: [
      { question: 'How long does it take to launch my own OTT platform?', answer: 'Since our core suite is ready, we typically launch a fully branded platform for you within 4 to 6 weeks, including customizations.' },
      { question: 'Can I monetize my content?', answer: 'Yes, the platform supports multiple monetization models including SVOD (Subscription), TVOD (Pay-per-view), and AVOD (Ad-supported).' },
      { question: 'Does it support 4K streaming?', answer: 'Absolutely. Our infrastructure is built to handle scalable high-definition streaming up to 4K resolution with adaptive bitrate.' },
    ],
    techStack: ['MERN Stack', 'React Native (Mobile App)', 'AWS MediaLive', 'Python (AI Engine)', 'MongoDB'],
  },
  {
    id: 'ai-chatbot',
    tag: 'AI CHATBOT',
    accentColor: '#3b82f6',
    title: 'AI Chatbot Web & App Suite',
    description: 'Smart support and sales chatbot with knowledge base training, lead capture, analytics, and CRM handoff.',
    longDescription: 'Automate your customer support and lead generation with our advanced AI Chatbot suite. Train the bot on your own company data, capture leads 24/7, and seamlessly hand off complex queries to human agents via your CRM. Deploy in days, not months.',
    features: ['Custom Knowledge Base Training', 'Human-Agent Handoff', 'Lead Capture Workflows', 'Multi-language Support', 'CRM Integration', 'Analytics Dashboard'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80',
    ],
    faqs: [
      { question: 'Can I train the AI on my own website data?', answer: 'Yes, you can upload PDFs, Word documents, or simply provide your website URL. The AI will ingest the data and answer customer queries based exclusively on your context.' },
      { question: 'Does it integrate with my CRM?', answer: 'Yes, our chatbot integrates natively with popular CRMs like Salesforce, HubSpot, and Zoho, allowing seamless lead syncing and human agent handoff.' },
      { question: 'What languages does the chatbot support?', answer: 'The chatbot supports over 90+ languages globally, automatically detecting the user\'s language and responding appropriately.' },
    ],
    techStack: ['Next.js', 'Node.js', 'Python (LangChain/LLM)', 'Redis', 'PostgreSQL'],
  },
  {
    id: 'voice-ai',
    tag: 'VOICE-TO-VOICE',
    accentColor: '#f5a623',
    title: 'Voice-to-Voice AI Chat',
    description: 'Real-time voice conversation assistant for calls, bookings, FAQs, follow-ups, and customer workflows.',
    longDescription: 'Revolutionize phone support with our ultra-low latency Voice AI. It sounds human, understands context, and can execute workflows like booking appointments, checking order status, and making follow-up calls automatically — 24/7 without fatigue.',
    features: ['Ultra-low Latency Responses', 'Custom Voice Cloning', 'API Integration for Bookings', 'Emotion & Tone Detection', 'Multi-language Voice Support', 'Call Recording & Analytics'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?w=800&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
      'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800&q=80',
    ],
    faqs: [
      { question: 'Is there any lag during the conversation?', answer: 'We use highly optimized ultra-low latency models ensuring response times of under 500ms, making the conversation feel natural and human-like.' },
      { question: 'Can I choose or clone a specific voice?', answer: 'Yes, you can choose from dozens of premium pre-made voices or securely clone a brand ambassador\'s voice with their permission.' },
      { question: 'Does this work over standard phone lines?', answer: 'Absolutely. We provide SIP trunking and Twilio/Vapi integrations so the AI can make and receive standard phone calls.' },
    ],
    techStack: ['React.js', 'Flutter (App)', 'Python (Speech-to-Text)', 'WebRTC', 'Node.js'],
  },
  {
    id: 'food-delivery',
    tag: 'AI FOOD DELIVERY',
    accentColor: '#22c55e',
    title: 'AI Food Delivery Platform',
    description: 'Food ordering suite with smart recommendations, route optimization, rider tracking, and restaurant analytics.',
    longDescription: 'A complete end-to-end food delivery ecosystem. Includes a customer app, restaurant portal, and rider app, all powered by AI to optimize delivery routes, predict preparation times, and offer personalized food recommendations based on user behavior.',
    features: ['AI Route Optimization', 'Real-time Order Tracking', 'Personalized Menus', 'Automated Dispatch System', 'Restaurant Analytics', 'Multi-payment Support'],
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
      'https://images.unsplash.com/photo-1617347454431-f49cd7e4c1f6?w=800&q=80',
    ],
    faqs: [
      { question: 'Are the Rider and Restaurant apps included?', answer: 'Yes, the suite includes 3 distinct interfaces: The Customer App, the Restaurant/Vendor Dashboard, and the Rider Delivery App.' },
      { question: 'How does AI optimize the delivery process?', answer: 'Our AI considers traffic patterns, restaurant preparation times, and rider availability to automatically batch orders and calculate the fastest routes.' },
      { question: 'Can we integrate our local payment gateway?', answer: 'Yes, the platform is modular, allowing integration with Stripe, Razorpay, PayPal, or any local payment gateway of your choice.' },
    ],
    techStack: ['MERN Stack', 'Flutter (Customer/Rider Apps)', 'Redis (Live Tracking)', 'Python (Routing ML)', 'AWS'],
  },
  {
    id: 'ai-image-generation',
    tag: 'AI IMAGE GEN',
    accentColor: '#a855f7',
    title: 'AI Image Generation & Transformation',
    description: 'Creative AI suite for text-to-image, image editing, background removal, style transfer, and brand visuals.',
    longDescription: 'Empower your marketing and design teams with our AI image suite. Generate high-quality visuals from text prompts, automatically remove backgrounds in bulk, and apply your brand style to existing product photos instantly — no design skills needed.',
    features: ['Text-to-Image Generation', 'Bulk Background Removal', 'Brand Style Transfer', 'High-Res Upscaling', 'Product Photo Enhancement', 'REST API Access'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80',
      'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&q=80',
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80',
    ],
    faqs: [
      { question: 'Who owns the copyright of the generated images?', answer: 'You do. All images generated through your licensed platform belong entirely to your brand for commercial use.' },
      { question: 'Is there an API available for my other apps?', answer: 'Yes, the suite comes with a robust REST API so you can integrate image generation directly into your existing SaaS or mobile apps.' },
      { question: 'Can I train the AI on my specific product photos?', answer: 'Yes! You can fine-tune the model using a process called LoRA to generate new lifestyle images featuring your exact physical products.' },
    ],
    techStack: ['Next.js', 'FastAPI (Python)', 'PyTorch / Stable Diffusion', 'PostgreSQL', 'AWS S3'],
  },
  {
    id: 'job-seeker',
    tag: 'AI JOB SEEKER',
    accentColor: '#14b8a6',
    title: 'AI Job Seeker & Career Platform',
    description: 'Career platform with AI resume builder, job matching, interview prep, recruiter tools, and applicant tracking.',
    longDescription: 'Bridge the gap between talent and companies. Our AI-driven job platform automatically matches candidates to the right roles, helps them build ATS-friendly resumes, and provides recruiters with intelligent applicant ranking and pipeline management.',
    features: ['AI Resume Parsing & Scoring', 'Smart Candidate Matching', 'Mock AI Interviews', 'Recruiter ATS Dashboard', 'Job Alert Automation', 'Employer Branding Pages'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    ],
    faqs: [
      { question: 'How does the AI score and rank resumes?', answer: 'The AI parses the job description and the candidate\'s resume, scoring them based on keyword overlap, experience relevance, and skill matching.' },
      { question: 'Are AI mock video interviews supported?', answer: 'Yes, candidates can practice via webcam. The AI asks questions and analyzes their tone, pace, and answer quality to provide constructive feedback.' },
      { question: 'Is the platform ATS compliant?', answer: 'Absolutely. The resumes generated by our builder are 100% ATS-friendly, ensuring they pass through standard screening software easily.' },
    ],
    techStack: ['Laravel (Admin Backend)', 'React.js (Web)', 'React Native (App)', 'Python (NLP & ATS parsing)', 'MySQL'],
  },
]

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const product = products.find((p) => p.id === id)
  const { openModal } = useModal()

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white pt-20">
        <p className="text-2xl font-bold text-[#0a1628] mb-4">Product not found</p>
        <Link href="/" className="text-[#f5a623] font-semibold hover:underline">
          ← Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ── */}
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/70 via-transparent to-transparent" />

        {/* Back button */}
        <div className="absolute top-24 left-6 md:left-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-10 left-6 md:left-12 max-w-2xl">
          <span
            className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-4"
            style={{ background: product.accentColor }}
          >
            {product.tag}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
            {product.title}
          </h1>
          <p className="text-white/75 text-base md:text-lg leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT: Overview + Gallery + FAQs */}
          <div className="lg:col-span-2 flex flex-col gap-14">

            {/* Overview */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px]" style={{ background: product.accentColor }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: product.accentColor }}>
                  Overview
                </span>
              </div>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {product.longDescription}
              </p>
            </div>

            {/* Gallery */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px]" style={{ background: product.accentColor }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: product.accentColor }}>
                  Gallery
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {product.gallery.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden aspect-video bg-gray-100">
                    <img
                      src={img}
                      alt={`${product.title} screenshot ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px]" style={{ background: product.accentColor }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: product.accentColor }}>
                  FAQs
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {product.faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-[#0a1628] font-semibold text-sm md:text-base pr-4">
                        {faq.question}
                      </span>
                      {openFaq === i
                        ? <ChevronUp size={18} className="text-gray-400 flex-shrink-0" />
                        : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
                      }
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Sidebar */}
          <div className="flex flex-col gap-6">

            {/* Key Features */}
            <div className="bg-[#0a1628] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${product.accentColor}22` }}>
                  <div className="w-3 h-3 rounded-full" style={{ background: product.accentColor }} />
                </div>
                <span className="text-white font-bold text-base">Key Features</span>
              </div>
              <div className="flex flex-col gap-3">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: product.accentColor }} />
                    <span className="text-white/80 text-sm leading-snug">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Code2 size={18} className="text-[#0a1628]" />
                <span className="text-[#0a1628] font-bold text-base">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold text-[#0a1628] border border-gray-300 bg-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              className="rounded-2xl p-6 text-white"
              style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1a2f4e 100%)' }}
            >
              <div className="w-12 h-1 rounded-full mb-4" style={{ background: product.accentColor }} />
              <h3 className="text-lg font-extrabold mb-2">Interested in this product?</h3>
              <p className="text-white/65 text-sm leading-relaxed mb-5">
                Get a free demo and custom pricing tailored to your business needs.
              </p>
              <button
                onClick={openModal}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                style={{ background: product.accentColor, color: '#fff' }}
              >
                Request a Demo
              </button>
              <Link
                href="/"
                className="w-full flex items-center justify-center gap-2 py-3 mt-3 rounded-xl font-semibold text-sm border border-white/20 text-white/80 hover:bg-white/10 transition-all"
              >
                Browse All Products →
              </Link>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
