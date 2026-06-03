'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, ChevronUp,
  Smartphone, Code2, Layers, TestTube2, Settings,
  Shield, Zap, Globe, Users, TrendingUp, Play,
  Monitor, Cpu, Database, Cloud,
  Paintbrush, BarChart3, Lock, RefreshCw, Package,
  Gauge, GitBranch, Puzzle, Terminal, Repeat, Boxes
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const ACCENT = '#61dafb'
const ACCENT2 = '#20232a'
const ACCENT_DARK = '#282c34'
const ACCENT_LIGHT = '#eafaff'

// --- Data -------------------------------------------------------------------

const stats = [
  { value: '150+', label: 'RN Apps Deployed', icon: Smartphone },
  { value: '90%', label: 'Code Shared iOS & Android', icon: Repeat },
  { value: '2x', label: 'Faster Than Dual Native', icon: Zap },
  { value: 'OTA', label: 'Instant Updates via EAS', icon: RefreshCw },
]

const processSteps = [
  {
    step: '01', icon: Users,
    title: 'Discovery & JavaScript Strategy',
    desc: 'We begin by auditing your existing web/React codebase to identify how much business logic can be shared with the mobile app. We define the Expo vs bare workflow decision, plan the navigation stack (React Navigation), and scope features for the first release.',
    deliverables: ['Web-to-Mobile Code Audit', 'Expo vs Bare Workflow Decision', 'Navigation Architecture Plan', 'Feature Scope & Sprint Roadmap'],
  },
  {
    step: '02', icon: Paintbrush,
    title: 'UI/UX Design with Platform Adaptivity',
    desc: 'We design platform-adaptive UIs in Figma that look and feel native on both iOS and Android. Using React Native\'s Platform API and styled-components/NativeWind, we build components that automatically adopt platform conventions while sharing a single component tree.',
    deliverables: ['Platform-Adaptive Figma Designs', 'iOS & Android Comparison Screens', 'Component Library Spec', 'Interactive Prototype'],
  },
  {
    step: '03', icon: Layers,
    title: 'Architecture & New Architecture Planning',
    desc: 'We set up the project with React Native\'s New Architecture (JSI + Fabric + TurboModules) for maximum performance, configure Redux Toolkit or Zustand for state management, set up React Query for server state, and establish the monorepo structure if sharing code with a web app.',
    deliverables: ['New Architecture Config (Fabric/JSI)', 'State Management Blueprint', 'Monorepo Setup (if applicable)', 'API & Data Layer Design'],
  },
  {
    step: '04', icon: Code2,
    title: 'TypeScript Development with Expo EAS',
    desc: 'Two-week sprints using TypeScript for type safety across iOS and Android. We use Expo EAS Build for cloud compilation (no local Xcode/Android Studio required for CI), deliver OTA preview builds via Expo Go or custom dev client, and run Flipper-assisted debugging sessions.',
    deliverables: ['EAS Build APK/IPA per Sprint', 'OTA Preview via Expo Go', 'TypeScript Code with Tests', 'Sprint Demo Recordings'],
  },
  {
    step: '05', icon: TestTube2,
    title: 'QA, Detox E2E & Device Testing',
    desc: 'Unit tests with Jest and React Native Testing Library, end-to-end tests with Detox on physical iOS and Android devices, and visual regression tests with Storybook. We test on a matrix of 20+ real devices including Android low-end devices to ensure performance on budget hardware.',
    deliverables: ['Jest Unit Test Reports', 'Detox E2E Test Results', 'Physical Device Matrix Report', 'Storybook Component Catalogue'],
  },
  {
    step: '06', icon: Shield,
    title: 'Security Hardening & Code Obfuscation',
    desc: 'We implement react-native-encrypted-storage (Keychain/Keystore), SSL pinning with react-native-ssl-pinning, JavaScript bundle obfuscation with Hermes bytecode compilation, root/jailbreak detection, and comply with OWASP Mobile Top 10 across both platforms.',
    deliverables: ['Encrypted Storage Setup', 'SSL Pinning Implementation', 'Hermes Bytecode Obfuscation', 'OWASP Compliance Checklist'],
  },
  {
    step: '07', icon: Play,
    title: 'EAS Submit to Both Stores',
    desc: 'Simultaneous Play Store and App Store submission using Expo EAS Submit. One command builds and submits to both stores. We configure phased rollouts, handle App Review queries, set up OTA update channels (production, staging, preview) via Expo Updates.',
    deliverables: ['Play Store & App Store Submission', 'OTA Update Channel Setup', 'ASO-Optimized Store Listings', 'Phased Rollout Configuration'],
  },
  {
    step: '08', icon: RefreshCw,
    title: 'Post-Launch OTA Updates & Support',
    desc: 'Six months of post-launch support including OTA JavaScript bundle updates (bypassing store review for JS-only changes), React Native version upgrade management, native module compatibility patches, crash monitoring via Sentry, and feature iteration sprints.',
    deliverables: ['OTA Update Management (EAS)', 'RN Version Upgrade Support', 'Sentry Crash Monitoring', 'Feature Iteration Sprints'],
  },
]

