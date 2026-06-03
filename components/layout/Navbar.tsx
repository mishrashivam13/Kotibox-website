'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Building2,
  ChevronDown,
  CreditCard,
  HeartPulse,
  ImageIcon,
  Lightbulb,
  Menu,
  MessageSquare,
  Mic2,
  Monitor,
  Radio,
  Shield,
  ShoppingBag,
  Smartphone,
  Sparkles,
  UtensilsCrossed,
  Users,
  UserSearch,
  Wand2,
  X,
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

// ─── Services Mega Menu Data ───────────────────────────────────────────────

const leftCategories = [
  {
    heading: 'Mobile App Development',
    items: [
      { label: 'Android App Development', href: '/services/android' },
      { label: 'iOS App Development', href: '/services/ios' },
      { label: 'Flutter Development', href: '/services/flutter' },
      { label: 'React Native App', href: '/services/react-native' },
      { label: 'Cross Platform App', href: '/services/cross-platform' },
    ],
  },
  {
    heading: 'Web Development',
    items: [
      { label: 'Custom Website Design', href: '/services/web-design' },
      { label: 'E-Commerce Website', href: '/services/ecommerce' },
      { label: 'CMS Development', href: '/services/cms' },
      { label: 'Progressive Web App', href: '/services/pwa' },
    ],
  },
  {
    heading: 'Digital Marketing',
    items: [
      { label: 'AEO & GEO Optimization', href: '/services/aeo-geo' },
      { label: 'Social Media Marketing', href: '/services/social-media' },
      { label: 'PPC Advertising', href: '/services/ppc' },
      { label: 'Content Marketing', href: '/services/content' },
    ],
  },
]

const rightPanels = [
  {
    title: 'AI Development',
    eyebrow: 'Custom AI Builds',
    description: 'Production-ready AI systems for customer support, automation, content, analytics, and operations.',
    accent: '#f5a623',
    href: '/services/ai',
    items: [
      { label: 'AI Chatbot Development', href: '/services/ai-chatbot', icon: Bot },
      { label: 'AI Automation', href: '/services/ai-automation', icon: Sparkles },
      { label: 'Machine Learning', href: '/services/machine-learning', icon: BrainCircuit },
      { label: 'AI Integration Services', href: '/services/ai-integration', icon: Monitor },
      { label: 'Generative AI Solutions', href: '/services/generative-ai', icon: Wand2 },
      { label: 'AI Consulting', href: '/services/ai-consulting', icon: Lightbulb },
    ],
  },
  {
    title: 'Ready-made Solutions',
    eyebrow: 'Already Built',
    description: 'Launch faster with polished web and app suites that can be customized around your brand.',
    accent: '#34d399',
    href: '/live-demo',
    items: [
      { label: 'AI Image Generation', href: '/products/ai-image-generation', icon: ImageIcon },
      { label: 'AI Voice Assistant', href: '/products/voice-ai', icon: Mic2 },
      { label: 'OTT Platform', href: '/products/ott-platform', icon: Monitor },
      { label: 'Voice Chat Room', href: '/products/voice-ai', icon: Radio },
      { label: 'AI Chatbot Suite', href: '/products/ai-chatbot', icon: MessageSquare },
      { label: 'Food Delivery Platform', href: '/products/food-delivery', icon: UtensilsCrossed },
      { label: 'AI Job Seeker Platform', href: '/products/job-seeker', icon: UserSearch },
      { label: 'E-Commerce Platform', href: '/live-demo/ecommerce-suite', icon: ShoppingBag },
      { label: 'CRM & Sales Automation', href: '/live-demo/crm-sales', icon: Users },
      { label: 'Digital Wallet & Payment', href: '/live-demo/digital-wallet', icon: CreditCard },
      { label: 'Telemedicine Platform', href: '/live-demo/telemedicine', icon: HeartPulse },
      { label: 'Business ERP Suite', href: '/live-demo/business-erp', icon: BarChart3 },
      { label: 'Security Monitoring', href: '/live-demo/security-monitoring', icon: Shield },
      { label: 'AI Agent Suite', href: '/live-demo/ai-agent-suite', icon: Bot },
      { label: 'Real Estate Platform', href: '/live-demo/real-estate-suite', icon: Building2 },
    ],
  },
]

// ─── Products Dropdown Data ────────────────────────────────────────────────

