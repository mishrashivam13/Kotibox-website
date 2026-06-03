'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, ChevronDown, ChevronUp,
  CheckCircle2, ExternalLink,
  TrendingUp, Target, DollarSign, Zap,
  BarChart3, Users, Eye, MousePointer,
  Search, Globe, Play, Image,
  RefreshCw, Settings, Shield, Award,
  Bell, Clock, Star, Layers,
  Percent, Activity, Filter, Repeat,
  AlertCircle, ChevronRight, Gauge,
  ShoppingCart, FileText, Video, Megaphone
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const ACCENT = '#ef4444'
const ACCENT_DARK = '#dc2626'
const ACCENT_LIGHT = '#fef2f2'
const NAVY = '#0a1628'

// --- Data -------------------------------------------------------------------

const roasStats = [
  { value: '4×', label: 'Average ROAS Delivered', icon: TrendingUp },
  { value: '30%', label: 'Lower Cost Per Lead', icon: DollarSign },
  { value: 'Day 1', label: 'Traffic Starts Immediately', icon: Zap },
  { value: '₹0', label: 'Wasted Spend on Setup Week', icon: Shield },
]

const adPlatforms = [
  {
    name: 'Google Search Ads',
    icon: Search,
    color: '#4285f4',
    tag: 'Intent-based',
    bestFor: 'High-intent buyers searching for your product right now',
    avgCPC: '₹15 – ₹120',
    avgROAS: '4–8×',
    desc: 'Capture demand the moment it exists. Google Search Ads appear at the top of results when someone searches for what you sell. The highest-intent traffic available in digital advertising.',
    adTypes: ['Responsive Search Ads (RSA)', 'Dynamic Search Ads (DSA)', 'Call-Only Ads', 'Brand Defence Campaigns'],
    weManage: ['Keyword research & match types', 'Negative keyword lists', 'Ad copy A/B testing', 'Quality Score optimisation', 'Bid strategy management', 'Search term reports'],
  },
  {
    name: 'Google Performance Max',
    icon: Zap,
    color: '#34a853',
    tag: 'AI-powered',
    bestFor: 'Brands wanting Google\'s full inventory with one campaign',
    avgCPC: '₹10 – ₹80',
    avgROAS: '3–6×',
    desc: 'Google\'s AI-driven campaign type runs across Search, Display, YouTube, Gmail, Discover, and Maps — all from one campaign. Best for e-commerce and lead gen at scale with enough conversion data.',
    adTypes: ['Asset Group optimisation', 'Audience signal configuration', 'Product feed integration', 'Search theme targeting'],
    weManage: ['Asset creation (text, image, video)', 'Audience signal targeting', 'Merchant Centre feed sync', 'Conversion value rules', 'Supplemental feed management', 'Insights & attribution'],
  },
  {
    name: 'Google Shopping Ads',
    icon: ShoppingCart,
    color: '#fbbc04',
    tag: 'E-commerce',
    bestFor: 'Online stores selling physical products on Google',
    avgCPC: '₹8 – ₹60',
    avgROAS: '5–10×',
    desc: 'Product listing ads with image, price, and store name — appearing above organic results for product searches. The highest ROI ad format for e-commerce brands when managed correctly.',
    adTypes: ['Standard Shopping Campaigns', 'Smart Shopping (legacy)', 'Performance Max with feed', 'Showcase Shopping Ads'],
    weManage: ['Google Merchant Centre setup', 'Product feed optimisation', 'Title & description optimisation', 'Negative keyword layering', 'Bidding by product group', 'Competitor price monitoring'],
  },
  {
    name: 'Meta Ads (FB + IG)',
    icon: Image,
    color: '#1877f2',
    tag: 'Demand creation',
    bestFor: 'B2C brands building awareness and driving product discovery',
    avgCPC: '₹5 – ₹50',
    avgROAS: '3–6×',
    desc: 'Facebook and Instagram ads excel at reaching people before they even know they need your product. Powerful audience targeting + visual ad formats drive brand awareness, retargeting, and conversions.',
    adTypes: ['Single Image / Video Ads', 'Carousel Ads', 'Collection Ads', 'Advantage+ Shopping', 'Lead Generation Forms', 'Dynamic Product Ads'],
    weManage: ['Advantage+ audience setup', 'Creative A/B testing', 'CAPI (server-side) tracking', 'Dynamic Product Ads', 'Retargeting audience ladders', 'Budget optimisation across campaigns'],
  },
  {
    name: 'LinkedIn Ads',
    icon: Users,
    color: '#0a66c2',
    tag: 'B2B precision',
    bestFor: 'B2B brands targeting job title, company size, or industry',
    avgCPC: '₹150 – ₹600',
    avgROAS: '2–4×',
    desc: 'The only platform where you can target by job title, seniority, company size, and industry simultaneously. Expensive per click but exceptional lead quality for B2B, SaaS, and professional services.',
    adTypes: ['Sponsored Content (Feed)', 'Message Ads (InMail)', 'Dynamic Ads', 'Conversation Ads', 'Lead Gen Forms', 'Document Ads'],
    weManage: ['ICP audience building', 'Lead Gen Form setup', 'Message Ad personalisation', 'Account-Based Marketing (ABM)', 'Retargeting website visitors', 'LinkedIn Insight Tag setup'],
  },
  {
    name: 'YouTube Ads',
    icon: Play,
    color: '#ff0000',
    tag: 'Video reach',
    bestFor: 'Brand awareness, product demonstration, and top-of-funnel',
    avgCPV: '₹0.30 – ₹2',
    avgROAS: '2–4×',
    desc: 'YouTube is the world\'s second largest search engine. Video ads build brand authority, explain complex products, and reach audiences while they watch relevant content.',
    adTypes: ['TrueView In-Stream (skippable)', 'Non-skippable Bumper Ads (6s)', 'Video Discovery Ads', 'YouTube Shorts Ads'],
    weManage: ['Video ad script & editing', 'Custom intent audience targeting', 'Placement exclusion lists', 'View-through conversion tracking', 'Remarketing from channel viewers', 'Brand safety settings'],
  },
]

