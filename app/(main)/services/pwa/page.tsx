'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, ChevronDown, ChevronUp,
  CheckCircle2, ExternalLink, Smartphone,
  Wifi, WifiOff, Bell, Download, Shield,
  Zap, Globe, Monitor, RefreshCw,
  Code2, Database, Cloud, Settings,
  BarChart3, Users, TrendingUp, Star,
  Lock, Gauge, Layers, Package,
  Play, Share2, Battery, Cpu,
  MousePointer, Timer, Activity, Boxes
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const ACCENT = '#8b5cf6'
const ACCENT_DARK = '#7c3aed'
const ACCENT_LIGHT = '#f5f3ff'
const NAVY = '#0a1628'

// --- Data -------------------------------------------------------------------

const pwaCapabilities = [
  { name: 'Works Offline', icon: WifiOff, color: '#8b5cf6', desc: 'Service workers cache critical assets and data so the app works even without an internet connection.' },
  { name: 'Push Notifications', icon: Bell, color: '#ec4899', desc: 'Re-engage users with native-feeling push notifications on Android and iOS 16.4+.' },
  { name: 'Install to Home Screen', icon: Download, color: '#22c55e', desc: 'Users install directly from the browser — no App Store or Play Store required.' },
  { name: 'Camera & Mic Access', icon: Cpu, color: '#f59e0b', desc: 'Access device camera, microphone, and sensors via browser APIs.' },
  { name: 'Background Sync', icon: RefreshCw, color: '#0ea5e9', desc: 'Queue actions made offline and sync them automatically when connection is restored.' },
  { name: 'Geolocation', icon: Globe, color: '#10b981', desc: 'Access device GPS for location-aware features and maps.' },
  { name: 'Bluetooth & USB', icon: Activity, color: '#f87171', desc: 'Web Bluetooth and Web USB APIs for hardware device connectivity.' },
  { name: 'App Shortcuts', icon: Boxes, color: '#a78bfa', desc: 'Long-press the home screen icon to access deep links into key app features.' },
  { name: 'Share Target', icon: Share2, color: '#34d399', desc: 'Receive shared content from other apps — photos, links, and text.' },
]

const vsComparison = [
  { factor: 'Distribution', pwa: 'Direct browser install — no stores', native: 'App Store / Play Store', web: 'Browser only' },
  { factor: 'Offline Support', pwa: 'Full offline via Service Workers', native: 'Full native offline', web: 'None (requires internet)' },
  { factor: 'Push Notifications', pwa: 'Yes (Android full, iOS 16.4+)', native: 'Full native support', web: 'No' },
  { factor: 'Home Screen Icon', pwa: 'Yes — installable from browser', native: 'Yes — via app stores', web: 'No' },
  { factor: 'Update Process', pwa: 'Instant (browser-managed)', native: 'Store review (days)', web: 'Instant' },
  { factor: 'Development Cost', pwa: '1x (one codebase)', native: '2x (iOS + Android)', web: '1x but no offline/install' },
  { factor: 'Store Fees', pwa: 'None', native: '15–30% Apple/Google cut', web: 'None' },
  { factor: 'App Store Discoverability', pwa: 'Limited (Google indexes PWAs)', native: 'Full store listing', web: 'SEO only' },
  { factor: 'Hardware API Access', pwa: 'Good (camera, GPS, BT, NFC)', native: 'Full access', web: 'Good but no install UX' },
]

const cachingStrategies = [
  {
    name: 'Cache First',
    icon: Database,
    color: '#8b5cf6',
    use: 'Static assets (CSS, JS, fonts, icons)',
    how: 'Serve from cache immediately. Fetch network in background to update cache. User always gets instant load.',
    example: 'App shell, fonts, logo, navigation icons',
    tradeoff: 'Content may be slightly stale until next background update',
  },
  {
    name: 'Network First',
    icon: Cloud,
    color: '#0ea5e9',
    use: 'Fresh data that must be current (live prices, stock)',
    how: 'Try network first. If it fails, serve from cache. User gets freshest data when online, fallback when offline.',
    example: 'Product prices, inventory levels, live scores',
    tradeoff: 'Slower on poor connections as network attempt happens first',
  },
  {
    name: 'Stale-While-Revalidate',
    icon: RefreshCw,
    color: '#10b981',
    use: 'Content that updates but not in real-time (articles, profiles)',
    how: 'Serve from cache immediately (stale). Fetch from network in background. Cache updated for next request.',
    example: 'Blog posts, user profiles, product descriptions',
    tradeoff: 'User may see content that is one request old',
  },
  {
    name: 'Cache Only',
    icon: Lock,
    color: '#f59e0b',
    use: 'Core app shell assets that never change',
    how: 'Only serve from cache, never hit network. Pre-cached during service worker install.',
    example: 'Core HTML shell, base CSS, offline fallback page',
    tradeoff: 'Content only updates when service worker is re-installed',
  },
]

