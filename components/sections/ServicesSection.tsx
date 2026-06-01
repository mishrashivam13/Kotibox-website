'use client'
import { useEffect, useRef, useState } from 'react'
import {
  Smartphone, Monitor, Zap, Globe, Layout,
  Brain, Code2, Sparkles, Bot, Cpu,
  Rocket, Scale, Palette, TrendingUp, Presentation,
  Gamepad2, Box, Play, Tv, Headset,
  Search, Share2, FileText, Mail, MousePointerClick,
  Globe2, ShoppingCart, Database, PenTool, AppWindow,
  Users, BarChart3, Package, UserCheck, Calculator
} from 'lucide-react'

const services = [
  {
    id: 'studio',
    label: 'KGT Studio',
    subtitle: 'Premium Tech Development Studio',
    title: 'Premium Tech Development Studio',
    description: 'AI-Powered App Development || Enterprise Solutions || Software Development',
    items: [
      { name: 'iOS App', Icon: Smartphone },
      { name: 'Android App', Icon: Monitor },
      { name: 'Flutter App', Icon: Zap },
      { name: 'React Native', Icon: Layout },
      { name: 'PWA App', Icon: Globe },
    ],
  },
  {
    id: 'intelligence',
    label: 'KGT Intelligence',
    subtitle: 'Your AI Innovation Partner',
    title: 'Your AI Development Partner',
    description: 'Delivering future-ready AI solutions to accelerate growth, optimize operations, and revolutionize your business.',
    items: [
      { name: 'AI Consulting', Icon: Brain },
      { name: 'AI Development', Icon: Code2 },
      { name: 'Generative AI', Icon: Sparkles },
      { name: 'Machine Learning', Icon: Cpu },
      { name: 'AI Agents', Icon: Bot },
    ],
  },
  {
    id: 'startup',
    label: 'KGT Startup',
    subtitle: "Your Startup's Launchpad",
    title: "Your Startup's Launchpad",
    description: 'Helping startups go from Zero to 1, backed by experience, technology and expertise.',
    items: [
      { name: 'Business Planning', Icon: Rocket },
      { name: 'Legal Setup', Icon: Scale },
      { name: 'UI/UX Design', Icon: Palette },
      { name: 'Marketing Strategy', Icon: TrendingUp },
      { name: 'Pitch Decks', Icon: Presentation },
    ],
  },
  {
    id: 'games',
    label: 'KGT Games',
    subtitle: 'Future-Ready Mobile Games',
    title: 'Game Development',
    description: 'End-to-end development of 2D, 3D, and multiplayer games for mobile, PC, and consoles.',
    items: [
      { name: 'Game Design', Icon: Gamepad2 },
      { name: '3D Modeling', Icon: Box },
      { name: 'Animation & VFX', Icon: Play },
      { name: 'Game Dev', Icon: Tv },
      { name: 'AR/VR Games', Icon: Headset },
    ],
  },
  {
    id: 'marketing',
    label: 'KGT Digital Marketing',
    subtitle: 'AI-Powered Marketing Solutions',
    title: 'Digital Marketing Solutions',
    description: 'Boost brand visibility, drive traffic, and grow sales with powerful, creative, and result-driven digital marketing strategies.',
    items: [
      { name: 'SEO Optimization', Icon: Search },
      { name: 'Social Media', Icon: Share2 },
      { name: 'Content Marketing', Icon: FileText },
      { name: 'Email Marketing', Icon: Mail },
      { name: 'PPC Advertising', Icon: MousePointerClick },
    ],
  },
  {
    id: 'web',
    label: 'KGT Web Solution',
    subtitle: 'AI-Powered Web Solution',
    title: 'Smart, Scalable & Secure Web Solutions',
    description: 'Smart, scalable, and secure web solutions designed to elevate your digital presence and drive business growth.',
    items: [
      { name: 'Custom Web Dev', Icon: Globe2 },
      { name: 'E-Commerce', Icon: ShoppingCart },
      { name: 'CMS Development', Icon: Database },
      { name: 'UI/UX Design', Icon: PenTool },
      { name: 'Web App Dev', Icon: AppWindow },
    ],
  },
  {
    id: 'software',
    label: 'KGT Software',
    subtitle: 'AI-Powered Software',
    title: 'End-to-End Custom Software',
    description: 'Comprehensive software solutions crafted to meet your business objectives with precision and efficiency.',
    items: [
      { name: 'CRM Software', Icon: Users },
      { name: 'ERP Software', Icon: BarChart3 },
      { name: 'Inventory Mgt', Icon: Package },
      { name: 'HR Management', Icon: UserCheck },
      { name: 'Accounting', Icon: Calculator },
    ],
  },
]

