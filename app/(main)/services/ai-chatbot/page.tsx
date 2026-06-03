'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, ChevronDown, ChevronUp,
  CheckCircle2, ExternalLink,
  Bot, MessageSquare, Zap, Shield,
  Database, Brain, Code2, Globe,
  Users, TrendingUp, Clock, Star,
  Smartphone, Monitor, Send, RefreshCw,
  FileText, ShoppingCart, Heart, Building2,
  GraduationCap, Banknote, Truck, Settings,
  Layers, Search, CircleDot, Sparkles,
  MessageCircle, Phone, Mail, Share2,
  Lock, Activity, Target, Award
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const ACCENT = '#6366f1'
const ACCENT2 = '#8b5cf6'
const NAVY = '#0a1628'

// ─── Data ────────────────────────────────────────────────────────────────────

const industryUseCases = [
  {
    industry: 'E-commerce',
    icon: ShoppingCart,
    color: '#f59e0b',
    tagline: 'Convert browsers into buyers, 24/7',
    conversations: [
      { user: 'What sizes are available for the black hoodie?', bot: 'The black hoodie is available in XS, S, M, L, XL, and XXL. Currently XL is low in stock (3 left). Want me to add your size to cart?' },
      { user: 'I want to track my order #4821', bot: 'Order #4821 is out for delivery today! Your Zomato Blue Hoodie is 4 km away. Estimated arrival: 2:30–3:00 PM. I\'ll notify you when it arrives.' },
      { user: 'Can I return this if it doesn\'t fit?', bot: 'Yes! We offer a 30-day hassle-free return. I\'ll send the prepaid return label to your email right now — no questions asked.' },
    ],
    useCases: ['Product discovery & recommendations', 'Order tracking & status updates', 'Return & refund processing', 'Cart recovery messages', 'Inventory availability checks', 'Upselling & cross-selling'],
    stat: '35% increase in conversion rate',
  },
  {
    industry: 'Healthcare',
    icon: Heart,
    color: '#ef4444',
    tagline: 'Patient support that never sleeps',
    conversations: [
      { user: 'I need to book a consultation with Dr. Sharma', bot: 'Dr. Sharma has slots available tomorrow at 10 AM, 2 PM, and 4:30 PM. Which works best for you? I\'ll send a confirmation and reminder automatically.' },
      { user: 'What documents do I need for my appointment?', bot: 'For your first visit, please bring: government ID, insurance card, any previous reports/scans, and a list of current medications. Shall I email you this checklist?' },
      { user: 'I have a fever of 102°F, what should I do?', bot: 'For a fever of 102°F, rest and stay hydrated. If it persists over 3 days or exceeds 104°F, please visit urgently. Want me to book an emergency slot or connect you to our on-call doctor?' },
    ],
    useCases: ['Appointment booking & reminders', 'Symptom pre-screening', 'Post-visit follow-up', 'Medication reminders', 'Insurance & billing queries', 'Lab report explanations'],
    stat: '70% reduction in front-desk call volume',
  },
  {
    industry: 'Real Estate',
    icon: Building2,
    color: '#14b8a6',
    tagline: 'Qualify leads while you sleep',
    conversations: [
      { user: 'I\'m looking for a 3BHK in Bandra under ₹2Cr', bot: 'Great choice! I found 8 properties in Bandra matching your criteria. Top pick: Bandra West, 1,450 sq ft, ₹1.85Cr, ready possession. Want a virtual tour or to schedule a visit?' },
      { user: 'What\'s the EMI if I take a 20-year loan?', bot: 'For ₹1.85Cr at 8.5% interest over 20 years, your EMI would be approximately ₹16,100/month. I can connect you with our loan advisor for pre-approval if interested.' },
      { user: 'Is the Bandra project RERA approved?', bot: 'Yes! RERA Registration No: P51900020485. Possession date: December 2025. Builder track record: 12 projects delivered on time. Want the full compliance document?' },
    ],
    useCases: ['Lead qualification & scoring', 'Property search & filtering', 'EMI & loan calculations', 'Site visit scheduling', 'RERA & compliance queries', 'Post-purchase documentation'],
    stat: '4x more qualified leads per month',
  },
  {
    industry: 'EdTech',
    icon: GraduationCap,
    color: '#6366f1',
    tagline: 'Personalised learning support at scale',
    conversations: [
      { user: 'I\'m struggling with calculus — can you help?', bot: 'Of course! Based on your recent quiz scores, let\'s start with limits and derivatives. I\'ll walk you through 3 concept examples, then give you 5 practice problems. Ready?' },
      { user: 'When is the next React.js batch starting?', bot: 'The next React.js Pro batch starts June 15. Early bird price (₹12,999 → ₹8,999) ends in 3 days. 23 seats remaining. Want me to reserve your spot?' },
      { user: 'I missed yesterday\'s class, how do I catch up?', bot: 'No worries! Yesterday\'s session recording is in your dashboard (1hr 20min). Key topics: useEffect, custom hooks. I\'ve also bookmarked the exact timestamps for each concept for you.' },
    ],
    useCases: ['Personalised learning paths', 'Doubt resolution & tutoring', 'Course recommendations', 'Batch & schedule queries', 'Assignment submission tracking', 'Certificate & progress queries'],
    stat: '60% reduction in student drop-off rate',
  },
  {
    industry: 'Banking & Finance',
    icon: Banknote,
    color: '#0ea5e9',
    tagline: 'Secure, compliant financial assistance',
    conversations: [
      { user: 'What\'s my account balance?', bot: 'After verifying your identity via OTP, your savings balance is ₹1,24,830. Last 3 transactions: ₹2,500 debit (June 1), ₹45,000 credit (May 31), ₹1,200 debit (May 30). Need a full statement?' },
      { user: 'I want to apply for a personal loan of ₹5L', bot: 'Based on your profile, you\'re pre-approved for up to ₹7L at 10.5% p.a. For ₹5L over 3 years, EMI = ₹16,300/month. Want to proceed? I\'ll complete the application in under 5 minutes.' },
      { user: 'I didn\'t make this ₹15,000 transaction', bot: 'I\'ve flagged this transaction as suspicious and temporarily blocked your card. A fraud analyst will call you within 10 minutes. Reference number: FR-28441. Is there anything else I can help with?' },
    ],
    useCases: ['Balance & transaction queries', 'Loan application & pre-approval', 'Fraud detection & card blocking', 'Investment product recommendations', 'KYC & document submission', 'EMI restructuring requests'],
    stat: '80% queries resolved without agent',
  },
  {
    industry: 'Logistics',
    icon: Truck,
    color: '#22c55e',
    tagline: 'Real-time visibility for every shipment',
    conversations: [
      { user: 'Where is my shipment AWB 78234?', bot: 'AWB 78234 is currently at Mumbai Hub, sorted and loaded on vehicle MH-01-AB-4521. Last scan: 11:42 AM. Estimated delivery: today by 6 PM. Want delivery notifications on WhatsApp?' },
      { user: 'The package was marked delivered but I didn\'t receive it', bot: 'I\'ve raised an investigation ticket (REF-INV-9921). Our field team will call you within 2 hours. If unresolved in 24hrs, automatic refund or re-delivery will be initiated.' },
      { user: 'I need to reschedule tomorrow\'s delivery', bot: 'Rescheduled! New delivery window: June 5, 10 AM – 2 PM. I\'ve also set a WhatsApp reminder 30 minutes before the driver arrives. Anything else?' },
    ],
    useCases: ['Shipment tracking & ETA', 'Delivery exception handling', 'Rescheduling & address change', 'NDR (non-delivery report) resolution', 'Rate & quote calculator', 'Bulk dispatch queries'],
    stat: '55% drop in WISMO (Where Is My Order) calls',
  },
]