const lighthouseChecklist = [
  { category: 'Installability', checks: ['Runs on HTTPS', 'Has a web app manifest', 'Manifest has name, short_name, start_url', 'Registers a Service Worker', 'Icons for all sizes (192px, 512px)', 'Display mode set to standalone or fullscreen'] },
  { category: 'Service Worker', checks: ['SW controls all pages', 'SW responds to fetch events', 'Caches critical resources on install', 'Background sync registered', 'Push subscription configured', 'Precache updated on new deployment'] },
  { category: 'Performance', checks: ['First Contentful Paint < 1.8s', 'Largest Contentful Paint < 2.5s', 'Time to Interactive < 3.8s', 'Cumulative Layout Shift < 0.1', 'Speed Index < 3.4s', 'Total Blocking Time < 200ms'] },
  { category: 'App-Like UX', checks: ['No browser UI visible when installed', 'Works fully offline or with stale content', 'Smooth page transitions', 'Splash screen with brand colours', 'No horizontal scroll', 'Content not cut off on mobile'] },
]

const buildProcess = [
  {
    phase: 'Audit & Strategy',
    number: '01',
    color: '#8b5cf6',
    duration: 'Week 1',
    icon: BarChart3,
    desc: 'We start with a PWA feasibility audit of your existing site or product. We score Lighthouse, identify which pages need offline support, plan the caching strategy, and define the install prompt UX.',
    outputs: ['Lighthouse baseline audit', 'Caching strategy document', 'Offline page map', 'Install flow wireframes'],
  },
  {
    phase: 'Manifest & Icons',
    number: '02',
    color: '#ec4899',
    duration: 'Week 1',
    icon: Settings,
    desc: 'We create the Web App Manifest with all required fields, generate icon sets for every resolution (from 48px to 512px maskable icons), configure splash screens, and set display mode and theme colours.',
    outputs: ['manifest.json config', 'Icon set (all sizes)', 'Maskable icons', 'Splash screen assets'],
  },
  {
    phase: 'Service Worker Build',
    number: '03',
    color: '#0ea5e9',
    duration: 'Week 2–3',
    icon: Code2,
    desc: 'Using Workbox.js (Google\'s SW library), we implement caching strategies per resource type, set up precaching for the app shell, configure background sync for offline form submissions, and handle SW lifecycle events cleanly.',
    outputs: ['Workbox SW implementation', 'Per-route caching rules', 'Background sync queues', 'SW versioning strategy'],
  },
  {
    phase: 'Offline Experience',
    number: '04',
    color: '#10b981',
    duration: 'Week 3',
    icon: WifiOff,
    desc: 'We design and build a branded offline page shown when the user has no connection and no cached version. For data-driven apps, we implement IndexedDB for offline data storage and sync, ensuring the core user journey works without internet.',
    outputs: ['Branded offline fallback page', 'IndexedDB offline data layer', 'Optimistic UI updates', 'Sync queue for offline actions'],
  },
  {
    phase: 'Push Notifications',
    number: '05',
    color: '#f59e0b',
    duration: 'Week 4',
    icon: Bell,
    desc: 'We implement the Web Push API with a subscription flow, a permission request that explains the value before asking, server-side push via VAPID keys, and notification action buttons. We also set up a notification preference centre in the app.',
    outputs: ['Push subscription UI', 'VAPID server setup', 'Notification templates', 'Preference centre'],
  },
  {
    phase: 'Install Prompt UX',
    number: '06',
    color: '#f87171',
    duration: 'Week 4',
    icon: Download,
    desc: 'We implement a custom "Add to Home Screen" prompt that appears at the right moment (after the user has demonstrated intent), with a branded install card showing a preview of the installed app. The prompt is suppressed after dismissal and re-shown strategically.',
    outputs: ['Custom install prompt UI', 'Prompt timing logic', 'Post-install onboarding', 'Install analytics tracking'],
  },
  {
    phase: 'Performance Tuning',
    number: '07',
    color: '#a78bfa',
    duration: 'Week 5',
    icon: Gauge,
    desc: 'We run Lighthouse and WebPageTest audits, target 90+ on all PWA scores, optimise Core Web Vitals, implement route-based code splitting, lazy load below-the-fold content, and ensure sub-3 second Time to Interactive on 3G connections.',
    outputs: ['Lighthouse 90+ report', 'Core Web Vitals passing', 'Performance budget defined', 'Optimised asset pipeline'],
  },
  {
    phase: 'Launch & Monitoring',
    number: '08',
    color: '#34d399',
    duration: 'Week 5–6',
    icon: Activity,
    desc: 'We deploy to Vercel or Cloudflare Pages with edge caching, set up SW update notifications so users know when a new version is available, configure error monitoring (Sentry), and track installation events in Google Analytics 4.',
    outputs: ['PWA deployed to CDN', 'SW update notification UI', 'Sentry error monitoring', 'PWA install event tracking in GA4'],
  },
]

