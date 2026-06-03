'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, ChevronUp,
  Smartphone, Code2, Layers, TestTube2, Settings,
  Shield, Zap, Globe, Users, TrendingUp, Play,
  Monitor, Cpu, Database, Cloud,
  Paintbrush, BarChart3, Lock, RefreshCw, Package,
  Gauge, GitBranch, Puzzle, Scale, DollarSign, Clock,
  CheckSquare, Repeat, Target, Boxes
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const ACCENT = '#a855f7'
const ACCENT_DARK = '#7c3aed'
const ACCENT_LIGHT = '#faf5ff'
const ACCENT_MID = '#ede9fe'

// --- Data -------------------------------------------------------------------

const stats = [
  { value: '60%', label: 'Cost vs Dual Native', icon: DollarSign },
  { value: '4+', label: 'Platforms, 1 Codebase', icon: Boxes },
  { value: '2x', label: 'Faster Time to Market', icon: Clock },
  { value: '350+', label: 'Cross-Platform Apps Built', icon: Smartphone },
]

const frameworks = [
  {
    name: 'Flutter',
    logo: '⚡',
    color: '#54c5f8',
    best: 'Pixel-perfect UI, 6 platforms',
    when: ['Custom branded UI is critical', 'Need Web + Desktop + Mobile', 'Performance is top priority', 'Team can learn Dart'],
    notWhen: ['Team is JavaScript-only', 'Need deep web code sharing'],
    tech: 'Dart + Skia/Impeller engine',
  },
  {
    name: 'React Native',
    logo: '⚛',
    color: '#61dafb',
    best: 'JS teams, OTA updates, web sharing',
    when: ['Team knows React/JavaScript', 'Need OTA update capability', 'Sharing code with React web app', 'Faster MVP with existing JS talent'],
    notWhen: ['Need Web or Desktop targets', 'Pixel-perfect custom UI required'],
    tech: 'TypeScript + JSI/Fabric engine',
  },
  {
    name: 'Native (Dual)',
    logo: '🔧',
    color: '#f59e0b',
    best: 'Max performance, platform-specific UX',
    when: ['App is deeply hardware-integrated', 'Platform-specific features dominate', 'Highest possible performance needed', 'Long-term budget allows 2x team'],
    notWhen: ['Budget or timeline is limited', 'Features are largely platform-agnostic'],
    tech: 'Swift (iOS) + Kotlin (Android)',
  },
]

