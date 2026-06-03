'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, ChevronDown, ChevronUp,
  CheckCircle2, ExternalLink,
  Zap, RefreshCw, GitBranch, Layers,
  Mail, Users, FileText, DollarSign,
  BarChart3, TrendingUp, Clock, Shield,
  Database, Code2, Globe, Settings,
  AlertCircle, Play, Pause, CheckCheck,
  Inbox, UserCheck, CreditCard, Package,
  Calendar, Bell, Search, Filter,
  Sparkles, Brain, Cpu, Activity,
  ArrowDown, Minus, Plus, X,
  Building2, ShoppingCart, Heart, GraduationCap,
  Bot, MessageSquare, Send, Target
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const ACCENT = '#10b981'
const ACCENT2 = '#059669'
const NAVY = '#0a1628'

// ─── Data ────────────────────────────────────────────────────────────────────

const departments = [
  {
    dept: 'Sales & CRM',
    icon: TrendingUp,
    color: '#10b981',
    impact: '62% faster lead follow-up',
    before: [
      { task: 'Sales rep manually enters lead from form into CRM', time: '8 min/lead', pain: 'Leads go cold during data entry delays' },
      { task: 'Follow-up email written and sent manually', time: '12 min/lead', pain: '40% of leads never get followed up' },
      { task: 'Deal stage updated after each call', time: '5 min/deal', pain: 'CRM data always stale — no real pipeline view' },
      { task: 'Weekly sales report compiled from spreadsheets', time: '3 hrs/week', pain: 'Always 1 week behind on pipeline data' },
    ],
    after: [
      { task: 'Lead auto-created in CRM with full context on form submit', time: '<2 sec', win: 'Zero manual entry — sales reps only close' },
      { task: 'Personalised follow-up sequence triggers immediately', time: 'Instant', win: '100% of leads contacted within 5 minutes' },
      { task: 'Deal stage auto-updated from call notes + email signals', time: 'Real-time', win: 'Pipeline always accurate for forecasting' },
      { task: 'Live dashboard updates as deals move — no report prep', time: 'Always live', win: 'Sales manager has real-time visibility always' },
    ],
    workflows: ['Lead capture → CRM sync', 'Email sequence automation', 'Deal stage progression', 'Proposal generation', 'Contract e-sign flow', 'Revenue reporting'],
  },
  {
    dept: 'Marketing',
    icon: Target,
    color: '#6366f1',
    impact: '10x content output, same team',
    before: [
      { task: 'Content brief written for each blog post manually', time: '45 min/brief', pain: 'Writers wait for briefs — bottleneck every week' },
      { task: 'Blog published, then manually posted to all social channels', time: '30 min/post', pain: 'Social channels lag 2–3 days behind blog' },
      { task: 'Leads manually tagged and moved between email lists', time: '2 hrs/week', pain: 'Wrong leads get wrong nurture sequences' },
      { task: 'Monthly analytics pulled from GA, Ads, CRM manually', time: '4 hrs/month', pain: 'Reporting takes time away from strategy' },
    ],
    after: [
      { task: 'AI generates content brief from keyword + competitor analysis', time: '90 sec', win: 'Writers always have briefs ready to go' },
      { task: 'Blog publish triggers auto-distribution across all channels', time: 'Instant', win: 'All channels updated the moment content goes live' },
      { task: 'Lead scoring auto-segments contacts to correct sequences', time: 'Real-time', win: 'Every lead gets the right nurture path automatically' },
      { task: 'Unified dashboard aggregates all channel data automatically', time: 'Always live', win: 'Full-funnel view available at any time, no prep' },
    ],
    workflows: ['Content brief generation', 'Blog-to-social distribution', 'Lead scoring & segmentation', 'Email nurture triggers', 'Ad performance reporting', 'UTM tracking automation'],
  },
  {
    dept: 'HR & Recruiting',
    icon: UserCheck,
    color: '#f59e0b',
    impact: '70% reduction in time-to-hire',
    before: [
      { task: 'CVs screened manually for each open role', time: '3 hrs/role', pain: 'Good candidates slip through due to volume' },
      { task: 'Interview slots emailed back and forth with candidates', time: '45 min/candidate', pain: 'Scheduling takes longer than the interview' },
      { task: 'Offer letter manually drafted for each hire', time: '30 min/offer', pain: 'Errors in compensation details cause re-dos' },
      { task: 'Onboarding checklist emailed to new joiners manually', time: '1 hr/joiner', pain: 'Items missed — new joiners feel disoriented' },
    ],
    after: [
      { task: 'AI screens CVs against role criteria, ranks top candidates', time: '< 3 min', win: 'Only qualified candidates reach the recruiter' },
      { task: 'Candidate self-books via Calendly link in auto-email', time: 'Zero', win: 'Scheduling friction eliminated entirely' },
      { task: 'Offer letter auto-generated from approved template + data', time: '< 60 sec', win: 'Accurate, consistent offers every time' },
      { task: 'Onboarding sequence auto-triggered on Day 0 — all tasks tracked', time: 'Automated', win: 'New joiners productive from Day 1' },
    ],
    workflows: ['CV screening & ranking', 'Interview scheduling', 'Offer letter generation', 'Onboarding checklist automation', 'Employee offboarding', 'Leave & attendance sync'],
  },
  {
    dept: 'Finance & Ops',
    icon: CreditCard,
    color: '#0ea5e9',
    impact: '85% reduction in invoice processing time',
    before: [
      { task: 'Invoices received by email, manually keyed into accounting software', time: '15 min/invoice', pain: 'Data entry errors cause payment disputes' },
      { task: 'Expense claims reviewed and approved one by one', time: '20 min/claim', pain: 'Employees wait 2+ weeks for reimbursement' },
      { task: 'Monthly close reports compiled from multiple systems manually', time: '2 days/month', pain: 'Finance team buried at month-end every cycle' },
      { task: 'Vendor payment reminders sent manually before due dates', time: '1 hr/week', pain: 'Late payments damage vendor relationships' },
    ],
    after: [
      { task: 'AI extracts invoice data via OCR, auto-posts to accounting system', time: '< 30 sec', win: '99.8% accuracy, zero manual keying' },
      { task: 'Expense claims auto-approved within policy limits, flagged otherwise', time: 'Instant', win: 'Same-day reimbursement for compliant claims' },
      { task: 'Live P&L dashboard aggregates all systems in real time', time: 'Always live', win: 'Month-close is a 30-minute review, not 2 days' },
      { task: 'Payment reminders auto-triggered 7, 3, and 1 day before due date', time: 'Automated', win: 'Zero late payments, zero relationship damage' },
    ],
    workflows: ['Invoice OCR & processing', 'Expense approval workflows', 'Purchase order automation', 'Vendor payment reminders', 'Financial close automation', 'Budget vs actual reporting'],
  },
  {
    dept: 'Customer Support',
    icon: MessageSquare,
    color: '#ec4899',
    impact: '3x ticket resolution speed',
    before: [
      { task: 'Support agent reads ticket, searches knowledge base for answer', time: '8 min/ticket', pain: 'Same questions answered 100 times per week' },
      { task: 'Ticket categorised and assigned to correct team manually', time: '5 min/ticket', pain: 'Mislabelled tickets routed to wrong team' },
      { task: 'SLA breach notices sent manually when tickets go overdue', time: '1 hr/day', pain: 'Tickets breach SLA before anyone notices' },
      { task: 'CSAT survey emailed manually after ticket resolution', time: '2 min/ticket', pain: 'Only 20% response rate due to delay' },
    ],
    after: [
      { task: 'AI suggests answer from knowledge base before agent opens ticket', time: '< 1 sec', win: 'Agents resolve 3x tickets in the same time' },
      { task: 'ML model categorises and routes tickets automatically on arrival', time: 'Instant', win: '97% routing accuracy — correct team every time' },
      { task: 'SLA countdown auto-escalates tickets before breach occurs', time: 'Proactive', win: 'Zero SLA breaches — escalated 1 hour early' },
      { task: 'CSAT survey auto-sent 2 hours post-resolution via WhatsApp', time: 'Automated', win: '68% response rate — 3x improvement' },
    ],
    workflows: ['Ticket classification & routing', 'AI response suggestions', 'SLA monitoring & alerts', 'CSAT survey automation', 'Escalation workflows', 'Support analytics reporting'],
  },
]