export default function ServicesSection() {
  const [activeId, setActiveId] = useState('studio')
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Scroll spy — jo section viewport mein ho usse highlight karo
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
            
            // Auto-scroll the sidebar on mobile when a new section is reached
            const activeButton = sidebarRef.current?.querySelector(`[data-id="${entry.target.id}"]`) as HTMLElement;
            if (activeButton && window.innerWidth < 1024) {
              activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
          }
        })
      },
      {
        rootMargin: '-20% 0px -70% 0px', 
        threshold: 0,
      }
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  // Sidebar click pe smooth scroll
  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id]
    if (el) {
      // Adjusted offset for mobile fixed header if any
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  return (
    <section className="bg-slate-50 py-24 px-4 md:px-8 lg:px-16 font-sans w-full">
      <div className="max-w-[1400px] mx-auto">

        {/* Heading */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] text-center mb-6 leading-tight tracking-tight">
            Our Full Spectrum of <span className="text-[#f5a623]">AI & Software</span> Services
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#f5a623] to-orange-400 rounded-full mb-6" />
          <p className="text-center text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We deliver end-to-end AI and software solutions, from automation to
            custom applications, driving innovation and business growth.
          </p>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start relative">

          {/* LEFT — Sticky Sidebar (Horizontal on Mobile, Vertical on Desktop) */}
          <div 
            ref={sidebarRef}
            className="w-full lg:w-80 flex-shrink-0 sticky top-24 z-20 
                       bg-[#0a1628] lg:rounded-2xl shadow-xl flex flex-row lg:flex-col 
                       overflow-x-auto lg:overflow-visible whitespace-nowrap lg:whitespace-normal 
                       [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                       rounded-xl p-2 lg:p-0"
          >
            {services.map((service) => (
              <button
                key={service.id}
                data-id={service.id}
                onClick={() => scrollToSection(service.id)}
                className={`flex-shrink-0 lg:w-full text-left px-5 py-4 lg:py-5 transition-all duration-300
                            lg:border-l-4 lg:border-b-0 border-b-4 lg:border-b-transparent
                            rounded-lg lg:rounded-none
                            ${activeId === service.id
                              ? 'bg-[#1a2f4e] border-[#f5a623] shadow-inner'
                              : 'border-transparent hover:bg-[#1a2f4e]/50'
                            }`}
              >
                <div className={`font-bold text-sm lg:text-base transition-colors
                               ${activeId === service.id ? 'text-white' : 'text-white/70'}`}>
                  {service.label}
                </div>
                <div className={`text-xs lg:text-sm mt-1 transition-colors
                               ${activeId === service.id ? 'text-[#f5a623]' : 'text-white/40'}`}>
                  {service.subtitle}
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT — Scrollable Content */}
          <div className="flex-1 flex flex-col gap-8 w-full">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                ref={(el) => { sectionRefs.current[service.id] = el }}
                className="bg-white rounded-3xl border border-slate-100 p-6 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 scroll-mt-36"
              >
                <h3 className="text-2xl font-bold text-[#0a1628] mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 mb-10 text-base leading-relaxed max-w-3xl">
                  {service.description}
                </p>

                {/* Items Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
                  {service.items.map((item) => {
                    const Icon = item.Icon

                    return (
                      <div
                        key={item.name}
                        className="group flex flex-col items-center text-center p-5 
                                   border border-slate-100 rounded-2xl bg-white
                                   hover:border-[#f5a623]/40 hover:shadow-lg hover:-translate-y-1
                                   transition-all duration-300 cursor-pointer"
                      >
                        {/* Icon Container with Background */}
                        <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-2xl bg-[#f5a623]/10 group-hover:bg-[#f5a623] transition-colors duration-300">
                          <Icon size={32} strokeWidth={1.5} className="text-[#f5a623] group-hover:text-white transition-colors duration-300" />
                        </div>

                        {/* Icon Label */}
                        <span className="text-sm font-semibold text-slate-700 leading-snug group-hover:text-[#0a1628] transition-colors duration-300">
                          {item.name}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}