const techCategories = [
  {
    name: 'Language & Core', icon: Code2, color: '#61dafb',
    techs: [
      { name: 'TypeScript', desc: 'Full TypeScript adoption for type-safe components, hooks, navigation, and API layers.' },
      { name: 'React Native (New Arch)', desc: 'JSI + Fabric + TurboModules for synchronous JS-native communication without bridge overhead.' },
      { name: 'Hermes Engine', desc: "Facebook's optimized JS engine for React Native, delivering faster TTI and lower memory usage." },
    ],
  },
  {
    name: 'State Management', icon: GitBranch, color: '#a78bfa',
    techs: [
      { name: 'Redux Toolkit', desc: 'Opinionated Redux setup with createSlice, RTK Query, and immer for predictable global state.' },
      { name: 'Zustand', desc: 'Lightweight, hook-based state management for simpler apps without Redux boilerplate.' },
      { name: 'React Query / TanStack', desc: 'Server state caching, background refetching, and optimistic updates for API-driven apps.' },
    ],
  },
  {
    name: 'UI & Navigation', icon: Paintbrush, color: '#f472b6',
    techs: [
      { name: 'React Navigation v7', desc: 'Stack, Tab, Drawer, and Bottom Sheet navigators with deep linking and typed routes.' },
      { name: 'NativeWind', desc: 'Tailwind CSS utility classes in React Native, sharing design tokens with your web app.' },
      { name: 'React Native Reanimated 3', desc: 'Worklet-based animations running on the UI thread for 60fps gesture-driven interactions.' },
    ],
  },
  {
    name: 'Networking & Data', icon: Database, color: '#f59e0b',
    techs: [
      { name: 'Axios + React Query', desc: 'HTTP client with interceptors plus server-state caching, deduplication, and background sync.' },
      { name: 'MMKV', desc: "10x faster than AsyncStorage. Used for app preferences and cache via Marc Rousavy's native bridge." },
      { name: 'WatermelonDB', desc: 'High-performance local SQLite database designed for large offline-first React Native apps.' },
    ],
  },
  {
    name: 'Expo & Tooling', icon: Boxes, color: '#34d399',
    techs: [
      { name: 'Expo SDK + EAS Build', desc: 'Managed workflow for rapid development; EAS Build for cloud native compilation without local setup.' },
      { name: 'Expo Updates (OTA)', desc: 'Push JavaScript bundle updates to users instantly without App Store or Play Store review.' },
      { name: 'Flipper + Reactotron', desc: 'Native debugging platform and React Native-specific dev tool for network, state, and Redux inspection.' },
    ],
  },
  {
    name: 'Testing', icon: TestTube2, color: '#f87171',
    techs: [
      { name: 'Jest + RNTL', desc: 'Unit and integration tests with React Native Testing Library, mocking native modules cleanly.' },
      { name: 'Detox', desc: "Wix's gray-box E2E testing framework running on real iOS simulators and Android emulators." },
      { name: 'Storybook RN', desc: 'Component-driven development and visual regression testing for every UI component in isolation.' },
    ],
  },
]

