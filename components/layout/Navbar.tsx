'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { ChevronDown, Smartphone, Monitor, Lightbulb, Menu, X, ChevronRight, ArrowRight } from 'lucide-react'
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
      { label: 'SEO Optimization', href: '/services/seo' },
      { label: 'Social Media Marketing', href: '/services/social-media' },
      { label: 'PPC Advertising', href: '/services/ppc' },
      { label: 'Content Marketing', href: '/services/content' },
    ],
  },
]

const rightPanels = [
  {
    title: 'AI Development',
    accent: '#f5a623',
    href: '/services/ai',
    items: [
      'AI Chatbot Development',
      'AI Automation',
      'Machine Learning',
      'AI Integration Services',
      'Generative AI Solutions',
      'AI Consulting',
    ],
  },
  {
    title: 'Ready-made Solutions',
    accent: '#34d399',
    href: '/products',
    items: [
      'KGT Apps Suite',
      'Startup Bundle',
      'E-Commerce Platform',
      'CRM Dashboard',
      'On-Demand App',
      'Hospital Management',
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
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Live Demo', href: '/live-demo' },
  { label: 'Products', href: '/products', hasDropdown: true },
]

// ─── Services Mega Menu Component ─────────────────────────────────────────

function ServicesMegaMenu({ visible, onEnter, onLeave }: { visible: boolean; onEnter: () => void; onLeave: () => void }) {
  return (
    <div
      className="fixed left-0 right-0 top-20 z-40 transition-all duration-200 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        visibility: visible ? 'visible' : 'hidden',
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)] border-t-2 border-[#f5a623]">
        <div className="max-w-[1300px] mx-auto px-8 py-7 grid grid-cols-[280px_1fr] gap-8">

          {/* ── LEFT: Category navigation ── */}
          <div className="flex flex-col gap-5 border-r border-gray-100 pr-8">
            {leftCategories.map((cat) => (
              <div key={cat.heading}>
                <p className="text-[10px] font-extrabold tracking-[0.18em] text-[#f5a623] uppercase mb-2">
                  {cat.heading}
                </p>
                <div className="flex flex-col">
                  {cat.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-2 text-[13px] text-gray-500 hover:text-[#0a1628] py-1.5 transition-colors duration-150"
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
          <div className="grid grid-cols-2 gap-4">
            {rightPanels.map((panel) => (
              <div
                key={panel.title}
                className="rounded-xl p-5 border border-gray-100 hover:border-[#f5a623]/25 hover:bg-orange-50/50 transition-all duration-200 group/panel"
              >
                <Link href={panel.href} className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: panel.accent }} />
                    <span className="text-[#0a1628] text-sm font-extrabold group-hover/panel:text-[#f5a623] transition-colors">
                      {panel.title}
                    </span>
                  </div>
                  <ArrowRight size={14} className="text-gray-300 group-hover/panel:text-[#f5a623] group-hover/panel:translate-x-0.5 transition-all" />
                </Link>

                <div className="flex flex-col">
                  {panel.items.map((item) => (
                    <Link
                      key={item}
                      href={panel.href}
                      className="text-[12.5px] text-gray-400 hover:text-[#0a1628] py-1 transition-colors leading-snug"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
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
                      ${scrolled
                        ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-b border-gray-100'
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
                        ${!scrolled ? 'brightness-0 invert' : 'brightness-100'}`}
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
                    className={`flex items-center gap-1.5 py-2 text-[15px]
                               font-medium transition-all relative cursor-default
                               ${scrolled ? 'text-[#0a1628]' : 'text-white/90'}`}
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
                    className={`flex items-center gap-1.5 py-2 text-[15px]
                               font-medium transition-all relative cursor-default
                               ${scrolled ? 'text-[#0a1628]' : 'text-white/90'}`}
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
                  className={`flex items-center gap-1.5 py-2 text-[15px]
                             font-medium transition-all relative
                             ${scrolled
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
                       font-bold border-2 transition-all
                       ${scrolled
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
                       ${scrolled
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
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          <div className="absolute top-0 right-0 h-full w-[300px]
                          bg-[#0a1628] shadow-2xl flex flex-col overflow-hidden">

            <div className="flex items-center justify-between px-6 h-20
                            border-b border-white/10 flex-shrink-0">
              <Image
                src="/images/logo_Copy.png"
                alt="Kotibox"
                width={120}
                height={38}
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
                                    key={item}
                                    href={panel.href}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/60 text-sm hover:text-white hover:bg-white/10 transition-all"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                                    {item}
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
