'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import {
  LayoutGrid, Zap, ShoppingBag, Utensils, HeartPulse,
  Car, Building2, Briefcase, Leaf, Flame, ArrowRight, Layers,
  GraduationCap, Plane, Tv2, Users2, Wrench, Newspaper,
} from 'lucide-react';

const categories = [
  { id: 'all',        name: 'All Solutions',   icon: LayoutGrid },
  { id: 'latest',     name: 'Latest Suites',   icon: Zap },
  { id: 'ecommerce',  name: 'E-Commerce',      icon: ShoppingBag },
  { id: 'food',       name: 'Food & Grocery',  icon: Utensils },
  { id: 'health',     name: 'Health',          icon: HeartPulse },
  { id: 'education',  name: 'Education',       icon: GraduationCap },
  { id: 'travel',     name: 'Travel',          icon: Plane },
  { id: 'realestate', name: 'Real Estate',     icon: Building2 },
  { id: 'services',   name: 'Services',        icon: Briefcase },
  { id: 'lifestyle',  name: 'Lifestyle',       icon: Leaf },
  { id: 'automotive', name: 'Automotive',      icon: Car },
  { id: 'trending',   name: 'Trending',        icon: Flame },
];

type Product = {
  id: string
  category: string
  title: string
  description: string
  image: string
  badge: { text: string; type: string; icon: React.ComponentType<{ size?: number; strokeWidth?: number }> } | null
  platform: string
  features: string[]
  tech: string[]
}