const useCases = [
  { industry: 'News & Media', icon: Globe, color: '#8b5cf6', why: 'Readers open news offline on commutes. PWA caches last 20 articles. Push notifications re-engage readers for breaking news.', stat: '5x longer sessions vs mobile web' },
  { industry: 'E-Commerce', icon: Package, color: '#22c55e', why: 'Browse products offline, cart persists, checkout when connection returns. No app store friction means higher conversion for first-time buyers.', stat: '36% higher conversions vs mobile web' },
  { industry: 'SaaS Dashboards', icon: BarChart3, color: '#0ea5e9', why: 'Users install the dashboard like a native app. Offline data access, push notification alerts for critical metrics, without maintaining separate iOS/Android apps.', stat: '40% lower bounce rate after install' },
  { industry: 'Travel & Bookings', icon: Globe, color: '#f59e0b', why: 'Cache itineraries, boarding passes, and maps for offline access in airports and poor signal areas. Push notifications for flight status changes.', stat: '46% more page views after install' },
  { industry: 'Education & eLearning', icon: Boxes, color: '#ec4899', why: 'Students in low-connectivity areas access course content offline. Background sync uploads assignment submissions when connection is restored.', stat: '2x course completion rate' },
  { industry: 'Food Delivery & QSR', icon: Timer, color: '#f87171', why: 'Near-instant menu load, offline menu browsing, push notifications for order status, and home screen icon for repeat orders.', stat: '137% higher engagement vs web' },
]

const techStack = [
  { name: 'Next.js 15', role: 'App framework with built-in PWA support via next-pwa or Serwist', color: '#8b5cf6' },
  { name: 'Workbox.js', role: 'Google\'s SW library for advanced caching strategies and precaching', color: '#0ea5e9' },
  { name: 'Serwist', role: 'Modern TypeScript-first SW framework, the recommended Next.js PWA tool', color: '#10b981' },
  { name: 'IndexedDB / idb', role: 'Client-side database for offline data storage and background sync queues', color: '#f59e0b' },
  { name: 'Web Push API', role: 'Server-side push notifications via VAPID keys, implemented with web-push library', color: '#ec4899' },
  { name: 'Vercel / Cloudflare', role: 'Edge deployment with CDN caching, automatic HTTPS, and global distribution', color: '#f87171' },
]

