'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, ChevronDown, ChevronUp,
  CheckCircle2, ExternalLink,
  FileText, BookOpen, Video, Mic, BarChart3,
  TrendingUp, Users, Eye, Target,
  Layers, Search, Globe, Mail,
  Calendar, Clock, Zap, Star,
  Share2, Download, MessageSquare, Award,
  Pen, AlignLeft, Image, RefreshCw,
  PieChart, Activity, Lightbulb, Filter
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const ACCENT = '#14b8a6'
const ACCENT_DARK = '#0f766e'
const ACCENT_LIGHT = '#f0fdfa'
const NAVY = '#0a1628'

// --- Data -------------------------------------------------------------------

const contentTypes = [
  {
    type: 'Blog Articles & Guides',
    icon: FileText,
    color: '#14b8a6',
    gradient: 'linear-gradient(135deg, #14b8a6, #0f766e)',
    bestFor: 'SEO organic traffic, thought leadership, nurturing',
    formats: ['Long-form guides (2,000–5,000 words)', 'Pillar pages & cluster articles', 'How-to tutorials', 'Listicles & comparison posts', 'Opinion & thought leadership', 'News & industry updates'],
    metric1: { label: 'Avg. Traffic Growth', val: '+180%' },
    metric2: { label: 'Avg. Time on Page', val: '4.2 min' },
    strategy: 'Topic cluster strategy — one pillar page supported by 8–12 cluster articles — dominates Google rankings for entire subject areas. We build clusters, not isolated posts.',
  },
  {
    type: 'Case Studies',
    icon: Award,
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1, #4f46e5)',
    bestFor: 'Bottom-of-funnel conversion, sales enablement',
    formats: ['Customer success stories', 'Before & after breakdowns', 'ROI-focused narratives', 'Video testimonial edits', 'Industry-specific case packs', 'One-page PDF summaries'],
    metric1: { label: 'Conversion Lift', val: '+34%' },
    metric2: { label: 'Sales Cycle Cut', val: '28%' },
    strategy: 'Case studies are the most trusted content format in B2B. We interview your customers, extract specific numbers, and structure each study around the buyer\'s objections.',
  },
  {
    type: 'Video Content',
    icon: Video,
    color: '#ef4444',
    gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
    bestFor: 'YouTube SEO, product explainers, training',
    formats: ['Product demo videos', 'Explainer animations', 'YouTube long-form (8–20 min)', 'YouTube Shorts', 'Webinar recordings', 'Customer interview videos'],
    metric1: { label: 'Avg Watch Time', val: '5.8 min' },
    metric2: { label: 'Subscriber Growth', val: '+300/mo' },
    strategy: 'Video content compounds — a well-optimised YouTube tutorial drives traffic for years. We plan videos around high-volume search queries and optimise thumbnails, titles, and descriptions for click-through.',
  },
  {
    type: 'Whitepapers & eBooks',
    icon: BookOpen,
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    bestFor: 'Lead generation, gated content, enterprise sales',
    formats: ['Technical whitepapers (10–20 pages)', 'Ultimate guides & eBooks', 'Research reports', 'Industry benchmarks', 'Comparison frameworks', 'Checklist & template packs'],
    metric1: { label: 'Leads Generated', val: '120+/mo' },
    metric2: { label: 'Email Opt-in Rate', val: '38%' },
    strategy: 'Gated long-form content is the most cost-efficient lead generation channel in B2B. We write whitepapers that address a pain point so specifically that your ICP gives their email without hesitation.',
  },
  {
    type: 'Podcast & Audio',
    icon: Mic,
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, #a855f7, #9333ea)',
    bestFor: 'Brand authority, audience intimacy, commuter reach',
    formats: ['Branded podcast episodes', 'Guest interview series', 'Audio articles (blog-to-podcast)', 'Shorts & audiograms', 'Spotify & Apple Podcasts distribution', 'Episode show notes & transcripts'],
    metric1: { label: 'Avg Completion Rate', val: '72%' },
    metric2: { label: 'Weekly Listeners', val: '1,200+' },
    strategy: 'Podcast audiences are the most loyal content consumers — 80% listen to 90%+ of every episode. We position your brand as the go-to voice in your industry through consistent guest-driven conversations.',
  },
  {
    type: 'Infographics & Visual',
    icon: Image,
    color: '#0ea5e9',
    gradient: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
    bestFor: 'Link building, social sharing, data storytelling',
    formats: ['Data visualisation infographics', 'Process & how-it-works diagrams', 'Statistical roundups', 'Comparison charts', 'Interactive HTML infographics', 'Slide decks & presentations'],
    metric1: { label: 'Avg Backlinks', val: '28/piece' },
    metric2: { label: 'Social Shares', val: '4x avg' },
    strategy: 'Infographics earn 3x more backlinks than text articles. We identify data stories in your industry, design shareable visuals, then run outreach to sites that have linked to similar content.',
  },
]

