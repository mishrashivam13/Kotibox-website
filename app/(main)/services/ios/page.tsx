'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, ChevronUp,
  Smartphone, Code2, Layers, TestTube2, Settings,
  Shield, Zap, Globe, Star, Users, TrendingUp, Play,
  Monitor, Tablet, Watch, Tv2, Cpu, Database, Cloud,
  Paintbrush, BarChart3, Bell, Lock, RefreshCw, Package,
  Apple, Sparkles, Gauge, HeartHandshake
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const ACCENT = '#007aff'
const ACCENT_LIGHT = '#e8f2ff'

// --- Data -------------------------------------------------------------------

const stats = [
  { value: '300+', label: 'iOS Apps Launched', icon: Smartphone },
  { value: '4.9 Star', label: 'App Store Rating', icon: Star },
  { value: '100%', label: 'App Store Approval Rate', icon: Shield },
  { value: '8yrs', label: 'Swift Expertise', icon: TrendingUp },
]

const processSteps = [
  {
    step: '01', icon: Users,
    title: 'Discovery & Apple Platform Strategy',
    desc: 'We analyse your target audience, define Apple device targets (iPhone, iPad, Mac Catalyst, Apple Watch, Apple TV), and map the feature scope against App Store Review Guidelines from day one to prevent rejections later.',
    deliverables: ['User Persona & Journey Maps', 'Apple Platform Selection', 'Feature Scope Document', 'App Store Compliance Checklist'],
  },
  {
    step: '02', icon: Paintbrush,
    title: 'UI/UX Design Following Apple HIG',
    desc: 'Our designers follow Apple Human Interface Guidelines to produce pixel-perfect Figma designs with SF Symbols, native navigation patterns, Dynamic Type, and Dark Mode support, creating the premium feel iOS users expect.',
    deliverables: ['HIG-Compliant Wireframes', 'High-Fidelity Figma Designs', 'Dark Mode & Dynamic Type', 'Interactive Prototype'],
  },
  {
    step: '03', icon: Layers,
    title: 'Architecture & Technical Blueprint',
    desc: 'We architect using MVVM with SwiftUI or MVC with UIKit depending on iOS target, design Core Data schemas, plan CloudKit sync strategy, define API contracts, and set up Xcode Cloud CI/CD before writing feature code.',
    deliverables: ['Architecture Decision Record', 'Core Data / CloudKit Schema', 'API Contract Specification', 'Xcode Cloud CI Setup'],
  },
  {
    step: '04', icon: Code2,
    title: 'Agile Development in Swift',
    desc: 'Two-week sprints with bi-weekly TestFlight builds delivered to your team. We write Swift-first code using SwiftUI for modern UI, UIKit for complex custom components, and Swift Concurrency (async/await) for clean async code.',
    deliverables: ['TestFlight Beta Builds', 'Sprint Demo Sessions', 'Unit & UI Test Coverage', 'Code Review Reports'],
  },
  {
    step: '05', icon: TestTube2,
    title: 'QA on Real Apple Hardware',
    desc: 'Testing on physical iPhones, iPads, and simulators covering iPhone SE to iPhone 16 Pro Max. We run XCTest unit tests, XCUITest UI automation, Instruments performance profiling, and TestFlight beta with external testers.',
    deliverables: ['Device Matrix Test Report', 'Instruments Performance Report', 'TestFlight Beta Feedback', 'Accessibility Audit (VoiceOver)'],
  },
  {
    step: '06', icon: Shield,
    title: 'Security & Privacy Compliance',
    desc: 'We implement Apple Keychain for credential storage, App Transport Security (ATS), Privacy Manifests (required since May 2024), NSPermission strings, and ensure full GDPR/CCPA compliance in the privacy nutrition label.',
    deliverables: ['Privacy Manifest (PRIVACYINFO)', 'App Transport Security Config', 'Keychain Integration', 'Privacy Nutrition Label Setup'],
  },
  {
    step: '07', icon: Play,
    title: 'App Store Connect Submission',
    desc: 'End-to-end App Store submission management: ASO-optimized metadata, App Preview videos, screenshot sets for all device sizes, age rating, export compliance, phased release configuration, and handling Apple Review queries.',
    deliverables: ['ASO-Optimized App Listing', 'Screenshots (All Device Sizes)', 'App Preview Video', 'Phased Release Plan'],
  },
  {
    step: '08', icon: RefreshCw,
    title: 'Post-Launch Support & OS Updates',
    desc: 'Six months of post-launch support: crash analysis via Xcode Organizer and Firebase Crashlytics, iOS version compatibility updates (Apple releases major OS updates annually), user feedback iteration, and App Store rating management.',
    deliverables: ['Monthly Crash Reports', 'iOS Version Compatibility Updates', 'App Store Rating Strategy', 'Feature Iteration Sprints'],
  },
]

