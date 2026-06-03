'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, ChevronUp,
  Smartphone, Code2, Layers, TestTube2, Settings,
  Shield, Zap, Globe, Star, Users, TrendingUp, Play,
  Monitor, Tablet, Watch, Tv2, Cpu, Database, Cloud,
  Paintbrush, BarChart3, Bell, Lock, RefreshCw, Package
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const ACCENT = '#3ddc84'

// --- Data -------------------------------------------------------------------

const stats = [
  { value: '500+', label: 'Android Apps Delivered', icon: Smartphone },
  { value: '4.8 Star', label: 'Avg Play Store Rating', icon: Star },
  { value: '99%', label: 'Client Retention Rate', icon: Users },
  { value: '6yrs', label: 'Android Expertise', icon: TrendingUp },
]

const processSteps = [
  {
    step: '01', icon: Users,
    title: 'Discovery & Requirement Analysis',
    desc: 'We begin with deep stakeholder interviews, user research, and competitive analysis. We define personas, map user journeys, establish KPIs, and lock down the feature scope so every subsequent decision is grounded in clear business goals.',
    deliverables: ['User Persona Documents', 'Feature Priority Matrix', 'Technical Feasibility Report', 'Project Timeline & Budget'],
  },
  {
    step: '02', icon: Paintbrush,
    title: 'UI/UX Design & Prototyping',
    desc: 'Our designers create wireframes and high-fidelity Figma prototypes following Material Design 3 guidelines. We iterate with interactive clickable prototypes before any code is written, saving revision cycles in development.',
    deliverables: ['Wireframes (Low-fi)', 'High-fidelity Figma Designs', 'Clickable Prototype', 'Design System & Components'],
  },
  {
    step: '03', icon: Layers,
    title: 'Architecture & Technical Planning',
    desc: 'We define the app architecture (MVVM + Clean Architecture), select the right tech stack, design the database schema, plan API contracts, and set up CI/CD pipelines before writing a single line of feature code.',
    deliverables: ['Architecture Diagram', 'API Contract Docs', 'Database Schema', 'CI/CD Pipeline Setup'],
  },
  {
    step: '04', icon: Code2,
    title: 'Agile Development (Sprints)',
    desc: 'Two-week sprint cycles with daily standups and weekly demo sessions. We build feature by feature with full test coverage, using Kotlin as the primary language with Jetpack Compose for modern declarative UI.',
    deliverables: ['Sprint Demo Recordings', 'Feature Branches & PRs', 'Unit & Integration Tests', 'Code Review Reports'],
  },
  {
    step: '05', icon: TestTube2,
    title: 'QA & Multi-Device Testing',
    desc: 'Rigorous testing across 50+ real devices via Firebase Test Lab. We run unit tests, integration tests, UI automation (Espresso), performance profiling, battery usage analysis, and accessibility audits.',
    deliverables: ['Test Reports (All Devices)', 'Performance Benchmark', 'Accessibility Audit', 'Bug Resolution Log'],
  },
  {
    step: '06', icon: Shield,
    title: 'Security & Compliance Review',
    desc: 'We audit the app for OWASP Mobile Top 10 vulnerabilities, implement SSL pinning, encrypted local storage, ProGuard obfuscation, and ensure GDPR/compliance requirements are met before store submission.',
    deliverables: ['Security Audit Report', 'Penetration Test Results', 'GDPR Compliance Checklist', 'Privacy Policy Setup'],
  },
  {
    step: '07', icon: Play,
    title: 'Google Play Store Launch',
    desc: 'Full Play Store submission management: app listing optimization with ASO, screenshots, feature graphic design, in-app review prompts, and staged rollout to 10% then 100% of users.',
    deliverables: ['Play Store Listing Copy', 'ASO Keyword Research', 'Store Screenshots & Graphics', 'Staged Rollout Plan'],
  },
  {
    step: '08', icon: RefreshCw,
    title: 'Post-Launch Support & Iteration',
    desc: 'Six months of post-launch support included. We monitor crash-free rates via Firebase Crashlytics, track user retention in Firebase Analytics, implement feedback-driven iterations, and manage Android OS update compatibility.',
    deliverables: ['Monthly Crash Reports', 'Analytics Dashboard Access', 'OS Compatibility Updates', 'Feature Update Sprints'],
  },
]

