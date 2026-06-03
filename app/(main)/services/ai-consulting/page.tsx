'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, ChevronDown, ChevronUp,
  CheckCircle2, ExternalLink,
  Lightbulb, Target, Map, BarChart3,
  AlertTriangle, XCircle, TrendingUp, Clock,
  Users, Building2, Cpu, Shield,
  FileText, Layers, Star, Award,
  Search, Settings, RefreshCw, Zap,
  Brain, Package, Globe, CheckCheck,
  Calendar, MessageSquare, BookOpen, Activity,
  DollarSign, Briefcase, Eye, ArrowUpRight
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const ACCENT = '#3b82f6'
const ACCENT2 = '#1d4ed8'
const NAVY = '#0a1628'

// ─── Data ────────────────────────────────────────────────────────────────────

const maturityStages = [
  {
    stage: 1,
    label: 'Ad-hoc',
    icon: AlertTriangle,
    color: '#ef4444',
    tagline: 'Using AI tools individually, no strategy',
    signals: [
      'Teams using ChatGPT personally, not systematically',
      'No AI policy or governance in place',
      'Leadership unsure where AI fits in the business',
      'No measurement of AI impact or ROI',
    ],
    risk: 'Competitors building AI advantages while you experiment randomly',
    ourRole: 'Full AI strategy from scratch — opportunity mapping + roadmap',
  },
  {
    stage: 2,
    label: 'Aware',
    icon: Eye,
    color: '#f59e0b',
    tagline: 'Leadership engaged, exploring use cases',
    signals: [
      'AI mentioned in strategy documents and OKRs',
      'One or two ad-hoc AI pilots underway',
      'Budget discussions started but not committed',
      'No dedicated AI team or owner',
    ],
    risk: 'Pilots die in proof-of-concept stage — never scaled to business value',
    ourRole: 'Prioritise and structure pilots, build the business case for commitment',
  },
  {
    stage: 3,
    label: 'Active',
    icon: Zap,
    color: '#f97316',
    tagline: 'AI deployed in 1–3 areas, measurable outcomes',
    signals: [
      'At least one AI project live in production',
      'Basic AI governance policy exists',
      'Some ROI being measured, inconsistently',
      'Teams excited but working in silos',
    ],
    risk: 'Siloed AI initiatives prevent compounding — each team restarts from zero',
    ourRole: 'Coordinate cross-team AI strategy, build shared infrastructure',
  },
  {
    stage: 4,
    label: 'Advanced',
    icon: TrendingUp,
    color: '#10b981',
    tagline: 'AI embedded across core business processes',
    signals: [
      'AI in production across 3+ departments',
      'Dedicated AI team or Centre of Excellence',
      'Clear ROI tracking and regular review',
      'Internal AI capability being built',
    ],
    risk: 'Slowing pace of innovation — early AI advantages being eroded by competitors catching up',
    ourRole: 'Next-generation AI use cases, fine-tuning strategy, vendor optimisation',
  },
  {
    stage: 5,
    label: 'AI-Native',
    icon: Brain,
    color: '#3b82f6',
    tagline: 'AI is a core business capability, not a tool',
    signals: [
      'AI woven into product, ops, and strategy layers',
      'Proprietary models and data advantages built',
      'AI governance and ethics embedded',
      'Continuous AI capability development',
    ],
    risk: 'Maintaining lead — staying ahead as open models commoditise early advantages',
    ourRole: 'Strategic advisory, frontier AI exploration, competitive moat building',
  },
]

const costlyMistakes = [
  {
    mistake: 'Starting with technology, not the problem',
    icon: Cpu,
    color: '#ef4444',
    what: 'Companies announce "we\'re implementing AI" before identifying what business problem they\'re solving — then discover the technology was the answer looking for a question.',
    cost: 'Average: 6–12 months and ₹50L–₹2Cr sunk before pivot',
    howWePrevent: 'Every engagement starts with a business problem audit. We refuse to recommend a technology until we understand the measurable outcome you need.',
  },
  {
    mistake: 'Underestimating data readiness',
    icon: AlertTriangle,
    color: '#f59e0b',
    what: 'AI models are only as good as the data that trains or retrieves for them. Most companies discover their data is siloed, dirty, inconsistently labelled, or simply insufficient after beginning AI development.',
    cost: 'Average: 3–5 months of rework, adds 40–60% to total project cost',
    howWePrevent: 'Data readiness assessment is step 1 of every engagement. We map your data assets, quality, and gaps before writing a single line of AI strategy.',
  },
  {
    mistake: 'Building what you should buy (or vice versa)',
    icon: Package,
    color: '#f97316',
    what: 'Teams invest months building a custom LLM pipeline for a use case that a $200/month SaaS tool handles perfectly — or pay enterprise vendor prices for something your engineering team could build in 3 weeks.',
    cost: 'Average: 4–8 months and significant budget wasted on the wrong decision',
    howWePrevent: 'Our vendor-neutral assessment framework evaluates build vs buy vs partner for every use case against your team\'s capability, timeline, and budget.',
  },
  {
    mistake: 'No AI governance or ethics framework',
    icon: Shield,
    color: '#6366f1',
    what: 'Deploying AI without policies for data privacy, bias monitoring, model explainability, and user transparency — then scrambling when regulators, customers, or bad press forces a reactive response.',
    cost: 'Average: ₹5Cr+ in compliance costs, legal risk, reputational damage',
    howWePrevent: 'We deliver an AI governance framework as a core deliverable — covering data privacy, bias audits, transparency requirements, and a policy document your legal team can sign off on.',
  },
  {
    mistake: 'Treating AI as a one-time project',
    icon: RefreshCw,
    color: '#ec4899',
    what: 'AI systems degrade over time as data patterns change (model drift), new models supersede old ones, and business context evolves. Companies that "deploy and forget" see performance drop 20–40% within 12 months.',
    cost: 'Average: 30–40% performance degradation, requires expensive re-work at year 2',
    howWePrevent: 'We build model monitoring, retraining cadence, and a lifecycle management plan into every AI strategy — treating AI as infrastructure, not a project.',
  },
  {
    mistake: 'Ignoring change management',
    icon: Users,
    color: '#14b8a6',
    what: 'Technically excellent AI deployments that fail in practice because employees don\'t trust the output, don\'t know how to use it, or actively resist tools they see as threatening their jobs.',
    cost: 'Average: 60% of AI initiatives see <30% adoption in year 1 due to this alone',
    howWePrevent: 'Change management — communication strategy, training programmes, and adoption KPIs — is a required chapter of every AI roadmap we produce.',
  },
]

