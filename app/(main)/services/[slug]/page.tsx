'use client'
import { use, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

// ─── All Services Data ─────────────────────────────────────────────────────

const services: Record<string, ServiceData> = {

  // ── Mobile App Development ────────────────────────────────────────────────
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
  },

  'ios': {
    slug: 'ios',
    category: 'Mobile App Development',
    tag: 'iOS',
    accentColor: '#007aff',
    title: 'iOS App Development',
    description: 'Premium iPhone and iPad applications built with Swift, designed to Apple\'s HIG standards.',
    longDescription: 'We create polished, performance-optimized iOS applications using Swift and SwiftUI. Our apps follow Apple\'s Human Interface Guidelines to deliver the premium experience iPhone users expect. From App Store launch to ongoing updates, we manage the complete iOS product lifecycle.',
    features: ['Swift & SwiftUI Development', 'Apple HIG Compliance', 'iPhone & iPad Support', 'App Store Publishing', 'Apple Pay & Sign In', 'Core Data & CloudKit'],
    process: [
      { step: '01', title: 'Discovery', desc: 'Define user personas, feature scope, and Apple platform strategy.' },
      { step: '02', title: 'Design', desc: 'Pixel-perfect UI designs following Apple\'s HIG and latest iOS design trends.' },
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
  },

  'flutter': {
    slug: 'flutter',
    category: 'Mobile App Development',
    tag: 'FLUTTER',
    accentColor: '#54c5f8',
    title: 'Flutter App Development',
    description: 'Single codebase, beautiful apps on Android, iOS, Web, and Desktop using Google\'s Flutter framework.',
    longDescription: 'Flutter allows us to write one codebase and ship pixel-perfect apps on Android, iOS, Web, and Desktop. With Flutter\'s custom rendering engine, we achieve native-like performance with stunning animations at a fraction of the cost of building separate native apps.',
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
  },

  'react-native': {
    slug: 'react-native',
    category: 'Mobile App Development',
    tag: 'REACT NATIVE',
    accentColor: '#61dafb',
    title: 'React Native App Development',
    description: 'Cross-platform mobile apps using React Native with near-native performance and JavaScript reusability.',
    longDescription: 'React Native lets your web team\'s JavaScript skills transfer directly to mobile development. We build cross-platform apps that share up to 90% of code between iOS and Android while delivering near-native performance using React Native\'s JavaScript bridge and JSI architecture.',
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
  },

  'cross-platform': {
    slug: 'cross-platform',
    category: 'Mobile App Development',
    tag: 'CROSS PLATFORM',
    accentColor: '#a855f7',
    title: 'Cross Platform App Development',
    description: 'One app, every platform — mobile, web, and desktop — faster delivery at reduced cost.',
    longDescription: 'Why build three times when you can build once? Our cross-platform development approach uses Flutter or React Native to deliver a consistent, high-quality experience across iOS, Android, Web, and Desktop while reducing development time by up to 60% and maintenance costs significantly.',
    features: ['Reduced Development Cost', 'Consistent Brand Experience', 'Single Codebase Maintenance', 'Faster Time-to-Market', 'Progressive Web App Option', 'Desktop Support (Windows/Mac)'],
    process: [
      { step: '01', title: 'Platform Analysis', desc: 'Analyse your target platforms and choose the optimal cross-platform framework.' },
      { step: '02', title: 'Unified Design', desc: 'Create a unified design language that adapts to each platform\'s conventions.' },
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
  },

  // ── Web Development ───────────────────────────────────────────────────────
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
  },

  'ppc': {
    slug: 'ppc',
    category: 'Digital Marketing',
    tag: 'PPC ADS',
    accentColor: '#ef4444',
    title: 'PPC Advertising',
    description: 'Google Ads, Meta Ads, and LinkedIn campaigns optimized for maximum ROI and qualified lead generation.',
    longDescription: 'Get in front of your exact target audience the moment they\'re searching for what you offer. Our PPC experts manage Google Search, Display, YouTube, and Meta ad campaigns with rigorous A/B testing, conversion tracking, and bid optimization — delivering the lowest cost-per-lead in your industry.',
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
      { step: '02', title: 'Content Strategy', desc: 'Build a topical authority map and 3-month content calendar.' },
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
  },

  // ── AI Development ────────────────────────────────────────────────────────
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
  },
}

// ─── Types ─────────────────────────────────────────────────────────────────

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
}

// ─── Page Component ─────────────────────────────────────────────────────────

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

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ── */}
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/75 via-transparent to-transparent" />

        {/* Back */}
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
            {service.title}
          </h1>
          <p className="text-white/75 text-base md:text-lg leading-relaxed">{service.description}</p>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="lg:col-span-2 flex flex-col gap-14">

            {/* Overview */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px]" style={{ background: service.accentColor }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: service.accentColor }}>Overview</span>
              </div>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">{service.longDescription}</p>
            </div>

            {/* Our Process */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[2px]" style={{ background: service.accentColor }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: service.accentColor }}>Our Process</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {service.process.map((p, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-sm transition-all"
                  >
                    <span
                      className="text-3xl font-extrabold block mb-3 leading-none"
                      style={{ color: `${service.accentColor}40` }}
                    >
                      {p.step}
                    </span>
                    <h4 className="text-[#0a1628] font-bold text-base mb-2">{p.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px]" style={{ background: service.accentColor }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: service.accentColor }}>FAQs</span>
              </div>
              <div className="flex flex-col gap-3">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-[#0a1628] font-semibold text-sm md:text-base pr-4">{faq.question}</span>
                      {openFaq === i
                        ? <ChevronUp size={18} className="text-gray-400 flex-shrink-0" />
                        : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
                      }
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT Sidebar */}
          <div className="flex flex-col gap-6">

            {/* Key Features */}
            <div className="bg-[#0a1628] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${service.accentColor}22` }}>
                  <div className="w-3 h-3 rounded-full" style={{ background: service.accentColor }} />
                </div>
                <span className="text-white font-bold text-base">What's Included</span>
              </div>
              <div className="flex flex-col gap-3">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: service.accentColor }} />
                    <span className="text-white/80 text-sm leading-snug">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
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

            {/* CTA */}
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

            {/* Related Services */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <p className="text-[#0a1628] font-bold text-base mb-4">Related Services</p>
              <div className="flex flex-col gap-2">
                {Object.values(services)
                  .filter((s) => s.category === service.category && s.slug !== service.slug)
                  .slice(0, 4)
                  .map((s) => (
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

          </div>
        </div>
      </div>

    </div>
  )
}