const processSteps = [
  {
    step: '01', icon: Target,
    title: 'Platform Strategy & Framework Selection',
    desc: 'We begin with a structured platform workshop: analysing your target users, feature requirements, team skills, and budget to produce a scored recommendation between Flutter, React Native, and native. No upselling -- we recommend what genuinely fits your project.',
    deliverables: ['Platform Strategy Report', 'Framework Scoring Matrix', 'Team Skill Gap Analysis', 'Total Cost of Ownership Estimate'],
  },
  {
    step: '02', icon: Scale,
    title: 'Architecture for Maximum Code Sharing',
    desc: 'We design a layered architecture separating platform-agnostic business logic (domain layer), API integration (data layer), and platform-adaptive UI (presentation layer). The goal: maximize shared code while ensuring each platform delivers a native-quality experience.',
    deliverables: ['Shared Architecture Diagram', 'Code Sharing Blueprint (% per layer)', 'Monorepo or Polyrepo Decision', 'API & Data Layer Design'],
  },
  {
    step: '03', icon: Paintbrush,
    title: 'Adaptive UI/UX Design System',
    desc: 'We create a single design system in Figma with platform-adaptive variants for iOS and Android conventions. One component, two expressions: the same button, navigation, and layout components adapt their visual treatment to feel native on each platform.',
    deliverables: ['Cross-Platform Design System', 'iOS & Android Component Variants', 'Adaptive Navigation Specs', 'Interactive Multi-Platform Prototype'],
  },
  {
    step: '04', icon: Code2,
    title: 'Shared-First Development',
    desc: 'We build business logic, state management, API clients, and utilities first as a shared core. Platform-specific code is written only where genuinely needed (camera UX, native payments, platform navigation). Regular cross-platform test runs on both iOS and Android from day one.',
    deliverables: ['Shared Core Library', 'Platform-Adaptive UI Components', 'Cross-Platform Sprint Builds', 'Code Sharing % Report per Sprint'],
  },
  {
    step: '05', icon: TestTube2,
    title: 'Unified QA Across All Platforms',
    desc: 'Every feature is tested on both platforms simultaneously. We run shared test suites for business logic, platform-specific UI tests for native components, and end-to-end automation that executes against both iOS and Android in a single CI pipeline run.',
    deliverables: ['Shared Business Logic Tests', 'Platform-Specific UI Test Results', 'Cross-Platform Device Matrix Report', 'Performance Benchmarks (both platforms)'],
  },
  {
    step: '06', icon: Shield,
    title: 'Cross-Platform Security -- One Implementation',
    desc: 'One security implementation covers both platforms: encrypted storage maps to iOS Keychain and Android Keystore automatically, certificate pinning works identically, and obfuscation covers both Dart (Flutter) or JS bundles (React Native) in a single build configuration.',
    deliverables: ['Unified Security Implementation', 'Both-Platform Keystore/Keychain Config', 'Single Obfuscation Build Config', 'Cross-Platform OWASP Compliance Report'],
  },
  {
    step: '07', icon: Play,
    title: 'Simultaneous Multi-Store Deployment',
    desc: 'We deploy to Google Play Store and Apple App Store in a single CI/CD pipeline run using Fastlane or EAS Submit. Web builds go to Firebase Hosting or Vercel. Desktop builds are packaged for Windows/Mac App Stores. One merge triggers all deployments.',
    deliverables: ['Play Store + App Store Submission', 'Web Build Deployment', 'Desktop Build Packaging', 'Simultaneous Staged Rollout'],
  },
  {
    step: '08', icon: RefreshCw,
    title: 'Unified Post-Launch Support',
    desc: 'Six months of cross-platform support: a single bug fix deployed to both platforms simultaneously, framework SDK upgrades managed for all targets, unified crash monitoring dashboard, and feature iterations that ship to every platform at the same time.',
    deliverables: ['Cross-Platform Crash Dashboard', 'Unified SDK Upgrade Management', 'Single-Deploy Bug Fixes', 'Multi-Platform Feature Sprints'],
  },
]

const techStack = [
  {
    framework: 'Flutter Stack',
    color: '#54c5f8',
    categories: [
      { name: 'Language & Core', items: ['Dart (Sound Null Safety)', 'Flutter SDK (Stable)', 'Impeller Rendering Engine'] },
      { name: 'State', items: ['BLoC / Cubit', 'Riverpod', 'GetX'] },
      { name: 'Data & Cloud', items: ['Dio + Retrofit', 'Hive / Isar', 'Firebase FlutterFire'] },
      { name: 'CI/CD', items: ['Codemagic', 'Fastlane', 'Flutter DevTools'] },
    ],
  },
  {
    framework: 'React Native Stack',
    color: '#61dafb',
    categories: [
      { name: 'Language & Core', items: ['TypeScript', 'React Native (New Arch)', 'Hermes Engine'] },
      { name: 'State', items: ['Redux Toolkit', 'Zustand', 'React Query'] },
      { name: 'Data & Cloud', items: ['Axios + MMKV', 'WatermelonDB', 'Firebase RN'] },
      { name: 'CI/CD', items: ['Expo EAS Build', 'EAS Submit', 'Sentry RN'] },
    ],
  },
]