const deliverables = [
  {
    deliverable: 'AI Opportunity Matrix',
    icon: Target,
    color: ACCENT,
    format: 'Structured spreadsheet + narrative',
    pages: '20–30 rows',
    what: 'Every viable AI use case for your business scored across four dimensions: business value (1–10), implementation complexity (1–10), data readiness (1–10), and strategic fit (1–10). Prioritised into a 4-quadrant "Quick Wins vs Strategic Bets" view.',
    usedFor: 'Board presentations, budget allocation, team prioritisation, roadmap input',
  },
  {
    deliverable: '12-Month AI Roadmap',
    icon: Map,
    color: '#7c3aed',
    format: 'Visual roadmap + milestone doc',
    pages: '15–25 pages',
    what: 'Phased implementation plan with specific use cases allocated to quarters, team responsibilities, technology dependencies, success metrics, and go/no-go criteria at each phase gate.',
    usedFor: 'Executive alignment, OKR setting, vendor discussions, investor updates',
  },
  {
    deliverable: 'Data Readiness Report',
    icon: FileText,
    color: '#10b981',
    format: 'Audit report + action plan',
    pages: '10–20 pages',
    what: 'Assessment of your current data infrastructure, quality, labelling, and coverage for each proposed AI use case. Gap analysis with specific remediation actions and timeline estimates.',
    usedFor: 'Data engineering sprint planning, vendor selection, realistic timeline setting',
  },
  {
    deliverable: 'Build vs Buy Assessment',
    icon: BarChart3,
    color: '#f59e0b',
    format: 'Decision framework + recommendation',
    pages: '8–12 pages',
    what: 'For each prioritised use case: evaluated against 15 vendor solutions and a custom-build estimate. TCO (Total Cost of Ownership) comparison over 3 years, risk assessment, and a recommended decision with rationale.',
    usedFor: 'Technology procurement, budget planning, avoiding expensive wrong decisions',
  },
  {
    deliverable: 'AI Governance Framework',
    icon: Shield,
    color: '#ef4444',
    format: 'Policy document + process guidelines',
    pages: '12–18 pages',
    what: 'Data privacy policy, model bias auditing checklist, transparency requirements for customer-facing AI, incident response plan, and an AI ethics review process for future deployments.',
    usedFor: 'Legal and compliance sign-off, board governance, regulatory readiness, customer trust',
  },
  {
    deliverable: 'ROI Projection Model',
    icon: TrendingUp,
    color: '#ec4899',
    format: 'Financial model (Excel/Sheets)',
    pages: 'Live model',
    what: '3-year financial model projecting costs (development, infrastructure, team), time savings (hours × FTE cost), revenue impact, and risk-adjusted ROI for each prioritised use case. Scenario analysis for optimistic, base, and conservative cases.',
    usedFor: 'CFO/board sign-off, budget justification, prioritisation between competing initiatives',
  },
]

const whoWeWorkWith = [
  {
    role: 'CTO / VP Engineering',
    icon: Cpu,
    color: ACCENT,
    challenge: 'The board is asking "what\'s our AI strategy?" and you need a credible, costed answer — fast.',
    weHelp: 'We give you a defensible technical roadmap, vendor assessment, and ROI model you can present to the board with confidence — without months of internal research.',
    typical: ['Architecture decisions for AI infrastructure', 'Build vs buy framework for AI capabilities', 'Team upskilling roadmap', 'AI governance and security policy'],
  },
  {
    role: 'CEO / Founder',
    icon: Star,
    color: '#f97316',
    challenge: 'Competitors are announcing AI features and your investors are asking why you\'re behind. You need a clear narrative and a real plan.',
    weHelp: 'We identify the 3–5 AI initiatives that will actually move your business metrics — not the ones that make good press releases — and build the roadmap to get there.',
    typical: ['Competitive AI landscape analysis', 'AI-first product strategy', 'Investor-ready AI narrative', 'Board-level AI presentation'],
  },
  {
    role: 'CPO / Head of Product',
    icon: Package,
    color: '#7c3aed',
    challenge: 'Product roadmap has ten AI feature ideas and you need to know which three to actually build — and in what order.',
    weHelp: 'We evaluate each feature idea for technical feasibility, data requirements, user value, and competitive moat — giving you a ranked, evidence-based product AI roadmap.',
    typical: ['AI feature prioritisation framework', 'User need validation for AI features', 'Competitive product analysis', 'Data requirements per feature'],
  },
  {
    role: 'COO / Operations Head',
    icon: Settings,
    color: '#10b981',
    challenge: 'You can see 20 manual processes that could be automated, but no clear path on which to tackle first or how to budget for it.',
    weHelp: 'Process audit that quantifies the time cost of each manual workflow, ranks by automation ROI, and produces a 6-month execution plan with realistic cost and timeline estimates.',
    typical: ['Operations process audit', 'Automation opportunity prioritisation', 'Vendor selection for ops AI tools', 'Change management planning'],
  },
]