const contentFunnel = [
  {
    stage: 'Awareness',
    icon: Eye,
    color: '#14b8a6',
    pct: 40,
    intent: 'Discovering the problem or topic',
    formats: ['Blog articles', 'YouTube videos', 'Infographics', 'Social posts', 'Podcasts'],
    kpi: 'Organic traffic, impressions',
    desc: 'High-volume, low-competition keywords. Readers do not know they need you yet — we educate and attract.',
  },
  {
    stage: 'Consideration',
    icon: Search,
    color: '#6366f1',
    pct: 30,
    intent: 'Evaluating solutions & providers',
    formats: ['Comparison guides', 'Case studies', 'Webinars', 'Email sequences', 'eBooks'],
    kpi: 'Email signups, time on page',
    desc: 'Content that answers "is this the right solution for me?" — building trust before the first sales conversation.',
  },
  {
    stage: 'Decision',
    icon: Target,
    color: '#ec4899',
    pct: 20,
    intent: 'Choosing who to buy from',
    formats: ['Case studies', 'ROI calculators', 'Testimonials', 'Demo pages', 'Proposal packs'],
    kpi: 'Leads, demo requests, sales',
    desc: 'Bottom-funnel content that removes objections, builds credibility, and makes the decision to choose you obvious.',
  },
  {
    stage: 'Retention',
    icon: RefreshCw,
    color: '#f59e0b',
    pct: 10,
    intent: 'Getting more value, staying loyal',
    formats: ['Onboarding guides', 'Help docs', 'Email newsletters', 'Exclusive community', 'Advanced tutorials'],
    kpi: 'Churn rate, NPS, upsell revenue',
    desc: 'Post-purchase content turns customers into advocates — the cheapest and most powerful distribution channel you have.',
  },
]

const monthlyProcess = [
  {
    week: 'Week 1',
    phase: 'Research & Planning',
    icon: Search,
    color: '#6366f1',
    tasks: [
      'Monthly keyword & topic research',
      'Competitor content gap analysis',
      'Content calendar creation & approval',
      'Brief writing for all content pieces',
      'Client review & calendar sign-off',
    ],
  },
  {
    week: 'Week 1–2',
    phase: 'Content Creation',
    icon: Pen,
    color: ACCENT,
    tasks: [
      'Long-form article writing (SEO-optimised)',
      'Headline & meta description writing',
      'Internal link mapping',
      'Custom graphic & image sourcing',
      'Video scripting (if applicable)',
    ],
  },
  {
    week: 'Week 2–3',
    phase: 'Review & Publish',
    icon: CheckCircle2,
    color: '#22c55e',
    tasks: [
      'Client review & feedback round',
      'Final edits & revisions',
      'CMS upload & formatting',
      'Schema markup & on-page SEO',
      'Distribution to email & social',
    ],
  },
  {
    week: 'End of Month',
    phase: 'Measure & Optimise',
    icon: BarChart3,
    color: '#f59e0b',
    tasks: [
      'Traffic & ranking performance review',
      'Top-performing content deep-dive',
      'Underperforming content refresh plan',
      'Backlink audit & new opportunities',
      'Strategy adjustment for next month',
    ],
  },
]