const techCategories = [
  {
    name: 'Languages', icon: Code2, color: '#3ddc84',
    techs: [
      { name: 'Kotlin', desc: 'Primary language. Concise, null-safe, and fully interoperable with Java.' },
      { name: 'Java', desc: 'For legacy module integration and enterprise Android codebases.' },
      { name: 'C/C++ (NDK)', desc: 'For performance-critical modules like image processing or audio.' },
    ],
  },
  {
    name: 'UI Frameworks', icon: Paintbrush, color: '#a78bfa',
    techs: [
      { name: 'Jetpack Compose', desc: 'Modern declarative UI toolkit, faster development and easier theming.' },
      { name: 'XML Layouts', desc: 'View-based UI for legacy compatibility and complex custom views.' },
      { name: 'Material Design 3', desc: "Google's latest design language with dynamic colour and adaptive layouts." },
    ],
  },
  {
    name: 'Architecture', icon: Layers, color: '#60a5fa',
    techs: [
      { name: 'MVVM + Clean', desc: 'Separation of concerns: UI, domain logic, and data layers independently testable.' },
      { name: 'Jetpack ViewModel', desc: 'Lifecycle-aware state holder, survives screen rotations.' },
      { name: 'Hilt (DI)', desc: 'Compile-time dependency injection for modular, testable code.' },
    ],
  },
  {
    name: 'Networking & Data', icon: Database, color: '#f59e0b',
    techs: [
      { name: 'Retrofit + OkHttp', desc: 'Type-safe HTTP client with interceptors for logging, auth, and caching.' },
      { name: 'Room DB', desc: 'SQLite abstraction with compile-time query verification and coroutine support.' },
      { name: 'DataStore', desc: 'Jetpack replacement for SharedPreferences, async and type-safe.' },
    ],
  },
  {
    name: 'Backend & Cloud', icon: Cloud, color: '#34d399',
    techs: [
      { name: 'Firebase', desc: 'Auth, Realtime DB, Firestore, Crashlytics, Analytics, Remote Config.' },
      { name: 'AWS Amplify', desc: 'For enterprise clients needing AWS infrastructure on mobile.' },
      { name: 'Google Cloud', desc: 'Vision API, Speech API, Maps SDK, and Places API integration.' },
    ],
  },
  {
    name: 'Testing', icon: TestTube2, color: '#f87171',
    techs: [
      { name: 'JUnit 5', desc: 'Unit testing framework for business logic and ViewModels.' },
      { name: 'Espresso', desc: "Google's UI testing framework for integration and end-to-end tests." },
      { name: 'Firebase Test Lab', desc: 'Cloud-based testing on 50+ real physical Android devices.' },
    ],
  },
]

const deviceTypes = [
  { icon: Smartphone, name: 'Smartphones', desc: 'All Android phones from 5" to 7" -- portrait and landscape modes fully supported.', count: '12,000+ models' },
  { icon: Tablet, name: 'Tablets', desc: 'Large-screen layouts with multi-pane navigation and desktop-class productivity UIs.', count: '10" to 14" displays' },
  { icon: Monitor, name: 'Foldables', desc: 'Adaptive layouts that reflow between folded and unfolded states on Galaxy Fold and Pixel Fold.', count: 'Fold & Flip variants' },
  { icon: Watch, name: 'Wear OS', desc: 'Companion watch apps with health sensors, complications, and offline workout tracking.', count: 'Galaxy Watch & Pixel Watch' },
  { icon: Tv2, name: 'Android TV', desc: 'Leanback UI for 10-foot viewing distance on Smart TVs and Android TV boxes.', count: 'Fire TV & Google TV' },
  { icon: Cpu, name: 'Android Auto', desc: 'Driver-safe interfaces for navigation, media, and messaging in connected vehicles.', count: 'In-car integration' },
]

const appTypes = [
  { name: 'E-Commerce & Retail', icon: Package, desc: 'Product catalogues, cart, payments (UPI/Razorpay/Stripe), AR try-on, loyalty programs.' },
  { name: 'FinTech & Banking', icon: Lock, desc: 'Secure wallets, KYC flows, trading dashboards, EMI calculators, biometric auth.' },
  { name: 'Healthcare & MedTech', icon: Shield, desc: 'Telemedicine, health tracking, EHR integration, HL7/FHIR compliance, wearable sync.' },
  { name: 'EdTech & Learning', icon: Globe, desc: 'Video courses, live classes, quizzes, certificates, offline downloads, gamification.' },
  { name: 'On-Demand & Logistics', icon: Zap, desc: 'Rider/driver apps, real-time tracking, surge pricing, route optimization, ETA.' },
  { name: 'Social & Community', icon: Users, desc: 'Feeds, stories, live streaming, end-to-end encrypted chat, creator monetization.' },
  { name: 'Enterprise & B2B', icon: BarChart3, desc: 'CRM dashboards, inventory management, field-force apps, offline-sync for remote workers.' },
  { name: 'IoT & Hardware', icon: Cpu, desc: 'BLE/WiFi device control, MQTT data dashboards, custom hardware SDKs, sensor visualization.' },
]