const integrations = [
  { name: 'HubSpot', category: 'CRM', color: '#ff7a59' },
  { name: 'Salesforce', category: 'CRM', color: '#00a1e0' },
  { name: 'Zoho CRM', category: 'CRM', color: '#e42527' },
  { name: 'Pipedrive', category: 'CRM', color: '#1a1a1a' },
  { name: 'Mailchimp', category: 'Email', color: '#ffe01b' },
  { name: 'ActiveCampaign', category: 'Email', color: '#356ae6' },
  { name: 'Klaviyo', category: 'Email', color: '#1d1d1b' },
  { name: 'SendGrid', category: 'Email', color: '#1a82e2' },
  { name: 'Slack', category: 'Comms', color: '#4a154b' },
  { name: 'Microsoft Teams', category: 'Comms', color: '#464eb8' },
  { name: 'WhatsApp API', category: 'Comms', color: '#25d366' },
  { name: 'Intercom', category: 'Comms', color: '#286efa' },
  { name: 'QuickBooks', category: 'Finance', color: '#2ca01c' },
  { name: 'Xero', category: 'Finance', color: '#13b5ea' },
  { name: 'Razorpay', category: 'Finance', color: '#2d9cdb' },
  { name: 'Stripe', category: 'Finance', color: '#6772e5' },
  { name: 'Google Workspace', category: 'Productivity', color: '#4285f4' },
  { name: 'Notion', category: 'Productivity', color: '#000000' },
  { name: 'Airtable', category: 'Productivity', color: '#fcb400' },
  { name: 'Jira', category: 'Productivity', color: '#0052cc' },
  { name: 'Shopify', category: 'E-com', color: '#96bf48' },
  { name: 'WooCommerce', category: 'E-com', color: '#7f54b3' },
  { name: 'n8n', category: 'Automation', color: '#ea4b71' },
  { name: 'Zapier', category: 'Automation', color: '#ff4a00' },
  { name: 'Make (Integromat)', category: 'Automation', color: '#6d00cc' },
  { name: 'AWS Lambda', category: 'Cloud', color: '#ff9900' },
  { name: 'Google Cloud', category: 'Cloud', color: '#4285f4' },
  { name: 'Supabase', category: 'Database', color: '#3ecf8e' },
]