const engagementFormats = [
  {
    format: 'AI Strategy Sprint',
    icon: Zap,
    color: ACCENT,
    duration: '2 weeks',
    delivery: 'Remote + 1 on-site workshop',
    best: 'Companies that need a complete AI strategy quickly — board deadline, funding round, or competitive pressure',
    includes: ['Day 1–2: Discovery workshop (leadership team)', 'Day 3–7: Research, benchmarking, use case mapping', 'Day 8–12: Roadmap, deliverables, financial model draft', 'Day 13–14: Presentation, Q&A, revision'],
    deliverableSet: ['AI Opportunity Matrix', '12-Month Roadmap', 'ROI Projection Model', 'Executive Presentation'],
    whoJoins: 'CEO/CTO + 3–4 functional heads',
  },
  {
    format: 'Comprehensive AI Audit',
    icon: Search,
    color: '#7c3aed',
    duration: '4–6 weeks',
    delivery: 'Hybrid — workshops + async research',
    best: 'Enterprises that want a thorough, board-ready AI strategy with full governance and vendor assessments',
    includes: ['Week 1: Executive discovery + department interviews', 'Week 2: Data audit + technical assessment', 'Week 3: Use case deep-dives + vendor research', 'Week 4–5: All 6 deliverables drafted', 'Week 6: Review, revisions, final presentation'],
    deliverableSet: ['All 6 deliverables', 'Governance framework', 'Data readiness report', 'Build vs buy assessment'],
    whoJoins: 'Full leadership team + technical leads + data owners',
  },
  {
    format: 'Fractional AI Officer',
    icon: Briefcase,
    color: '#f59e0b',
    duration: 'Ongoing — 3–12 months',
    delivery: 'Weekly calls + Slack access + monthly on-site',
    best: 'Companies that want ongoing AI leadership without hiring a full-time Chief AI Officer',
    includes: ['Weekly 60-min strategy call with founding team', 'Unlimited async questions (Slack/email)', 'Monthly on-site workshop (1 day)', 'Quarterly AI strategy review and roadmap update', 'Vendor negotiation support', 'Team AI training sessions (quarterly)'],
    deliverableSet: ['Living AI roadmap', 'Monthly strategy memo', 'Vendor shortlists', 'Team training materials'],
    whoJoins: 'Embedded alongside your leadership team',
  },
]

const workshopAgenda = [
  {
    session: 'Session 1',
    time: 'Morning, Day 1',
    title: 'Business Context & Goals',
    color: ACCENT,
    activities: ['Business model, revenue drivers, and cost structure review', 'Top 5 strategic priorities for the next 18 months', 'Current technology stack and data landscape', 'Competitive positioning and differentiation'],
    output: 'Business context document — the foundation for every AI decision that follows',
  },
  {
    session: 'Session 2',
    time: 'Afternoon, Day 1',
    title: 'Pain Point & Opportunity Mapping',
    color: '#7c3aed',
    activities: ['Department heads present top 3 operational bottlenecks', 'Customer experience friction points inventory', 'Revenue opportunities currently missed due to capacity', 'Data assets currently underutilised'],
    output: 'Raw opportunity list — 20–40 candidate AI use cases before prioritisation',
  },
  {
    session: 'Session 3',
    time: 'Morning, Day 2',
    title: 'AI Literacy Calibration',
    color: '#f59e0b',
    activities: ['What AI can and cannot do — honest capability overview', 'Competitor AI landscape (what your industry is actually doing)', 'Review of 3–5 case studies from similar businesses', 'Common pitfalls and failure modes — the mistakes workshop'],
    output: 'Aligned, realistic understanding of AI potential across the leadership team',
  },
  {
    session: 'Session 4',
    time: 'Afternoon, Day 2',
    title: 'Prioritisation & Roadmap Draft',
    color: '#10b981',
    activities: ['Score each use case on the 4-dimension matrix (live)', 'Classify into Quick Wins, Strategic Bets, Explore Later, Skip', 'Sequencing based on dependencies and resource constraints', 'First draft of 12-month roadmap timeline'],
    output: 'Prioritised use case shortlist + draft roadmap — refined post-workshop into final deliverables',
  },
]

const evidenceNumbers = [
  { metric: '50+', label: 'AI Strategies delivered across sectors', icon: Map, color: ACCENT },
  { metric: '380%', label: 'Average ROI clients see in year 1', icon: TrendingUp, color: '#10b981' },
  { metric: '6 weeks', label: 'From engagement start to board-ready strategy', icon: Clock, color: '#f97316' },
  { metric: '3×', label: 'More AI projects succeed with upfront strategy vs ad-hoc', icon: CheckCheck, color: '#7c3aed' },
]