const architecture = [
  {
    layer: '01',
    name: 'User Message',
    icon: MessageCircle,
    color: '#6366f1',
    desc: 'User sends a message via web widget, WhatsApp, Instagram DM, or any connected channel.',
    tech: ['Web SDK', 'WhatsApp Cloud API', 'Meta Messenger API', 'REST Webhooks'],
  },
  {
    layer: '02',
    name: 'Intent Detection',
    icon: Brain,
    color: '#8b5cf6',
    desc: 'The LLM (GPT-4o / Claude) reads the message and classifies intent — question, complaint, purchase, booking, or escalation.',
    tech: ['GPT-4o', 'Claude 3.5', 'Gemini 1.5', 'Custom classifiers'],
  },
  {
    layer: '03',
    name: 'Knowledge Retrieval',
    icon: Database,
    color: '#a855f7',
    desc: 'Relevant context is fetched from your vector database using semantic search — product info, FAQs, policies, past orders.',
    tech: ['Pinecone', 'Weaviate', 'pgvector', 'Chroma DB'],
  },
  {
    layer: '04',
    name: 'Response Generation',
    icon: Sparkles,
    color: '#ec4899',
    desc: 'The LLM generates a grounded, accurate response using retrieved context. Hallucinations are prevented by restricting the model to retrieved data.',
    tech: ['RAG Pipeline', 'LangChain', 'LlamaIndex', 'Prompt templates'],
  },
  {
    layer: '05',
    name: 'Action Execution',
    icon: Zap,
    color: '#f59e0b',
    desc: 'If needed, the bot calls your APIs to take real actions — book appointments, process returns, update CRM, send emails.',
    tech: ['REST APIs', 'GraphQL', 'Zapier/n8n', 'CRM webhooks'],
  },
  {
    layer: '06',
    name: 'Human Handoff',
    icon: Users,
    color: '#22c55e',
    desc: 'Complex or sensitive queries are smoothly transferred to a live agent with full conversation history and context summary.',
    tech: ['Freshdesk', 'Intercom', 'Zendesk', 'Custom agent panel'],
  },
]