const techCategories = [
  {
    name: 'Languages', icon: Code2, color: '#007aff',
    techs: [
      { name: 'Swift', desc: 'Primary language. Type-safe, fast, expressive, and continuously improved by Apple.' },
      { name: 'SwiftUI', desc: 'Declarative UI framework for building native interfaces across all Apple platforms.' },
      { name: 'Objective-C', desc: 'For legacy codebase integration and low-level system API access.' },
    ],
  },
  {
    name: 'UI Frameworks', icon: Paintbrush, color: '#a78bfa',
    techs: [
      { name: 'SwiftUI', desc: 'Modern declarative UI -- previews, animations, and data binding out of the box.' },
      { name: 'UIKit', desc: 'Battle-tested view framework for complex custom components and enterprise apps.' },
      { name: 'SF Symbols', desc: "Apple's 5,000+ icon library with automatic weight, scale, and colour adaptations." },
    ],
  },
  {
    name: 'Architecture', icon: Layers, color: '#34d399',
    techs: [
      { name: 'MVVM + Combine', desc: "Model-View-ViewModel with Apple's Combine reactive framework for data flow." },
      { name: 'Clean Architecture', desc: 'Use Cases, Repositories, and Entities fully decoupled for testability.' },
      { name: 'Swift Concurrency', desc: 'async/await, actors, and structured concurrency replacing callback-hell.' },
    ],
  },
  {
    name: 'Data & Storage', icon: Database, color: '#f59e0b',
    techs: [
      { name: 'Core Data', desc: "Apple's ORM framework for complex local persistence with CloudKit sync." },
      { name: 'SwiftData', desc: 'New (iOS 17+) Swift-native data persistence using macros and observation.' },
      { name: 'CloudKit', desc: "Apple's iCloud sync for seamless data sync across all user devices." },
    ],
  },
  {
    name: 'Apple Ecosystem', icon: Sparkles, color: '#f472b6',
    techs: [
      { name: 'Apple Sign In', desc: 'Required for apps with third-party login. Privacy-first authentication.' },
      { name: 'Apple Pay', desc: 'Frictionless in-app payments with Face ID / Touch ID biometric confirmation.' },
      { name: 'StoreKit 2', desc: 'Modern In-App Purchase and Subscription management with async/await API.' },
    ],
  },
  {
    name: 'Testing', icon: TestTube2, color: '#f87171',
    techs: [
      { name: 'XCTest', desc: "Apple's official unit and integration testing framework built into Xcode." },
      { name: 'XCUITest', desc: 'UI automation testing that runs on real devices and simulators.' },
      { name: 'Instruments', desc: 'Apple profiling tool for memory leaks, CPU usage, and energy impact analysis.' },
    ],
  },
]

const deviceTypes = [
  { icon: Smartphone, name: 'iPhone', desc: 'Universal apps from iPhone SE (4.7") to iPhone 16 Pro Max (6.9") with Dynamic Island support.', count: 'SE to Pro Max' },
  { icon: Tablet, name: 'iPad', desc: 'Multitasking, split-view, Slide Over, and Apple Pencil support for iPad and iPad Pro.', count: 'All iPad models' },
  { icon: Monitor, name: 'Mac Catalyst', desc: 'Bring your iPad app to macOS with minimal extra code, reaching Mac App Store users.', count: 'macOS 11+' },
  { icon: Watch, name: 'Apple Watch', desc: 'watchOS companion apps with HealthKit, complications, and always-on display support.', count: 'Series 4 to Ultra 2' },
  { icon: Tv2, name: 'Apple TV', desc: 'tvOS apps for living-room streaming, gaming, and content discovery with Siri Remote.', count: 'tvOS 17+' },
  { icon: Cpu, name: 'CarPlay', desc: 'Driver-safe CarPlay apps for audio, navigation, and communication in the car.', count: 'iOS 16+ CarPlay' },
]