const integrationCategories = ['All', 'CRM', 'Email', 'Comms', 'Finance', 'Productivity', 'E-com', 'Automation', 'Cloud', 'Database']

const roiMetrics = [
  {
    title: 'Invoice Processing',
    before: { label: '15 min/invoice', subLabel: 'Manual entry + approval' },
    after: { label: '30 sec/invoice', subLabel: 'AI OCR + auto-post' },
    saving: '97% time saved',
    savingColor: '#10b981',
    monthlyImpact: '~60 hrs/month freed up',
  },
  {
    title: 'Lead Follow-Up',
    before: { label: '4–24 hrs avg', subLabel: 'Waiting for sales rep availability' },
    after: { label: '< 5 minutes', subLabel: 'Auto-triggered personalised sequence' },
    saving: '99% faster',
    savingColor: '#6366f1',
    monthlyImpact: '+34% lead conversion rate',
  },
  {
    title: 'Onboarding New Hire',
    before: { label: '8–12 hrs HR time', subLabel: 'Per new joiner across 3 weeks' },
    after: { label: '45 min setup', subLabel: 'Then fully automated' },
    saving: '90% time saved',
    savingColor: '#f59e0b',
    monthlyImpact: 'HR team focuses on culture, not admin',
  },
  {
    title: 'Support Ticket Routing',
    before: { label: '5 min manual triage', subLabel: 'Per ticket, by L1 agent' },
    after: { label: 'Instant (< 1 sec)', subLabel: 'ML model, 97% accuracy' },
    saving: 'Instant vs 5 min',
    savingColor: '#ec4899',
    monthlyImpact: '3x ticket resolution throughput',
  },
]

const automationTypes = [
  {
    type: 'Document Intelligence',
    icon: FileText,
    color: '#10b981',
    desc: 'Extract, classify, and process data from any document — invoices, contracts, CVs, forms — using AI-powered OCR and NLP.',
    examples: ['Invoice data extraction', 'Contract clause analysis', 'CV parsing & scoring', 'Form data processing'],
  },
  {
    type: 'Multi-Step Workflow Automation',
    icon: GitBranch,
    color: '#6366f1',
    desc: 'Chain together multiple apps and actions into a single automated workflow triggered by an event, schedule, or condition.',
    examples: ['Lead-to-customer lifecycle', 'Order fulfillment pipeline', 'Employee onboarding sequence', 'Content publish pipeline'],
  },
  {
    type: 'AI Decision Engines',
    icon: Brain,
    color: '#f59e0b',
    desc: 'Replace manual judgment calls with ML models that score, classify, and route items based on patterns in your historical data.',
    examples: ['Lead qualification scoring', 'Credit risk assessment', 'Support ticket priority', 'Churn prediction & alert'],
  },
  {
    type: 'Data Sync & ETL',
    icon: RefreshCw,
    color: '#0ea5e9',
    desc: 'Keep all your business systems in sync — bidirectional data flows between CRM, ERP, accounting, support, and analytics tools.',
    examples: ['CRM ↔ accounting sync', 'Inventory level alerts', 'Cross-platform reporting', 'Data warehouse pipelines'],
  },
  {
    type: 'Notification & Alert Systems',
    icon: Bell,
    color: '#ec4899',
    desc: 'Build intelligent alerting systems that notify the right person at the right time via Slack, email, SMS, or WhatsApp.',
    examples: ['SLA breach alerts', 'Payment due reminders', 'Anomaly detection alerts', 'Performance threshold warnings'],
  },
  {
    type: 'Scheduled Reporting',
    icon: BarChart3,
    color: '#a855f7',
    desc: 'Automate the collection, aggregation, and delivery of business reports — daily, weekly, or monthly — to any channel.',
    examples: ['Daily sales digest', 'Weekly marketing report', 'Monthly P&L summary', 'Real-time KPI dashboard'],
  },
]