const channels = [
  {
    channel: 'Website Widget',
    icon: Monitor,
    color: '#6366f1',
    embed: 'One JS snippet',
    users: '4.5B web users',
    setup: '15 minutes',
    features: ['Floating chat bubble', 'Custom branding & colors', 'File & image sharing', 'Typing indicators', 'Offline message capture', 'Mobile responsive'],
  },
  {
    channel: 'WhatsApp',
    icon: MessageCircle,
    color: '#25d366',
    embed: 'WhatsApp Cloud API',
    users: '2.7B users',
    setup: '1–2 days',
    features: ['Verified business number', 'Rich media (images, PDFs)', 'Template message campaigns', 'Button & list replies', 'Payment links (India)', 'Broadcast messaging'],
  },
  {
    channel: 'Instagram DM',
    icon: Share2,
    color: '#e1306c',
    embed: 'Meta Messenger API',
    users: '2B active users',
    setup: '1 day',
    features: ['Comment-to-DM automation', 'Story reply automation', 'Product catalogue sharing', 'Quick reply buttons', 'Leads from DMs to CRM', 'Handoff to human agent'],
  },
  {
    channel: 'Mobile App (iOS/Android)',
    icon: Smartphone,
    color: '#0ea5e9',
    embed: 'SDK (React Native / Flutter)',
    users: 'Your app users',
    setup: '3–5 days',
    features: ['Native in-app chat UI', 'Push notification triggers', 'Biometric-secured queries', 'Deep-linked responses', 'Offline message queue', 'Analytics dashboard'],
  },
  {
    channel: 'Email (Async)',
    icon: Mail,
    color: '#f59e0b',
    embed: 'Email API (SendGrid/Postmark)',
    users: '4B email users',
    setup: '2–3 days',
    features: ['Auto-reply to inbound email', 'Ticket creation & routing', 'Follow-up email sequences', 'Attachment parsing (PDF/docx)', 'Sentiment-based prioritisation', 'GDPR-compliant handling'],
  },
  {
    channel: 'Telegram',
    icon: Send,
    color: '#2aabee',
    embed: 'Telegram Bot API',
    users: '800M users',
    setup: '1 day',
    features: ['Inline keyboard menus', 'Command-based navigation', 'Channel announcement bots', 'Group moderation bot', 'File delivery automation', 'Payment via Telegram Pay'],
  },
]

const handoffRules = [
  { trigger: 'Negative sentiment detected', action: 'Route to empathy-trained agent immediately', color: '#ef4444', icon: Heart },
  { trigger: 'High-value transaction (> ₹50K)', action: 'Escalate to senior sales agent with context', color: '#f59e0b', icon: Banknote },
  { trigger: 'Legal / compliance language used', action: 'Flag and route to compliance officer', color: '#6366f1', icon: Shield },
  { trigger: '3 failed resolution attempts', action: 'Auto-escalate with full conversation summary', color: '#ec4899', icon: RefreshCw },
  { trigger: 'Explicit human request', action: 'Instant handoff with < 30 second wait target', color: '#22c55e', icon: Users },
  { trigger: 'After-hours query (non-urgent)', action: 'Collect details, schedule callback for next business day', color: '#0ea5e9', icon: Clock },
]

const packages = [
  {
    name: 'Starter Bot',
    color: '#6366f1',
    ideal: 'SMBs with FAQ-heavy support',
    channels: '1 channel (Web or WhatsApp)',
    includes: [
      'Up to 500 FAQ pairs in knowledge base',
      'GPT-4o powered responses',
      'Basic intent classification',
      'Human handoff (email escalation)',
      'Web widget or WhatsApp deployment',
      'Monthly conversation analytics',
      '3-month post-launch support',
    ],
    notIncluded: ['CRM integration', 'Multi-channel deployment', 'Custom action flows', 'API integrations'],
    timeline: '5–7 business days',
  },
  {
    name: 'Growth Bot',
    color: ACCENT,
    ideal: 'Growing businesses needing lead capture + CRM',
    channels: '3 channels (Web + WhatsApp + 1 more)',
    includes: [
      'Unlimited FAQ pairs + product catalogue',
      'GPT-4o + RAG pipeline (vector search)',
      'Advanced intent detection (10+ intents)',
      'CRM integration (HubSpot / Zoho / Salesforce)',
      '3-channel deployment',
      'Lead capture & qualification flows',
      'Live agent handoff panel',
      'Weekly analytics + conversation reports',
      '6-month post-launch support',
    ],
    notIncluded: ['Custom API actions', 'Voice bot'],
    timeline: '2–3 weeks',
    recommended: true,
  },
  {
    name: 'Enterprise Bot',
    color: '#f59e0b',
    ideal: 'Enterprise with complex workflows & compliance',
    channels: 'All channels (unlimited)',
    includes: [
      'Multi-model architecture (GPT-4 + Claude fallback)',
      'Custom fine-tuning on your data',
      'Unlimited API action integrations',
      'All channel deployments',
      'Voice bot (speech-to-text + text-to-speech)',
      'Multi-language (up to 15 languages)',
      'Custom agent dashboard with SLA tracking',
      'Compliance guardrails (HIPAA / GDPR ready)',
      'Dedicated bot trainer & monthly optimisation',
      '12-month SLA with 99.9% uptime guarantee',
    ],
    notIncluded: [],
    timeline: '4–8 weeks',
  },
]

const timeline = [
  { day: 'Day 1–2', phase: 'Discovery & Data Collection', color: '#6366f1', tasks: ['Kickoff call & use case mapping', 'Collect FAQs, product data, policies', 'Define intents & conversation flows', 'Choose deployment channels'] },
  { day: 'Day 3–5', phase: 'Knowledge Base Build', color: ACCENT, tasks: ['Ingest documents into vector DB', 'Configure retrieval pipeline', 'Set up LLM prompts & guardrails', 'Test retrieval accuracy'] },
  { day: 'Day 5–8', phase: 'Bot Development', color: '#a855f7', tasks: ['Build conversation flows & intents', 'Integrate APIs & CRM', 'Configure human handoff rules', 'Develop agent panel (if applicable)'] },
  { day: 'Day 8–10', phase: 'Testing & Launch', color: '#22c55e', tasks: ['Stress test with 500+ sample queries', 'Accuracy & hallucination audit', 'Client UAT & feedback', 'Go-live + monitoring setup'] },
]

