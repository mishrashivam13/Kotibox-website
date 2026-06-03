'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, ChevronUp,
  Smartphone, Code2, Layers, TestTube2, Settings,
  Shield, Zap, Globe, Users, TrendingUp, Play,
  Monitor, Cpu, Database, Cloud,
  Paintbrush, BarChart3, Bell, Lock, RefreshCw, Package,
  Sparkles, Gauge, Laptop, Layout, GitBranch, Puzzle
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const ACCENT = '#54c5f8'
const ACCENT2 = '#02569b'
const ACCENT_LIGHT = '#e8f7fe'

// --- Data -------------------------------------------------------------------

const stats = [
  { value: '200+', label: 'Flutter Apps Built', icon: Smartphone },
  { value: '4', label: 'Platforms from 1 Codebase', icon: Layout },
  { value: '60fps', label: 'Buttery Smooth UI', icon: Gauge },
  { value: '60%', label: 'Cost vs Dual Native', icon: TrendingUp },
]

const platforms = [
  { name: 'Android', icon: Smartphone, desc: 'Google Play Store, 12,000+ devices', color: '#3ddc84' },
  { name: 'iOS', icon: Smartphone, desc: 'App Store, iPhone & iPad', color: '#007aff' },
  { name: 'Web', icon: Globe, desc: 'Progressive Web App, all browsers', color: '#f59e0b' },
  { name: 'Windows', icon: Monitor, desc: 'Microsoft Store & sideload', color: '#0078d4' },
  { name: 'macOS', icon: Laptop, desc: 'Mac App Store & direct download', color: '#a78bfa' },
  { name: 'Linux', icon: Cpu, desc: 'Snap Store & AppImage', color: '#f87171' },
]

const processSteps = [
  {
    step: '01', icon: Users,
    title: 'Multi-Platform Strategy & Discovery',
    desc: 'We start by mapping your target platforms, audience segments, and device matrix. We define which Flutter rendering target (Skia vs Impeller) to use, plan the shared business logic layer, and lock the feature scope across all target platforms in one discovery session.',
    deliverables: ['Platform Priority Matrix', 'User Journey Maps (per platform)', 'Shared vs Platform-Specific Feature Map', 'Project Roadmap & Timeline'],
  },
  {
    step: '02', icon: Paintbrush,
    title: 'Design System & Flutter UI Architecture',
    desc: 'We create a unified design system in Figma and translate it into a Flutter widget library. Rather than following a single platform guideline, we design adaptive UIs that feel native on each platform using PlatformWidget patterns and cupertino/material adaptive components.',
    deliverables: ['Unified Design System', 'Flutter Widget Library', 'Adaptive UI Specs (iOS + Android)', 'Interactive Figma Prototype'],
  },
  {
    step: '03', icon: Layers,
    title: 'Architecture & State Management Planning',
    desc: 'We select the right state management approach (BLoC, Riverpod, or GetX) based on app complexity, define the clean architecture layers (Presentation, Domain, Data), design the repository pattern, and plan dependency injection using get_it or Riverpod providers.',
    deliverables: ['Architecture Decision Record', 'State Management Blueprint', 'Repository & DI Design', 'API Contract Docs'],
  },
  {
    step: '04', icon: Code2,
    title: 'Dart Development with Hot Reload',
    desc: 'Two-week sprints with daily hot reload iteration cycles. We write idiomatic Dart using sound null safety, develop features widget-by-widget with widget tests, and deliver testable APKs and IPAs at the end of every sprint for your review.',
    deliverables: ['Sprint APK/IPA/Web Builds', 'Widget & Unit Test Suite', 'Code Review Reports', 'Sprint Demo Sessions'],
  },
  {
    step: '05', icon: TestTube2,
    title: 'Multi-Platform QA & Performance Testing',
    desc: 'Flutter DevTools profiling on all target platforms, widget testing with flutter_test, integration tests with patrol, and golden tests for pixel-perfect UI regression prevention. We test on physical Android and iOS devices plus emulators for Web and Desktop.',
    deliverables: ['Flutter DevTools Performance Report', 'Widget & Integration Test Results', 'Golden Screenshot Tests', 'Multi-Platform Device Matrix Report'],
  },
  {
    step: '06', icon: Shield,
    title: 'Security, Code Obfuscation & Compliance',
    desc: 'We apply Dart code obfuscation (--obfuscate flag), secure storage via flutter_secure_storage (iOS Keychain + Android Keystore backend), certificate pinning with dio interceptors, and OWASP mobile compliance across both platforms from a single implementation.',
    deliverables: ['Obfuscation Config & Symbol Maps', 'Secure Storage Implementation', 'Certificate Pinning Setup', 'Security Audit Report'],
  },
  {
    step: '07', icon: Play,
    title: 'Simultaneous Multi-Store Deployment',
    desc: 'We deploy to Google Play Store and Apple App Store simultaneously using Fastlane automation and Codemagic CI/CD. Web builds are deployed to Firebase Hosting or Vercel. Desktop builds are packaged and distributed to Windows/Mac App Stores in a single release cycle.',
    deliverables: ['Play Store & App Store Submission', 'Web Deployment (Firebase/Vercel)', 'Desktop Build Packaging', 'Staged Rollout Plan'],
  },
  {
    step: '08', icon: RefreshCw,
    title: 'Post-Launch Support & Flutter SDK Updates',
    desc: 'Six months of post-launch support covering Flutter SDK major version upgrades (Google releases stable updates quarterly), platform-specific compatibility patches, crash monitoring via Sentry or Firebase Crashlytics, and feature iteration sprints.',
    deliverables: ['Flutter SDK Version Upgrades', 'Monthly Crash & Performance Reports', 'Platform Compatibility Patches', 'Feature Iteration Sprints'],
  },
]