const appTypes = [
  { name: 'FinTech & Banking', icon: Lock, desc: 'Trading apps, digital wallets, KYC flows, Face ID auth, UPI/Apple Pay integration.' },
  { name: 'Healthcare & Fitness', icon: HeartHandshake, desc: 'HealthKit integration, ResearchKit studies, CareKit tracking, Apple Watch sync.' },
  { name: 'E-Commerce & Retail', icon: Package, desc: 'AR product try-on (ARKit), Apple Pay checkout, product discovery, loyalty programs.' },
  { name: 'EdTech & Learning', icon: Globe, desc: 'Video streaming, live classes, offline downloads, Apple Pencil annotations, quizzes.' },
  { name: 'Enterprise & Productivity', icon: BarChart3, desc: 'CRM mobile dashboards, approval workflows, document scanning, Sign In with Apple.' },
  { name: 'Social & Media', icon: Users, desc: 'Feeds, Stories, AirDrop sharing, FaceTime integration, encrypted messaging.' },
  { name: 'On-Demand Services', icon: Zap, desc: 'Real-time tracking maps (MapKit), push notifications (APNs), surge pricing, ETA.' },
  { name: 'Games & Entertainment', icon: Sparkles, desc: 'GameKit leaderboards, iCloud saves, ARKit AR games, In-App Purchases via StoreKit.' },
]

const features = [
  'Swift & SwiftUI Development',
  'UIKit for Complex Components',
  'Apple HIG Compliance',
  'iPhone & iPad Universal Apps',
  'Dark Mode & Dynamic Type',
  'Apple Sign In & Apple Pay',
  'In-App Purchases (StoreKit 2)',
  'Push Notifications (APNs)',
  'Core Data & CloudKit Sync',
  'HealthKit & WatchKit',
  'ARKit & RealityKit',
  'MapKit & Location Services',
  'Xcode Cloud CI/CD',
  'TestFlight Beta Distribution',
  'App Store Connect Submission',
  'Privacy Manifest (Required 2024)',
]

const faqs = [
  {
    question: 'How long does it take to build an iOS app?',
    answer: 'A simple MVP or utility app takes 6 to 10 weeks. A medium-complexity app with auth, payments, backend integration, and an admin panel takes 3 to 5 months. Complex apps with HealthKit, ARKit, or real-time features take 5 to 8+ months. We provide a detailed estimate after a free discovery call.',
  },
  {
    question: 'Do you build for iPhone only or iPad too?',
    answer: 'We build fully Universal apps that work on all iPhone and iPad models by default. We use adaptive layouts, split-view controllers, multitasking support, and Apple Pencil support so your app delivers the best experience on every screen size from iPhone SE to 12.9" iPad Pro.',
  },
  {
    question: 'What is the App Store approval rate for your submissions?',
    answer: 'We maintain a 100% App Store approval rate across our last 200+ submissions. We read Apple Review Guidelines before writing a single line of code, implement all required privacy manifests, and handle review queries within hours to prevent delays.',
  },
  {
    question: 'Do you support Apple Pay and In-App Purchases?',
    answer: 'Yes. We integrate Apple Pay for one-tap checkout, In-App Purchases for consumables, and Subscriptions via StoreKit 2 (the modern async/await API). We handle the full purchase lifecycle including receipt validation, subscription management, family sharing, and refund handling.',
  },
  {
    question: 'Can you integrate HealthKit and Apple Watch?',
    answer: 'Yes. We build companion WatchKit and watchOS apps with HealthKit data read/write, workout tracking, heart rate monitoring, sleep analysis, complications, and always-on display support. We also integrate ResearchKit for clinical study apps and CareKit for patient care management.',
  },
  {
    question: 'What privacy requirements does Apple enforce now?',
    answer: 'Since May 2024, Apple requires a Privacy Manifest file (PrivacyInfo.xcprivacy) declaring all third-party SDKs used and reasons for accessing privacy-sensitive APIs. We include this in every project and set up the complete privacy nutrition label in App Store Connect covering data collection, linking, and tracking practices.',
  },
  {
    question: 'Do you maintain the app for new iOS versions?',
    answer: 'Yes. Apple releases a major iOS update every September. Our 6-month post-launch support covers the first major iOS update compatibility. Annual maintenance plans are available that include iOS version updates, new iPhone hardware support (Dynamic Island, ProRes, etc.), and App Store policy compliance updates.',
  },
  {
    question: 'Can you migrate our existing Android app to iOS?',
    answer: 'Yes. We analyse your existing Android app and rebuild it natively in Swift with full iOS design guidelines compliance. We do not port or cross-compile the Android code -- we build a true iOS-native app that feels like it was designed specifically for iPhone and iPad from day one.',
  },
]

