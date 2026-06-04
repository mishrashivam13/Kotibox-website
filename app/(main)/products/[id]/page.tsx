'use client'
import { use, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, CheckCircle2, ChevronDown, ChevronUp,
  ArrowRight, Rocket, Building2, Users, Code2,
  Zap, Clock, Shield, Globe, Star,
  Monitor, MessageSquare, Mic, UtensilsCrossed,
  Wand2, Landmark, Play, Settings, Activity,
  Database, Layers, TrendingUp, Award, BarChart3,
  Package, XCircle
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

// ─── Types ────────────────────────────────────────────────────────────────────

type FeatureDetail = {
  title: string
  icon: typeof Zap
  desc: string
}

type Step = {
  step: string
  title: string
  desc: string
  detail: string
}

type UseCase = {
  icon: 'startup' | 'enterprise' | 'agency'
  title: string
  desc: string
  metric: string
}

type DeploymentInfo = {
  timeline: string
  customisation: string
  support: string
  hosting: string
}

type Product = {
  id: string
  tag: string
  accentColor: string
  title: string
  tagline: string
  description: string
  longDescription: string
  heroImage: string
  productImage: string
  gallery: string[]
  featureDetails: FeatureDetail[]
  steps: Step[]
  techStack: { category: string; items: string[] }[]
  stats: { value: string; label: string; icon: typeof Zap }[]
  useCases: UseCase[]
  deployment: DeploymentInfo
  faqs: { question: string; answer: string }[]
  deliverables: string[]
}

// ─── Products Data ────────────────────────────────────────────────────────────

const products: Product[] = [
  // ── OTT Platform ────────────────────────────────────────────────────────────
  {
    id: 'ott-platform',
    tag: 'VERTICAL OTT',
    accentColor: '#ef4444',
    title: 'AI-Powered Vertical OTT Platform',
    tagline: 'Launch your own streaming platform in 4–6 weeks',
    description: 'Niche OTT solution with 4K video streaming, AI content recommendations, subscription paywall, creator panels, and content DRM.',
    longDescription: 'Stop losing 30% of your revenue to third-party streaming platforms. Our AI-Powered Vertical OTT Platform gives you full ownership of your content, your audience, and your monetisation — in weeks, not months. Built for media houses, edtech companies, fitness creators, faith organisations, and any niche that needs a branded streaming destination. The platform ships with a viewer-facing web and mobile app, a creator dashboard for content upload and analytics, and an admin panel for subscriber management and revenue reporting.',
    heroImage: '/images/products/ai-powered-vertical-ott-platform.jpg.jpeg',
    productImage: '/images/products/Aiott.png',
    gallery: [
      '/images/products/ottmob.png',
      '/images/products/ottlp.png',
      'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=900&q=80',
      'https://images.unsplash.com/photo-1536240478700-b869ad10e2e8?w=900&q=80',
    ],
    featureDetails: [
      { title: 'AI Content Recommendations', icon: Zap, desc: 'Collaborative filtering + content-based AI engine learns each viewer\'s preferences and surfaces the right content at the right time — increasing watch time by an average of 34%.' },
      { title: '4K Adaptive Streaming', icon: Monitor, desc: 'AWS MediaLive-powered transcoding delivers 4K, 1080p, 720p, and 480p streams simultaneously. Adaptive bitrate ensures smooth playback on any connection speed globally.' },
      { title: 'Multi-Model Monetisation', icon: TrendingUp, desc: 'Run SVOD (subscriptions), TVOD (pay-per-view), and AVOD (ad-supported) simultaneously. Bundle plans, trial periods, and promo codes are all configurable from the admin panel.' },
      { title: 'Creator Dashboard', icon: Users, desc: 'Content creators upload, schedule, and analyse their content from a dedicated portal. Real-time analytics show views, watch time, retention graphs, and subscriber conversion per video.' },
      { title: 'Content DRM Protection', icon: Shield, desc: 'Widevine and FairPlay DRM prevents unauthorised downloads and screen recording. Geo-blocking and IP restriction controls are configurable per title.' },
      { title: 'Multi-Device Apps', icon: Layers, desc: 'Web app (React), iOS app, Android app, and Smart TV (Fire TV, Apple TV, Android TV) — all from a single codebase. Offline download mode for mobile subscribers.' },
    ],
    steps: [
      { step: '01', title: 'Brand & Content Setup', desc: 'We configure your branding — logo, colour scheme, typography, and content categories — across all apps.', detail: 'Takes 3–5 days. Requires brand assets and content categories from your team.' },
      { step: '02', title: 'Content Ingestion', desc: 'Upload your existing video library via S3 or direct upload. AI auto-generates thumbnails, tags genres, and creates search metadata.', detail: 'Takes 3–7 days depending on library size. Bulk import supported.' },
      { step: '03', title: 'Payment & Subscription Setup', desc: 'Configure your subscription tiers, pricing, trial periods, and payment gateway. Razorpay, Stripe, and PayPal supported.', detail: 'Takes 2–3 days. Requires payment gateway credentials from your side.' },
      { step: '04', title: 'Launch & Go Live', desc: 'App Store submissions for iOS and Android, web deployment on your domain, and Smart TV app publishing. Post-launch monitoring for 30 days.', detail: 'App store approval takes 3–7 days. Web goes live same day.' },
    ],
    techStack: [
      { category: 'Frontend', items: ['React.js (Web)', 'React Native (iOS/Android)', 'Android TV / Fire TV'] },
      { category: 'Backend', items: ['Node.js', 'Express', 'GraphQL API'] },
      { category: 'AI Engine', items: ['Python', 'TensorFlow', 'Collaborative Filtering', 'Content-Based ML'] },
      { category: 'Video Infrastructure', items: ['AWS MediaLive', 'CloudFront CDN', 'S3 Storage', 'HLS Streaming'] },
      { category: 'Database', items: ['MongoDB', 'Redis (Sessions)', 'Elasticsearch (Search)'] },
      { category: 'Payments & DRM', items: ['Stripe', 'Razorpay', 'Widevine DRM', 'FairPlay DRM'] },
    ],
    stats: [
      { value: '4K', label: 'Streaming Quality', icon: Monitor },
      { value: '4–6 wk', label: 'Launch Timeline', icon: Clock },
      { value: '3×', label: 'Monetisation Models', icon: TrendingUp },
      { value: '34%', label: 'Avg Watch Time Increase', icon: Activity },
    ],
    useCases: [
      { icon: 'startup', title: 'Content Creators & Influencers', desc: 'Own your content library and subscriber base — no more 30% platform cuts or algorithm dependence. Launch your own branded subscription service.', metric: '3× more revenue vs third-party platforms' },
      { icon: 'enterprise', title: 'Media Houses & Publishers', desc: 'Launch niche vertical OTT channels (sports, news, faith, cooking) with branded apps on every major platform and full subscriber data ownership.', metric: 'Sub-6-week launch vs 12+ months custom build' },
      { icon: 'agency', title: 'EdTech & Training Platforms', desc: 'Stream courses with progress tracking, certificates, quizzes, and cohort management. Subscription access controls who sees what content.', metric: '70% lower cost vs building from scratch' },
    ],
    deployment: {
      timeline: '4–6 weeks to full launch including app store submissions',
      customisation: 'Full white-label — your brand, your domain, your app store listings',
      support: '6 months post-launch support included. Annual maintenance plans available',
      hosting: 'AWS-hosted by default. Can be deployed to your own cloud account',
    },
    faqs: [
      { question: 'How long does it take to launch my own OTT platform?', answer: 'Since the core platform is ready-built, we typically launch a fully branded OTT platform within 4–6 weeks. This includes branding customisation, content ingestion, payment setup, and app store submission. Smart TV apps (Apple TV, Fire TV) may take an additional 1–2 weeks for store approval.' },
      { question: 'Can I monetize my content through multiple models simultaneously?', answer: 'Yes. The platform supports SVOD (monthly/annual subscriptions), TVOD (pay-per-view for individual titles), and AVOD (ad-supported free tier) running simultaneously. You can offer a free tier with ads, a basic subscription, and a premium plan — all from the same platform.' },
      { question: 'Does it support 4K streaming?', answer: 'Yes. We use AWS MediaLive for transcoding and CloudFront CDN for delivery. Video is transcoded into 4K, 1080p, 720p, and 480p. The player uses adaptive bitrate streaming — automatically selecting the best quality for each viewer\'s connection speed.' },
      { question: 'Can creators upload their own content?', answer: 'Yes. The platform includes a creator portal where content owners can upload videos, set pricing (free, subscription, or pay-per-view), view analytics, and manage comments. This enables a multi-creator model similar to YouTube but behind a paywall.' },
      { question: 'Is DRM protection included?', answer: 'Yes. Widevine (Android, Chrome) and FairPlay (iOS, Safari) DRM are implemented. This prevents direct download and screen recording on protected content. Geo-blocking and IP restriction are also available per title or subscription tier.' },
      { question: 'Do we get the source code?', answer: 'Licensing and source code access depends on the engagement model. White-label deployments include the compiled apps configured for your brand. Source code access is available under an enterprise license. All data (subscriber list, watch history, revenue) is always fully yours.' },
    ],
    deliverables: ['Viewer Web App (React.js)', 'iOS & Android Mobile Apps', 'Smart TV App (Android TV / Fire TV)', 'Creator Upload & Analytics Portal', 'Admin Panel (Subscribers, Revenue, Content)', 'Full Source Code & API Documentation'],
  },

  // ── AI Chatbot ──────────────────────────────────────────────────────────────
  {
    id: 'ai-chatbot',
    tag: 'AI CHATBOT SUITE',
    accentColor: '#3b82f6',
    title: 'AI Chatbot Web & App Suite',
    tagline: 'Automate 80% of support queries — trained on your data',
    description: 'Smart support and sales chatbot with custom knowledge base training, lead capture, CRM handoff, and deployment across Web, WhatsApp, and Instagram.',
    longDescription: 'Your customers ask the same 50 questions 1,000 times a month. Our AI Chatbot Suite ends that — permanently. Trained exclusively on your company\'s data (docs, FAQs, product pages, policies), it answers queries accurately, captures leads with qualifying questions, and hands off complex cases to human agents with full conversation context. Deploy on your website, WhatsApp Business number, and Instagram DM in one unified system — all monitored from a single analytics dashboard.',
    heroImage: '/images/products/ai-chatbot-web-app-suite.jpg.jpeg',
    productImage: '/images/products/chatbot.png',
    gallery: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
      'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=900&q=80',
    ],
    featureDetails: [
      { title: 'RAG-Powered Knowledge Base', icon: Database, desc: 'Upload your PDFs, Word docs, website URLs, and product catalogues. Our RAG (Retrieval-Augmented Generation) pipeline embeds and indexes everything — so the bot answers only from your data, never hallucinating.' },
      { title: 'Lead Capture & Qualification', icon: TrendingUp, desc: 'Configurable lead capture flows collect name, email, phone, and custom qualifying questions. Qualified leads are scored and pushed to your CRM in real time — with full conversation context attached.' },
      { title: 'Human-Agent Handoff', icon: Users, desc: 'When the bot reaches its limits or detects frustration, it transfers the conversation to a live agent — with full chat history and an AI-generated context summary. Integrates with Freshdesk, Intercom, and Zendesk.' },
      { title: '90+ Language Support', icon: Globe, desc: 'Auto-detects user language and responds in kind. Trained knowledge base in English responds accurately in Hindi, Arabic, Spanish, French, and 87 more languages via multilingual embedding models.' },
      { title: 'Multi-Channel Deployment', icon: Layers, desc: 'One knowledge base, three channels. Web widget (JS snippet), WhatsApp Business API, and Instagram DM all connect to the same AI backend — consistent answers everywhere your customers reach you.' },
      { title: 'Analytics & Conversation Insights', icon: Activity, desc: 'Dashboard shows total conversations, resolution rate, top unresolved questions, lead conversion, average response time, and CSAT scores. Weekly email reports for non-technical stakeholders.' },
    ],
    steps: [
      { step: '01', title: 'Knowledge Base Ingestion', desc: 'Share your FAQs, product docs, policies, and website URLs. We ingest and embed everything into a vector database.', detail: 'Takes 2–3 days. The more documentation provided, the more accurate the bot.' },
      { step: '02', title: 'Conversation Flow Design', desc: 'We design the greeting, intent classification, lead capture flow, escalation triggers, and handoff rules specific to your business.', detail: 'Takes 2–3 days. We review and iterate with your team.' },
      { step: '03', title: 'Integration & Deployment', desc: 'We deploy the web widget on your site (one JS snippet), connect WhatsApp Business API and Instagram, and integrate your CRM for lead sync.', detail: 'Takes 2–4 days. Requires CMS access, WhatsApp Business Manager, and CRM credentials.' },
      { step: '04', title: 'Testing & Go Live', desc: 'We test 200+ edge-case queries, run a 48-hour staging period with your team, then go live. Ongoing quality monitoring for 30 days.', detail: 'Takes 2 days. Your team participates in UAT before launch.' },
    ],
    techStack: [
      { category: 'AI & NLP', items: ['LangChain', 'OpenAI GPT-4o', 'Claude 3.5 Sonnet', 'Pinecone (Vector DB)'] },
      { category: 'Backend', items: ['Node.js', 'Python (FastAPI)', 'Redis (Session Cache)'] },
      { category: 'Frontend', items: ['React.js (Widget)', 'Next.js (Admin Dashboard)'] },
      { category: 'Channels', items: ['WhatsApp Cloud API', 'Meta Messenger API', 'Web SDK'] },
      { category: 'Integrations', items: ['HubSpot', 'Salesforce', 'Zoho CRM', 'Freshdesk', 'Intercom', 'Zendesk'] },
      { category: 'Infrastructure', items: ['AWS Lambda', 'PostgreSQL', 'Docker', 'Nginx'] },
    ],
    stats: [
      { value: '80%', label: 'Queries resolved without human', icon: Zap },
      { value: '< 500ms', label: 'Average response time', icon: Clock },
      { value: '90+', label: 'Languages supported', icon: Globe },
      { value: '3', label: 'Channels (Web, WhatsApp, IG)', icon: Layers },
    ],
    useCases: [
      { icon: 'startup', title: 'E-Commerce & D2C', desc: 'Answer product questions, check order status, process returns, and recover abandoned carts — automatically, 24/7. Reduce support ticket volume by up to 70%.', metric: '70% reduction in support tickets' },
      { icon: 'enterprise', title: 'SaaS & Tech Companies', desc: 'Deflect repetitive support queries, qualify inbound leads before they reach your sales team, and provide in-app onboarding assistance for new users.', metric: '3× more qualified leads from same traffic' },
      { icon: 'agency', title: 'Service Businesses & Clinics', desc: 'Book appointments, answer service FAQs, collect patient/client intake information, and send follow-up reminders — all automated without adding staff.', metric: '40% of bookings captured outside business hours' },
    ],
    deployment: {
      timeline: '7–14 days from kickoff to live deployment',
      customisation: 'Full UI theming — widget colours, avatar, greeting message. Conversation flows designed to your brand voice',
      support: '30 days post-launch monitoring + monthly knowledge base update sessions',
      hosting: 'Hosted on our managed infrastructure. Private cloud deployment available on request',
    },
    faqs: [
      { question: 'Can I train the AI on my own website data and documents?', answer: 'Yes. You provide PDFs, Word documents, Google Docs links, website URLs, and product catalogue CSVs. We embed everything into a private vector database. The bot answers only from this content — it cannot make up information not in your knowledge base.' },
      { question: 'Does it integrate with my CRM?', answer: 'Yes. We integrate natively with HubSpot, Salesforce, Zoho CRM, and Pipedrive for lead capture and handoff. For support-focused bots, we integrate with Freshdesk, Intercom, and Zendesk for live agent handoff. Custom integrations via webhook are supported for any other system.' },
      { question: 'How does the human handoff work?', answer: 'You configure the handoff triggers: negative sentiment, explicit "talk to human" request, after 3 failed resolution attempts, or for specific query categories. When triggered, the conversation — with full history and a context summary — is transferred to your live agent. The customer never needs to repeat themselves.' },
      { question: 'What happens when the bot doesn\'t know the answer?', answer: 'If the retrieved context does not contain an answer, the bot says so honestly and offers to connect the customer with a human agent or take their contact details for follow-up. It never guesses or hallucinates — answers are strictly grounded in your provided knowledge base.' },
      { question: 'Can it work on WhatsApp and Instagram as well?', answer: 'Yes. The same knowledge base and conversation logic is deployed across your website widget, WhatsApp Business number, and Instagram DM. Each channel has a UI appropriate to the platform. You monitor everything from one dashboard.' },
      { question: 'How long does it take to see the chatbot improve?', answer: 'The bot is functional from day one. Over the first 30 days, we review conversation logs weekly, identify unanswered or mishandled queries, and update the knowledge base. Accuracy improves significantly in months 1–3 as real-world edge cases are captured and addressed.' },
    ],
    deliverables: ['Embeddable Web Chat Widget (JS Snippet)', 'WhatsApp Business API Integration', 'Instagram DM Integration', 'Admin Analytics Dashboard', 'CRM & Helpdesk Integration Layer', 'Knowledge Base Training & Ongoing Updates'],
  },

  // ── Voice AI ─────────────────────────────────────────────────────────────────
  {
    id: 'voice-ai',
    tag: 'VOICE-TO-VOICE AI',
    accentColor: '#f5a623',
    title: 'Voice-to-Voice AI Assistant',
    tagline: 'Human-like phone AI for calls, bookings, and follow-ups — 24/7',
    description: 'Real-time voice AI that handles inbound/outbound calls — bookings, FAQs, follow-ups, and lead qualification — with <500ms latency and optional voice cloning.',
    longDescription: 'Your phone lines are your most human-feeling customer touchpoint — and the hardest to scale. Our Voice-to-Voice AI Assistant sounds indistinguishable from a real agent, handles entire conversations from greeting to resolution, and executes real-world actions like booking appointments, looking up account status, and scheduling callbacks. Deployed over standard phone lines via SIP/Twilio, it handles hundreds of simultaneous calls without a queue — at a fraction of call centre costs. Available 24/7, speaks 30+ languages, and never has a bad day.',
    heroImage: '/images/products/voice-to-voice-ai-assistant.jpg.jpeg',
    productImage: '/images/products/voiceai.png',
    gallery: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80',
      'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=900&q=80',
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=900&q=80',
      'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=900&q=80',
    ],
    featureDetails: [
      { title: 'Ultra-Low Latency (<500ms)', icon: Zap, desc: 'Proprietary speech pipeline — speech-to-text, LLM reasoning, and text-to-speech — optimised to complete within 500ms. Conversations feel natural with no awkward pauses or robotic delays.' },
      { title: 'Custom Voice Cloning', icon: Mic, desc: 'Clone your brand ambassador\'s voice or choose from 50+ premium pre-built voices across genders, accents, and ages. Voice is consistent across every call — your brand\'s audio identity.' },
      { title: 'Booking & Workflow Execution', icon: Settings, desc: 'Connects to your calendar (Google Calendar, Calendly, clinic management systems) and CRM to book appointments, check availability, update records, and trigger follow-up sequences — all mid-call.' },
      { title: 'Emotion & Tone Detection', icon: Activity, desc: 'Real-time sentiment analysis detects frustration, confusion, or urgency in the caller\'s voice — triggering automatic escalation to a human agent before the caller has to ask.' },
      { title: 'Inbound & Outbound Calls', icon: Globe, desc: 'Handles inbound support and booking calls. Also runs outbound campaigns — appointment reminders, payment follow-ups, lead qualification calls — at scale without a dialling team.' },
      { title: 'Call Recording & Analytics', icon: BarChart3, desc: 'Every call is recorded, transcribed, and analysed. Dashboard shows call volume, resolution rate, top call reasons, average handle time, sentiment scores, and escalation rate.' },
    ],
    steps: [
      { step: '01', title: 'Conversation Script Design', desc: 'We map every call scenario — greetings, FAQs, booking flows, objection handling, and escalation — into conversation trees.', detail: 'Takes 3–5 days. Requires your team to walk us through typical call types.' },
      { step: '02', title: 'Voice & Persona Setup', desc: 'Select or record a voice. We tune speaking pace, tone warmth, and filler word patterns to match your brand.', detail: 'Takes 2–3 days. Voice cloning requires 5–10 minutes of clean audio.' },
      { step: '03', title: 'Integration & Phone Setup', desc: 'Connect to your phone number via Twilio/SIP trunking. Integrate calendar or CRM for live data lookups during calls.', detail: 'Takes 3–5 days. Requires phone number forwarding and API credentials.' },
      { step: '04', title: 'Test Calls & Launch', desc: 'We run 100+ test call scenarios with your team, tune edge cases, then go live. Full call monitoring for the first 30 days.', detail: 'Takes 2–3 days. Your team reviews and approves before launch.' },
    ],
    techStack: [
      { category: 'Speech Pipeline', items: ['Whisper (STT)', 'ElevenLabs / OpenAI TTS', 'Custom Voice Cloning'] },
      { category: 'AI Reasoning', items: ['GPT-4o', 'Claude 3.5 Sonnet', 'LangChain Agents'] },
      { category: 'Telephony', items: ['Twilio Voice API', 'Vapi.ai', 'SIP Trunking', 'WebRTC'] },
      { category: 'Backend', items: ['Python (FastAPI)', 'Node.js', 'Redis (Session)'] },
      { category: 'Integrations', items: ['Google Calendar', 'Calendly', 'Salesforce', 'HubSpot'] },
      { category: 'Analytics', items: ['PostgreSQL', 'Metabase Dashboard', 'Sentiment ML Model'] },
    ],
    stats: [
      { value: '< 500ms', label: 'Voice response latency', icon: Zap },
      { value: '24/7', label: 'Zero downtime, unlimited calls', icon: Clock },
      { value: '80%', label: 'Cost saving vs call centre', icon: TrendingUp },
      { value: '30+', label: 'Languages supported', icon: Globe },
    ],
    useCases: [
      { icon: 'startup', title: 'Healthcare & Clinics', desc: 'Book and reschedule appointments, send pre-visit reminders, answer common patient questions, and handle after-hours urgent triage — without a receptionist on nights and weekends.', metric: '60% of after-hours calls handled automatically' },
      { icon: 'enterprise', title: 'Banking & Financial Services', desc: 'Handle high-volume enquiry calls — balance checks, loan follow-ups, KYC verification, and payment reminders — with full security verification and compliance-safe conversation flows.', metric: '40% reduction in call centre headcount needed' },
      { icon: 'agency', title: 'Real Estate & Sales', desc: 'Qualify inbound leads on the phone, answer property questions, schedule site visits, and run outbound follow-up campaigns for cold leads — autonomously, at scale.', metric: '5× more leads followed up same day' },
    ],
    deployment: {
      timeline: '10–18 days from kickoff to live call handling',
      customisation: 'Custom voice, persona, conversation scripts, and workflow integrations. Fully white-labelled',
      support: '30-day post-launch monitoring. Monthly call quality reviews and script optimisation',
      hosting: 'Hosted on our managed cloud infrastructure. SLA includes 99.9% uptime for call handling',
    },
    faqs: [
      { question: 'Is there any noticeable lag during the conversation?', answer: 'No. Our optimised speech pipeline completes the full STT → LLM → TTS cycle within 500ms — making conversations indistinguishable from talking to a well-trained human agent. There are no robotic pauses or delays.' },
      { question: 'Can I choose or clone a specific voice?', answer: 'Yes. Choose from 50+ premium pre-built voices (different genders, accents, ages) or clone a specific voice — your brand ambassador, an existing team member, or a completely new character. Voice cloning requires 5–10 minutes of clean audio recording and written consent from the voice owner.' },
      { question: 'Does this work over standard phone lines?', answer: 'Yes. We integrate via Twilio or direct SIP trunking, allowing the AI to handle calls on your existing business phone numbers. Customers call the same number they always have — there is nothing different about the experience from their side.' },
      { question: 'Can it make outbound calls as well?', answer: 'Yes. The outbound module handles appointment reminders, payment follow-ups, survey calls, and lead qualification campaigns. You upload a contact list, configure the script and call window, and the AI makes all calls automatically — with call recordings and outcome reports.' },
      { question: 'What happens when the AI can\'t handle a call?', answer: 'Escalation triggers are configurable: caller explicitly asks for a human, AI detects frustration or urgency in tone, specific topics are mentioned (legal, medical emergency, complaints), or after 2 failed resolution attempts. When triggered, the call is transferred to a human agent with a real-time transcript and summary.' },
      { question: 'Is it HIPAA compliant for healthcare use?', answer: 'Yes. For healthcare clients, we implement HIPAA-compliant call recording, data storage (encrypted at rest and in transit), and data handling policies. Business Associate Agreements (BAAs) are signed before deployment. All PHI is handled according to HIPAA Security Rule requirements.' },
    ],
    deliverables: ['Voice AI Agent (Inbound + Outbound)', 'Custom Voice or Cloned Voice Setup', 'Call Recording & Transcription System', 'Admin Analytics & Call History Dashboard', 'CRM / Calendar Integration', 'Conversation Script & Flow Documentation'],
  },

  // ── Food Delivery ────────────────────────────────────────────────────────────
  {
    id: 'food-delivery',
    tag: 'AI FOOD DELIVERY',
    accentColor: '#22c55e',
    title: 'AI Food Delivery Platform',
    tagline: 'Full food delivery ecosystem — 3 apps, AI routing, live tracking',
    description: 'End-to-end food delivery with AI route optimisation, real-time rider tracking, restaurant portal, personalised recommendations, and multi-payment support.',
    longDescription: 'Build your own Swiggy or Zomato — for your city, your food niche, or your restaurant chain. Our AI Food Delivery Platform is a complete three-sided marketplace: a customer app with personalised AI food recommendations, a restaurant portal for menu management and order tracking, and a rider app with AI-optimised delivery routes. Everything is connected in real time — customers see exact delivery estimates, restaurants track preparation, and riders get dynamic routing that avoids traffic and batches nearby orders for efficiency.',
    heroImage: '/images/products/ai-food-delivery-platform.jpg.jpeg',
    productImage: '/images/products/ai-food-delivery-platform.jpg.jpeg',
    gallery: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&q=80',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80',
      'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=900&q=80',
    ],
    featureDetails: [
      { title: 'AI Route Optimisation', icon: Zap, desc: 'Real-time routing engine considers traffic patterns, preparation time estimates, order batching proximity, and rider availability — reducing average delivery time by 22% vs manual dispatch.' },
      { title: 'Personalised Food AI', icon: Star, desc: 'Collaborative filtering recommends dishes based on each user\'s order history, time of day, weather, and neighbourhood preferences. Increases average order value by 18% through smart upselling.' },
      { title: 'Live Order Tracking', icon: Activity, desc: 'GPS-based real-time tracking for customers and restaurants. Customers see their rider on a live map with ETA. Restaurants know exact pickup time. Automated customer notifications at every status change.' },
      { title: 'Restaurant Portal', icon: Settings, desc: 'Restaurants manage their menu, pricing, availability, and promotions from a web portal. Order management shows incoming orders, prep time, and pickup ETA. Analytics show top dishes, revenue, and review trends.' },
      { title: 'Automated Dispatch System', icon: TrendingUp, desc: 'Intelligent order dispatch assigns riders based on proximity, workload, and vehicle type. Auto-batches nearby orders to the same rider. Handles peak demand without manual intervention.' },
      { title: 'Multi-Payment Support', icon: Database, desc: 'Stripe, Razorpay, PayPal, UPI, COD, and digital wallets supported. Wallet top-ups, promo codes, and cashback rewards built in. PCI-compliant payment handling.' },
    ],
    steps: [
      { step: '01', title: 'Configuration & Branding', desc: 'We set up your branded customer app, restaurant portal, and rider app with your logo, colours, and city configuration.', detail: 'Takes 3–5 days. Requires brand assets, supported zones, and restaurant list.' },
      { step: '02', title: 'Restaurant Onboarding', desc: 'We import or help onboard your partner restaurants — menus, photos, pricing, and operating hours — into the restaurant portal.', detail: 'Takes 3–7 days depending on restaurant count. Bulk import via CSV supported.' },
      { step: '03', title: 'Payment & Logistics Setup', desc: 'Configure payment gateways, delivery zones, pricing per km, surge rules, and rider onboarding flows.', detail: 'Takes 2–3 days. Requires payment gateway credentials and zone mapping.' },
      { step: '04', title: 'Pilot Launch & Scale', desc: 'We run a soft launch with 5–10 restaurants and monitor order flows, routing accuracy, and app performance before full rollout.', detail: 'Takes 2–4 weeks for pilot. Full city launch follows based on pilot learnings.' },
    ],
    techStack: [
      { category: 'Customer App', items: ['Flutter (iOS + Android)', 'React.js (Web Ordering)'] },
      { category: 'Rider App', items: ['Flutter (iOS + Android)', 'Google Maps SDK', 'WebSocket (Real-time)'] },
      { category: 'Restaurant Portal', items: ['React.js', 'Node.js API'] },
      { category: 'AI Engines', items: ['Python (Routing ML)', 'TensorFlow (Recommendations)', 'Redis (Live Tracking)'] },
      { category: 'Infrastructure', items: ['AWS EC2', 'AWS RDS (PostgreSQL)', 'Google Maps Platform', 'Firebase (Push)'] },
      { category: 'Payments', items: ['Razorpay', 'Stripe', 'UPI Integration', 'Wallet System'] },
    ],
    stats: [
      { value: '3 Apps', label: 'Customer, Restaurant & Rider', icon: Layers },
      { value: '22%', label: 'Faster delivery via AI routing', icon: Zap },
      { value: '18%', label: 'Higher AOV from AI recommendations', icon: TrendingUp },
      { value: 'Live', label: 'Real-time GPS tracking', icon: Activity },
    ],
    useCases: [
      { icon: 'startup', title: 'Cloud Kitchens & Dark Stores', desc: 'Launch delivery from multiple kitchen brands under one app without building technology from scratch. Own your customer data and delivery margins.', metric: 'Zero commission to third-party aggregators' },
      { icon: 'enterprise', title: 'Restaurant Chains', desc: 'Build your own delivery channel and stop paying 25–35% commission to Swiggy and Zomato. Capture customer data directly. Offer loyalty programmes that aggregators block.', metric: '25–35% margin saved per order' },
      { icon: 'agency', title: 'City-Level Food Aggregators', desc: 'Launch a Swiggy-style aggregator for your city, cuisine niche, or premium segment. Full multi-restaurant, multi-rider, multi-zone platform ready to scale.', metric: 'Full platform in 6–8 weeks vs 18 months custom' },
    ],
    deployment: {
      timeline: '6–8 weeks to full pilot launch including app store submissions',
      customisation: 'Full white-label — your brand across all 3 apps. Zone, currency, language, and pricing rules configurable',
      support: '6 months post-launch support included. Operations team training provided',
      hosting: 'AWS-hosted and scaled. Auto-scaling for peak demand periods included',
    },
    faqs: [
      { question: 'Are the Rider and Restaurant apps included?', answer: 'Yes. The full suite includes three apps: Customer App (Flutter — iOS + Android), Restaurant/Vendor Portal (Web), and Rider Delivery App (Flutter — iOS + Android). All three are branded under your identity and available in app stores.' },
      { question: 'How does AI optimise delivery routes?', answer: 'The routing AI considers real-time traffic (Google Maps), restaurant preparation time estimates, rider location and current load, and order pickup proximity. It batches nearby orders to the same rider and dynamically reroutes around traffic — reducing average delivery time by 22% compared to manual dispatch.' },
      { question: 'Can we integrate a local payment gateway?', answer: 'Yes. Razorpay (India), Stripe (global), PayPal, and UPI are pre-integrated. We can add any local payment gateway that has an API within the project scope. COD, digital wallets, and promo code/cashback systems are all supported.' },
      { question: 'Can the platform handle multiple cities?', answer: 'Yes. The platform is built multi-city from day one. Each city has its own delivery zones, restaurant catalogue, pricing rules, and rider pool. A superadmin dashboard manages all cities from one interface.' },
      { question: 'Does it support restaurant-owned delivery (not aggregator)?', answer: 'Yes. The platform supports both models: a single restaurant or chain running its own delivery, and a multi-restaurant aggregator model. For single-brand use, the restaurant admin panel is the main back-office. For aggregators, restaurants self-manage via their own portal login.' },
      { question: 'What is the launch timeline for a new city?', answer: 'With the platform ready-built, launching a new city typically takes 2–4 weeks — primarily for restaurant onboarding, rider recruitment, zone configuration, and a soft-launch testing period. Subsequent city launches are faster as the template is established.' },
    ],
    deliverables: ['Customer Ordering App (iOS & Android)', 'Restaurant Management Web Portal', 'Rider Delivery App (iOS & Android)', 'Super Admin Dashboard', 'AI Routing & Recommendation Engines', 'Full Source Code & Operations Documentation'],
  },

  // ── AI Image Generation ──────────────────────────────────────────────────────
  {
    id: 'ai-image-generation',
    tag: 'AI IMAGE SUITE',
    accentColor: '#a855f7',
    title: 'AI Image Generation & Transformation Suite',
    tagline: 'Generate, transform, and scale your visual content with AI',
    description: 'Complete AI visual suite — text-to-image, bulk background removal, brand style transfer, 4× upscaling, product photo enhancement, and LoRA fine-tuning on your products.',
    longDescription: 'Your marketing, e-commerce, and design teams are spending thousands on photoshoots and stock imagery for content that needs to be refreshed every week. Our AI Image Suite eliminates that bottleneck. Generate professional product photos, lifestyle imagery, ad creatives, and social visuals from text prompts in seconds — in your exact brand style, featuring your actual products (via LoRA fine-tuning), at 4K resolution. Process thousands of images in bulk — remove backgrounds, enhance quality, resize for platforms, and apply consistent brand filters — in the time it used to take to do ten manually.',
    heroImage: '/images/products/imagegenaration.jpeg',
    productImage: '/images/products/imagegenaration.jpeg',
    gallery: [
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80',
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&q=80',
      'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=900&q=80',
    ],
    featureDetails: [
      { title: 'Text-to-Image Generation', icon: Wand2, desc: 'DALL-E 3, Stable Diffusion XL, and Midjourney-quality images from text prompts. Generate 4 variants per prompt, select, regenerate. Style lock ensures every image matches your brand aesthetic.' },
      { title: 'LoRA Fine-Tuning on Your Products', icon: Star, desc: 'Train a custom LoRA model on 20–50 photos of your physical products. Once trained, the AI generates infinite lifestyle images featuring your actual products in any setting — no photoshoot needed.' },
      { title: 'Bulk Background Removal', icon: Layers, desc: 'Upload 10,000 product images via CSV or API. The AI removes backgrounds, applies white/transparent or custom backgrounds, and returns processed images in 2–4 hours. 99.2% accuracy on complex edges.' },
      { title: 'Brand Style Transfer', icon: Activity, desc: 'Define your visual brand identity once — colour palette, composition style, typography placement, photography aesthetic — and apply it consistently to any new image with one click.' },
      { title: '4× High-Res Upscaling', icon: TrendingUp, desc: 'Upscale low-resolution images to 4× their original size using AI super-resolution. Old product photos, compressed stock images, and user-generated content made print-quality without re-shooting.' },
      { title: 'REST API Access', icon: Code2, desc: 'Every feature available as an API endpoint. Integrate image generation and transformation directly into your e-commerce platform, PIM system, or content management workflow. SDKs for Python and Node.js included.' },
    ],
    steps: [
      { step: '01', title: 'Brand Style Configuration', desc: 'Define your visual identity — colour palette, composition rules, tone, and style references. This trains the style consistency engine.', detail: 'Takes 2–3 days. Provide 20–30 reference images that represent your brand aesthetic.' },
      { step: '02', title: 'LoRA Fine-Tuning (Optional)', desc: 'If you want AI to generate images featuring your actual products, we train a custom LoRA model on your product photos.', detail: 'Takes 3–5 days. Requires 20–50 clean product photos per product for accurate results.' },
      { step: '03', title: 'Platform Setup & API Access', desc: 'We set up your private instance of the suite with your brand configuration, API keys, and usage monitoring dashboard.', detail: 'Takes 1–2 days. You get a dashboard login and API credentials immediately.' },
      { step: '04', title: 'Team Training & Scale', desc: 'We train your marketing and design team on the suite (2–3 hour session). Set up bulk processing workflows for your product catalogue.', detail: 'Takes 1 day. Async video tutorials included for ongoing team onboarding.' },
    ],
    techStack: [
      { category: 'Generative Models', items: ['Stable Diffusion XL', 'DALL-E 3', 'LoRA Fine-tuning', 'ControlNet'] },
      { category: 'Image Processing', items: ['PyTorch', 'OpenCV', 'REMBG (BG Removal)', 'Real-ESRGAN (Upscaling)'] },
      { category: 'Backend', items: ['Python (FastAPI)', 'Celery (Job Queue)', 'Redis'] },
      { category: 'Frontend', items: ['Next.js (Studio UI)', 'React.js (API Dashboard)'] },
      { category: 'Infrastructure', items: ['AWS S3 (Storage)', 'CUDA GPU Cluster', 'PostgreSQL', 'AWS EC2 (A10G GPUs)'] },
      { category: 'API & Integrations', items: ['REST API', 'Python SDK', 'Node.js SDK', 'Shopify Plugin'] },
    ],
    stats: [
      { value: '4×', label: 'Image upscaling quality', icon: TrendingUp },
      { value: '10K+', label: 'Images processed per batch', icon: Layers },
      { value: '99.2%', label: 'BG removal accuracy', icon: Award },
      { value: 'LoRA', label: 'Custom product model fine-tuning', icon: Wand2 },
    ],
    useCases: [
      { icon: 'startup', title: 'E-Commerce & D2C Brands', desc: 'Generate professional product photos and lifestyle shots at a fraction of photoshoot costs. Resize and format for every platform automatically. Refresh visual content weekly, not quarterly.', metric: '90% reduction in photography spend' },
      { icon: 'enterprise', title: 'Marketing & Creative Teams', desc: 'Create on-brand social media visuals, ad creatives, banner variants, and email imagery in seconds. A/B test 20 ad creative variants for the cost of what one photoshoot used to cover.', metric: '20× more creative variants produced per campaign' },
      { icon: 'agency', title: 'Creative & Digital Agencies', desc: 'Offer AI-powered visual creation as a managed service to clients. Process entire client catalogues in bulk. Deliver project volumes that were previously impossible with manual design.', metric: '5× more client projects with same team size' },
    ],
    deployment: {
      timeline: '5–10 days to fully configured private instance with brand styles loaded',
      customisation: 'Private instance with your brand styles, LoRA models, and API keys. White-label option for agency resellers',
      support: 'API documentation, SDKs, and monthly model retraining for LoRA fine-tuned models',
      hosting: 'GPU cluster hosted on AWS. Storage on S3 with optional CDN for fast image delivery',
    },
    faqs: [
      { question: 'Who owns the copyright of AI-generated images?', answer: 'You do. All images generated through your licensed instance of the suite belong entirely to your brand for commercial use without restriction. We use commercially licensed base models (DALL-E 3 with OpenAI\'s commercial rights, and licensed Stable Diffusion variants).' },
      { question: 'Is there an API for integration into our e-commerce platform?', answer: 'Yes. Every feature — generation, background removal, upscaling, style transfer, and fine-tuned model inference — is available as a REST API endpoint. We provide Python and Node.js SDKs, a Shopify plugin, and webhook support for event-driven workflows in your existing stack.' },
      { question: 'Can you train the AI on our specific products?', answer: 'Yes. LoRA fine-tuning trains the image generation model to recognise and include your specific physical products in any generated scene. After training on 20–50 product photos, you can generate: "Put [your product] on a kitchen counter with morning light" and the AI places your actual product accurately.' },
      { question: 'How accurate is the background removal on complex products?', answer: 'Our model achieves 99.2% accuracy on typical product backgrounds. It handles complex edges (hair, fur, transparent objects, fine jewellery) significantly better than older matting approaches. For truly complex edges, we include a manual correction queue that flags low-confidence results for human review.' },
      { question: 'What is the processing speed for bulk batches?', answer: 'Background removal processes approximately 300–500 images per hour per GPU. A batch of 10,000 product images typically completes in 20–35 hours. Generation (text-to-image with 4 variants) runs at approximately 60–80 images per hour. Priority queue options are available for urgent deadlines.' },
      { question: 'Can generated images be used in print and physical advertising?', answer: 'Yes. Images are generated at up to 2048×2048 pixels natively, and our 4× upscaler brings them to 8192×8192 — sufficient for most print formats. For billboards and large-format print, we recommend upscaling + professional review before sending to press.' },
    ],
    deliverables: ['Private AI Image Studio Web App', 'Brand Style Engine (Configured to Your Identity)', 'Custom LoRA Model (Trained on Your Products)', 'Bulk Processing Pipeline (BG Removal + Upscaling)', 'REST API + Python & Node.js SDKs', 'Shopify Plugin & Integration Documentation'],
  },

  // ── Banking Software ─────────────────────────────────────────────────────────
  {
    id: 'banking-software',
    tag: 'BANKING PLATFORM',
    accentColor: '#14b8a6',
    title: 'Modern Banking & Fintech Platform',
    tagline: 'Full-stack digital banking with fraud detection and real-time monitoring',
    description: 'Modern banking platform with online banking, payment processing, customer management, AI-powered fraud detection, real-time transaction monitoring, and regulatory compliance tools.',
    longDescription: 'Built for neobanks, credit unions, microfinance institutions, and fintech startups entering the banking space. Our Modern Banking Platform delivers everything you need to launch a digital-first banking experience: current and savings account management, payment rails (NEFT, RTGS, UPI, SWIFT), loan origination and servicing, AI-powered fraud detection, and a full regulatory compliance reporting module. Built on a microservices architecture that scales from 1,000 to 10 million customers without re-platforming — and designed to integrate with RBI-compliant core banking systems.',
    heroImage: '/images/products/Banking.png',
    productImage: '/images/products/Banking.png',
    gallery: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80',
      'https://images.unsplash.com/photo-1593672715438-d88a70629abe?w=900&q=80',
    ],
    featureDetails: [
      { title: 'AI Fraud Detection', icon: Shield, desc: 'ML model trained on transaction patterns detects anomalies in real time — flagging suspicious transactions before they complete. Reduces fraud losses by up to 85% vs rule-based systems. Explainable AI outputs for compliance audits.' },
      { title: 'Real-Time Transaction Monitoring', icon: Activity, desc: 'Every transaction monitored against AML rules, FATF guidelines, and custom risk rules in under 200ms. Automated STR (Suspicious Transaction Report) generation for compliance officers.' },
      { title: 'Digital Account Management', icon: Database, desc: 'Full current and savings account lifecycle — account opening with video KYC, statement generation, standing instructions, overdraft management, and interest calculation.' },
      { title: 'Payment Rails & UPI', icon: Zap, desc: 'Integrated with NEFT, RTGS, IMPS, UPI, and SWIFT payment networks. Supports inward and outward remittances, bulk payment processing, and escrow management. PCI-DSS Level 1 compliant.' },
      { title: 'Loan Origination & Servicing', icon: TrendingUp, desc: 'Digital loan application, AI credit scoring, automated underwriting workflow, disbursement, and EMI management in one module. Supports personal loans, business loans, and microfinance products.' },
      { title: 'Compliance & Reporting', icon: Award, desc: 'Automated regulatory reporting for RBI, SEBI, and IRDAI requirements. CKYC integration, CIBIL bureau connectivity, and audit trail for every transaction and customer interaction.' },
    ],
    steps: [
      { step: '01', title: 'Regulatory & Compliance Setup', desc: 'Configure your regulatory environment — jurisdiction, compliance rules, reporting formats, and AML thresholds — before any customer-facing features go live.', detail: 'Takes 5–7 days. Requires regulatory licence details and compliance officer involvement.' },
      { step: '02', title: 'Product Configuration', desc: 'Define your account products, loan products, fee schedules, interest rates, and customer segments in the product configurator.', detail: 'Takes 3–5 days. No code required — all configuration via admin panel.' },
      { step: '03', title: 'Core Banking Integration', desc: 'Integrate with your existing core banking system (Finacle, Temenos, Oracle FLEXCUBE) or operate as standalone. Connect payment network APIs.', detail: 'Takes 5–10 days. Requires API credentials and data migration plan.' },
      { step: '04', title: 'UAT, Audit & Go Live', desc: 'Full user acceptance testing, security penetration testing, and regulatory audit review before production launch. Staged rollout recommended for large migrations.', detail: 'Takes 2–4 weeks. Includes mock regulatory inspection readiness check.' },
    ],
    techStack: [
      { category: 'Core Platform', items: ['Java Spring Boot (Microservices)', 'Kotlin', 'GraphQL', 'REST APIs'] },
      { category: 'AI & Risk', items: ['Python (ML Models)', 'TensorFlow (Fraud Detection)', 'Apache Kafka (Event Streaming)'] },
      { category: 'Frontend', items: ['React.js (Customer Portal)', 'React Native (Mobile Banking)'] },
      { category: 'Database', items: ['PostgreSQL (Transactional)', 'MongoDB (Events)', 'Redis (Cache)', 'Elasticsearch'] },
      { category: 'Payment Integrations', items: ['NPCI (UPI/IMPS)', 'SWIFT', 'Razorpay / PayU', 'NEFT/RTGS SFMS'] },
      { category: 'Security & Compliance', items: ['HSM (Hardware Security Module)', 'CKYC', 'CIBIL API', 'ISO 27001 Architecture'] },
    ],
    stats: [
      { value: '85%', label: 'Fraud loss reduction vs rule-based', icon: Shield },
      { value: '<200ms', label: 'Transaction monitoring response', icon: Zap },
      { value: '10M+', label: 'Customers scalable without re-platform', icon: TrendingUp },
      { value: 'PCI-DSS', label: 'Level 1 compliant payment handling', icon: Award },
    ],
    useCases: [
      { icon: 'startup', title: 'Neobanks & Digital-First Banks', desc: 'Launch a fully regulated digital banking experience without the legacy core banking overhead. Mobile-first, API-first, designed for modern customer acquisition and retention.', metric: '60% lower operating cost vs traditional banks' },
      { icon: 'enterprise', title: 'Credit Unions & Co-operative Banks', desc: 'Modernise member-facing banking with digital account opening, UPI, and app-based access — while maintaining compliance with co-operative banking regulations.', metric: 'Digital adoption from 15% to 80% in 12 months' },
      { icon: 'agency', title: 'Fintech Startups & NBFCs', desc: 'Enter the lending or payments space with a compliant, scalable platform. Loan origination, UPI payments, and KYC built in. Focus on distribution and customer experience — not infrastructure.', metric: 'Time-to-market reduced from 18 months to 8 weeks' },
    ],
    deployment: {
      timeline: '8–14 weeks for a full production deployment including compliance review',
      customisation: 'Fully white-labelled under your bank/brand name. Product parameters, fee schedules, and compliance rules configurable without code',
      support: 'Dedicated technical account manager. 24×7 SLA for production incidents. Quarterly compliance audit support',
      hosting: 'Private cloud deployment (AWS/GCP/Azure) within your regulated jurisdiction. On-premise deployment available for tier-1 banks',
    },
    faqs: [
      { question: 'Is this platform compliant with RBI regulations for Indian banking?', answer: 'Yes. The platform is designed specifically for the Indian regulatory environment — RBI KYC/CKYC guidelines, PMLA compliance, FATF AML requirements, NPCI integration (UPI/IMPS/NEFT), and automated regulatory reporting formats.' },
      { question: 'How does the AI fraud detection work?', answer: 'We use an ensemble ML model trained on transaction patterns, device fingerprints, behavioural biometrics, and historical fraud cases. It scores every transaction in under 200ms. The model identifies anomalies like unusual amounts, new devices, unusual geographies, velocity spikes, and account takeover patterns. All flags include explainable AI outputs for compliance officer review.' },
      { question: 'Can it integrate with existing core banking systems like Finacle or Temenos?', answer: 'Yes. We provide integration adapters for Infosys Finacle, Temenos T24, Oracle FLEXCUBE, and Mphasis BankWare. The platform can operate as a complete standalone system or as a digital-first front-end layer over an existing core banking system.' },
      { question: 'Does it support UPI and other Indian payment methods?', answer: 'Yes. We integrate with NPCI for UPI (via the NPCI APIs and a licensed partner bank), IMPS, NEFT, and RTGS. We also integrate with Razorpay and PayU as payment aggregators for merchant-facing use cases. International SWIFT transfers are supported for accounts with inward/outward remittance permissions.' },
      { question: 'What security certifications does the platform have?', answer: 'The architecture is designed to ISO 27001 and PCI-DSS Level 1 standards. We use Hardware Security Modules (HSM) for encryption key management, end-to-end TLS 1.3 for all data in transit, AES-256 encryption at rest, and role-based access control with full audit logging.' },
      { question: 'How long does implementation take for a new neobank launch?', answer: 'A typical neobank launch (current accounts, UPI, loans, mobile app) takes 8–14 weeks including compliance setup, product configuration, payment rail integration, UAT, and regulatory review. Timeline is primarily driven by the regulatory licence process and compliance readiness on your side.' },
    ],
    deliverables: ['Customer Mobile Banking App (iOS & Android)', 'Internet Banking Web Portal', 'Operations & Compliance Admin Panel', 'AI Fraud Detection & AML Monitoring Engine', 'Core Banking API Integration Layer', 'Regulatory Reporting Module (RBI / SEBI)'],
  },

  // ── Healthcare Platform ───────────────────────────────────────────────────────
  {
    id: 'healthcare-platform',
    tag: 'HEALTHTECH',
    accentColor: '#06b6d4',
    title: 'AI Telemedicine & Hospital Management Platform',
    tagline: 'Launch your own telehealth service or digitise your clinic in 4–6 weeks',
    description: 'Complete telemedicine suite with HD video consultations, EMR, e-prescriptions, multi-doctor management, lab integrations, and appointment scheduling.',
    longDescription: 'Healthcare is the last industry where patients still wait on hold to book appointments and carry paper prescriptions. Our AI Telemedicine & Hospital Management Platform changes that — giving patients a seamless digital experience while giving clinics and hospital chains the operational efficiency of a fully connected system. Video consultations, EMR, e-prescriptions, pharmacy integration, and AI appointment triage are all connected in one platform. Scales from a solo practitioner to a 500-doctor hospital network without re-platforming.',
    heroImage: '/images/products/healthcare.png',
    productImage: '/images/products/healthcare.png',
    gallery: [
      'https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?w=900&q=80',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80',
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&q=80',
      'https://images.unsplash.com/photo-1551076805-e1869033e561?w=900&q=80',
    ],
    featureDetails: [
      { title: 'HD Video Consultations', icon: Monitor, desc: 'WebRTC-powered encrypted video calls between doctor and patient. Waiting room queues, appointment reminders, and session recording (with consent) are all built in. Works on web and mobile — no app download required for patients.' },
      { title: 'Electronic Medical Records (EMR)', icon: Database, desc: 'Complete patient health history — past consultations, prescriptions, lab reports, allergies, chronic conditions, and vital trends — accessible by authorised doctors in one click. HIPAA-compliant data storage.' },
      { title: 'E-Prescription System', icon: Shield, desc: 'Doctors issue digital prescriptions during or after consultation. Prescriptions are digitally signed, sent to the patient instantly, and can be routed directly to integrated pharmacy partners for home delivery.' },
      { title: 'Smart Appointment Booking', icon: Settings, desc: 'Patients book in-clinic or video appointments by specialty, doctor, and time slot from web or app. AI triage asks pre-appointment questions to route to the right specialist, reducing unnecessary consultations.' },
      { title: 'Lab & Diagnostic Integration', icon: Activity, desc: 'Request lab tests during consultation — patient receives instructions, visits the lab partner, and results automatically appear in their EMR. Doctors get notified when critical values are flagged.' },
      { title: 'Insurance & Billing Module', icon: TrendingUp, desc: 'Generate GST-compliant invoices, process insurance pre-authorisation, submit claims digitally, and track reimbursements. Works with TPA integrations for cashless processing.' },
    ],
    steps: [
      { step: '01', title: 'Clinic & Doctor Setup', desc: 'We configure your clinic profile, doctor roster, specialties, consultation fees, and appointment slots in the admin panel.', detail: 'Takes 2–3 days. Requires doctor credentials, specialties, and available hours.' },
      { step: '02', title: 'Patient Onboarding & EMR Migration', desc: 'Import existing patient records (if any) and set up patient registration flows for new patients including digital consent forms.', detail: 'Takes 3–5 days. Existing records migrated from Excel, paper scans, or legacy systems.' },
      { step: '03', title: 'Payment & Insurance Integration', desc: 'Connect payment gateways for consultation fees, configure insurance TPA integrations, and set up pharmacy partner routing for e-prescriptions.', detail: 'Takes 2–3 days. Requires payment credentials and insurance TPA IDs.' },
      { step: '04', title: 'Testing & Go Live', desc: 'We run end-to-end testing with your team — mock consultations, prescription flows, and billing — then launch with 30-day monitoring.', detail: 'Takes 2–3 days. Both patient and doctor apps are tested before launch.' },
    ],
    techStack: [
      { category: 'Patient Apps', items: ['React Native (iOS + Android)', 'React.js (Web Portal)'] },
      { category: 'Doctor Platform', items: ['React.js (Dashboard)', 'WebRTC (Video Calls)'] },
      { category: 'Backend', items: ['Node.js', 'Python (AI Triage)', 'GraphQL API'] },
      { category: 'Database', items: ['PostgreSQL (EMR)', 'MongoDB (Documents)', 'Redis (Session)'] },
      { category: 'Compliance', items: ['HIPAA-compliant AWS', 'AES-256 Encryption', 'Audit Logs'] },
      { category: 'Integrations', items: ['Twilio (SMS)', 'Razorpay', 'Lab APIs', 'Pharmacy APIs'] },
    ],
    stats: [
      { value: 'HIPAA', label: 'Compliant Architecture', icon: Shield },
      { value: 'HD', label: 'Encrypted Video Quality', icon: Monitor },
      { value: '4–6 wk', label: 'Launch Timeline', icon: Clock },
      { value: '500+', label: 'Doctors Scalable', icon: Users },
    ],
    useCases: [
      { icon: 'startup', title: 'Solo Doctors & Small Clinics', desc: 'Start accepting online bookings and video consultations the same week. Patient app, doctor dashboard, and e-prescriptions — all managed from one simple panel.', metric: '40% more patients served per day' },
      { icon: 'enterprise', title: 'Multi-Specialty Hospital Chains', desc: 'Manage hundreds of doctors across multiple branches with unified patient records, cross-specialty referrals, and centralized revenue reporting.', metric: '60% reduction in admin overhead' },
      { icon: 'agency', title: 'Health Startups & Insurance Companies', desc: 'White-label the platform to launch your own branded telehealth product or employee health benefit service with a custom-branded experience.', metric: '70% lower development cost vs custom build' },
    ],
    deployment: {
      timeline: '4–6 weeks to full launch including app store submissions',
      customisation: 'Full white-label — your brand, domain, and app store listings. Doctor specialties and workflows configurable per client',
      support: '6 months post-launch support. Compliance documentation for HIPAA and local health data regulations',
      hosting: 'HIPAA-compliant AWS hosting. Data residency in your preferred region. Audit logs maintained for 7 years',
    },
    faqs: [
      { question: 'Is patient data HIPAA and data privacy compliant?', answer: 'Yes. The platform is built on HIPAA-compliant AWS infrastructure with AES-256 encryption at rest, TLS 1.3 in transit, role-based access control, and complete audit trails. For Indian clients, we follow DPDP Act and MoHFW telemedicine guidelines. BAAs are signed with all sub-processors.' },
      { question: 'Can patients join video calls without downloading an app?', answer: 'Yes. Patients can join from any browser on mobile or desktop — no app download required. Doctors use the web dashboard. For patients who prefer an app, iOS and Android apps with push notifications are included.' },
      { question: 'Does it work for both in-clinic and telehealth visits?', answer: 'Yes. Patients can book either an in-clinic slot (with physical queue management) or a video consultation. Doctors see both appointment types in one calendar. EMR and prescription features work identically for both visit types.' },
      { question: 'Can we integrate with our existing lab and pharmacy partners?', answer: 'Yes. We build integration adapters for any lab or pharmacy that has an API. For Lal PathLabs, Dr Lal, Thyrocare, and major pharmacy chains, we have pre-built connectors. Custom integrations are scoped on a case-by-case basis.' },
      { question: 'Is the system suitable for a single doctor or only for large hospitals?', answer: 'Both. The system scales from a solo practitioner to a 500-doctor hospital network. Solo doctors get a simplified interface. Chains get multi-branch dashboards, inter-departmental referrals, and centralised finance reporting.' },
      { question: 'Can the platform be white-labeled for a health startup?', answer: 'Yes. Full white-labeling includes custom app name, app store listings under your developer accounts, custom domain, brand colours, and removal of all Kotibox branding. We sign an NDA and white-label agreement before deployment.' },
    ],
    deliverables: ['Patient App (iOS & Android + Web)', 'Doctor Dashboard & Video Consultation Platform', 'Admin & Clinic Management Panel', 'EMR System with Patient Health Records', 'E-Prescription & Lab Integration Module', 'Billing, Insurance & Compliance Reporting'],
  },

  // ── E-Commerce Platform ───────────────────────────────────────────────────────
  {
    id: 'ecommerce-platform',
    tag: 'E-COMMERCE',
    accentColor: '#f59e0b',
    title: 'AI-Powered E-Commerce & Marketplace Platform',
    tagline: 'Launch your online store or marketplace in 4–6 weeks',
    description: 'Full-stack e-commerce with multi-vendor support, AI recommendations, real-time inventory, abandoned cart recovery, dynamic pricing, and integrated shipping.',
    longDescription: 'Stop paying 15–30% commission to Amazon and Flipkart. Our AI-Powered E-Commerce Platform gives you a branded online store with every feature you need to attract, convert, and retain customers — on your own domain, with your own data, and without paying per-transaction fees. Whether you\'re a D2C brand, a retailer expanding online, or building a full multi-vendor marketplace, the platform scales from your first order to your millionth. Powered by AI that learns your catalogue and customers — serving the right product to the right person at the right time.',
    heroImage: '/images/products/retail-e-commerce.png',
    productImage: '/images/products/retail-e-commerce.png',
    gallery: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80',
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80',
    ],
    featureDetails: [
      { title: 'AI Product Recommendations', icon: Star, desc: 'Collaborative filtering engine analyses each visitor\'s browsing and purchase history to surface personalised "You might also like" and "Frequently bought together" carousels — increasing average order value by an average of 23%.' },
      { title: 'Multi-Vendor Marketplace Engine', icon: Users, desc: 'Enable third-party sellers to list products, manage their own inventory, and process orders through a self-service seller portal. Admin controls commission rates, seller approval, and dispute resolution.' },
      { title: 'Abandoned Cart Recovery', icon: TrendingUp, desc: 'Automated multi-step recovery sequences — push notifications, email, and WhatsApp — trigger when a customer abandons their cart. Dynamic discount codes are issued for high-value carts. Recovers 18–25% of abandoned carts on average.' },
      { title: 'Real-Time Inventory Sync', icon: Activity, desc: 'Inventory levels sync across web, app, and seller portals in real time. Low-stock alerts, auto-reorder points, and warehouse-level stock management prevent overselling and stockouts.' },
      { title: 'Dynamic Pricing Engine', icon: Zap, desc: 'Set pricing rules based on demand, competitor prices (via API feeds), inventory levels, and customer segment. Flash sale scheduling and time-limited offer automation are managed from the admin panel.' },
      { title: 'Integrated Shipping & Tracking', icon: Layers, desc: 'Pre-integrated with Shiprocket, Delhivery, FedEx, and 15+ courier partners. Automated label generation, real-time tracking, and customer delivery notifications — all without manual intervention.' },
    ],
    steps: [
      { step: '01', title: 'Store Setup & Branding', desc: 'We configure your storefront with your brand identity, category structure, payment gateways, and shipping zones.', detail: 'Takes 3–5 days. Requires brand assets, category list, and payment credentials.' },
      { step: '02', title: 'Product Catalogue Import', desc: 'Bulk import your product catalogue with images, descriptions, variants, and pricing. AI generates SEO-optimised meta descriptions automatically.', detail: 'Takes 2–5 days depending on catalogue size. CSV or API import supported.' },
      { step: '03', title: 'AI Engine Training', desc: 'The recommendation and search engine indexes your catalogue and begins personalisation as the first visitors arrive. Pre-populated with trending-by-category logic until user data accumulates.', detail: 'Takes 1–2 days setup. Recommendation accuracy improves continuously with real traffic.' },
      { step: '04', title: 'Launch & Growth Setup', desc: 'We configure SEO, connect Google Analytics and Meta Pixel, set up abandoned cart flows, and launch. 30-day post-launch optimisation included.', detail: 'Takes 2–3 days. Includes 30-day performance monitoring and first conversion rate analysis.' },
    ],
    techStack: [
      { category: 'Storefront', items: ['Next.js (Web)', 'React Native (Mobile App)', 'PWA Support'] },
      { category: 'Backend', items: ['Node.js', 'GraphQL API', 'Redis (Cart & Sessions)'] },
      { category: 'AI Engine', items: ['Python (Recommendations)', 'Elasticsearch (Search)', 'TensorFlow'] },
      { category: 'Database', items: ['PostgreSQL (Orders)', 'MongoDB (Catalogue)', 'Redis (Cache)'] },
      { category: 'Payments', items: ['Razorpay', 'Stripe', 'PayPal', 'UPI', 'COD'] },
      { category: 'Integrations', items: ['Shiprocket', 'Delhivery', 'Google Shopping', 'Meta Pixel', 'WhatsApp API'] },
    ],
    stats: [
      { value: '23%', label: 'Higher AOV from AI recommendations', icon: TrendingUp },
      { value: '18–25%', label: 'Cart recovery rate', icon: Activity },
      { value: 'Multi', label: 'Vendor marketplace support', icon: Users },
      { value: '15+', label: 'Shipping partners integrated', icon: Layers },
    ],
    useCases: [
      { icon: 'startup', title: 'D2C & Emerging Brands', desc: 'Launch your own branded store and stop depending on Amazon. Own your customer relationships, collect first-party data, and run loyalty programmes that marketplaces won\'t allow.', metric: 'Zero per-transaction commission fees' },
      { icon: 'enterprise', title: 'Offline Retailers Going Online', desc: 'Replicate your multi-location store online with real-time inventory sync across branches, click-and-collect options, and a customer app that drives repeat purchases.', metric: '35% of revenue from new digital channel in year 1' },
      { icon: 'agency', title: 'Multi-Vendor Marketplace Builders', desc: 'Launch a niche marketplace — beauty, electronics, books, fashion — with seller onboarding, commission management, and dispute resolution all built in from day one.', metric: 'Full marketplace live in 6–8 weeks' },
    ],
    deployment: {
      timeline: '4–6 weeks to full store launch including app store submissions',
      customisation: 'Full white-label storefront. Theme, typography, colours, and UX flows customised to your brand',
      support: '6 months post-launch support. Monthly conversion rate reviews and recommendation engine tuning',
      hosting: 'AWS-hosted with auto-scaling for peak traffic (sales, campaigns). 99.9% uptime SLA',
    },
    faqs: [
      { question: 'Can this support both a single brand store and a multi-vendor marketplace?', answer: 'Yes. Single-brand mode has your team managing all products and inventory. Multi-vendor mode adds seller portals, commission configurations, seller payouts, and dispute workflows. You can start single-brand and migrate to multi-vendor later without re-platforming.' },
      { question: 'How does the AI recommendation engine work?', answer: 'We use a hybrid recommendation system — collaborative filtering (based on what similar users bought) combined with content-based filtering (based on product attributes). It personalises homepages, category pages, product pages, cart pages, and email campaigns. It begins with trending-by-category logic and gets personalised as individual user behaviour data accumulates.' },
      { question: 'Which shipping partners are integrated?', answer: 'We have pre-built integrations with Shiprocket (which aggregates 15+ couriers including Delhivery, Blue Dart, Ekart, and Xpressbees), FedEx, DHL, and Shadowfax. International shipping via EasyParcel and Easyship is available. Custom courier integrations are supported via webhook for any courier with an API.' },
      { question: 'Is the mobile app included?', answer: 'Yes. A full-featured iOS and Android shopping app is included — with push notifications for offers, order updates, and abandoned cart recovery. The app shares the same backend as the web store and can be published under your App Store and Play Store accounts.' },
      { question: 'How does abandoned cart recovery work?', answer: 'When a logged-in user adds items to cart and leaves without purchasing, a three-step recovery sequence begins: push notification at 1 hour, email at 6 hours, and WhatsApp message at 24 hours. Each message can include a dynamic discount code for high-value carts. All timing and messaging is configurable from the admin panel.' },
      { question: 'Does it support GST invoicing for Indian businesses?', answer: 'Yes. Automatic GST-compliant invoice generation is included. You configure your GSTIN, HSN codes per product category, and applicable tax rates — invoices are generated automatically for every order and emailed to the customer. GSTR-1 export is available for filing.' },
    ],
    deliverables: ['Web Storefront (Next.js, SEO-optimised)', 'Customer Mobile App (iOS & Android)', 'Seller Dashboard (Multi-vendor Support)', 'Admin Panel with Inventory & Analytics', 'AI Recommendation & Search Engine', 'Full Source Code & Integration Documentation'],
  },

  // ── Real Estate Platform ──────────────────────────────────────────────────────
  {
    id: 'real-estate-platform',
    tag: 'PROPTECH',
    accentColor: '#8b5cf6',
    title: 'Real Estate Portal & PropTech Platform',
    tagline: 'Launch a full property marketplace in 5–8 weeks',
    description: 'Complete PropTech platform with property listings, 360° virtual tours, agent CRM, AI property search, EMI calculators, lead management, and developer project pages.',
    longDescription: 'The property market runs on trust, speed, and information — and the portals that provide all three win the most leads. Our Real Estate Portal Platform gives developers, agencies, and PropTech startups a complete digital infrastructure: property listings with rich media and 360° virtual tours, an AI-powered search and recommendation engine that matches buyers to properties, a fully featured agent CRM, and a developer project showcase module with payment milestone tracking. Built for markets where buyers expect to shortlist properties online and agents expect to manage their entire pipeline from a mobile app.',
    heroImage: '/images/products/real-estate.png',
    productImage: '/images/products/real-estate.png',
    gallery: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=900&q=80',
      'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=900&q=80',
    ],
    featureDetails: [
      { title: 'AI Property Search & Matching', icon: Star, desc: 'NLP-powered search understands natural language queries ("3BHK near good schools under 80L") and returns semantically matched listings. AI also sends automated property alerts to registered buyers when new matches are listed.' },
      { title: '360° Virtual Tours', icon: Monitor, desc: 'Upload 360° photos or integrate virtual tour links (Matterport, Kuula). Buyers explore properties immersively before scheduling a physical visit — reducing unqualified site visits by 45%.' },
      { title: 'Agent CRM & Lead Pipeline', icon: Users, desc: 'Agents manage their entire lead pipeline — enquiries, follow-up tasks, site visit scheduling, negotiation notes, and deal stages — from a mobile-friendly CRM dashboard. Automatic lead assignment based on property zone.' },
      { title: 'Developer Project Showcase', icon: Layers, desc: 'Developers get branded project pages with floor plan galleries, construction progress updates, RERA compliance details, and payment milestone plans. Integrated with booking deposit collection.' },
      { title: 'EMI Calculator & Loan Integration', icon: TrendingUp, desc: 'Buyers calculate EMI on any listing in real time. Integrated with home loan partners (pre-qualification flow) so buyers can get a loan approval estimate without leaving the platform.' },
      { title: 'Market Analytics Dashboard', icon: BarChart3, desc: 'Price trend analytics, locality demand heatmaps, days-on-market reports, and agent performance metrics. Helps agents advise clients accurately and helps operators track platform performance.' },
    ],
    steps: [
      { step: '01', title: 'Portal Setup & Agent Onboarding', desc: 'We configure your portal with your brand, listing categories (residential, commercial, plots), geographic coverage, and agent roster.', detail: 'Takes 3–5 days. Requires brand assets and list of initial agents/developers.' },
      { step: '02', title: 'Property Data Import', desc: 'Import your initial property listings — photos, descriptions, prices, locations, and amenities — via CSV or integration with existing MLS/listing systems.', detail: 'Takes 2–5 days. Bulk import via CSV or via Google Sheets template.' },
      { step: '03', title: 'CRM & Lead Flow Configuration', desc: 'Set up lead routing rules, agent assignment logic, follow-up automation sequences, and WhatsApp/email notification templates.', detail: 'Takes 2–3 days. Configure based on your team structure and response SLAs.' },
      { step: '04', title: 'SEO & Launch', desc: 'Configure SEO metadata, Google Ads pixel, Facebook Pixel, and launch with 30-day monitoring of lead volume, conversion rates, and agent activity.', detail: 'Takes 2–3 days. Includes initial SEO audit and on-page optimisation.' },
    ],
    techStack: [
      { category: 'Frontend', items: ['Next.js (Portal)', 'React Native (Agent App)', 'PWA Support'] },
      { category: 'Backend', items: ['Node.js', 'GraphQL API', 'Python (AI Search)'] },
      { category: 'Search & AI', items: ['Elasticsearch', 'Semantic Search (BERT)', 'Recommendation Engine'] },
      { category: 'Database', items: ['PostgreSQL (Listings/CRM)', 'MongoDB (Media)', 'Redis (Sessions)'] },
      { category: 'Maps & Tours', items: ['Google Maps API', 'Matterport API', '360° Photo SDK'] },
      { category: 'Integrations', items: ['WhatsApp Business API', 'Razorpay (Deposits)', 'RERA API', 'Home Loan APIs'] },
    ],
    stats: [
      { value: '360°', label: 'Virtual tour support', icon: Monitor },
      { value: '45%', label: 'Fewer unqualified site visits', icon: TrendingUp },
      { value: 'AI', label: 'NLP property search', icon: Star },
      { value: '5–8 wk', label: 'Launch timeline', icon: Clock },
    ],
    useCases: [
      { icon: 'startup', title: 'PropTech Startups', desc: 'Launch a fully featured property marketplace for any city, tier, or niche — residential, commercial, luxury, or affordable housing — without building technology from scratch.', metric: 'Full portal live in 5–8 weeks vs 12+ months custom build' },
      { icon: 'enterprise', title: 'Real Estate Developers', desc: 'Build a branded project portal with virtual tours, payment milestone tracking, RERA compliance pages, and direct buyer inquiry management — reducing dependence on third-party listing portals.', metric: '30% more direct leads vs portal-only listing' },
      { icon: 'agency', title: 'Real Estate Agencies & Brokerages', desc: 'Give your agents a professional portal to showcase listings, manage leads, and track their pipeline — while the admin dashboard monitors team performance, lead response times, and revenue.', metric: '2× more deals closed per agent per quarter' },
    ],
    deployment: {
      timeline: '5–8 weeks to full portal launch including mobile app submission',
      customisation: 'Full white-label — your brand, domain, and app store listings. Listing categories, search filters, and CRM fields configurable without code',
      support: '6 months post-launch support. Monthly SEO and lead quality reviews',
      hosting: 'AWS-hosted with image CDN for fast property photo delivery globally. 99.9% uptime SLA',
    },
    faqs: [
      { question: 'Can both property listings and project (new construction) listings coexist on the platform?', answer: 'Yes. The platform handles resale properties listed by agents, rental listings, and new developer projects — each with different listing templates, detail pages, and workflows. Developer projects get dedicated showcase pages with floor plan galleries, construction progress updates, and RERA compliance sections.' },
      { question: 'How does the AI search work for property queries?', answer: 'The search engine uses a combination of keyword matching and semantic search (BERT-based embeddings) to understand natural language queries. A query like "spacious flat near metro with parking below 1 crore" is matched against property attributes including description, location tags, amenities, and price range — returning the most relevant results rather than just keyword matches.' },
      { question: 'Is the agent CRM available as a mobile app?', answer: 'Yes. Agents get a full-featured iOS and Android app to manage their leads, view property details, add site visit notes, update deal stages, and get push notification alerts for new enquiries — all from their phone. The app works offline for areas with poor connectivity.' },
      { question: 'Does it support WhatsApp lead notifications for agents?', answer: 'Yes. When a new enquiry comes in for a property, the assigned agent receives an instant WhatsApp notification with the buyer\'s name, contact, query, and property details — allowing immediate follow-up without logging into the dashboard.' },
      { question: 'Can we integrate a home loan calculator and connect with bank partners?', answer: 'Yes. The EMI calculator on each listing is connected to configurable interest rate and tenure inputs. For deeper integration, we connect with home loan partner APIs (HDFC, SBI, Axis via aggregators like LoanTap or BankBazaar) so buyers can get a pre-qualification estimate without leaving your platform.' },
      { question: 'Does the platform generate leads or just manage existing ones?', answer: 'Both. The portal attracts organic search traffic through SEO-optimised listing pages. It also integrates with Google Ads and Facebook Ads for paid lead generation — leads from both channels flow directly into the CRM. Lead source tracking shows ROI per channel so you can optimise your marketing spend.' },
    ],
    deliverables: ['Property Listing Web Portal (SEO-optimised)', 'Agent Mobile App (iOS & Android)', 'Admin & Analytics Dashboard', 'Agent CRM with Lead Pipeline Management', 'AI Property Search & Recommendation Engine', 'Full Source Code & Integration Documentation'],
  },

  // ── AI Job Seeker Platform ────────────────────────────────────────────────────
  {
    id: 'job-seeker',
    tag: 'AI JOB PLATFORM',
    accentColor: '#6366f1',
    title: 'AI Job Seeker & Recruitment Platform',
    tagline: 'Launch a smart job portal for seekers, employers & agencies in 4–6 weeks',
    description: 'Full-stack AI job platform with smart resume builder, mock interview coach, job matching, application tracking, employer ATS dashboard, and skill gap analysis.',
    longDescription: 'The job market is more competitive than ever — but most job portals are still stuck in 2010. Our AI Job Seeker & Recruitment Platform gives candidates the tools to stand out: an AI that rewrites their resume to match any job description, a voice-based interview coach that simulates real interviews and scores their answers, and a matching engine that surfaces only the jobs they actually qualify for. On the employer side, recruiters get an ATS with AI resume scoring, structured interview scheduling, and hiring analytics. Whether you\'re building a niche job board, a campus placement portal, or a full-scale recruitment marketplace — this platform launches in 4–6 weeks.',
    heroImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200',
    productImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    gallery: [
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80',
    ],
    featureDetails: [
      { title: 'AI Resume Builder & JD Optimizer', icon: Wand2, desc: 'Job seekers describe their experience in plain language and the AI generates a professional, ATS-optimised resume. Paste any job description and the AI rewrites the resume using the exact keywords and phrases from the JD — increasing recruiter callback rates by up to 3×.' },
      { title: 'Smart Semantic Job Matching', icon: Zap, desc: 'Vector embedding engine converts candidate profiles and job descriptions into semantic representations and ranks every job by match score. Surfaces roles the candidate actually qualifies for — filtering out irrelevant listings without keyword-only matching.' },
      { title: 'AI Mock Interview Coach', icon: Mic, desc: 'Candidates practice with an AI interviewer that asks role-specific questions (HR, technical, behavioral), listens to voice or text answers, and gives instant feedback on content quality, clarity, and confidence. Supports STAR-format, coding concept, and domain knowledge rounds.' },
      { title: 'Employer ATS & Recruiter Dashboard', icon: Users, desc: 'Employers post jobs, receive applications, and manage hiring pipelines from a self-service dashboard. AI auto-scores and ranks incoming resumes against the JD. Calendar-synced interview scheduling, structured scorecards, and automated candidate communication built in.' },
      { title: 'Skill Gap Analysis & Upskilling', icon: TrendingUp, desc: 'After matching candidates to their target roles, the AI identifies exactly which skills are missing and suggests curated free and paid learning resources to close each gap. Candidates track their employability score as they upskill over time.' },
      { title: 'Application Tracker & Status Hub', icon: BarChart3, desc: 'Candidates manage every application from one dashboard — current status, next steps, interview dates, recruiter contact, and follow-up reminders. WhatsApp and email notifications fire automatically at each pipeline stage without manual follow-up.' },
    ],
    steps: [
      { step: '01', title: 'Platform Setup & Branding', desc: 'We configure your job portal with your brand, job categories, location settings, and subscription or freemium monetisation model.', detail: 'Takes 3–5 days. Requires brand assets, target job categories, and monetisation decision.' },
      { step: '02', title: 'AI Engine Configuration', desc: 'Resume scoring models, semantic job matching engine, and interview coach question banks are configured for your target job market and industries.', detail: 'Takes 3–5 days. Sample job descriptions and resumes used for fine-tuning match quality.' },
      { step: '03', title: 'Employer & Seeker Onboarding Flows', desc: 'Employer portal setup, job posting templates, ATS pipeline stages, and job seeker profile + resume upload flows are configured and tested.', detail: 'Takes 2–3 days. Includes employer onboarding guide and candidate app walkthrough.' },
      { step: '04', title: 'Testing & Go Live', desc: 'End-to-end testing of matching engine, resume builder, ATS, and interview coach. App store submissions and web deployment with 30-day post-launch monitoring.', detail: 'Takes 2–3 days. Your team reviews the full seeker and employer flows before launch.' },
    ],
    techStack: [
      { category: 'Frontend', items: ['React.js (Portal)', 'React Native (iOS/Android)', 'Next.js (Landing)'] },
      { category: 'Backend', items: ['Node.js', 'Python (FastAPI)', 'GraphQL API'] },
      { category: 'AI & NLP', items: ['OpenAI GPT-4o', 'LangChain', 'Sentence Transformers', 'Pinecone (Vector DB)'] },
      { category: 'Search & Matching', items: ['Elasticsearch', 'Semantic Similarity', 'Cosine Ranking'] },
      { category: 'Database', items: ['PostgreSQL (Core)', 'MongoDB (Profiles)', 'Redis (Cache)'] },
      { category: 'Integrations', items: ['LinkedIn API', 'WhatsApp Business API', 'Google Calendar', 'AWS S3 (Resumes)'] },
    ],
    stats: [
      { value: '3×', label: 'More callbacks with AI-optimised resume', icon: TrendingUp },
      { value: '60%', label: 'Faster time-to-hire for employers', icon: Clock },
      { value: 'AI', label: 'Resume scoring & semantic matching', icon: Zap },
      { value: '2-sided', label: 'Seeker + Employer marketplace', icon: Users },
    ],
    useCases: [
      { icon: 'startup', title: 'Niche Job Boards', desc: 'Launch a focused job board for a specific industry — tech, healthcare, design, legal, or finance. AI matching serves specialised candidates and employers who can\'t find the right talent on generic platforms like Naukri or LinkedIn.', metric: 'Full platform live in 4–6 weeks' },
      { icon: 'enterprise', title: 'Staffing & Recruitment Agencies', desc: 'Give your recruiters an AI-powered ATS that automatically screens, scores, and ranks every applicant against the JD — so your team spends time only on the top 10%, not reading 500 resumes.', metric: '60% reduction in time-to-hire' },
      { icon: 'agency', title: 'Universities & Campus Placement Cells', desc: 'Launch a branded campus placement platform connecting students with on-campus and off-campus recruiters — with AI resume building and mock interviews to prepare every student, not just the top 20%.', metric: '3× more students placed per placement season' },
    ],
    deployment: {
      timeline: '4–6 weeks to full launch including mobile app store submissions',
      customisation: 'Full white-label — your brand, domain, and app store listings. Job categories, ATS pipeline stages, and matching weights all configurable without code',
      support: '6 months post-launch support. AI resume scoring calibration and match quality reviews included',
      hosting: 'AWS-hosted with Elasticsearch cluster managed. Auto-scaling for peak periods such as campus placement season',
    },
    faqs: [
      { question: 'Can the AI really write a resume good enough to pass ATS systems?', answer: 'Yes. The AI resume builder generates resumes in clean, ATS-parseable formats — no tables, graphics, or columns that confuse parsers. When the job seeker pastes a job description, the AI rewrites their resume using the exact keywords and phrases from the JD, matching the language recruiters and ATS systems are looking for. In testing, AI-optimised resumes had 3× more recruiter callbacks than unoptimised versions from the same candidates.' },
      { question: 'How does the job matching engine work?', answer: 'We use semantic matching — not just keyword matching. Both the candidate\'s profile and each job description are converted into vector embeddings using sentence transformers, then ranked by cosine similarity score. This means a candidate with "built Python data pipelines" will correctly match a job asking for "data engineering experience" even if the exact keywords differ. Match scores are shown as percentages with explanations so candidates understand why a role is or isn\'t recommended.' },
      { question: 'Can employers post jobs and manage hiring independently?', answer: 'Yes. Employers get a self-service portal to post jobs, set screening questions, review AI-ranked applicant lists, and schedule interviews with Google Calendar sync. They manage candidates through configurable pipeline stages — Applied → Shortlisted → Interviewed → Offered → Hired. Automated rejection emails, interview reminders, and follow-up sequences are all configurable without contacting you.' },
      { question: 'Does the AI interview coach work for technical roles?', answer: 'Yes. The interview coach has separate question banks for HR (behavioral, STAR-format), technical (role-specific coding concepts and system design), and domain knowledge rounds. For software engineering roles, it asks architecture and coding-concept questions and evaluates the quality and completeness of the verbal explanation. For non-technical roles, it focuses on situational judgment and behavioural responses.' },
      { question: 'Can this be white-labeled for a university campus placement cell?', answer: 'Yes. The campus placement module includes student profile creation with academic records, an employer portal for on-campus drives, bulk application management, a placement coordinator dashboard, offer letter tracking, and post-placement analytics — placement percentage by department, average package, year-over-year comparisons. We can also integrate with existing student management systems via API.' },
      { question: 'What exactly is included in the deliverables?', answer: 'You receive: Job Seeker Web Portal and iOS/Android App, Employer & Recruiter ATS Dashboard, AI Resume Builder and JD Optimiser, AI Mock Interview Coach (voice + text), Smart Job Matching and Skill Gap Engine, and an Admin Analytics Dashboard. Full source code is included under enterprise licensing. All candidate data, employer data, and platform analytics are owned entirely by you.' },
    ],
    deliverables: [
      'Job Seeker Web Portal & Mobile App (iOS & Android)',
      'Employer / Recruiter ATS Dashboard',
      'AI Resume Builder & JD-Optimisation Engine',
      'AI Mock Interview Coach (Voice & Text)',
      'Smart Job Matching & Skill Gap Analysis Engine',
      'Admin Analytics & Placement Reporting Dashboard',
    ],
  },

  // ── CRM & Sales Automation Suite ─────────────────────────────────────────────
  {
    id: 'crm-sales',
    tag: 'CRM & SALES',
    accentColor: '#3b82f6',
    title: 'CRM & Sales Automation Suite',
    tagline: 'Close more deals faster — your entire sales engine in one platform',
    description: 'Full-stack CRM with visual pipeline, automated follow-ups, lead scoring, quotation generator, team collaboration, WhatsApp & email integration, and sales forecasting.',
    longDescription: 'Most sales teams lose deals not because their product is weak — but because leads go cold while reps are busy updating spreadsheets. Our CRM & Sales Automation Suite eliminates every manual sales task: leads are captured automatically from every channel, follow-up sequences fire on schedule, quotations are generated in one click, and managers see real-time pipeline health without chasing their team for updates. Built for sales teams of 2 to 200, it replaces 5 disconnected tools with one platform — and pays for itself within the first closed deal.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    productImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80',
    ],
    featureDetails: [
      {
        title: 'Visual Sales Pipeline',
        icon: BarChart3,
        desc: 'Drag-and-drop Kanban pipeline shows every deal by stage — from first contact to closed-won. Each card shows deal value, owner, days in stage, and next action. Managers see the entire team\'s pipeline at a glance; reps see only their own. Custom pipeline stages configured to your exact sales process.',
      },
      {
        title: 'Automated Follow-up Sequences',
        icon: Zap,
        desc: 'Define multi-step follow-up sequences — email on Day 1, WhatsApp on Day 3, call reminder on Day 7 — that fire automatically when a lead enters a stage or goes cold. Sequences pause when a lead replies. No lead goes untouched because a rep forgot to follow up.',
      },
      {
        title: 'Lead Capture from Every Channel',
        icon: Database,
        desc: 'Leads from website forms, WhatsApp, Facebook Lead Ads, Instagram, Indiamart, and manual entry all flow into one unified inbox — with source tracking. AI automatically deduplicates contacts and merges leads from the same company.',
      },
      {
        title: 'Instant Quotation Generator',
        icon: Shield,
        desc: 'Reps generate branded PDF quotations in under 60 seconds — selecting products or services from a pre-built catalogue, adding discounts, and sending via email or WhatsApp directly from the CRM. Quote status (sent, viewed, accepted, rejected) is tracked automatically.',
      },
      {
        title: 'AI Deal Scoring & Forecasting',
        icon: TrendingUp,
        desc: 'ML model scores every active deal from 1–100 based on engagement signals, deal age, communication frequency, and historical conversion data. Sales forecast shows expected revenue for the month, quarter, and year — broken down by rep, product, and region.',
      },
      {
        title: 'Full Communication History',
        icon: MessageSquare,
        desc: 'Every email, WhatsApp message, call log, meeting note, and document shared with a contact is stored in a single timeline. New reps picking up a deal see the entire relationship history instantly — no more "what did we discuss last time?" moments.',
      },
    ],
    steps: [
      {
        step: '01',
        title: 'Pipeline & Team Setup',
        desc: 'We configure your sales pipeline stages, team hierarchy, role-based permissions, and lead routing rules to match your exact sales process.',
        detail: 'Takes 2–3 days. Requires your current pipeline stages and team org chart.',
      },
      {
        step: '02',
        title: 'Lead Source Integration',
        desc: 'We connect all your lead sources — website forms, WhatsApp Business, Facebook/Instagram Lead Ads, Indiamart, and email — so every lead flows in automatically.',
        detail: 'Takes 2–4 days. Requires API access to each lead source and form/page credentials.',
      },
      {
        step: '03',
        title: 'Automation & Sequence Setup',
        desc: 'We build your follow-up sequences, quotation templates, email/WhatsApp templates, and notification rules. AI scoring model is calibrated on your historical deal data.',
        detail: 'Takes 2–3 days. Requires sample quotations and past deal data for AI training.',
      },
      {
        step: '04',
        title: 'Team Training & Go Live',
        desc: 'We train your sales team and managers (separate sessions), migrate existing contacts and deals, and go live with 30-day monitoring and weekly pipeline health reviews.',
        detail: 'Takes 1–2 days. Data migration from Excel, old CRM, or spreadsheets included.',
      },
    ],
    techStack: [
      { category: 'Frontend', items: ['React.js (Web CRM)', 'React Native (Mobile App)', 'Next.js (Admin)'] },
      { category: 'Backend', items: ['Node.js', 'Laravel (API)', 'Redis (Queue & Cache)'] },
      { category: 'AI & Scoring', items: ['Python (ML)', 'Scikit-learn (Deal Scoring)', 'OpenAI (Email Drafts)'] },
      { category: 'Database', items: ['MySQL (Core CRM)', 'PostgreSQL (Analytics)', 'Elasticsearch (Search)'] },
      { category: 'Communication', items: ['WhatsApp Business API', 'AWS SES (Email)', 'Twilio (SMS/Calls)'] },
      { category: 'Integrations', items: ['Facebook Lead Ads API', 'Indiamart API', 'Google Calendar', 'Razorpay (Payments)'] },
    ],
    stats: [
      { value: '40%', label: 'Faster deal closure', icon: TrendingUp },
      { value: '3×', label: 'Lead-to-conversion rate improvement', icon: Zap },
      { value: '360°', label: 'Full customer view per contact', icon: Activity },
      { value: '7–14d', label: 'Launch timeline', icon: Clock },
    ],
    useCases: [
      {
        icon: 'startup',
        title: 'Growing Sales Teams (2–50 Reps)',
        desc: 'Replace WhatsApp groups and Excel trackers with a proper CRM. Every rep knows their next action, every lead is followed up, and the founder can see pipeline health without calling anyone.',
        metric: '3× more deals closed with the same team size',
      },
      {
        icon: 'enterprise',
        title: 'Enterprises with Complex Sales Cycles',
        desc: 'Multi-stage approval workflows, territory management, team-based pipeline views, and integration with ERP and billing systems for a seamless lead-to-invoice process.',
        metric: '40% reduction in average sales cycle length',
      },
      {
        icon: 'agency',
        title: 'Agencies & Service Businesses',
        desc: 'Manage proposals, follow-ups, client onboarding, and retainer renewals in one place. Quotation generator creates branded proposals in seconds. Client communication history prevents misunderstandings.',
        metric: '60% less time on admin, more time selling',
      },
    ],
    deployment: {
      timeline: '7–14 days from kickoff to fully configured go-live',
      customisation: 'Pipeline stages, lead sources, quotation templates, email/WhatsApp sequences, and role permissions all customised to your business process. Full white-label available',
      support: '30-day post-launch monitoring with weekly pipeline reviews. Monthly automation audit and sequence optimisation',
      hosting: 'Cloud-hosted on AWS. Daily automated backups. SOC 2 compliant data handling. Mobile app on iOS and Android app stores',
    },
    faqs: [
      {
        question: 'Can it capture leads automatically from WhatsApp, Facebook, and our website?',
        answer: 'Yes. We integrate with WhatsApp Business API (so every inbound WhatsApp message creates a lead), Facebook and Instagram Lead Ads (leads flow in the moment the form is submitted), website contact forms via webhook, and Indiamart enquiries. All sources are tagged so you know which channel drives the best leads. Manual lead entry and CSV import are also supported.',
      },
      {
        question: 'How does the automated follow-up sequence work?',
        answer: 'You define a sequence once — e.g., "Email on Day 1, WhatsApp on Day 3, call reminder on Day 5, follow-up email on Day 10." The CRM fires each step automatically when a lead enters the assigned stage. Sequences pause automatically if the lead replies or moves to the next stage, so you never send a follow-up to someone who already responded. You can have different sequences per lead source, industry, or product line.',
      },
      {
        question: 'Can sales reps use it on mobile while visiting clients?',
        answer: 'Yes. A full-featured iOS and Android mobile app is included. Reps can view their pipeline, log call notes by voice, send WhatsApp messages, generate and send quotations, and update deal stages — all from their phone. The app works offline for note-taking and syncs when connectivity is restored.',
      },
      {
        question: 'How does the AI deal scoring work?',
        answer: 'The ML model is trained on your historical deals and scores each active deal from 1–100. It considers factors like days since last contact, number of touchpoints, deal size, lead source, response time, and stage velocity. Deals with falling scores are flagged automatically so managers can intervene before they go cold. The model improves as more deals are closed and the outcomes are fed back.',
      },
      {
        question: 'Can it generate quotations and invoices?',
        answer: 'Yes. The quotation generator lets reps select products/services from a pre-configured catalogue, add quantities, apply discounts, add tax, and generate a branded PDF — all in under 60 seconds. The quotation is sent via email or WhatsApp directly from the CRM and tracked (sent, opened, accepted, rejected). For invoicing, we integrate with Razorpay and popular accounting tools like Tally and Zoho Books.',
      },
      {
        question: 'Can we migrate our existing leads and deals from Excel or another CRM?',
        answer: 'Yes. We migrate your existing contacts, leads, deal history, and notes from Excel, Google Sheets, HubSpot, Zoho CRM, Freshsales, or any CRM that exports to CSV. The migration includes deduplication, field mapping, and a validation review before import. Historical data is available from day one so reps don\'t lose context on ongoing deals.',
      },
    ],
    deliverables: [
      'Web CRM Dashboard (Full Pipeline & Analytics)',
      'Mobile Sales App for Reps (iOS & Android)',
      'Automated Follow-up Sequence Engine',
      'Quotation & Invoice Generator',
      'AI Deal Scoring & Sales Forecasting Module',
      'Full Source Code & Integration Documentation',
    ],
  },
  // ── Digital Wallet & Payment ──────────────────────────────────────────────────
  {
    id: 'digital-wallet',
    tag: 'FINTECH WALLET',
    accentColor: '#0ea5e9',
    title: 'Digital Wallet & Payment Gateway',
    tagline: 'Launch a secure, localized payment ecosystem in 4–6 weeks',
    description: 'End-to-end digital wallet featuring P2P transfers, QR payments, merchant APIs, and a clean, premium dashboard for both mobile and laptop views.',
    longDescription: 'Create a closed-loop payment ecosystem or a city-wide digital wallet (perfect for localized delivery or service platforms). We focus strictly on a premium, clutter-free SaaS aesthetic—optimized for both mobile and laptop views without any unnecessary human stock photography getting in the way of your data. The platform includes secure P2P transfers, merchant QR code payments, automated reconciliation, and bank-grade encryption.',
    heroImage: 'https://images.unsplash.com/photo-1613243555988-441166d4d6fd?w=900&q=80',
    productImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613243555988-441166d4d6fd?w=900&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80',
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=900&q=80',
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900&q=80'
    ],
    featureDetails: [
      { title: 'P2P & QR Code Payments', icon: Zap, desc: 'Instant peer-to-peer transfers and dynamic QR code generation for merchant scanning. Lightning-fast transaction processing.' },
      { title: 'Premium SaaS Dashboard', icon: Monitor, desc: 'Clean, unclustered admin and merchant dashboards built for laptop and mobile views. Track reconciliation and cash flow with zero visual noise.' },
      { title: 'Merchant API Gateway', icon: Code2, desc: 'Developer-friendly REST APIs for seamless integration into existing platforms, delivery apps, or e-commerce storefronts.' },
      { title: 'Bank-Grade Security', icon: Shield, desc: 'End-to-end encryption, tokenization, and multi-factor authentication to ensure every transaction is completely secure and compliant.' },
      { title: 'Automated Reconciliation', icon: Database, desc: 'Automated settlement and ledger management ensuring merchants get paid accurately and on time without manual spreadsheet work.' },
      { title: 'Analytics & Reporting', icon: BarChart3, desc: 'Real-time transaction volume tracking, revenue analytics, and user growth metrics visualized through high-end charts.' }
    ],
    steps: [
      { step: '01', title: 'Ecosystem Setup', desc: 'Define your wallet limits, currency rules, and UI branding to match your localized app ecosystem.', detail: 'Takes 3–5 days. Focuses on premium color palettes and typography.' },
      { step: '02', title: 'KYC & Security Integration', desc: 'Implement user verification flows and link with banking partners for smooth fiat-to-wallet top-ups.', detail: 'Takes 5–7 days. Integrates industry-standard KYC APIs.' },
      { step: '03', title: 'Merchant Onboarding', desc: 'Set up the merchant portal and generate initial QR codes for your offline and online partner network.', detail: 'Takes 3–4 days. Easy bulk import for existing merchants.' },
      { step: '04', title: 'Go Live', desc: 'Deploy the wallet app and web dashboards to production with full real-time monitoring enabled.', detail: 'Takes 2–3 days. Apps submitted to respective stores.' }
    ],
    techStack: [
      { category: 'Frontend', items: ['React.js (Web Admin)', 'Vite', 'React Native (Mobile)'] },
      { category: 'Backend', items: ['Node.js', 'Express', 'GraphQL API'] },
      { category: 'Database', items: ['MongoDB (Transactions)', 'Redis (Caching)'] },
      { category: 'Security', items: ['JWT Auth', 'AES-256 Encryption', 'PCI-DSS Compliant'] },
      { category: 'Integrations', items: ['Banking APIs', 'KYC Providers', 'SMS/OTP Gateways'] },
      { category: 'Infrastructure', items: ['AWS', 'Docker', 'Kubernetes'] }
    ],
    stats: [
      { value: '<100ms', label: 'Transaction Speed', icon: Zap },
      { value: '256-bit', label: 'Encryption Standard', icon: Shield },
      { value: 'Seamless', label: 'API Integration', icon: Code2 },
      { value: '4–6 wk', label: 'Launch Timeline', icon: Clock }
    ],
    useCases: [
      { icon: 'startup', title: 'Localized Delivery Ecosystems', desc: 'Perfect for city-specific delivery apps wanting to keep transactions within their own loop to avoid heavy third-party gateway fees.', metric: 'Zero external gateway dependency' },
      { icon: 'enterprise', title: 'Franchise Networks', desc: 'Provide a unified payment experience across all franchise outlets with centralized reconciliation and instant settlements.', metric: '100% automated reconciliation' },
      { icon: 'agency', title: 'Service Marketplaces', desc: 'Enable customers to load wallets and pay for home services instantly, reducing cart abandonment and payment failures.', metric: '40% reduction in failed payments' }
    ],
    deployment: {
      timeline: '4–6 weeks to full functional deployment',
      customisation: 'Fully white-labeled premium UI matching your brand aesthetic, optimized for mobile and laptop screens.',
      support: 'Ongoing maintenance, security patching, and technical support post-launch.',
      hosting: 'Secure private cloud deployment with scaling capabilities.'
    },
    faqs: [
      { question: 'Is the dashboard optimized for all devices?', answer: 'Yes, the UI is built entirely for premium mobile and laptop views. We focus on clean data presentation without any distracting human imagery or clutter.' },
      { question: 'Can this integrate with my existing delivery app?', answer: 'Absolutely. We provide a robust Node.js backend and well-documented APIs to connect the wallet directly into your current React or React Native platforms.' },
      { question: 'How do users top up their wallets?', answer: 'Users can link their bank accounts, use credit/debit cards, or leverage UPI (where applicable) to top up their wallet balance instantly.' },
      { question: 'Is the transaction data secure?', answer: 'We use AES-256 encryption and follow strict PCI-DSS compliance guidelines to ensure all data and transactions are fully protected.' }
    ],
    deliverables: [
      'Consumer Wallet App (iOS & Android)',
      'Merchant App & Web Portal',
      'Premium Admin Dashboard',
      'REST APIs & Documentation',
      'Node.js Payment Engine',
      'Full Source Code'
    ]
  },
  // ── Telemedicine & Medical Services ─────────────────────────────────────────────
  {
    id: 'telemedicine',
    tag: 'MEDICAL SERVICES',
    accentColor: '#06b6d4',
    title: 'Telemedicine & Medical Services Suite',
    tagline: 'Complete telehealth, diagnostics, and equipment platform in 4–6 weeks',
    description: 'Online consultations, diagnostic report management, medical equipment rentals, e-prescriptions, and complete digital clinic operations.',
    longDescription: 'Move beyond basic clinic management. This comprehensive platform is designed for general medical services, diagnostic centers, and medical equipment providers. It combines HD video consultations, seamless diagnostic lab integrations, and a dedicated module for medical equipment rentals. With a premium, unclustered interface designed strictly for mobile and laptop screens, you get full control over patient records and service delivery—powered by a robust, highly scalable architecture.',
    heroImage: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?auto=format&fit=crop&q=80&w=1200',
    productImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=900&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80'
    ],
    featureDetails: [
      { title: 'HD Video Consultations', icon: Monitor, desc: 'WebRTC-powered encrypted video calls for virtual check-ups and diagnostic reviews. Works seamlessly on web and mobile browsers with a clean UI.' },
      { title: 'Equipment & Diagnostics', icon: Package, desc: 'Dedicated workflows for medical equipment rentals and diagnostic test bookings. Track inventory, schedule deliveries, and manage lab results from a single dashboard.' },
      { title: 'Digital Patient Records (EMR)', icon: Database, desc: 'Centralized, HIPAA-compliant patient histories, prescriptions, and lab reports. Accessible instantly with zero visual clutter.' },
      { title: 'Smart Appointment Scheduling', icon: Clock, desc: 'Real-time booking system for telehealth sessions, in-person diagnostic tests, or home equipment delivery slots.' },
      { title: 'E-Prescription System', icon: Shield, desc: 'Secure, digitally signed prescriptions sent instantly to patients or partner pharmacies via SMS/WhatsApp.' },
      { title: 'Lab Report Integration', icon: Activity, desc: 'Automated ingestion of diagnostic reports. Patients are notified the moment their lab results are securely uploaded to their dashboard.' }
    ],
    steps: [
      { step: '01', title: 'Platform & Brand Setup', desc: 'We configure your platform colors, typography, and medical service categories (consultations, diagnostics, equipment).', detail: 'Takes 3–5 days. Premium SaaS aesthetic guaranteed.' },
      { step: '02', title: 'Inventory & Specialist Onboarding', desc: 'Import your medical equipment inventory, lab test catalogs, and practitioner schedules into the system.', detail: 'Takes 3–7 days depending on catalog size.' },
      { step: '03', title: 'Security & Compliance Check', desc: 'Ensure all data flows meet strict health data standards with end-to-end encryption for patient records and payments.', detail: 'Takes 2–3 days. Secure private deployment.' },
      { step: '04', title: 'Launch & Go Live', desc: 'Web apps and mobile apps go live. Full performance monitoring for the first 30 days.', detail: 'Takes 2 days. Seamless app store submissions.' }
    ],
    techStack: [
      { category: 'Frontend', items: ['React.js (Web)', 'React Native (Mobile)', 'Vite'] },
      { category: 'Backend', items: ['Node.js', 'Express', 'WebRTC'] },
      { category: 'Database', items: ['MongoDB (EMR)', 'Redis (Caching)'] },
      { category: 'Security', items: ['HIPAA Compliant', 'AES-256 Encryption', 'JWT Auth'] },
      { category: 'Integrations', items: ['Razorpay/Stripe', 'Lab APIs', 'WhatsApp API'] },
      { category: 'Infrastructure', items: ['AWS', 'Docker', 'S3 Storage'] }
    ],
    stats: [
      { value: 'HIPAA', label: 'Compliant Platform', icon: Shield },
      { value: 'HD', label: 'Encrypted Video', icon: Monitor },
      { value: 'All-in-1', label: 'Diagnostics & Telehealth', icon: Activity },
      { value: '4–6 wk', label: 'Launch Timeline', icon: Clock }
    ],
    useCases: [
      { icon: 'startup', title: 'Diagnostic Centers', desc: 'Manage test bookings, home sample collections, and automated lab report delivery with zero manual paperwork.', metric: '60% faster report delivery' },
      { icon: 'enterprise', title: 'Medical Equipment Providers', desc: 'Streamline the rental and delivery of home care equipment alongside remote medical consultations.', metric: 'Complete inventory visibility' },
      { icon: 'agency', title: 'Health & Wellness Startups', desc: 'White-label the platform to launch a branded, comprehensive medical services app for your local city or region.', metric: 'Launch in just 4 weeks' }
    ],
    deployment: {
      timeline: '4–6 weeks to full functional deployment',
      customisation: 'Fully white-labeled premium UI matching your brand, optimized for laptop and mobile screens.',
      support: '6 months of post-launch support and technical maintenance.',
      hosting: 'HIPAA-compliant private cloud deployment on AWS.'
    },
    faqs: [
      { question: 'Does this platform focus only on hospitals?', answer: 'No, this suite is highly flexible and specifically optimized for general medical services, diagnostic labs, and medical equipment providers, in addition to standard consultations.' },
      { question: 'Are there any human stock photos in the UI templates?', answer: 'Not at all. The interface is strictly designed with clean, premium device and laptop views, focusing entirely on data, schedules, and medical workflows.' },
      { question: 'Can patients book diagnostic tests and rent equipment?', answer: 'Yes, the platform handles standard doctor appointments as well as lab test bookings and medical equipment rental workflows from a single unified patient app.' },
      { question: 'Is the data secure and compliant?', answer: 'Absolutely. The architecture utilizes MongoDB with AES-256 encryption and follows strict healthcare guidelines to ensure patient data is entirely protected.' }
    ],
    deliverables: [
      'Patient Web & Mobile App (iOS & Android)',
      'Practitioner & Lab Dashboard (Web)',
      'Medical Equipment Admin Panel',
      'WebRTC Secure Video Infrastructure',
      'E-Prescription & Lab Report Module',
      'Full Source Code & Documentation'
    ]
  },
  // ── Business ERP & Operations Suite ───────────────────────────────────────────
  {
    id: 'business-erp',
    tag: 'ENTERPRISE ERP',
    accentColor: '#f5a623',
    title: 'Business ERP & Operations Suite',
    tagline: 'Cloud-ready ERP for inventory, HR, billing, and multi-branch management',
    description: 'A complete enterprise resource planning solution to manage inventory, payroll, projects, and reporting from a single, premium cloud-based dashboard.',
    longDescription: 'Replace scattered spreadsheets and disconnected tools with one unified, high-performance platform. Our Business ERP is built with a premium SaaS aesthetic, ensuring zero visual clutter across both laptop and mobile views. Track multi-branch inventory, automate payroll, handle complex approval workflows, and generate real-time financial reports—all backed by a scalable, cloud-native architecture.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    productImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80'
    ],
    featureDetails: [
      { title: 'Inventory & Procurement', icon: Database, desc: 'Real-time stock tracking across multiple branches, automated reorder alerts, and complete vendor procurement workflows.' },
      { title: 'HR & Payroll Module', icon: Layers, desc: 'Manage employee lifecycles, attendance, automated payroll calculations, and compliance reporting without relying on external tools.' },
      { title: 'Project Management', icon: Activity, desc: 'Track project timelines, resource allocation, and budget vs. actuals with high-end visualization tools and Gantt charts.' },
      { title: 'Financial Reporting', icon: BarChart3, desc: 'Generate P&L statements, balance sheets, and custom financial reports instantly with a clean, actionable UI.' },
      { title: 'Multi-branch Support', icon: Globe, desc: 'Seamlessly connect and monitor different physical locations or regional offices under one unified admin panel.' },
      { title: 'Automated Approval Workflows', icon: CheckCircle2, desc: 'Design multi-level approval chains for purchase orders, leaves, and expenses to ensure operational compliance.' }
    ],
    steps: [
      { step: '01', title: 'Module Configuration', desc: 'Enable only the modules you need (e.g., Inventory, HR, Finance) and configure role-based permissions.', detail: 'Takes 3–5 days. Tailored to your organizational structure.' },
      { step: '02', title: 'Data Migration', desc: 'Securely import your existing data from legacy systems, Excel, or Tally using our guided bulk-import tools.', detail: 'Takes 5–10 days. Validation scripts ensure data integrity.' },
      { step: '03', title: 'Workflow Setup', desc: 'Define your custom approval hierarchies, multi-branch logic, and automated notification triggers.', detail: 'Takes 3–4 days. Fully customizable logic engine.' },
      { step: '04', title: 'Testing & Rollout', desc: 'Run sandbox testing with department heads before launching the live system across the company.', detail: 'Takes 1–2 weeks for smooth transition.' }
    ],
    techStack: [
      { category: 'Frontend', items: ['React.js (Web)', 'Vite', 'React Native (Mobile)'] },
      { category: 'Backend', items: ['Node.js', 'Express', 'GraphQL API'] },
      { category: 'Database', items: ['MongoDB (Core)', 'Redis (Caching)'] },
      { category: 'Reporting', items: ['Recharts', 'PDF Generation', 'Excel Export'] },
      { category: 'Integrations', items: ['Bank APIs', 'Payment Gateways', 'Email/WhatsApp'] },
      { category: 'Infrastructure', items: ['AWS', 'Docker', 'Automated Backups'] }
    ],
    stats: [
      { value: '12+', label: 'Core Modules Included', icon: Layers },
      { value: '60%', label: 'Ops Cost Reduction', icon: TrendingUp },
      { value: 'Real-time', label: 'Data Syncing', icon: Activity },
      { value: 'Cloud', label: 'Ready Architecture', icon: Database }
    ],
    useCases: [
      { icon: 'startup', title: 'Growing SMEs', desc: 'Replace messy spreadsheets and disconnected single-purpose tools with one integrated, premium business platform.', metric: 'All operations in 1 login' },
      { icon: 'enterprise', title: 'Mid-Market Enterprises', desc: 'Manage multiple branches, complex departments, and multi-tier approval chains securely in one centralized system.', metric: '100% operational visibility' },
      { icon: 'agency', title: 'Manufacturing & Retail', desc: 'Connect production, warehouse inventory, procurement, and billing end-to-end to prevent stockouts and delays.', metric: 'Zero inventory discrepancies' }
    ],
    deployment: {
      timeline: '4–8 weeks for full modular deployment and data migration',
      customisation: 'Fully white-labeled UI tailored to your brand, with custom modules built around your specific business logic.',
      support: 'Dedicated account manager, ongoing maintenance, and regular security patching.',
      hosting: 'Hosted on secure, scalable cloud infrastructure (AWS) with automated daily backups.'
    },
    faqs: [
      { question: 'Is the ERP interface fully optimized for mobile devices?', answer: 'Yes, both the web dashboard for laptops and the mobile views are designed to be clean, premium, and fully functional without any visual clutter.' },
      { question: 'Do the UI designs use any stock photos of people?', answer: 'No, we stick to a strict SaaS aesthetic. You will only see clear data, charts, and device mockups—no distracting human stock photography.' },
      { question: 'Can we migrate our existing data from Tally or Excel?', answer: 'Absolutely. We provide dedicated data migration services and bulk-import tools to smoothly transition your records from legacy software into the new MongoDB database.' },
      { question: 'Can I customize the approval workflows for different departments?', answer: 'Yes, the system includes a dynamic workflow engine allowing you to set custom, multi-level approval chains for HR, finance, and procurement.' }
    ],
    deliverables: [
      'Web ERP Platform (React.js Admin)',
      'Mobile App for Managers (iOS & Android)',
      'Configured Core Modules (HR, Inventory, Finance)',
      'Automated Reporting & Analytics Engine',
      'Data Migration Scripts',
      'Full Source Code & API Documentation'
    ]
  },
  // ── Security & Operations Monitoring ──────────────────────────────────────────
  {
    id: 'security-monitoring',
    tag: 'SECURITY & OPS',
    accentColor: '#4f46e5', // High-tech Indigo
    title: 'AI Security & Operations Monitoring Suite',
    tagline: 'Real-time threat detection and infrastructure tracking in one unified dashboard',
    description: 'Enterprise-grade security monitoring platform featuring real-time anomaly detection, API log tracking, access control, and automated incident alerting.',
    longDescription: 'Protect your digital and physical infrastructure with a platform built for modern ops teams. We strictly designed this with a premium, zero-clutter SaaS aesthetic—optimized entirely for seamless laptop and mobile views without any unnecessary human imagery. Monitor real-time API traffic, detect security anomalies, integrate CCTV/access logs, and trigger automated alerts to your DevOps or Security teams instantly.',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
    productImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&q=80',
      'https://images.unsplash.com/photo-1614064641913-6b70a32eff53?w=900&q=80',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=80'
    ],
    featureDetails: [
      { title: 'Real-Time Threat Detection', icon: Shield, desc: 'AI-driven monitoring of system logs and API traffic to detect DDoS attacks, unauthorized access, and suspicious data exfiltration in milliseconds.' },
      { title: 'Premium Ops Dashboard', icon: Monitor, desc: 'A visually striking, dark-mode optimized dashboard that provides a bird\'s-eye view of your entire infrastructure on both laptop and mobile.' },
      { title: 'Automated Alerting Pipeline', icon: Zap, desc: 'Configure custom threshold triggers to instantly ping your team via WhatsApp, Slack, SMS, or Email when critical events occur.' },
      { title: 'Unified Access Logs', icon: Database, desc: 'Centralize authentication logs, physical access control data, and internal user activity into a single, immutable MongoDB ledger.' },
      { title: 'Infrastructure Health Sync', icon: Activity, desc: 'Monitor server CPU, memory usage, uptime, and latency across all your connected branches or cloud instances dynamically.' },
      { title: 'API & Webhook Integrations', icon: Code2, desc: 'Easily plug in existing firewalls, IoT sensors, or third-party camera systems using our highly adaptable REST APIs.' }
    ],
    steps: [
      { step: '01', title: 'Infrastructure Mapping', desc: 'Connect your cloud servers, APIs, and access points to our ingestion engine.', detail: 'Takes 3–5 days. Secure API key generation and endpoint setup.' },
      { step: '02', title: 'Rule Configuration', desc: 'Define your security thresholds, anomaly parameters, and automated alert routing logic.', detail: 'Takes 2–4 days. Fully customizable via the clean UI.' },
      { step: '03', title: 'Dashboard Deployment', desc: 'Roll out the web and mobile views to your DevOps and Security teams for live monitoring.', detail: 'Takes 1–2 days. Role-based access ensures data privacy.' },
      { step: '04', title: 'Live Threat Monitoring', desc: 'System goes live with real-time log ingestion, active anomaly scanning, and 24/7 automated oversight.', detail: 'Immediate activation post-deployment.' }
    ],
    techStack: [
      { category: 'Frontend', items: ['React.js (Web)', 'Vite', 'React Native (Mobile)'] },
      { category: 'Backend', items: ['Node.js', 'Express', 'WebSocket (Live Feeds)'] },
      { category: 'Database', items: ['MongoDB (Logs/Events)', 'Redis (High-speed caching)'] },
      { category: 'AI & Security', items: ['Python (Anomaly ML)', 'AES-256', 'JWT'] },
      { category: 'Alerting', items: ['Slack API', 'Twilio (SMS)', 'WhatsApp API'] },
      { category: 'Infrastructure', items: ['AWS', 'Docker', 'Elasticsearch (Log Search)'] }
    ],
    stats: [
      { value: '<50ms', label: 'Alert Latency', icon: Zap },
      { value: '24/7', label: 'Continuous Scanning', icon: Activity },
      { value: 'AES-256', label: 'Data Encryption', icon: Shield },
      { value: 'Cloud', label: 'Native Architecture', icon: Database }
    ],
    useCases: [
      { icon: 'startup', title: 'Tech Startups & SaaS', desc: 'Monitor application health, API rate limits, and server uptime without paying massive fees to generic third-party monitoring tools.', metric: 'Zero blind spots' },
      { icon: 'enterprise', title: 'Corporate IT Teams', desc: 'Track physical office access logs alongside digital network security from a single, unclustered admin panel.', metric: '100% unified visibility' },
      { icon: 'agency', title: 'Managed Security Providers', desc: 'White-label this suite to offer premium, branded security monitoring services to your clients.', metric: 'Scales to 100+ clients seamlessly' }
    ],
    deployment: {
      timeline: '3–5 weeks to full active deployment',
      customisation: 'Completely white-labeled dashboard with your brand colors. Configurable alert templates and dashboard widgets.',
      support: 'Continuous security patching, system updates, and dedicated technical maintenance.',
      hosting: 'Deployed on secure private cloud networks (AWS/GCP) tailored to your region’s data residency laws.'
    },
    faqs: [
      { question: 'Is this platform strictly designed without human stock photography?', answer: 'Yes, absolutely. The design philosophy of this module is 100% focused on data, code matrices, hardware grids, and clean UI interfaces for laptop and mobile. Zero visual distraction.' },
      { question: 'Does the monitoring dashboard work on mobile devices?', answer: 'Yes, the React Native mobile app and the responsive web dashboard allow your ops team to monitor critical alerts and system health right from their phones.' },
      { question: 'Can it handle high volumes of API logs?', answer: 'Yes, the backend is built on Node.js and integrates with Elasticsearch and Redis to ingest, cache, and search millions of logs efficiently without slowing down the UI.' },
      { question: 'How do the automated alerts work?', answer: 'You can set specific rules (e.g., "If API fails 10 times in 1 minute"). When triggered, the system instantly sends an alert via WhatsApp, SMS, or Slack to the assigned engineer.' }
    ],
    deliverables: [
      'Command Center Web Dashboard',
      'Mobile Monitoring App (iOS & Android)',
      'Real-time Alerting Engine',
      'API & Log Ingestion Gateway',
      'Anomaly Detection ML Module',
      'Full Source Code & Deployment Docs'
    ]
  },
  // ── Real Estate Management Suite ──────────────────────────────────────────────
  {
    id: 'real-estate-suite',
    tag: 'PROPTECH CRM',
    accentColor: '#8b5cf6', // Premium Violet
    title: 'Premium Real Estate Management Suite',
    tagline: 'End-to-end property, lead, and agency coordination platform',
    description: 'A high-end PropTech suite featuring a secure superadmin vault for property management, agency coordination tools, and data-driven lead tracking.',
    longDescription: 'Manage your entire real estate ecosystem with a platform built for speed and strict hierarchical control. We designed this suite with a pure digital aesthetic—optimized exclusively for mobile and laptop views with zero visual clutter or distracting human stock photos. Core property management and approval features are securely locked behind the superadmin sidebar, ensuring that agents and developers only see the leads and metrics they need to close deals efficiently.',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200', // Clean architecture
    productImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80', // Building/Property
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80', // Architectural geometry
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80', // Empty modern interior
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80' // Dashboard data
    ],
    featureDetails: [
      { title: 'Superadmin Property Vault', icon: Shield, desc: 'Total control over property listings, approvals, and system configurations. Core management options are exclusively isolated in the superadmin sidebar for maximum security.' },
      { title: 'Data-Driven Admin Dashboard', icon: BarChart3, desc: 'Track agent performance, case metrics, and overall revenue using highly interactive and unclustered Recharts-powered dashboards.' },
      { title: 'Agency & Developer Workflows', icon: Layers, desc: 'Dedicated digital panels for real estate agencies and developers to track their specific leads and coordinate site visits without overlapping data.' },
      { title: 'Premium Multi-Device UI', icon: Monitor, desc: 'Strictly designed for flawless execution on laptop and mobile screens. Zero visual noise, just pure data, property specs, and actionable pipelines.' },
      { title: 'Automated Lead Routing', icon: Zap, desc: 'Incoming inquiries from portals and social media are instantly evaluated and assigned to the right agent based on territory or property type.' },
      { title: 'Centralized CRM Ledger', icon: Database, desc: 'Maintain an immutable record of every client interaction, property showing, and document exchange inside a robust MongoDB infrastructure.' }
    ],
    steps: [
      { step: '01', title: 'Hierarchy & Vault Setup', desc: 'Configure the superadmin sidebar, define agency roles, and lock down sensitive property management modules.', detail: 'Takes 2–4 days. Ensures strict data governance.' },
      { step: '02', title: 'Property Data Ingestion', desc: 'Bulk import your existing real estate portfolio, developer leads, and architectural assets via API or CSV.', detail: 'Takes 3–5 days. Handles massive high-res data structures.' },
      { step: '03', title: 'CRM & Routing Configuration', desc: 'Set up automated lead assignment rules, agent performance tracking, and notification triggers.', detail: 'Takes 2–3 days. Custom mapping for your sales pipeline.' },
      { step: '04', title: 'Deployment & Go Live', desc: 'Launch the optimized web and mobile apps to your network of agents, agencies, and developers.', detail: 'Immediate rollout with 24/7 uptime monitoring.' }
    ],
    techStack: [
      { category: 'Frontend', items: ['React.js (Web)', 'Vite', 'React Native (Mobile)'] },
      { category: 'Data Visualization', items: ['Recharts', 'Tailwind CSS', 'Framer Motion'] },
      { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
      { category: 'Database', items: ['MongoDB (Core)', 'Redis (Session Management)'] },
      { category: 'Security', items: ['Role-Based Access Control (RBAC)', 'JWT'] },
      { category: 'Infrastructure', items: ['AWS', 'S3 (Property Media)', 'CloudFront'] }
    ],
    stats: [
      { value: '100%', label: 'Superadmin Control', icon: Shield },
      { value: 'Real-time', label: 'Lead Tracking', icon: Zap },
      { value: 'Zero', label: 'Visual Clutter', icon: Monitor },
      { value: '4–6 wk', label: 'Deployment Time', icon: Clock }
    ],
    useCases: [
      { icon: 'enterprise', title: 'Real Estate Developers', desc: 'Maintain complete authority over multiple housing projects, routing leads dynamically while keeping core management strictly in the admin vault.', metric: 'Centralized portfolio control' },
      { icon: 'agency', title: 'Brokerage Agencies', desc: 'Give your agents a sleek mobile app to track site visits and follow-ups without exposing them to the underlying property configuration settings.', metric: '3x faster deal processing' },
      { icon: 'startup', title: 'PropTech Platforms', desc: 'Launch a scalable marketplace infrastructure capable of handling thousands of listings with distinct developer, agent, and buyer workflows.', metric: 'Enterprise-grade scale' }
    ],
    deployment: {
      timeline: '4–6 weeks to fully configure hierarchy and pipelines',
      customisation: 'Fully white-labeled premium aesthetic. Custom dashboard widgets and strictly mapped role-based access for the sidebar.',
      support: 'Dedicated enterprise support for database scaling and performance tuning.',
      hosting: 'High-availability deployment on AWS with fast media delivery via CDN.'
    },
    faqs: [
      { question: 'Is the property management accessible by everyone?', answer: 'No. To ensure data integrity, all core property management features are strictly located in the superadmin sidebar. Agents and standard users only see the features relevant to their workflow.' },
      { question: 'Does the UI include any human stock photos?', answer: 'Absolutely not. The templates use pure architectural images, blueprints, and clean digital UI mockups optimized for laptop and mobile, avoiding any unnecessary human visual elements.' },
      { question: 'Can the dashboard handle complex data visualization?', answer: 'Yes, the Admin Vault uses Recharts to render high-performance, interactive charts for agent metrics and lead conversions effortlessly.' },
      { question: 'Is there a mobile app included?', answer: 'Yes, the suite includes a React Native mobile application tailored for agents on the field to update leads and track their tasks without the clutter of full administrative controls.' }
    ],
    deliverables: [
      'Superadmin Vault Web Dashboard',
      'Agent & Agency Mobile App (iOS & Android)',
      'Recharts Analytics Engine',
      'Automated Lead Routing Backend',
      'Role-Based Access Control System',
      'Full Source Code & API Docs'
    ]
  }
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