const faqs = [
  {
    q: 'Why do we need external AI consulting — can\'t we figure this out internally?',
    a: 'You can — but at significant cost in time and mistakes. Internal teams face three structural disadvantages: (1) They don\'t know what they don\'t know — they lack the cross-industry pattern recognition that comes from seeing 50+ AI implementations. (2) Internal political dynamics often mean the highest-ROI initiatives lose to the ones that are easiest to champion. (3) Research takes months internally that we compress into days using existing benchmarks and vendor knowledge. Most clients tell us they save 6–12 months of internal exploration and avoid at least one expensive wrong decision that pays for the engagement many times over.',
  },
  {
    q: 'What is the difference between AI consulting and just hiring an AI development agency?',
    a: 'An AI development agency builds what you tell them to build. AI consulting tells you what to build, in what order, using which technology, with what team structure — before the first line of code is written. Most failed AI projects fail not because of execution but because of strategy: solving the wrong problem, choosing the wrong approach, or underestimating the data and organisational requirements. We sit upstream of execution. Many of our consulting clients then engage us for development too — but the strategy engagement is independent and valuable even if you build elsewhere.',
  },
  {
    q: 'How long does an AI strategy engagement take?',
    a: 'Our AI Strategy Sprint delivers a complete, board-ready AI strategy in 2 weeks. The Comprehensive AI Audit takes 4–6 weeks and produces all six deliverables including data readiness, governance, and vendor assessments. The Fractional AI Officer is ongoing — typically 3–12 months. The right format depends on urgency, depth required, and how much existing AI context your leadership team has. We scope this during a free 45-minute discovery call.',
  },
  {
    q: 'What industries have you advised on AI strategy?',
    a: 'We have completed AI strategy engagements across SaaS, fintech, healthcare, e-commerce, edtech, logistics, real estate, media, legal, and manufacturing. Each industry has distinct data assets, regulatory constraints, and competitive dynamics that shape the AI opportunity. We bring cross-industry pattern recognition — knowing what worked at an e-commerce company that can be adapted for a logistics client, for example — alongside industry-specific knowledge.',
  },
  {
    q: 'Will the AI roadmap you produce be implementable by our internal team?',
    a: 'Yes — implementability is a core design constraint of every roadmap we produce. We assess your current team\'s AI capability as part of the engagement, and every use case in the roadmap is matched to an implementation approach (internal build, external agency, SaaS tool, or hybrid) that is realistic for your team. We also produce team upskilling recommendations and, where needed, team structure recommendations (whether to hire, train, or partner). A roadmap that looks great on paper but requires capabilities you don\'t have for 18 months is not a useful roadmap.',
  },
  {
    q: 'Do you recommend specific vendors, or are you neutral?',
    a: 'We are vendor-neutral. We do not take referral fees or commissions from any AI vendor or platform. Our Build vs Buy Assessment evaluates tools based purely on fit for your use case, team capability, and total cost of ownership. We will recommend a $50/month SaaS tool if it is the right answer, and we will recommend against a major enterprise platform if the value does not justify the cost and lock-in. Our only financial incentive is delivering a strategy that makes you successful.',
  },
  {
    q: 'What do you need from our side to run the strategy engagement?',
    a: 'The core requirement is 2–3 days of access to your leadership team for the discovery workshop (CEO/CTO/COO and 2–3 functional heads). Beyond that: access to current technology stack documentation, basic financials (revenue, headcount, cost structure — NDAs signed before sharing), any existing AI initiatives or experiments, and access to 1–2 people per department for 30-minute interviews during weeks 2–3. We handle all the research, benchmarking, and synthesis. Your team\'s time commitment is concentrated in the workshop days.',
  },
  {
    q: 'Can the strategy engagement lead to an ongoing development engagement with Kotibox?',
    a: 'Yes — and many clients choose this path. The strategy engagement is fully independent; you receive all deliverables and can implement with any team. For clients who choose to continue with us for development, the strategy work accelerates and de-risks the implementation significantly — we already understand your business deeply, the priorities are clear, and the data readiness gaps are mapped. There is no obligation, and we price strategy and development separately.',
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
      <button onClick={() => onToggle(index)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-blue-50/40 transition-colors">
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

export default function AIConsultingPage() {
  const { openModal } = useModal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeStage, setActiveStage] = useState(0)
  const [activeMistake, setActiveMistake] = useState(0)
  const [activeDeliverable, setActiveDeliverable] = useState(0)
  const [activeRole, setActiveRole] = useState(0)
  const [activeFormat, setActiveFormat] = useState(0)
  const [activePackage, setActivePackage] = useState(1)

  const stage = maturityStages[activeStage]
  const StageIcon = stage.icon
  const mistake = costlyMistakes[activeMistake]
  const MistakeIcon = mistake.icon
  const deliverable = deliverables[activeDeliverable]
  const DeliverableIcon = deliverable.icon
  const role = whoWeWorkWith[activeRole]
  const RoleIcon = role.icon
  const format = engagementFormats[activeFormat]
  const FormatIcon = format.icon

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #040d1a 0%, #0a1628 55%, #04102a 100%)' }}>
        <div className="absolute top-0 right-0 w-[900px] h-[700px] rounded-full opacity-[0.08] blur-[160px]" style={{ background: ACCENT }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[130px]" style={{ background: '#93c5fd' }} />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `radial-gradient(circle, ${ACCENT} 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-32 pb-20">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium bg-white/8 border border-white/15 px-4 py-2 rounded-full transition-colors mb-10">
            <ArrowLeft size={15} /> Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-xs font-extrabold tracking-wider uppercase" style={{ background: ACCENT }}>
                  <Lightbulb size={12} /> AI Development
                </span>
                <span className="text-white/40 text-sm">Consulting & Strategy</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
                Your AI Strategy<br />
                <span style={{ color: '#93c5fd' }}>Before the First</span><br />
                Line of Code
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl">
                We work with your leadership team to identify the highest-ROI AI opportunities, build a phased implementation roadmap, and ensure you avoid the six most expensive AI mistakes — before you commit a single rupee to development.
              </p>

              {/* Social proof strip */}
              <div className="flex flex-wrap gap-4 mb-10">
                {evidenceNumbers.map((e, i) => {
                  const Icon = e.icon
                  return (
                    <div key={i} className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border border-white/10" style={{ background: 'rgba(59,130,246,0.1)' }}>
                      <Icon size={14} style={{ color: e.color }} />
                      <div>
                        <span className="text-white font-black text-sm">{e.metric}</span>
                        <span className="text-white/40 text-xs ml-1.5">{e.label}</span>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-wrap gap-4">
                <button onClick={openModal} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all shadow-lg" style={{ background: ACCENT }}>
                  Book Free Discovery Call <ArrowRight size={16} />
                </button>
                <Link href="/live-demo" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white border border-white/20 hover:bg-white/10 transition-all">
                  See AI Products We Built <ExternalLink size={14} />
                </Link>
              </div>
            </div>

            {/* Right — AI Readiness Diagnostic widget */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl" style={{ background: '#040d1a' }}>
                {/* Header */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-white/8" style={{ background: 'rgba(59,130,246,0.08)' }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: ACCENT }}>
                    <Search size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">AI Readiness Diagnostic</div>
                    <div className="text-white/30 text-[10px]">Based on 50+ strategy engagements</div>
                  </div>
                  <div className="ml-auto text-[10px] font-bold px-2 py-1 rounded-full" style={{ background: `${ACCENT}20`, color: ACCENT }}>Live Score</div>
                </div>

                {/* Score gauge */}
                <div className="px-6 py-5">
                  <div className="flex items-end justify-between mb-3">
                    <div>
                      <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Your AI Maturity</div>
                      <div className="text-4xl font-black" style={{ color: ACCENT }}>Stage 2</div>
                      <div className="text-white/40 text-xs mt-0.5">Aware — exploring use cases</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Industry Avg</div>
                      <div className="text-2xl font-black text-white/30">Stage 2.8</div>
                    </div>
                  </div>

                  {/* Progress bar — 5 stages */}
                  <div className="flex gap-1 mb-5">
                    {maturityStages.map((s, i) => (
                      <div key={i} className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                        <div className="h-full rounded-full transition-all" style={{ width: i <= 1 ? '100%' : '0%', background: i === 1 ? ACCENT : '#10b981' }} />
                      </div>
                    ))}
                  </div>

                  {/* Dimension scores */}
                  <div className="space-y-2.5">
                    {[
                      { dim: 'Data Infrastructure', score: 3, max: 10, color: '#f59e0b' },
                      { dim: 'AI Governance', score: 1, max: 10, color: '#ef4444' },
                      { dim: 'Team AI Capability', score: 4, max: 10, color: '#f97316' },
                      { dim: 'Use Case Clarity', score: 2, max: 10, color: ACCENT },
                      { dim: 'Leadership Alignment', score: 6, max: 10, color: '#10b981' },
                    ].map((d, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-white/50 text-[10px] w-32 flex-shrink-0">{d.dim}</span>
                        <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                          <div className="h-full rounded-full" style={{ width: `${(d.score / d.max) * 100}%`, background: d.color }} />
                        </div>
                        <span className="text-[10px] font-black flex-shrink-0" style={{ color: d.color }}>{d.score}/10</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendation */}
                <div className="mx-4 mb-4 p-4 rounded-xl border" style={{ borderColor: `${ACCENT}30`, background: `${ACCENT}08` }}>
                  <div className="flex items-start gap-2.5">
                    <Lightbulb size={13} style={{ color: ACCENT }} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white text-xs font-semibold mb-1">Top Recommendation</div>
                      <div className="text-white/50 text-[10px] leading-relaxed">AI Governance score (1/10) is your biggest risk. Before scaling any AI deployment, a governance framework is required to avoid compliance exposure.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-5 -right-5 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl z-10" style={{ borderColor: `${ACCENT}40` }}>
                <div className="flex items-center gap-2 mb-0.5">
                  <Award size={12} style={{ color: ACCENT }} />
                  <span className="text-white text-xs font-bold">Google AI Certified</span>
                </div>
                <div className="text-white/40 text-[10px]">Team holds Google Cloud AI certifications</div>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl z-10" style={{ borderColor: `${ACCENT}40` }}>
                <div className="flex items-center gap-2">
                  <CheckCheck size={12} style={{ color: '#10b981' }} />
                  <span className="text-white text-xs font-bold">Vendor-neutral advice</span>
                </div>
                <div className="text-white/40 text-[10px]">No referral fees — we recommend what fits, not what pays</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Evidence strip ────────────────────────────────────────────────── */}
      <section style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {evidenceNumbers.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="flex flex-col items-center text-center py-8 px-4">
                  <Icon size={20} className="mb-2" style={{ color: s.color }} />
                  <div className="text-2xl md:text-3xl font-black text-white">{s.metric}</div>
                  <div className="text-white/40 text-xs mt-1 leading-snug">{s.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

        {/* ── AI Maturity Model ────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="AI Maturity Model" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Where Does Your Organisation Sit Today?
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Every business is somewhere on this 5-stage AI maturity spectrum. Knowing your stage determines which moves give you the most leverage — and which mistakes to avoid.
          </p>

          {/* Stage selector — horizontal progress */}
          <div className="relative mb-10">
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 z-0" style={{ left: '10%', right: '10%' }} />
            <div className="grid grid-cols-5 gap-2 relative z-10">
              {maturityStages.map((s, i) => {
                const Icon = s.icon
                return (
                  <button key={i} onClick={() => setActiveStage(i)}
                    className={`flex flex-col items-center gap-2 group transition-all`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all border-2 ${activeStage === i ? 'scale-110 border-transparent' : 'border-gray-200 bg-white'}`}
                      style={activeStage === i ? { background: s.color } : {}}>
                      <Icon size={16} style={{ color: activeStage === i ? 'white' : s.color }} />
                    </div>
                    <div className={`text-xs font-bold transition-colors ${activeStage === i ? '' : 'text-gray-400'}`} style={activeStage === i ? { color: s.color } : {}}>
                      {s.label}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active stage detail */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200 rounded-3xl overflow-hidden">

            {/* Left — signals */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200" style={{ background: `${stage.color}05` }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${stage.color}18` }}>
                  <StageIcon size={22} style={{ color: stage.color }} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest" style={{ color: stage.color }}>Stage {stage.stage}</div>
                  <div className="font-black text-[#0a1628] text-xl">{stage.label}</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{stage.tagline}"</p>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">You're here if…</div>
              <div className="space-y-2.5">
                {stage.signals.map(signal => (
                  <div key={signal} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: `${stage.color}15` }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: stage.color }} />
                    </div>
                    <span className="text-gray-600 text-sm">{signal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle — risk */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-3 flex items-center gap-2">
                <AlertTriangle size={12} /> Risk at This Stage
              </div>
              <div className="rounded-2xl p-5 bg-red-50 border border-red-100 mb-6">
                <p className="text-red-700 text-sm leading-relaxed">{stage.risk}</p>
              </div>

              {/* Stage progression path */}
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Path to Next Stage</div>
              <div className="space-y-2">
                {stage.stage < 5 && maturityStages[stage.stage] && maturityStages[stage.stage].signals.slice(0, 3).map((next, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <ArrowUpRight size={12} style={{ color: maturityStages[stage.stage].color }} className="flex-shrink-0" />
                    <span className="text-gray-500 text-xs">{next}</span>
                  </div>
                ))}
                {stage.stage === 5 && (
                  <p className="text-gray-500 text-sm italic">You've reached AI-Native status. The focus shifts to maintaining competitive advantage and exploring frontier AI capabilities.</p>
                )}
              </div>
            </div>

            {/* Right — our role */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">How We Help at This Stage</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{stage.ourRole}</p>
                <div className="p-4 rounded-2xl border" style={{ borderColor: `${stage.color}30`, background: `${stage.color}06` }}>
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: stage.color }}>Recommended Engagement</div>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {stage.stage <= 2 && 'AI Strategy Sprint — 2 weeks to a complete roadmap and prioritised use case list.'}
                    {stage.stage === 3 && 'Comprehensive AI Audit — deep-dive to coordinate siloed initiatives and build shared infrastructure strategy.'}
                    {stage.stage >= 4 && 'Fractional AI Officer — ongoing strategic advisory to maintain and extend your AI advantage.'}
                  </p>
                </div>
              </div>
              <button onClick={openModal} className="mt-6 w-full py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all" style={{ background: stage.color }}>
                Talk to Us About Stage {stage.stage} <ArrowRight size={13} className="inline ml-1" />
              </button>
            </div>
          </div>
        </section>

        {/* ── Costly Mistakes ──────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Common Mistakes" color="#ef4444" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            The 6 Most Expensive AI Mistakes We See — and How We Prevent Them
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            These are not hypothetical. Each pattern below cost a real company millions and months — and is entirely avoidable with upfront strategy.
          </p>

          {/* Mistake selector */}
          <div className="flex flex-wrap gap-2 mb-8">
            {costlyMistakes.map((m, i) => {
              const Icon = m.icon
              return (
                <button key={i} onClick={() => setActiveMistake(i)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold transition-all border ${activeMistake === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                  style={activeMistake === i ? { background: m.color } : {}}>
                  <Icon size={12} />
                  #{i + 1}
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200 rounded-3xl overflow-hidden">

            {/* Left — the mistake */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200 bg-red-50/50">
              <div className="flex items-start gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${mistake.color}15` }}>
                  <MistakeIcon size={20} style={{ color: mistake.color }} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-red-400 mb-1">Mistake #{activeMistake + 1}</div>
                  <div className="font-black text-[#0a1628] text-base leading-tight">{mistake.mistake}</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{mistake.what}</p>
              <div className="rounded-xl p-4 border border-red-200 bg-red-50">
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign size={12} className="text-red-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Typical Cost</span>
                </div>
                <p className="text-red-700 text-sm font-semibold">{mistake.cost}</p>
              </div>
            </div>

            {/* Middle — how we prevent */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={16} style={{ color: '#10b981' }} />
                <span className="text-xs font-bold uppercase tracking-widest text-green-600">How We Prevent It</span>
              </div>
              <div className="rounded-xl p-5 border border-green-200 bg-green-50 mb-6">
                <p className="text-green-800 text-sm leading-relaxed">{mistake.howWePrevent}</p>
              </div>
              <div className="space-y-3">
                {costlyMistakes.map((m, i) => (
                  <div key={i} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${activeMistake === i ? 'border' : 'border border-transparent hover:border-gray-200'}`}
                    style={activeMistake === i ? { borderColor: `${m.color}40`, background: `${m.color}06` } : {}}
                    onClick={() => setActiveMistake(i)}>
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: m.color }} />
                    <span className={`text-xs font-medium ${activeMistake === i ? 'text-[#0a1628]' : 'text-gray-400'}`}>{m.mistake}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — CTA */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">The Pattern We See</div>
                <div className="space-y-3 mb-6">
                  {[
                    { phase: 'Month 1–2', event: 'Excitement — leadership announces AI initiative', icon: Star },
                    { phase: 'Month 3–5', event: 'Friction — unexpected blockers emerge mid-build', icon: AlertTriangle },
                    { phase: 'Month 6–9', event: 'Crisis — costly pivots or full restart required', icon: XCircle },
                    { phase: 'With strategy', event: 'Blockers identified and planned for before build starts', icon: CheckCircle2 },
                  ].map((p, i) => {
                    const Icon = p.icon
                    return (
                      <div key={i} className={`flex items-start gap-3 p-3 rounded-xl ${i === 3 ? 'bg-green-50 border border-green-200' : ''}`}>
                        <Icon size={13} className={i === 3 ? 'text-green-600' : i === 2 ? 'text-red-400' : 'text-gray-400'} />
                        <div>
                          <div className={`text-[10px] font-black uppercase tracking-widest ${i === 3 ? 'text-green-600' : 'text-gray-400'}`}>{p.phase}</div>
                          <div className={`text-xs ${i === 3 ? 'text-green-700 font-semibold' : 'text-gray-500'}`}>{p.event}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <button onClick={openModal} className="w-full py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all" style={{ background: ACCENT }}>
                Avoid These Mistakes <ArrowRight size={13} className="inline ml-1" />
              </button>
            </div>
          </div>
        </section>

        {/* ── Deliverables ─────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="What You Receive" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            6 Concrete Deliverables — Not Slides, Real Documents
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Every engagement ends with documents you can act on — present to your board, hand to your engineering team, or use to justify your AI budget.
          </p>

          {/* Deliverable pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {deliverables.map((d, i) => (
              <button key={i} onClick={() => setActiveDeliverable(i)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${activeDeliverable === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                style={activeDeliverable === i ? { background: d.color } : {}}>
                {d.deliverable.split(' ')[0]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 rounded-3xl overflow-hidden">

            {/* Left — active deliverable */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200" style={{ background: `${deliverable.color}05` }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${deliverable.color}18` }}>
                  <DeliverableIcon size={22} style={{ color: deliverable.color }} />
                </div>
                <div>
                  <div className="font-black text-[#0a1628] text-lg leading-tight">{deliverable.deliverable}</div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-gray-400">{deliverable.format}</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${deliverable.color}15`, color: deliverable.color }}>{deliverable.pages}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{deliverable.what}</p>
              <div className="rounded-xl p-4 border border-gray-200 bg-white">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Used For</div>
                <p className="text-gray-600 text-sm">{deliverable.usedFor}</p>
              </div>
            </div>

            {/* Right — all deliverables list */}
            <div className="p-8">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Complete Deliverable Set</div>
              <div className="space-y-3">
                {deliverables.map((d, i) => {
                  const Icon = d.icon
                  return (
                    <div key={i}
                      className={`flex items-start gap-4 p-4 rounded-2xl cursor-pointer transition-all border ${activeDeliverable === i ? 'shadow-sm' : 'border-transparent hover:border-gray-200'}`}
                      style={activeDeliverable === i ? { borderColor: `${d.color}40`, background: `${d.color}06` } : {}}
                      onClick={() => setActiveDeliverable(i)}>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${d.color}15` }}>
                        <Icon size={16} style={{ color: d.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-[#0a1628] text-sm leading-tight">{d.deliverable}</div>
                        <div className="text-gray-400 text-xs mt-0.5">{d.format} · {d.pages}</div>
                      </div>
                      {activeDeliverable === i && <ArrowRight size={14} style={{ color: d.color }} />}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Who We Work With ─────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Who This Is For" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Built for the People Responsible for AI Decisions
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Different roles have different AI challenges. Here is how we add value specific to your position.
          </p>

          {/* Role tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {whoWeWorkWith.map((r, i) => {
              const Icon = r.icon
              return (
                <button key={i} onClick={() => setActiveRole(i)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all border ${activeRole === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                  style={activeRole === i ? { background: r.color } : {}}>
                  <Icon size={13} />
                  {r.role.split(' ')[0]}
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200 rounded-3xl overflow-hidden">
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200" style={{ background: `${role.color}06` }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${role.color}18` }}>
                  <RoleIcon size={22} style={{ color: role.color }} />
                </div>
                <div className="font-black text-[#0a1628] text-xl">{role.role}</div>
              </div>
              <div className="rounded-xl p-4 border border-gray-200 bg-white mb-5">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Your Challenge</div>
                <p className="text-gray-600 text-sm leading-relaxed italic">"{role.challenge}"</p>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">How We Help</div>
              <p className="text-gray-600 text-sm leading-relaxed">{role.weHelp}</p>
            </div>
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Typical Asks from {role.role}</div>
              <div className="space-y-3">
                {role.typical.map(t => (
                  <div key={t} className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 bg-white hover:border-gray-200 transition-colors">
                    <CheckCircle2 size={14} style={{ color: role.color }} className="flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Engagement Fit</div>
                <div className="space-y-3">
                  {engagementFormats.map((ef, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: ef.color }} />
                      <div>
                        <div className="font-semibold text-[#0a1628] text-sm">{ef.format}</div>
                        <div className="text-gray-400 text-xs">{ef.duration}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={openModal} className="mt-6 w-full py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all" style={{ background: role.color }}>
                Book a Call for {role.role.split(' ')[0]}s <ArrowRight size={13} className="inline ml-1" />
              </button>
            </div>
          </div>
        </section>

        {/* ── Discovery Workshop ───────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="The Workshop" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            What Happens in the 2-Day Discovery Workshop
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            The workshop is the foundation of every engagement — four structured sessions that move from business context to a draft AI roadmap in 48 hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {workshopAgenda.map((session, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all">
                <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100" style={{ background: `${session.color}08` }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0" style={{ background: session.color }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest" style={{ color: session.color }}>{session.time}</div>
                    <div className="font-bold text-[#0a1628] text-sm">{session.title}</div>
                  </div>
                </div>
                <div className="px-6 py-5 space-y-4">
                  <div className="space-y-2">
                    {session.activities.map(act => (
                      <div key={act} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: session.color }} />
                        <span className="text-gray-500 text-sm">{act}</span>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl p-3.5 border border-gray-100 bg-gray-50 flex items-start gap-2">
                    <CheckCheck size={13} style={{ color: session.color }} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Session Output</div>
                      <div className="text-sm font-semibold text-gray-600">{session.output}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Engagement Formats / Packages ────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Engagement Formats" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Three Ways to Work With Us
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            From a focused 2-week sprint to ongoing fractional AI leadership — choose the depth that matches your need.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementFormats.map((ef, i) => {
              const Icon = ef.icon
              return (
                <div key={i}
                  className={`rounded-3xl overflow-hidden border-2 transition-all cursor-pointer ${activePackage === i ? 'shadow-xl scale-[1.02]' : 'border-gray-200 hover:shadow-md'}`}
                  style={{ borderColor: activePackage === i ? ef.color : undefined }}
                  onClick={() => setActivePackage(i)}>

                  <div className="px-7 py-6 relative" style={{ background: `${ef.color}10` }}>
                    {i === 1 && (
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-widest" style={{ background: ef.color }}>
                        Most Chosen
                      </div>
                    )}
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-3" style={{ background: `${ef.color}20` }}>
                      <Icon size={18} style={{ color: ef.color }} />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: ef.color }}>{ef.format}</div>
                    <div className="font-black text-[#0a1628] text-xl mb-1">{ef.duration}</div>
                    <div className="text-gray-400 text-xs">{ef.delivery}</div>
                  </div>

                  <div className="px-7 py-5">
                    <div className="rounded-xl p-3.5 border border-gray-100 bg-gray-50/60 mb-5">
                      <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">Best For</div>
                      <p className="text-gray-600 text-xs leading-relaxed">{ef.best}</p>
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">How It Runs</div>
                    <div className="space-y-2 mb-4">
                      {ef.includes.map(item => (
                        <div key={item} className="flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: ef.color }} />
                          <span className="text-gray-600 text-xs">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Deliverables</div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {ef.deliverableSet.map(d => (
                        <span key={d} className="text-[10px] font-semibold px-2.5 py-1 rounded-full text-white" style={{ background: ef.color }}>{d}</span>
                      ))}
                    </div>
                    <div className="text-xs text-gray-400 italic mb-5">Team involved: {ef.whoJoins}</div>
                    <button onClick={openModal} className="w-full py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all" style={{ background: ef.color }}>
                      Start {ef.format} <ArrowRight size={13} className="inline ml-1" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="relative rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #040d1a 0%, #0a1628 100%)' }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-12 blur-[100px]" style={{ background: ACCENT }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[80px] opacity-8" style={{ background: '#93c5fd' }} />
            <div className="relative px-8 md:px-16 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Free Discovery Call — 45 Minutes</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Tell Us Where You Are.<br />
                  <span style={{ color: '#93c5fd' }}>We'll Map Where to Go.</span>
                </h2>
                <p className="text-white/55 text-base max-w-md">
                  A free 45-minute call where we assess your current AI maturity, identify your highest-ROI opportunity, and give you an honest recommendation on which engagement makes sense — or whether you need us at all.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <button onClick={openModal} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white hover:opacity-90 transition-all text-sm whitespace-nowrap" style={{ background: ACCENT }}>
                  Book Free Discovery Call <ArrowRight size={16} />
                </button>
                <Link href="/services/generative-ai" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/80 border border-white/20 hover:bg-white/10 transition-all text-sm">
                  Explore Generative AI <ExternalLink size={14} />
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
            <p className="text-gray-500 text-base mb-10">Questions about AI strategy, consulting process, deliverables, and how we work — answered directly.</p>
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
          <SectionLabel text="After the Strategy" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3">Ready to Build? We Execute Too.</h2>
          <p className="text-gray-500 text-base mb-10">Once the roadmap is clear, we can build every AI initiative on it.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { slug: 'ai-chatbot', tag: 'AI Chatbot', title: 'AI Chatbot Development', desc: 'The most common first AI initiative — a chatbot trained on your data, deployed in 2–3 weeks.', color: '#6366f1', img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80' },
              { slug: 'ai-automation', tag: 'AI Automation', title: 'AI Workflow Automation', desc: 'Once the highest-ROI manual processes are identified, we automate them end to end.', color: '#10b981', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
              { slug: 'generative-ai', tag: 'Generative AI', title: 'Generative AI Solutions', desc: 'Build the GenAI features your product roadmap calls for — text, images, code, and audio.', color: '#f97316', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80' },
              { slug: 'ai-integration', tag: 'AI Integration', title: 'AI Integration Services', desc: 'Add AI to your existing product — we handle the provider selection, architecture, and cost optimisation.', color: '#7c3aed', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80' },
            ].map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
                <div className="h-40 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-3" style={{ background: s.color }}>{s.tag}</span>
                  <h3 className="font-bold text-[#0a1628] group-hover:text-blue-600 transition-colors mb-1.5 text-sm leading-snug">{s.title}</h3>
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