// --- Sub-components ---------------------------------------------------------

function SectionLabel({ text, color = ACCENT }: { text: string; color?: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-[2px] rounded-full" style={{ background: color }} />
      <span className="text-xs font-bold tracking-widest uppercase" style={{ color }}>{text}</span>
    </div>
  )
}

function FaqItem({ faq, index, open, onToggle }: {
  faq: { question: string; answer: string }
  index: number
  open: boolean
  onToggle: (i: number) => void
}) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? 'shadow-md' : 'border-gray-200'}`} style={open ? { borderColor: `${ACCENT}50` } : {}}>
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-[#0a1628] font-semibold text-sm md:text-base pr-4">{faq.question}</span>
        {open
          ? <ChevronUp size={18} style={{ color: ACCENT }} className="flex-shrink-0" />
          : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
          {faq.answer}
        </div>
      )}
    </div>
  )
}

// --- Main Page --------------------------------------------------------------

export default function IosPage() {
  const { openModal } = useModal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d1f38 60%, #0a1628 100%)' }}>
        {/* Subtle radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-[0.07] blur-[120px]" style={{ background: ACCENT }} />
        {/* Dots pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(#007aff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-32 pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium bg-white/8 backdrop-blur-sm border border-white/15 px-4 py-2 rounded-full transition-colors mb-10"
          >
            <ArrowLeft size={15} /> Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-xs font-extrabold tracking-wider uppercase"
                  style={{ background: ACCENT }}
                >
                  <Smartphone size={12} /> iOS Development
                </span>
                <span className="text-white/40 text-sm">Mobile App Development</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.06] mb-6">
                iOS App<br />
                <span style={{ color: ACCENT }}>Development</span><br />
                Services
              </h1>

              <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
                Premium iPhone and iPad applications built in Swift &amp; SwiftUI, designed to Apple&apos;s Human Interface Guidelines. 100% App Store approval rate across 300+ launched apps.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {['Swift & SwiftUI', 'Apple HIG', 'UIKit', 'Core Data', 'Apple Pay', 'App Store'].map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full border" style={{ borderColor: `${ACCENT}50`, color: ACCENT, background: `${ACCENT}12` }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all shadow-lg"
                  style={{ background: ACCENT }}
                >
                  Get Free Consultation <ArrowRight size={16} />
                </button>
                <Link
                  href="/live-demo"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white border border-white/20 hover:bg-white/10 transition-all"
                >
                  View Our Apps <Play size={14} />
                </Link>
              </div>
            </div>

            {/* Right -- iPhone mockup card */}
            <div className="relative hidden lg:flex justify-center items-center">
              {/* Glow behind card */}
              <div className="absolute w-72 h-72 rounded-full blur-[80px] opacity-20" style={{ background: ACCENT }} />

              <div className="relative z-10 w-80">
                {/* Phone shell */}
                <div className="bg-[#1c1c1e] rounded-[44px] p-3 shadow-2xl border border-white/10">
                  {/* Screen */}
                  <div className="bg-white rounded-[36px] overflow-hidden">
                    {/* Dynamic Island */}
                    <div className="flex justify-center pt-3 pb-1">
                      <div className="w-28 h-7 bg-[#1c1c1e] rounded-full" />
                    </div>
                    {/* App screen content */}
                    <div className="px-4 pb-6 pt-2">
                      <div className="text-[10px] text-gray-400 mb-2 font-medium">9:41 AM</div>
                      <div className="bg-[#f2f2f7] rounded-2xl p-3 mb-3">
                        <div className="text-[11px] font-bold text-[#0a1628] mb-1">Project Dashboard</div>
                        {[
                          { label: 'Architecture', val: 'MVVM + Combine', pct: 100 },
                          { label: 'UI Framework', val: 'SwiftUI', pct: 90 },
                          { label: 'Test Coverage', val: '94%', pct: 94 },
                        ].map(r => (
                          <div key={r.label} className="mb-2">
                            <div className="flex justify-between text-[9px] mb-0.5">
                              <span className="text-gray-500">{r.label}</span>
                              <span className="font-semibold text-[#0a1628]">{r.val}</span>
                            </div>
                            <div className="h-1 bg-gray-300 rounded-full overflow-hidden">
                              <div className="h-full rounded-full" style={{ width: `${r.pct}%`, background: ACCENT }} />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { val: '300+', lbl: 'Apps Launched' },
                          { val: '4.9', lbl: 'App Store Rating' },
                          { val: '100%', lbl: 'Approval Rate' },
                          { val: '8yrs', lbl: 'Swift Expertise' },
                        ].map(m => (
                          <div key={m.lbl} className="bg-[#f2f2f7] rounded-xl p-2 text-center">
                            <div className="text-sm font-black" style={{ color: ACCENT }}>{m.val}</div>
                            <div className="text-[8px] text-gray-500 mt-0.5">{m.lbl}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Home indicator */}
                    <div className="flex justify-center pb-2">
                      <div className="w-24 h-1 bg-[#1c1c1e] rounded-full" />
                    </div>
                  </div>
                </div>
                {/* Badge */}
                <div className="absolute -top-4 -right-6 bg-[#0a1628] border rounded-2xl px-4 py-2.5 shadow-xl" style={{ borderColor: `${ACCENT}40` }}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
                    <span className="text-white text-xs font-semibold">Apple HIG Compliant</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-6 bg-[#0a1628] border rounded-2xl px-4 py-2.5 shadow-xl" style={{ borderColor: `${ACCENT}40` }}>
                  <div className="text-white text-xs font-semibold">100% App Store Approved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: '#0d1f38', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="flex flex-col items-center text-center py-4 px-4">
                  <Icon size={18} className="mb-2 opacity-60" style={{ color: ACCENT }} />
                  <div className="text-2xl md:text-3xl font-black" style={{ color: ACCENT }}>{s.value}</div>
                  <div className="text-white/45 text-xs mt-1 leading-snug">{s.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

        {/* Overview */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="Why iOS?" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                The Premium Platform with the Highest-Value Users
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                iPhone users spend <strong className="text-[#0a1628]">2x more on apps</strong> than Android users. The App Store generates over $100 billion in annual developer revenue. iOS users skew toward higher-income demographics in the US, UK, Australia, Japan, and Europe -- the markets where revenue per user is highest.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                At Kotibox we have delivered 300+ iOS applications with a 100% App Store approval rate. Every app is built Apple-native in Swift with no cross-platform shortcuts, delivering the performance and polish that keeps users coming back and leaving 5-star reviews.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '27.6%', label: 'Global Smartphone Share' },
                  { value: '1.5B', label: 'Active iPhone Users' },
                  { value: '$100B+', label: 'App Store Annual Revenue' },
                  { value: '2x', label: 'Higher Spend vs Android' },
                ].map((m, i) => (
                  <div key={i} className="rounded-2xl p-5 border border-gray-100" style={{ background: ACCENT_LIGHT }}>
                    <div className="text-2xl font-black mb-1" style={{ color: ACCENT }}>{m.value}</div>
                    <div className="text-gray-500 text-sm">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&q=80"
                alt="iOS Development"
                className="rounded-3xl w-full h-72 object-cover shadow-xl"
              />
              <div className="border-l-4 rounded-r-2xl px-5 py-4" style={{ borderLeftColor: ACCENT, background: ACCENT_LIGHT }}>
                <p className="text-blue-900 text-sm leading-relaxed">
                  <strong>Kotibox Insight:</strong> Apps built natively in SwiftUI with MVVM+Combine architecture load 35% faster, consume 25% less battery, and receive significantly better App Store editorial consideration than cross-platform alternatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What is Included */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="What's Included" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Complete iOS Development Package
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Every iOS project comes end-to-end with no hidden extras or surprise costs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 border border-gray-100 rounded-xl px-4 py-3.5" style={{ background: ACCENT_LIGHT }}>
                <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <span className="text-gray-700 text-sm font-medium leading-snug">{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Our Process" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            8-Step iOS Development Process
          </h2>
          <p className="text-gray-500 text-base mb-14 max-w-2xl">
            Apple-certified, structured delivery from first conversation to the App Store charts.
          </p>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-100 hidden md:block" />
            <div className="flex flex-col gap-0">
              {processSteps.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={i} className="relative flex gap-8 md:gap-12 pb-12 last:pb-0">
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg"
                        style={{ background: ACCENT }}
                      >
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1 border border-gray-100 rounded-2xl p-6 md:p-8 transition-all hover:shadow-md" style={{ background: ACCENT_LIGHT }}>
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${ACCENT}20` }}>
                          <Icon size={18} style={{ color: ACCENT }} />
                        </div>
                        <h3 className="text-[#0a1628] font-bold text-lg leading-snug pt-1">{step.title}</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">{step.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map(d => (
                          <span key={d} className="text-xs font-semibold px-3 py-1.5 rounded-full text-blue-800" style={{ background: `${ACCENT}20` }}>
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Technology Ecosystem */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Technology Stack" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            The iOS Tech Ecosystem We Master
          </h2>
          <p className="text-gray-500 text-base mb-14 max-w-2xl">
            We use Apple-first frameworks and tools, staying current with every WWDC announcement and Swift language release.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((cat, i) => {
              const CatIcon = cat.icon
              return (
                <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                  <div className="px-6 py-4 flex items-center gap-3" style={{ background: `${cat.color}10`, borderBottom: `1px solid ${cat.color}20` }}>
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${cat.color}20` }}>
                      <CatIcon size={16} style={{ color: cat.color }} />
                    </div>
                    <span className="font-bold text-[#0a1628] text-sm tracking-wide">{cat.name}</span>
                  </div>
                  <div className="p-4 flex flex-col gap-4">
                    {cat.techs.map(tech => (
                      <div key={tech.name} className="flex gap-3">
                        <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: cat.color }} />
                        <div>
                          <div className="text-[#0a1628] font-semibold text-sm">{tech.name}</div>
                          <div className="text-gray-400 text-xs leading-relaxed mt-0.5">{tech.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* UX + Devices */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel text="User Experience" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                Apple HIG &mdash; The Gold Standard in Mobile UX
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                Apple&apos;s Human Interface Guidelines are the strictest design standard in mobile. We follow them not just to pass App Review, but because HIG-compliant apps feel immediately familiar to iPhone users, reducing learning curves and increasing retention.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'SF Symbols & San Francisco Font', desc: "Apple's 5,000+ SF Symbols automatically adapt their weight, size, and colour to match your app's style. The system San Francisco font renders perfectly at every size." },
                  { title: 'Dynamic Type & Accessibility', desc: 'Full VoiceOver support, Dynamic Type scaling up to AX5, minimum 44pt touch targets, and Reduce Motion alternatives for every animation.' },
                  { title: 'Dark Mode & Adaptive Colours', desc: "Every screen supports Dark Mode using Apple's semantic colour system, ensuring your app looks right at any system appearance." },
                  { title: 'Native Navigation Patterns', desc: 'UINavigationController hierarchies, UITabBarController, sheets, and popovers that feel instantly familiar to any iPhone user.' },
                  { title: 'Haptic Feedback', desc: 'Contextual haptic feedback via Core Haptics and UIFeedbackGenerator that adds a tactile layer to interactions without feeling gimmicky.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 border border-gray-100 rounded-xl" style={{ background: ACCENT_LIGHT }}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-[10px] font-black" style={{ background: ACCENT }}>
                      {i + 1}
                    </div>
                    <div>
                      <div className="text-[#0a1628] font-bold text-sm mb-1">{item.title}</div>
                      <div className="text-gray-500 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel text="Apple Device Coverage" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                One App. Every Apple Device.
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {deviceTypes.map((d, i) => {
                  const Icon = d.icon
                  return (
                    <div key={i} className="border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-all group" style={{ background: 'white' }}>
                      <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-3" style={{ background: `${ACCENT}15` }}>
                        <Icon size={20} style={{ color: ACCENT }} />
                      </div>
                      <h4 className="text-[#0a1628] font-bold text-sm mb-1">{d.name}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed mb-3">{d.desc}</p>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-blue-800" style={{ background: `${ACCENT}18` }}>
                        {d.count}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Industries We Serve" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            iOS Apps Across Every Industry
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            We have shipped production iOS apps in 12+ verticals, each with platform-specific integrations like HealthKit, ARKit, and StoreKit.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {appTypes.map((app, i) => {
              const Icon = app.icon
              return (
                <div key={i} className="group border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${ACCENT}12` }}>
                    <Icon size={20} style={{ color: ACCENT }} />
                  </div>
                  <h4 className="text-[#0a1628] font-bold text-sm mb-2 transition-colors group-hover:text-[#007aff]">{app.name}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{app.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Key Advantages */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Key Advantages" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-12 leading-tight">
            Why Choose Kotibox for iOS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: '100% App Store Approval',
                desc: 'We read App Review Guidelines before writing code, implement Privacy Manifests, and handle review queries within hours. Zero rejections in our last 200+ submissions.',
              },
              {
                icon: Layers,
                title: 'Pure Swift Native',
                desc: 'We never use cross-platform shortcuts. Every app is written in Swift with native SwiftUI or UIKit for the performance and polish iPhone users expect and Apple rewards.',
              },
              {
                icon: Bell,
                title: '6-Month Post-Launch Support',
                desc: 'Apple releases a major iOS update every September. We stay for 6 months covering the first major iOS version update, new hardware support, and App Store policy changes.',
              },
              {
                icon: Gauge,
                title: 'Performance Tuned with Instruments',
                desc: 'Every release is profiled with Xcode Instruments targeting sub-300ms cold start, zero memory leaks, and energy impact that Apple classifies as "Low" in the battery report.',
              },
              {
                icon: Lock,
                title: 'Privacy-First Architecture',
                desc: 'Apple Keychain for credentials, Privacy Manifests (required since May 2024), minimal permission requests, and privacy nutrition labels that build user trust from the App Store listing.',
              },
              {
                icon: Settings,
                title: 'Xcode Cloud CI/CD Included',
                desc: 'Automated build, test, and TestFlight distribution pipeline using Xcode Cloud from day one. Every commit triggers unit tests; every sprint delivers a new TestFlight build to your team.',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="rounded-2xl p-6 border border-t-4" style={{ borderTopColor: ACCENT, borderColor: '#e5e7eb', background: ACCENT_LIGHT }}>
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${ACCENT}20` }}>
                    <Icon size={20} style={{ color: ACCENT }} />
                  </div>
                  <h4 className="text-[#0a1628] font-bold text-base mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Resources & Tooling" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            iOS Development Resources We Use
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Our team attends WWDC annually, runs the iOS Beta program on developer devices, and reads every Swift Evolution proposal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Official Apple Resources',
                color: ACCENT,
                items: [
                  'Apple Developer Documentation (developer.apple.com)',
                  'Human Interface Guidelines (HIG)',
                  'Swift Language & Swift Evolution Proposals',
                  'Xcode 15 & Xcode Cloud',
                  'App Store Connect & App Review Guidelines',
                  'WWDC Session Videos (annual attendance)',
                ],
              },
              {
                category: 'Quality & Performance',
                color: '#34d399',
                items: [
                  'Xcode Instruments (CPU, Memory, Energy)',
                  'Firebase Crashlytics (crash-free monitoring)',
                  'TestFlight (internal & external beta)',
                  'XCTest & XCUITest automation',
                  'SwiftLint (code style enforcement)',
                  'App Store Connect Analytics',
                ],
              },
              {
                category: 'Development & CI/CD',
                color: '#a78bfa',
                items: [
                  'Xcode Cloud (Apple native CI/CD)',
                  'Fastlane (App Store automated delivery)',
                  'GitHub / Bitbucket with PR workflows',
                  'Figma (design handoff with Dev Mode)',
                  'TestFlight automated build distribution',
                  'Slack build status notifications',
                ],
              },
              {
                category: 'Security & Privacy',
                color: '#f87171',
                items: [
                  'Apple Keychain Services API',
                  'Privacy Manifest (PrivacyInfo.xcprivacy)',
                  'App Transport Security (ATS) config',
                  'OWASP Mobile Security Testing Guide',
                  'GDPR & App Privacy Nutrition Label',
                  'Play Integrity equivalent: DeviceCheck API',
                ],
              },
              {
                category: 'Apple Platform SDKs',
                color: '#f59e0b',
                items: [
                  'HealthKit & ResearchKit & CareKit',
                  'ARKit & RealityKit (Augmented Reality)',
                  'Core ML & Create ML (on-device AI)',
                  'MapKit & Core Location',
                  'StoreKit 2 (IAP & Subscriptions)',
                  'Push Notifications (APNs + UNUserNotificationCenter)',
                ],
              },
              {
                category: 'Distribution & Analytics',
                color: '#f472b6',
                items: [
                  'App Store (primary distribution)',
                  'TestFlight (up to 10,000 beta testers)',
                  'Firebase Analytics & Crashlytics',
                  'Mixpanel / Amplitude for user analytics',
                  'App Store Optimization (ASO)',
                  'A/B testing via Firebase Remote Config',
                ],
              },
            ].map((group, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className="px-5 py-4 font-bold text-sm text-[#0a1628] border-b border-gray-100" style={{ background: `${group.color}10` }}>
                  {group.category}
                </div>
                <div className="p-5 space-y-2.5">
                  {group.items.map(item => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: group.color }} />
                      <span className="text-gray-500 text-xs leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 border-b border-gray-100">
          <div className="rounded-3xl overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2157 100%)' }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-[100px]" style={{ background: ACCENT }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-8 blur-[80px]" style={{ background: '#a78bfa' }} />
            <div className="relative px-8 md:px-16 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Free Consultation Available</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Ready to Build Your<br />
                  <span style={{ color: ACCENT }}>iOS App?</span>
                </h2>
                <p className="text-white/55 text-base max-w-lg">
                  Talk to our iOS team and get a detailed project estimate, architecture recommendation, and App Store strategy within 24 hours. No obligation.
                </p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <button
                  onClick={openModal}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white hover:opacity-90 transition-all text-sm whitespace-nowrap"
                  style={{ background: ACCENT }}
                >
                  Get Free Consultation <ArrowRight size={16} />
                </button>
                <Link
                  href="/live-demo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/80 border border-white/20 hover:bg-white/10 transition-all text-sm"
                >
                  See iOS Projects <Play size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <SectionLabel text="FAQs" />
            <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-base mb-10">
              Everything you need to know before starting your iOS project.
            </p>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <FaqItem
                  key={i}
                  faq={faq}
                  index={i}
                  open={openFaq === i}
                  onToggle={(idx) => setOpenFaq(openFaq === idx ? null : idx)}
                />
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* Related Services */}
      <section className="bg-[#f8fafc] py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <SectionLabel text="Explore More" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3">Related Services</h2>
          <p className="text-gray-500 text-base mb-10">Complete your mobile strategy with our other development services.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { slug: 'android', tag: 'Android', title: 'Android App Development', desc: 'Kotlin & Jetpack Compose apps reaching 3.9B Android users worldwide.', color: '#3ddc84', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80' },
              { slug: 'flutter', tag: 'Flutter', title: 'Flutter App Development', desc: 'One codebase for Android, iOS, Web, and Desktop with native performance.', color: '#54c5f8', img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80' },
              { slug: 'react-native', tag: 'React Native', title: 'React Native Development', desc: 'Cross-platform apps with JavaScript and near-native performance.', color: '#61dafb', img: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600&q=80' },
              { slug: 'cross-platform', tag: 'Cross Platform', title: 'Cross Platform Apps', desc: 'Deploy on every platform from a single shared codebase.', color: '#a855f7', img: 'https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?w=600&q=80' },
            ].map(s => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
              >
                <div className="h-40 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-3" style={{ background: s.color }}>
                    {s.tag}
                  </span>
                  <h3 className="font-bold text-[#0a1628] group-hover:opacity-80 transition-opacity mb-1.5 text-sm leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-4">{s.desc}</p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: s.color }}>
                    Explore <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