const productDropdownItems = [
  { title: 'Apps', prefix: 'KGT', href: '/products/apps', icon: Smartphone, iconColor: 'text-slate-600', textColor: 'text-slate-600', bgColor: 'bg-slate-100' },
  { title: 'Studio', prefix: 'KGT', href: '/products/studio', icon: Monitor, iconColor: 'text-[#f5a623]', textColor: 'text-[#f5a623]', bgColor: 'bg-[#f5a623]/10' },
  { title: 'Startup', prefix: 'KGT', href: '/products/startup', icon: Lightbulb, iconColor: 'text-[#31a8ff]', textColor: 'text-[#31a8ff]', bgColor: 'bg-[#31a8ff]/10' },
]

const navLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services', hasMegaMenu: true },
  { label: 'Industries', href: '/industries' },
  { label: 'Career', href: '/career' },
  { label: 'Live Demo', href: '/live-demo' },
  { label: 'Products', href: '/products', hasDropdown: true },
]

// ─── Services Mega Menu Component ─────────────────────────────────────────

function ServicesMegaMenu({ visible, onEnter, onLeave }: { visible: boolean; onEnter: () => void; onLeave: () => void }) {
  return (
    <div
      className="fixed left-1/2 top-20 z-40 w-[min(1060px,calc(100vw-32px))] transition-all duration-200 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        visibility: visible ? 'visible' : 'hidden',
        transform: visible ? 'translate(-50%, 0)' : 'translate(-50%, 8px)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_18px_55px_rgba(10,22,40,0.14)] ring-1 ring-slate-200/80 border-t-2 border-[#f5a623]">
        <div className="px-5 py-4">
          <div className="mb-3 flex items-center justify-between gap-4 rounded-xl bg-[#0a1628] px-4 py-2.5 text-white">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f5a623]">
                Explore Kotibox Services
              </p>
              <p className="mt-0.5 text-[14px] font-semibold leading-snug text-white/85">
                Custom development, AI engineering, and ready-to-launch digital suites in one place.
              </p>
            </div>
            <div className="hidden xl:flex items-center gap-2 text-[11px] font-bold text-white/70">
              {['AI-first', 'Web + App', 'Launch Ready'].map((tag) => (
                <span key={tag} className="rounded-full border border-white/15 px-2.5 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-[235px_1fr] items-start gap-4">

          {/* ── LEFT: Category navigation ── */}
          <div className="flex flex-col gap-2.5 border-r border-gray-100 pr-4">
            {leftCategories.map((cat) => (
              <div key={cat.heading}>
                <p className="text-[10px] font-semibold tracking-[0.15em] text-[#f5a623] uppercase mb-1.5">
                  {cat.heading}
                </p>
                <div className="flex flex-col">
                  {cat.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-2 rounded-lg px-2 py-1 text-[13.5px] font-normal text-slate-600 hover:bg-orange-50 hover:text-[#0a1628] transition-all duration-150"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#f5a623] transition-colors flex-shrink-0" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── RIGHT: Service panels ── */}
          <div className="grid grid-cols-2 items-start gap-3">
            {rightPanels.map((panel) => (
              <div
                key={panel.title}
                className="self-start rounded-xl p-3.5 border border-slate-100 bg-slate-50/60 hover:border-[#f5a623]/35 hover:bg-white hover:shadow-[0_18px_38px_rgba(10,22,40,0.08)] transition-all duration-200 group/panel"
              >
                <Link href={panel.href} className="flex items-start justify-between gap-3 mb-2.5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: panel.accent }}>
                      {panel.eyebrow}
                    </p>
                    <span className="mt-0.5 block text-[#0a1628] text-[17px] font-semibold leading-tight group-hover/panel:text-[#f5a623] transition-colors">
                      {panel.title}
                    </span>
                    <p className="mt-1 text-[12.5px] leading-snug text-slate-500">
                      {panel.description}
                    </p>
                  </div>
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-300 shadow-sm group-hover/panel:text-[#f5a623] group-hover/panel:translate-x-0.5 transition-all">
                    <ArrowRight size={15} />
                  </span>
                </Link>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-1.5">
                  {panel.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group/item flex min-h-[32px] items-center gap-2 rounded-lg border border-transparent bg-white px-2.5 py-1 text-[12.5px] font-medium leading-snug text-slate-600 hover:border-[#f5a623]/20 hover:text-[#0a1628] hover:shadow-sm transition-all"
                    >
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-slate-100 text-slate-500 group-hover/item:bg-[#f5a623]/10 group-hover/item:text-[#f5a623] transition-colors">
                        <item.icon size={13} />
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

// ─── Main Navbar ────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()
  const { openModal } = useModal()

  // Force solid navbar on any detail/inner page
  const solidNav = scrolled || servicesOpen
    || pathname.startsWith('/services')
    || pathname.startsWith('/live-demo')
    || pathname.startsWith('/products')
    || pathname.startsWith('/admin')

  const openServices = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    setServicesOpen(true)
  }

  const closeServices = () => {
    closeTimerRef.current = setTimeout(() => setServicesOpen(false), 120)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMobileDropdown(null)
    setServicesOpen(false)
  }, [pathname])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center
                      justify-between px-6 md:px-12 h-20 transition-all duration-300
                      ${solidNav
                        ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-gray-100'
                        : 'bg-transparent border-b border-white/10'
                      }`}>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo_Copy.png"
            alt="Kotibox Logo"
            width={160}
            height={50}
            priority
            className={`w-auto h-auto object-contain transition-all duration-500
                        ${!solidNav ? 'brightness-0 invert' : 'brightness-100'}`}
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6 h-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            /* ── Services: Mega Menu trigger ── */
            if (link.hasMegaMenu) {
              return (
                <div
                  key={link.label}
                  ref={servicesRef}
                  className="relative h-full flex items-center"
                  onMouseEnter={openServices}
                  onMouseLeave={closeServices}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1.5 py-2 text-[14px]
                               font-semibold tracking-wide transition-all relative cursor-default
                               ${solidNav ? 'text-[#0a1628]' : 'text-white/90'}`}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                    />
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#f5a623]
                                     transition-all duration-300
                                     ${isActive || servicesOpen ? 'w-full' : 'w-0'}`}
                    />
                  </button>
                  <ServicesMegaMenu visible={servicesOpen} onEnter={openServices} onLeave={closeServices} />
                </div>
              )
            }

            /* ── Products: Regular dropdown ── */
            if (link.hasDropdown) {
              return (
                <div key={link.label} className="relative group h-full flex items-center">
                  <button
                    type="button"
                    className={`flex items-center gap-1.5 py-2 text-[14px]
                               font-semibold tracking-wide transition-all relative cursor-default
                               ${solidNav ? 'text-[#0a1628]' : 'text-white/90'}`}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#f5a623]
                                     transition-all duration-300
                                     ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    />
                  </button>

                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2
                                  opacity-0 invisible group-hover:opacity-100
                                  group-hover:visible transition-all duration-200
                                  translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100
                                    p-3 flex flex-col gap-1 min-w-[200px]">
                      {productDropdownItems.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                                       hover:bg-gray-50 transition-colors"
                          >
                            <div className={`w-9 h-9 rounded-lg ${item.bgColor}
                                            flex items-center justify-center flex-shrink-0`}>
                              <Icon size={18} className={item.iconColor} />
                            </div>
                            <div>
                              <p className="text-[11px] text-gray-400 font-medium leading-none mb-0.5">
                                {item.prefix}
                              </p>
                              <p className={`text-[15px] font-semibold ${item.textColor} leading-none`}>
                                {item.title}
                              </p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            }

            /* ── Regular link ── */
            return (
              <div key={link.label} className="relative h-full flex items-center">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 py-2 text-[14px]
                             font-semibold tracking-wide transition-all relative
                             ${solidNav
                               ? isActive ? 'text-[#f5a623]' : 'text-[#0a1628]'
                               : isActive ? 'text-white' : 'text-white/90'
                             }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#f5a623]
                                   transition-all duration-300
                                   ${isActive ? 'w-full' : 'w-0 hover:w-full'}`}
                  />
                </Link>
              </div>
            )
          })}
        </div>

        {/* Desktop CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={openModal}
            className={`hidden lg:block px-7 py-2.5 rounded-full text-[15px]
                       font-semibold border-2 transition-all
                       ${solidNav
                         ? 'border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628] hover:text-white'
                         : 'border-white/80 text-white hover:bg-white/10'
                       }`}
          >
            Let's Talk AI
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden w-10 h-10 rounded-xl flex items-center
                       justify-center transition-all
                       ${solidNav
                         ? 'bg-gray-100 text-[#0a1628]'
                         : 'bg-white/10 text-white'
                       }`}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ─── Mobile Menu ─────────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          <div className="absolute top-0 right-0 h-full w-[300px]
                          bg-[#0a1628] shadow-2xl flex flex-col overflow-hidden z-[61]">

            <div className="flex items-center justify-between px-6 h-16
                            border-b border-white/10 flex-shrink-0">
              <Image
                src="/images/logo_Copy.png"
                alt="Kotibox"
                width={110}
                height={34}
                className="brightness-0 invert object-contain"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center
                           justify-center text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 px-4">
              <div className="flex flex-col gap-1">

                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  const isOpen = openMobileDropdown === link.label

                  /* ── Services: accordion with categories ── */
                  if (link.hasMegaMenu) {
                    return (
                      <div key={link.label}>
                        <button
                          onClick={() => setOpenMobileDropdown(isOpen ? null : link.label)}
                          className={`w-full flex items-center justify-between px-4 py-3.5
                                     rounded-xl text-base font-medium transition-all
                                     ${isActive ? 'bg-[#f5a623]/15 text-[#f5a623]' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
                        >
                          {link.label}
                          <ChevronDown
                            size={16}
                            className={`opacity-50 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>

                        {isOpen && (
                          <div className="mt-1 ml-2 flex flex-col gap-3 px-2 pb-2">
                            {/* Left categories */}
                            {leftCategories.map((cat) => (
                              <div key={cat.heading}>
                                <p className="text-[#f5a623] text-[11px] font-bold uppercase tracking-widest px-2 py-1.5">
                                  {cat.heading}
                                </p>
                                {cat.items.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/60 text-sm hover:text-white hover:bg-white/10 transition-all"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                            {/* Right panels as accordions */}
                            {rightPanels.map((panel) => (
                              <div key={panel.title}>
                                <p className="text-[#f5a623] text-[11px] font-bold uppercase tracking-widest px-2 py-1.5">
                                  {panel.title}
                                </p>
                                {panel.items.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/60 text-sm hover:text-white hover:bg-white/10 transition-all"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  }

                  /* ── Products: accordion ── */
                  if (link.hasDropdown) {
                    return (
                      <div key={link.label}>
                        <button
                          onClick={() => setOpenMobileDropdown(isOpen ? null : link.label)}
                          className={`w-full flex items-center justify-between px-4 py-3.5
                                     rounded-xl text-base font-medium transition-all
                                     ${isActive ? 'bg-[#f5a623]/15 text-[#f5a623]' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
                        >
                          {link.label}
                          <ChevronDown
                            size={16}
                            className={`opacity-50 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>

                        {isOpen && (
                          <div className="mt-1 ml-4 flex flex-col gap-1">
                            {productDropdownItems.map((item) => {
                              const Icon = item.icon
                              return (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  className="flex items-center gap-3 px-4 py-3
                                             rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                                >
                                  <div className={`w-8 h-8 rounded-lg ${item.bgColor}
                                                  flex items-center justify-center flex-shrink-0`}>
                                    <Icon size={16} className={item.iconColor} />
                                  </div>
                                  <div>
                                    <p className="text-[10px] text-white/40 leading-none mb-0.5">{item.prefix}</p>
                                    <p className={`text-sm font-semibold ${item.textColor} leading-none`}>{item.title}</p>
                                  </div>
                                </Link>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    )
                  }

                  /* ── Regular link ── */
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`flex items-center justify-between px-4 py-3.5
                                 rounded-xl text-base font-medium transition-all
                                 ${isActive
                                   ? 'bg-[#f5a623]/15 text-[#f5a623]'
                                   : 'text-white/80 hover:bg-white/10 hover:text-white'
                                 }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="p-6 border-t border-white/10 flex-shrink-0">
              <button
                onClick={() => { setMobileOpen(false); openModal() }}
                className="w-full block text-center py-3.5 rounded-xl
                           bg-[#f5a623] text-white font-bold text-base
                           hover:bg-[#e8950f] transition-all"
              >
                Let's Talk AI →
              </button>
              <p className="text-center text-white/30 text-xs mt-4">
                © 2025 Kotibox Global Technologies
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