const faqs = [
  {
    question: 'What exactly is a Progressive Web App?',
    answer: 'A PWA is a website that uses modern browser APIs to behave like a native app. It can be installed on the home screen, work offline, send push notifications, and appear full-screen without browser chrome — all without going through an app store. The key technologies are Service Workers (for offline and caching), the Web App Manifest (for installability), and HTTPS. From the user\'s perspective, it feels like a native app. From the developer\'s perspective, it is built with standard web technologies.',
  },
  {
    question: 'Does a PWA work on iPhone and Safari?',
    answer: "Yes, with some nuances. Safari on iOS 16.4+ supports the full PWA feature set including push notifications, home screen installation, and offline mode. Safari on older iOS versions supports home screen install and offline but not push notifications. On iOS, the install process is manual (Share button → Add to Home Screen) rather than an automatic browser prompt. We implement custom install instruction UI for iOS users. Android Chrome supports the full automatic install prompt.",
  },
  {
    question: 'When should we build a PWA instead of a native app?',
    answer: "PWA is the right choice when: your audience is acquisition-driven (users won't install an app before trusting you), you can't afford separate iOS and Android teams, you need instant updates without store review delays, or your core use case is content consumption, e-commerce, or dashboard access. Native apps are better when: you need deep hardware integration (ARKit, Bluetooth LE profiles, background audio), you rely on App Store discoverability, or your audience is already app-install-comfortable (B2C retention apps).",
  },
  {
    question: 'Can a PWA send push notifications on Android and iPhone?',
    answer: "Yes. On Android, PWA push notifications have been supported since Chrome 42 and work excellently -- they appear in the notification shade just like native app notifications. On iOS, push notifications for installed PWAs are supported from iOS 16.4 (released March 2023) on Safari. Users must have the PWA installed to their home screen (not just browsing in Safari) to receive push notifications on iOS. We implement a clear install-to-enable-notifications flow for iOS users.",
  },
  {
    question: 'How does offline mode work technically?',
    answer: "A Service Worker is a JavaScript file that runs in the background, separate from your web page. It intercepts every network request the app makes and decides whether to serve from cache or fetch from the network -- based on the caching strategy we configure per resource type. On first load, the SW precaches your app shell (HTML, CSS, JS) and critical assets. After that, the app loads instantly from cache even with no internet. For data, we use IndexedDB to store content locally and Background Sync to queue offline actions and send them when the connection is restored.",
  },
  {
    question: 'Will a PWA appear in the Google Play Store or App Store?',
    answer: "Google Play Store: Yes. You can wrap a PWA in a Trusted Web Activity (TWA) and publish it to the Play Store as a native-feeling app. This gives you Play Store discoverability while maintaining a single web codebase. Apple App Store: No direct path for PWAs (Apple requires UIKit/SwiftUI native code for App Store). For App Store presence, you would need a separate React Native or Flutter wrapper. Most PWA clients skip the App Store and distribute via QR codes, Google indexing, and direct URL sharing.",
  },
  {
    question: 'How fast does a PWA load compared to a regular website?',
    answer: "Dramatically faster after the first visit. On the first visit, a PWA loads like any website. But after the Service Worker installs and precaches the app shell, subsequent visits load from cache in under 100ms -- even on slow 3G connections. This is because the browser no longer needs to make network requests for the core application code. In our benchmarks, installed PWAs load 3-5x faster than their regular website counterparts on repeat visits.",
  },
  {
    question: 'Can you convert our existing website into a PWA?',
    answer: "Yes. If your site is built on Next.js, we can add PWA capabilities (Service Worker, manifest, offline page, push notifications) without rebuilding it -- typically in 3 to 5 weeks. For sites on other frameworks, we assess the effort in the discovery call. The minimum viable PWA upgrade (HTTPS + manifest + basic SW + offline page) can be done in 1 to 2 weeks. Full PWA with push notifications, background sync, and custom install flow takes 5 to 8 weeks.",
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
  faq: { question: string; answer: string }; index: number; open: boolean; onToggle: (i: number) => void
}) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? 'shadow-md' : 'border-gray-200'}`} style={open ? { borderColor: `${ACCENT}60` } : {}}>
      <button onClick={() => onToggle(index)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-purple-50/50 transition-colors">
        <span className="text-[#0a1628] font-semibold text-sm md:text-base pr-4">{faq.question}</span>
        {open ? <ChevronUp size={18} style={{ color: ACCENT }} className="flex-shrink-0" /> : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />}
      </button>
      {open && <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.answer}</div>}
    </div>
  )
}

// --- Page -------------------------------------------------------------------

export default function PwaPage() {
  const { openModal } = useModal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeStrategy, setActiveStrategy] = useState(0)
  const [activeLighthouse, setActiveLighthouse] = useState(0)

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e0a3c 0%, #0a1628 55%, #1a0a3c 100%)' }}>
        <div className="absolute top-0 right-0 w-[800px] h-[600px] rounded-full opacity-[0.12] blur-[130px]" style={{ background: ACCENT }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[100px]" style={{ background: '#a78bfa' }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: `radial-gradient(circle, ${ACCENT} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-32 pb-20">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium bg-white/8 border border-white/15 px-4 py-2 rounded-full transition-colors mb-10">
            <ArrowLeft size={15} /> Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-xs font-extrabold tracking-wider uppercase" style={{ background: ACCENT }}>
                  <Zap size={12} /> PWA Development
                </span>
                <span className="text-white/40 text-sm">Web Development</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.06] mb-6">
                Progressive<br />
                <span style={{ color: '#a78bfa' }}>Web App</span><br />
                Development
              </h1>
              <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
                App-like experience directly in the browser — offline support, push notifications, and home screen installation without App Store or Play Store. Lighthouse PWA score of 100 guaranteed.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Service Workers', 'Offline Mode', 'Push Notifications', 'Home Screen Install', 'Workbox.js', 'Lighthouse 100'].map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 text-white/70 bg-white/8">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <button onClick={openModal} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all shadow-lg" style={{ background: ACCENT }}>
                  Build Your PWA <ArrowRight size={16} />
                </button>
                <Link href="/live-demo" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white border border-white/20 hover:bg-white/10 transition-all">
                  See Live PWAs <ExternalLink size={14} />
                </Link>
              </div>
            </div>

            {/* Right — phone install mockup */}
            <div className="relative hidden lg:flex justify-center items-center">
              {/* Phone */}
              <div className="relative w-64">
                <div className="bg-[#1c1c1e] rounded-[40px] p-2.5 shadow-2xl border border-white/10">
                  <div className="bg-white rounded-[32px] overflow-hidden">
                    {/* Browser top bar */}
                    <div className="bg-[#f2f2f7] px-3 py-2 flex items-center gap-2">
                      <div className="flex-1 bg-white rounded-lg px-2 py-1 flex items-center gap-1.5">
                        <Lock size={8} className="text-green-500" />
                        <span className="text-[9px] text-gray-500 font-mono truncate">app.yourstore.com</span>
                      </div>
                      <Share2 size={12} className="text-blue-500" />
                    </div>
                    {/* App content */}
                    <div className="p-3 pb-0">
                      <div className="rounded-xl overflow-hidden mb-2" style={{ background: 'linear-gradient(135deg, #1e0a3c, #1a2f4e)' }}>
                        <div className="p-4">
                          <div className="w-8 h-8 rounded-xl mb-2 flex items-center justify-center" style={{ background: ACCENT }}>
                            <Zap size={14} className="text-white" />
                          </div>
                          <div className="text-white font-bold text-sm">Your App Name</div>
                          <div className="text-white/50 text-[10px]">app.yourstore.com</div>
                        </div>
                      </div>
                      {/* Simulated content */}
                      <div className="space-y-1.5 mb-3">
                        <div className="h-2 bg-gray-200 rounded-full w-full" />
                        <div className="h-2 bg-gray-200 rounded-full w-4/5" />
                        <div className="h-2 bg-gray-100 rounded-full w-3/4" />
                      </div>
                    </div>
                    {/* Install prompt */}
                    <div className="mx-3 mb-3 rounded-2xl border border-purple-200 overflow-hidden" style={{ background: ACCENT_LIGHT }}>
                      <div className="p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: ACCENT }}>
                            <Zap size={12} className="text-white" />
                          </div>
                          <div>
                            <div className="text-[#0a1628] font-bold text-[11px]">Add to Home Screen</div>
                            <div className="text-gray-400 text-[9px]">Install for the full app experience</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1 text-center py-1.5 rounded-lg text-[10px] font-bold text-white" style={{ background: ACCENT }}>Install</div>
                          <div className="px-3 py-1.5 rounded-lg text-[10px] font-semibold text-gray-500 border border-gray-200">Not now</div>
                        </div>
                      </div>
                    </div>
                    {/* Home indicator */}
                    <div className="flex justify-center py-2 bg-[#f2f2f7]">
                      <div className="w-20 h-1 bg-gray-300 rounded-full" />
                    </div>
                  </div>
                </div>
                {/* Home screen installed icon */}
                <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl border border-white/20" style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})` }}>
                    <Zap size={24} className="text-white" />
                  </div>
                  <div className="text-white text-[9px] font-medium">Your App</div>
                  <div className="text-white/40 text-[8px]">Installed ✓</div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute top-4 left-0 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl" style={{ borderColor: `${ACCENT}40` }}>
                <div className="text-white/40 text-[10px] mb-0.5">Lighthouse PWA</div>
                <div className="text-2xl font-black" style={{ color: ACCENT }}>100</div>
                <div className="text-white/30 text-[9px]">Perfect score</div>
              </div>
              <div className="absolute bottom-4 left-4 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl" style={{ borderColor: `${ACCENT}40` }}>
                <div className="flex items-center gap-2">
                  <WifiOff size={12} style={{ color: '#a78bfa' }} />
                  <span className="text-white text-xs font-semibold">Works Offline</span>
                </div>
                <div className="text-white/30 text-[9px] mt-0.5">Service Worker active</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Stats ──────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { val: '100', label: 'Lighthouse PWA Score Target', icon: Gauge },
              { val: '< 1s', label: 'Repeat Visit Load Time', icon: Zap },
              { val: 'No', label: 'App Store Fees or Approval', icon: Shield },
              { val: '2x', label: 'Engagement vs Mobile Web', icon: TrendingUp },
            ].map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="flex flex-col items-center text-center py-8 px-4 hover:bg-purple-50/40 transition-colors">
                  <Icon size={20} className="mb-2" style={{ color: ACCENT }} />
                  <div className="text-2xl md:text-3xl font-black text-[#0a1628]">{s.val}</div>
                  <div className="text-gray-400 text-xs mt-1 leading-snug">{s.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

        {/* ── PWA vs Native vs Web ─────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="PWA vs Alternatives" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            PWA vs Native App vs Regular Website
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            PWAs occupy a unique position — the distribution reach of the web combined with the experience quality of a native app. Here is an honest comparison.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr style={{ background: NAVY }}>
                  <th className="text-left text-white font-bold text-sm px-6 py-4 w-40">Factor</th>
                  <th className="text-center text-sm px-5 py-4 font-black" style={{ color: '#a78bfa' }}>Progressive Web App</th>
                  <th className="text-center text-white/70 text-sm px-5 py-4 font-semibold">Native App (iOS+Android)</th>
                  <th className="text-center text-white/70 text-sm px-5 py-4 font-semibold">Regular Website</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {vsComparison.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                    <td className="text-[#0a1628] font-semibold text-sm px-6 py-3.5">{row.factor}</td>
                    <td className="text-center text-sm px-5 py-3.5 font-semibold" style={{ color: ACCENT_DARK }}>{row.pwa}</td>
                    <td className="text-center text-gray-500 text-sm px-5 py-3.5">{row.native}</td>
                    <td className="text-center text-gray-400 text-sm px-5 py-3.5">{row.web}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 border-l-4 rounded-r-2xl px-5 py-4" style={{ borderLeftColor: ACCENT, background: ACCENT_LIGHT }}>
            <p className="text-purple-900 text-sm leading-relaxed">
              <strong>When to choose PWA:</strong> Your audience needs to discover you before committing to an install, you want one codebase with no App Store fees, or your core use case is content, e-commerce, or dashboards. Choose native when you need App Store presence, deep hardware access, or background audio.
            </p>
          </div>
        </section>

        {/* ── PWA Capabilities ─────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="PWA Capabilities" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            What Modern PWAs Can Do
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Browser APIs have caught up fast. Here is what we can build into your PWA today — no App Store required.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pwaCapabilities.map((cap, i) => {
              const Icon = cap.icon
              return (
                <div key={i} className="group flex gap-4 p-6 border border-gray-200 rounded-2xl hover:border-purple-300 hover:shadow-md hover:-translate-y-0.5 transition-all bg-white">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${cap.color}15` }}>
                    <Icon size={20} style={{ color: cap.color }} />
                  </div>
                  <div>
                    <div className="font-bold text-[#0a1628] text-sm mb-1.5 group-hover:text-purple-700 transition-colors">{cap.name}</div>
                    <div className="text-gray-400 text-xs leading-relaxed">{cap.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Build Process (Unique horizontal card layout) ─────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="How We Build It" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            8-Phase PWA Development Process
          </h2>
          <p className="text-gray-500 text-base mb-14 max-w-2xl">
            From Lighthouse audit to a production PWA scoring 100 on all metrics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {buildProcess.map((phase, i) => {
              const Icon = phase.icon
              return (
                <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all">
                  <div className="flex items-center gap-4 px-6 py-4" style={{ background: `${phase.color}10`, borderBottom: `2px solid ${phase.color}` }}>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-black text-xs flex-shrink-0" style={{ background: phase.color }}>
                      {phase.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-black text-[#0a1628] text-base">{phase.phase}</div>
                      <div className="text-xs font-semibold" style={{ color: phase.color }}>{phase.duration}</div>
                    </div>
                    <Icon size={18} style={{ color: phase.color }} className="flex-shrink-0 opacity-70" />
                  </div>
                  <div className="p-5">
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{phase.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {phase.outputs.map(o => (
                        <span key={o} className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: `${phase.color}12`, color: phase.color }}>
                          {o}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Caching Strategies ───────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Service Worker Caching" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            The Right Caching Strategy for Every Resource
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Not all content should be cached the same way. We select the right strategy per resource type to balance speed and freshness.
          </p>
          {/* Strategy tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {cachingStrategies.map((s, i) => (
              <button key={i} onClick={() => setActiveStrategy(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${activeStrategy === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                style={activeStrategy === i ? { background: s.color } : {}}>
                {s.name}
              </button>
            ))}
          </div>
          {(() => {
            const s = cachingStrategies[activeStrategy]
            const Icon = s.icon
            return (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200 rounded-3xl overflow-hidden">
                <div className="lg:col-span-2 p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${s.color}15` }}>
                      <Icon size={22} style={{ color: s.color }} />
                    </div>
                    <div className="font-black text-[#0a1628] text-xl">{s.name}</div>
                  </div>
                  <div className="mb-5">
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Best Used For</div>
                    <div className="font-semibold text-[#0a1628]">{s.use}</div>
                  </div>
                  <div className="mb-5">
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">How It Works</div>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.how}</p>
                  </div>
                  <div className="mb-5 p-4 rounded-xl border" style={{ background: ACCENT_LIGHT, borderColor: `${ACCENT}20` }}>
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Real Example</div>
                    <div className="text-sm text-purple-900">{s.example}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                    <div className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-1">Trade-off to be aware of</div>
                    <div className="text-amber-800 text-sm">{s.tradeoff}</div>
                  </div>
                </div>
                {/* Visual diagram */}
                <div className="p-8 border-t lg:border-t-0 lg:border-l border-gray-100 bg-[#fafafa] flex flex-col items-center justify-center gap-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 text-center">Request Flow</div>
                  {s.name === 'Cache First' && (
                    <div className="w-full space-y-2 text-sm">
                      {[
                        { step: '1. Request comes in', arrow: false },
                        { step: '→ Check cache first', arrow: true, color: s.color },
                        { step: 'Cache hit? → Serve immediately', arrow: false },
                        { step: 'Also fetch network in background', arrow: false },
                        { step: '→ Update cache for next time', arrow: true, color: s.color },
                      ].map((item, i) => (
                        <div key={i} className={`text-xs px-3 py-2 rounded-lg ${item.arrow ? 'font-bold' : 'bg-white border border-gray-200 text-gray-600'}`} style={item.arrow ? { color: item.color } : {}}>
                          {item.step}
                        </div>
                      ))}
                    </div>
                  )}
                  {s.name === 'Network First' && (
                    <div className="w-full space-y-2 text-sm">
                      {[
                        { step: '1. Request comes in', arrow: false },
                        { step: '→ Try network first', arrow: true, color: s.color },
                        { step: 'Network OK? → Serve + cache it', arrow: false },
                        { step: 'Network fail? → Serve from cache', arrow: false },
                        { step: '→ Stale content beats nothing', arrow: true, color: s.color },
                      ].map((item, i) => (
                        <div key={i} className={`text-xs px-3 py-2 rounded-lg ${item.arrow ? 'font-bold' : 'bg-white border border-gray-200 text-gray-600'}`} style={item.arrow ? { color: item.color } : {}}>
                          {item.step}
                        </div>
                      ))}
                    </div>
                  )}
                  {s.name === 'Stale-While-Revalidate' && (
                    <div className="w-full space-y-2 text-sm">
                      {[
                        { step: '1. Request comes in', arrow: false },
                        { step: '→ Serve from cache immediately', arrow: true, color: s.color },
                        { step: 'User sees content instantly', arrow: false },
                        { step: '→ Fetch network in background', arrow: true, color: s.color },
                        { step: 'Cache updated for next request', arrow: false },
                      ].map((item, i) => (
                        <div key={i} className={`text-xs px-3 py-2 rounded-lg ${item.arrow ? 'font-bold' : 'bg-white border border-gray-200 text-gray-600'}`} style={item.arrow ? { color: item.color } : {}}>
                          {item.step}
                        </div>
                      ))}
                    </div>
                  )}
                  {s.name === 'Cache Only' && (
                    <div className="w-full space-y-2 text-sm">
                      {[
                        { step: '1. Request comes in', arrow: false },
                        { step: '→ Serve from cache only', arrow: true, color: s.color },
                        { step: 'Never hits network', arrow: false },
                        { step: 'Only updates on SW reinstall', arrow: false },
                        { step: '→ Fastest possible response', arrow: true, color: s.color },
                      ].map((item, i) => (
                        <div key={i} className={`text-xs px-3 py-2 rounded-lg ${item.arrow ? 'font-bold' : 'bg-white border border-gray-200 text-gray-600'}`} style={item.arrow ? { color: item.color } : {}}>
                          {item.step}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })()}
        </section>

        {/* ── Lighthouse Checklist ─────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Lighthouse PWA Checklist" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            We Tick Every Box on the PWA Checklist
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Google&apos;s Lighthouse defines exactly what qualifies as a Progressive Web App. We guarantee all of these pass on delivery.
          </p>
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {lighthouseChecklist.map((cat, i) => (
              <button key={i} onClick={() => setActiveLighthouse(i)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${activeLighthouse === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                style={activeLighthouse === i ? { background: ACCENT } : {}}>
                {cat.category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {lighthouseChecklist[activeLighthouse].checks.map((check, i) => (
              <div key={i} className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl bg-white hover:border-purple-300 transition-all">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: ACCENT }}>
                  <CheckCircle2 size={13} className="text-white" />
                </div>
                <span className="text-gray-700 text-sm font-medium">{check}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Industry Use Cases ─────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Industry Use Cases" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Where PWAs Deliver the Most Impact
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            PWAs work best when your users value instant load times, repeat visits, and offline access more than deep hardware integration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((uc, i) => {
              const Icon = uc.icon
              return (
                <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all group">
                  <div className="px-6 py-4 flex items-center gap-3" style={{ background: `${uc.color}10`, borderBottom: `2px solid ${uc.color}` }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${uc.color}20` }}>
                      <Icon size={18} style={{ color: uc.color }} />
                    </div>
                    <div className="font-black text-[#0a1628] text-base group-hover:text-purple-700 transition-colors">{uc.industry}</div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{uc.why}</p>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold" style={{ background: `${uc.color}12`, color: uc.color }}>
                      <TrendingUp size={12} />
                      {uc.stat}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Tech Stack ───────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel text="Technology" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                Our PWA Technology Stack
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                We build on Next.js with Serwist (the modern TypeScript-first Service Worker framework) and Workbox.js for advanced caching. Every PWA ships to Vercel or Cloudflare Pages for globally-distributed edge serving.
              </p>
              <div className="space-y-3">
                {techStack.map((tech, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 border border-gray-200 rounded-xl hover:border-purple-200 hover:shadow-sm transition-all bg-white">
                    <div className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: tech.color }} />
                    <div>
                      <div className="font-bold text-[#0a1628] text-sm mb-0.5">{tech.name}</div>
                      <div className="text-gray-400 text-xs leading-relaxed">{tech.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What every PWA includes */}
            <div>
              <SectionLabel text="What's Included" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                Every PWA We Build Includes
              </h2>
              <div className="space-y-3">
                {[
                  { title: 'Lighthouse PWA Score 100', desc: 'We verify and share the Lighthouse report — Installability, Service Worker, Performance, and Best Practices all green.' },
                  { title: 'Custom Install Prompt UI', desc: 'Branded "Add to Home Screen" prompt with timing logic, iOS fallback instructions, and post-install onboarding.' },
                  { title: 'Offline Fallback Page', desc: 'Branded offline experience shown when the user has no connection and no cached page available — not a browser error screen.' },
                  { title: 'Push Notification Infrastructure', desc: 'Full stack push notification setup: VAPID keys, subscription management, server-side sender, and notification preference centre.' },
                  { title: 'App Manifest & Icons', desc: 'Web App Manifest with all required fields, icon sets for all resolutions (including maskable icons for Android), and splash screens.' },
                  { title: 'SW Update Notification', desc: 'When we deploy a new version, users see a "New version available — refresh" banner instead of silently getting stale code.' },
                  { title: 'GA4 PWA Event Tracking', desc: 'Install event, push subscription event, and offline usage tracking configured in Google Analytics 4 from day one.' },
                  { title: '30-Day Post-Launch Support', desc: 'Browser compatibility issues, SW lifecycle bugs, and notification delivery issues resolved at no charge within 30 days.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 border border-gray-100 rounded-xl hover:border-purple-200 hover:shadow-sm transition-all">
                    <CheckCircle2 size={17} style={{ color: ACCENT }} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[#0a1628] font-bold text-sm mb-0.5">{item.title}</div>
                      <div className="text-gray-400 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="relative rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e0a3c 0%, #0a1628 100%)' }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-[100px]" style={{ background: ACCENT }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-8 blur-[80px]" style={{ background: '#a78bfa' }} />
            <div className="relative px-8 md:px-16 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#a78bfa' }} />
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Free PWA Consultation</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Ready to Launch Your<br />
                  <span style={{ color: '#a78bfa' }}>Progressive Web App?</span>
                </h2>
                <p className="text-white/55 text-base max-w-md">
                  Tell us your current website stack and goals. We&apos;ll give you a PWA capability assessment, caching strategy, and Lighthouse roadmap within 24 hours.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
                <button onClick={openModal} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white hover:opacity-90 transition-all text-sm whitespace-nowrap" style={{ background: ACCENT }}>
                  Get Free PWA Assessment <ArrowRight size={16} />
                </button>
                <Link href="/live-demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/80 border border-white/20 hover:bg-white/10 transition-all text-sm">
                  See Live Examples <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQs ──────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <SectionLabel text="FAQs" />
            <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-base mb-10">Everything you need to know about Progressive Web Apps.</p>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <FaqItem key={i} faq={faq} index={i} open={openFaq === i} onToggle={(idx) => setOpenFaq(openFaq === idx ? null : idx)} />
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* ── Related Services ──────────────────────────────────────────── */}
      <section className="bg-[#f8fafc] py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <SectionLabel text="Related Services" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3">Services That Complement Your PWA</h2>
          <p className="text-gray-500 text-base mb-10">A PWA works best as part of a complete web strategy.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { slug: 'web-design', tag: 'Web Design', title: 'Custom Website Design', desc: 'The Next.js frontend your PWA is built on — pixel-perfect design with 95+ Lighthouse scores.', color: '#f5a623', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80' },
              { slug: 'cms', tag: 'CMS', title: 'CMS Development', desc: 'Headless CMS to power your PWA content — update articles, products, and pages without code.', color: '#6366f1', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&q=80' },
              { slug: 'seo', tag: 'SEO', title: 'SEO Optimisation', desc: 'PWAs are indexable by Google. We combine PWA performance with SEO to rank and retain.', color: '#f59e0b', img: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=80' },
              { slug: 'android', tag: 'Android', title: 'Android App Development', desc: 'If your use case needs deep hardware access or Play Store presence alongside the PWA.', color: '#3ddc84', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80' },
            ].map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
                <div className="h-40 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-3" style={{ background: s.color }}>{s.tag}</span>
                  <h3 className="font-bold text-[#0a1628] group-hover:text-purple-600 transition-colors mb-1.5 text-sm leading-snug">{s.title}</h3>
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