const features = [
  'Kotlin & Java Development',
  'Jetpack Compose UI',
  'MVVM + Clean Architecture',
  'Offline-First (Room + DataStore)',
  'Firebase Integration (Auth/DB/Analytics)',
  'Google Play Store Publishing',
  'Push Notifications (FCM)',
  'REST & GraphQL API Integration',
  'Biometric Authentication',
  'In-App Purchases & Subscriptions',
  'Google Maps & Location Services',
  'Background Services & WorkManager',
  'Deep Links & App Links',
  'ProGuard / R8 Code Obfuscation',
  'CI/CD with GitHub Actions',
  '50+ Device QA via Firebase Test Lab',
]

const faqs = [
  {
    question: 'How long does it take to build an Android app?',
    answer: 'A simple informational app or MVP takes 6 to 10 weeks. A medium-complexity app with user auth, payments, and an admin panel takes 3 to 5 months. Complex enterprise apps with custom hardware integration, AI features, or large-scale backend take 5 to 9+ months. We provide a detailed timeline estimate after a discovery call.',
  },
  {
    question: 'What is the minimum Android version you support?',
    answer: 'We target Android 8.0 (API 26) as the minimum by default, covering 98%+ of active Android devices globally. For apps needing the latest Jetpack Compose features, we may target Android 9+ (API 28). The exact minimum SDK is decided based on your target market demographics.',
  },
  {
    question: 'Do you build apps for Android tablets and foldables?',
    answer: 'Yes. We build fully responsive layouts using adaptive navigation, window size classes (Compact / Medium / Expanded), and multi-pane layouts so your app looks perfect on every screen -- phones, tablets (10 to 14"), foldables (Galaxy Fold, Pixel Fold), and Android TV.',
  },
  {
    question: 'Will you publish the app on the Google Play Store?',
    answer: 'Yes. We handle the full Play Store submission process: creating your developer account, writing ASO-optimized app descriptions, designing store screenshots and feature graphics, configuring content ratings, setting up staged rollouts, and monitoring the review process until approval.',
  },
  {
    question: 'How do you handle app security?',
    answer: 'We follow OWASP Mobile Top 10 guidelines: SSL/TLS certificate pinning, encrypted local storage (Android Keystore), ProGuard/R8 code obfuscation, root detection, tamper detection, secure API key management (no secrets in APK), and biometric authentication integration where relevant.',
  },
  {
    question: 'What happens after the app is launched?',
    answer: 'Every project includes 6 months of post-launch support: crash monitoring via Firebase Crashlytics, performance monitoring, compatibility updates for new Android OS versions, bug fixes, and one round of minor feature additions. Extended maintenance plans are available after the initial period.',
  },
  {
    question: 'Can you integrate payment gateways into the Android app?',
    answer: 'Yes. We integrate Razorpay, Stripe, PayPal, UPI (BHIM), Paytm, PhonePe, Google Pay, and in-app purchases/subscriptions via Google Play Billing Library. We handle the complete payment flow including webhooks, refunds, and subscription lifecycle management.',
  },
  {
    question: 'Do you provide source code ownership?',
    answer: 'Absolutely. Upon project completion and final payment, you receive full source code ownership including all repositories, design files (Figma), API documentation, and deployment credentials. We do not retain any intellectual property rights to your app.',
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
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? 'border-[#3ddc84]/40 shadow-md' : 'border-gray-200'}`}>
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

export default function AndroidPage() {
  const { openModal } = useModal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* Hero */}
      <section className="relative bg-[#0a1628] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#3ddc84 1px, transparent 1px), linear-gradient(90deg, #3ddc84 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]" style={{ background: '#3ddc84' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-32 pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium bg-white/8 backdrop-blur-sm border border-white/15 px-4 py-2 rounded-full transition-colors mb-10"
          >
            <ArrowLeft size={15} /> Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[#0a1628] text-xs font-extrabold tracking-wider uppercase"
                  style={{ background: ACCENT }}
                >
                  <Smartphone size={12} /> Android Development
                </span>
                <span className="text-white/40 text-sm">Mobile App Development</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.06] mb-6">
                Android App<br />
                <span style={{ color: ACCENT }}>Development</span><br />
                Services
              </h1>

              <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
                Custom, enterprise-grade Android applications built with Kotlin &amp; Jetpack Compose. From MVPs to complex multi-module apps designed for performance, scalability, and Play Store success.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {['Kotlin & Java', 'Jetpack Compose', 'MVVM Architecture', 'Material Design 3', 'Firebase', 'Google Play'].map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full border" style={{ borderColor: `${ACCENT}40`, color: ACCENT, background: `${ACCENT}12` }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-[#0a1628] hover:opacity-90 transition-all shadow-lg"
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

            {/* Right card */}
            <div className="relative hidden lg:block">
              <div className="bg-[#1a2f4e] border border-white/10 rounded-3xl p-7 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: `${ACCENT}22` }}>
                    <Smartphone size={20} style={{ color: ACCENT }} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Android Project</div>
                    <div className="text-white/40 text-xs">Discovery to Launch</div>
                  </div>
                  <div className="ml-auto flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: ACCENT }} />
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Architecture', value: 'MVVM + Clean', pct: 100 },
                    { label: 'UI Framework', value: 'Jetpack Compose', pct: 85 },
                    { label: 'Test Coverage', value: '92%', pct: 92 },
                    { label: 'Play Store Rating', value: '4.8 Star', pct: 96 },
                  ].map(item => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-white/60">{item.label}</span>
                        <span className="text-white font-semibold">{item.value}</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: ACCENT }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                  {stats.slice(0, 3).map(s => (
                    <div key={s.label}>
                      <div className="text-xl font-black" style={{ color: ACCENT }}>{s.value}</div>
                      <div className="text-white/40 text-[10px] mt-0.5 leading-snug">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[#0a1628] border border-[#3ddc84]/30 rounded-2xl px-5 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
                  <span className="text-white text-xs font-semibold">Google Play Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#0d1f38] border-y border-white/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
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
              <SectionLabel text="Why Android?" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                Reach 3.9 Billion Android Users Worldwide
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                Android commands <strong className="text-[#0a1628]">72.8% of the global smartphone market</strong>. Building a high-quality Android app means accessing billions of potential users across every economic segment, geography, and device type.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                At Kotibox, we have delivered 500+ Android applications across e-commerce, FinTech, healthcare, logistics, and enterprise SaaS. Every app we build follows Google&apos;s recommended architecture, passes security audits, and is optimized for high Play Store ratings and user retention.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '72.8%', label: 'Global Market Share' },
                  { value: '3.9B', label: 'Active Android Users' },
                  { value: '3.5M+', label: 'Apps on Play Store' },
                  { value: '#1', label: 'Platform for Emerging Markets' },
                ].map((m, i) => (
                  <div key={i} className="bg-[#f8fafc] rounded-2xl p-5 border border-gray-100">
                    <div className="text-2xl font-black mb-1" style={{ color: ACCENT }}>{m.value}</div>
                    <div className="text-gray-500 text-sm">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
                alt="Android Development"
                className="rounded-3xl w-full h-72 object-cover shadow-xl"
              />
              <div className="border-l-4 rounded-r-2xl px-5 py-4 bg-green-50" style={{ borderLeftColor: ACCENT }}>
                <p className="text-green-900 text-sm leading-relaxed">
                  <strong>Kotibox Insight:</strong> Apps built with Jetpack Compose and MVVM architecture see 40% fewer post-launch crashes and 2x faster feature iteration compared to legacy View-based approaches.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What is Included */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="What's Included" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Complete Android Development Package
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Every Android project comes with a full-stack development service with no hidden extras.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#f8fafc] border border-gray-100 rounded-xl px-4 py-3.5">
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
            8-Step Android Development Process
          </h2>
          <p className="text-gray-500 text-base mb-14 max-w-2xl">
            A structured, transparent process from first conversation to Play Store charts.
          </p>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
            <div className="flex flex-col gap-0">
              {processSteps.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={i} className="relative flex gap-8 md:gap-12 pb-12 last:pb-0">
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-[#0a1628] font-black text-sm shadow-lg"
                        style={{ background: ACCENT }}
                      >
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1 bg-[#f8fafc] border border-gray-100 rounded-2xl p-6 md:p-8 hover:border-[#3ddc84]/30 hover:shadow-md transition-all">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${ACCENT}18` }}>
                          <Icon size={18} style={{ color: ACCENT }} />
                        </div>
                        <h3 className="text-[#0a1628] font-bold text-lg leading-snug pt-1">{step.title}</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">{step.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map(d => (
                          <span key={d} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: `${ACCENT}14`, color: '#166534' }}>
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
            The Android Tech Ecosystem We Master
          </h2>
          <p className="text-gray-500 text-base mb-14 max-w-2xl">
            We use Google-recommended tools and libraries from the Android Jetpack suite, ensuring long-term maintainability and Play Store compliance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((cat, i) => {
              const CatIcon = cat.icon
              return (
                <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                  <div className="px-6 py-4 flex items-center gap-3" style={{ background: `${cat.color}12`, borderBottom: `1px solid ${cat.color}25` }}>
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${cat.color}25` }}>
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
                Material Design 3 &mdash; Android UX That Converts
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                Great Android apps aren&apos;t just functional &mdash; they feel natural and fast. We implement Google&apos;s Material Design 3 with dynamic colour theming, expressive motion, and adaptive layouts that respond to the user&apos;s system preferences, wallpaper colour, and device size.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Dynamic Colour (Material You)', desc: "App theme automatically adapts to the user's wallpaper colour on Android 12+, creating a personalized experience that no iOS app can match." },
                  { title: 'Predictive Back Gesture', desc: 'Android 14 predictive back animations with destination previews give users visual confidence before navigating away.' },
                  { title: 'Adaptive Navigation', desc: 'Bottom nav bar on phones, side nav rail on tablets, permanent nav drawer on large screens -- all from a single codebase using WindowSizeClass.' },
                  { title: 'Accessibility First', desc: 'TalkBack support, minimum 48dp touch targets, WCAG 2.1 colour contrast ratios, and content descriptions on every interactive element.' },
                  { title: 'Performance Optimization', desc: 'App startup time under 500ms (cold start), 60/120fps scrolling, lazy loading with Paging 3, and image caching with Coil for smooth user experience.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-[#f8fafc] border border-gray-100 rounded-xl">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: ACCENT }}>
                      <span className="text-[#0a1628] text-[10px] font-black">{i + 1}</span>
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
              <SectionLabel text="Device Coverage" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                One App. Every Android Device.
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {deviceTypes.map((d, i) => {
                  const Icon = d.icon
                  return (
                    <div key={i} className="border border-gray-200 rounded-2xl p-5 hover:border-[#3ddc84]/40 hover:shadow-md transition-all">
                      <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-3" style={{ background: `${ACCENT}15` }}>
                        <Icon size={20} style={{ color: ACCENT }} />
                      </div>
                      <h4 className="text-[#0a1628] font-bold text-sm mb-1">{d.name}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed mb-3">{d.desc}</p>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${ACCENT}18`, color: '#166534' }}>
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
            Android Apps Across Every Industry
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Our Android team has shipped production apps in 15+ verticals. We understand the specific compliance, UX, and integration requirements of each.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {appTypes.map((app, i) => {
              const Icon = app.icon
              return (
                <div key={i} className="group border border-gray-200 rounded-2xl p-6 hover:border-[#3ddc84]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${ACCENT}15` }}>
                    <Icon size={20} style={{ color: ACCENT }} />
                  </div>
                  <h4 className="text-[#0a1628] font-bold text-sm mb-2 group-hover:text-[#3ddc84] transition-colors">{app.name}</h4>
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
            Why Choose Kotibox for Android?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Google Play Certified',
                desc: 'We follow all Google Play policies including the Data Safety form, target API level requirements, and 64-bit library mandates. Zero app rejections in our last 200 submissions.',
              },
              {
                icon: Layers,
                title: 'Clean Architecture',
                desc: 'Every app is built with MVVM + Clean Architecture separating UI, domain, and data layers. This means 90% unit testability and feature teams that can work independently.',
              },
              {
                icon: Bell,
                title: '6-Month Post-Launch Support',
                desc: 'We stay for 6 months after delivery -- covering Android OS updates, Play Store policy changes, crash fixes, and one free feature iteration cycle.',
              },
              {
                icon: Zap,
                title: 'Performance-First Development',
                desc: 'We profile every release with Android Studio Profiler targeting sub-500ms cold start, sub-16ms frame render time, and battery usage that passes Google Play ANR/crash thresholds.',
              },
              {
                icon: Lock,
                title: 'Security by Default',
                desc: 'SSL pinning, Android Keystore encryption, ProGuard obfuscation, root detection, and OWASP Mobile Top 10 compliance are standard in every project -- not paid add-ons.',
              },
              {
                icon: Settings,
                title: 'CI/CD Pipeline Included',
                desc: 'GitHub Actions or Bitrise CI/CD set up from day one with automated testing on every PR, Play Store internal track auto-publishing, and Slack notifications.',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="border-t-4 rounded-2xl p-6 bg-[#f8fafc] border border-gray-100" style={{ borderTopColor: ACCENT }}>
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${ACCENT}15` }}>
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
            Android Development Resources We Use
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Our team stays current with every Google I/O release, Android Beta program update, and Jetpack library changelog.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Official Android Resources',
                color: ACCENT,
                items: [
                  'Android Jetpack Libraries (official suite)',
                  'Google Android Developer Documentation',
                  'Material Design 3 Component Library',
                  'Android Studio Flamingo + Hedgehog',
                  'Google Play Console & Policy Center',
                  'Android Beta Program (latest OS previews)',
                ],
              },
              {
                category: 'Quality & Performance',
                color: '#60a5fa',
                items: [
                  'Firebase Crashlytics (crash-free rate monitoring)',
                  'Firebase Performance Monitoring',
                  'Android Studio Profiler (CPU/Memory/Battery)',
                  'Firebase Test Lab (50+ real device matrix)',
                  'Lint & Detekt (static code analysis)',
                  'Google Play Android Vitals Dashboard',
                ],
              },
              {
                category: 'Development Tools & CI/CD',
                color: '#a78bfa',
                items: [
                  'GitHub / GitLab with branch protection rules',
                  'GitHub Actions / Bitrise CI pipelines',
                  'Fastlane (automated Play Store deployment)',
                  'Figma (design handoff & dev mode)',
                  'Jira / Linear (sprint & backlog management)',
                  'Slack integration for build notifications',
                ],
              },
              {
                category: 'Security & Compliance',
                color: '#f87171',
                items: [
                  'OWASP Mobile Security Testing Guide (MSTG)',
                  'Android Keystore for credential storage',
                  'ProGuard / R8 code shrinking & obfuscation',
                  'MobSF (Mobile Security Framework)',
                  'GDPR & CCPA compliance checklists',
                  'Play Integrity API (device attestation)',
                ],
              },
              {
                category: 'Third-Party Integrations',
                color: '#f59e0b',
                items: [
                  'Google Maps SDK & Places API',
                  'Razorpay / Stripe / Google Pay',
                  'Twilio (SMS / Voice / Video)',
                  'Agora.io (real-time video & voice)',
                  'Lottie (JSON animation playback)',
                  'Coil / Glide (image loading & caching)',
                ],
              },
              {
                category: 'Distribution & Analytics',
                color: '#34d399',
                items: [
                  'Google Play Store (primary distribution)',
                  'Firebase App Distribution (beta testing)',
                  'Firebase Analytics (user behaviour)',
                  'Google Play Console (release management)',
                  'App Store Optimization (ASO) tools',
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
          <div className="rounded-3xl overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1a2f4e 100%)' }}>
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 blur-[80px]" style={{ background: ACCENT }} />
            <div className="relative px-8 md:px-16 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Free Consultation Available</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Ready to Build Your<br />
                  <span style={{ color: ACCENT }}>Android App?</span>
                </h2>
                <p className="text-white/55 text-base max-w-lg">
                  Talk to our Android team and get a detailed project estimate, architecture recommendation, and timeline within 24 hours. No obligation.
                </p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <button
                  onClick={openModal}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[#0a1628] hover:opacity-90 transition-all text-sm whitespace-nowrap"
                  style={{ background: ACCENT }}
                >
                  Get Free Consultation <ArrowRight size={16} />
                </button>
                <Link
                  href="/live-demo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/80 border border-white/20 hover:bg-white/10 transition-all text-sm"
                >
                  See Android Projects <Play size={14} />
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
              Everything you need to know before starting your Android project.
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
          <p className="text-gray-500 text-base mb-10">Extend your mobile strategy with our other development services.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { slug: 'ios', tag: 'iOS', title: 'iOS App Development', desc: 'Swift & SwiftUI apps for iPhone and iPad following Apple HIG standards.', color: '#007aff', img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&q=80' },
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