const packages = [
  {
    name: 'Automation Starter',
    color: '#6366f1',
    workflows: '2 automated workflows',
    ideal: 'SMBs automating 1–2 high-pain manual processes',
    timeline: '1–2 weeks',
    includes: [
      'Up to 2 fully automated workflows',
      'Integration with up to 4 tools',
      'n8n or Zapier-based implementation',
      'Error handling & retry logic',
      'Slack/email notification alerts',
      '30-day post-launch support',
    ],
    notIncluded: ['AI decision models', 'Custom code pipelines', 'Document OCR', 'Dedicated automation engineer'],
  },
  {
    name: 'Growth Automation',
    color: ACCENT,
    workflows: '5–8 automated workflows',
    ideal: 'Growing teams wanting end-to-end department automation',
    timeline: '3–4 weeks',
    recommended: true,
    includes: [
      '5–8 interconnected workflows',
      'Integration with up to 15 tools',
      'AI decision engine (1 model)',
      'Document intelligence (OCR)',
      'Custom n8n / Python pipelines',
      'Live monitoring dashboard',
      'Error alerting & auto-recovery',
      '90-day post-launch support + monthly optimisation',
    ],
    notIncluded: ['Multi-department rollout', 'Custom ML models'],
  },
  {
    name: 'Enterprise Automation',
    color: '#f59e0b',
    workflows: 'Unlimited workflows',
    ideal: 'Enterprise-wide automation across multiple departments',
    timeline: '6–12 weeks',
    includes: [
      'Unlimited workflows across all departments',
      'Unlimited integrations',
      'Multiple AI decision models (custom-trained)',
      'Full document intelligence suite',
      'Custom-built Python/Node.js automation agents',
      'Real-time monitoring + incident response',
      'Role-based access & audit logs',
      'GDPR / HIPAA compliance layer',
      'Dedicated automation engineer (part-time)',
      '12-month SLA with 99.9% uptime',
    ],
    notIncluded: [],
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Process Audit',
    color: '#10b981',
    duration: 'Day 1–2',
    desc: 'We map every manual task your team does, calculate time cost, and rank automation opportunities by ROI.',
    output: 'Ranked opportunity list with estimated monthly hours saved',
  },
  {
    step: '02',
    title: 'Workflow Design',
    color: '#6366f1',
    duration: 'Day 3–5',
    desc: 'We design the automation logic — triggers, conditions, actions, error paths, and human checkpoints — before writing a single line of code.',
    output: 'Visual workflow diagram reviewed & approved by your team',
  },
  {
    step: '03',
    title: 'Build & Integrate',
    color: '#f59e0b',
    duration: 'Day 5–14',
    desc: 'We build the automations using n8n, Python, or custom code, integrate all required tools, and configure error handling and retry logic.',
    output: 'Working automation in staging environment, fully tested',
  },
  {
    step: '04',
    title: 'Test & Harden',
    color: '#ec4899',
    duration: 'Day 14–18',
    desc: 'Edge cases, failure scenarios, and high-volume stress tests. We ensure the automation handles unexpected inputs without breaking.',
    output: '200+ test cases passed, edge cases documented',
  },
  {
    step: '05',
    title: 'Go Live & Monitor',
    color: '#0ea5e9',
    duration: 'Day 18–21',
    desc: 'Deploy to production with a monitoring dashboard, alert rules, and a 30-day observation window before full handoff.',
    output: 'Live automation + monitoring dashboard + team training',
  },
]