const appTypes = [
  { name: 'E-Commerce & Retail', icon: Package, desc: 'Share product catalog, cart logic, and checkout flow code between your React web store and mobile app.' },
  { name: 'FinTech & Payments', icon: Lock, desc: 'Biometric auth, encrypted wallets, real-time trading UIs, and payment gateway integration on both platforms.' },
  { name: 'On-Demand & Delivery', icon: Zap, desc: 'Real-time map tracking, push notifications, driver/customer apps from one JavaScript codebase.' },
  { name: 'SaaS Mobile Companion', icon: Monitor, desc: "Extend your existing React web SaaS with a mobile app sharing 70%+ of the business logic." },
  { name: 'Social & Community', icon: Users, desc: 'Chat, stories, notifications, and media uploading with native camera/gallery access.' },
  { name: 'EdTech & Learning', icon: Globe, desc: 'Video playback, offline content download, quizzes, and progress tracking across iOS and Android.' },
  { name: 'Healthcare & Wellness', icon: Shield, desc: 'HealthKit/Google Fit integration, appointment booking, medication reminders, and secure messaging.' },
  { name: 'Enterprise Internal Tools', icon: BarChart3, desc: 'Approval workflows, inventory scanning (camera), field-force dashboards with offline-first SQLite.' },
]

const features = [
  'TypeScript Throughout',
  'React Native New Architecture (JSI)',
  'Expo EAS Build & Submit',
  'OTA Updates (Expo Updates)',
  'Redux Toolkit / Zustand',
  'React Navigation v7',
  'React Native Reanimated 3',
  'NativeWind Styling',
  'MMKV Fast Storage',
  'Sentry Crash Monitoring',
  'Push Notifications (FCM/APNs)',
  'Biometric Authentication',
  'Camera, GPS & Device APIs',
  'Detox E2E Testing',
  'CodePush / EAS OTA',
  'Play Store & App Store Submit',
]