const campaignPhases = [
  {
    phase: 'Audit & Intelligence',
    number: '01',
    icon: Search,
    color: '#6366f1',
    duration: 'Week 1',
    what: 'Before touching a single campaign, we dig deep into what has worked, what has not, and where the competition is winning.',
    actions: [
      'Full account audit (wasted spend, quality scores, conversion gaps)',
      'Competitor ad intelligence (SpyFu, SEMrush Ads)',
      'Keyword opportunity mapping with intent classification',
      'Conversion tracking audit & gap analysis',
      'Landing page conversion rate assessment',
    ],
  },
  {
    phase: 'Strategy & Architecture',
    number: '02',
    icon: Layers,
    color: '#f59e0b',
    duration: 'Week 1–2',
    what: 'Every campaign structure decision affects performance. We architect for maximum Quality Score, relevance, and measurement clarity.',
    actions: [
      'Campaign & ad group structure design (SKAG or category-based)',
      'Match type & bidding strategy selection',
      'Audience segmentation & remarketing ladder design',
      'Attribution model selection & setup',
      'Budget allocation across campaigns & platforms',
    ],
  },
  {
    phase: 'Tracking & Infrastructure',
    number: '03',
    icon: Settings,
    color: '#0ea5e9',
    duration: 'Week 2',
    what: 'You cannot optimise what you cannot measure. We set up complete conversion tracking before the first rupee is spent.',
    actions: [
      'Google Tag Manager container setup & audit',
      'GA4 enhanced e-commerce or lead tracking',
      'Meta Pixel + Conversions API (CAPI) setup',
      'LinkedIn Insight Tag deployment',
      'Phone call tracking (CallRail or Google)',
      'Offline conversion import configuration',
    ],
  },
  {
    phase: 'Launch & A/B Testing',
    number: '04',
    icon: Zap,
    color: ACCENT,
    duration: 'Week 2–3',
    what: 'We launch with multiple creative variations from day one — never with a single ad. Every hypothesis is tested simultaneously.',
    actions: [
      '3–5 ad variations per ad group at launch',
      'RSA pin testing for headline combinations',
      'Landing page variant testing (if applicable)',
      'Smart bidding with manual override for first 2 weeks',
      'Demographic & device bid adjustment setup',
    ],
  },
  {
    phase: 'Weekly Optimisation',
    number: '05',
    icon: RefreshCw,
    color: '#10b981',
    duration: 'Ongoing (every Monday)',
    what: 'PPC is not set-and-forget. Every week we analyse performance, adjust bids, prune waste, and scale winners.',
    actions: [
      'Search term report review & negative keyword adds',
      'Bid adjustments (device, location, time, audience)',
      'Pause underperforming ads & creatives',
      'Scale budget on highest-ROAS campaigns',
      'Quality Score improvement actions',
    ],
  },
  {
    phase: 'Monthly Reporting & Strategy',
    number: '06',
    icon: BarChart3,
    color: '#a855f7',
    duration: 'Last week of month',
    what: 'Full transparency on exactly what your money did — and what we are doing differently next month.',
    actions: [
      'ROAS, CPA, CTR, impression share report',
      'Spend vs budget reconciliation',
      'Top-performing ads & audiences analysis',
      'Next month strategy & test hypothesis',
      'Competitor activity summary',
    ],
  },
]