const faqs = [
  {
    q: 'How is this different from a rule-based chatbot (like ManyChat)?',
    a: 'Rule-based bots follow strict decision trees — if the user deviates even slightly from expected input, the bot breaks. Our AI chatbots understand natural language, handle variations, typos, and multi-turn conversations, and retrieve answers from your actual knowledge base rather than a predefined script. The result is a bot that handles 80–90% of queries that a rule-based bot would drop to a human.',
  },
  {
    q: 'Can the bot be trained on our internal documents (PDFs, Google Docs, etc.)?',
    a: 'Yes. We ingest any document format — PDFs, Word files, Google Docs, Notion pages, website URLs, Google Sheets, SQL databases, and product catalogues — into a vector database. The bot retrieves the most relevant chunks before generating a response, ensuring answers are always grounded in your actual data, not the LLM\'s general training. We call this a RAG (Retrieval-Augmented Generation) architecture.',
  },
  {
    q: 'Will the bot give wrong answers (hallucinate)?',
    a: 'Hallucination is a real risk with LLMs — and we engineer around it specifically. Our RAG pipeline forces the model to answer only from retrieved context. If the context does not contain an answer, the bot says so and escalates rather than guessing. We also run a hallucination audit during UAT, testing 500+ edge case queries before launch.',
  },
  {
    q: 'How does human handoff work?',
    a: 'Handoff is triggered by configurable rules: negative sentiment, explicit human request, high-value transactions, compliance keywords, or after 3 failed resolution attempts. When triggered, the conversation — including full history and a context summary — is transferred to your live agent panel (we integrate with Intercom, Freshdesk, Zendesk, or build a custom panel). The customer never has to repeat themselves.',
  },
  {
    q: 'Can it be deployed on WhatsApp and our website simultaneously?',
    a: 'Yes. One AI brain, multiple channels. We deploy the same knowledge base and conversation logic across Web widget, WhatsApp, Instagram DM, Telegram, and your mobile app simultaneously. Each channel gets a UI appropriate to its platform — a chat bubble on web, rich messages on WhatsApp, quick reply buttons on Instagram. You manage everything from one dashboard.',
  },
  {
    q: 'How long does it take to go live?',
    a: 'A Starter Bot (FAQ-based, single channel) goes live in 5–7 business days. A Growth Bot with CRM integration and multi-channel deployment takes 2–3 weeks. An Enterprise Bot with custom API integrations, voice, and compliance layers takes 4–8 weeks. Timeline depends primarily on how quickly we receive your source documents and API credentials during discovery.',
  },
  {
    q: 'Is customer data secure? Are you GDPR / HIPAA compliant?',
    a: 'Data security is non-negotiable. All conversation data is encrypted in transit (TLS 1.3) and at rest (AES-256). We support private cloud deployment (AWS/GCP within your VPC) so data never leaves your infrastructure. For healthcare clients, we implement HIPAA-compliant data handling and access controls. For EU clients, GDPR-compliant data retention and deletion workflows are included. We sign a DPA (Data Processing Agreement) before starting.',
  },
  {
    q: 'What happens after the bot is live — do you keep improving it?',
    a: 'All plans include post-launch support. Monthly, we review the conversation logs, identify unanswered or mishandled queries, update the knowledge base, and retune the retrieval pipeline. Growth and Enterprise plans include a dedicated bot trainer who proactively improves accuracy each month. Bots improve significantly over the first 3 months as real-world edge cases are identified and addressed.',
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ text, color = ACCENT }: { text: string; color?: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-[2px] rounded-full" style={{ background: color }} />
      <span className="text-xs font-bold tracking-widest uppercase" style={{ color }}>{text}</span>
    </div>
  )
}