const packages = [
  {
    name: 'Starter',
    color: '#6366f1',
    volume: '4 articles/month',
    summary: '4 SEO blog posts',
    includes: [
      '4 long-form articles (1,500–2,500 words)',
      'Keyword research per article',
      'Meta title & description',
      'Custom featured image',
      'CMS upload & formatting',
      'Monthly performance report',
    ],
    notIncluded: ['Video content', 'eBooks / whitepapers', 'Case studies', 'Email newsletter'],
    ideal: 'Startups building their first SEO foundation',
  },
  {
    name: 'Growth',
    color: ACCENT,
    volume: '8 articles + 1 premium asset',
    summary: '8 posts + 1 eBook or case study',
    includes: [
      '8 SEO articles/month (2,000–3,500 words)',
      'Topic cluster strategy mapping',
      '1 premium asset (eBook, case study, or whitepaper)',
      'Full on-page SEO + schema markup',
      'Internal link strategy',
      'Email newsletter copywriting (2x/month)',
      'Social post repurposing (4 posts)',
      'Monthly analytics report + ranking tracker',
    ],
    notIncluded: ['Video production', 'Podcast management'],
    ideal: 'Growing businesses serious about inbound leads',
    recommended: true,
  },
  {
    name: 'Enterprise',
    color: '#f59e0b',
    volume: '16+ articles + full content ecosystem',
    summary: 'Full-scale content engine',
    includes: [
      '16+ SEO articles/month',
      'Quarterly content strategy & audit',
      '2 premium assets/month (any format)',
      'Video script writing (4/month)',
      'Podcast episode management',
      'Weekly email newsletter',
      'Content repurposing for all social platforms',
      'Dedicated content strategist',
      'Weekly performance calls',
      'Link-building outreach campaign',
    ],
    notIncluded: [],
    ideal: 'Enterprise brands running multi-channel content engines',
  },
]

const distributionChannels = [
  { channel: 'Organic Search (SEO)', icon: Search, color: '#14b8a6', reach: 'Evergreen', effort: 'High upfront', best: 'Long-term traffic compounding', stat: 'Avg. 6–9 months to full traffic' },
  { channel: 'Email Newsletter', icon: Mail, color: '#6366f1', reach: 'Direct', effort: 'Low', best: 'Nurturing warm leads at scale', stat: '42x ROI — best channel for retention' },
  { channel: 'Social Media', icon: Share2, color: '#ec4899', reach: 'Social graph', effort: 'Medium', best: 'Content discovery & brand awareness', stat: 'Amplifies organic reach 3–5x' },
  { channel: 'YouTube', icon: Video, color: '#ef4444', reach: 'Search + discovery', effort: 'High', best: 'Visual learners, product explainers', stat: '2nd largest search engine globally' },
  { channel: 'Syndication', icon: Globe, color: '#f59e0b', reach: 'Partner audiences', effort: 'Low', best: 'Building domain authority, new audiences', stat: 'Earns 5–15 referral backlinks/article' },
  { channel: 'Podcast Distribution', icon: Mic, color: '#a855f7', reach: 'Loyal listeners', effort: 'Medium', best: 'Building authority & audience intimacy', stat: '72% average episode completion rate' },
]

const metrics = [
  { metric: 'Organic Traffic', why: 'Content\'s primary growth signal', good: '+20% month-over-month', color: ACCENT },
  { metric: 'Keyword Rankings', why: 'Position tracking for target terms', good: 'Top 10 for core cluster topics', color: '#6366f1' },
  { metric: 'Domain Authority', why: 'Overall SEO strength of the site', good: '+2–3 DA points per quarter', color: '#22c55e' },
  { metric: 'Content Leads Generated', why: 'Email signups & gated downloads', good: '> 50 MQLs/month from content', color: '#f59e0b' },
  { metric: 'Time on Page', why: 'Content quality & relevance signal', good: '> 3.5 minutes average', color: '#0ea5e9' },
  { metric: 'Pages per Session', why: 'Internal linking & content depth', good: '> 2.5 pages per visit', color: '#ec4899' },
  { metric: 'Backlinks Earned', why: 'Authority signals for Google ranking', good: '> 10 new backlinks/month', color: '#10b981' },
  { metric: 'Content Conversion Rate', why: 'Readers becoming leads or buyers', good: '> 2.5% of organic visitors', color: '#f87171' },
]