const biddingStrategies = [
  {
    strategy: 'Target CPA',
    icon: Target,
    color: '#6366f1',
    when: 'You have 30+ conversions/month and a clear target cost per acquisition',
    how: 'Google\'s AI sets bids automatically to hit your target cost per conversion, using signals like device, time, audience, and query.',
    bestFor: 'Lead generation, SaaS sign-ups, app installs',
    risk: 'Low — proven bidding strategy for mature accounts',
  },
  {
    strategy: 'Target ROAS',
    icon: DollarSign,
    color: '#22c55e',
    when: 'E-commerce with 50+ conversions/month and revenue data flowing to Google',
    how: 'Sets bids to maximise conversion value while hitting your target return on ad spend ratio.',
    bestFor: 'E-commerce, subscription products, high-AOV services',
    risk: 'Medium — requires clean revenue data in Google Ads',
  },
  {
    strategy: 'Maximise Conversions',
    icon: TrendingUp,
    color: ACCENT,
    when: 'New account with a fixed daily budget and no CPA history yet',
    how: 'Spends your full budget to get the most conversions possible — no target CPA constraint. Excellent for gathering initial conversion data.',
    bestFor: 'New campaigns, early-stage accounts, testing periods',
    risk: 'Medium — CPA can be high initially while the algorithm learns',
  },
  {
    strategy: 'Manual CPC (Enhanced)',
    icon: MousePointer,
    color: '#f59e0b',
    when: 'Highly competitive niches where you need granular bid control',
    how: 'You set a maximum CPC per keyword. Google can increase it by up to 30% if a click looks likely to convert (Enhanced CPC).',
    bestFor: 'Competitive legal, finance, or medical keywords',
    risk: 'Low — maximum control but requires active daily management',
  },
]

const audienceTypes = [
  { type: 'In-Market Audiences', icon: ShoppingCart, color: '#22c55e', desc: 'People actively researching or ready to buy in your category — identified by Google based on recent search and browse behaviour.' },
  { type: 'Custom Intent (Keywords)', icon: Search, color: '#6366f1', desc: 'Build audiences from people who have searched specific keywords on Google. Target competitor-intent users.' },
  { type: 'Lookalike / Similar', icon: Users, color: ACCENT, desc: 'Meta and Google find new users with profiles similar to your best existing customers or converters.' },
  { type: 'Customer Match', icon: Target, color: '#f59e0b', desc: 'Upload your CRM email list. Google and Meta match it to existing users for retargeting and exclusion.' },
  { type: 'Remarketing (Website)', icon: RefreshCw, color: '#0ea5e9', desc: 'Re-engage people who visited your website. Segmented by page visited, time on site, and cart behaviour.' },
  { type: 'YouTube Viewers', icon: Play, color: '#ff0000', desc: 'Retarget people who watched your YouTube videos or visited your channel — high-intent warm audience.' },
]

const adCopyFramework = [
  { element: 'Hook (Headline 1)', purpose: 'Grab attention immediately', formula: '[Pain point] or [Desired outcome] in [Timeframe]', example: 'Double Your Leads in 30 Days' },
  { element: 'Value (Headline 2)', purpose: 'Deliver the core promise', formula: '[Unique value prop] + [Proof element]', example: 'Certified Google Partner — 4× Avg ROAS' },
  { element: 'Trust (Headline 3)', purpose: 'Reduce objection', formula: '[Social proof] or [Risk reversal]', example: '500+ Brands Trust Kotibox Ads' },
  { element: 'Description 1', purpose: 'Expand on the promise', formula: '[Benefit 1] + [Benefit 2] + [Benefit 3]. [CTA]', example: 'Expert PPC management, weekly reports, no contracts. Get your free audit today.' },
  { element: 'Description 2', purpose: 'Handle objection + urgency', formula: '[Objection removal] + [Urgency signal]', example: 'First month setup fee waived. Limited spots available — book your strategy call now.' },
]

const metrics = [
  { kpi: 'ROAS', full: 'Return on Ad Spend', formula: 'Revenue ÷ Ad Spend', target: '> 4× (varies by industry)', color: '#22c55e' },
  { kpi: 'CPA', full: 'Cost Per Acquisition', formula: 'Ad Spend ÷ Conversions', target: '< Avg order value × margin', color: '#6366f1' },
  { kpi: 'CTR', full: 'Click-Through Rate', formula: 'Clicks ÷ Impressions', target: '> 5% Search, > 1% Display', color: ACCENT },
  { kpi: 'Quality Score', full: 'Google Ad Relevance Score', formula: 'Expected CTR + Ad Relevance + Landing Page', target: '> 7/10', color: '#f59e0b' },
  { kpi: 'CPC', full: 'Cost Per Click', formula: 'Ad Spend ÷ Clicks', target: 'Benchmark vs industry avg', color: '#0ea5e9' },
  { kpi: 'Conv. Rate', full: 'Conversion Rate', formula: 'Conversions ÷ Clicks', target: '> 3% Search, > 1% Display', color: '#a855f7' },
  { kpi: 'Impression Share', full: 'Search Impression Share', formula: 'Your impressions ÷ Total eligible', target: '> 70% for top keywords', color: '#10b981' },
  { kpi: 'ACOS', full: 'Advertising Cost of Sales', formula: 'Ad Spend ÷ Revenue × 100', target: '< 25% (varies by margin)', color: '#f87171' },
]