const techCategories = [
  {
    name: 'Language & SDK', icon: Code2, color: '#54c5f8',
    techs: [
      { name: 'Dart (Sound Null Safety)', desc: 'Type-safe, compiled language with JIT (debug) and AOT (release) compilation for optimal performance.' },
      { name: 'Flutter SDK (Stable)', desc: "Google's UI toolkit with its own rendering engine, widget catalog, and platform channels." },
      { name: 'Flutter Impeller', desc: 'New rendering engine (default on iOS, rolling out on Android) eliminating shader compilation jank.' },
    ],
  },
  {
    name: 'State Management', icon: GitBranch, color: '#a78bfa',
    techs: [
      { name: 'BLoC / Cubit', desc: 'Business Logic Component pattern for complex apps with event-driven state transitions and testability.' },
      { name: 'Riverpod', desc: 'Compile-safe, composable state management -- the modern replacement for Provider.' },
      { name: 'GetX', desc: 'All-in-one state, navigation, and DI solution for rapid MVP development.' },
    ],
  },
  {
    name: 'UI & Animations', icon: Paintbrush, color: '#f472b6',
    techs: [
      { name: 'Custom Widgets', desc: 'Pixel-perfect custom widgets that render identically on every platform using the Skia/Impeller engine.' },
      { name: 'Lottie (rive)', desc: 'High-performance JSON animations and Rive interactive vector animations.' },
      { name: 'flutter_animate', desc: 'Declarative animation library for staggered, chained, and physics-based animations.' },
    ],
  },
  {
    name: 'Networking & Data', icon: Database, color: '#f59e0b',
    techs: [
      { name: 'Dio + Retrofit', desc: 'Powerful HTTP client with interceptors, and Retrofit for type-safe API generation.' },
      { name: 'Hive / Isar', desc: 'Ultra-fast local databases written in Dart -- no native code, same performance on every platform.' },
      { name: 'flutter_secure_storage', desc: 'Secure credential storage backed by iOS Keychain and Android Keystore.' },
    ],
  },
  {
    name: 'Backend & Cloud', icon: Cloud, color: '#34d399',
    techs: [
      { name: 'Firebase FlutterFire', desc: 'Official Firebase plugins for Auth, Firestore, Analytics, Crashlytics, and Remote Config.' },
      { name: 'Supabase', desc: 'Open-source Firebase alternative with PostgreSQL, Realtime, and Auth built in.' },
      { name: 'GraphQL (ferry)', desc: 'Type-safe GraphQL client for Flutter with code generation and normalized caching.' },
    ],
  },
  {
    name: 'Testing', icon: TestTube2, color: '#f87171',
    techs: [
      { name: 'flutter_test', desc: "Flutter's built-in widget, unit, and integration testing framework." },
      { name: 'Patrol', desc: 'Native Flutter integration testing running on real devices and Firebase Test Lab.' },
      { name: 'Golden Tests', desc: 'Screenshot-based regression tests ensuring pixel-perfect UI across updates.' },
    ],
  },
]

