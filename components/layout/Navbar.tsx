'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { ChevronDown, Smartphone, Monitor, Lightbulb, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Industries', href: '/industries' },
  { label: 'Career', href: '/career' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Live Demo', href: '/live-demo' },
  {
    label: 'Products',
    href: '/products',
    hasDropdown: true,
    dropdownItems: [
      { title: 'Apps', prefix: 'KGT', href: '/products/apps', icon: Smartphone, iconColor: 'text-slate-600', textColor: 'text-slate-600', bgColor: 'bg-slate-100' },
      { title: 'Studio', prefix: 'KGT', href: '/products/studio', icon: Monitor, iconColor: 'text-[#f5a623]', textColor: 'text-[#f5a623]', bgColor: 'bg-[#f5a623]/10' },
      { title: 'Startup', prefix: 'KGT', href: '/products/startup', icon: Lightbulb, iconColor: 'text-[#31a8ff]', textColor: 'text-[#31a8ff]', bgColor: 'bg-[#31a8ff]/10' },
    ]
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMobileDropdown(null)
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
            return (
              <div
                key={link.label}
                className="relative group h-full flex items-center"
              >
                {link.hasDropdown ? (
                  <>
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

                    {/* ✅ Dropdown Panel */}
                    {link.dropdownItems && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2
                                      opacity-0 invisible group-hover:opacity-100 
                                      group-hover:visible transition-all duration-200
                                      translate-y-2 group-hover:translate-y-0">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 
                                        p-3 flex flex-col gap-1 min-w-[200px]">
                          {link.dropdownItems.map((item) => {
                            const Icon = item.icon
                            return (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                                           hover:bg-gray-50 transition-colors group/item"
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
                    )}
                  </>
                ) : (
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
                )}
              </div>
            )
          })}
        </div>

        {/* Desktop CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={`hidden lg:block px-7 py-2.5 rounded-full text-[15px] 
                       font-bold border-2 transition-all
                       ${scrolled
                         ? 'border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628] hover:text-white'
                         : 'border-white/80 text-white hover:bg-white/10'
                       }`}
          >
            Let's Talk AI
          </Link>

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

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          <div className="absolute top-0 right-0 h-full w-[280px] 
                          bg-[#0a1628] shadow-2xl flex flex-col">

            <div className="flex items-center justify-between px-6 h-20 
                            border-b border-white/10">
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

            <div className="flex-1 overflow-y-auto py-6 px-6">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  const isDropdownOpen = openMobileDropdown === link.label

                  return (
                    <div key={link.label}>
                      {link.dropdownItems ? (
                        <>
                          {/* ✅ Mobile: Toggle dropdown */}
                          <button
                            onClick={() =>
                              setOpenMobileDropdown(isDropdownOpen ? null : link.label)
                            }
                            className={`w-full flex items-center justify-between px-4 py-3.5 
                                       rounded-xl text-base font-medium transition-all
                                       ${isActive
                                         ? 'bg-[#f5a623]/15 text-[#f5a623]'
                                         : 'text-white/80 hover:bg-white/10 hover:text-white'
                                       }`}
                          >
                            {link.label}
                            <ChevronDown
                              size={16}
                              className={`opacity-50 transition-transform duration-200
                                         ${isDropdownOpen ? 'rotate-180' : ''}`}
                            />
                          </button>

                          {/* ✅ Mobile dropdown items */}
                          {isDropdownOpen && (
                            <div className="mt-1 ml-4 flex flex-col gap-1">
                              {link.dropdownItems.map((item) => {
                                const Icon = item.icon
                                return (
                                  <Link
                                    key={item.title}
                                    href={item.href}
                                    className="flex items-center gap-3 px-4 py-3 
                                               rounded-xl bg-white/5 hover:bg-white/10 
                                               transition-colors"
                                  >
                                    <div className={`w-8 h-8 rounded-lg ${item.bgColor} 
                                                    flex items-center justify-center flex-shrink-0`}>
                                      <Icon size={16} className={item.iconColor} />
                                    </div>
                                    <div>
                                      <p className="text-[10px] text-white/40 leading-none mb-0.5">
                                        {item.prefix}
                                      </p>
                                      <p className={`text-sm font-semibold ${item.textColor} leading-none`}>
                                        {item.title}
                                      </p>
                                    </div>
                                  </Link>
                                )
                              })}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          className={`flex items-center justify-between px-4 py-3.5 
                                     rounded-xl text-base font-medium transition-all
                                     ${isActive
                                       ? 'bg-[#f5a623]/15 text-[#f5a623]'
                                       : 'text-white/80 hover:bg-white/10 hover:text-white'
                                     }`}
                        >
                          {link.label}
                          {link.hasDropdown && (
                            <ChevronDown size={16} className="opacity-50" />
                          )}
                        </Link>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="p-6 border-t border-white/10">
              <Link
                href="/contact"
                className="w-full block text-center py-3.5 rounded-xl 
                           bg-[#f5a623] text-white font-bold text-base
                           hover:bg-[#e8950f] transition-all"
              >
                Let's Talk AI →
              </Link>
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