const faqs = [
  {
    question: 'What is a realistic budget to start with for PPC?',
    answer: 'For Google Search Ads, we recommend a minimum of ₹30,000/month (approximately $360/month) in ad spend to gather enough data for meaningful optimisation. Meta Ads can start from ₹15,000/month. For Google Shopping, ₹25,000/month minimum. Our management fee is separate from ad spend — the ad spend goes directly to Google/Meta, not to us. Starting too low (under ₹10,000/month) typically produces too few clicks for statistical significance, making optimisation guesswork.',
  },
  {
    question: 'How quickly will we see results from PPC?',
    answer: 'Unlike SEO, PPC starts generating traffic from day one. However, peak efficiency takes time. Week 1–2: campaign launch, traffic starts flowing. Week 3–4: first optimisation cycle, eliminating waste. Month 2: smart bidding algorithms learn from conversion data, performance improves significantly. Month 3+: fully optimised campaigns running at target ROAS or CPA. We share a realistic milestone timeline in the discovery call.',
  },
  {
    question: 'What is your management fee structure?',
    answer: 'We charge a flat monthly management fee based on account complexity and number of platforms managed — typically ranging from ₹15,000 to ₹60,000/month. For larger budgets (above ₹3 lakh/month ad spend), we may apply a percentage model (typically 15% of ad spend). All ad spend goes directly to Google/Meta — it is billed to your card, not ours. There are no setup fees on monthly retainer agreements and no long-term contracts (we work month-to-month after the first 3 months).',
  },
  {
    question: 'Do you create the ad creatives and copy?',
    answer: 'Yes. Ad copy (headlines, descriptions) for Google Search Ads, display ad copy and design, Meta ad image and video creatives, LinkedIn ad copy and imagery — all created in-house by our team. For Google Search Responsive Ads, we write 15 headlines and 4 descriptions per ad group. For Meta, we deliver 3–5 creative variations per campaign at launch. Creative fatigue is real — we refresh creatives every 3–4 weeks based on frequency data.',
  },
  {
    question: 'How do you prevent wasted ad spend?',
    answer: 'Multiple layers of waste prevention: (1) Rigorous negative keyword lists from day one (broad match without negatives is the fastest way to burn budget on irrelevant clicks); (2) Search term reports reviewed weekly to add new negatives; (3) Placement exclusions for Display and YouTube (blocking low-quality sites and apps); (4) Demographic exclusions where relevant (age groups, parental status); (5) Ad scheduling to pause ads at times/days with poor conversion rates; (6) Smart bidding with conversion goals so the algorithm naturally reduces spend on low-converting queries.',
  },
  {
    question: 'What is Conversions API (CAPI) and do we need it?',
    answer: 'Meta Conversions API (CAPI) sends conversion events from your server directly to Meta — bypassing browser-based tracking that is blocked by ad blockers and iOS privacy restrictions. Since Apple\'s iOS 14 update, browser-pixel-only tracking can underreport conversions by 30–50%, causing Meta\'s algorithm to under-optimise. CAPI restores that data accuracy. We set up CAPI on every Meta Ads engagement — it is no longer optional for serious advertisers in 2024.',
  },
  {
    question: 'Can PPC help us with B2B lead generation?',
    answer: 'Yes, very effectively — but the platform matters. LinkedIn Ads is the premier B2B platform for targeting by job title, seniority, company size, and industry — ideal for SaaS, professional services, and enterprise sales. Google Search Ads capture high-intent B2B searches ("enterprise CRM software", "HR payroll service India"). For B2B, we typically combine Google Search for intent-capture with LinkedIn for account-based targeting, and set up lead gen forms that pre-fill from LinkedIn profiles for maximum conversion rate.',
  },
  {
    question: 'Do you offer landing page optimisation as part of PPC management?',
    answer: 'Landing page quality directly affects your Google Quality Score, which determines both your ad position and CPC. We always audit the landing page before launch. Landing page copy revisions and basic CRO recommendations are included. For full landing page redesign or A/B test implementation, we involve our web development team (quoted separately). A great ad sending traffic to a poor landing page is money wasted — we treat landing pages as part of the PPC system.',
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
      <button onClick={() => onToggle(index)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-red-50/40 transition-colors">
        <span className="text-[#0a1628] font-semibold text-sm md:text-base pr-4">{faq.question}</span>
        {open ? <ChevronUp size={18} style={{ color: ACCENT }} className="flex-shrink-0" /> : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />}
      </button>
      {open && <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.answer}</div>}
    </div>
  )
}

// --- Page -------------------------------------------------------------------

