import Link from 'next/link'
import { Monitor, MessageSquare, Mic, UtensilsCrossed, Wand2, UserSearch } from 'lucide-react'

const products = [
  {
    id: 'ott-platform',
    tag: 'VERTICAL OTT',
    tagColor: 'bg-red-500',
    title: 'AI-Powered Vertical OTT Platform',
    description: 'Niche OTT solution with video streaming, subscriptions, recommendations, creator panels, and AI content...',
    exploreColor: 'text-red-500',
    Icon: Monitor,
    iconBg: 'bg-white',
    iconColor: 'text-red-500',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&q=80',
  },
  {
    id: 'ai-chatbot',
    tag: 'AI CHATBOT',
    tagColor: 'bg-blue-500',
    title: 'AI Chatbot Web & App Suite',
    description: 'Smart support and sales chatbot with knowledge base training, lead capture, analytics, and CRM handoff.',
    exploreColor: 'text-blue-500',
    Icon: MessageSquare,
    iconBg: 'bg-white',
    iconColor: 'text-blue-500',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
  },
  {
    id: 'voice-ai',
    tag: 'VOICE-TO-VOICE',
    tagColor: 'bg-[#f5a623]',
    title: 'Voice-to-Voice AI Chat',
    description: 'Real-time voice conversation assistant for calls, bookings, FAQs, follow-ups, and customer workflows.',
    exploreColor: 'text-[#f5a623]',
    Icon: Mic,
    iconBg: 'bg-white',
    iconColor: 'text-[#f5a623]',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80',
  },
  {
    id: 'food-delivery',
    tag: 'AI FOOD DELIVERY',
    tagColor: 'bg-green-500',
    title: 'AI Food Delivery Platform',
    description: 'Food ordering suite with smart recommendations, route optimization, rider tracking, and restaurant analytics.',
    exploreColor: 'text-green-500',
    Icon: UtensilsCrossed,
    iconBg: 'bg-white',
    iconColor: 'text-green-500',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&q=80',
  },
  {
    id: 'ai-image-generation',
    tag: 'AI IMAGE GEN',
    tagColor: 'bg-purple-500',
    title: 'AI Image Generation & Transformation',
    description: 'Creative AI suite for text-to-image, image editing, background removal, style transfer, and brand visuals.',
    exploreColor: 'text-purple-500',
    Icon: Wand2,
    iconBg: 'bg-white',
    iconColor: 'text-purple-500',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80',
  },
  {
    id: 'job-seeker',
    tag: 'AI JOB SEEKER',
    tagColor: 'bg-teal-500',
    title: 'AI Job Seeker & Career Platform',
    description: 'Career platform with AI resume builder, job matching, interview prep, recruiter tools, and applicant tracking.',
    exploreColor: 'text-teal-500',
    Icon: UserSearch,
    iconBg: 'bg-white',
    iconColor: 'text-teal-500',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
  },
]

export default function ProductsSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top label */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#f5a623]" />
          <span className="text-[#f5a623] text-sm font-bold tracking-widest uppercase">
            Latest Product Suites
          </span>
          <div className="w-8 h-px bg-[#f5a623]" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1628]
                       text-center mb-4 leading-tight">
          Ready-to-Launch Digital Product Suites
        </h2>
        <p className="text-center text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
          Explore AI-first product suites for OTT platforms, chatbots, voice
          assistants, food delivery, image generation, and job seeker experiences.
        </p>

        {/* Tags + CTA */}
        <div className="flex items-center justify-center gap-3 mb-14 flex-wrap">
          {['6 AI Suites', 'AI Ready', 'Web + App'].map((tag) => (
            <span key={tag}
              className="px-4 py-2 rounded-full border border-gray-200
                         text-sm font-semibold text-[#0a1628]">
              {tag}
            </span>
          ))}
          <Link href="/products"
            className="px-6 py-2.5 rounded-full bg-[#0a1628] text-white
                       text-sm font-bold hover:bg-[#1a2f4e] transition-all
                       flex items-center gap-2">
            Browse Products →
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id}
              className="rounded-2xl overflow-hidden border border-gray-100
                         hover:shadow-lg transition-all group">

              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover
                             group-hover:scale-105 transition-transform duration-500"
                />

                {/* Tag badge */}
                <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full
                                text-white text-xs font-bold ${product.tagColor}`}>
                  {product.tag}
                </div>

                {/* Icon button top right */}
                <div className="absolute top-3 right-3 w-10 h-10 rounded-full
                                bg-white shadow-md flex items-center justify-center">
                  <product.Icon size={18} className={product.iconColor} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-extrabold text-[#0a1628] mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <Link href={`/products/${product.id}`}
                    className={`text-sm font-bold flex items-center gap-1
                               hover:gap-2 transition-all ${product.exploreColor}`}>
                    Explore Now →
                  </Link>
                  <span className="text-xs font-semibold text-gray-400
                                   border border-gray-200 px-3 py-1 rounded-full">
                    Web + App
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}