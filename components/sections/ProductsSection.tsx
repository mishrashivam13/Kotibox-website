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
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1589254065878-42efde2cd8d9?w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
  },
]

export default function ProductsSection() {
  return (
    <section className="bg-white py-14 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <p className="text-xs font-semibold text-[#f5a623] tracking-[0.2em] uppercase mb-4">Product Suites</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-[#0a1628]
                         mb-4 leading-tight max-w-2xl">
            Ready-to-Launch Digital Product Suites
          </h2>
          <div className="w-12 h-[2px] bg-[#f5a623] rounded-full mb-5" />
          <p className="text-slate-500 text-[0.95rem] md:text-base max-w-xl mx-auto leading-relaxed">
            AI-first product suites for OTT, chatbots, voice assistants, food delivery,
            image generation, and career platforms — ready to customise and launch.
          </p>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          {['6 AI Suites', 'Web + App', 'Customisable'].map((tag) => (
            <span key={tag} className="px-3.5 py-1.5 rounded-md border border-slate-200
                         text-xs font-medium text-slate-600">
              {tag}
            </span>
          ))}
          <Link href="/live-demo"
            className="px-5 py-2 rounded-md bg-[#0a1628] text-white
                       text-xs font-semibold hover:bg-[#1a2f4e] transition-all
                       flex items-center gap-1.5">
            Browse All Products →
          </Link>
        </div>

{/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link 
              href={`/products/${product.id}`}
              key={product.id}
              className="block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 group cursor-pointer bg-white"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Tag badge */}
                <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold ${product.tagColor}`}>
                  {product.tag}
                </div>

                {/* Icon button top right */}
                <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                  <product.Icon size={18} className={product.iconColor} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-[calc(100%-13rem)]">
                <h3 className="text-lg font-semibold text-[#0a1628] mb-2 group-hover:text-[#f5a623] transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                  <span className={`text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all ${product.exploreColor}`}>
                    Explore Now →
                  </span>
                  
                  <span className="text-xs font-semibold text-gray-400 border border-gray-200 px-3 py-1 rounded-full">
                    Web + App
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}