export default function PpcPage() {
  const { openModal } = useModal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activePlatform, setActivePlatform] = useState(0)

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0505 0%, #0a1628 55%, #1a0808 100%)' }}>
        <div className="absolute top-0 right-0 w-[700px] h-[600px] rounded-full opacity-[0.10] blur-[120px]" style={{ background: ACCENT }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[100px]" style={{ background: '#f97316' }} />
        <div className="absolute inset-0 opacity-[0.02]" style={{
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
                  <Target size={12} /> PPC Advertising
                </span>
                <span className="text-white/40 text-sm">Digital Marketing</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.06] mb-6">
                PPC Advertising<br />
                <span style={{ color: '#fca5a5' }}>That Pays</span><br />
                For Itself
              </h1>
              <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
                Google, Meta, LinkedIn, and YouTube ad campaigns managed for maximum ROAS. Weekly bid optimisation, zero-waste tracking setup, and creative that converts — from the first rupee spent.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Google Search Ads', 'Meta Ads', 'LinkedIn Ads', 'YouTube Ads', 'Shopping Ads', 'Retargeting'].map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 text-white/70 bg-white/8">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <button onClick={openModal} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all shadow-lg" style={{ background: ACCENT }}>
                  Get Free PPC Audit <ArrowRight size={16} />
                </button>
                <Link href="/services/aeo-geo" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white border border-white/20 hover:bg-white/10 transition-all">
                  Explore Organic Growth <ExternalLink size={14} />
                </Link>
              </div>
            </div>

            {/* Right — live dashboard mockup */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10" style={{ background: '#0d0505' }}>
                {/* Dashboard header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10" style={{ background: '#1a0808' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: ACCENT }} />
                    <span className="text-white/60 text-xs font-mono">ads-dashboard.kotibox</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-white/40">
                    <RefreshCw size={10} />
                    Live · Updated 2 min ago
                  </div>
                </div>

                {/* ROAS hero */}
                <div className="px-5 py-5 border-b border-white/10">
                  <div className="flex items-end justify-between mb-3">
                    <div>
                      <div className="text-white/40 text-xs mb-1">This Month ROAS</div>
                      <div className="text-4xl font-black" style={{ color: '#4ade80' }}>4.8×</div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold" style={{ background: '#4ade8020', color: '#4ade80' }}>
                      <TrendingUp size={11} /> +0.6× vs last month
                    </div>
                  </div>
                  {/* Sparkline */}
                  <div className="flex items-end gap-1 h-12">
                    {[3.2, 3.8, 3.5, 4.1, 3.9, 4.4, 4.2, 4.7, 4.5, 4.8, 4.6, 4.8].map((v, i) => (
                      <div key={i} className="flex-1 rounded-sm" style={{
                        height: `${(v / 5) * 100}%`,
                        background: i === 11 ? ACCENT : `${ACCENT}50`,
                      }} />
                    ))}
                  </div>
                </div>

                {/* Campaign KPIs */}
                <div className="grid grid-cols-2 gap-0 divide-x divide-y divide-white/10">
                  {[
                    { label: 'Ad Spend', val: '₹1,42,000', delta: 'This month', up: null },
                    { label: 'Revenue Driven', val: '₹6,81,600', delta: '4.8× ROAS', up: true },
                    { label: 'Cost Per Lead', val: '₹318', delta: '-22% vs benchmark', up: true },
                    { label: 'Avg CTR', val: '6.4%', delta: 'Industry avg: 3.1%', up: true },
                  ].map((kpi, i) => (
                    <div key={i} className="px-4 py-3">
                      <div className="text-white/40 text-[10px] mb-1">{kpi.label}</div>
                      <div className="text-white font-black text-sm">{kpi.val}</div>
                      <div className="text-[10px] mt-0.5" style={{ color: kpi.up === true ? '#4ade80' : kpi.up === false ? ACCENT : '#94a3b8' }}>{kpi.delta}</div>
                    </div>
                  ))}
                </div>

                {/* Top campaigns */}
                <div className="px-5 py-4 border-t border-white/10">
                  <div className="text-white/30 text-[10px] uppercase tracking-widest mb-3">Top Campaigns This Week</div>
                  <div className="space-y-2.5">
                    {[
                      { name: 'Google Search — Brand', spend: '₹18K', roas: '9.2×', status: 'top' },
                      { name: 'Meta — Retargeting', spend: '₹22K', roas: '6.4×', status: 'top' },
                      { name: 'Google Shopping', spend: '₹35K', roas: '5.1×', status: 'ok' },
                      { name: 'LinkedIn — Lead Gen', spend: '₹28K', roas: '3.2×', status: 'watch' },
                    ].map(c => (
                      <div key={c.name} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{
                            background: c.status === 'top' ? '#4ade80' : c.status === 'ok' ? '#facc15' : ACCENT,
                          }} />
                          <span className="text-white/60 truncate max-w-[120px]">{c.name}</span>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="text-white/40">{c.spend}</span>
                          <span className="font-bold" style={{ color: '#4ade80' }}>{c.roas}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl z-10" style={{ borderColor: `${ACCENT}40` }}>
                <div className="text-white/40 text-[10px] mb-0.5">Avg ROAS Delivered</div>
                <div className="text-2xl font-black" style={{ color: '#4ade80' }}>4×</div>
                <div className="text-white/30 text-[9px]">Across all clients</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl z-10" style={{ borderColor: `${ACCENT}40` }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: '#4ade80' }} />
                  <span className="text-white text-xs font-semibold">Wasted spend eliminated</span>
                </div>
                <div className="text-white/40 text-[10px] mt-0.5">Avg 28% budget recovered from audit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact Stats ─────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {roasStats.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="flex flex-col items-center text-center py-8 px-4 hover:bg-red-50/40 transition-colors">
                  <Icon size={20} className="mb-2" style={{ color: ACCENT }} />
                  <div className="text-2xl md:text-3xl font-black text-[#0a1628]">{s.value}</div>
                  <div className="text-gray-400 text-xs mt-1 leading-snug">{s.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

        {/* ── Ad Platforms ─────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Ad Platforms" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Six Platforms. One Unified Strategy.
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Each platform targets a different stage of the buyer journey. We combine them into a full-funnel system where every platform does what it does best.
          </p>
          {/* Platform tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {adPlatforms.map((p, i) => {
              const Icon = p.icon
              return (
                <button key={i} onClick={() => setActivePlatform(i)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all border ${activePlatform === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                  style={activePlatform === i ? { background: p.color } : {}}>
                  <Icon size={13} /> {p.name}
                </button>
              )
            })}
          </div>

          {(() => {
            const p = adPlatforms[activePlatform]
            const Icon = p.icon
            return (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200 rounded-3xl overflow-hidden">
                {/* Overview */}
                <div className="lg:col-span-2 p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg" style={{ background: p.color }}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <div className="font-black text-[#0a1628] text-xl">{p.name}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full text-white" style={{ background: p.color }}>{p.tag}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">{p.desc}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-2xl border border-gray-200" style={{ background: `${p.color}08` }}>
                      <div className="text-xs text-gray-400 mb-1">{'avgCPC' in p ? 'Avg CPC Range' : 'Avg CPV Range'}</div>
                      <div className="font-black text-[#0a1628]">{'avgCPC' in p ? p.avgCPC : (p as any).avgCPV}</div>
                    </div>
                    <div className="p-4 rounded-2xl border border-gray-200" style={{ background: `${p.color}08` }}>
                      <div className="text-xs text-gray-400 mb-1">Avg ROAS We Achieve</div>
                      <div className="font-black" style={{ color: p.color }}>{p.avgROAS}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Best for</div>
                    <div className="text-gray-700 text-sm font-medium">{p.bestFor}</div>
                  </div>
                </div>
                {/* What we manage */}
                <div className="border-t lg:border-t-0 lg:border-l border-gray-100 bg-[#fafafa]">
                  <div className="p-6">
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Ad Types We Run</div>
                    <div className="space-y-2 mb-6">
                      {p.adTypes.map(at => (
                        <div key={at} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.color }} />
                          <span className="text-gray-600 text-sm">{at}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">What We Manage</div>
                    <div className="space-y-2">
                      {p.weManage.map(wm => (
                        <div key={wm} className="flex items-start gap-2">
                          <CheckCircle2 size={13} style={{ color: p.color }} className="flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-xs">{wm}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })()}
        </section>

        {/* ── Our PPC Process ──────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Our Process" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            6-Phase PPC Management Process
          </h2>
          <p className="text-gray-500 text-base mb-14 max-w-2xl">
            From account audit to ongoing optimisation — a structured process that compounds performance every week.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {campaignPhases.map((phase, i) => {
              const Icon = phase.icon
              return (
                <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all">
                  <div className="flex items-center gap-4 px-6 py-4" style={{ background: `${phase.color}10`, borderBottom: `2px solid ${phase.color}` }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0" style={{ background: phase.color }}>
                      {phase.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-black text-[#0a1628] text-base">{phase.phase}</div>
                      <div className="text-xs font-semibold mt-0.5" style={{ color: phase.color }}>{phase.duration}</div>
                    </div>
                    <Icon size={18} style={{ color: phase.color }} className="flex-shrink-0 opacity-60" />
                  </div>
                  <div className="p-5">
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 italic">&ldquo;{phase.what}&rdquo;</p>
                    <div className="space-y-2">
                      {phase.actions.map(action => (
                        <div key={action} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: phase.color }} />
                          <span className="text-gray-600 text-sm">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Bidding Strategies ───────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Bidding Strategies" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            The Right Bidding Strategy for Your Stage
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Using smart bidding before you have enough conversion data is a fast way to burn budget. We match the strategy to your account maturity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {biddingStrategies.map((bs, i) => {
              const Icon = bs.icon
              return (
                <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all bg-white">
                  <div className="px-6 py-4 flex items-center gap-4" style={{ background: `${bs.color}10`, borderBottom: `2px solid ${bs.color}` }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${bs.color}20` }}>
                      <Icon size={18} style={{ color: bs.color }} />
                    </div>
                    <div className="font-black text-[#0a1628] text-base">{bs.strategy}</div>
                  </div>
                  <div className="p-5 space-y-4">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Use When</div>
                      <div className="text-gray-700 text-sm">{bs.when}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">How It Works</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{bs.how}</div>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="flex-1">
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Best For</div>
                        <div className="text-gray-600 text-xs">{bs.bestFor}</div>
                      </div>
                      <div className="text-xs font-bold px-3 py-1.5 rounded-full text-white flex-shrink-0" style={{ background: bs.color }}>
                        Risk: {bs.risk.split(' — ')[0]}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Audience Targeting ───────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel text="Audience Targeting" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                Reach the Right Person at the Right Moment
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Keywords tell you what someone is searching — audiences tell you who they are and what they have done. The most effective PPC strategies combine both.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {audienceTypes.map((aud, i) => {
                  const Icon = aud.icon
                  return (
                    <div key={i} className="flex gap-3 p-4 border border-gray-200 rounded-xl hover:border-red-200 hover:shadow-sm transition-all bg-white">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${aud.color}15` }}>
                        <Icon size={15} style={{ color: aud.color }} />
                      </div>
                      <div>
                        <div className="font-bold text-[#0a1628] text-sm mb-0.5">{aud.type}</div>
                        <div className="text-gray-400 text-xs leading-relaxed">{aud.desc}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Ad Copy Framework */}
            <div>
              <SectionLabel text="Ad Copy Framework" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                The Formula Behind Every High-CTR Ad
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                We write every Google RSA using a proven five-element framework — tested across 500+ campaigns.
              </p>
              <div className="space-y-3">
                {adCopyFramework.map((el, i) => (
                  <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                    <div className="flex items-center gap-3 px-5 py-3" style={{ background: `${ACCENT}08`, borderBottom: `1px solid ${ACCENT}15` }}>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-black flex-shrink-0" style={{ background: ACCENT }}>
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-bold text-[#0a1628] text-sm">{el.element}</span>
                        <span className="text-gray-400 text-xs ml-2">— {el.purpose}</span>
                      </div>
                    </div>
                    <div className="px-5 py-3 space-y-1.5">
                      <div className="text-xs font-semibold text-gray-400">Formula: <span className="text-gray-600 font-normal">{el.formula}</span></div>
                      <div className="text-xs font-semibold" style={{ color: ACCENT }}>Example: &ldquo;{el.example}&rdquo;</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Metrics We Track ─────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="KPIs & Reporting" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            8 KPIs in Every Monthly Report
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Every number we report tells a specific story about where money is being made and where it can be improved.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((m, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all bg-white">
                <div className="px-5 py-3 border-b border-gray-100" style={{ background: `${m.color}10` }}>
                  <div className="font-black text-xl" style={{ color: m.color }}>{m.kpi}</div>
                  <div className="text-gray-500 text-xs">{m.full}</div>
                </div>
                <div className="px-5 py-3 space-y-1.5">
                  <div className="text-xs text-gray-400">Formula: <span className="font-semibold text-gray-600">{m.formula}</span></div>
                  <div className="text-xs font-bold" style={{ color: m.color }}>Target: {m.target}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Reporting transparency callout */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: BarChart3, title: 'Weekly Performance Update', desc: 'Every Monday — key metrics snapshot, what changed, and what we did about it. 1-page email, no fluff.' },
              { icon: FileText, title: 'Monthly Deep-Dive Report', desc: 'Full campaign breakdown with spend, ROAS, CPA, CTR, top ads, and next month strategy. Shared in a live dashboard link.' },
              { icon: Bell, title: 'Real-Time Anomaly Alerts', desc: 'If spend spikes, CTR drops sharply, or ROAS tanks — you get an alert the same day, not at month-end.' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="flex gap-4 p-5 border border-gray-200 rounded-2xl hover:border-red-200 hover:shadow-sm transition-all bg-white">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: ACCENT_LIGHT }}>
                    <Icon size={18} style={{ color: ACCENT_DARK }} />
                  </div>
                  <div>
                    <div className="font-bold text-[#0a1628] text-sm mb-1">{item.title}</div>
                    <div className="text-gray-400 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Remarketing ──────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="Remarketing" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                97% of Visitors Leave Without Buying. We Bring Them Back.
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Remarketing campaigns target people who already know you — making every impression 3–5× more likely to convert than cold traffic. We build a segmented remarketing ladder that serves the right message based on where someone dropped off.
              </p>
              <div className="space-y-4">
                {[
                  { segment: 'Homepage Visitors (no action)', message: 'Broad brand awareness, social proof', channel: 'Display + Meta', bid: 'Low' },
                  { segment: 'Product / Service Page Visitors', message: 'Feature highlight, benefit reminder', channel: 'Display + Meta + YouTube', bid: 'Medium' },
                  { segment: 'Cart Abandoners (e-commerce)', message: 'Cart reminder + discount or urgency', channel: 'Meta Dynamic + Google', bid: 'High' },
                  { segment: 'Past Customers (cross-sell)', message: 'Complementary product or upsell', channel: 'Customer Match + Meta', bid: 'Very High' },
                ].map((seg, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-100 bg-gray-50">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-black" style={{ background: ACCENT }}>
                        {i + 1}
                      </div>
                      <span className="font-bold text-[#0a1628] text-sm">{seg.segment}</span>
                      <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full text-white" style={{
                        background: seg.bid === 'Very High' ? ACCENT : seg.bid === 'High' ? '#f97316' : seg.bid === 'Medium' ? '#f59e0b' : '#94a3b8',
                      }}>
                        Bid: {seg.bid}
                      </span>
                    </div>
                    <div className="px-5 py-3 grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-[10px] text-gray-400 mb-0.5">Message</div>
                        <div className="text-gray-700 text-xs">{seg.message}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-400 mb-0.5">Channels</div>
                        <div className="text-gray-700 text-xs">{seg.channel}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What every engagement includes */}
            <div>
              <SectionLabel text="What's Included" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                Everything in Every PPC Engagement
              </h2>
              <div className="space-y-3">
                {[
                  { title: 'Full Account Audit Before We Touch Anything', desc: 'Every engagement starts with a forensic audit of your existing campaigns to find wasted spend and quick wins before we create anything new.' },
                  { title: 'Conversion Tracking Setup (GTM + CAPI)', desc: 'Complete Google Tag Manager, GA4, Meta Pixel + CAPI, and LinkedIn Insight Tag setup — so every rupee is accurately attributed.' },
                  { title: 'Ad Copy Across All Active Campaigns', desc: 'We write all headlines, descriptions, and ad extensions. Google RSAs (15 headlines each), Meta image copy, LinkedIn InMail — all in-house.' },
                  { title: 'Creative Design for Display and Meta', desc: 'Display banner sets (all standard sizes), Meta single-image and carousel designs created by our designers — refreshed every 3–4 weeks.' },
                  { title: 'Weekly Bid Optimisation (Every Monday)', desc: 'Bids reviewed and adjusted every Monday. Negative keywords added, underperformers paused, winners scaled — not once a month.' },
                  { title: 'Monthly Report + Strategy Call', desc: 'A full performance report plus a 30-minute video call to review results, discuss strategy, and plan the next month together.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 border border-gray-100 rounded-xl hover:border-red-200 hover:shadow-sm transition-all">
                    <CheckCircle2 size={17} style={{ color: ACCENT }} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#0a1628] text-sm mb-0.5">{item.title}</div>
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
          <div className="relative rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0505 0%, #0a1628 100%)' }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-12 blur-[100px]" style={{ background: ACCENT }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-8 blur-[80px]" style={{ background: '#f97316' }} />
            <div className="relative px-8 md:px-16 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#4ade80' }} />
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Free PPC Audit — No Commitment</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  How Much Spend Are You<br />
                  <span style={{ color: '#fca5a5' }}>Wasting Right Now?</span>
                </h2>
                <p className="text-white/55 text-base max-w-md">
                  Our free PPC audit shows exactly where your current campaigns are leaking budget — wasted keywords, poor match types, missing negatives, and underperforming bids. Average client recovers 28% of their budget from the first audit.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
                <button onClick={openModal} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white hover:opacity-90 transition-all text-sm whitespace-nowrap" style={{ background: ACCENT }}>
                  Get Free Audit <ArrowRight size={16} />
                </button>
                <Link href="/services/social-media" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/80 border border-white/20 hover:bg-white/10 transition-all text-sm">
                  Explore Organic Social <ExternalLink size={14} />
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
            <p className="text-gray-500 text-base mb-10">Everything you need to know before starting your PPC campaigns.</p>
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
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3">Complete Your Growth Stack</h2>
          <p className="text-gray-500 text-base mb-10">PPC drives immediate traffic — pair it with these services for sustained growth.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { slug: 'social-media', tag: 'Social Media', title: 'Social Media Marketing', desc: 'Organic social builds the audience that your paid retargeting campaigns re-engage most profitably.', color: '#ec4899', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80' },
              { slug: 'aeo-geo', tag: 'AEO & GEO', title: 'AEO & GEO Optimization', desc: 'Organic AI search visibility that reduces long-term dependence on paid traffic.', color: '#06b6d4', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80' },
              { slug: 'web-design', tag: 'Web Design', title: 'Landing Page Design', desc: 'Higher-converting landing pages mean lower CPA and higher ROAS from the same ad spend.', color: '#f5a623', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80' },
              { slug: 'ecommerce', tag: 'E-Commerce', title: 'E-Commerce Development', desc: 'A fast, conversion-optimised store directly multiplies the return on every ad campaign.', color: '#22c55e', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80' },
            ].map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
                <div className="h-40 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-3" style={{ background: s.color }}>{s.tag}</span>
                  <h3 className="font-bold text-[#0a1628] group-hover:text-red-600 transition-colors mb-1.5 text-sm leading-snug">{s.title}</h3>
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