const faqs = [
  {
    question: 'How does React Native performance compare to native apps?',
    answer: "React Native's New Architecture (released stable in 2024) replaces the old async JavaScript bridge with JSI (JavaScript Interface), enabling synchronous calls between JS and native code. Combined with the Fabric renderer and TurboModules, modern React Native apps are within 5 to 10% of native performance for most use cases. Apps like Meta, Shopify, Microsoft Teams, and Coinbase use React Native in production at scale.",
  },
  {
    question: 'Should we choose Expo (managed) or bare React Native?',
    answer: "For most new projects, we recommend starting with Expo's managed workflow -- it eliminates native build environment setup and uses EAS Build for cloud compilation. For apps needing custom native modules not available in Expo's ecosystem (custom Bluetooth SDK, enterprise MDM, etc.), we use bare workflow with Expo modules still available. We can eject from managed to bare at any point without rewriting code.",
  },
  {
    question: 'What are OTA (Over-The-Air) updates and how do they work?',
    answer: "Expo Updates (formerly CodePush) lets you push JavaScript bundle changes directly to users without going through App Store or Play Store review. Only JavaScript and asset changes qualify -- native code changes still require a store submission. This means you can ship bug fixes, UI tweaks, and feature flags to 100% of your users within minutes of merging a PR, with zero user action required.",
  },
  {
    question: 'Can we share code between our React web app and React Native?',
    answer: "Yes, this is one of React Native's biggest advantages. Business logic written in TypeScript (API calls, validation, state management, utilities) is 100% reusable between web and mobile. UI components cannot be directly shared (web uses HTML/CSS, RN uses native components), but with tools like NativeWind and a shared design system, you can achieve 60 to 80% total code sharing across platforms.",
  },
  {
    question: 'How do you handle platform differences between iOS and Android?',
    answer: "React Native provides the Platform API for runtime platform detection, and .ios.tsx / .android.tsx file extensions for platform-specific component implementations. We use Platform.select() for minor differences (padding, fonts, shadow styles) and separate files for components that need fundamentally different implementations. The goal is to keep platform-specific code under 10% of the total codebase.",
  },
  {
    question: 'What is the React Native New Architecture and do you use it?',
    answer: "Yes, we adopt the New Architecture (stable since React Native 0.74) on all new projects. The key improvements: JSI replaces the async JSON bridge for synchronous JS-to-native calls; Fabric is the new concurrent-mode compatible renderer; TurboModules load native modules lazily instead of all at startup, reducing cold start time. Together these eliminate the 'bridge bottleneck' that caused jank in older React Native apps.",
  },
  {
    question: 'Can React Native apps access device hardware?',
    answer: "Yes. The React Native ecosystem has mature packages for virtually every device API: camera (react-native-vision-camera), GPS (react-native-geolocation), Bluetooth (react-native-ble-plx), NFC, biometrics (react-native-biometrics), payments (Stripe, Razorpay), HealthKit/Google Fit, AR (ViroReact), sensors, and more. If a community package does not exist, we write a native module in Swift/Kotlin bridged to JavaScript.",
  },
  {
    question: 'Do you maintain the app after React Native version upgrades?',
    answer: "Yes. React Native releases a new version every 6 weeks with major versions annually. Our 6-month post-launch support covers the first major version upgrade, resolving any native module compatibility issues that arise. React Native's upgrade-helper tool and our upgrade scripts minimize the manual effort required for each version bump.",
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
      style={open ? { borderColor: `${ACCENT}70` } : {}}
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

export default function ReactNativePage() {
  const { openModal } = useModal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: ACCENT_DARK }}>
        {/* Code-editor grid lines */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(rgba(97,218,251,0.5) 1px, transparent 1px)',
          backgroundSize: '100% 28px',
        }} />
        {/* React atom glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-[0.07] blur-[130px]" style={{ background: ACCENT }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[100px]" style={{ background: '#a78bfa' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-32 pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium bg-white/8 backdrop-blur-sm border border-white/15 px-4 py-2 rounded-full transition-colors mb-10"
          >
            <ArrowLeft size={15} /> Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left copy */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-extrabold text-xs tracking-wider uppercase"
                  style={{ background: ACCENT, color: ACCENT2 }}
                >
                  <Code2 size={12} /> React Native
                </span>
                <span className="text-white/40 text-sm">Mobile App Development</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.06] mb-6">
                React Native<br />
                <span style={{ color: ACCENT }}>App Development</span><br />
                Services
              </h1>

              <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
                Cross-platform iOS &amp; Android apps in TypeScript with React Native&apos;s New Architecture. Share up to 90% of code between platforms and ship OTA updates without store approval.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {['TypeScript', 'New Architecture (JSI)', 'Expo EAS', 'Redux Toolkit', 'React Navigation', 'OTA Updates'].map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 text-white/70 bg-white/8">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg"
                  style={{ background: ACCENT, color: ACCENT2 }}
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

            {/* Right -- code terminal card */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10" style={{ background: '#1e2127' }}>
                {/* Terminal top bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10" style={{ background: '#2c313a' }}>
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full" style={{ background: ACCENT }} />
                  <span className="ml-3 text-white/40 text-xs font-mono">App.tsx</span>
                </div>
                {/* Code lines */}
                <div className="p-5 font-mono text-sm leading-7">
                  <div><span className="text-purple-400">import</span> <span className="text-white">React</span> <span className="text-purple-400">from</span> <span className="text-green-400">&apos;react&apos;</span><span className="text-white">;</span></div>
                  <div><span className="text-purple-400">import</span> <span className="text-white">{'{ View, Text, StyleSheet }'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">&apos;react-native&apos;</span><span className="text-white">;</span></div>
                  <div className="text-white/20">{'  '}</div>
                  <div><span className="text-blue-400">const</span> <span style={{ color: ACCENT }}>App</span> <span className="text-white">= () </span><span className="text-blue-400">=&gt;</span> <span className="text-white">{'{'}</span></div>
                  <div className="pl-4"><span className="text-purple-400">return</span> <span className="text-white">{'('}</span></div>
                  <div className="pl-8"><span className="text-orange-400">{'<View'}</span> <span style={{ color: ACCENT }}>style</span><span className="text-white">=</span><span className="text-white">{'{'}</span><span className="text-orange-400">styles.container</span><span className="text-white">{'}'}</span><span className="text-orange-400">{'>'}</span></div>
                  <div className="pl-12"><span className="text-orange-400">{'<Text'}</span> <span style={{ color: ACCENT }}>style</span><span className="text-white">=</span><span className="text-white">{'{'}</span><span className="text-orange-400">styles.title</span><span className="text-white">{'}'}</span><span className="text-orange-400">{'>'}</span></div>
                  <div className="pl-16 text-white">Hello, Kotibox!</div>
                  <div className="pl-12"><span className="text-orange-400">{'</Text>'}</span></div>
                  <div className="pl-8"><span className="text-orange-400">{'</View>'}</span></div>
                  <div className="pl-4"><span className="text-white">{')'}</span></div>
                  <div><span className="text-white">{'}'}</span></div>
                  <div className="text-white/20">{'  '}</div>
                  <div><span className="text-purple-400">export default</span> <span style={{ color: ACCENT }}>App</span><span className="text-white">;</span></div>
                </div>
                {/* Terminal bottom bar */}
                <div className="px-4 py-2.5 border-t border-white/10 flex items-center justify-between" style={{ background: '#2c313a' }}>
                  <div className="flex items-center gap-2">
                    <Terminal size={12} style={{ color: ACCENT }} />
                    <span className="text-white/50 text-xs font-mono">npx expo start</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
                    <span className="text-xs font-mono" style={{ color: ACCENT }}>Running on iOS + Android</span>
                  </div>
                </div>
              </div>

              {/* Floating metrics */}
              <div className="absolute -top-5 -right-5 rounded-2xl px-5 py-3 shadow-xl border border-white/10" style={{ background: '#2c313a' }}>
                <div className="text-xs text-white/50 mb-1">Code Sharing</div>
                <div className="text-2xl font-black" style={{ color: ACCENT }}>90%</div>
                <div className="text-xs text-white/40">iOS + Android</div>
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl px-5 py-3 shadow-xl border border-white/10" style={{ background: '#2c313a' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#34d399' }} />
                  <span className="text-white text-xs font-semibold">OTA Update Pushed</span>
                </div>
                <div className="text-white/40 text-[10px] mt-0.5">No store review needed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: ACCENT2, borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
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

        {/* Why React Native */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="Why React Native?" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                The JavaScript Framework Trusted by Meta, Shopify &amp; Microsoft
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                React Native lets you use the same JavaScript and React skills your web team already has to build real native mobile apps. Not web views, not wrappers &mdash; actual native components rendered by iOS UIKit and Android View system.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                With the <strong className="text-[#0a1628]">New Architecture (stable since RN 0.74)</strong>, the old bridge bottleneck is gone. JSI enables synchronous communication between JavaScript and native modules, Fabric brings concurrent rendering, and TurboModules load lazily &mdash; delivering performance that rivals native at a fraction of the development cost.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '2M+', label: 'Developers Using React Native' },
                  { value: 'Meta', label: 'Facebook, Instagram, WhatsApp' },
                  { value: 'Shopify', label: 'Rebuilt Entire App in RN' },
                  { value: '2024', label: 'New Architecture Stable' },
                ].map((m, i) => (
                  <div key={i} className="rounded-2xl p-5 border border-gray-100" style={{ background: ACCENT_LIGHT }}>
                    <div className="text-2xl font-black mb-1" style={{ color: ACCENT2 }}>{m.value}</div>
                    <div className="text-gray-500 text-sm">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80"
                alt="React Native Development"
                className="rounded-3xl w-full h-64 object-cover shadow-xl"
              />

              {/* New Architecture comparison */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className="px-5 py-3 text-xs font-bold text-white uppercase tracking-widest" style={{ background: ACCENT2 }}>
                  Old Bridge vs New Architecture (JSI)
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    { metric: 'JS-to-Native Calls', old: 'Async JSON bridge', new: 'Synchronous via JSI' },
                    { metric: 'Renderer', old: 'Legacy (shadow thread)', new: 'Fabric (concurrent)' },
                    { metric: 'Native Modules', old: 'Eager load all', new: 'Lazy TurboModules' },
                    { metric: 'Cold Start', old: 'Slower', new: 'Up to 40% faster' },
                  ].map(row => (
                    <div key={row.metric} className="grid grid-cols-3 text-xs px-4 py-2.5 gap-2">
                      <span className="text-gray-500 font-medium">{row.metric}</span>
                      <span className="text-gray-400">{row.old}</span>
                      <span className="font-bold" style={{ color: ACCENT2 }}>{row.new}</span>
                    </div>
                  ))}
                  <div className="grid grid-cols-3 text-[10px] px-4 py-1.5 bg-gray-50 gap-2">
                    <span className="text-gray-400">Metric</span>
                    <span className="text-gray-400">Old Bridge</span>
                    <span className="font-bold" style={{ color: ACCENT2 }}>New Arch</span>
                  </div>
                </div>
              </div>

              <div className="border-l-4 rounded-r-2xl px-5 py-4" style={{ borderLeftColor: ACCENT, background: ACCENT_LIGHT }}>
                <p className="text-cyan-900 text-sm leading-relaxed">
                  <strong>Kotibox Insight:</strong> React Native is the ideal choice when your team already knows React, you need OTA update capability, or you are extending an existing React web product with a mobile companion app sharing business logic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OTA Updates Section */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="OTA Updates" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                Ship Fixes in Minutes. No Store Review Needed.
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                React Native&apos;s biggest operational advantage: Expo Updates (OTA) lets you push new JavaScript bundles directly to users&apos; devices. A critical bug fix that would take 3 to 7 days through App Store review can reach 100% of your users in under 10 minutes.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Instant Bug Fixes', desc: 'A JavaScript bug discovered on Monday is fixed and deployed to all users by Monday afternoon. No 3-day store review wait.' },
                  { title: 'Feature Flags & A/B Testing', desc: 'Use Expo Updates channels (production, staging, preview) to test new features with a subset of users before full rollout.' },
                  { title: 'Rollback in Seconds', desc: 'If an OTA update causes issues, roll back to the previous bundle version instantly with a single CLI command.' },
                  { title: 'Silent Background Updates', desc: 'Updates download in the background while the user uses the app and apply on the next launch -- zero interruption.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 border border-gray-100 rounded-xl" style={{ background: ACCENT_LIGHT }}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-black" style={{ background: ACCENT, color: ACCENT2 }}>
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

            {/* Code sharing visual */}
            <div>
              <SectionLabel text="Code Sharing" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                Write Once, Run on iOS &amp; Android
              </h2>

              <div className="rounded-2xl overflow-hidden border border-gray-200">
                <div className="px-5 py-4 text-sm font-bold text-white" style={{ background: ACCENT2 }}>
                  React Native Code Sharing Breakdown
                </div>
                <div className="p-5 space-y-4">
                  {[
                    { layer: 'Business Logic & Utilities', pct: 100, color: '#34d399', note: 'TypeScript utils, formatters, validators' },
                    { layer: 'State Management (Redux/Zustand)', pct: 100, color: '#34d399', note: 'Shared slices, selectors, actions' },
                    { layer: 'API Layer (React Query)', pct: 100, color: '#34d399', note: 'All API calls and data transforms' },
                    { layer: 'UI Components', pct: 80, color: ACCENT, note: '~80% shared, ~20% platform-specific' },
                    { layer: 'Navigation', pct: 90, color: ACCENT, note: 'Mostly shared, minor platform tweaks' },
                    { layer: 'Native Modules', pct: 0, color: '#f87171', note: 'Platform-specific (auto-linked by RN)' },
                  ].map(row => (
                    <div key={row.layer}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <div>
                          <span className="font-semibold text-[#0a1628]">{row.layer}</span>
                          <span className="text-gray-400 ml-2">{row.note}</span>
                        </div>
                        <span className="font-black ml-4 flex-shrink-0" style={{ color: row.color }}>{row.pct}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all" style={{ width: `${row.pct}%`, background: row.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between" style={{ background: ACCENT_LIGHT }}>
                  <span className="text-sm text-gray-500">Total code shared</span>
                  <span className="text-xl font-black" style={{ color: ACCENT2 }}>~90%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Included */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="What's Included" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Complete React Native Development Package
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Every React Native project ships to both iOS and Android with no extra cost per platform.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 border border-gray-100 rounded-xl px-4 py-3.5" style={{ background: ACCENT_LIGHT }}>
                <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: ACCENT2 }} />
                <span className="text-gray-700 text-sm font-medium leading-snug">{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Our Process" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            8-Step React Native Development Process
          </h2>
          <p className="text-gray-500 text-base mb-14 max-w-2xl">
            From JavaScript architecture to simultaneous Play Store and App Store submission.
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
                        className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm shadow-lg"
                        style={{ background: ACCENT, color: ACCENT2 }}
                      >
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1 border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-md transition-all" style={{ background: ACCENT_LIGHT }}>
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${ACCENT2}15` }}>
                          <Icon size={18} style={{ color: ACCENT2 }} />
                        </div>
                        <h3 className="text-[#0a1628] font-bold text-lg leading-snug pt-1">{step.title}</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">{step.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map(d => (
                          <span key={d} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: `${ACCENT2}12`, color: ACCENT2 }}>
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
            The React Native Tech Ecosystem We Master
          </h2>
          <p className="text-gray-500 text-base mb-14 max-w-2xl">
            We use the official React Native New Architecture with the most battle-tested packages from the community.
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

        {/* Industries */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Industries We Serve" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            React Native Apps Across Every Industry
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            React Native is especially powerful for teams with existing React web products looking to extend to mobile without a separate team.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {appTypes.map((app, i) => {
              const Icon = app.icon
              return (
                <div key={i} className="group border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${ACCENT}18` }}>
                    <Icon size={20} style={{ color: ACCENT2 }} />
                  </div>
                  <h4 className="text-[#0a1628] font-bold text-sm mb-2 group-hover:text-[#61dafb] transition-colors">{app.name}</h4>
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
            Why Choose Kotibox for React Native?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Puzzle,
                title: 'New Architecture by Default',
                desc: 'Every new project we start uses JSI + Fabric + TurboModules. We do not build on the old bridge architecture -- only the performance-first New Architecture that is the future of React Native.',
              },
              {
                icon: Layers,
                title: 'TypeScript-First Codebase',
                desc: 'Full TypeScript adoption across components, hooks, navigation types, API response types, and Redux slices. Strongly typed codebases have fewer runtime bugs and are far easier to maintain as the team grows.',
              },
              {
                icon: RefreshCw,
                title: 'OTA Update Strategy Included',
                desc: 'We configure Expo Updates with production, staging, and preview channels from day one. Your team can ship JavaScript fixes to users in minutes without waiting for store review -- a capability many agencies skip setting up.',
              },
              {
                icon: Gauge,
                title: '60fps Animations on Both Platforms',
                desc: 'We use React Native Reanimated 3 worklets for all gesture-driven animations, ensuring they run on the UI thread at 60fps regardless of JavaScript thread load -- the key to a native-feeling app.',
              },
              {
                icon: Lock,
                title: 'Cross-Platform Security in One Place',
                desc: 'react-native-encrypted-storage maps to iOS Keychain and Android Keystore automatically. One implementation covers both platforms with SSL pinning, Hermes bytecode obfuscation, and OWASP compliance.',
              },
              {
                icon: Settings,
                title: 'EAS Build CI/CD Included',
                desc: 'Expo EAS Build compiles iOS and Android in the cloud -- no Mac required for your team. EAS Submit automates delivery to both stores. Every PR triggers a preview build shared with your QA team.',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="rounded-2xl p-6 border border-t-4" style={{ borderTopColor: ACCENT, borderColor: '#e5e7eb', background: ACCENT_LIGHT }}>
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${ACCENT2}15` }}>
                    <Icon size={20} style={{ color: ACCENT2 }} />
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
            React Native Development Resources We Use
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Our team tracks the React Native CHANGELOG, contributes to community packages, and follows the Meta React Native team blog.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Core React Native Resources',
                color: ACCENT,
                items: [
                  'React Native (New Architecture, 0.74+)',
                  'reactnative.dev official documentation',
                  'Expo SDK & EAS (expo.dev)',
                  'React Native CHANGELOG & releases',
                  'Meta React Native Blog',
                  'React Native Upgrade Helper',
                ],
              },
              {
                category: 'Quality & Performance',
                color: '#34d399',
                items: [
                  'Flipper (native debugging)',
                  'Reactotron (state & network inspector)',
                  'Sentry React Native (crash monitoring)',
                  'Firebase Performance for RN',
                  'Jest + React Native Testing Library',
                  'Detox (E2E on iOS simulator & Android)',
                ],
              },
              {
                category: 'Development & CI/CD',
                color: '#a78bfa',
                items: [
                  'Expo EAS Build (cloud compilation)',
                  'Expo EAS Submit (store automation)',
                  'Expo Updates (OTA deployment)',
                  'GitHub Actions + EAS webhook',
                  'Fastlane (Play Store / App Store)',
                  'Storybook React Native (component dev)',
                ],
              },
              {
                category: 'State & Data Layer',
                color: '#f59e0b',
                items: [
                  'Redux Toolkit + RTK Query',
                  'Zustand (lightweight state)',
                  'TanStack Query (React Query v5)',
                  'Axios + custom interceptors',
                  'MMKV (fast key-value storage)',
                  'WatermelonDB (offline-first SQLite)',
                ],
              },
              {
                category: 'UI & Animation Libraries',
                color: '#f87171',
                items: [
                  'React Native Reanimated 3',
                  'React Native Gesture Handler',
                  'React Navigation v7',
                  'NativeWind (Tailwind for RN)',
                  'react-native-skia (canvas rendering)',
                  'Lottie React Native (JSON animations)',
                ],
              },
              {
                category: 'Distribution & Analytics',
                color: '#f472b6',
                items: [
                  'Google Play Store (Android)',
                  'Apple App Store (iOS)',
                  'Expo Go (internal preview)',
                  'Firebase App Distribution (beta)',
                  'Firebase Analytics for RN',
                  'Amplitude / Mixpanel event tracking',
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
          <div className="rounded-3xl overflow-hidden relative" style={{ background: ACCENT_DARK }}>
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
                  <span style={{ color: ACCENT }}>React Native App?</span>
                </h2>
                <p className="text-white/55 text-base max-w-lg">
                  Talk to our React Native team and get an architecture recommendation, OTA update strategy, and project estimate for both platforms within 24 hours.
                </p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <button
                  onClick={openModal}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all text-sm whitespace-nowrap"
                  style={{ background: ACCENT, color: ACCENT2 }}
                >
                  Get Free Consultation <ArrowRight size={16} />
                </button>
                <Link
                  href="/live-demo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/80 border border-white/20 hover:bg-white/10 transition-all text-sm"
                >
                  See RN Projects <Play size={14} />
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
              Everything you need to know before choosing React Native for your project.
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
          <p className="text-gray-500 text-base mb-10">Explore other mobile development approaches to find the best fit for your project.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { slug: 'android', tag: 'Android', title: 'Android App Development', desc: 'Native Kotlin & Jetpack Compose for 3.9B Android users.', color: '#3ddc84', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80' },
              { slug: 'ios', tag: 'iOS', title: 'iOS App Development', desc: 'Native Swift & SwiftUI following Apple HIG for premium UX.', color: '#007aff', img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&q=80' },
              { slug: 'flutter', tag: 'Flutter', title: 'Flutter App Development', desc: 'Dart & Flutter for 6 platforms from one codebase.', color: '#54c5f8', img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80' },
              { slug: 'cross-platform', tag: 'Cross Platform', title: 'Cross Platform Apps', desc: 'Full multi-platform strategy across mobile, web, and desktop.', color: '#a855f7', img: 'https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?w=600&q=80' },
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