const costComparison = [
  { phase: 'Initial Development', native: 100, crossPlatform: 55, savings: '45%' },
  { phase: 'Feature Addition', native: 100, crossPlatform: 50, savings: '50%' },
  { phase: 'Bug Fixes', native: 100, crossPlatform: 45, savings: '55%' },
  { phase: 'OS Update Compatibility', native: 100, crossPlatform: 48, savings: '52%' },
  { phase: 'New Platform Launch', native: 100, crossPlatform: 30, savings: '70%' },
]

const appTypes = [
  { name: 'SaaS Mobile Extension', icon: Monitor, desc: 'Add iOS + Android apps to your existing SaaS product at 50% of the cost of building two separate native apps.' },
  { name: 'E-Commerce & Retail', icon: Package, desc: 'Unified shopping experience with shared cart, product, and checkout logic across mobile and web platforms.' },
  { name: 'On-Demand & Logistics', icon: Zap, desc: 'Customer, driver, and merchant apps from a single shared codebase with real-time tracking and push notifications.' },
  { name: 'FinTech & Payments', icon: Lock, desc: 'Secure cross-platform wallets, trading apps, and payment flows with one security implementation for both stores.' },
  { name: 'EdTech & Learning', icon: Globe, desc: 'Course content, video playback, offline downloads, and instructor dashboards from one shared codebase.' },
  { name: 'Healthcare & Wellness', icon: Shield, desc: 'Patient and practitioner apps with health data integration, available on both platforms simultaneously.' },
  { name: 'Enterprise Tools', icon: BarChart3, desc: 'Internal field-force, inventory, and approval apps deployed to company iOS and Android devices from one build.' },
  { name: 'Social & Community', icon: Users, desc: 'Feeds, chat, media, and notifications with identical behaviour on iOS and Android from a single code review.' },
]

const features = [
  'Framework Strategy Consultation',
  'Flutter or React Native (Best Fit)',
  'Shared Business Logic Architecture',
  'Adaptive UI for iOS & Android',
  'Single State Management Layer',
  'Unified API Client & Caching',
  'Cross-Platform Push Notifications',
  'Shared Encrypted Storage',
  'One Security Audit Covers Both',
  'Simultaneous Store Submission',
  'Single CI/CD Pipeline (Both Stores)',
  'Unified Crash Monitoring',
  'OTA Updates (React Native)',
  'Desktop & Web Targets (Flutter)',
  'Monorepo / Shared Package Setup',
  '6-Month Cross-Platform Support',
]