const faqs = [
  {
    question: 'How long until content marketing shows results?',
    answer: 'Content marketing is a compounding channel — expect early wins (10–20% traffic increase) within 60–90 days as new pages get indexed and begin ranking. Meaningful traffic growth typically takes 4–6 months as articles climb rankings. By month 9–12, a well-executed content strategy generates consistent, increasing organic traffic without proportional cost increases. We are transparent about these timelines. Anyone promising fast dramatic results from SEO content is selling you something that will not last.',
  },
  {
    question: 'What types of content do you produce?',
    answer: 'We produce the full content spectrum: long-form SEO blog articles (1,500–5,000 words), topic cluster pillar pages, case studies, whitepapers and eBooks for lead generation, email newsletters, social media repurposing, video scripts, podcast show notes, infographics, and sales enablement collateral. Our Growth and Enterprise plans include a mix of content types. The strategy dictates the format — we do not default to blog posts when a video or interactive tool would serve the goal better.',
  },
  {
    question: 'How do you choose which topics to write about?',
    answer: 'Every content piece is grounded in keyword research. We use a topic cluster model: we identify 3–5 broad pillar topics relevant to your business, then map 8–15 cluster articles per pillar targeting long-tail keywords. Topics are prioritised by: search volume, ranking difficulty, business relevance, and funnel stage. We also monitor competitor content gaps — ranking for topics where your competitors are absent is the fastest path to organic visibility. You approve the content calendar before we write a single word.',
  },
  {
    question: 'Do you write the content or outsource it?',
    answer: 'All content is written in-house by our team of industry-specific writers. We do not use content mills, freelance marketplaces, or AI-generated first drafts passed off as human work. Each writer is matched to your industry — a SaaS company gets a B2B tech writer, a healthcare client gets a medical content specialist. Every article goes through editorial review before delivery. We use AI tools for research and ideation, but the writing, reasoning, and brand voice are always human-produced.',
  },
  {
    question: 'How does content marketing integrate with SEO?',
    answer: 'Content marketing is the primary vehicle for SEO. Every article we produce is built around keyword research, structured with proper heading hierarchy, optimised for on-page SEO (title tags, meta descriptions, schema markup), and internally linked to support your site\'s topic authority. We also use content as link bait — research-backed articles, original data, and infographics naturally attract backlinks from other sites, which is the most powerful Google ranking signal. Our content and SEO work is done by the same team, not siloed departments.',
  },
  {
    question: 'Can you repurpose existing content we already have?',
    answer: 'Yes, and this is often the fastest ROI in content marketing. A well-written whitepaper can become 8 blog articles, a 6-part email series, 20 social posts, and a YouTube video. A blog article can become an infographic, a LinkedIn carousel, and a podcast topic. Content audits are included in Growth and Enterprise plans — we identify your highest-performing existing content and update, expand, or repurpose it before creating anything new, since refreshing old content typically delivers results 2–3x faster than new content.',
  },
  {
    question: 'What industries do you specialise in?',
    answer: 'We have content specialists across SaaS, fintech, healthcare, e-commerce, real estate, legal, logistics, and professional services. Industry knowledge matters — generic content does not rank or convert. Before starting, we complete a brand onboarding and industry research phase. Our writers consume industry news, competitor content, and customer language before writing a single piece. For highly regulated industries (healthcare, finance, legal), all content is reviewed for compliance before publication.',
  },
  {
    question: 'Do you handle content distribution as well?',
    answer: 'Yes. Creating the content is only half the job. On Growth plans and above, we distribute content across your email newsletter (2x monthly), repurpose key articles for social media (4–6 posts per article), and submit content to relevant syndication platforms to earn referral traffic and backlinks. For Enterprise clients, we also run targeted outreach to journalists and bloggers to earn coverage and links. Content without distribution is wasted effort — every piece we produce has a distribution plan attached.',
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
      <button onClick={() => onToggle(index)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-teal-50/40 transition-colors">
        <span className="text-[#0a1628] font-semibold text-sm md:text-base pr-4">{faq.question}</span>
        {open ? <ChevronUp size={18} style={{ color: ACCENT }} className="flex-shrink-0" /> : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />}
      </button>
      {open && <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.answer}</div>}
    </div>
  )
}

// --- Page -------------------------------------------------------------------