const appTypes = [
  { name: 'E-Commerce & Marketplace', icon: Package, desc: 'Unified shopping experience on mobile and web with shared cart, payments, and product catalog logic.' },
  { name: 'FinTech & Wallets', icon: Lock, desc: 'Digital wallets, trading dashboards, and KYC flows deployed identically on iOS and Android.' },
  { name: 'On-Demand Services', icon: Zap, desc: 'Rider, driver, and merchant apps from a single codebase -- faster iteration when you need OTA updates.' },
  { name: 'EdTech Platforms', icon: Globe, desc: 'Video courses on mobile, web dashboard for instructors, and desktop app for offline learning.' },
  { name: 'Enterprise & Internal Tools', icon: BarChart3, desc: 'Field-force apps on Android tablets + web dashboards for managers from one shared codebase.' },
  { name: 'Healthcare Apps', icon: Shield, desc: 'Patient mobile apps plus doctor web portals sharing prescription, appointment, and health record logic.' },
  { name: 'Social & Community', icon: Users, desc: 'Chat, feeds, and community features with 60fps animations that match native app performance.' },
  { name: 'IoT Control Apps', icon: Cpu, desc: 'BLE device control apps deployed to mobile, tablet, and touchscreen kiosks from one codebase.' },
]

const features = [
  'Single Codebase for 6 Platforms',
  'Dart Sound Null Safety',
  'BLoC / Riverpod State Management',
  'Custom Pixel-Perfect Widgets',
  '60fps Smooth Animations',
  'Lottie & Rive Animations',
  'Firebase FlutterFire Integration',
  'REST & GraphQL API Integration',
  'Hive / Isar Local Database',
  'Secure Storage (Keychain/Keystore)',
  'Push Notifications (FCM/APNs)',
  'Deep Links & Universal Links',
  'Codemagic / Fastlane CI/CD',
  'Play Store & App Store Publishing',
  'Web (Flutter Web) Deployment',
  'Desktop (Windows/macOS) Builds',
]