const faqs = [
  {
    question: 'How do you decide between Flutter and React Native for a project?',
    answer: "We use a scored decision matrix covering five factors: team skills (JavaScript vs Dart), platform targets (mobile-only vs web+desktop), UI requirements (standard vs pixel-perfect custom), performance needs, and timeline. If your team knows React and you need OTA updates or web code sharing, React Native wins. If you need pixel-perfect UI, 6 platforms, or maximum performance without a bridge, Flutter wins. We present this analysis in our first consultation with no upselling.",
  },
  {
    question: 'Is cross-platform quality lower than native?',
    answer: "No, not with modern frameworks. Flutter renders with its own Impeller engine at 60 to 120fps -- Google Pay, eBay, and BMW use it in production. React Native's New Architecture (JSI + Fabric) eliminates the old bridge bottleneck -- Meta, Shopify, and Microsoft Teams rely on it. The UX difference between a well-built cross-platform app and a native app is imperceptible to most users. Where native wins: deep hardware integration (ARKit exclusives, Apple Watch complications) or apps that must feel platform-native in every micro-interaction.",
  },
  {
    question: 'How much does cross-platform development actually save?',
    answer: "Typically 45 to 60% on initial development and 50 to 70% on ongoing maintenance. The savings compound: every bug fix, every feature, and every OS update is done once instead of twice. For a project that would cost INR 30 lakh for dual native development, a cross-platform approach typically comes in at INR 13 to 18 lakh -- with equivalent features and quality. The bigger the app and the longer the product roadmap, the more the savings compound.",
  },
  {
    question: 'Can a cross-platform app pass Apple App Store and Google Play Store review?',
    answer: "Yes, without exception. Flutter compiles to native ARM binaries (AAB for Android, IPA for iOS) that are indistinguishable from native apps to the stores. React Native also compiles to native binaries. Both frameworks produce apps that fully satisfy all store policies, pass privacy manifest requirements (iOS), meet target API level requirements (Android), and are eligible for App Store featuring. We have a 100% approval rate across 200+ submissions from both frameworks.",
  },
  {
    question: 'What percentage of code is actually shared between iOS and Android?',
    answer: "With Flutter: typically 92 to 95% code sharing. Business logic, state, API integration, and UI widgets are fully shared. Only platform channels for native APIs are platform-specific. With React Native: typically 85 to 90% sharing. Business logic, state, and API code is fully shared. UI components share about 80% with platform-specific style tweaks for the remainder. In both cases, a single developer can maintain both platforms with one codebase review.",
  },
  {
    question: 'Can cross-platform apps access device hardware like camera, GPS, and Bluetooth?',
    answer: "Yes. Both Flutter and React Native have mature packages for virtually every device API: camera, GPS, Bluetooth, NFC, biometrics, payments, HealthKit/Google Fit, ARCore/ARKit, sensors, and more. One plugin implementation works on both platforms. If a community package does not exist for a specific hardware SDK, we write a platform channel (Flutter) or native module (React Native) in Swift/Kotlin that bridges to the shared codebase.",
  },
  {
    question: 'Do you build cross-platform apps for Web and Desktop too?',
    answer: "Yes, if Flutter is chosen. Flutter has stable support for Android, iOS, Web (CanvasKit/HTML renderer), Windows, macOS, and Linux from a single Dart codebase. For React Native projects targeting web, we set up React Native Web to share UI components with a Next.js web app. Desktop targets are currently stronger with Flutter than React Native. We recommend the right combination based on your specific platform requirements.",
  },
  {
    question: 'What happens when a new iOS or Android version is released?',
    answer: "With cross-platform, you update one codebase and the fix applies to both platforms. Apple releases a new iOS major version each September; Google releases Android updates throughout the year. Our 6-month post-launch support covers the first major OS update compatibility check and any framework SDK upgrades required. A bug that would take two separate native teams 2 weeks to fix and test takes our cross-platform team 3 to 5 days for both platforms.",
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
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? 'shadow-md' : 'border-gray-200'}`}
      style={open ? { borderColor: `${ACCENT}60` } : {}}
    >
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

export default function CrossPlatformPage() {
  const { openModal } = useModal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e1040 0%, #0a1628 55%, #12082e 100%)' }}>
        {/* Radial glow */}
        <div className="absolute top-0 left-1/3 w-[800px] h-[500px] rounded-full opacity-[0.12] blur-[120px]" style={{ background: ACCENT }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full opacity-[0.08] blur-[100px]" style={{ background: '#54c5f8' }} />
        {/* Subtle hex grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(${ACCENT} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />

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
                  <Boxes size={12} /> Cross Platform
                </span>
                <span className="text-white/40 text-sm">Mobile App Development</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.06] mb-6">
                Cross Platform<br />
                <span style={{ color: ACCENT }}>App Development</span><br />
                Services
              </h1>

              <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
                One app. Every platform. We choose the right cross-platform framework for your project &mdash; Flutter or React Native &mdash; and build iOS, Android, Web, and Desktop apps that save 60% of cost without sacrificing quality.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {['Flutter', 'React Native', 'iOS + Android', 'Web & Desktop', 'Single Codebase', '60% Cost Savings'].map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 text-white/70 bg-white/8">
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
                  Get Free Framework Consult <ArrowRight size={16} />
                </button>
                <Link
                  href="/live-demo"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white border border-white/20 hover:bg-white/10 transition-all"
                >
                  View Our Apps <Play size={14} />
                </Link>
              </div>
            </div>

            {/* Right -- platform funnel visual */}
            <div className="relative hidden lg:flex flex-col items-center justify-center gap-5">
              {/* Single codebase badge */}
              <div className="w-full max-w-xs rounded-2xl px-6 py-5 border border-white/15 text-center shadow-2xl" style={{ background: 'rgba(168,85,247,0.18)', backdropFilter: 'blur(12px)' }}>
                <div className="text-xs text-white/50 uppercase tracking-widest font-bold mb-1">Your Codebase</div>
                <div className="text-2xl font-black text-white">1 Repository</div>
                <div className="text-xs text-white/40 mt-1">Flutter (Dart) or React Native (TypeScript)</div>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-0.5 h-6 rounded-full" style={{ background: ACCENT }} />
                <ArrowRight size={18} style={{ color: ACCENT }} className="rotate-90" />
              </div>

              {/* Platforms grid */}
              <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                {[
                  { name: 'Android', sub: 'Google Play', color: '#3ddc84' },
                  { name: 'iOS', sub: 'App Store', color: '#007aff' },
                  { name: 'Web', sub: 'Browser / PWA', color: '#f59e0b' },
                  { name: 'Desktop', sub: 'Win / Mac / Linux', color: '#a78bfa' },
                ].map(p => (
                  <div key={p.name} className="rounded-xl px-4 py-3 border border-white/10 flex flex-col items-center" style={{ background: `${p.color}18` }}>
                    <div className="text-sm font-black text-white">{p.name}</div>
                    <div className="text-[10px] text-white/40 mt-0.5">{p.sub}</div>
                  </div>
                ))}
              </div>

              {/* Cost badge */}
              <div className="absolute -top-4 -right-4 rounded-2xl px-4 py-3 shadow-xl border" style={{ background: '#1e1040', borderColor: `${ACCENT}40` }}>
                <div className="text-xs text-white/50 mb-0.5">Total savings</div>
                <div className="text-2xl font-black" style={{ color: ACCENT }}>60%</div>
                <div className="text-[10px] text-white/40">vs dual native</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: '#12082e', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
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

        {/* Framework Decision */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Framework Selection" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Flutter vs React Native vs Native &mdash; We Help You Decide
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Most agencies push a single framework regardless of your needs. We run a structured decision workshop and recommend the right tool for your project, team, and budget.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {frameworks.map((fw, i) => (
              <div key={i} className="border-2 rounded-2xl overflow-hidden hover:shadow-xl transition-all" style={{ borderColor: `${fw.color}30` }}>
                {/* Header */}
                <div className="px-6 py-5 flex items-center gap-3" style={{ background: `${fw.color}12` }}>
                  <div className="text-3xl">{fw.logo}</div>
                  <div>
                    <div className="font-black text-[#0a1628] text-lg">{fw.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{fw.tech}</div>
                  </div>
                </div>
                <div className="px-5 py-2 text-xs font-bold uppercase tracking-widest" style={{ color: fw.color, background: `${fw.color}08` }}>
                  Best for: {fw.best}
                </div>
                {/* When to choose */}
                <div className="p-5 border-t border-gray-100">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Choose when</div>
                  <div className="space-y-2 mb-4">
                    {fw.when.map(w => (
                      <div key={w} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5" style={{ color: fw.color }} />
                        <span className="text-gray-600 text-xs">{w}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Reconsider if</div>
                  <div className="space-y-1.5">
                    {fw.notWhen.map(w => (
                      <div key={w} className="flex items-start gap-2">
                        <div className="w-3 h-3 rounded-full border border-gray-300 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400 text-xs">{w}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-l-4 rounded-r-2xl px-5 py-4" style={{ borderLeftColor: ACCENT, background: ACCENT_LIGHT }}>
            <p className="text-purple-900 text-sm leading-relaxed">
              <strong>Our Approach:</strong> We run a 90-minute framework selection workshop with your team in the first week. You get a written recommendation with scoring across 8 criteria (team skills, platform targets, UI requirements, performance, timeline, budget, long-term maintenance, ecosystem maturity). No pressure, no upselling.
            </p>
          </div>
        </section>

        {/* Cost Savings */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="Cost Analysis" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                The 60% Cost Saving is Real &mdash; Here is the Breakdown
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                The savings come from writing code once instead of twice. Every feature built, every bug fixed, every OS update handled &mdash; it all happens in a single codebase reviewed once, tested once, deployed to both platforms simultaneously.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                The savings are highest on ongoing work. Initial development saves 45%. But feature additions save 50%, bug fixes save 55%, and adding a new platform (like Web or Desktop) saves 70% versus building that platform natively from scratch.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '1 team', label: 'Instead of 2 separate native teams' },
                  { value: '1 review', label: 'Code review covers both platforms' },
                  { value: '1 deploy', label: 'CI/CD pipeline ships to all stores' },
                  { value: '1 fix', label: 'Bug fixed once, deployed everywhere' },
                ].map((m, i) => (
                  <div key={i} className="rounded-2xl p-5 border border-gray-100" style={{ background: ACCENT_LIGHT }}>
                    <div className="text-xl font-black mb-1" style={{ color: ACCENT_DARK }}>{m.value}</div>
                    <div className="text-gray-500 text-sm leading-snug">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost comparison bars */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 flex items-center justify-between" style={{ background: '#1e1040' }}>
                <span className="text-white font-bold text-sm">Cost Comparison: Cross-Platform vs Dual Native</span>
              </div>
              <div className="p-6 space-y-5">
                {costComparison.map(row => (
                  <div key={row.phase}>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-[#0a1628] font-semibold">{row.phase}</span>
                      <span className="font-black" style={{ color: ACCENT }}>Save {row.savings}</span>
                    </div>
                    <div className="space-y-1.5">
                      <div>
                        <div className="flex justify-between text-[10px] mb-1">
                          <span className="text-gray-400">Dual Native (iOS + Android separately)</span>
                          <span className="text-gray-400">100%</span>
                        </div>
                        <div className="h-2.5 bg-gray-200 rounded-full" />
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] mb-1">
                          <span className="font-semibold" style={{ color: ACCENT_DARK }}>Cross-Platform</span>
                          <span className="font-bold" style={{ color: ACCENT_DARK }}>{row.crossPlatform}%</span>
                        </div>
                        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${row.crossPlatform}%`, background: `linear-gradient(90deg, ${ACCENT_DARK}, ${ACCENT})` }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between" style={{ background: ACCENT_LIGHT }}>
                <span className="text-sm text-gray-600">Average across all phases</span>
                <span className="text-xl font-black" style={{ color: ACCENT_DARK }}>~55% savings</span>
              </div>
            </div>
          </div>
        </section>

        {/* What is Included */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="What's Included" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Complete Cross-Platform Development Package
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            From framework selection consulting to simultaneous multi-store deployment &mdash; everything in one engagement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 border border-gray-100 rounded-xl px-4 py-3.5" style={{ background: ACCENT_LIGHT }}>
                <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: ACCENT_DARK }} />
                <span className="text-gray-700 text-sm font-medium leading-snug">{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Our Process" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            8-Step Cross-Platform Development Process
          </h2>
          <p className="text-gray-500 text-base mb-14 max-w-2xl">
            From framework strategy to simultaneous launch across all target platforms.
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
                        style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})` }}
                      >
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1 border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-md transition-all" style={{ background: ACCENT_LIGHT }}>
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${ACCENT}18` }}>
                          <Icon size={18} style={{ color: ACCENT_DARK }} />
                        </div>
                        <h3 className="text-[#0a1628] font-bold text-lg leading-snug pt-1">{step.title}</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">{step.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map(d => (
                          <span key={d} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: `${ACCENT}15`, color: ACCENT_DARK }}>
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

        {/* Tech Stacks */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Technology Stack" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Two World-Class Stacks. We Master Both.
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Depending on which framework we recommend for your project, here are the full technology stacks we deploy.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {techStack.map((fw, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 text-white font-bold text-base flex items-center gap-3" style={{ background: `${fw.color}22`, borderBottom: `2px solid ${fw.color}` }}>
                  <div className="w-3 h-3 rounded-full" style={{ background: fw.color }} />
                  <span className="text-[#0a1628]">{fw.framework}</span>
                </div>
                <div className="divide-y divide-gray-100">
                  {fw.categories.map(cat => (
                    <div key={cat.name} className="px-6 py-4">
                      <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: fw.color }}>{cat.name}</div>
                      <div className="flex flex-wrap gap-2">
                        {cat.items.map(item => (
                          <span key={item} className="text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 bg-white">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Industries We Serve" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Cross-Platform Apps for Every Business
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Cross-platform is the right call for most product categories &mdash; here is where the cost savings are most impactful.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {appTypes.map((app, i) => {
              const Icon = app.icon
              return (
                <div key={i} className="group border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${ACCENT}14` }}>
                    <Icon size={20} style={{ color: ACCENT_DARK }} />
                  </div>
                  <h4 className="text-[#0a1628] font-bold text-sm mb-2 group-hover:text-[#a855f7] transition-colors">{app.name}</h4>
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
            Why Choose Kotibox for Cross-Platform?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Scale,
                title: 'Vendor-Neutral Framework Advice',
                desc: 'We do not specialise in only Flutter or only React Native. We master both and recommend the right one based on your project, not our internal preferences. You get an honest written recommendation with scoring.',
              },
              {
                icon: Layers,
                title: 'Shared-First Architecture',
                desc: 'We architect for maximum code sharing from day one -- typically 85 to 95%. Business logic, state, and API layers are 100% shared. UI components are shared wherever possible, with platform-specific code kept under 10%.',
              },
              {
                icon: Target,
                title: 'One Team Owns Both Platforms',
                desc: 'A single cross-platform developer on our team can review, test, and ship to both iOS and Android. You get consistent code quality, unified documentation, and faster reviews compared to managing two separate native teams.',
              },
              {
                icon: Gauge,
                title: 'Production-Grade Performance',
                desc: 'Flutter Impeller and React Native New Architecture (JSI) both deliver 60fps UIs without the performance compromises of older cross-platform approaches. We benchmark every release against native equivalents.',
              },
              {
                icon: RefreshCw,
                title: 'Single Maintenance Forever',
                desc: 'OS updates, SDK upgrades, security patches -- handled once, deployed to both platforms. The cross-platform maintenance advantage compounds over time, making it even more cost-effective long term.',
              },
              {
                icon: Settings,
                title: 'Unified CI/CD for All Stores',
                desc: 'One CI/CD pipeline builds, tests, and submits to Google Play and App Store simultaneously. Codemagic (Flutter) or EAS Build (React Native) plus Fastlane automation -- no manual store management.',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="rounded-2xl p-6 border border-t-4" style={{ borderTopColor: ACCENT, borderColor: '#e5e7eb', background: ACCENT_LIGHT }}>
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${ACCENT}18` }}>
                    <Icon size={20} style={{ color: ACCENT_DARK }} />
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
            Cross-Platform Development Resources We Use
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            We track official releases for both frameworks and contribute to the cross-platform open-source ecosystem.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Flutter Resources',
                color: '#54c5f8',
                items: [
                  'Flutter SDK (Stable Channel)',
                  'flutter.dev & Dart documentation',
                  'pub.dev (500K+ packages)',
                  'Flutter DevTools (profiler)',
                  'Codemagic CI/CD',
                  'Firebase FlutterFire suite',
                ],
              },
              {
                category: 'React Native Resources',
                color: '#61dafb',
                items: [
                  'React Native (New Architecture)',
                  'Expo SDK + EAS Build/Submit',
                  'Expo Updates (OTA)',
                  'Flipper + Reactotron debugging',
                  'Detox E2E testing',
                  'Sentry React Native',
                ],
              },
              {
                category: 'Shared Infrastructure',
                color: ACCENT,
                items: [
                  'GitHub / GitLab monorepo',
                  'Fastlane (multi-store automation)',
                  'Firebase (Auth, Analytics, Crashlytics)',
                  'Figma (cross-platform design system)',
                  'Jira / Linear (unified sprint tracking)',
                  'Slack (unified team notifications)',
                ],
              },
              {
                category: 'Testing & QA',
                color: '#34d399',
                items: [
                  'Jest (shared business logic tests)',
                  'Flutter widget tests + Detox/Patrol',
                  'Firebase Test Lab (real device matrix)',
                  'Storybook (cross-platform UI catalogue)',
                  'Percy / Chromatic (visual regression)',
                  'Performance profiling (both platforms)',
                ],
              },
              {
                category: 'Security & Compliance',
                color: '#f87171',
                items: [
                  'flutter_secure_storage / react-native-encrypted-storage',
                  'OWASP Mobile Security Guide (MSTG)',
                  'Single certificate pinning implementation',
                  'iOS Privacy Manifest (PrivacyInfo.xcprivacy)',
                  'Android Play Integrity API',
                  'Single obfuscation config (both stores)',
                ],
              },
              {
                category: 'Distribution',
                color: '#f59e0b',
                items: [
                  'Google Play Store (Android)',
                  'Apple App Store (iOS)',
                  'Firebase Hosting / Vercel (Web)',
                  'Mac App Store / Windows Store (Desktop)',
                  'Firebase App Distribution (beta)',
                  'Unified ASO for both store listings',
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

        {/* CTA */}
        <section className="py-20 border-b border-gray-100">
          <div className="rounded-3xl overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #1e1040 0%, #0a1628 100%)' }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-[100px]" style={{ background: ACCENT }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-8 blur-[80px]" style={{ background: '#54c5f8' }} />
            <div className="relative px-8 md:px-16 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Free Framework Consultation</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Not Sure Which Platform<br />
                  <span style={{ color: ACCENT }}>Strategy Is Right For You?</span>
                </h2>
                <p className="text-white/55 text-base max-w-lg">
                  Book a free 60-minute framework selection call. We analyse your project, team, and budget and give you a written Flutter vs React Native vs native recommendation with full cost breakdown.
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
                  See Our Apps <Play size={14} />
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
              Everything you need to know about cross-platform app development.
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
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3">Explore Individual Frameworks</h2>
          <p className="text-gray-500 text-base mb-10">Dive deeper into each platform-specific or framework-specific service.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { slug: 'android', tag: 'Android', title: 'Android App Development', desc: 'Native Kotlin & Jetpack Compose for 3.9B Android users.', color: '#3ddc84', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80' },
              { slug: 'ios', tag: 'iOS', title: 'iOS App Development', desc: 'Native Swift & SwiftUI following Apple HIG for premium UX.', color: '#007aff', img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&q=80' },
              { slug: 'flutter', tag: 'Flutter', title: 'Flutter App Development', desc: 'Dart & Impeller engine for 6 platforms from one codebase.', color: '#54c5f8', img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80' },
              { slug: 'react-native', tag: 'React Native', title: 'React Native Development', desc: 'TypeScript + JSI New Architecture with OTA update capability.', color: '#61dafb', img: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600&q=80' },
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
                  <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-3" style={{ background: s.color }}>{s.tag}</span>
                  <h3 className="font-bold text-[#0a1628] group-hover:opacity-80 transition-opacity mb-1.5 text-sm leading-snug">{s.title}</h3>
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