export default function ContentMarketingPage() {
  const { openModal } = useModal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeContent, setActiveContent] = useState(0)
  const [activePackage, setActivePackage] = useState(1)

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #051a18 0%, #0a1628 55%, #041510 100%)' }}>
        <div className="absolute top-0 right-0 w-[700px] h-[600px] rounded-full opacity-[0.12] blur-[120px]" style={{ background: ACCENT }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.07] blur-[100px]" style={{ background: '#5eead4' }} />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle, ${ACCENT} 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-32 pb-20">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium bg-white/8 border border-white/15 px-4 py-2 rounded-full transition-colors mb-10">
            <ArrowLeft size={15} /> Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-xs font-extrabold tracking-wider uppercase" style={{ background: ACCENT }}>
                  <FileText size={12} /> Content Marketing
                </span>
                <span className="text-white/40 text-sm">Digital Marketing</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.06] mb-6">
                Content That<br />
                <span style={{ color: '#5eead4' }}>Ranks, Converts</span><br />
                & Compounds
              </h1>
              <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
                Full-service content marketing — SEO articles, case studies, eBooks, video scripts, and email newsletters. Strategy, writing, publishing, and distribution done for you every month.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['SEO Blog Writing', 'Case Studies', 'eBooks & Whitepapers', 'Video Scripts', 'Email Newsletters', 'Content Strategy'].map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 text-white/70 bg-white/8">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <button onClick={openModal} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all shadow-lg" style={{ background: ACCENT }}>
                  Get Free Content Audit <ArrowRight size={16} />
                </button>
                <Link href="/live-demo" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white border border-white/20 hover:bg-white/10 transition-all">
                  See Our Work <ExternalLink size={14} />
                </Link>
              </div>
            </div>

            {/* Right — content dashboard mockup */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10" style={{ background: '#051a18' }}>
                {/* Top bar */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                  <div className="w-9 h-9 rounded-full border-2 flex items-center justify-center" style={{ borderColor: ACCENT, background: `${ACCENT}20` }}>
                    <FileText size={16} style={{ color: ACCENT }} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Content Dashboard</div>
                    <div className="text-white/40 text-[10px]">Monthly Performance</div>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
                    <span className="text-white/60 text-[10px] font-semibold">Live</span>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-0 border-b border-white/10">
                  {[
                    { label: 'Organic Visits', val: '24,800', change: '+34%', color: ACCENT },
                    { label: 'Articles Live', val: '48', change: '+8 this mo', color: '#6366f1' },
                    { label: 'Leads from Content', val: '127', change: '+41%', color: '#f59e0b' },
                  ].map((s, i) => (
                    <div key={i} className="p-3 text-center border-r border-white/10 last:border-0">
                      <div className="text-lg font-black" style={{ color: s.color }}>{s.val}</div>
                      <div className="text-white/40 text-[9px]">{s.label}</div>
                      <div className="text-xs font-bold mt-0.5" style={{ color: s.color }}>{s.change}</div>
                    </div>
                  ))}
                </div>

                {/* Article list mockup */}
                <div className="p-3 space-y-2">
                  {[
                    { title: 'How to Choose a CRM in 2025', rank: '#3', traffic: '3,200/mo', status: 'Published', color: '#22c55e' },
                    { title: 'Top 10 Project Management Tools', rank: '#7', traffic: '1,800/mo', status: 'Published', color: '#22c55e' },
                    { title: 'B2B Lead Generation Playbook', rank: 'Draft', traffic: '—', status: 'In Review', color: '#f59e0b' },
                    { title: 'SaaS Onboarding Best Practices', rank: '#12', traffic: '940/mo', status: 'Published', color: '#22c55e' },
                  ].map((article, i) => (
                    <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)' }}>
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: article.color }} />
                      <span className="text-white/80 text-[10px] flex-1 truncate">{article.title}</span>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0" style={{ background: `${ACCENT}20`, color: ACCENT }}>{article.rank}</span>
                      <span className="text-white/40 text-[9px] flex-shrink-0">{article.traffic}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom bar */}
                <div className="flex items-center justify-between px-4 py-3 border-t border-white/10">
                  <div className="flex items-center gap-1.5">
                    <TrendingUp size={12} style={{ color: ACCENT }} />
                    <span className="text-white/60 text-[10px]">Avg. position improving</span>
                  </div>
                  <div className="text-[10px] font-bold px-2 py-1 rounded-full" style={{ background: `${ACCENT}20`, color: ACCENT }}>+18 rankings this month</div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl z-10" style={{ borderColor: `${ACCENT}40` }}>
                <div className="flex items-center gap-2 mb-1">
                  <Star size={12} style={{ color: ACCENT }} />
                  <span className="text-white text-xs font-semibold">Article ranked #1</span>
                </div>
                <div className="text-white/40 text-[10px]">+1,200 organic visits added</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl z-10" style={{ borderColor: `${ACCENT}40` }}>
                <div className="flex items-center gap-2">
                  <Download size={12} style={{ color: '#5eead4' }} />
                  <span className="text-white text-xs font-semibold">43 eBook downloads</span>
                </div>
                <div className="text-white/40 text-[10px]">This week from gated guide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { val: '180%', label: 'Avg. Organic Traffic Growth', icon: TrendingUp },
              { val: '8+', label: 'Content Formats Produced', icon: Layers },
              { val: '9 mo', label: 'Avg. to #1 Page Ranking', icon: Star },
              { val: '42x', label: 'ROI — Email Newsletter', icon: Mail },
            ].map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="flex flex-col items-center text-center py-8 px-4 hover:bg-teal-50/40 transition-colors">
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

        {/* ── Content Types ────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Content Formats" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Every Format, Matched to the Right Goal
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Not all content is the same. Blog articles earn organic traffic. Case studies close deals. eBooks generate leads. We pick the right format for the right funnel stage — and do it well.
          </p>

          {/* Content type tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {contentTypes.map((c, i) => (
              <button key={i} onClick={() => setActiveContent(i)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${activeContent === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                style={activeContent === i ? { background: c.color } : {}}>
                {c.type.split('&')[0].trim()}
              </button>
            ))}
          </div>

          {(() => {
            const c = contentTypes[activeContent]
            const Icon = c.icon
            return (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200 rounded-3xl overflow-hidden">
                {/* Left — content identity */}
                <div className="p-8 flex flex-col gap-6" style={{ background: `${c.color}08`, borderRight: '1px solid #e5e7eb' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg" style={{ background: c.gradient }}>
                      <Icon size={26} />
                    </div>
                    <div>
                      <div className="font-black text-[#0a1628] text-lg leading-tight">{c.type}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Best For</div>
                    <div className="text-gray-700 text-sm">{c.bestFor}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl p-3 border border-gray-200 text-center bg-white">
                      <div className="text-xl font-black" style={{ color: c.color }}>{c.metric1.val}</div>
                      <div className="text-gray-400 text-[10px] mt-0.5">{c.metric1.label}</div>
                    </div>
                    <div className="rounded-xl p-3 border border-gray-200 text-center bg-white">
                      <div className="text-xl font-black" style={{ color: c.color }}>{c.metric2.val}</div>
                      <div className="text-gray-400 text-[10px] mt-0.5">{c.metric2.label}</div>
                    </div>
                  </div>
                </div>

                {/* Middle — formats */}
                <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-100">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">What We Produce</div>
                  <div className="space-y-2.5">
                    {c.formats.map(fmt => (
                      <div key={fmt} className="flex items-center gap-3">
                        <CheckCircle2 size={14} style={{ color: c.color }} className="flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{fmt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — strategy */}
                <div className="p-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Our Strategy</div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{c.strategy}</p>
                  <button onClick={openModal} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all w-full justify-center" style={{ background: c.color }}>
                    Start {c.type.split('&')[0].trim()} Strategy <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )
          })()}
        </section>

        {/* ── Content Funnel ───────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Content Funnel Strategy" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Content for Every Stage of the Buyer Journey
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Most brands only create awareness content. We build content across all four funnel stages — so your brand appears whether someone is discovering their problem or comparing vendors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 rounded-3xl overflow-hidden">
            {contentFunnel.map((stage, i) => {
              const Icon = stage.icon
              return (
                <div key={i} className={`p-6 ${i < contentFunnel.length - 1 ? 'border-b md:border-b-0 md:border-r border-gray-200' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: `${stage.color}15` }}>
                      <Icon size={18} style={{ color: stage.color }} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: stage.color }}>Stage {i + 1}</div>
                      <div className="font-black text-[#0a1628] text-sm">{stage.stage}</div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Buyer Intent</div>
                      <div className="text-gray-600 text-xs">{stage.intent}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Content Formats</div>
                      <div className="space-y-1">
                        {stage.formats.map(fmt => (
                          <div key={fmt} className="flex items-center gap-1.5">
                            <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: stage.color }} />
                            <span className="text-gray-500 text-xs">{fmt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl p-2.5 border text-center" style={{ borderColor: `${stage.color}30`, background: `${stage.color}08` }}>
                    <div className="text-[9px] font-bold uppercase tracking-widest mb-0.5" style={{ color: stage.color }}>KPI</div>
                    <div className="text-gray-700 text-[10px] font-semibold">{stage.kpi}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Monthly Process ──────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="How We Work" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            What Happens Every Month
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            A repeatable monthly process so content is always planned, written, reviewed, and measured — not a reactive scramble at the end of the month.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 rounded-3xl overflow-hidden">
            {monthlyProcess.map((phase, i) => {
              const Icon = phase.icon
              return (
                <div key={i} className={`p-6 ${i < monthlyProcess.length - 1 ? 'border-b md:border-b-0 md:border-r border-gray-200' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: `${phase.color}15` }}>
                      <Icon size={18} style={{ color: phase.color }} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: phase.color }}>{phase.week}</div>
                      <div className="font-black text-[#0a1628] text-sm">{phase.phase}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {phase.tasks.map(task => (
                      <div key={task} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: phase.color }} />
                        <span className="text-gray-500 text-xs leading-relaxed">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Packages ─────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Packages" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Content Marketing Plans
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Three plans built around your content volume and business goals — from foundation-building to full-scale content engines.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div key={i}
                className={`rounded-3xl overflow-hidden border-2 transition-all cursor-pointer ${activePackage === i ? 'shadow-xl scale-[1.02]' : 'border-gray-200 hover:shadow-md'}`}
                style={{ borderColor: activePackage === i ? pkg.color : undefined }}
                onClick={() => setActivePackage(i)}>
                {/* Package header */}
                <div className="px-7 py-6 relative" style={{ background: `${pkg.color}12` }}>
                  {pkg.recommended && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-widest" style={{ background: pkg.color }}>
                      Most Popular
                    </div>
                  )}
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: pkg.color }}>{pkg.name}</div>
                  <div className="font-black text-[#0a1628] text-2xl mb-1">{pkg.volume}</div>
                  <div className="text-gray-400 text-sm">{pkg.summary}</div>
                </div>
                {/* Includes */}
                <div className="px-7 py-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Included</div>
                  <div className="space-y-2 mb-4">
                    {pkg.includes.map(item => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={13} style={{ color: pkg.color }} className="flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                  {pkg.notIncluded.length > 0 && (
                    <>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-2">Not included</div>
                      <div className="space-y-1.5 mb-4">
                        {pkg.notIncluded.map(item => (
                          <div key={item} className="flex items-start gap-2">
                            <div className="w-3 h-3 rounded-full border border-gray-200 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-xs">{item}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  <div className="text-xs text-gray-400 italic mb-5">{pkg.ideal}</div>
                  <button onClick={openModal} className="w-full py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all" style={{ background: pkg.color }}>
                    Get Started with {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Distribution Channels ────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Distribution" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Content Without Distribution Is Wasted
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Creating great content is only 50% of the job. We build a distribution engine so every piece reaches the right audience across the right channels.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {distributionChannels.map((ch, i) => {
              const Icon = ch.icon
              return (
                <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 px-5 py-4" style={{ background: `${ch.color}10`, borderBottom: `2px solid ${ch.color}30` }}>
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${ch.color}20` }}>
                      <Icon size={18} style={{ color: ch.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-[#0a1628] text-sm">{ch.channel}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{ch.reach} reach · {ch.effort} effort</div>
                    </div>
                  </div>
                  <div className="px-5 py-4 space-y-2">
                    <div className="text-gray-600 text-xs">{ch.best}</div>
                    <div className="text-xs font-semibold" style={{ color: ch.color }}>{ch.stat}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Metrics & Why Us ─────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel text="Analytics & Reporting" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                8 Metrics We Track Every Month
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Every number we report is connected to business outcomes — traffic, leads, authority, and revenue from content. No vanity metrics.
              </p>
              <div className="space-y-3">
                {metrics.map((m, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:border-teal-200 transition-all bg-white">
                    <div className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: m.color }} />
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-[#0a1628] text-sm mb-0.5">{m.metric}</div>
                      <div className="text-gray-400 text-xs">{m.why}</div>
                    </div>
                    <div className="text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0" style={{ background: `${m.color}15`, color: m.color }}>
                      Target: {m.good}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Kotibox Content */}
            <div>
              <SectionLabel text="Why Kotibox Content" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                What Makes Our Content Different
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Search, color: ACCENT, title: 'SEO-First Writing', desc: 'Every article is written around keyword research, structured with proper heading hierarchy, and optimised before it\'s published. Content without SEO is just a journal nobody reads.' },
                  { icon: Pen, color: '#6366f1', title: 'Industry-Matched Writers', desc: 'We do not assign a generalist to write about SaaS security or healthcare compliance. Writers are matched by domain expertise. Your content reads like it was written by someone in your industry.' },
                  { icon: Filter, color: '#f59e0b', title: 'Topic Cluster Architecture', desc: 'We build content authority through interconnected clusters, not isolated posts. One pillar page + 10 cluster articles dominates a topic area instead of barely ranking for one keyword.' },
                  { icon: RefreshCw, color: '#ec4899', title: 'Refresh-First Approach', desc: 'Before creating new content, we audit what you already have. Refreshing an underperforming article is 2–3x faster to results than writing from scratch. We start where the value is.' },
                  { icon: Activity, color: '#10b981', title: 'Content That Converts', desc: 'CTAs, lead magnets, and conversion elements are built into every piece. We do not produce content that earns traffic but generates zero business. Every article has a next step.' },
                  { icon: Calendar, color: '#0ea5e9', title: 'Client-Approved Calendar', desc: 'You see and approve every article title and brief before writing begins. The monthly content calendar is shared in a client portal — transparent, predictable, no surprises.' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:border-teal-200 hover:shadow-sm transition-all">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}15` }}>
                        <Icon size={18} style={{ color: item.color }} />
                      </div>
                      <div>
                        <div className="font-bold text-[#0a1628] text-sm mb-0.5">{item.title}</div>
                        <div className="text-gray-400 text-xs leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="relative rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #051a18 0%, #0a1628 100%)' }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-[100px]" style={{ background: ACCENT }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-8 blur-[80px]" style={{ background: '#5eead4' }} />
            <div className="relative px-8 md:px-16 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Free Content Audit</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Ready to Turn Your Blog<br />
                  <span style={{ color: '#5eead4' }}>Into a Lead Machine?</span>
                </h2>
                <p className="text-white/55 text-base max-w-md">
                  We audit your existing content, identify ranking gaps, and deliver a free 90-day content strategy roadmap — what to write, which formats to prioritise, and where the quickest wins are.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
                <button onClick={openModal} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white hover:opacity-90 transition-all text-sm whitespace-nowrap" style={{ background: ACCENT }}>
                  Get Free Content Audit <ArrowRight size={16} />
                </button>
                <Link href="/services/aeo-geo" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/80 border border-white/20 hover:bg-white/10 transition-all text-sm">
                  Explore AEO & GEO <ExternalLink size={14} />
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
            <p className="text-gray-500 text-base mb-10">Everything about content strategy, writing, SEO integration, and timelines.</p>
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
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3">Complete Your Marketing Stack</h2>
          <p className="text-gray-500 text-base mb-10">Content marketing drives the most value when combined with these services.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { slug: 'aeo-geo', tag: 'AEO & GEO', title: 'AEO & GEO Optimization', desc: 'Get your content cited in ChatGPT, Perplexity, and Google AI Overviews.', color: '#06b6d4', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80' },
              { slug: 'social-media', tag: 'Social Media', title: 'Social Media Marketing', desc: 'Repurpose and distribute your content across Instagram, LinkedIn, and YouTube.', color: '#ec4899', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80' },
              { slug: 'ppc', tag: 'PPC Ads', title: 'PPC Advertising', desc: 'Amplify your best-performing content with paid promotion for faster lead generation.', color: '#ef4444', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
              { slug: 'web-design', tag: 'Web Design', title: 'Website Design', desc: 'A high-converting website ensures every content visitor lands on a page built to convert.', color: '#f5a623', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80' },
            ].map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
                <div className="h-40 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-3" style={{ background: s.color }}>{s.tag}</span>
                  <h3 className="font-bold text-[#0a1628] group-hover:text-teal-600 transition-colors mb-1.5 text-sm leading-snug">{s.title}</h3>
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
