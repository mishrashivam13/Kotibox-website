'use client'
import { use, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

// ─── Type ──────────────────────────────────────────────────────────────────

type ServiceData = {
  slug: string
  category: string
  tag: string
  accentColor: string
  title: string
  description: string
  longDescription: string
  features: string[]
  process: { step: string; title: string; desc: string }[]
  techStack: string[]
  image: string
  faqs: { question: string; answer: string }[]
  stats: { value: string; label: string }[]
  highlights: { title: string; desc: string }[]
}

// ─── Services Data ──────────────────────────────────────────────────────────

const services: Record<string, ServiceData> = {

  // ── Mobile App Development ─────────────────────────────────────────────────
  'android': {
    slug: 'android',
    category: 'Mobile App Development',
    tag: 'ANDROID',
    accentColor: '#3ddc84',
    title: 'Android App Development',
    description: 'Custom, scalable Android applications built with Kotlin & Java for all screen sizes and industries.',
    longDescription: 'We build high-performance Android applications tailored to your business goals. From MVPs to enterprise-grade systems, our Android team uses modern architecture patterns (MVVM, Clean Architecture) and Material Design 3 to deliver apps that are fast, reliable, and intuitive. Available on Google Play and as APK distribution.',
    features: ['Kotlin & Java Development', 'Material Design 3 UI', 'Offline-first Architecture', 'Google Play Publishing', 'Push Notifications', 'API & Backend Integration'],
    process: [
      { step: '01', title: 'Discovery & Planning', desc: 'We understand your users, define features, and plan the technical architecture.' },
      { step: '02', title: 'UI/UX Design', desc: 'Wireframes and high-fidelity designs following Material Design guidelines.' },
      { step: '03', title: 'Development', desc: 'Sprint-based development with regular demos and progress updates.' },
      { step: '04', title: 'Testing & Launch', desc: 'QA testing across devices, Play Store submission and post-launch support.' },
    ],
    techStack: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'Retrofit', 'Firebase', 'Room DB'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    faqs: [
      { question: 'How long does it take to build an Android app?', answer: 'A simple app takes 4–8 weeks. Medium complexity takes 3–4 months. Large enterprise apps take 5–6+ months depending on features.' },
      { question: 'Do you support Android tablets and foldables?', answer: 'Yes, we build responsive layouts that adapt to phones, tablets, foldables, and Android TV.' },
      { question: 'Will you publish the app on Play Store?', answer: 'Yes, we handle the entire Play Store submission, including app listing optimization and compliance review.' },
    ],
    stats: [
      { value: '500+', label: 'Android Apps Delivered' },
      { value: '4.8★', label: 'Avg Play Store Rating' },
      { value: '99%', label: 'Client Retention Rate' },
    ],
    highlights: [
      { title: 'Google Play Certified', desc: 'We follow all Play Store policies and optimise for featured placement.' },
      { title: 'Material Design 3', desc: "Modern, adaptive UI built to Google's latest design standards." },
      { title: '6-Month Support', desc: 'Post-launch support included with every Android project.' },
    ],
  },

  'ios': {
    slug: 'ios',
    category: 'Mobile App Development',
    tag: 'iOS',
    accentColor: '#007aff',
    title: 'iOS App Development',
    description: "Premium iPhone and iPad applications built with Swift, designed to Apple's HIG standards.",
    longDescription: "We create polished, performance-optimized iOS applications using Swift and SwiftUI. Our apps follow Apple's Human Interface Guidelines to deliver the premium experience iPhone users expect. From App Store launch to ongoing updates, we manage the complete iOS product lifecycle.",
    features: ['Swift & SwiftUI Development', 'Apple HIG Compliance', 'iPhone & iPad Support', 'App Store Publishing', 'Apple Pay & Sign In', 'Core Data & CloudKit'],
    process: [
      { step: '01', title: 'Discovery', desc: 'Define user personas, feature scope, and Apple platform strategy.' },
      { step: '02', title: 'Design', desc: "Pixel-perfect UI designs following Apple's HIG and latest iOS design trends." },
      { step: '03', title: 'Development', desc: 'Agile development in Swift/SwiftUI with bi-weekly deliverables.' },
      { step: '04', title: 'App Store Launch', desc: 'App Review preparation, submission, and post-launch monitoring.' },
    ],
    techStack: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'CloudKit', 'Xcode', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1200&q=80',
    faqs: [
      { question: 'Do you build for iPhone and iPad both?', answer: 'Yes, we build universal apps that adapt to all Apple device sizes including iPhone, iPad, and iPadOS split-screen.' },
      { question: 'Can you integrate Apple Pay?', answer: 'Yes, we integrate Apple Pay, Apple Sign In, and other native Apple services into your app.' },
      { question: 'Do you maintain apps after launch?', answer: 'Yes, we offer monthly maintenance plans covering iOS version updates, bug fixes, and feature additions.' },
    ],
    stats: [
      { value: '300+', label: 'iOS Apps Launched' },
      { value: '4.9★', label: 'App Store Rating' },
      { value: '100%', label: 'App Store Approval Rate' },
    ],
    highlights: [
      { title: 'Apple HIG Compliant', desc: "Every app follows Apple's Human Interface Guidelines for guaranteed approval." },
      { title: 'SwiftUI Native', desc: 'Built with the latest Swift and SwiftUI for peak performance and longevity.' },
      { title: 'Universal Apps', desc: 'One app that works beautifully on iPhone, iPad, and Mac Catalyst.' },
    ],
  },

  'flutter': {
    slug: 'flutter',
    category: 'Mobile App Development',
    tag: 'FLUTTER',
    accentColor: '#54c5f8',
    title: 'Flutter App Development',
    description: "Single codebase, beautiful apps on Android, iOS, Web, and Desktop using Google's Flutter framework.",
    longDescription: "Flutter allows us to write one codebase and ship pixel-perfect apps on Android, iOS, Web, and Desktop. With Flutter's custom rendering engine, we achieve native-like performance with stunning animations at a fraction of the cost of building separate native apps.",
    features: ['Single Codebase for All Platforms', 'Native Performance', 'Custom Animations & UI', 'Hot Reload Development', 'Firebase Integration', '60/120fps Smooth UX'],
    process: [
      { step: '01', title: 'Platform Strategy', desc: 'Decide which platforms to target and define the shared architecture.' },
      { step: '02', title: 'Design System', desc: 'Build a shared design system and component library in Flutter.' },
      { step: '03', title: 'Development', desc: 'Dart-based development with shared business logic and platform-adaptive UI.' },
      { step: '04', title: 'Multi-Platform Launch', desc: 'Simultaneous deployment to Play Store, App Store, and Web.' },
    ],
    techStack: ['Flutter', 'Dart', 'BLoC/Riverpod', 'Firebase', 'REST APIs', 'Hive', 'GetX'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80',
    faqs: [
      { question: 'Is Flutter suitable for complex enterprise apps?', answer: 'Absolutely. Flutter is used by Google, eBay, Alibaba, and BMW for production apps handling millions of users.' },
      { question: 'How does Flutter compare to React Native?', answer: 'Flutter has its own rendering engine, giving it superior performance and consistent UI across platforms. React Native uses native bridges which can cause performance overhead.' },
      { question: 'Can Flutter apps access device hardware?', answer: 'Yes, through platform channels and plugins, Flutter apps access camera, GPS, Bluetooth, biometrics, and all native APIs.' },
    ],
    stats: [
      { value: '200+', label: 'Flutter Apps Built' },
      { value: '3×', label: 'Faster Than Dual Native' },
      { value: '60fps', label: 'Smooth Performance' },
    ],
    highlights: [
      { title: 'Cross-Platform Savings', desc: 'One codebase for iOS, Android, Web, and Desktop saves up to 60% of cost.' },
      { title: 'Pixel-Perfect UI', desc: 'Custom widgets and animations indistinguishable from native apps.' },
      { title: 'Google Partner', desc: 'We are a certified Flutter development partner with direct Google support.' },
    ],
  },

  'react-native': {
    slug: 'react-native',
    category: 'Mobile App Development',
    tag: 'REACT NATIVE',
    accentColor: '#61dafb',
    title: 'React Native App Development',
    description: 'Cross-platform mobile apps using React Native with near-native performance and JavaScript reusability.',
    longDescription: "React Native lets your web team's JavaScript skills transfer directly to mobile development. We build cross-platform apps that share up to 90% of code between iOS and Android while delivering near-native performance using React Native's JavaScript bridge and JSI architecture.",
    features: ['iOS & Android from One Codebase', 'Near-native Performance', 'Code Sharing with Web', 'OTA Updates via CodePush', 'Native Module Integration', 'Redux/Zustand State Management'],
    process: [
      { step: '01', title: 'Architecture', desc: 'Define state management strategy, navigation stack, and API integration layer.' },
      { step: '02', title: 'Component Design', desc: 'Build reusable UI components with platform-adaptive styling.' },
      { step: '03', title: 'Development', desc: 'Feature-by-feature development with continuous integration.' },
      { step: '04', title: 'OTA Deployment', desc: 'App Store submission and CodePush for instant over-the-air updates.' },
    ],
    techStack: ['React Native', 'JavaScript', 'TypeScript', 'Redux', 'Expo', 'CodePush', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=1200&q=80',
    faqs: [
      { question: 'Should I choose Flutter or React Native?', answer: 'If your team knows JavaScript/React, React Native is faster to start. If you need maximum UI customization and performance, Flutter is better.' },
      { question: 'Can React Native apps be updated without app store approval?', answer: 'Yes, using Microsoft CodePush, JS bundle updates can be pushed directly to users without going through app store review.' },
      { question: 'Do you use Expo or bare React Native?', answer: 'We use Expo for rapid prototyping and bare React Native for production apps needing custom native modules.' },
    ],
    stats: [
      { value: '150+', label: 'RN Apps Deployed' },
      { value: '90%', label: 'Code Shared Across Platforms' },
      { value: '50ms', label: 'JS Thread Response Time' },
    ],
    highlights: [
      { title: 'OTA Updates', desc: 'Push JS bundle updates instantly without app store approval via CodePush.' },
      { title: 'Web Team Friendly', desc: 'Leverage your existing React developers for mobile app development.' },
      { title: 'Native Module Access', desc: 'Access any device hardware through custom native module bridges.' },
    ],
  },

  'cross-platform': {
    slug: 'cross-platform',
    category: 'Mobile App Development',
    tag: 'CROSS PLATFORM',
    accentColor: '#a855f7',
    title: 'Cross Platform App Development',
    description: 'One app, every platform — mobile, web, and desktop — faster delivery at reduced cost.',
    longDescription: "Why build three times when you can build once? Our cross-platform development approach uses Flutter or React Native to deliver a consistent, high-quality experience across iOS, Android, Web, and Desktop while reducing development time by up to 60% and maintenance costs significantly.",
    features: ['Reduced Development Cost', 'Consistent Brand Experience', 'Single Codebase Maintenance', 'Faster Time-to-Market', 'Progressive Web App Option', 'Desktop Support (Windows/Mac)'],
    process: [
      { step: '01', title: 'Platform Analysis', desc: 'Analyse your target platforms and choose the optimal cross-platform framework.' },
      { step: '02', title: 'Unified Design', desc: "Create a unified design language that adapts to each platform's conventions." },
      { step: '03', title: 'Shared Development', desc: 'Build shared business logic, APIs, and platform-adaptive UI components.' },
      { step: '04', title: 'Multi-Store Launch', desc: 'Simultaneous release across all target platforms and stores.' },
    ],
    techStack: ['Flutter', 'React Native', 'Dart', 'TypeScript', 'Firebase', 'REST/GraphQL'],
    image: 'https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?w=1200&q=80',
    faqs: [
      { question: 'Does cross-platform mean lower quality?', answer: 'Not at all. Modern frameworks like Flutter deliver 60fps animations and pixel-perfect UIs indistinguishable from native apps.' },
      { question: 'How much cost does cross-platform save?', answer: 'Typically 40–60% compared to building separate native apps, with the same savings on future maintenance.' },
      { question: 'What happens when a platform requires specific native features?', answer: 'We use platform channels (Flutter) or native modules (React Native) to access any device-specific native API.' },
    ],
    stats: [
      { value: '60%', label: 'Cost vs Dual Native' },
      { value: '4', label: 'Platforms from 1 Codebase' },
      { value: '2×', label: 'Faster Time to Market' },
    ],
    highlights: [
      { title: 'Smart Framework Choice', desc: 'We select Flutter or React Native based on your team, needs and budget.' },
      { title: 'Unified Design System', desc: "One design language that adapts to each platform's native conventions." },
      { title: 'Single Maintenance', desc: 'Fix a bug once — it\'s deployed everywhere simultaneously.' },
    ],
  },

  // ── Web Development ────────────────────────────────────────────────────────
  'web-design': {
    slug: 'web-design',
    category: 'Web Development',
    tag: 'WEB DESIGN',
    accentColor: '#f5a623',
    title: 'Custom Website Design & Development',
    description: 'Stunning, conversion-focused websites built with Next.js and Tailwind — fast, SEO-ready, and scalable.',
    longDescription: 'Your website is your most powerful sales asset. We design and develop custom websites that are visually stunning, lightning-fast, and optimized to convert visitors into customers. Built with Next.js for server-side rendering, your site achieves perfect Core Web Vitals scores and ranks higher on Google.',
    features: ['Custom UI/UX Design', 'Next.js / React Development', 'SEO-Optimized Structure', 'Core Web Vitals 100 Score', 'CMS Integration', 'Mobile-first Responsive'],
    process: [
      { step: '01', title: 'Discovery', desc: 'Understand your brand, goals, target audience, and competitor landscape.' },
      { step: '02', title: 'Design', desc: 'Wireframes, mood boards, and high-fidelity Figma designs for your approval.' },
      { step: '03', title: 'Development', desc: 'Pixel-perfect Next.js development with CMS integration and animations.' },
      { step: '04', title: 'Launch & SEO', desc: 'Performance optimization, sitemap submission, and Google Search Console setup.' },
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Sanity CMS', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
    faqs: [
      { question: 'How long does a website take to build?', answer: 'A landing page takes 1–2 weeks. A full business website takes 3–6 weeks. Complex portals take 2–4 months.' },
      { question: 'Can I update the website content myself?', answer: 'Yes, we integrate a headless CMS (like Sanity or Contentful) so you can update text, images, and pages without touching code.' },
      { question: 'Do you guarantee Google Page Speed scores?', answer: 'We target 90+ on all Core Web Vitals metrics (LCP, FID, CLS) on both desktop and mobile.' },
    ],
    stats: [
      { value: '100', label: 'Core Web Vitals Score' },
      { value: '<2s', label: 'Average Load Time' },
      { value: '3×', label: 'More Conversions vs Old Site' },
    ],
    highlights: [
      { title: 'SEO-First Architecture', desc: 'Server-side rendering and structured data for maximum Google visibility.' },
      { title: 'Conversion Optimised', desc: 'Every design decision guides visitors toward your business goal.' },
      { title: 'CMS Powered', desc: 'Your team can update content without touching a single line of code.' },
    ],
  },

  'ecommerce': {
    slug: 'ecommerce',
    category: 'Web Development',
    tag: 'E-COMMERCE',
    accentColor: '#22c55e',
    title: 'E-Commerce Website Development',
    description: 'High-converting online stores and marketplaces with seamless payments, inventory, and order management.',
    longDescription: 'We build powerful e-commerce platforms that turn browsers into buyers. From single-brand stores to multi-vendor marketplaces, our e-commerce solutions include AI-powered product recommendations, abandoned cart recovery, and deep analytics — all optimized for maximum conversion rate.',
    features: ['Multi-vendor Marketplace Support', 'AI Product Recommendations', 'Abandoned Cart Recovery', 'Payment Gateway Integration', 'Inventory Management', 'Order & Return Workflow'],
    process: [
      { step: '01', title: 'Store Strategy', desc: 'Product catalog structure, payment flow, and conversion optimization strategy.' },
      { step: '02', title: 'Design', desc: 'Mobile-first store design with focus on product discovery and checkout UX.' },
      { step: '03', title: 'Development', desc: 'Custom-built or platform-based (Next.js/Shopify) store development.' },
      { step: '04', title: 'Go-to-Market', desc: 'Payment gateway setup, SEO optimization, and performance testing before launch.' },
    ],
    techStack: ['Next.js', 'Node.js', 'MongoDB', 'Razorpay/Stripe', 'Redis', 'Cloudinary'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    faqs: [
      { question: 'Custom build or Shopify — which do you recommend?', answer: 'For unique requirements and full ownership, we recommend custom Next.js. For faster launch with less custom needs, Shopify is excellent.' },
      { question: 'Which payment gateways do you integrate?', answer: 'Razorpay, Stripe, PayPal, Paytm, UPI, COD, and EMI options based on your market.' },
      { question: 'Can the store handle flash sales and high traffic?', answer: 'Yes, we use Redis caching and CDN to handle traffic spikes during sales events without slowdowns.' },
    ],
    stats: [
      { value: '40%', label: 'Avg Conversion Rate Boost' },
      { value: '3×', label: 'Revenue Growth Year 1' },
      { value: '99.9%', label: 'Uptime SLA' },
    ],
    highlights: [
      { title: 'AI Product Recommendations', desc: 'Smart suggestions increase average order value by 25% automatically.' },
      { title: 'Frictionless Checkout', desc: 'Optimised checkout flow that reduces cart abandonment by 35%.' },
      { title: 'Multi-Currency Ready', desc: 'Accept payments globally with automatic currency detection and conversion.' },
    ],
  },

  'cms': {
    slug: 'cms',
    category: 'Web Development',
    tag: 'CMS',
    accentColor: '#6366f1',
    title: 'CMS Development',
    description: 'Custom CMS solutions and headless CMS integrations that give your team full content control.',
    longDescription: 'Content is king — but only if your team can manage it without developer help. We build custom admin panels and integrate leading headless CMS platforms (Sanity, Strapi, Contentful) so your marketing team can publish, update, and manage content effortlessly across all channels.',
    features: ['Headless CMS Integration', 'Custom Admin Dashboard', 'Role-based Content Access', 'Multi-language Support', 'Media Library Management', 'API-first Content Delivery'],
    process: [
      { step: '01', title: 'Content Audit', desc: 'Map out all content types, workflows, and team permissions needed.' },
      { step: '02', title: 'CMS Architecture', desc: 'Design the content schema and editorial workflow.' },
      { step: '03', title: 'Build & Integrate', desc: 'Develop the CMS and connect it to your frontend via API.' },
      { step: '04', title: 'Training & Handoff', desc: 'Team training, documentation, and go-live support.' },
    ],
    techStack: ['Sanity.io', 'Strapi', 'Contentful', 'Next.js', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&q=80',
    faqs: [
      { question: 'Which CMS platform do you recommend?', answer: 'Sanity for maximum flexibility, Strapi for self-hosted open-source, and Contentful for enterprise scale.' },
      { question: 'Can non-technical editors use it?', answer: 'Absolutely. All our CMS implementations have visual editors with drag-and-drop, preview, and scheduling features.' },
      { question: 'Can the CMS serve multiple websites or apps?', answer: 'Yes, headless CMS delivers content via API to any front-end: website, mobile app, smartwatch, or kiosk.' },
    ],
    stats: [
      { value: '5min', label: 'Avg Content Update Time' },
      { value: '10+', label: 'CMS Platforms Supported' },
      { value: 'Zero', label: 'Developer Needed for Updates' },
    ],
    highlights: [
      { title: 'Non-Technical Editors', desc: 'Visual editing interfaces that anyone on your team can use confidently.' },
      { title: 'API-First Delivery', desc: 'Content delivered via API to web, app, kiosk, or any digital channel.' },
      { title: 'Role-Based Access', desc: 'Different permission levels for editors, reviewers, and administrators.' },
    ],
  },

  'pwa': {
    slug: 'pwa',
    category: 'Web Development',
    tag: 'PWA',
    accentColor: '#8b5cf6',
    title: 'Progressive Web App Development',
    description: 'App-like experience on the browser — offline support, push notifications, and installable on home screen.',
    longDescription: 'Progressive Web Apps bridge the gap between web and native mobile apps. We build PWAs that work offline, load in under 2 seconds, send push notifications, and can be installed on the home screen — without going through an app store. Perfect for reaching users on any device.',
    features: ['Offline Mode (Service Workers)', 'Home Screen Installation', 'Push Notifications', 'Fast Load (< 2s)', 'App Store Not Required', 'Works on Any Browser/OS'],
    process: [
      { step: '01', title: 'PWA Audit', desc: 'Assess if PWA fits your use case vs native app.' },
      { step: '02', title: 'Service Worker Setup', desc: 'Implement caching strategies for offline functionality.' },
      { step: '03', title: 'Web App Manifest', desc: 'Configure home screen install prompt and app metadata.' },
      { step: '04', title: 'Performance Tuning', desc: 'Achieve Lighthouse PWA score of 100 before launch.' },
    ],
    techStack: ['Next.js', 'Service Workers', 'Web Push API', 'IndexedDB', 'Workbox', 'Lighthouse'],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80',
    faqs: [
      { question: 'Is PWA a replacement for native apps?', answer: 'For content-heavy apps, yes. For apps needing deep hardware access (Bluetooth, AR), a native or hybrid approach is better.' },
      { question: 'Does PWA work on iPhone?', answer: 'Yes, Safari on iOS 16.4+ supports full PWA features including push notifications and home screen installation.' },
      { question: 'Can PWA send push notifications?', answer: 'Yes, using the Web Push API, PWAs can send push notifications to Android devices and iOS 16.4+ devices.' },
    ],
    stats: [
      { value: '100', label: 'Lighthouse PWA Score' },
      { value: '<2s', label: 'Load Time' },
      { value: '40%', label: 'Higher Engagement vs Web' },
    ],
    highlights: [
      { title: 'No App Store Needed', desc: 'Users install directly from the browser — no review delays or fees.' },
      { title: 'Works Fully Offline', desc: 'Service workers cache content for complete functionality without internet.' },
      { title: 'Push Notifications', desc: 'Re-engage users with native-feeling push notifications on all platforms.' },
    ],
  },

  // ── Digital Marketing ──────────────────────────────────────────────────────
  'seo': {
    slug: 'seo',
    category: 'Digital Marketing',
    tag: 'SEO',
    accentColor: '#f59e0b',
    title: 'SEO Optimization',
    description: 'Data-driven SEO strategies that drive organic traffic, improve rankings, and generate qualified leads.',
    longDescription: 'We help your business rank on Page 1 of Google through technical SEO excellence, content strategy, and authoritative link building. Our SEO process is 100% data-driven — every decision is backed by keyword research, competitor analysis, and performance data. No guesswork, only results.',
    features: ['Technical SEO Audit', 'Keyword Research & Strategy', 'On-page Optimization', 'Content SEO & Blogging', 'Link Building', 'Monthly Ranking Reports'],
    process: [
      { step: '01', title: 'SEO Audit', desc: 'Comprehensive audit of technical health, content gaps, and backlink profile.' },
      { step: '02', title: 'Strategy', desc: 'Build a 6-month roadmap with target keywords and content calendar.' },
      { step: '03', title: 'Execution', desc: 'On-page optimization, content publishing, and link acquisition.' },
      { step: '04', title: 'Reporting', desc: 'Monthly reports on rankings, traffic, and conversion impact.' },
    ],
    techStack: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'Google Analytics 4'],
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80',
    faqs: [
      { question: 'How long does SEO take to show results?', answer: 'Initial improvements appear in 2–3 months. Significant ranking and traffic gains typically come in 4–6 months with consistent effort.' },
      { question: 'Do you guarantee Page 1 rankings?', answer: 'No ethical SEO agency can guarantee specific rankings. We guarantee a structured, white-hat process and transparent monthly reporting.' },
      { question: 'What is included in monthly SEO?', answer: 'Technical fixes, content creation (2–4 articles), link building (5–10 links/month), and a detailed rankings & traffic report.' },
    ],
    stats: [
      { value: '300%', label: 'Average Traffic Growth' },
      { value: 'Page 1', label: 'Google Rankings Achieved' },
      { value: '6mo', label: 'To See Significant Results' },
    ],
    highlights: [
      { title: 'Technical SEO', desc: 'Core Web Vitals, crawlability, and site architecture optimisation.' },
      { title: 'Content Authority', desc: 'Topical authority mapping to dominate your niche on Google.' },
      { title: 'White-Hat Only', desc: 'Sustainable, algorithm-proof link building and content tactics.' },
    ],
  },

  'social-media': {
    slug: 'social-media',
    category: 'Digital Marketing',
    tag: 'SOCIAL MEDIA',
    accentColor: '#ec4899',
    title: 'Social Media Marketing',
    description: 'Build brand awareness, grow your audience, and drive sales through strategic social media management.',
    longDescription: 'Social media is where your customers spend their time. We manage your presence on Instagram, Facebook, LinkedIn, Twitter/X, and YouTube with data-driven content strategies, community management, and paid social campaigns that build genuine brand loyalty and drive measurable business outcomes.',
    features: ['Multi-platform Management', 'Content Calendar & Creation', 'Reels & Short Video Content', 'Community Management', 'Influencer Outreach', 'Monthly Analytics Reports'],
    process: [
      { step: '01', title: 'Brand Audit', desc: 'Analyse current social presence and competitor benchmarking.' },
      { step: '02', title: 'Strategy', desc: 'Platform selection, content pillars, and posting frequency plan.' },
      { step: '03', title: 'Content Creation', desc: 'Graphics, videos, reels, and copy creation and scheduling.' },
      { step: '04', title: 'Growth & Reporting', desc: 'Engagement tracking, audience growth metrics, and monthly strategy review.' },
    ],
    techStack: ['Meta Business Suite', 'Hootsuite', 'Canva Pro', 'CapCut', 'Later', 'Sprout Social'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80',
    faqs: [
      { question: 'How many posts per month do you create?', answer: 'Our standard plan includes 20–25 posts/month (5–6 per week) across 2–3 platforms, plus stories and reels.' },
      { question: 'Do you also run paid social ads?', answer: 'Yes, we manage Meta Ads, LinkedIn Ads, and YouTube Ads as an add-on to organic social management.' },
      { question: 'Can you grow our Instagram following?', answer: 'We focus on engaged, real followers through content quality and community interaction — not fake followers or bots.' },
    ],
    stats: [
      { value: '2×', label: 'Avg Engagement Rate Increase' },
      { value: '25+', label: 'Posts Created Per Month' },
      { value: '6', label: 'Platforms Managed' },
    ],
    highlights: [
      { title: 'Reels & Short Video', desc: 'Professional video content that drives 3× more reach than static posts.' },
      { title: 'Community Building', desc: 'Active comment management and DM handling to build loyal followers.' },
      { title: 'Data-Driven Content', desc: 'Every content decision backed by platform analytics and A/B testing.' },
    ],
  },

  'ppc': {
    slug: 'ppc',
    category: 'Digital Marketing',
    tag: 'PPC ADS',
    accentColor: '#ef4444',
    title: 'PPC Advertising',
    description: 'Google Ads, Meta Ads, and LinkedIn campaigns optimized for maximum ROI and qualified lead generation.',
    longDescription: "Get in front of your exact target audience the moment they're searching for what you offer. Our PPC experts manage Google Search, Display, YouTube, and Meta ad campaigns with rigorous A/B testing, conversion tracking, and bid optimization — delivering the lowest cost-per-lead in your industry.",
    features: ['Google Search & Display Ads', 'Meta (Facebook/Instagram) Ads', 'YouTube Advertising', 'A/B Ad Copy Testing', 'Conversion Tracking Setup', 'Weekly Performance Reports'],
    process: [
      { step: '01', title: 'Account Audit', desc: 'Review existing campaigns or set up accounts, tracking, and conversion goals.' },
      { step: '02', title: 'Campaign Strategy', desc: 'Keyword research, audience targeting, and budget allocation plan.' },
      { step: '03', title: 'Launch & Test', desc: 'Multiple ad variations launched and A/B tested from day one.' },
      { step: '04', title: 'Optimize & Scale', desc: 'Weekly bid adjustments, pausing underperformers, and scaling winners.' },
    ],
    techStack: ['Google Ads', 'Meta Ads Manager', 'Google Analytics 4', 'Google Tag Manager', 'SEMrush'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    faqs: [
      { question: 'What is a good budget to start with PPC?', answer: 'We recommend a minimum of ₹30,000/month (or $400/month) ad spend to get meaningful data. Management fee is separate.' },
      { question: 'How quickly do PPC campaigns show results?', answer: 'Unlike SEO, PPC can drive traffic from day one. Optimization typically takes 2–4 weeks to reach peak efficiency.' },
      { question: 'What is your management fee structure?', answer: 'We charge a flat monthly management fee or a percentage of ad spend (typically 15–20%), whichever is greater.' },
    ],
    stats: [
      { value: '4×', label: 'Average ROAS Delivered' },
      { value: '30%', label: 'Lower Cost Per Lead' },
      { value: 'Day 1', label: 'Traffic Starts' },
    ],
    highlights: [
      { title: 'A/B Testing Always On', desc: 'Multiple ad variations tested simultaneously to find top performers fast.' },
      { title: 'Full Conversion Tracking', desc: 'Full-funnel tracking from ad click to sale with Google Tag Manager setup.' },
      { title: 'Daily Budget Optimisation', desc: 'Bid adjustments every day to maximise ROI within your ad spend.' },
    ],
  },

  'content': {
    slug: 'content',
    category: 'Digital Marketing',
    tag: 'CONTENT',
    accentColor: '#14b8a6',
    title: 'Content Marketing',
    description: 'Strategic content that educates your audience, builds authority, and generates inbound leads consistently.',
    longDescription: 'Content marketing is the most sustainable way to build brand authority and generate leads. We create SEO-optimized blogs, case studies, whitepapers, and video scripts that position your brand as the expert in your industry — attracting, educating, and converting your ideal customers at every stage of the funnel.',
    features: ['SEO Blog Writing', 'Case Studies & Whitepapers', 'Email Newsletter Campaigns', 'Video Script Writing', 'Content Calendar Management', 'Content Performance Analytics'],
    process: [
      { step: '01', title: 'Audience Research', desc: 'Define buyer personas, pain points, and content consumption preferences.' },
      { step: '02', title: 'Content Strategy', desc: 'Build a topical authority map and 6-month content calendar.' },
      { step: '03', title: 'Creation & Publishing', desc: 'Write, design, and publish content across chosen channels.' },
      { step: '04', title: 'Distribute & Measure', desc: 'Promote content via email and social; track leads and organic traffic.' },
    ],
    techStack: ['Ahrefs', 'SEMrush', 'Notion', 'WordPress', 'Mailchimp', 'Google Analytics 4'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80',
    faqs: [
      { question: 'How many blogs per month do you write?', answer: 'Our standard plan includes 8 SEO-optimized articles per month (2 per week), each 1,200–2,000 words.' },
      { question: 'Do you write for technical industries?', answer: 'Yes, our content team specializes in tech, SaaS, healthcare, finance, and e-commerce content with proper research.' },
      { question: 'How do you measure content ROI?', answer: 'We track organic traffic growth, keyword rankings, time-on-page, email signups, and leads attributed to content.' },
    ],
    stats: [
      { value: '8', label: 'SEO Articles Per Month' },
      { value: '150%', label: 'Organic Traffic Growth' },
      { value: '2,000', label: 'Average Words Per Article' },
    ],
    highlights: [
      { title: 'Topical Authority', desc: 'Systematic content clusters that establish your brand as the industry expert.' },
      { title: 'Lead Generation Focus', desc: 'Content designed to capture emails and convert readers into qualified leads.' },
      { title: 'Multi-Channel Repurposing', desc: 'Blog content adapted for LinkedIn, email newsletters, and social media.' },
    ],
  },

  // ── AI Development ─────────────────────────────────────────────────────────
  'ai': {
    slug: 'ai',
    category: 'AI Development',
    tag: 'AI DEVELOPMENT',
    accentColor: '#f5a623',
    title: 'AI Development Services',
    description: 'Custom AI solutions — chatbots, automation, machine learning, and generative AI — built for real business impact.',
    longDescription: 'We are a Google-certified AI agency building production-grade AI solutions that transform how businesses operate. From intelligent chatbots trained on your data to machine learning models that predict customer behavior, our AI team makes cutting-edge technology accessible and valuable for businesses of all sizes.',
    features: ['AI Chatbot Development', 'AI Workflow Automation', 'Machine Learning Models', 'Generative AI Integration', 'AI Consulting & Strategy', 'LLM Fine-tuning & RAG'],
    process: [
      { step: '01', title: 'AI Discovery', desc: 'Identify high-ROI AI opportunities in your existing business processes.' },
      { step: '02', title: 'Data Assessment', desc: 'Audit available data and determine training strategy and model approach.' },
      { step: '03', title: 'Model Development', desc: 'Build, train, and evaluate AI models with your specific use case.' },
      { step: '04', title: 'Deploy & Monitor', desc: 'Production deployment with monitoring, retraining pipeline, and support.' },
    ],
    techStack: ['Python', 'LangChain', 'OpenAI API', 'Hugging Face', 'FastAPI', 'Vector DBs', 'AWS SageMaker'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    faqs: [
      { question: 'What types of AI solutions do you build?', answer: 'Chatbots, recommendation engines, demand forecasting, image recognition, document processing, voice AI, and custom LLM applications.' },
      { question: 'Do you use GPT-4 or build custom models?', answer: 'We use the right tool for each use case — GPT-4/Claude for reasoning tasks, fine-tuned open-source models for domain-specific needs, and custom ML for structured data.' },
      { question: 'Is our data safe when building AI solutions?', answer: 'Yes. We can deploy models on your private cloud, ensuring your training data and queries never leave your infrastructure.' },
    ],
    stats: [
      { value: '50+', label: 'AI Solutions Deployed' },
      { value: '90%', label: 'Task Automation Rate' },
      { value: '3mo', label: 'Average Deployment Time' },
    ],
    highlights: [
      { title: 'Google AI Certified', desc: 'We are a Google-certified AI agency with proven production AI deployments.' },
      { title: 'Private & Secure', desc: 'On-premise deployment options ensure your data never leaves your servers.' },
      { title: 'Continuous Learning', desc: 'Models improve automatically through feedback loops and retraining pipelines.' },
    ],
  },

  'ai-chatbot': {
    slug: 'ai-chatbot',
    category: 'AI Development',
    tag: 'AI CHATBOT',
    accentColor: '#6366f1',
    title: 'AI Chatbot Development',
    description: 'Intelligent chatbots trained on your data — for customer support, lead generation, and sales automation.',
    longDescription: 'We build production-grade AI chatbots that understand context, remember conversation history, and take real actions. Trained on your company knowledge base, these bots handle 70–80% of customer queries without human intervention — deployed on your website, WhatsApp, Instagram, and more.',
    features: ['Custom Knowledge Base Training', 'Multi-channel Deployment (Web/WhatsApp/IG)', 'Human-Agent Handoff', 'Lead Capture & CRM Sync', 'Multilingual Support (90+ languages)', 'Analytics & Conversation Reports'],
    process: [
      { step: '01', title: 'Discovery', desc: 'Map use cases, conversation flows, and data sources for bot training.' },
      { step: '02', title: 'Data Ingestion', desc: 'Feed FAQs, PDFs, website content, and product catalogs into the knowledge base.' },
      { step: '03', title: 'Build & Train', desc: 'Develop the bot with LLM backbone, test against real user queries, and fine-tune.' },
      { step: '04', title: 'Deploy & Monitor', desc: 'Launch on chosen channels with live monitoring, A/B testing, and continuous improvement.' },
    ],
    techStack: ['Python', 'LangChain', 'OpenAI / Claude', 'Pinecone (Vector DB)', 'Node.js', 'WhatsApp Business API'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80',
    faqs: [
      { question: 'Can the bot be trained on my product catalog?', answer: 'Yes. We ingest PDFs, Notion pages, website URLs, Google Sheets, or any structured data into a vector database for accurate retrieval.' },
      { question: 'What happens when the bot cannot answer?', answer: 'It gracefully hands off to a human agent with full conversation context, so the customer never has to repeat themselves.' },
      { question: 'How long does it take to deploy?', answer: 'A basic bot is live in 3–5 days. A fully customized enterprise chatbot with CRM integration takes 2–4 weeks.' },
    ],
    stats: [
      { value: '70%', label: 'Queries Automated' },
      { value: '90+', label: 'Languages Supported' },
      { value: '<500ms', label: 'Response Time' },
    ],
    highlights: [
      { title: 'RAG Architecture', desc: 'Retrieval-Augmented Generation ensures answers are always grounded in your data, not hallucinations.' },
      { title: 'Multi-channel Ready', desc: 'One bot deployed seamlessly across website widget, WhatsApp, Telegram, and Instagram DMs.' },
      { title: 'No-code Updates', desc: 'Update the knowledge base from a simple dashboard without touching code.' },
    ],
  },

  'ai-automation': {
    slug: 'ai-automation',
    category: 'AI Development',
    tag: 'AI AUTOMATION',
    accentColor: '#10b981',
    title: 'AI Workflow Automation',
    description: 'Automate repetitive business processes with intelligent AI agents that think, decide, and act.',
    longDescription: 'Move beyond simple RPA. Our AI automation agents understand unstructured data, make intelligent decisions, and execute multi-step workflows — from invoice processing and email triage to lead follow-up and compliance checking. Reduce operational overhead by 60–80% while increasing accuracy.',
    features: ['End-to-end Workflow Automation', 'Document & Invoice Processing', 'Email & CRM Automation', 'AI-powered Decision Making', 'Integration with 200+ Tools (Zapier/n8n)', 'Monitoring & Audit Logs'],
    process: [
      { step: '01', title: 'Process Audit', desc: 'Identify the top 3–5 manual workflows with highest automation ROI.' },
      { step: '02', title: 'Workflow Design', desc: 'Map decision trees, data sources, integrations, and exception handling.' },
      { step: '03', title: 'Agent Development', desc: 'Build AI agents using LangChain, n8n, or custom Python pipelines.' },
      { step: '04', title: 'Deploy & Iterate', desc: 'Go live with monitoring dashboards and continuously improve accuracy.' },
    ],
    techStack: ['Python', 'LangChain Agents', 'n8n / Zapier', 'OpenAI API', 'FastAPI', 'PostgreSQL', 'Webhooks'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    faqs: [
      { question: 'What processes can be automated?', answer: 'Invoice processing, lead follow-up, email sorting, onboarding workflows, report generation, data entry, and compliance checks — among many others.' },
      { question: 'Does it integrate with our existing tools?', answer: 'Yes. We integrate with Google Workspace, Slack, Salesforce, HubSpot, Notion, QuickBooks, and 200+ tools via API or n8n/Zapier.' },
      { question: 'How is accuracy ensured?', answer: 'We build human-in-the-loop checkpoints for critical decisions, with confidence thresholds that trigger manual review when needed.' },
    ],
    stats: [
      { value: '80%', label: 'Ops Cost Reduction' },
      { value: '200+', label: 'Tool Integrations' },
      { value: '24/7', label: 'Always Running' },
    ],
    highlights: [
      { title: 'Agentic AI', desc: 'Autonomous agents that plan, use tools, and execute multi-step tasks without manual oversight.' },
      { title: 'Exception Handling', desc: 'Smart escalation paths ensure humans review edge cases while routine tasks run automatically.' },
      { title: 'Full Audit Trail', desc: 'Every automated action is logged with timestamps, inputs, outputs, and confidence scores.' },
    ],
  },

  'machine-learning': {
    slug: 'machine-learning',
    category: 'AI Development',
    tag: 'MACHINE LEARNING',
    accentColor: '#3b82f6',
    title: 'Machine Learning Development',
    description: 'Custom ML models for prediction, classification, recommendation, and anomaly detection — built on your data.',
    longDescription: 'We design and deploy machine learning models tailored to your specific business problem. From demand forecasting and customer churn prediction to fraud detection and product recommendations — our data scientists build, validate, and maintain models that deliver measurable business outcomes.',
    features: ['Predictive Analytics Models', 'Customer Churn & LTV Prediction', 'Recommendation Engines', 'Fraud & Anomaly Detection', 'Computer Vision Models', 'MLOps & Model Monitoring'],
    process: [
      { step: '01', title: 'Data Assessment', desc: 'Audit data quality, volume, and coverage to determine model feasibility.' },
      { step: '02', title: 'Feature Engineering', desc: 'Transform raw data into meaningful signals that drive model accuracy.' },
      { step: '03', title: 'Model Development', desc: 'Train, validate, and tune models using supervised, unsupervised, or reinforcement learning.' },
      { step: '04', title: 'MLOps & Monitoring', desc: 'Deploy to production with CI/CD pipelines, A/B testing, and drift monitoring.' },
    ],
    techStack: ['Python', 'Scikit-learn', 'TensorFlow / PyTorch', 'AWS SageMaker', 'MLflow', 'Pandas / Spark', 'Docker'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80',
    faqs: [
      { question: 'How much data do we need to build a useful model?', answer: 'It depends on complexity. Classification models can work with 1,000+ samples; deep learning models typically need 10,000+. We assess feasibility upfront.' },
      { question: 'What happens when the model accuracy degrades over time?', answer: 'We set up automated drift detection and retraining pipelines using MLflow so model performance stays consistent as data patterns change.' },
      { question: 'Can the model be integrated into our existing software?', answer: 'Yes. We expose models as REST APIs or embed them directly into your application stack via SDKs.' },
    ],
    stats: [
      { value: '95%+', label: 'Model Accuracy Target' },
      { value: 'Real-time', label: 'Inference APIs' },
      { value: 'Auto', label: 'Retraining Pipelines' },
    ],
    highlights: [
      { title: 'Business-first Approach', desc: 'We tie every model metric (accuracy, recall) to a concrete business outcome (revenue, cost reduction).' },
      { title: 'Explainable AI', desc: 'SHAP values and feature importance reports help stakeholders trust and understand model decisions.' },
      { title: 'MLOps Ready', desc: 'Full CI/CD pipelines, model versioning, and monitoring from day one in production.' },
    ],
  },

  'ai-integration': {
    slug: 'ai-integration',
    category: 'AI Development',
    tag: 'AI INTEGRATION',
    accentColor: '#0ea5e9',
    title: 'AI Integration Services',
    description: 'Seamlessly embed OpenAI, Claude, Gemini, and custom AI models into your existing product or workflow.',
    longDescription: 'You do not need to rebuild your entire stack to add AI. We integrate leading AI APIs — OpenAI GPT-4, Anthropic Claude, Google Gemini, and open-source models — into your existing web apps, mobile apps, CRMs, and ERPs. Delivering AI-powered features in days, not months.',
    features: ['OpenAI / Claude / Gemini Integration', 'Custom Model API Deployment', 'RAG Pipeline Setup', 'Legacy System AI Augmentation', 'AI Feature Roadmap Consulting', 'Prompt Engineering & Optimization'],
    process: [
      { step: '01', title: 'API & System Audit', desc: 'Evaluate existing architecture and identify the best AI integration points.' },
      { step: '02', title: 'Provider Selection', desc: 'Choose the right AI model based on cost, latency, accuracy, and privacy needs.' },
      { step: '03', title: 'Integration Build', desc: 'Develop middleware, API wrappers, and prompt engineering for reliable AI responses.' },
      { step: '04', title: 'Test & Optimize', desc: 'Load test, optimize prompts, cache responses, and reduce token costs.' },
    ],
    techStack: ['OpenAI API', 'Anthropic Claude API', 'Google Gemini', 'LangChain', 'Node.js / Python', 'Redis (Caching)', 'Docker'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
    faqs: [
      { question: 'Which AI providers do you work with?', answer: 'OpenAI (GPT-4o), Anthropic (Claude 3.5), Google (Gemini 1.5), Meta (Llama), Mistral, and any open-source model deployable on AWS/GCP.' },
      { question: 'Can we use our own data with public AI APIs?', answer: 'Yes, via RAG (Retrieval-Augmented Generation). Your data stays in your vector database; only relevant chunks are sent to the AI API.' },
      { question: 'How do you control AI costs?', answer: 'We implement semantic caching (reuse similar query results), model routing (use cheap models for simple tasks), and response streaming to minimize token usage.' },
    ],
    stats: [
      { value: '10+', label: 'AI Providers Supported' },
      { value: '60%', label: 'Avg Token Cost Reduction' },
      { value: 'Days', label: 'Not Months to Integrate' },
    ],
    highlights: [
      { title: 'Provider Agnostic', desc: 'We design integrations that can switch AI providers with minimal code changes as the market evolves.' },
      { title: 'Prompt Engineering', desc: 'Structured prompts, few-shot examples, and system instructions that maximize output quality.' },
      { title: 'Cost Optimization', desc: 'Semantic caching and model routing typically reduce AI API costs by 50–70% in production.' },
    ],
  },

  'generative-ai': {
    slug: 'generative-ai',
    category: 'AI Development',
    tag: 'GENERATIVE AI',
    accentColor: '#ec4899',
    title: 'Generative AI Solutions',
    description: 'Custom GenAI apps for content creation, image generation, code assistance, document analysis, and more.',
    longDescription: 'Generative AI is reshaping how content is created, products are designed, and knowledge is processed. We build custom GenAI applications — from AI writing assistants and image generators to document intelligence platforms and code copilots — tailored to your specific industry and workflow.',
    features: ['AI Content Generation Platforms', 'Text-to-Image & Video Generation', 'Document Intelligence & Summarization', 'AI Code Review & Copilot', 'Fine-tuned Domain Models (LoRA)', 'Multi-modal AI Applications'],
    process: [
      { step: '01', title: 'Use Case Definition', desc: 'Identify the specific GenAI application and content type that delivers highest value.' },
      { step: '02', title: 'Model Selection & Fine-tuning', desc: 'Choose foundation model and fine-tune with domain-specific data if needed.' },
      { step: '03', title: 'Application Development', desc: 'Build the product layer — UI, API, content pipelines, and quality guardrails.' },
      { step: '04', title: 'Safety & Launch', desc: 'Implement content filtering, rate limiting, and responsible AI guardrails before go-live.' },
    ],
    techStack: ['GPT-4 / Claude 3.5', 'Stable Diffusion / DALL-E 3', 'Whisper (Speech-to-Text)', 'LangChain', 'FastAPI', 'AWS / GCP', 'LoRA Fine-tuning'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80',
    faqs: [
      { question: 'Can GenAI be fine-tuned on our specific content style?', answer: 'Yes. Using LoRA and DPO fine-tuning, we train models to match your brand voice, writing style, and domain terminology exactly.' },
      { question: 'How do you prevent AI from generating harmful content?', answer: 'We implement content moderation APIs, constitutional AI principles, and custom guardrails to filter inappropriate outputs before they reach users.' },
      { question: 'What industries benefit most from GenAI?', answer: 'E-commerce (product descriptions), media (content scaling), legal (document drafting), healthcare (clinical notes), and EdTech (personalized learning).' },
    ],
    stats: [
      { value: '10×', label: 'Content Production Speed' },
      { value: 'Multi-modal', label: 'Text + Image + Audio' },
      { value: 'Fine-tuned', label: 'Domain Models' },
    ],
    highlights: [
      { title: 'Brand Voice Training', desc: 'Fine-tune language models on your content to produce outputs that sound unmistakably like your brand.' },
      { title: 'Responsible AI', desc: 'Content guardrails, fact-checking pipelines, and human review workflows built into every deployment.' },
      { title: 'Multi-modal Pipelines', desc: 'Combine text, image, audio, and video generation in unified creative workflows.' },
    ],
  },

  'ai-consulting': {
    slug: 'ai-consulting',
    category: 'AI Development',
    tag: 'AI CONSULTING',
    accentColor: '#f59e0b',
    title: 'AI Consulting & Strategy',
    description: 'Expert AI roadmap, feasibility assessment, use-case prioritization, and implementation planning for your business.',
    longDescription: 'Not sure where to start with AI? Our certified AI consultants work with your leadership team to identify the highest-ROI AI opportunities, assess technical feasibility, build a phased implementation roadmap, and help you avoid the most common and costly AI mistakes. We have guided 50+ businesses through successful AI adoption.',
    features: ['AI Opportunity Assessment', 'Use-case ROI Prioritization', 'Technical Feasibility Analysis', 'AI Vendor & Tool Selection', 'Team Upskilling Workshops', 'Implementation Roadmap (3–12 months)'],
    process: [
      { step: '01', title: 'Discovery Workshop', desc: '2-day workshop with your leadership team to understand goals, pain points, and current data assets.' },
      { step: '02', title: 'Opportunity Mapping', desc: 'Score and prioritize 10–20 AI use cases by ROI potential, effort, and strategic fit.' },
      { step: '03', title: 'Roadmap Creation', desc: 'Build a phased 3–12 month AI implementation plan with clear milestones and success metrics.' },
      { step: '04', title: 'Ongoing Advisory', desc: 'Monthly advisory calls to guide implementation, unblock teams, and adjust strategy as needed.' },
    ],
    techStack: ['Strategic Frameworks', 'AI Maturity Assessment', 'POC Prototyping', 'Data Audit Tools', 'LLM Benchmarking', 'ROI Modeling'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    faqs: [
      { question: 'What is the output of an AI consulting engagement?', answer: 'A comprehensive AI strategy document including: prioritized use case list, 12-month roadmap, data requirements, vendor recommendations, and estimated ROI for each initiative.' },
      { question: 'Do you help with AI governance and ethics?', answer: 'Yes. We include responsible AI frameworks, data privacy assessment, bias mitigation strategies, and governance policies in every strategy engagement.' },
      { question: 'Can you help us evaluate AI vendors and tools?', answer: 'Absolutely. We run structured vendor evaluations covering capability, cost, security, and integration complexity to help you make unbiased tool decisions.' },
    ],
    stats: [
      { value: '50+', label: 'AI Strategies Delivered' },
      { value: '3×', label: 'Avg ROI from AI Projects' },
      { value: 'Google', label: 'AI Certified Team' },
    ],
    highlights: [
      { title: 'Google AI Certified', desc: 'Our consultants hold Google Cloud AI certifications and have deployed AI at enterprise scale.' },
      { title: 'Vendor Neutral', desc: 'We recommend the best tools for your needs — not the ones we are financially incentivized to sell.' },
      { title: 'Hands-on POCs', desc: 'Every consulting engagement includes a proof-of-concept build so you see real results before committing to full development.' },
    ],
  },
}

// ─── Shared Helpers ─────────────────────────────────────────────────────────

function SectionLabel({ text, color }: { text: string; color: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-[2px]" style={{ background: color }} />
      <span className="text-xs font-bold tracking-widest uppercase" style={{ color }}>{text}</span>
    </div>
  )
}

function FaqItem({
  faq,
  index,
  open,
  onToggle,
  color,
}: {
  faq: { question: string; answer: string }
  index: number
  open: boolean
  onToggle: (i: number) => void
  color: string
}) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-[#0a1628] font-semibold text-sm md:text-base pr-4">{faq.question}</span>
        {open
          ? <ChevronUp size={18} style={{ color }} className="flex-shrink-0" />
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

// ─── SuggestionCards ────────────────────────────────────────────────────────

function SuggestionCards({ current }: { current: ServiceData }) {
  const allServices = Object.values(services)
  const sameCategory = allServices.filter(s => s.category === current.category && s.slug !== current.slug)
  const others = allServices.filter(s => s.category !== current.category)
  const take = Math.min(sameCategory.length, 2)
  const suggestions = [...sameCategory.slice(0, take), ...others.slice(0, 3 - take)].slice(0, 3)

  return (
    <div className="bg-[#f8fafc] py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <SectionLabel text="Explore More" color="#f5a623" />
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0a1628] mb-10">You Might Also Need</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {suggestions.map(s => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-[#f5a623]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
          >
            <div className="h-44 overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <span
                className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-3"
                style={{ background: s.accentColor }}
              >
                {s.tag}
              </span>
              <h3 className="font-bold text-[#0a1628] group-hover:text-[#f5a623] transition-colors mb-2 text-base leading-snug">
                {s.title}
              </h3>
              <p className="text-sm text-slate-500 line-clamp-2 mb-4">{s.description}</p>
              <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: s.accentColor }}>
                Explore Service
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

// ─── Layout Prop Types ──────────────────────────────────────────────────────

type LayoutProps = {
  service: ServiceData
  openModal: () => void
  openFaq: number | null
  setOpenFaq: (i: number | null) => void
}

// ─── Shared Sidebar Pieces ───────────────────────────────────────────────────

function CtaCard({ service, openModal }: { service: ServiceData; openModal: () => void }) {
  return (
    <div className="rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1a2f4e 100%)' }}>
      <div className="w-12 h-1 rounded-full mb-4" style={{ background: service.accentColor }} />
      <h3 className="text-lg font-extrabold mb-2">Ready to get started?</h3>
      <p className="text-white/65 text-sm leading-relaxed mb-5">
        Talk to our team for a free consultation and project estimate.
      </p>
      <button
        onClick={openModal}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all"
        style={{ background: service.accentColor, color: '#fff' }}
      >
        Get Free Consultation
      </button>
      <Link
        href="/live-demo"
        className="w-full flex items-center justify-center gap-2 py-3 mt-3 rounded-xl font-semibold text-sm border border-white/20 text-white/80 hover:bg-white/10 transition-all"
      >
        View Our Products <ArrowRight size={14} />
      </Link>
    </div>
  )
}

function RelatedServices({ service }: { service: ServiceData }) {
  const related = Object.values(services)
    .filter(s => s.category === service.category && s.slug !== service.slug)
    .slice(0, 4)

  if (related.length === 0) return null

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6">
      <p className="text-[#0a1628] font-bold text-base mb-4">Related Services</p>
      <div className="flex flex-col gap-2">
        {related.map(s => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="flex items-center justify-between text-sm text-gray-600 hover:text-[#f5a623] py-1.5 border-b border-gray-100 last:border-0 transition-colors group"
          >
            {s.title}
            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  )
}

// ─── MobileLayout ───────────────────────────────────────────────────────────

function MobileLayout({ service, openModal, openFaq, setOpenFaq }: LayoutProps) {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <div className="relative bg-[#0a1628] min-h-[420px] overflow-hidden flex flex-col justify-end px-6 md:px-12 pb-10 pt-28">
        {/* Left border strip */}
        <div className="w-1.5 h-full absolute left-0 top-0" style={{ background: service.accentColor }} />
        {/* Watermark */}
        <span className="absolute right-4 top-4 text-[10rem] font-black text-white/5 leading-none select-none pointer-events-none">
          APP
        </span>
        {/* Back */}
        <div className="absolute top-24 left-8 md:left-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full transition-colors"
          >
            <ArrowLeft size={15} /> Back to Home
          </Link>
        </div>
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold"
              style={{ background: service.accentColor }}
            >
              {service.tag}
            </span>
            <span className="text-white/50 text-sm">{service.category}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            {service.title}
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl">{service.description}</p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-[#0a1628] border-t border-white/10 px-6 py-5">
        <div className="grid grid-cols-3 gap-4 max-w-2xl">
          {service.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-black" style={{ color: service.accentColor }}>{stat.value}</div>
              <div className="text-white/50 text-xs mt-1 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Left */}
        <div className="lg:col-span-2 flex flex-col gap-14">

          {/* Overview */}
          <div>
            <SectionLabel text="Overview" color={service.accentColor} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <p className="text-gray-600 text-base leading-relaxed">{service.longDescription}</p>
              <img src={service.image} alt={service.title} className="rounded-2xl object-cover w-full h-56 shadow-md" />
            </div>
          </div>

          {/* Process - vertical timeline */}
          <div>
            <SectionLabel text="Our Process" color={service.accentColor} />
            <div className="relative">
              <div className="w-0.5 bg-gray-200 absolute left-5 top-0 bottom-0" />
              <div className="flex flex-col gap-8">
                {service.process.map((p, i) => (
                  <div key={i} className="flex gap-4 relative">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 z-10"
                      style={{ background: service.accentColor }}
                    >
                      {p.step}
                    </div>
                    <div className="pt-1">
                      <h4 className="text-[#0a1628] font-bold text-base mb-1">{p.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <SectionLabel text="Why Choose Us" color={service.accentColor} />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {service.highlights.map((h, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                  <h4 className="font-bold text-[#0a1628] mb-2 text-sm">{h.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div>
            <SectionLabel text="FAQs" color={service.accentColor} />
            <div className="flex flex-col gap-3">
              {service.faqs.map((faq, i) => (
                <FaqItem
                  key={i}
                  faq={faq}
                  index={i}
                  open={openFaq === i}
                  onToggle={(idx) => setOpenFaq(openFaq === idx ? null : idx)}
                  color={service.accentColor}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="flex flex-col gap-6">
          {/* Tech stack */}
          <div className="bg-[#0a1628] rounded-2xl p-6">
            <p className="text-white font-bold text-base mb-4">Tech Stack &amp; Platforms</p>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: `${service.accentColor}22`, color: service.accentColor }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="bg-[#0a1628] rounded-2xl p-6">
            <p className="text-white font-bold text-base mb-4">What&apos;s Included</p>
            <div className="flex flex-col gap-3">
              {service.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: service.accentColor }} />
                  <span className="text-white/80 text-sm leading-snug">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <CtaCard service={service} openModal={openModal} />
          <RelatedServices service={service} />
        </div>
      </div>

      <SuggestionCards current={service} />
    </div>
  )
}

// ─── WebLayout ──────────────────────────────────────────────────────────────

function WebLayout({ service, openModal, openFaq, setOpenFaq }: LayoutProps) {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero - split */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">
        {/* Left */}
        <div className="bg-[#0a1628] flex flex-col justify-between px-6 md:px-12 pt-28 pb-10">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full transition-colors"
            >
              <ArrowLeft size={15} /> Back to Home
            </Link>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold"
                style={{ background: service.accentColor }}
              >
                {service.tag}
              </span>
              <span className="text-white/50 text-sm">{service.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              {service.title}
            </h1>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6 max-w-lg">{service.description}</p>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all"
              style={{ background: service.accentColor }}
            >
              Get a Free Quote <ArrowRight size={15} />
            </button>
          </div>
        </div>
        {/* Right image */}
        <div className="min-h-[360px] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Performance strip */}
      <div className="bg-white border-b border-gray-100 px-6 py-5">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center divide-y sm:divide-y-0 sm:divide-x divide-gray-100 max-w-3xl mx-auto">
          {service.stats.map((stat, i) => {
            const emojis = ['⚡', '📱', '🎯']
            return (
              <div key={i} className="flex-1 flex flex-col items-center text-center py-4 sm:py-0 sm:px-6">
                <span className="text-2xl mb-1">{emojis[i] ?? '✨'}</span>
                <div className="text-2xl md:text-3xl font-black text-[#0a1628]">{stat.value}</div>
                <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Left */}
        <div className="lg:col-span-2 flex flex-col gap-14">

          {/* Overview + callout */}
          <div>
            <SectionLabel text="Overview" color={service.accentColor} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-6">
              <p className="text-gray-600 text-base leading-relaxed">{service.longDescription}</p>
              <img src={service.image} alt={service.title} className="rounded-2xl object-cover w-full h-56 shadow-md" />
            </div>
            {/* Amber callout */}
            <div className="border-l-4 border-[#f5a623] bg-amber-50 px-5 py-4 rounded-r-xl text-amber-900 text-sm leading-relaxed">
              <strong>Key insight:</strong> {service.longDescription.split('.')[0]}.
            </div>
          </div>

          {/* Process - horizontal on desktop */}
          <div>
            <SectionLabel text="Our Process" color={service.accentColor} />
            {/* Desktop horizontal */}
            <div className="hidden sm:flex items-start gap-0 relative">
              {service.process.map((p, i) => (
                <div key={i} className="flex-1 flex flex-col items-center text-center px-2 relative">
                  <div className="relative z-10">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black mx-auto mb-3"
                      style={{ background: service.accentColor }}
                    >
                      {p.step}
                    </div>
                  </div>
                  {i < service.process.length - 1 && (
                    <div className="absolute top-5 left-1/2 w-full border-t-2 border-dashed border-gray-200 z-0" style={{ left: '50%' }} />
                  )}
                  <h4 className="text-[#0a1628] font-bold text-sm mb-1">{p.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
            {/* Mobile stacked */}
            <div className="flex flex-col gap-4 sm:hidden">
              {service.process.map((p, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                    style={{ background: service.accentColor }}
                  >
                    {p.step}
                  </div>
                  <div className="pt-1">
                    <h4 className="text-[#0a1628] font-bold text-sm mb-1">{p.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <SectionLabel text="Key Advantages" color={service.accentColor} />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {service.highlights.map((h, i) => (
                <div
                  key={i}
                  className="bg-white border-t-4 rounded-2xl p-5 shadow-sm"
                  style={{ borderTopColor: service.accentColor }}
                >
                  <h4 className="font-bold text-[#0a1628] mb-2 text-sm">{h.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div>
            <SectionLabel text="FAQs" color={service.accentColor} />
            <div className="flex flex-col gap-3">
              {service.faqs.map((faq, i) => (
                <FaqItem
                  key={i}
                  faq={faq}
                  index={i}
                  open={openFaq === i}
                  onToggle={(idx) => setOpenFaq(openFaq === idx ? null : idx)}
                  color={service.accentColor}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="flex flex-col gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-[#0a1628] font-bold text-base mb-4">What&apos;s Included</p>
            <div className="flex flex-col gap-3">
              {service.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: service.accentColor }} />
                  <span className="text-gray-700 text-sm leading-snug">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <p className="text-[#0a1628] font-bold text-base mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full text-xs font-semibold text-[#0a1628] border border-gray-300 bg-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <CtaCard service={service} openModal={openModal} />
          <RelatedServices service={service} />
        </div>
      </div>

      <SuggestionCards current={service} />
    </div>
  )
}

// ─── MarketingLayout ─────────────────────────────────────────────────────────

function MarketingLayout({ service, openModal, openFaq, setOpenFaq }: LayoutProps) {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero - full bleed image */}
      <div className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/75 via-transparent to-transparent" />
        <div className="absolute top-24 left-6 md:left-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full transition-colors"
          >
            <ArrowLeft size={15} /> Back to Home
          </Link>
        </div>
        <div className="absolute bottom-10 left-6 md:left-12 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold"
              style={{ background: service.accentColor }}
            >
              {service.tag}
            </span>
            <span className="text-white/50 text-sm">{service.category}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-3">
            {service.title}
          </h1>
          <p className="text-white/75 text-base md:text-lg leading-relaxed">{service.description}</p>
        </div>
      </div>

      {/* KPI stats */}
      <div className="bg-white py-10 px-4 sm:px-6 border-b border-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {service.stats.map((stat, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition">
              <div className="text-2xl md:text-3xl font-black" style={{ color: service.accentColor }}>{stat.value}</div>
              <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Left */}
        <div className="lg:col-span-2 flex flex-col gap-14">

          {/* Overview */}
          <div>
            <SectionLabel text="Overview" color={service.accentColor} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <p className="text-gray-600 text-base leading-relaxed">{service.longDescription}</p>
              <img src={service.image} alt={service.title} className="rounded-2xl object-cover w-full h-56 shadow-md" />
            </div>
          </div>

          {/* Funnel steps */}
          <div>
            <SectionLabel text="Our Approach" color={service.accentColor} />
            <div className="flex flex-col gap-4">
              {service.process.map((p, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-5 flex gap-4"
                  style={{ marginLeft: `${i * 16}px` }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                    style={{ background: service.accentColor }}
                  >
                    {p.step}
                  </div>
                  <div className="pt-1">
                    <h4 className="text-[#0a1628] font-bold text-sm mb-1">{p.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <SectionLabel text="What You Get" color={service.accentColor} />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {service.highlights.map((h, i) => (
                <div
                  key={i}
                  className="bg-white border-l-4 rounded-xl p-5 shadow-sm"
                  style={{ borderLeftColor: service.accentColor }}
                >
                  <h4 className="font-bold text-[#0a1628] mb-2 text-sm">{h.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div>
            <SectionLabel text="FAQs" color={service.accentColor} />
            <div className="flex flex-col gap-3">
              {service.faqs.map((faq, i) => (
                <FaqItem
                  key={i}
                  faq={faq}
                  index={i}
                  open={openFaq === i}
                  onToggle={(idx) => setOpenFaq(openFaq === idx ? null : idx)}
                  color={service.accentColor}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#0a1628] rounded-2xl p-6">
            <p className="text-white font-bold text-base mb-4">What&apos;s Included</p>
            <div className="flex flex-col gap-3">
              {service.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: service.accentColor }} />
                  <span className="text-white/80 text-sm leading-snug">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <p className="text-[#0a1628] font-bold text-base mb-4">Tools &amp; Platforms</p>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full text-xs font-semibold text-[#0a1628] border border-gray-300 bg-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <CtaCard service={service} openModal={openModal} />
          <RelatedServices service={service} />
        </div>
      </div>

      <SuggestionCards current={service} />
    </div>
  )
}

// ─── AILayout ───────────────────────────────────────────────────────────────

function AILayout({ service, openModal, openFaq, setOpenFaq }: LayoutProps) {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero - split: light left + image right */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[480px]">
        {/* Left — light gradient */}
        <div
          className="relative flex flex-col justify-between px-6 md:px-12 pt-28 pb-10 overflow-hidden"
          style={{ background: `linear-gradient(135deg, #fef9f0 0%, #fff8ee 50%, #ffffff 100%)` }}
        >
          {/* Accent decorative circles */}
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full opacity-20 pointer-events-none" style={{ background: service.accentColor }} />
          <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full opacity-10 pointer-events-none" style={{ background: service.accentColor }} />

          <div className="relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#0a1628]/70 hover:text-[#f5a623] text-sm font-medium bg-white/80 border border-gray-200 px-4 py-2 rounded-full transition-colors shadow-sm backdrop-blur-sm"
            >
              <ArrowLeft size={15} /> Back to Home
            </Link>
          </div>

          <div className="relative z-10 mt-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold" style={{ background: service.accentColor }}>
                {service.tag}
              </span>
              <span className="text-slate-500 text-sm">{service.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a1628] leading-tight mb-4">
              {service.title}
            </h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 max-w-lg">{service.description}</p>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all shadow-md"
              style={{ background: service.accentColor }}
            >
              Get AI Consultation <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Right — service image */}
        <div className="relative min-h-[300px] md:min-h-0 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle left fade to blend with left panel */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent" />
          {/* Stats overlay on image */}
          <div className="absolute bottom-6 left-6 right-6 flex gap-4">
            {service.stats.slice(0, 2).map((stat, i) => (
              <div key={i} className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex-1 text-center">
                <div className="text-xl font-black" style={{ color: service.accentColor }}>{stat.value}</div>
                <div className="text-[10px] text-gray-500 mt-0.5 leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Capabilities section - full width */}
      <div className="bg-[#f8fafc] py-10 px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text="Capabilities" color={service.accentColor} />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0a1628] mb-6">AI Capabilities We Deliver</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {service.highlights.map((h, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
                style={{ borderColor: undefined }}
              >
                <div
                  className="h-1 w-10 rounded-full mb-4"
                  style={{ background: service.accentColor }}
                />
                <h4 className="font-bold text-[#0a1628] mb-2 text-sm">{h.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Left */}
        <div className="lg:col-span-2 flex flex-col gap-14">

          {/* Overview */}
          <div>
            <SectionLabel text="Overview" color={service.accentColor} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <p className="text-gray-600 text-base leading-relaxed">{service.longDescription}</p>
              <img src={service.image} alt={service.title} className="rounded-2xl object-cover w-full h-56 shadow-md" />
            </div>
          </div>

          {/* Process 2x2 grid */}
          <div>
            <SectionLabel text="How It Works" color={service.accentColor} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.process.map((p, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6">
                  <div
                    className="text-3xl font-extrabold mb-3"
                    style={{ color: `${service.accentColor}50` }}
                  >
                    {p.step}
                  </div>
                  <h4 className="font-bold text-[#0a1628] mb-2 text-sm">{p.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div>
            <SectionLabel text="FAQs" color={service.accentColor} />
            <div className="flex flex-col gap-3">
              {service.faqs.map((faq, i) => (
                <FaqItem
                  key={i}
                  faq={faq}
                  index={i}
                  open={openFaq === i}
                  onToggle={(idx) => setOpenFaq(openFaq === idx ? null : idx)}
                  color={service.accentColor}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right sidebar - light theme */}
        <div className="flex flex-col gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-[#0a1628] font-bold text-base mb-4">What&apos;s Included</p>
            <div className="flex flex-col gap-3">
              {service.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: service.accentColor }} />
                  <span className="text-gray-700 text-sm leading-snug">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <p className="text-[#0a1628] font-bold text-base mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full text-xs font-semibold text-[#0a1628] border border-gray-200 bg-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <CtaCard service={service} openModal={openModal} />
          <RelatedServices service={service} />
        </div>
      </div>

      <SuggestionCards current={service} />
    </div>
  )
}

// ─── Page Export ─────────────────────────────────────────────────────────────

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { openModal } = useModal()

  const service = services[slug]

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white pt-20">
        <p className="text-2xl font-bold text-[#0a1628] mb-4">Service not found</p>
        <Link href="/" className="text-[#f5a623] font-semibold hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    )
  }

  if (service.category === 'Mobile App Development') {
    return (
      <MobileLayout
        service={service}
        openModal={openModal}
        openFaq={openFaq}
        setOpenFaq={setOpenFaq}
      />
    )
  }

  if (service.category === 'Web Development') {
    return (
      <WebLayout
        service={service}
        openModal={openModal}
        openFaq={openFaq}
        setOpenFaq={setOpenFaq}
      />
    )
  }

  if (service.category === 'Digital Marketing') {
    return (
      <MarketingLayout
        service={service}
        openModal={openModal}
        openFaq={openFaq}
        setOpenFaq={setOpenFaq}
      />
    )
  }

  return (
    <AILayout
      service={service}
      openModal={openModal}
      openFaq={openFaq}
      setOpenFaq={setOpenFaq}
    />
  )
}