const faqs = [
  {
    q: 'What is the difference between RPA and AI automation?',
    a: 'RPA (Robotic Process Automation) follows rigid, rule-based scripts — it works great for predictable, structured processes but breaks the moment the format changes. AI automation uses machine learning to understand unstructured inputs (emails, documents, voice), make intelligent decisions (scoring, classification), and adapt to variation. For example, RPA can copy-paste invoice data if the format is always identical; our AI can extract invoice data from any format — PDFs, scanned images, emails — with 99.8% accuracy.',
  },
  {
    q: 'What tools and software do you integrate with?',
    a: 'We integrate with 200+ business tools via API, webhook, or direct SDK. Key categories: CRM (HubSpot, Salesforce, Zoho, Pipedrive), email (Mailchimp, ActiveCampaign, Klaviyo, SendGrid), finance (QuickBooks, Xero, Razorpay, Stripe), productivity (Google Workspace, Notion, Airtable, Jira), e-commerce (Shopify, WooCommerce), support (Intercom, Freshdesk, Zendesk), and communication (Slack, Teams, WhatsApp Business API). If your tool has an API, we can connect it.',
  },
  {
    q: 'What if an automation breaks or produces an error?',
    a: 'Every automation we build includes error handling, retry logic, and alerting. Failed workflow runs trigger an immediate Slack or email alert to your team and to us. Critical automations include auto-recovery logic that retries up to 3 times before flagging for human review. We also build audit logs so every automated action is traceable. Our post-launch support period means we fix any issues within 24 hours at no additional cost.',
  },
  {
    q: 'Do you build automations on Zapier / Make, or with custom code?',
    a: 'Both — the choice depends on complexity and scale. For standard tool-to-tool workflows, we use n8n (self-hosted), Zapier, or Make because they are fast to deploy and easy for your team to maintain. For complex automations that require AI decision-making, document processing, high-volume data pipelines, or custom business logic, we write custom Python or Node.js code. Many clients start with n8n-based workflows and graduate to custom code as they scale. We advise the right approach for each workflow.',
  },
  {
    q: 'How do you identify which processes to automate first?',
    a: 'We start with a 2-hour process audit workshop with key stakeholders. We map every manual repetitive task and score each on: time cost per month, error rate, employee frustration level, and automation complexity. We prioritise the top 3–5 processes that combine high time savings with low implementation complexity — these deliver the fastest ROI and create internal momentum for broader automation rollout.',
  },
  {
    q: 'Can automations be built to comply with GDPR / HIPAA?',
    a: 'Yes. For Enterprise clients, we build compliance into every data-handling automation: data minimisation (only the fields needed are passed between systems), access controls (only authorised users can trigger or view automation runs), audit logs (every data access and transformation is logged with timestamps), and data retention policies (automatic deletion after the specified period). For healthcare clients, we implement HIPAA-compliant data pipelines with end-to-end encryption and Business Associate Agreements (BAAs) with all sub-processors.',
  },
  {
    q: 'What is the typical ROI on automation projects?',
    a: 'Based on our client engagements, the average ROI on automation projects is 380% in the first year. A mid-sized company with 50 employees typically saves 200–400 manual hours per month across 5–8 automated workflows. At a conservative ₹300/hour labour cost, that is ₹60,000–₹1,20,000 saved every month. Most projects pay for themselves within 2–4 months. We provide a pre-project ROI estimate as part of the process audit so you know the expected return before committing.',
  },
  {
    q: 'Do you train our team to maintain the automations after delivery?',
    a: 'Yes. All Growth and Enterprise projects include team training — typically a 2–3 hour handoff session covering: how to monitor automation runs, how to update simple workflow logic without touching code, how to add new triggers or conditions, and how to interpret error logs. For n8n-based workflows, your team can make configuration changes themselves. For custom-code pipelines, we provide clear documentation and a dedicated support channel for questions.',
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
      <button onClick={() => onToggle(index)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-emerald-50/40 transition-colors">
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

export default function AIAutomationPage() {
  const { openModal } = useModal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeDept, setActiveDept] = useState(0)
  const [activePackage, setActivePackage] = useState(1)
  const [activeIntegrationFilter, setActiveIntegrationFilter] = useState('All')

  const dept = departments[activeDept]
  const DeptIcon = dept.icon

  const filteredIntegrations = activeIntegrationFilter === 'All'
    ? integrations
    : integrations.filter(i => i.category === activeIntegrationFilter)

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #031a0e 0%, #0a1628 55%, #021208 100%)' }}>
        <div className="absolute top-0 right-0 w-[800px] h-[600px] rounded-full opacity-[0.1] blur-[140px]" style={{ background: ACCENT }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[120px]" style={{ background: '#34d399' }} />
        <div className="absolute inset-0 opacity-[0.018]" style={{
          backgroundImage: `radial-gradient(circle, ${ACCENT} 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
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
                  <Zap size={12} /> AI Development
                </span>
                <span className="text-white/40 text-sm">Workflow Automation</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
                Automate the Work<br />
                <span style={{ color: '#6ee7b7' }}>Your Team Hates</span><br />
                Doing Manually
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl">
                AI-powered workflow automation that eliminates repetitive manual tasks across Sales, Marketing, HR, Finance, and Ops — freeing your team to do the work only humans can do.
              </p>

              {/* Live counter strip */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { icon: Clock, val: '200–400', label: 'hrs/month saved on avg', color: ACCENT },
                  { icon: TrendingUp, val: '380%', label: 'avg ROI in year 1', color: '#34d399' },
                  { icon: Zap, val: '10 days', label: 'first workflow live', color: '#6ee7b7' },
                ].map((s, i) => {
                  const Icon = s.icon
                  return (
                    <div key={i} className="flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-white/10" style={{ background: 'rgba(16,185,129,0.1)' }}>
                      <Icon size={14} style={{ color: s.color }} />
                      <div>
                        <span className="text-white font-black text-sm">{s.val}</span>
                        <span className="text-white/40 text-xs ml-1.5">{s.label}</span>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-wrap gap-4">
                <button onClick={openModal} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all shadow-lg" style={{ background: ACCENT }}>
                  Get Free Process Audit <ArrowRight size={16} />
                </button>
                <Link href="/live-demo" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white border border-white/20 hover:bg-white/10 transition-all">
                  See Case Studies <ExternalLink size={14} />
                </Link>
              </div>
            </div>

            {/* Right — workflow visualisation */}
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl" style={{ background: '#031a0e' }}>
                {/* Header bar */}
                <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/8" style={{ background: 'rgba(16,185,129,0.08)' }}>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 text-center text-white/40 text-[11px] font-semibold">Lead Automation Workflow — Live</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-[10px] font-bold">Running</span>
                  </div>
                </div>

                {/* Workflow nodes */}
                <div className="p-5 space-y-2">
                  {[
                    { label: 'Trigger', node: 'New form submission on website', icon: Zap, color: '#10b981', status: 'completed', badge: 'Trigger' },
                    { label: 'Action', node: 'Create contact in HubSpot CRM', icon: Database, color: '#6366f1', status: 'completed', badge: 'CRM' },
                    { label: 'AI Step', node: 'Score lead (GPT-4: industry + role + size)', icon: Brain, color: '#f59e0b', status: 'completed', badge: 'AI' },
                    { label: 'Condition', node: 'Score ≥ 70? → Hot lead path', icon: GitBranch, color: '#ec4899', status: 'active', badge: 'Logic' },
                    { label: 'Action', node: 'Send personalised email sequence', icon: Mail, color: '#0ea5e9', status: 'pending', badge: 'Email' },
                    { label: 'Action', node: 'Notify sales rep via Slack', icon: Bell, color: '#a855f7', status: 'pending', badge: 'Slack' },
                  ].map((node, i) => {
                    const Icon = node.icon
                    return (
                      <div key={i} className="relative flex items-center gap-3">
                        {/* Connector */}
                        {i < 5 && <div className="absolute left-[18px] top-[36px] w-0.5 h-3 z-0" style={{ background: `${node.color}30` }} />}
                        <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center z-10 relative" style={{
                          background: node.status === 'pending' ? 'rgba(255,255,255,0.05)' : `${node.color}20`,
                          border: `1px solid ${node.status === 'pending' ? 'rgba(255,255,255,0.1)' : node.color + '40'}`
                        }}>
                          <Icon size={15} style={{ color: node.status === 'pending' ? 'rgba(255,255,255,0.25)' : node.color }} />
                        </div>
                        <div className="flex-1 flex items-center justify-between gap-2 px-3 py-2 rounded-xl" style={{
                          background: node.status === 'active' ? `${node.color}12` : node.status === 'pending' ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.05)',
                          border: node.status === 'active' ? `1px solid ${node.color}30` : '1px solid transparent',
                        }}>
                          <span className={`text-xs font-medium ${node.status === 'pending' ? 'text-white/30' : 'text-white/80'}`}>{node.node}</span>
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{
                              background: `${node.color}20`,
                              color: node.status === 'pending' ? 'rgba(255,255,255,0.2)' : node.color
                            }}>{node.badge}</span>
                            {node.status === 'completed' && <CheckCheck size={11} style={{ color: ACCENT }} />}
                            {node.status === 'active' && <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: node.color }} />}
                            {node.status === 'pending' && <div className="w-2 h-2 rounded-full bg-white/15" />}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Bottom stats */}
                <div className="grid grid-cols-3 divide-x divide-white/8 border-t border-white/8">
                  {[
                    { label: 'Runs today', val: '284', color: ACCENT },
                    { label: 'Success rate', val: '99.6%', color: '#34d399' },
                    { label: 'Time saved', val: '37.8 hrs', color: '#6ee7b7' },
                  ].map((s, i) => (
                    <div key={i} className="py-3 px-4 text-center">
                      <div className="font-black text-sm" style={{ color: s.color }}>{s.val}</div>
                      <div className="text-white/30 text-[9px] mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-5 -right-5 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl z-10" style={{ borderColor: `${ACCENT}40` }}>
                <div className="flex items-center gap-2 mb-0.5">
                  <Zap size={12} style={{ color: ACCENT }} />
                  <span className="text-white text-xs font-bold">Workflow triggered</span>
                </div>
                <div className="text-white/40 text-[10px]">Lead scored 94 → Hot pipeline</div>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl z-10" style={{ borderColor: `${ACCENT}40` }}>
                <div className="flex items-center gap-2">
                  <Activity size={12} style={{ color: '#34d399' }} />
                  <span className="text-white text-xs font-bold">200+ hrs/month saved</span>
                </div>
                <div className="text-white/40 text-[10px]">Across 8 active workflows</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ──────────────────────────────────────────────────── */}
      <section style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { icon: Clock, val: '200–400 hrs', label: 'Manual hours saved per month', color: ACCENT },
              { icon: TrendingUp, val: '380%', label: 'Average ROI in first 12 months', color: '#34d399' },
              { icon: Zap, val: '10 days', label: 'First workflow live in production', color: '#6ee7b7' },
              { icon: Shield, val: '99.9%', label: 'Uptime SLA on enterprise plans', color: '#a7f3d0' },
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

        {/* ── Before & After by Department ─────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Before vs After" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            See Exactly What Gets Automated in Your Team
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Real before-and-after comparisons by department. Click your team to see what changes.
          </p>

          {/* Department tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {departments.map((d, i) => {
              const Icon = d.icon
              return (
                <button key={i} onClick={() => setActiveDept(i)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all border ${activeDept === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                  style={activeDept === i ? { background: d.color } : {}}>
                  <Icon size={13} />
                  {d.dept}
                </button>
              )
            })}
          </div>

          {/* Before / After grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-200">

            {/* Before */}
            <div className="border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3" style={{ background: '#fef2f2' }}>
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <span className="font-bold text-red-700 text-sm">BEFORE — Manual Process</span>
              </div>
              <div className="divide-y divide-gray-100">
                {dept.before.map((item, i) => (
                  <div key={i} className="px-6 py-5">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <span className="text-gray-800 text-sm font-medium">{item.task}</span>
                      <span className="text-xs font-black px-2.5 py-1 rounded-full bg-red-100 text-red-700 flex-shrink-0">{item.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle size={11} className="text-red-400 flex-shrink-0" />
                      <span className="text-gray-400 text-xs">{item.pain}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div>
              <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3" style={{ background: '#f0fdf4' }}>
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="font-bold text-green-700 text-sm">AFTER — Automated</span>
                <span className="ml-auto text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: dept.color }}>{dept.impact}</span>
              </div>
              <div className="divide-y divide-gray-100">
                {dept.after.map((item, i) => (
                  <div key={i} className="px-6 py-5">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <span className="text-gray-800 text-sm font-medium">{item.task}</span>
                      <span className="text-xs font-black px-2.5 py-1 rounded-full flex-shrink-0" style={{ background: `${dept.color}18`, color: dept.color }}>{item.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={11} style={{ color: dept.color }} className="flex-shrink-0" />
                      <span className="text-gray-500 text-xs">{item.win}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What we automate in this dept */}
          <div className="mt-6 px-6 py-5 rounded-2xl border border-gray-200 bg-gray-50/60">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Workflows We Build for {dept.dept}</div>
            <div className="flex flex-wrap gap-2">
              {dept.workflows.map(wf => (
                <span key={wf} className="text-xs font-semibold px-3 py-1.5 rounded-full text-white" style={{ background: dept.color }}>{wf}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Automation Types ─────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="What We Build" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            6 Types of Automation We Deliver
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Not all automation is the same. From simple tool-to-tool workflows to AI decision engines — here is the full spectrum of what we build.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {automationTypes.map((at, i) => {
              const Icon = at.icon
              return (
                <div key={i} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all bg-white group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${at.color}15` }}>
                      <Icon size={20} style={{ color: at.color }} />
                    </div>
                    <h3 className="font-bold text-[#0a1628] text-sm leading-snug">{at.type}</h3>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4">{at.desc}</p>
                  <div className="space-y-1.5">
                    {at.examples.map(ex => (
                      <div key={ex} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: at.color }} />
                        <span className="text-gray-600 text-xs">{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── ROI Comparison ───────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="ROI & Time Savings" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Measurable Impact, Not Just Promises
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Every automation we build has a quantifiable time and cost saving. Here are four benchmarks from real client workflows.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {roiMetrics.map((metric, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between" style={{ background: `${metric.savingColor}06` }}>
                  <span className="font-bold text-[#0a1628] text-sm">{metric.title}</span>
                  <span className="text-xs font-black px-3 py-1 rounded-full text-white" style={{ background: metric.savingColor }}>{metric.saving}</span>
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-100">
                  <div className="px-6 py-5">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-2">Before</div>
                    <div className="font-black text-[#0a1628] text-lg mb-0.5">{metric.before.label}</div>
                    <div className="text-gray-400 text-xs">{metric.before.subLabel}</div>
                  </div>
                  <div className="px-6 py-5">
                    <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: metric.savingColor }}>After</div>
                    <div className="font-black text-lg mb-0.5" style={{ color: metric.savingColor }}>{metric.after.label}</div>
                    <div className="text-gray-400 text-xs">{metric.after.subLabel}</div>
                  </div>
                </div>
                <div className="px-6 py-3 border-t border-gray-100 flex items-center gap-2" style={{ background: `${metric.savingColor}06` }}>
                  <TrendingUp size={12} style={{ color: metric.savingColor }} />
                  <span className="text-xs font-semibold" style={{ color: metric.savingColor }}>{metric.monthlyImpact}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Integration Ecosystem ────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Integrations" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            200+ Tools — If It Has an API, We Connect It
          </h2>
          <p className="text-gray-500 text-base mb-8 max-w-2xl">
            We integrate with your existing stack — no rip-and-replace. Filter by category to find your tools.
          </p>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {integrationCategories.map(cat => (
              <button key={cat} onClick={() => setActiveIntegrationFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border ${activeIntegrationFilter === cat ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                style={activeIntegrationFilter === cat ? { background: ACCENT } : {}}>
                {cat}
              </button>
            ))}
          </div>

          {/* Integration grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {filteredIntegrations.map((integration, i) => (
              <div key={i} className="border border-gray-200 rounded-xl px-3 py-2.5 hover:border-gray-300 hover:shadow-sm transition-all bg-white text-center group">
                <div className="w-3 h-3 rounded-full mx-auto mb-1.5" style={{ background: integration.color }} />
                <div className="text-gray-700 text-[11px] font-semibold leading-tight">{integration.name}</div>
                <div className="text-gray-300 text-[9px] mt-0.5">{integration.category}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-sm mt-6 text-center">
            Don't see your tool? <button onClick={openModal} className="font-semibold underline" style={{ color: ACCENT }}>Ask us — if it has an API, we can connect it.</button>
          </p>
        </section>

        {/* ── Process Steps ────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Our Process" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Audit → Design → Build → Test → Go Live
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            A structured 5-step process that moves from understanding your business to a live, monitored automation in 10–21 days.
          </p>

          <div className="space-y-4">
            {processSteps.map((step, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-0 border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all">
                {/* Step number */}
                <div className="flex items-center justify-center px-7 py-6 md:border-r border-b md:border-b-0 border-gray-200" style={{ background: `${step.color}10`, minWidth: '90px' }}>
                  <div className="text-4xl font-black" style={{ color: `${step.color}50` }}>{step.step}</div>
                </div>
                {/* Content */}
                <div className="px-6 py-5 border-b md:border-b-0 md:border-r border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: step.color }}>{step.duration}</span>
                    <span className="font-black text-[#0a1628] text-base">{step.title}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {/* Output */}
                <div className="px-6 py-5 flex flex-col justify-center" style={{ minWidth: '220px' }}>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Output</div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={13} style={{ color: step.color }} className="flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-xs leading-relaxed">{step.output}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Packages ─────────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Packages" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Automation Packages
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Start with 2 high-impact workflows or automate an entire department — three plans built around your scope.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div key={i}
                className={`rounded-3xl overflow-hidden border-2 transition-all cursor-pointer ${activePackage === i ? 'shadow-xl scale-[1.02]' : 'border-gray-200 hover:shadow-md'}`}
                style={{ borderColor: activePackage === i ? pkg.color : undefined }}
                onClick={() => setActivePackage(i)}>

                <div className="px-7 py-6 relative" style={{ background: `${pkg.color}10` }}>
                  {pkg.recommended && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-widest" style={{ background: pkg.color }}>
                      Most Popular
                    </div>
                  )}
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: pkg.color }}>{pkg.name}</div>
                  <div className="font-black text-[#0a1628] text-xl mb-1">{pkg.workflows}</div>
                  <div className="flex items-center gap-1.5 mt-2">
                    <Clock size={11} className="text-gray-400" />
                    <span className="text-gray-400 text-xs">Live in {pkg.timeline}</span>
                  </div>
                </div>

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
                    <div className="mb-4 space-y-1.5">
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
                    Start with {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="relative rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #031a0e 0%, #0a1628 100%)' }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-[100px]" style={{ background: ACCENT }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[80px] opacity-10" style={{ background: '#34d399' }} />
            <div className="relative px-8 md:px-16 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Free Process Audit</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Find Out How Many Hours<br />
                  <span style={{ color: '#6ee7b7' }}>You're Losing Every Month</span>
                </h2>
                <p className="text-white/55 text-base max-w-md">
                  We run a free 2-hour process audit, identify your top 5 automation opportunities, and give you an estimated monthly time and cost saving — before you spend a rupee.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <button onClick={openModal} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white hover:opacity-90 transition-all text-sm whitespace-nowrap" style={{ background: ACCENT }}>
                  Book Free Process Audit <ArrowRight size={16} />
                </button>
                <Link href="/services/ai-chatbot" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/80 border border-white/20 hover:bg-white/10 transition-all text-sm">
                  Explore AI Chatbots <ExternalLink size={14} />
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
            <p className="text-gray-500 text-base mb-10">Technical, commercial, and practical questions answered directly.</p>
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
          <p className="text-gray-500 text-base mb-10">AI Automation delivers the most value when paired with these services.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { slug: 'ai-chatbot', tag: 'AI Chatbot', title: 'AI Chatbot Development', desc: 'Your automations need a conversational front-end — our chatbots trigger workflows and capture the data that feeds them.', color: '#6366f1', img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80' },
              { slug: 'content', tag: 'Content', title: 'Content Marketing', desc: 'Automate your content distribution — publish once, auto-distribute to email, social, and RSS simultaneously.', color: '#14b8a6', img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80' },
              { slug: 'ppc', tag: 'PPC Ads', title: 'PPC Advertising', desc: 'Automate lead routing from paid ads directly into your CRM and nurture sequences with zero manual steps.', color: '#ef4444', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
              { slug: 'aeo-geo', tag: 'AEO & GEO', title: 'AEO & GEO Optimization', desc: 'AI automation can publish, distribute, and update your AEO content assets automatically at scale.', color: '#06b6d4', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80' },
            ].map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
                <div className="h-40 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-3" style={{ background: s.color }}>{s.tag}</span>
                  <h3 className="font-bold text-[#0a1628] group-hover:text-emerald-600 transition-colors mb-1.5 text-sm leading-snug">{s.title}</h3>
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