const faqs = [
  {
    question: 'Is Flutter performance truly comparable to native apps?',
    answer: "Yes. Flutter does not use a JavaScript bridge like React Native. It compiles Dart to native ARM machine code and renders every pixel using its own Skia/Impeller engine, targeting a consistent 60 to 120fps. Major apps like Google Pay, eBay, BMW, and Alibaba's Xianyu use Flutter in production with millions of users.",
  },
  {
    question: 'How much cost does Flutter save compared to building native iOS and Android separately?',
    answer: 'Typically 50 to 60% of total cost. You write one codebase instead of two, maintain one team instead of two, and ship bug fixes and features to all platforms simultaneously. The savings compound over time because every future update is also shared.',
  },
  {
    question: 'Can Flutter apps access device hardware like the camera, GPS, and Bluetooth?',
    answer: "Yes. Flutter's platform channels and existing pub.dev packages provide access to virtually every device API including camera (camera plugin), GPS (geolocator), Bluetooth (flutter_blue_plus), biometrics (local_auth), NFC, ARCore/ARKit, and more. If a package doesn't exist, we write a platform channel plugin.",
  },
  {
    question: 'What state management solution do you recommend for Flutter?',
    answer: 'It depends on app complexity. For simple apps, GetX or Provider is sufficient. For medium to large apps with complex state flows, we recommend BLoC for its strict event-driven architecture and testability. For modern projects, Riverpod offers compile-safe providers and excellent tooling. We choose based on your team and project scale.',
  },
  {
    question: 'Can Flutter be used for web apps?',
    answer: "Yes, Flutter Web is production-ready and renders using either the CanvasKit (pixel-perfect, same as mobile) or HTML renderer (better SEO, lighter bundle). It works best for web apps (dashboards, tools, PWAs) rather than content-heavy marketing sites. We use it to give desktop users the same polished experience as mobile users.",
  },
  {
    question: 'How do Flutter apps handle iOS App Store and Google Play requirements separately?',
    answer: 'Flutter apps compile to true native binaries (AAB for Android, IPA for iOS) that are indistinguishable from native apps to the stores. We configure platform-specific metadata, permissions, privacy manifests (iOS), and signing separately for each store while the Dart business logic remains completely shared.',
  },
  {
    question: 'Can you migrate our existing React Native app to Flutter?',
    answer: 'Yes. We analyse your existing React Native app, audit the native module dependencies, and rebuild it in Flutter. Business logic and API integration are the easiest to migrate. UI is rebuilt widget-by-widget with typically better performance and smoother animations in the Flutter version.',
  },
  {
    question: 'Do you support Flutter for desktop apps (Windows and macOS)?',
    answer: 'Yes. Flutter Desktop is stable on Windows, macOS, and Linux. We have shipped internal enterprise tools and productivity apps on both Windows (MSI packaging) and macOS (DMG and Mac App Store). The same codebase used for mobile runs on desktop with adaptive navigation and larger-screen layouts.',
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
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? 'shadow-md' : 'border-gray-200'}`}
      style={open ? { borderColor: `${ACCENT}60` } : {}}>
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

export default function FlutterPage() {
  const { openModal } = useModal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${ACCENT2} 0%, #0a1628 50%, #0d1f38 100%)` }}>
        {/* Top light burst */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20 blur-[100px]" style={{ background: ACCENT }} />
        {/* Subtle diagonal stripes */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, ${ACCENT} 0, ${ACCENT} 1px, transparent 0, transparent 50%)`,
            backgroundSize: '24px 24px',
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
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[#02569b] text-xs font-extrabold tracking-wider uppercase"
                  style={{ background: ACCENT }}
                >
                  <Sparkles size={12} /> Flutter Development
                </span>
                <span className="text-white/40 text-sm">Mobile App Development</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.06] mb-6">
                Flutter App<br />
                <span style={{ color: ACCENT }}>Development</span><br />
                Services
              </h1>

              <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
                One codebase. Six platforms. Native performance. Build pixel-perfect apps for Android, iOS, Web, Windows, macOS, and Linux with Google&apos;s Flutter framework and Dart language.
              </p>

              {/* Platform pills */}
              <div className="flex flex-wrap gap-2 mb-10">
                {platforms.map(p => (
                  <span key={p.name} className="text-xs font-bold px-3 py-1.5 rounded-full border text-white/80 border-white/20 bg-white/10">
                    {p.name}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-[#02569b] hover:opacity-90 transition-all shadow-lg"
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

            {/* Right -- Platform diagram */}
            <div className="relative hidden lg:flex items-center justify-center min-h-[400px]">
              {/* Centre hub */}
              <div className="absolute z-20 w-28 h-28 rounded-3xl flex flex-col items-center justify-center shadow-2xl border border-white/20" style={{ background: 'linear-gradient(135deg, #54c5f8 0%, #02569b 100%)' }}>
                <span className="text-white font-black text-lg leading-none">Flutter</span>
                <span className="text-white/70 text-[10px] mt-1 font-semibold">ONE CODE</span>
              </div>

              {/* Orbiting platform cards */}
              {[
                { name: 'Android', color: '#3ddc84', angle: 0 },
                { name: 'iOS', color: '#007aff', angle: 60 },
                { name: 'Web', color: '#f59e0b', angle: 120 },
                { name: 'Windows', color: '#0078d4', angle: 180 },
                { name: 'macOS', color: '#a78bfa', angle: 240 },
                { name: 'Linux', color: '#f87171', angle: 300 },
              ].map(p => {
                // Pre-computed: r=155, angles 0/60/120/180/240/300 deg
                const coords: Record<number, [number, number]> = {
                  0:   [155, 0],
                  60:  [77.5, 134.2],
                  120: [-77.5, 134.2],
                  180: [-155, 0],
                  240: [-77.5, -134.2],
                  300: [77.5, -134.2],
                }
                const [x, y] = coords[p.angle]
                return (
                  <div
                    key={p.name}
                    className="absolute z-10 w-[84px] h-[42px] rounded-xl flex items-center justify-center border border-white/15 shadow-lg"
                    style={{
                      background: `${p.color}22`,
                      transform: `translate(${x}px, ${y}px)`,
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <span className="text-white text-xs font-bold">{p.name}</span>
                  </div>
                )
              })}

              {/* Connecting lines (decorative) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                <g transform="translate(200,200)">
                  {/* Pre-computed: r=110, angles 0/60/120/180/240/300 deg */}
                  {([
                    [0,   110,    0],
                    [60,   55,   95.3],
                    [120, -55,   95.3],
                    [180, -110,   0],
                    [240, -55,  -95.3],
                    [300,  55,  -95.3],
                  ] as [number, number, number][]).map(([angle, x2, y2]) => (
                    <line key={angle} x1="0" y1="0" x2={x2} y2={y2}
                      stroke={ACCENT} strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 4" />
                  ))}
                </g>
              </svg>

              {/* Floating badge */}
              <div className="absolute top-4 right-0 bg-[#0a1628] border rounded-2xl px-4 py-2.5 shadow-xl z-30" style={{ borderColor: `${ACCENT}40` }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
                  <span className="text-white text-xs font-semibold">Google Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: '#06182a', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
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

        {/* Why Flutter */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="Why Flutter?" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                The Only Framework That Truly Delivers Native Quality on Every Platform
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                Unlike React Native which bridges to native components, Flutter has <strong className="text-[#0a1628]">its own rendering engine (Skia / Impeller)</strong> that draws every pixel directly. This means your UI looks and performs identically on every platform -- no platform-specific bugs, no bridge overhead, no inconsistent rendering.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                At Kotibox we have delivered 200+ Flutter apps used by millions of users. Our Flutter team follows Google&apos;s official architecture guidelines, contributes to open-source packages on pub.dev, and stays current with every stable SDK release.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '500K+', label: 'pub.dev Packages Available' },
                  { value: '150K+', label: 'GitHub Stars on Flutter' },
                  { value: 'Google', label: 'Backed & Maintained By' },
                  { value: '2019', label: 'Production Stable Since' },
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
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
                alt="Flutter Development"
                className="rounded-3xl w-full h-64 object-cover shadow-xl"
              />

              {/* Flutter vs others comparison */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className="px-5 py-3 text-xs font-bold text-white uppercase tracking-widest" style={{ background: ACCENT2 }}>
                  Flutter vs Alternatives
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    { item: 'Rendering Engine', flutter: 'Own (Skia/Impeller)', rn: 'Native Bridge', native: 'Native' },
                    { item: 'Code Sharing', flutter: '~95%', rn: '~85%', native: '0%' },
                    { item: 'UI Consistency', flutter: 'Pixel-perfect', rn: 'Platform-dependent', native: 'Pixel-perfect' },
                    { item: 'Dev Cost', flutter: '1x', rn: '1.2x', native: '2x' },
                  ].map(row => (
                    <div key={row.item} className="grid grid-cols-4 text-xs px-4 py-2.5">
                      <span className="text-gray-500 font-medium">{row.item}</span>
                      <span className="font-bold text-center" style={{ color: ACCENT2 }}>{row.flutter}</span>
                      <span className="text-gray-400 text-center">{row.rn}</span>
                      <span className="text-gray-400 text-center">{row.native}</span>
                    </div>
                  ))}
                  <div className="grid grid-cols-4 text-[10px] px-4 py-1.5 bg-gray-50">
                    <span className="text-gray-400">Metric</span>
                    <span className="text-center font-bold" style={{ color: ACCENT2 }}>Flutter</span>
                    <span className="text-gray-400 text-center">React Native</span>
                    <span className="text-gray-400 text-center">Dual Native</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Coverage */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Platform Coverage" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            One Codebase. Six Deployment Targets.
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Flutter is the only framework with official stable support for all six platforms from a single Dart codebase.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {platforms.map((p, i) => {
              const Icon = p.icon
              return (
                <div key={i} className="border border-gray-200 rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3" style={{ background: `${p.color}18` }}>
                    <Icon size={22} style={{ color: p.color }} />
                  </div>
                  <div className="font-bold text-[#0a1628] text-sm mb-1">{p.name}</div>
                  <div className="text-gray-400 text-[11px] leading-tight">{p.desc}</div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 border-l-4 rounded-r-2xl px-5 py-4" style={{ borderLeftColor: ACCENT, background: ACCENT_LIGHT }}>
            <p className="text-[#02569b] text-sm leading-relaxed">
              <strong>Cost Impact:</strong> A business targeting Android + iOS + Web with separate native teams would need 3 separate codebases, 3 separate teams, and 3x maintenance overhead. With Flutter, one Dart codebase covers all three -- with consistent UI, shared business logic, and a single bug-fix cycle.
            </p>
          </div>
        </section>

        {/* What is Included */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="What's Included" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Complete Flutter Development Package
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Every Flutter project covers all target platforms with no extra cost per platform.
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
            8-Step Flutter Development Process
          </h2>
          <p className="text-gray-500 text-base mb-14 max-w-2xl">
            Structured delivery from multi-platform strategy to simultaneous store deployment.
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
                    <div className="flex-1 border border-gray-100 rounded-2xl p-6 md:p-8 transition-all hover:shadow-md" style={{ background: ACCENT_LIGHT }}>
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${ACCENT2}18` }}>
                          <Icon size={18} style={{ color: ACCENT2 }} />
                        </div>
                        <h3 className="text-[#0a1628] font-bold text-lg leading-snug pt-1">{step.title}</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">{step.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map(d => (
                          <span key={d} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: `${ACCENT2}15`, color: ACCENT2 }}>
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
            The Flutter Tech Ecosystem We Master
          </h2>
          <p className="text-gray-500 text-base mb-14 max-w-2xl">
            We use the official Flutter SDK, Google-recommended architecture patterns, and battle-tested pub.dev packages in production.
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

        {/* Flutter UX Advantages */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel text="Flutter UX" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                Pixel-Perfect UI &mdash; Identical on Every Platform
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                Flutter&apos;s biggest UX advantage: your design team signs off once, and the UI renders identically on every device. No more &ldquo;it looks different on Android&rdquo; complaints, no platform-specific design tweaks, no inconsistent fonts or shadows.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Impeller Rendering Engine', desc: 'No more shader compilation jank on first animation. Flutter Impeller pre-compiles shaders at build time, delivering consistent 60-120fps from the very first frame on iOS and Android.' },
                  { title: 'Custom Widget Compositions', desc: 'Everything in Flutter is a widget. We compose complex, branded UIs from atomic widgets with zero performance penalty -- Flutter renders custom widgets as efficiently as built-in ones.' },
                  { title: 'Adaptive & Responsive Layouts', desc: 'MediaQuery, LayoutBuilder, and platform-adaptive widgets ensure your app looks great from a 4.7" iPhone SE to a 27" external monitor on macOS without separate codebases.' },
                  { title: 'Rich Animation System', desc: 'AnimationController, Tween, implicit animations, Hero transitions, and Rive interactive animations -- Flutter has the most complete animation system in cross-platform development.' },
                  { title: 'Hot Reload & Hot Restart', desc: "Sub-second hot reload lets developers see UI changes instantly without losing app state -- dramatically speeding up iteration and reducing the feedback loop between design and code." },
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

            {/* Industries */}
            <div>
              <SectionLabel text="Industries We Serve" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                Flutter Apps Across Every Industry
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {appTypes.map((app, i) => {
                  const Icon = app.icon
                  return (
                    <div key={i} className="group border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all bg-white">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: `${ACCENT}20` }}>
                        <Icon size={18} style={{ color: ACCENT2 }} />
                      </div>
                      <h4 className="text-[#0a1628] font-bold text-sm mb-1 group-hover:text-[#54c5f8] transition-colors">{app.name}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{app.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Key Advantages" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-12 leading-tight">
            Why Choose Kotibox for Flutter?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Puzzle,
                title: 'Google Certified Flutter Partner',
                desc: 'Our Flutter team follows the official Flutter architecture guidelines, uses recommended state management patterns, and contributes to open-source packages on pub.dev.',
              },
              {
                icon: Layers,
                title: 'Clean Architecture in Dart',
                desc: 'Every Flutter app we build uses Clean Architecture with BLoC or Riverpod, separating Presentation, Domain, and Data layers for 90%+ test coverage and independent feature development.',
              },
              {
                icon: Bell,
                title: '6-Month Post-Launch Support',
                desc: 'Flutter releases stable SDK updates quarterly. We cover the first two major version upgrades and all platform-specific compatibility patches within the support period.',
              },
              {
                icon: Gauge,
                title: '60fps Guaranteed',
                desc: 'We profile every Flutter release with Flutter DevTools targeting 60fps on Android (Skia) and 60-120fps on iOS (Impeller). Jank-free is a delivery requirement, not a nice-to-have.',
              },
              {
                icon: Lock,
                title: 'Cross-Platform Security',
                desc: 'One security implementation covers both platforms: flutter_secure_storage for credentials (Keychain on iOS, Keystore on Android), Dart obfuscation, certificate pinning, and OWASP compliance.',
              },
              {
                icon: Settings,
                title: 'Codemagic CI/CD Included',
                desc: 'Automated build, test, and simultaneous deployment to both Play Store and App Store using Codemagic or Fastlane. Every commit runs widget tests; every sprint delivers builds to both stores.',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="rounded-2xl p-6 border border-t-4" style={{ borderTopColor: ACCENT, borderColor: '#e5e7eb', background: ACCENT_LIGHT }}>
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${ACCENT2}20` }}>
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
            Flutter Development Resources We Use
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Our team tracks every Flutter stable release, contributes to pub.dev, and follows the official Flutter team blog and GitHub milestones.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Official Flutter Resources',
                color: ACCENT,
                items: [
                  'Flutter SDK (Stable Channel)',
                  'flutter.dev official documentation',
                  'pub.dev package repository (500K+ packages)',
                  'Flutter DevTools (profiling & debugging)',
                  'Dart Language Documentation',
                  'Flutter GitHub Milestones & Changelog',
                ],
              },
              {
                category: 'Quality & Performance',
                color: '#34d399',
                items: [
                  'Flutter DevTools (CPU, Memory, Network)',
                  'Firebase Crashlytics for Flutter',
                  'flutter_test (unit + widget tests)',
                  'Patrol (native integration testing)',
                  'Golden file tests (screenshot regression)',
                  'Firebase Test Lab (Android + iOS matrix)',
                ],
              },
              {
                category: 'Development & CI/CD',
                color: '#a78bfa',
                items: [
                  'Codemagic (Flutter-native CI/CD)',
                  'Fastlane (Play Store + App Store deployment)',
                  'GitHub Actions / Bitrise',
                  'Very Good CLI (Flutter project scaffold)',
                  'Melos (monorepo management)',
                  'FVM (Flutter Version Manager)',
                ],
              },
              {
                category: 'State & Architecture',
                color: '#f59e0b',
                items: [
                  'BLoC Library (bloc.pub)',
                  'Riverpod (riverpod.dev)',
                  'flutter_bloc & hydrated_bloc',
                  'get_it (service locator / DI)',
                  'injectable (code-gen DI)',
                  'freezed (immutable data classes)',
                ],
              },
              {
                category: 'Popular pub.dev Packages',
                color: '#f87171',
                items: [
                  'dio + retrofit (networking)',
                  'hive + isar (local storage)',
                  'flutter_secure_storage',
                  'go_router (declarative navigation)',
                  'cached_network_image',
                  'lottie + rive (animations)',
                ],
              },
              {
                category: 'Distribution & Analytics',
                color: '#f472b6',
                items: [
                  'Google Play Store (Android)',
                  'Apple App Store (iOS)',
                  'Firebase Hosting (Web)',
                  'Firebase App Distribution (beta)',
                  'Firebase Analytics for Flutter',
                  'Sentry (cross-platform error tracking)',
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
          <div className="rounded-3xl overflow-hidden relative" style={{ background: `linear-gradient(135deg, ${ACCENT2} 0%, #0a1628 100%)` }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-[100px]" style={{ background: ACCENT }} />
            <div className="relative px-8 md:px-16 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Free Consultation Available</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Ready to Build Your<br />
                  <span style={{ color: ACCENT }}>Flutter App?</span>
                </h2>
                <p className="text-white/55 text-base max-w-lg">
                  Talk to our Flutter team and get a platform strategy, architecture recommendation, and cost estimate for all your target platforms within 24 hours.
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
                  See Flutter Projects <Play size={14} />
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
              Everything you need to know before choosing Flutter for your project.
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
          <p className="text-gray-500 text-base mb-10">Explore other mobile development options to find the right fit.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { slug: 'android', tag: 'Android', title: 'Android App Development', desc: 'Native Kotlin & Jetpack Compose apps for 3.9B Android users.', color: '#3ddc84', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80' },
              { slug: 'ios', tag: 'iOS', title: 'iOS App Development', desc: 'Native Swift & SwiftUI apps following Apple HIG standards.', color: '#007aff', img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&q=80' },
              { slug: 'react-native', tag: 'React Native', title: 'React Native Development', desc: 'JavaScript cross-platform apps with near-native performance.', color: '#61dafb', img: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600&q=80' },
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
                  <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-3" style={{ background: s.color }}>
                    {s.tag}
                  </span>
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