const products: Product[] = [
  // ── AI & Image Tools ───────────────────────────────────────────────────────
  {
    id: 'ai-image-generation',
    category: 'ai',
    title: 'AI Image Generation Suite',
    description: 'Generate high-quality, on-brand images from text prompts with custom LoRA model fine-tuning.',
    image: 'https://www.biz4group.com/blog/images/ai-text-to-image-and-video-generator-app-development/ai-text-to-image-and-video-generator-app-development-banner.webp',
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + API',
    features: ['Text-to-Image', 'Custom LoRA', 'Bulk Generation'],
    tech: ['Python', 'Stable Diffusion', 'Next.js'],
  },
  {
    id: 'ai-image-enhancer',
    category: 'ai',
    title: 'AI Image Enhancer & Editor',
    description: 'Upscale low-res images, bulk remove backgrounds, and apply automated brand style transfers.',
    image: 'https://digitalsynopsis.com/wp-content/uploads/2025/06/top-free-ai-image-enhancers.jpg',
    badge: null,
    platform: 'Web + API',
    features: ['4x Upscaling', 'BG Removal', 'Style Transfer'],
    tech: ['PyTorch', 'FastAPI', 'React'],
  },
  {
    id: 'ai-chatbot',
    category: 'ai',
    title: 'AI Chatbot & Lead Generator',
    description: 'Smart WhatsApp & Web chatbot trained on your data to answer queries, capture leads, and sync with CRM.',
    image: 'https://res.cloudinary.com/smartsupp/image/upload/w_1200,h_680,c_fill,q_auto,f_auto/upload/Utilizing_chatbot_apps_tmamhv.png',
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web + WhatsApp',
    features: ['Lead Capture', 'RAG Knowledge Base', 'Human Handoff'],
    tech: ['OpenAI', 'LangChain', 'Node.js'],
  },

  // ── Portals & Services ─────────────────────────────────────────────────────
  {
    id: 'job-seeker',
    category: 'services',
    title: 'AI Job Seeker & Recruitment',
    description: 'Smart job portal with semantic matching, AI resume builder, and an advanced employer ATS.',
    image: 'https://www.inspyrsolutions.com/wp-content/uploads/2024/10/Impact-of-Artificial-Intelligence-on-Job-Searching.jpg',
    badge: null,
    platform: 'Web + App',
    features: ['AI Resume Builder', 'Semantic Matching', 'ATS Dashboard'],
    tech: ['Next.js', 'Python', 'Elasticsearch'],
  },
  {
    id: 'astrology-platform',
    category: 'services',
    title: 'Astrology & Consultation App',
    description: 'Live astrologer consultations, daily horoscopes, kundli generation, and in-app wallet calling.',
    image: 'https://assets.unileversolutions.com/v1/143804005.png',
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web + App',
    features: ['Live Calling/Chat', 'Kundli Engine', 'Wallet System'],
    tech: ['Flutter', 'Node.js', 'WebRTC'],
  },
  {
    id: 'booking-engine',
    category: 'services',
    title: 'Universal Booking & Appointments',
    description: 'Versatile booking engine for salons, consultants, and clinics with calendar sync and POS billing.',
    image: 'https://market-resized.envatousercontent.com/codecanyon.net/files/402523736/Inline%20Preview%20Image.png?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=6506a70cac1db21ac55c8be80a8363833c9306b5cd5f50966b3a8d0cf2579257',
    badge: null,
    platform: 'Web + App',
    features: ['Slot Management', 'Calendar Sync', 'POS Billing'],
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },

  // ── Delivery & E-Commerce ──────────────────────────────────────────────────
  {
    id: 'food-delivery',
    category: 'food',
    title: 'Food Delivery Platform',
    description: 'End-to-end food delivery with AI routing, restaurant portal, live tracking, and multi-payment support.',
    image: 'https://www.addwebsolution.com/wp-content/uploads/2024/03/Online-Food-Delivery-App-Clone.jpg',
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + App',
    features: ['Live Tracking', 'AI Routing', 'Restaurant Panel'],
    tech: ['Flutter', 'Node.js', 'Google Maps'],
  },
  {
    id: 'grocery-single-vendor',
    category: 'food',
    title: 'Single-Vendor Grocery Store',
    description: 'Dedicated supermarket app with inventory management, slot booking, and home delivery tracking.',
    image: 'https://d33wubrfki0l68.cloudfront.net/0eb0acb1ed9cc9e68e958079beeb553b93650366/99470/assets/images/gd/img-wireframe.png',
    badge: null,
    platform: 'Web + App',
    features: ['Inventory Sync', 'Delivery Slots', 'Loyalty Points'],
    tech: ['React Native', 'Firebase', 'Node.js'],
  },
  {
    id: 'grocery-multi-vendor',
    category: 'food',
    title: 'Quick-Commerce Grocery (Blinkit Clone)',
    description: 'Hyper-local multi-vendor grocery engine with dark store mapping, 10-min delivery ops, and live rider tracking.',
    image: 'https://www.siddhiinfosoft.com/wp-content/uploads/2021/06/hero_img.png',
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web + App',
    features: ['Dark Store Ops', '10-Min Delivery', 'Multi-Vendor'],
    tech: ['Next.js', 'Flutter', 'MongoDB'],
  },
  {
    id: 'ecommerce-suite',
    category: 'ecommerce',
    title: 'E-Commerce Web & App',
    description: 'Full-stack storefront with AI product recommendations, abandoned cart recovery, and integrated shipping.',
    image: 'https://s3-alpha.figma.com/hub/file/5577051103/3953a592-3edf-4226-8b39-e25a27a731a9-cover.png',
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + App',
    features: ['AI Recommendations', 'Cart Recovery', 'Shipping API'],
    tech: ['React', 'Node.js', 'Redis'],
  },

  // ── PropTech & Finance ─────────────────────────────────────────────────────
  {
    id: 'real-estate-suite',
    category: 'realestate',
    title: 'AI Real Estate Portal',
    description: 'Buy, sell, and rent properties. Manage leads, track deals, and generate AI pitch PPTs automatically for clients.',
    image: 'https://99realty.in/wp-content/uploads/2024/08/AI-in-Real-Estate.jpeg',
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web + App',
    features: ['Property Listings', 'AI PPT Generator', 'Lead CRM'],
    tech: ['Next.js', 'Python', 'PostgreSQL'],
  },
  {
    id: 'mortgage-management',
    category: 'finance',
    title: 'Smarter Mortgage Management',
    description: 'Streamline loan origination, EMI calculations, credit checks, and document verification workflows.',
    image: 'https://newgensoft.com/au/wp-content/uploads/sites/6/2024/09/Loan-Management-System.jpg',
    badge: null,
    platform: 'Web Dashboard',
    features: ['EMI Calculator', 'Doc Verification', 'Loan Pipeline'],
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 'banking-software',
    category: 'finance',
    title: 'Core Banking & Fintech Platform',
    description: 'Digital banking suite with AI fraud detection, real-time transaction monitoring, and multi-rail payments.',
    image: 'https://experionglobal.com/wp-content/uploads/2024/10/Key-Features-of-Banking-Software-Development.jpg',
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + App',
    features: ['Fraud Detection', 'UPI/SWIFT', 'Compliance Logs'],
    tech: ['Java Spring', 'React', 'Kafka'],
  },

  // ── Enterprise & Operations ────────────────────────────────────────────────
  {
    id: 'hrms-software',
    category: 'business',
    title: 'HRMS & Payroll Software',
    description: 'Automate attendance, leave approvals, automated payroll processing, and employee lifecycle management.',
    image: 'https://www.bdtask.com/sp/hrm-software/img/HRMS-Software-Best-HR-and-Payroll-Management-System.webp',
    badge: null,
    platform: 'Web + App',
    features: ['Payroll Automation', 'Attendance Tracker', 'Leave Approvals'],
    tech: ['Vue.js', 'Laravel', 'MySQL'],
  },
  {
    id: 'task-management',
    category: 'business',
    title: 'Task & Project Management',
    description: 'Visual Kanban boards, time tracking, team collaboration, and automated progress reporting.',
    image: 'https://a.storyblok.com/f/289344/2080x1358/7a6fd8b5b3/meistertask-project-management-reports-analysis.png/m/',
    badge: null,
    platform: 'Web + App',
    features: ['Kanban Boards', 'Time Tracking', 'Team Chat'],
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'milestone-management',
    category: 'business',
    title: 'Milestone & Delivery Tracker',
    description: 'Client-facing dashboard to track project phases, approve deliverables, and release milestone payments.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600',
    badge: null,
    platform: 'Web Dashboard',
    features: ['Client Portal', 'Payment Escrow', 'Gantt Charts'],
    tech: ['Next.js', 'Express', 'MongoDB'],
  },

  // ── Healthcare & Travel ────────────────────────────────────────────────────
  {
    id: 'healthcare-platform',
    category: 'health',
    title: 'Healthcare & Telemedicine',
    description: 'Video consultations, digital EMR, e-prescriptions, and smart appointment triage for clinics and hospitals.',
    image: 'https://mobisoftinfotech.com/resources/wp-content/uploads/2020/04/telehealth-services-1.png',
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + App',
    features: ['HD Video Consult', 'Digital EMR', 'E-Prescriptions'],
    tech: ['React Native', 'WebRTC', 'AWS HIPAA'],
  },
  {
    id: 'travel-booking',
    category: 'travel',
    title: 'Travel & Tour Booking',
    description: 'Complete flight, hotel, and holiday package booking engine with itinerary builder and B2B agent portal.',
    image: 'https://www.ladegrahaksevakendra.com/wp-content/uploads/2019/08/tour-travel.png',
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web + App',
    features: ['Package Engine', 'B2B Agent Portal', 'Itinerary Builder'],
    tech: ['Next.js', 'Node.js', 'Amadeus API'],
  },

  // ── Entertainment & Social ─────────────────────────────────────────────────
  {
    id: 'ott-platform',
    category: 'entertainment',
    title: 'Vertical OTT & Short Drama',
    description: 'Streaming app optimized for long-form content and trending short-drama formats with subscription paywalls.',
    image: 'https://www.chetu.com/img/blogs/media-and-broadcasting/ott-platforms/ott-platforms-banner.webp',
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + App + TV',
    features: ['Short Drama UI', '4K Streaming', 'SVOD & TVOD'],
    tech: ['React Native', 'AWS MediaLive', 'Node.js'],
  },
  {
    id: 'social-voice-rooms',
    category: 'social',
    title: 'Social Voice & Live Rooms App',
    description: 'Real-time voice conversations, virtual gifting, live music sharing, and monetized creator moments.',
    image: 'https://blog.zegocloud.com/wp-content/uploads/2022/08/voice-chat-room.png',
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'iOS + Android',
    features: ['Live Audio Rooms', 'Virtual Gifting', 'Music Sync'],
    tech: ['Flutter', 'Agora (WebRTC)', 'Firebase'],
  },
  // ── EdTech & Learning ────────────────────────────────────────────────────────
  {
    id: 'lms-edtech',
    category: 'education',
    title: 'AI-Powered LMS & EdTech',
    description: 'Complete e-learning infrastructure with virtual classrooms, AI auto-grading, and course monetization.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600', // Clean desk/laptop
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web + App',
    features: ['AI Auto-Grading', 'Virtual Classrooms', 'DRM Protection'],
    tech: ['React', 'Node.js', 'WebRTC'],
  },

  // ── Logistics & Supply Chain ─────────────────────────────────────────────────
  {
    id: 'logistics-fleet',
    category: 'business',
    title: 'Logistics & Fleet OS',
    description: 'Real-time GPS vehicle tracking, AI route optimization, and digital proof-of-delivery management.',
    image: 'https://www.applicat.com/assets/img/integration-image.png', // Warehouse/Boxes
    badge: null,
    platform: 'Web + Driver App',
    features: ['Live GPS Tracking', 'AI Route Optimizer', 'e-POD System'],
    tech: ['Flutter', 'Node.js', 'Google Maps API'],
  },
  {
    id: 'warehouse-erp',
    category: 'business',
    title: 'Smart Warehouse Management',
    description: 'Barcode scanning, automated inventory reconciliation, and multi-hub stock transfer workflows.',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=600', // Clean warehouse racks
    badge: null,
    platform: 'Web + Tablet App',
    features: ['Barcode/RFID Sync', 'Auto-Reorder Alerts', 'Multi-Hub Transfer'],
    tech: ['Next.js', 'Python', 'PostgreSQL'],
  },

  // ── Hospitality & Events ─────────────────────────────────────────────────────
  {
    id: 'restaurant-pos',
    category: 'food',
    title: 'Restaurant POS & KDS',
    description: 'Cloud-based point of sale, Kitchen Display System (KDS), QR table ordering, and inventory tracking.',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=600', // POS Terminal/Screen
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + iPad App',
    features: ['Cloud POS', 'QR Dine-in Menu', 'Kitchen Display'],
    tech: ['React Native', 'Node.js', 'Redis'],
  },
  {
    id: 'event-ticketing',
    category: 'entertainment',
    title: 'Event Ticketing & Management',
    description: 'Create events, manage digital QR ticketing, interactive seat mapping, and real-time entry scanning.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600', // Stage lights/tech
    badge: null,
    platform: 'Web + Scanner App',
    features: ['QR Entry Scanners', 'Dynamic Seat Maps', 'Box Office POS'],
    tech: ['Vue.js', 'Express', 'MongoDB'],
  },

  // ── Legal, Marketing & Niche SaaS ────────────────────────────────────────────
  {
    id: 'legal-tech',
    category: 'services',
    title: 'Legal Contract Management',
    description: 'Draft, review, and e-sign legal documents with AI-assisted clause highlighting and expiry tracking.',
    image: 'https://unitedlex.com/wp-content/uploads/2023/04/contract-management-system.png', // Clean paperwork/desk setup
    badge: null,
    platform: 'Web Dashboard',
    features: ['E-Signatures', 'AI Contract Review', 'Version Control'],
    tech: ['React', 'Python', 'AWS KMS'],
  },
  {
    id: 'influencer-analytics',
    category: 'marketing',
    title: 'Influencer Campaign Tracker',
    description: 'Track influencer ROI, monitor real-time engagement metrics, and automate creator payouts.',
    image: 'https://media.sproutsocial.com/uploads/2024/03/PPR-March-roundup-influencer-marketing-themed-Final-x2.webp', // Social media icons on screen
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web Dashboard',
    features: ['Live API Metrics', 'ROI Tracking', 'Automated Payouts'],
    tech: ['Next.js', 'Node.js', 'Instagram Graph API'],
  },
  
  // ── Automotive & Mobility ────────────────────────────────────────────────────
  {
    id: 'car-rental',
    category: 'automotive',
    title: 'Digital Car Rental System',
    description: 'Fleet inventory management, customer KYC uploads, digital damage tracking, and payment gateways.',
    image: 'https://sitemile.com/wp-content/uploads/2023/06/car-rental.png', // Car dashboard/speedometer
    badge: null,
    platform: 'Web + App',
    features: ['Digital KYC', 'Damage Mapping', 'Fleet Inventory'],
    tech: ['React Native', 'Node.js', 'MySQL'],
  },

  // ── FoodTech & AgriTech ──────────────────────────────────────────────────────
  {
    id: 'cloud-kitchen-os',
    category: 'food',
    title: 'Cloud Kitchen OS',
    description: 'Manage multiple virtual brands, aggregate Swiggy/Zomato orders, and track ingredient-level inventory.',
    image: 'https://blog.stocktake-online.com/hs-fs/hubfs/how-to-open-cloud-kitchen.jpg?width=1000&height=566&name=how-to-open-cloud-kitchen.jpg', // Professional kitchen setup
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + App',
    features: ['Multi-Brand Support', 'Aggregator Sync', 'Recipe Costing'],
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 'agritech-platform',
    category: 'services',
    title: 'AgriTech B2B Mandi',
    description: 'Connect farmers directly with wholesale buyers. Includes live weather APIs, crop tracking, and logistics coordination.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=600', // Farm tech/tractor landscape
    badge: null,
    platform: 'Web + App',
    features: ['B2B Bidding', 'Live Weather API', 'Yield Analytics'],
    tech: ['Flutter', 'Django', 'PostgreSQL'],
  },
  // ── AI Voice & Generative Tools ──────────────────────────────────────────────
  {
    id: 'ai-voice-agent',
    category: 'ai',
    title: 'AI Voice Agent & Call Automation',
    description: 'Cost-effective STT/TTS voice architecture for inbound/outbound calls, designed to replace expensive plug-and-play APIs.',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=600', // Premium microphone/soundwaves
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + API',
    features: ['Custom TTS/STT', 'Outbound Campaigns', 'Call Transcripts'],
    tech: ['Node.js', 'Python', 'WebRTC'],
  },
  {
    id: 'ai-interior-landscape',
    category: 'ai',
    title: 'AI Interior & Landscape Design',
    description: 'Generate high-end interior layouts and exterior landscape concepts instantly from basic sketches or text prompts.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600', // Clean architectural interior
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web Dashboard',
    features: ['Room Layout Gen', 'Style Transfer', 'HD Export'],
    tech: ['React', 'Stable Diffusion', 'Next.js'],
  },

  // ── Local Delivery & Medical Services ────────────────────────────────────────
  // {
  //   id: 'local-delivery-api',
  //   category: 'logistics',
  //   title: 'Local Delivery Fleet Engine',
  //   description: 'Hyper-local dispatch system optimized for quick-commerce, featuring auto-assignment and unclustered map views.',
  //   image: 'https://images.unsplash.com/photo-1617868725893-9c8eb0106a20?auto=format&fit=crop&q=80&w=600', // Delivery box/map graphic
  //   badge: null,
  //   platform: 'Web + Rider App',
  //   features: ['Auto-Dispatch', 'Live Map Tracking', 'Route Analytics'],
  //   tech: ['React Native', 'Node.js', 'MongoDB'],
  // },
  {
    id: 'medical-equipment-rental',
    category: 'health',
    title: 'Medical Equipment Rental OS',
    description: 'Manage medical equipment leasing, diagnostic tool tracking, and home care logistics outside of traditional hospital workflows.',
    image: 'https://saylussmedicare.com/wp-content/uploads/2024/05/Medical-Equipment-Rental-Services.webp', // Clinical tech/clean room
    badge: null,
    platform: 'Web Dashboard',
    features: ['Inventory Tracking', 'Lease Management', 'Maintenance Alerts'],
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },

  // ── Infrastructure & Billing ─────────────────────────────────────────────────
  {
    id: 'iot-smart-building',
    category: 'realestate',
    title: 'IoT Smart Building Dashboard',
    description: 'Monitor smart locks, HVAC systems, and energy consumption across multiple commercial real estate properties.',
    image: 'https://www.semiconductorforu.com/wp-content/uploads/2020/06/smart-buildings-1.png', // Smart thermostat/digital wall
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + App',
    features: ['Device Sync', 'Energy Analytics', 'Remote Access'],
    tech: ['Vite', 'Node.js', 'MQTT'],
  },
  {
    id: 'subscription-billing',
    category: 'finance',
    title: 'SaaS Billing & Revenue Ops',
    description: 'Manage recurring subscriptions, usage-based billing, invoicing, and automated tax compliance for digital platforms.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600', // Digital graphs/financial data
    badge: null,
    platform: 'Web API',
    features: ['Recurring Billing', 'Usage Metering', 'Tax Automation'],
    tech: ['Next.js', 'Stripe API', 'MongoDB'],
  },

  // ── Developer Tools & CMS ────────────────────────────────────────────────────
  {
    id: 'developer-api-portal',
    category: 'business',
    title: 'API Gateway & Developer Hub',
    description: 'Monetize your proprietary APIs with built-in rate limiting, developer key generation, and real-time endpoint analytics.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600', // Code on dark screen
    badge: null,
    platform: 'Web Dashboard',
    features: ['Key Management', 'Rate Limiting', 'Usage Analytics'],
    tech: ['React', 'Express', 'Redis'],
  },
  {
    id: 'headless-cms',
    category: 'services',
    title: 'Enterprise Headless CMS',
    description: 'An unclustered content management system featuring webhook triggers, strict versioning, and premium dynamic data schemas.',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=600', // Server rack networking
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web + API',
    features: ['Dynamic Schemas', 'Webhook Triggers', 'Version Control'],
    tech: ['Node.js', 'GraphQL', 'MongoDB'],
  },

  // ── Media & Finance ──────────────────────────────────────────────────────────
  {
    id: 'digital-signage',
    category: 'marketing',
    title: 'Digital Signage & DOOH CMS',
    description: 'Push cinematic reels, advertisements, and digital media to remote billboards and in-store displays globally.',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=600', // Blank glowing screen/billboard
    badge: null,
    platform: 'Web Dashboard',
    features: ['Remote Screen Sync', 'Media Scheduling', 'Offline Playback'],
    tech: ['React', 'AWS S3', 'WebSockets'],
  },
  {
    id: 'escrow-payment-api',
    category: 'finance',
    title: 'Escrow & Milestone Gateway',
    description: 'Secure transaction holding engine for freelance platforms and agencies with automated milestone-based fund releases.',
    image: 'https://images.unsplash.com/photo-1638913662584-731da41f5a59?auto=format&fit=crop&q=80&w=600', // Digital security/crypto lock
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web API',
    features: ['Milestone Releases', 'Dispute Resolution', 'Ledger Logs'],
    tech: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
  // ── AI Video & Media ─────────────────────────────────────────────────────────
  {
    id: 'ai-video-generation',
    category: 'ai',
    title: 'AI Video & Rendering Engine',
    description: 'Text-to-video generation, auto-captioning, and seamless B-roll rendering for content teams and agencies.',
    image: 'https://images.unsplash.com/photo-1536240478700-b869ad10e2e8?auto=format&fit=crop&q=80&w=600', // Abstract digital render/light streaks
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + API',
    features: ['Text-to-Video', 'Auto-Captioning', 'HD Rendering'],
    tech: ['Python', 'Next.js', 'FFmpeg'],
  },

  // ── Cybersecurity & DevOps ───────────────────────────────────────────────────
  {
    id: 'pentest-cybersecurity',
    category: 'services',
    title: 'Vulnerability & Pentest Tracker',
    description: 'Automated vulnerability scanning, compliance audits, and real-time threat intelligence dashboard for SecOps.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600', // Code matrix / dark mode screen
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web Dashboard',
    features: ['Automated Scans', 'Compliance Logs', 'Threat Intel'],
    tech: ['React', 'Node.js', 'Elasticsearch'],
  },
  {
    id: 'uptime-status-page',
    category: 'services',
    title: 'API Uptime & Status Pages',
    description: 'Monitor global API endpoints, manage incident communication, and host customizable status pages with 99.99% SLA.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600', // Clean data dashboard
    badge: null,
    platform: 'Web + API',
    features: ['Endpoint Monitoring', 'Incident Logs', 'Custom Status Pages'],
    tech: ['Next.js', 'Redis', 'PostgreSQL'],
  },

  // ── Advanced Logistics & IoT ─────────────────────────────────────────────────
  {
    id: 'drone-fleet-os',
    category: 'logistics',
    title: 'Autonomous Drone Fleet OS',
    description: 'Manage drone delivery logistics, flight path optimization, and real-time telemetry data over a secure network.',
    image: 'https://images.unsplash.com/photo-1527443154391-42722bc13d5a?auto=format&fit=crop&q=80&w=600', // Drone lens/tech overlay
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web Dashboard',
    features: ['Live Telemetry', 'Flight Path AI', 'Battery Analytics'],
    tech: ['React', 'WebSockets', 'MongoDB'],
  },
  {
    id: 'ev-charging-os',
    category: 'automotive',
    title: 'EV Charging Station Network',
    description: 'Smart grid management, real-time charger availability, dynamic pricing, and automated billing for EV infrastructure.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938cb?auto=format&fit=crop&q=80&w=600', // EV plug / abstract energy
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web + App',
    features: ['Grid Monitoring', 'Dynamic Pricing', 'Station Locator'],
    tech: ['Flutter', 'Node.js', 'MQTT'],
  },

  // ── FinOps & Data Engineering ────────────────────────────────────────────────
  {
    id: 'cloud-cost-management',
    category: 'finance',
    title: 'Cloud FinOps & Cost Tracker',
    description: 'Consolidate AWS, GCP, and Azure billing. Detect idle resources, forecast expenses, and optimize cloud infrastructure costs.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600', // Server racks / infrastructure
    badge: null,
    platform: 'Web Dashboard',
    features: ['Multi-Cloud Billing', 'Anomaly Detection', 'Cost Forecasting'],
    tech: ['Next.js', 'Express', 'PostgreSQL'],
  },
  {
    id: 'data-etl-pipeline',
    category: 'business',
    title: 'No-Code ETL & Data Pipeline',
    description: 'Extract, transform, and load massive datasets visually. Connect APIs, databases, and third-party SaaS without writing scripts.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600', // Abstract data connections
    badge: null,
    platform: 'Web Dashboard',
    features: ['Visual Flow Builder', 'API Connectors', 'Data Cleansing'],
    tech: ['React Flow', 'Python', 'Redis'],
  },
  {
    id: 'supply-chain-traceability',
    category: 'business',
    title: 'Supply Chain Ledger',
    description: 'Immutable tracking of high-value goods from manufacturing to delivery using secure, cryptographic data logging.',
    image: 'https://images.unsplash.com/photo-1494412580934-3815ae00c6cb?auto=format&fit=crop&q=80&w=600', // Cargo containers / industrial lines
    badge: null,
    platform: 'Web + Scanner App',
    features: ['Immutable Ledger', 'QR Authentication', 'Transit Logs'],
    tech: ['Node.js', 'React Native', 'MongoDB'],
  },

  // ── Virtual Events & Web3 ────────────────────────────────────────────────────
  {
    id: 'virtual-3d-expo',
    category: 'entertainment',
    title: 'Virtual 3D Expo & Events',
    description: 'Host interactive B2B exhibitions with 3D booths, spatial audio networking, and real-time attendee analytics.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600', // 3D render / abstract geometry
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + Desktop',
    features: ['Spatial Audio', '3D Booths', 'Attendee Analytics'],
    tech: ['Three.js', 'WebRTC', 'Node.js'],
  },
  {
    id: 'remote-server-management',
    category: 'business',
    title: 'Remote RDP & Terminal OS',
    description: 'Secure, browser-based remote desktop access and SSH terminal management for distributed IT and engineering teams.',
    image: 'https://images.unsplash.com/photo-1614064641913-6b70a32eff53?auto=format&fit=crop&q=80&w=600', // Dark server environment
    badge: null,
    platform: 'Web Dashboard',
    features: ['Browser SSH', 'Access Control', 'Session Recording'],
    tech: ['React', 'WebSockets', 'Express'],
  }
];

const PAGE_SIZE = 9;

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section className="bg-[#f8fafc] py-12 px-4 md:px-8 font-sans min-h-screen">
      <div className="max-w-[1400px] mx-auto">

        {/* ── Filters ── */}
        <div className="mb-10">
          <div className="flex gap-3 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap border shrink-0
                    ${isActive
                      ? 'bg-[#f5a623] text-white border-[#f5a623] shadow-md shadow-orange-500/20'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-[#f5a623] hover:text-[#f5a623]'
                    }`}
                >
                  <Icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                  {category.name}
                </button>
              );
            })}
          </div>
          <p className="text-slate-500 text-sm mt-2 font-medium">
            Showing{' '}
            <span className="text-[#f5a623] font-bold">{visible.length}</span>
            {' '}of{' '}
            <span className="text-[#f5a623] font-bold">{filtered.length}</span>
            {' '}ready-made solutions
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {visible.map((product) => (
            <Link
              key={product.id}
              href={`/live-demo/${product.id}`}
              className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm text-[11px] font-bold px-2.5 py-1.5 rounded-full shadow-sm"
                      style={{ color: product.badge.type === 'latest' ? '#f5a623' : '#ef4444' }}>
                      <product.badge.icon size={11} strokeWidth={2.5} />
                      {product.badge.text}
                    </div>
                  </div>
                )}
                {/* Platform tag */}
                <div className="absolute top-3 right-3">
                  <span className="bg-[#0a1628]/80 text-white text-[10px] font-semibold px-2 py-1 rounded-md backdrop-blur-sm">
                    {product.platform}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-[#0a1628] mb-1.5 leading-snug group-hover:text-[#f5a623] transition-colors">
                  {product.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.features.map((f, i) => (
                    <span key={i} className="text-[11px] font-medium bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3.5 border-t border-slate-100">
                  <span className="flex items-center gap-1.5 text-sm font-bold text-[#0a1628] group-hover:text-[#f5a623] transition-colors">
                    Live Demo
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="flex gap-1">
                    {product.tech.slice(0, 2).map((t, i) => (
                      <span key={i} className="text-[10px] font-semibold bg-[#f5a623]/10 text-[#f5a623] px-2 py-0.5 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Load More ── */}
        {hasMore && (
          <div className="flex justify-center pb-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
              className="flex items-center gap-3 border-2 border-[#f5a623] text-[#f5a623] hover:bg-[#f5a623] hover:text-white px-8 py-3 rounded-full font-bold transition-all duration-300 group"
            >
              <Layers size={18} className="group-hover:animate-bounce" />
              Load More Solutions
              <span className="bg-[#f5a623] text-white group-hover:bg-white group-hover:text-[#f5a623] text-xs px-2.5 py-1 rounded-full transition-colors">
                +{Math.min(PAGE_SIZE, filtered.length - visibleCount)} more
              </span>
            </button>
          </div>
        )}

        {!hasMore && filtered.length > PAGE_SIZE && (
          <div className="flex justify-center pb-12">
            <p className="text-slate-400 text-sm font-medium">✓ All {filtered.length} solutions loaded</p>
          </div>
        )}

      </div>
    </section>
  );
}