function FaqItem({ faq, index, open, onToggle }: {
  faq: { q: string; a: string }; index: number; open: boolean; onToggle: (i: number) => void
}) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? 'shadow-md' : 'border-gray-200'}`}
      style={open ? { borderColor: `${ACCENT}60` } : {}}>
      <button onClick={() => onToggle(index)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-indigo-50/40 transition-colors">
        <span className="text-[#0a1628] font-semibold text-sm md:text-base pr-4">{faq.q}</span>
        {open
          ? <ChevronUp size={18} style={{ color: ACCENT }} className="flex-shrink-0" />
          : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />}
      </button>
      {open && <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AIChatbotPage() {
  const { openModal } = useModal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeIndustry, setActiveIndustry] = useState(0)
  const [activePackage, setActivePackage] = useState(1)
  const [activeChannel, setActiveChannel] = useState(0)
  const [activeConversation, setActiveConversation] = useState(0)

  const industry = industryUseCases[activeIndustry]
  const channel = channels[activeChannel]
  const IndustryIcon = industry.icon
  const ChannelIcon = channel.icon

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d0a2e 0%, #0a1628 50%, #120a2e 100%)' }}>
        <div className="absolute top-0 right-0 w-[800px] h-[600px] rounded-full opacity-[0.1] blur-[140px]" style={{ background: ACCENT }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[120px]" style={{ background: ACCENT2 }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: `radial-gradient(circle, ${ACCENT} 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-32 pb-20">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium bg-white/8 border border-white/15 px-4 py-2 rounded-full transition-colors mb-10">
            <ArrowLeft size={15} /> Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left copy */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-xs font-extrabold tracking-wider uppercase" style={{ background: ACCENT }}>
                  <Bot size={12} /> AI Development
                </span>
                <span className="text-white/40 text-sm">Chatbot & Conversational AI</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
                AI Chatbots That<br />
                <span style={{ color: '#a5b4fc' }}>Understand, Act</span><br />
                & Convert
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl">
                Production-grade AI chatbots trained on your data — deployed on Web, WhatsApp, Instagram, and your app. Handles 80% of queries autonomously, captures leads, and transfers to humans seamlessly.
              </p>

              {/* Key stats inline */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { val: '80%', label: 'Queries automated' },
                  { val: '<500ms', label: 'Response time' },
                  { val: '90+', label: 'Languages' },
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl px-4 py-3 text-center border border-white/10" style={{ background: 'rgba(99,102,241,0.12)' }}>
                    <div className="text-xl font-black text-white">{s.val}</div>
                    <div className="text-white/40 text-[10px] mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button onClick={openModal} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all shadow-lg" style={{ background: ACCENT }}>
                  Get a Free Demo <ArrowRight size={16} />
                </button>
                <Link href="/live-demo" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white border border-white/20 hover:bg-white/10 transition-all">
                  See Live Bots <ExternalLink size={14} />
                </Link>
              </div>
            </div>

            {/* Right — live chat UI mockup */}
            <div className="relative hidden lg:flex flex-col gap-4">
              {/* Chat window */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10" style={{ background: '#0d0a2e' }}>
                {/* Chat header */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10" style={{ background: `${ACCENT}15` }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: ACCENT }}>
                    <Bot size={18} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-bold text-sm">Aria — AI Assistant</div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-green-400 text-[10px] font-semibold">Online · Replies instantly</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/40">
                    <Phone size={14} />
                    <Settings size={14} />
                  </div>
                </div>

                {/* Messages */}
                <div className="px-5 py-4 space-y-4 min-h-[280px]">
                  {/* Bot welcome */}
                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: ACCENT }}>
                      <Bot size={13} className="text-white" />
                    </div>
                    <div className="rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[80%]" style={{ background: `${ACCENT}20`, border: `1px solid ${ACCENT}30` }}>
                      <p className="text-white/90 text-xs leading-relaxed">Hi! I'm Aria 👋 I can help you track orders, process returns, answer product questions, or connect you with our team. What can I help with?</p>
                    </div>
                  </div>

                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="rounded-2xl rounded-tr-none px-4 py-2.5 max-w-[75%]" style={{ background: ACCENT }}>
                      <p className="text-white text-xs">I want to return my order #5521 — wrong size</p>
                    </div>
                  </div>

                  {/* Bot response */}
                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: ACCENT }}>
                      <Bot size={13} className="text-white" />
                    </div>
                    <div className="rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[82%] space-y-2" style={{ background: `${ACCENT}20`, border: `1px solid ${ACCENT}30` }}>
                      <p className="text-white/90 text-xs leading-relaxed">Got it! Order #5521 — Blue Crew Neck, Size M. Initiating a free size exchange.</p>
                      <div className="space-y-1.5">
                        {['📦 Return label emailed to you', '🔄 Size L dispatched in 24hrs', '📱 Track via same link'].map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="text-white/80 text-[10px]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* User */}
                  <div className="flex justify-end">
                    <div className="rounded-2xl rounded-tr-none px-4 py-2.5 max-w-[75%]" style={{ background: ACCENT }}>
                      <p className="text-white text-xs">That was fast! Thanks</p>
                    </div>
                  </div>

                  {/* Bot closing */}
                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: ACCENT }}>
                      <Bot size={13} className="text-white" />
                    </div>
                    <div className="rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[80%]" style={{ background: `${ACCENT}20`, border: `1px solid ${ACCENT}30` }}>
                      <p className="text-white/90 text-xs">Happy to help! Is there anything else I can assist you with today?</p>
                    </div>
                  </div>
                </div>

                {/* Input area */}
                <div className="px-4 pb-4">
                  <div className="flex items-center gap-3 rounded-2xl px-4 py-3 border border-white/10" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <span className="text-white/30 text-xs flex-1">Type a message...</span>
                    <div className="w-7 h-7 rounded-xl flex items-center justify-center" style={{ background: ACCENT }}>
                      <Send size={13} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-5 -right-5 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl z-10" style={{ borderColor: `${ACCENT}40` }}>
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp size={12} style={{ color: ACCENT }} />
                  <span className="text-white text-xs font-semibold">84% resolved by bot</span>
                </div>
                <div className="text-white/40 text-[10px]">Only 16% need human agent</div>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl z-10" style={{ borderColor: `${ACCENT}40` }}>
                <div className="flex items-center gap-2">
                  <Clock size={12} style={{ color: '#a5b4fc' }} />
                  <span className="text-white text-xs font-semibold">Avg. response: 380ms</span>
                </div>
                <div className="text-white/40 text-[10px]">Across 6 channels simultaneously</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capability Strip ──────────────────────────────────────────────── */}
      <section style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { icon: Bot, val: '80%', label: 'Queries resolved without human', color: ACCENT },
              { icon: Globe, val: '6+', label: 'Channels deployed simultaneously', color: '#a5b4fc' },
              { icon: Clock, val: '<500ms', label: 'Average AI response latency', color: '#22c55e' },
              { icon: Shield, val: '99.9%', label: 'Uptime SLA on Enterprise', color: '#f59e0b' },
            ].map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="flex flex-col items-center text-center py-8 px-4">
                  <Icon size={20} className="mb-2" style={{ color: s.color }} />
                  <div className="text-2xl md:text-3xl font-black text-white">{s.val}</div>
                  <div className="text-white/40 text-xs mt-1 leading-snug">{s.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

        {/* ── Industry Use Cases ───────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Industry Use Cases" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Built for Your Industry, Not a Generic Bot
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Each industry has different conversation patterns, compliance needs, and user expectations. See real examples of what our bots handle across six verticals.
          </p>

          {/* Industry tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {industryUseCases.map((ind, i) => {
              const Icon = ind.icon
              return (
                <button key={i} onClick={() => { setActiveIndustry(i); setActiveConversation(0) }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all border ${activeIndustry === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                  style={activeIndustry === i ? { background: ind.color } : {}}>
                  <Icon size={13} />
                  {ind.industry}
                </button>
              )
            })}
          </div>

          {/* Active industry panel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 rounded-3xl overflow-hidden">
            {/* Left — conversation */}
            <div className="p-6 lg:p-8" style={{ background: `${industry.color}06`, borderRight: '1px solid #e5e7eb' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: `${industry.color}20` }}>
                  <IndustryIcon size={18} style={{ color: industry.color }} />
                </div>
                <div>
                  <div className="font-black text-[#0a1628] text-base">{industry.industry} Bot</div>
                  <div className="text-gray-400 text-xs">{industry.tagline}</div>
                </div>
                <div className="ml-auto text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: industry.color }}>
                  {industry.stat}
                </div>
              </div>

              {/* Conversation selector */}
              <div className="flex gap-2 mb-5">
                {industry.conversations.map((_, ci) => (
                  <button key={ci} onClick={() => setActiveConversation(ci)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${activeConversation === ci ? 'text-white border-transparent' : 'text-gray-400 border-gray-200'}`}
                    style={activeConversation === ci ? { background: industry.color } : {}}>
                    Example {ci + 1}
                  </button>
                ))}
              </div>

              {/* Chat bubble mockup */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100" style={{ background: `${industry.color}10` }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: industry.color }}>
                    <Bot size={12} className="text-white" />
                  </div>
                  <span className="text-xs font-bold text-gray-700">AI Bot — {industry.industry}</span>
                  <div className="ml-auto flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-[10px] text-green-600 font-semibold">Online</span>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  {/* User */}
                  <div className="flex justify-end">
                    <div className="rounded-xl rounded-tr-sm px-3.5 py-2.5 max-w-[85%] text-xs text-white leading-relaxed" style={{ background: industry.color }}>
                      {industry.conversations[activeConversation].user}
                    </div>
                  </div>
                  {/* Bot typing indicator */}
                  <div className="flex gap-2 items-center">
                    <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: `${industry.color}20` }}>
                      <Bot size={11} style={{ color: industry.color }} />
                    </div>
                    <div className="rounded-xl rounded-tl-sm px-3.5 py-2.5 text-gray-700 text-xs leading-relaxed border border-gray-100 max-w-[88%]">
                      {industry.conversations[activeConversation].bot}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — use cases */}
            <div className="p-6 lg:p-8">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">What the {industry.industry} Bot Handles</div>
              <div className="space-y-3 mb-8">
                {industry.useCases.map((uc, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors bg-white">
                    <CheckCircle2 size={15} style={{ color: industry.color }} className="flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{uc}</span>
                  </div>
                ))}
              </div>
              <button onClick={openModal} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all w-full justify-center" style={{ background: industry.color }}>
                Build a {industry.industry} Bot <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </section>

        {/* ── RAG Architecture ─────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            <div className="lg:col-span-2">
              <SectionLabel text="How It Works" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-5 leading-tight">
                RAG Architecture — No Hallucinations
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                Every response is grounded in your data. Our Retrieval-Augmented Generation pipeline fetches relevant context from your knowledge base before the LLM generates a word — eliminating made-up answers entirely.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Grounded answers only', desc: 'Bot can only respond using retrieved context' },
                  { label: 'Source citations', desc: 'Every answer traceable to source document' },
                  { label: 'Confidence thresholds', desc: 'Low-confidence queries auto-escalate to human' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${ACCENT}20` }}>
                      <CheckCircle2 size={11} style={{ color: ACCENT }} />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0a1628] text-sm">{item.label}</div>
                      <div className="text-gray-400 text-xs">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={openModal} className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all" style={{ background: ACCENT }}>
                See Architecture Demo <ArrowRight size={14} />
              </button>
            </div>

            {/* Pipeline steps */}
            <div className="lg:col-span-3">
              <div className="space-y-3">
                {architecture.map((step, i) => {
                  const Icon = step.icon
                  return (
                    <div key={i} className="relative">
                      {/* Connector line */}
                      {i < architecture.length - 1 && (
                        <div className="absolute left-[22px] top-[52px] w-0.5 h-6 z-0" style={{ background: `${step.color}30` }} />
                      )}
                      <div className="relative z-10 flex gap-4 p-4 border border-gray-200 rounded-2xl hover:shadow-sm transition-all bg-white group">
                        <div className="flex-shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: `${step.color}15` }}>
                          <Icon size={18} style={{ color: step.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: step.color }}>{step.layer}</span>
                            <span className="font-bold text-[#0a1628] text-sm">{step.name}</span>
                          </div>
                          <p className="text-gray-400 text-xs leading-relaxed mb-2">{step.desc}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {step.tech.map(t => (
                              <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: `${step.color}12`, color: step.color }}>{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Deployment Channels ──────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Deployment Channels" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            One Bot Brain, Every Channel Your Customer Uses
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Deploy the same intelligence across Web, WhatsApp, Instagram, Telegram, and your mobile app. Your customers get a consistent experience wherever they reach out.
          </p>

          {/* Channel selector */}
          <div className="flex flex-wrap gap-2 mb-8">
            {channels.map((ch, i) => {
              const Icon = ch.icon
              return (
                <button key={i} onClick={() => setActiveChannel(i)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all border ${activeChannel === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                  style={activeChannel === i ? { background: ch.color } : {}}>
                  <Icon size={13} />
                  {ch.channel.split(' ')[0]}
                </button>
              )
            })}
          </div>

          {/* Channel detail */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200 rounded-3xl overflow-hidden">
            {/* Left — channel info */}
            <div className="p-8 lg:border-r border-gray-200" style={{ background: `${channel.color}06` }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: `${channel.color}20` }}>
                  <ChannelIcon size={26} style={{ color: channel.color }} />
                </div>
                <div>
                  <div className="font-black text-[#0a1628] text-lg">{channel.channel}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{channel.users}</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl p-3.5 bg-white border border-gray-200">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">How We Embed</div>
                  <div className="text-gray-700 text-sm font-semibold">{channel.embed}</div>
                </div>
                <div className="rounded-xl p-3.5 bg-white border border-gray-200">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Setup Time</div>
                  <div className="font-bold text-sm" style={{ color: channel.color }}>{channel.setup}</div>
                </div>
              </div>
            </div>

            {/* Middle — features */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Capabilities on {channel.channel.split(' ')[0]}</div>
              <div className="space-y-3">
                {channel.features.map(feat => (
                  <div key={feat} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${channel.color}15` }}>
                      <CheckCircle2 size={11} style={{ color: channel.color }} />
                    </div>
                    <span className="text-gray-700 text-sm">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — CTA */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Best For</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {channel.channel === 'Website Widget' && 'Any business with a website. Highest conversion rate for inbound traffic — catches visitors before they bounce.'}
                  {channel.channel === 'WhatsApp' && 'Businesses with a large Indian / Middle Eastern customer base. Highest open rates of any channel (98% vs 20% email).'}
                  {channel.channel === 'Instagram DM' && 'D2C brands, fashion, beauty, and any business running Instagram ads. Automate DM replies to story mentions and ad leads.'}
                  {channel.channel === 'Mobile App (iOS/Android)' && 'Businesses with an existing mobile app. Native in-app chat creates the most personal support experience for loyal users.'}
                  {channel.channel === 'Email (Async)' && 'B2B companies and enterprises where customers prefer email. AI triages and auto-responds to inbound support emails.'}
                  {channel.channel === 'Telegram' && 'Tech-savvy audiences, crypto/fintech communities, and businesses that want a bot-first communication channel.'}
                </p>
              </div>
              <button onClick={openModal} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all w-full justify-center" style={{ background: channel.color }}>
                Deploy on {channel.channel.split(' ')[0]} <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </section>

        {/* ── Human Handoff ────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel text="Human Handoff" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-5 leading-tight">
                Smart Escalation — The Bot Knows When to Step Back
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                The best AI bots are not the ones that try to handle everything — they are the ones that know exactly when a human is needed and transfer with full context so the customer never has to repeat themselves.
              </p>
              <div className="space-y-3">
                {handoffRules.map((rule, i) => {
                  const Icon = rule.icon
                  return (
                    <div key={i} className="flex gap-4 p-4 border border-gray-200 rounded-2xl hover:shadow-sm transition-all group">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${rule.color}15` }}>
                        <Icon size={17} style={{ color: rule.color }} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Trigger</span>
                          <span className="font-semibold text-[#0a1628] text-sm">{rule.trigger}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ArrowRight size={11} style={{ color: rule.color }} />
                          <span className="text-gray-500 text-xs">{rule.action}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right — bot vs human comparison */}
            <div>
              <SectionLabel text="Bot vs Human" color="#22c55e" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-5 leading-tight">
                What the Bot Handles vs Your Team
              </h2>
              <div className="rounded-3xl overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="grid grid-cols-2 divide-x divide-gray-200">
                  <div className="px-5 py-3.5 text-center font-bold text-sm" style={{ background: `${ACCENT}12`, color: ACCENT }}>
                    🤖 AI Bot Handles
                  </div>
                  <div className="px-5 py-3.5 text-center font-bold text-sm" style={{ background: '#22c55e12', color: '#22c55e' }}>
                    👤 Human Agent Handles
                  </div>
                </div>
                {/* Rows */}
                {[
                  ['Order status & tracking', 'Complex refund disputes'],
                  ['Product FAQs & availability', 'Custom contract negotiations'],
                  ['Appointment booking', 'Sensitive complaint resolution'],
                  ['Return initiation', 'High-value enterprise queries'],
                  ['Payment status queries', 'Legal & compliance matters'],
                  ['Lead capture & qualification', 'Relationship-building calls'],
                  ['After-hours support', 'Upsell for key accounts'],
                  ['Password resets & auth help', 'Crisis communication'],
                ].map(([bot, human], i) => (
                  <div key={i} className={`grid grid-cols-2 divide-x divide-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'}`}>
                    <div className="px-5 py-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                      <span className="text-gray-700 text-xs">{bot}</span>
                    </div>
                    <div className="px-5 py-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-green-400" />
                      <span className="text-gray-700 text-xs">{human}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Implementation Timeline ──────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Implementation" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            From Zero to Live in 10 Business Days
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Our structured deployment process gets a Growth Bot live in 2–3 weeks. No lengthy discovery phases, no months of waiting — we move fast without cutting corners.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Horizontal connector */}
            <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-gray-200 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((t, i) => (
                <div key={i} className="relative z-10">
                  <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0 p-5 border border-gray-200 rounded-2xl bg-white hover:shadow-md transition-all">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 shadow-md lg:mb-4" style={{ background: t.color }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="lg:text-center">
                      <div className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: t.color }}>{t.day}</div>
                      <div className="font-bold text-[#0a1628] text-sm mb-3">{t.phase}</div>
                      <div className="space-y-1.5">
                        {t.tasks.map(task => (
                          <div key={task} className="flex items-start gap-1.5 lg:justify-center">
                            <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: t.color }} />
                            <span className="text-gray-400 text-[11px] leading-relaxed lg:text-center">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Packages ─────────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Packages" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Choose Your Bot
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            From a simple FAQ bot to a full enterprise conversational AI system with voice, compliance, and CRM integrations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div key={i}
                className={`rounded-3xl overflow-hidden border-2 transition-all cursor-pointer ${activePackage === i ? 'shadow-xl scale-[1.02]' : 'border-gray-200 hover:shadow-md'}`}
                style={{ borderColor: activePackage === i ? pkg.color : undefined }}
                onClick={() => setActivePackage(i)}>

                {/* Header */}
                <div className="px-7 py-6 relative" style={{ background: `${pkg.color}10` }}>
                  {pkg.recommended && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-widest" style={{ background: pkg.color }}>
                      Most Popular
                    </div>
                  )}
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: pkg.color }}>{pkg.name}</div>
                  <div className="font-black text-[#0a1628] text-lg mb-1">{pkg.channels}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <Clock size={12} className="text-gray-400" />
                    <span className="text-gray-400 text-xs">Live in {pkg.timeline}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="px-7 py-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">What's Included</div>
                  <div className="space-y-2 mb-5">
                    {pkg.includes.map(item => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={13} style={{ color: pkg.color }} className="flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                  {pkg.notIncluded.length > 0 && (
                    <div className="space-y-1.5 mb-5">
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-2">Not included</div>
                      {pkg.notIncluded.map(item => (
                        <div key={item} className="flex items-start gap-2">
                          <div className="w-3 h-3 rounded-full border border-gray-200 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-xs">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="text-xs text-gray-400 italic mb-5">{pkg.ideal}</div>
                  <button onClick={openModal} className="w-full py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all" style={{ background: pkg.color }}>
                    Get Started — {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="relative rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d0a2e 0%, #0a1628 100%)' }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-[100px]" style={{ background: ACCENT }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[80px] opacity-10" style={{ background: ACCENT2 }} />
            <div className="relative px-8 md:px-16 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Free Bot Demo</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  See Your AI Chatbot<br />
                  <span style={{ color: '#a5b4fc' }}>Before You Buy It</span>
                </h2>
                <p className="text-white/55 text-base max-w-md">
                  We build a working prototype using your own FAQs and data in 48 hours — so you see exactly how the bot performs before committing to a full deployment.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <button onClick={openModal} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white hover:opacity-90 transition-all text-sm whitespace-nowrap" style={{ background: ACCENT }}>
                  Request Free Prototype <ArrowRight size={16} />
                </button>
                <Link href="/services/ai-automation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/80 border border-white/20 hover:bg-white/10 transition-all text-sm">
                  Explore AI Automation <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQs ──────────────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <SectionLabel text="FAQs" />
            <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-base mb-10">Technical and commercial questions answered directly.</p>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <FaqItem key={i} faq={faq} index={i} open={openFaq === i} onToggle={(idx) => setOpenFaq(openFaq === idx ? null : idx)} />
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* ── Related Services ─────────────────────────────────────────────────── */}
      <section className="bg-[#f8fafc] py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <SectionLabel text="Related Services" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3">Complete Your AI Stack</h2>
          <p className="text-gray-500 text-base mb-10">Chatbots work best alongside these complementary AI services.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { slug: 'ai-automation', tag: 'AI Automation', title: 'AI Workflow Automation', desc: 'Automate complex back-office workflows that your chatbot triggers — approvals, CRM updates, email sequences.', color: '#10b981', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
              { slug: 'aeo-geo', tag: 'AEO & GEO', title: 'AEO & GEO Optimization', desc: 'Get your brand cited in ChatGPT and Perplexity — the same AI layer your chatbot uses.', color: '#06b6d4', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80' },
              { slug: 'social-media', tag: 'Social Media', title: 'Social Media Marketing', desc: 'Extend your chatbot to Instagram DMs and automate social lead qualification.', color: '#ec4899', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80' },
              { slug: 'web-design', tag: 'Web Design', title: 'Website Design', desc: 'A high-converting website with your AI chatbot embedded creates the perfect inbound funnel.', color: '#f5a623', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80' },
            ].map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
                <div className="h-40 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-3" style={{ background: s.color }}>{s.tag}</span>
                  <h3 className="font-bold text-[#0a1628] group-hover:text-indigo-600 transition-colors mb-1.5 text-sm leading-snug">{s.title}</h3>
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