const useCaseIcons = { startup: Rocket, enterprise: Building2, agency: Users }

function SectionLabel({ text, color }: { text: string; color: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-[2px] rounded-full" style={{ background: color }} />
      <span className="text-xs font-bold tracking-widest uppercase" style={{ color }}>{text}</span>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeGallery, setActiveGallery] = useState(0)
  const { openModal } = useModal()

  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white pt-20">
        <p className="text-2xl font-bold text-[#0a1628] mb-4">Product not found</p>
        <Link href="/" className="text-[#f5a623] font-semibold hover:underline">← Back to Home</Link>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #111827 100%)' }}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-[120px]" style={{ background: product.accentColor }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-28 pb-0">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium bg-white/8 border border-white/15 px-4 py-2 rounded-full transition-colors mb-10">
            <ArrowLeft size={15} /> Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="pb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-white text-xs font-black tracking-wider uppercase mb-5" style={{ background: product.accentColor }}>
                {product.tag}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                {product.title}
              </h1>
              <p className="text-base md:text-lg font-semibold mb-4" style={{ color: product.accentColor + 'cc' }}>
                {product.tagline}
              </p>
              <p className="text-white/65 text-base leading-relaxed mb-8 max-w-lg">{product.description}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {product.stats.map((s, i) => {
                  const Icon = s.icon
                  return (
                    <div key={i} className="rounded-2xl px-4 py-3 text-center border border-white/10" style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <Icon size={14} className="mx-auto mb-1" style={{ color: product.accentColor }} />
                      <div className="text-lg font-black text-white">{s.value}</div>
                      <div className="text-white/40 text-[10px] mt-0.5 leading-snug">{s.label}</div>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-wrap gap-3">
                <button onClick={openModal} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all shadow-lg" style={{ background: product.accentColor }}>
                  Request Free Demo <ArrowRight size={15} />
                </button>
                <Link href="/live-demo" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white border border-white/20 hover:bg-white/10 transition-all">
                  Browse All Products <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:flex items-end justify-center">
              <div className="relative">
                <div className="absolute inset-0 blur-2xl opacity-20 rounded-3xl scale-95" style={{ background: product.accentColor }} />
                <img
                  src={product.productImage}
                  alt={product.title}
                  className="relative z-10 w-full max-w-md object-contain drop-shadow-2xl"
                  style={{ maxHeight: '420px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main body ─────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 space-y-20">

        {/* ── Overview ──────────────────────────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <SectionLabel text="Overview" color={product.accentColor} />
            <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-5 leading-tight">
              Everything You Need — Ready to Launch
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">{product.longDescription}</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Launch Timeline', val: product.deployment.timeline.split(' to ')[0] },
                { label: 'Customisation', val: 'Full white-label' },
                { label: 'Post-launch Support', val: product.deployment.support.split('.')[0] },
                { label: 'Hosting', val: product.deployment.hosting.split('.')[0] },
              ].map(item => (
                <div key={item.label} className="rounded-xl p-4 border border-gray-200 bg-gray-50">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{item.label}</div>
                  <div className="font-semibold text-[#0a1628] text-sm">{item.val}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <img src={product.heroImage} alt={product.title} className="w-full h-64 object-cover" />
              <div className="p-5 bg-white">
                <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: product.accentColor }}>Deployment Details</div>
                <div className="space-y-2.5">
                  {[
                    { k: 'Timeline', v: product.deployment.timeline },
                    { k: 'Customisation', v: product.deployment.customisation },
                    { k: 'Support', v: product.deployment.support },
                    { k: 'Hosting', v: product.deployment.hosting },
                  ].map(d => (
                    <div key={d.k} className="flex items-start gap-2.5">
                      <CheckCircle2 size={13} style={{ color: product.accentColor }} className="flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[#0a1628] text-xs">{d.k}: </span>
                        <span className="text-gray-500 text-xs">{d.v}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Feature Details ───────────────────────────────────────────── */}
        <section>
          <SectionLabel text="Features" color={product.accentColor} />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            What&apos;s Inside the Platform
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Every feature is production-ready, configurable, and included in the base deployment — not sold as separate add-ons.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.featureDetails.map((feat, i) => {
              const Icon = feat.icon
              return (
                <div key={i} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all bg-white group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: product.accentColor + '15' }}>
                      <Icon size={18} style={{ color: product.accentColor }} />
                    </div>
                    <h3 className="font-bold text-[#0a1628] text-sm leading-snug">{feat.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── What You Get ──────────────────────────────────────────────── */}
        <section>
          <SectionLabel text="Deliverables" color={product.accentColor} />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            What You Get on Day One
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Every deployment includes these fully functional components — branded, configured, and ready for your users.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.deliverables.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: product.accentColor + '15' }}>
                  <Package size={16} style={{ color: product.accentColor }} />
                </div>
                <span className="text-[#0a1628] font-semibold text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Screenshots Gallery ───────────────────────────────────────── */}
        {/* <section>
          <SectionLabel text="Screenshots" color={product.accentColor} />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            See It in Action
          </h2>
          <p className="text-gray-500 text-base mb-8 max-w-2xl">
            Real screens from the platform — customer-facing app, admin dashboard, and analytics panels.
          </p>
          <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl mb-4">
            <img
              src={product.gallery[activeGallery]}
              alt={`${product.title} screenshot ${activeGallery + 1}`}
              className="w-full h-80 md:h-[480px] object-cover transition-all duration-500"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {product.gallery.map((img, i) => (
              <button key={i} onClick={() => setActiveGallery(i)}
                className={`rounded-2xl overflow-hidden aspect-video border-2 transition-all ${activeGallery === i ? 'shadow-lg scale-[1.02]' : 'border-transparent hover:border-gray-300 opacity-70 hover:opacity-100'}`}
                style={activeGallery === i ? { borderColor: product.accentColor } : {}}>
                <img src={img} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </section> */}

        {/* ── How It Works ──────────────────────────────────────────────── */}
        <section>
          <SectionLabel text="How It Works" color={product.accentColor} />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            From Kickoff to Live in Weeks
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            A structured implementation process that moves fast without skipping critical steps.
          </p>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[5%] right-[5%] h-0.5 bg-gray-200 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {product.steps.map((step, i) => (
                <div key={i} className="relative z-10">
                  <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-0 p-5 border border-gray-200 rounded-2xl bg-white hover:shadow-md transition-all">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 shadow-md md:mb-4" style={{ background: product.accentColor }}>
                      {step.step}
                    </div>
                    <div className="md:text-center">
                      <div className="font-bold text-[#0a1628] text-sm mb-2">{step.title}</div>
                      <p className="text-gray-500 text-xs leading-relaxed mb-3">{step.desc}</p>
                      <div className="inline-block px-3 py-1.5 rounded-xl text-[10px] font-semibold text-gray-500 border border-gray-200 bg-gray-50">{step.detail}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who It's For ──────────────────────────────────────────────── */}
        <section>
          <SectionLabel text="Who It&apos;s For" color={product.accentColor} />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Built for These Businesses
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Three distinct use cases — each with measurable business outcomes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.useCases.map((uc, i) => {
              const Icon = useCaseIcons[uc.icon]
              return (
                <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="px-6 py-5 border-b border-gray-100" style={{ background: product.accentColor + '08' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: product.accentColor + '18' }}>
                        <Icon size={18} style={{ color: product.accentColor }} />
                      </div>
                      <h3 className="font-bold text-[#0a1628] text-base">{uc.title}</h3>
                    </div>
                    <span className="inline-block text-xs font-black px-3 py-1 rounded-full text-white" style={{ background: product.accentColor }}>
                      {uc.metric}
                    </span>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{uc.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Build vs Buy ──────────────────────────────────────────────── */}
        <section>
          <SectionLabel text="Build vs Buy" color={product.accentColor} />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Why Not Build It From Scratch?
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Every client asks this. Here is an honest comparison.
          </p>
          <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-3 text-center">
              <div className="px-6 py-4 bg-gray-50 border-b border-r border-gray-200">
                <span className="text-xs font-black uppercase tracking-widest text-gray-400">Criteria</span>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-b border-r border-gray-200">
                <div className="flex items-center justify-center gap-2">
                  <XCircle size={14} className="text-red-400" />
                  <span className="text-xs font-black uppercase tracking-widest text-red-400">Build From Scratch</span>
                </div>
              </div>
              <div className="px-6 py-4 border-b border-gray-200" style={{ background: product.accentColor + '10' }}>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 size={14} style={{ color: product.accentColor }} />
                  <span className="text-xs font-black uppercase tracking-widest" style={{ color: product.accentColor }}>Kotibox Ready-Made</span>
                </div>
              </div>
            </div>
            {/* Rows */}
            {[
              { criteria: 'Time to Market', custom: '12–24 months', ours: product.deployment.timeline.split(' including')[0] },
              { criteria: 'Development Cost', custom: '₹50L – ₹2Cr+', ours: 'Fraction of cost — ready infrastructure' },
              { criteria: 'Team Required', custom: '8–15 engineers, PMs, QA, DevOps', ours: 'Your team focuses on business — we handle tech' },
              { criteria: 'Risk of Failure', custom: 'High — 60% of custom builds go over budget & time', ours: 'Low — battle-tested in production across clients' },
              { criteria: 'Post-Launch Maintenance', custom: 'Full team needed for bugs, updates, scaling', ours: 'Included in support plan — we maintain it' },
              { criteria: 'Customisation', custom: 'Full control — but at enormous cost', ours: 'Full white-label — brand, flows, features' },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 ${i < 5 ? 'border-b border-gray-200' : ''}`}>
                <div className="px-6 py-4 bg-gray-50 border-r border-gray-200 flex items-center">
                  <span className="font-bold text-[#0a1628] text-sm">{row.criteria}</span>
                </div>
                <div className="px-6 py-4 border-r border-gray-200 flex items-center">
                  <span className="text-red-500 text-sm">{row.custom}</span>
                </div>
                <div className="px-6 py-4 flex items-center" style={{ background: product.accentColor + '05' }}>
                  <span className="text-sm font-semibold text-[#0a1628]">{row.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tech Stack ────────────────────────────────────────────────── */}
        <section>
          <SectionLabel text="Tech Stack" color={product.accentColor} />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Built on Modern, Scalable Technology
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Enterprise-grade open-source stack — no vendor lock-in, fully maintainable, and cloud-agnostic.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {product.techStack.map((cat, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-4 bg-white hover:shadow-sm transition-all">
                <div className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: product.accentColor }}>{cat.category}</div>
                <div className="space-y-1.5">
                  {cat.items.map(item => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: product.accentColor }} />
                      <span className="text-gray-700 text-xs font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQs ──────────────────────────────────────────────────────── */}
        <section className="max-w-3xl">
          <SectionLabel text="FAQs" color={product.accentColor} />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-base mb-8">Technical, commercial, and implementation questions answered.</p>
          <div className="flex flex-col gap-3">
            {product.faqs.map((faq, i) => (
              <div key={i}
                className={`border rounded-2xl overflow-hidden transition-all duration-200 ${openFaq === i ? 'shadow-md' : 'border-gray-200'}`}
                style={openFaq === i ? { borderColor: product.accentColor + '60' } : {}}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50">
                  <span className="text-[#0a1628] font-semibold text-sm md:text-base pr-4">{faq.question}</span>
                  {openFaq === i
                    ? <ChevronUp size={18} style={{ color: product.accentColor }} className="flex-shrink-0" />
                    : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section>
          <div className="relative rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #111827 100%)' }}>
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-15 blur-[80px]" style={{ background: product.accentColor }} />
            <div className="relative px-8 md:px-14 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: product.accentColor }} />
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Ready-made · Fast Launch</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Get a Live Demo of{' '}
                  <span style={{ color: product.accentColor + 'dd' }}>
                    {product.title.split(' ').slice(0, 2).join(' ')}
                  </span>
                </h2>
                <p className="text-white/55 text-base max-w-md">
                  We&apos;ll walk you through the full platform, show you the admin panel, and give you a custom pricing estimate based on your scale and requirements.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <button onClick={openModal} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white hover:opacity-90 transition-all text-sm" style={{ background: product.accentColor }}>
                  Request Free Demo <ArrowRight size={16} />
                </button>
                <Link href="/live-demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/80 border border-white/20 hover:bg-white/10 transition-all text-sm">
                  View All Live Demos <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── Related Products ──────────────────────────────────────────────── */}
      <section className="bg-[#f8fafc] py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#f5a623]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#f5a623]">More Products</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628] mb-10">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.id} href={`/products/${p.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
                <div className="h-44 overflow-hidden relative">
                  <img src={p.heroImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-white text-xs font-bold" style={{ background: p.accentColor }}>{p.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0a1628] group-hover:opacity-70 transition-colors mb-2 text-base leading-snug">{p.title}</h3>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-4">{p.description}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: p.accentColor }}>
                    View Product <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
