'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, ChevronDown, ChevronUp,
  CheckCircle2, ExternalLink, Layout,
  FileText, Users, Globe, Shield, Zap,
  RefreshCw, Settings, Database, Cloud,
  Code2, Layers, Search, Bell,
  PenTool, Eye, Clock, Lock,
  Workflow, GitBranch, MonitorPlay, Puzzle,
  BarChart3, Image, Video, Link2,
  ChevronRight, Columns, Rss, Languages
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const ACCENT = '#6366f1'
const ACCENT_DARK = '#4f46e5'
const ACCENT_LIGHT = '#eef2ff'
const NAVY = '#0a1628'
const NAVY2 = '#1a2f4e'

// --- Data -------------------------------------------------------------------

const painPoints = [
  { problem: 'Marketing waits days for a developer to change a headline', icon: Clock, color: '#ef4444' },
  { problem: 'Same content manually copy-pasted across 3 platforms', icon: RefreshCw, color: '#f59e0b' },
  { problem: 'No approval workflow — wrong content goes live accidentally', icon: Shield, color: '#ef4444' },
  { problem: 'Blog images at 8MB slowing the site to a crawl', icon: Zap, color: '#f59e0b' },
  { problem: 'Multi-language content maintained in five separate spreadsheets', icon: Languages, color: '#ef4444' },
  { problem: 'No way to preview content before publishing', icon: Eye, color: '#f59e0b' },
]

const cmsTypes = [
  {
    type: 'Headless CMS',
    icon: Cloud,
    color: '#6366f1',
    tagline: 'Content as API. Frontend freedom.',
    desc: 'Content is created in a separate editing interface and delivered via API to any frontend — website, mobile app, kiosk, or smartwatch. Your content team uses a clean editor; your developers consume a REST or GraphQL API. The frontend is completely decoupled.',
    pros: ['Frontend-agnostic (Next.js, mobile, any platform)', 'One content source, every channel', 'Scales without performance hit', 'Developer-friendly GraphQL / REST API', 'Future-proof content infrastructure'],
    cons: ['Higher setup cost than traditional', 'Preview setup requires configuration'],
    bestFor: 'Multi-channel brands, fast-growing startups, enterprise',
    platforms: ['Sanity.io', 'Contentful', 'Strapi', 'Payload CMS'],
  },
  {
    type: 'Traditional CMS',
    icon: Layout,
    color: '#f59e0b',
    tagline: 'Built-in frontend. Easy to start.',
    desc: 'The CMS manages both content and presentation. WordPress, Drupal, and Joomla fall into this category. Good for simple sites where the editor and the website are tightly coupled and you do not need to deliver content to multiple frontends.',
    pros: ['Fastest to launch for simple sites', 'Large plugin ecosystem (WordPress)', 'Editor interface directly shows result', 'Lower upfront cost', 'Familiar for most editors'],
    cons: ['Frontend tightly coupled to CMS', 'Performance requires optimisation', 'Plugin bloat is a security risk'],
    bestFor: 'Simple blogs, small business sites, familiar teams',
    platforms: ['WordPress', 'Drupal', 'Joomla', 'Ghost'],
  },
  {
    type: 'Custom Admin Panel',
    icon: Settings,
    color: '#10b981',
    tagline: 'Built exactly for your workflow.',
    desc: 'A purpose-built admin interface tailored exactly to your product — no generic CMS constraints. Used when your content model is unique, your editorial workflow is complex, or you need the admin to double as an operations tool for non-content tasks.',
    pros: ['Perfect fit for your exact workflow', 'No CMS licensing fees', 'Can include non-content operations', 'Unlimited customisation', 'Owned fully by you'],
    cons: ['Higher build cost', 'Longer development time', 'You maintain it'],
    bestFor: 'Complex platforms, marketplaces, SaaS products',
    platforms: ['Next.js Admin', 'React + Prisma', 'Node.js API', 'PostgreSQL'],
  },
]

const platforms = [
  {
    name: 'Sanity.io',
    color: '#f03e2f',
    tagline: 'Most flexible. Best DX.',
    ideal: 'Startups to enterprise, custom schemas',
    pricing: 'Free tier + $15/mo per user',
    strengths: ['Real-time collaborative editing', 'Fully custom content schemas (GROQ)', 'Portable Text (rich text as data)', 'Image hotspot & cropping built in', 'Excellent Next.js integration', 'Studio fully customisable in React'],
    delivery: 'GROQ query language + REST + GraphQL',
    ourRating: 95,
  },
  {
    name: 'Contentful',
    color: '#2478cc',
    tagline: 'Enterprise scale. Strong governance.',
    ideal: 'Mid-market to large enterprise',
    pricing: 'Free tier + $300/mo (Team)',
    strengths: ['Mature content modelling', 'Strong role & permissions system', 'Rich App Framework ecosystem', 'Excellent localisation support', 'High SLA uptime guarantees', 'Webhooks & scheduled publishing'],
    delivery: 'REST API + GraphQL',
    ourRating: 88,
  },
  {
    name: 'Strapi',
    color: '#4945ff',
    tagline: 'Self-hosted. Full control.',
    ideal: 'Teams needing data sovereignty',
    pricing: 'Open-source (free) + Cloud plans',
    strengths: ['100% open-source, self-hostable', 'Auto-generated REST & GraphQL API', 'Plugin marketplace', 'Role-based access control', 'No per-seat licensing cost', 'PostgreSQL / MySQL / SQLite'],
    delivery: 'Auto-generated REST API + GraphQL',
    ourRating: 82,
  },
  {
    name: 'Payload CMS',
    color: '#1f2937',
    tagline: 'Code-first. TypeScript native.',
    ideal: 'Developer-led teams, custom workflows',
    pricing: 'Open-source + self-hosted',
    strengths: ['Defined entirely in TypeScript', 'Sits alongside your Next.js app', 'Rich access control system', 'Built-in auth & users', 'No vendor lock-in', 'Full Next.js colocation'],
    delivery: 'REST + GraphQL + Local API',
    ourRating: 90,
  },
]

const contentTypes = [
  { name: 'Pages', icon: Layout, desc: 'Homepage, About, Contact, Landing pages — visually structured with reusable section components.' },
  { name: 'Blog & Articles', icon: FileText, desc: 'SEO-optimised posts with categories, tags, author profiles, and scheduled publishing.' },
  { name: 'Products & Catalogue', icon: BarChart3, desc: 'Product data with variants, images, pricing, and inventory — synced to your storefront.' },
  { name: 'Media & Assets', icon: Image, desc: 'Centralised DAM with auto-resizing, CDN delivery, alt-text, and file organisation.' },
  { name: 'Team & People', icon: Users, desc: 'Team members, authors, speakers, and advisors with rich profiles and relationships.' },
  { name: 'Video & Embeds', icon: Video, desc: 'Native video upload, YouTube/Vimeo embeds, and responsive video components.' },
  { name: 'Navigation & Menus', icon: Link2, desc: 'Editable header, footer, and sidebar navigation without touching code.' },
  { name: 'Translations', icon: Languages, desc: 'Multi-language content with locale variants, fallback languages, and translation status.' },
  { name: 'Forms & Leads', icon: Rss, desc: 'Lead capture forms, survey blocks, and CTA sections manageable from the CMS.' },
]

const workflowSteps = [
  {
    step: 'Draft',
    icon: PenTool,
    color: '#6366f1',
    who: 'Content Writer / Marketer',
    desc: 'Writer creates or updates content in the CMS editor. Rich text editor with inline media, embedded references, and live word count. Auto-saved every 30 seconds.',
    features: ['Auto-save every 30 seconds', 'Rich text with custom blocks', 'Inline image & media embed', 'SEO meta field with character count'],
  },
  {
    step: 'Review',
    icon: Eye,
    color: '#f59e0b',
    who: 'Editor / Manager',
    desc: 'Content goes to a Review state. Editor receives a notification, reviews in the CMS with comments, and either approves or sends back for revision with tracked changes.',
    features: ['In-CMS comment threads', 'Email & Slack notifications', 'Version history & diff view', 'Side-by-side comparison'],
  },
  {
    step: 'Preview',
    icon: MonitorPlay,
    color: '#10b981',
    who: 'All Stakeholders',
    desc: 'One-click preview renders the content in the actual website frontend (Next.js Draft Mode) at a private URL shareable with any stakeholder — no login required for reviewers.',
    features: ['Next.js Draft Mode preview', 'Shareable private preview URL', 'Mobile & desktop preview toggle', 'Real-time content updates'],
  },
  {
    step: 'Publish',
    icon: Bell,
    color: '#ec4899',
    who: 'Content Editor / Publisher',
    desc: 'Content is published immediately or scheduled for a future date and time. Scheduled publishing with timezone selection. Content goes live with a webhook-triggered CDN revalidation.',
    features: ['Instant or scheduled publish', 'Timezone-aware scheduling', 'Webhook CDN revalidation', 'Publish confirmation & audit log'],
  },
]

const integrations = [
  { name: 'Next.js', type: 'Frontend', color: '#000000', desc: 'Native integration with ISR, Server Components, and Draft Mode.' },
  { name: 'Vercel', type: 'Hosting', color: '#000000', desc: 'Webhook triggers instant revalidation on content publish.' },
  { name: 'Cloudinary', type: 'Media CDN', color: '#3448c5', desc: 'Auto image optimisation, WebP conversion, and responsive images.' },
  { name: 'Algolia', type: 'Search', color: '#003dff', desc: 'Content indexed in real-time for instant site search.' },
  { name: 'Mailchimp', type: 'Email', color: '#ffe01b', desc: 'Sync new blog posts to email newsletter automatically.' },
  { name: 'Slack', type: 'Notifications', color: '#4a154b', desc: 'Publish, review, and comment notifications in Slack channels.' },
  { name: 'HubSpot', type: 'CRM', color: '#ff7a59', desc: 'Form submissions from CMS-managed forms flow into HubSpot.' },
  { name: 'Google Analytics', type: 'Analytics', color: '#f9ab00', desc: 'Track which CMS content drives conversions and engagement.' },
]

const userRoles = [
  { role: 'Super Admin', color: '#ef4444', permissions: ['Full CMS access', 'User management', 'Schema changes', 'API key management', 'Audit log access'] },
  { role: 'Publisher', color: '#f59e0b', permissions: ['Create & publish content', 'Manage media library', 'Schedule publishing', 'View analytics', 'Cannot manage users'] },
  { role: 'Editor', color: '#6366f1', permissions: ['Create & edit drafts', 'Submit for review', 'Upload media', 'View published content', 'Cannot publish directly'] },
  { role: 'Viewer', color: '#10b981', permissions: ['View all content', 'Preview drafts', 'Add comments', 'Export content', 'Read-only access'] },
]

const faqs = [
  {
    question: 'Which CMS platform do you recommend — Sanity, Contentful, or Strapi?',
    answer: 'Our default recommendation is Sanity.io for most projects. It has the best developer experience, real-time collaborative editing, a fully customisable React-based studio, and excellent Next.js integration. For enterprise clients needing strong governance, user management, and high SLAs, Contentful is our choice. For teams that need self-hosted data sovereignty with no per-seat licensing cost, Strapi is excellent. For developer-led teams building complex platforms alongside a Next.js app, Payload CMS is our top pick. We assess your team size, budget, and technical requirements before recommending.',
  },
  {
    question: 'Can non-technical editors use the CMS without developer help?',
    answer: 'Yes, that is the entire point. We configure the CMS studio specifically for your content team: hiding developer-only fields, adding field descriptions and validation messages, creating custom input components for complex data, and setting up intuitive content structures. We include a 2-hour editor training session and a written CMS guide tailored to your specific setup on every delivery.',
  },
  {
    question: 'What is a headless CMS and why is it better than WordPress?',
    answer: "A headless CMS stores and delivers your content via API, completely separate from how it is displayed. Your Next.js website, mobile app, and any other frontend consumes the same content from one central API. WordPress couples content and presentation together, creating performance overhead, security vulnerabilities from plugin bloat, and a frontend you cannot fully customise without fighting the theme system. Headless gives you a fast, secure, fully custom frontend with a clean editorial interface.",
  },
  {
    question: 'How does content preview work before publishing?',
    answer: "We implement Next.js Draft Mode for every CMS integration. When an editor clicks Preview in the CMS, a private URL is generated that renders the live Next.js frontend with the unpublished draft content. This preview URL can be shared with any stakeholder (no login required) and automatically shows the most current draft state. Editors see exactly how the content will look in the real website before publishing.",
  },
  {
    question: 'Can the CMS deliver content to our mobile app as well as our website?',
    answer: 'Yes. This is the primary advantage of a headless CMS. The CMS exposes a REST or GraphQL API that any frontend can consume. Your Next.js website, React Native mobile app, Flutter app, and even digital signage all pull from the same content source. Write once, deliver everywhere. This eliminates content duplication and ensures your mobile app and website always show consistent content.',
  },
  {
    question: 'What happens to our existing WordPress content?',
    answer: "We handle full content migration. We export your existing WordPress posts, pages, media, categories, and tags using the WordPress REST API and WP All Export, transform the data to match your new CMS content schema, migrate all media to the new CDN with URL redirect mapping, and set up 301 redirects for all changed URLs to preserve your SEO equity. No content is lost and your Google rankings are protected.",
  },
  {
    question: 'Can we have an approval workflow before content goes live?',
    answer: "Yes. We configure a custom editorial workflow with states: Draft, In Review, Approved, Scheduled, and Published. When a writer submits for review, the assigned editor receives a Slack and email notification with a direct link to the content. The editor can approve with one click or add inline comments for revision. Only users with the Publisher role can publish approved content. Every state change is recorded in the audit log.",
  },
  {
    question: 'How do you handle multi-language content?',
    answer: "We configure language localisation in the CMS with a locale variant for each language you support. Content editors see a language switcher to edit each locale. We set up a fallback language so untranslated content gracefully falls back instead of showing blank fields. The frontend receives locale-specific content via API with the `locale` parameter. We have delivered CMS setups supporting up to 12 languages for international brands.",
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
      <button onClick={() => onToggle(index)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-indigo-50/50 transition-colors">
        <span className="text-[#0a1628] font-semibold text-sm md:text-base pr-4">{faq.question}</span>
        {open ? <ChevronUp size={18} style={{ color: ACCENT }} className="flex-shrink-0" /> : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />}
      </button>
      {open && <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.answer}</div>}
    </div>
  )
}

// --- Page -------------------------------------------------------------------

export default function CmsPage() {
  const { openModal } = useModal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activePlatform, setActivePlatform] = useState(0)
  const [activeCmsType, setActiveCmsType] = useState(0)

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #0a1628 55%, #1e1b4b 100%)' }}>
        <div className="absolute top-0 right-0 w-[700px] h-[600px] rounded-full opacity-[0.12] blur-[130px]" style={{ background: ACCENT }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[100px]" style={{ background: '#818cf8' }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: `linear-gradient(${ACCENT} 1px, transparent 1px), linear-gradient(90deg, ${ACCENT} 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-32 pb-20">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium bg-white/8 border border-white/15 px-4 py-2 rounded-full transition-colors mb-10">
            <ArrowLeft size={15} /> Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-xs font-extrabold tracking-wider uppercase" style={{ background: ACCENT }}>
                  <FileText size={12} /> CMS Development
                </span>
                <span className="text-white/40 text-sm">Web Development</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.06] mb-6">
                CMS Development<br />
                <span style={{ color: '#818cf8' }}>That Empowers</span><br />
                Your Team
              </h1>
              <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
                Custom headless CMS integrations and admin panels that let your marketing team update content independently — without waiting for a developer. Built on Sanity, Contentful, Strapi, or fully custom.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Sanity.io', 'Contentful', 'Strapi', 'Payload CMS', 'Headless Architecture', 'Content API'].map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 text-white/70 bg-white/8">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <button onClick={openModal} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all shadow-lg" style={{ background: ACCENT }}>
                  Discuss Your CMS Needs <ArrowRight size={16} />
                </button>
                <Link href="/live-demo" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white border border-white/20 hover:bg-white/10 transition-all">
                  See Examples <ExternalLink size={14} />
                </Link>
              </div>
            </div>

            {/* Right -- CMS editor mockup */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10" style={{ background: '#1e1b4b' }}>
                {/* Top bar */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10" style={{ background: '#2e2a5e' }}>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: ACCENT, opacity: 0.8 }} />
                  </div>
                  <div className="flex-1 flex items-center gap-2 bg-white/10 rounded-lg px-3 py-1.5">
                    <FileText size={11} style={{ color: ACCENT }} />
                    <span className="text-white/50 text-xs font-mono">cms.kotibox.io / studio</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 rounded-lg text-[10px] font-bold text-white/60 border border-white/20">Draft</div>
                    <div className="px-3 py-1 rounded-lg text-[10px] font-bold text-white" style={{ background: ACCENT }}>Publish</div>
                  </div>
                </div>
                <div className="flex" style={{ minHeight: '320px' }}>
                  {/* Sidebar */}
                  <div className="w-44 border-r border-white/10 p-3 flex flex-col gap-1" style={{ background: '#16144a' }}>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 px-2 py-1 mb-1">Content</div>
                    {[
                      { label: 'Pages', icon: Layout, active: false },
                      { label: 'Blog Posts', icon: FileText, active: true },
                      { label: 'Products', icon: BarChart3, active: false },
                      { label: 'Team', icon: Users, active: false },
                      { label: 'Media', icon: Image, active: false },
                    ].map(item => {
                      const Icon = item.icon
                      return (
                        <div key={item.label} className={`flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer text-xs ${item.active ? 'text-white font-bold' : 'text-white/50'}`} style={item.active ? { background: `${ACCENT}30` } : {}}>
                          <Icon size={13} style={{ color: item.active ? ACCENT : 'rgba(255,255,255,0.4)' }} />
                          {item.label}
                        </div>
                      )
                    })}
                    <div className="mt-3 text-[10px] font-bold uppercase tracking-widest text-white/30 px-2 py-1">Settings</div>
                    {[{ label: 'Users', icon: Users }, { label: 'Plugins', icon: Puzzle }].map(item => {
                      const Icon = item.icon
                      return (
                        <div key={item.label} className="flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer text-xs text-white/50">
                          <Icon size={13} className="opacity-40" /> {item.label}
                        </div>
                      )
                    })}
                  </div>
                  {/* Editor area */}
                  <div className="flex-1 p-4 overflow-hidden">
                    <div className="text-white/40 text-[10px] uppercase tracking-widest mb-3">Editing: Blog Post</div>
                    {/* Field: Title */}
                    <div className="mb-3">
                      <div className="text-white/50 text-[10px] mb-1 font-semibold">Title</div>
                      <div className="bg-white/10 rounded-lg px-3 py-2 text-white text-xs font-semibold border border-white/20">10 Ways AI is Changing Web Dev in 2025</div>
                    </div>
                    {/* Field: Slug */}
                    <div className="mb-3">
                      <div className="text-white/50 text-[10px] mb-1 font-semibold">Slug</div>
                      <div className="bg-white/8 rounded-lg px-3 py-1.5 text-white/50 text-[11px] border border-white/10 font-mono">ai-changing-web-dev-2025</div>
                    </div>
                    {/* Rich text preview */}
                    <div className="mb-3">
                      <div className="text-white/50 text-[10px] mb-1 font-semibold">Body Content</div>
                      <div className="bg-white/8 rounded-lg p-3 border border-white/10 space-y-1.5">
                        <div className="w-full h-1.5 bg-white/20 rounded-full" />
                        <div className="w-5/6 h-1.5 bg-white/15 rounded-full" />
                        <div className="w-4/5 h-1.5 bg-white/15 rounded-full" />
                        <div className="w-3/4 h-1.5 bg-white/10 rounded-full" />
                      </div>
                    </div>
                    {/* Status row */}
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                        <span className="text-white/50 text-[11px]">Unsaved changes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="px-2 py-1 rounded text-[10px] bg-white/10 text-white/50">Preview</div>
                        <div className="px-2 py-1 rounded text-[10px] font-bold text-white" style={{ background: ACCENT }}>Save Draft</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl z-10" style={{ borderColor: `${ACCENT}40` }}>
                <div className="text-white/50 text-[10px] mb-0.5">Update Time</div>
                <div className="text-2xl font-black" style={{ color: ACCENT }}>5 min</div>
                <div className="text-white/40 text-[10px]">No developer needed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem ──────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-14">
          <div className="text-center mb-8">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Sound familiar?</div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628]">Signs You Need a Proper CMS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {painPoints.map((p, i) => {
              const Icon = p.icon
              return (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 bg-[#fafafa]">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${p.color}15` }}>
                    <Icon size={15} style={{ color: p.color }} />
                  </div>
                  <span className="text-gray-600 text-sm leading-snug">{p.problem}</span>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-6">
            <div className="inline-block border-l-4 rounded-r-xl px-5 py-3 text-sm text-indigo-900 bg-indigo-50 text-left" style={{ borderLeftColor: ACCENT }}>
              <strong>If any of these resonate, a properly configured headless CMS eliminates all of them.</strong>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

        {/* ── CMS Type Selection ─────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="CMS Architecture" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Three CMS Architectures — We Build All Three
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            The right CMS architecture depends on how many frontends you have, your team size, and your data sovereignty requirements.
          </p>
          {/* Type switcher */}
          <div className="flex flex-wrap gap-3 mb-8">
            {cmsTypes.map((t, i) => {
              const Icon = t.icon
              return (
                <button key={i} onClick={() => setActiveCmsType(i)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${activeCmsType === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                  style={activeCmsType === i ? { background: t.color } : {}}>
                  <Icon size={14} /> {t.type}
                </button>
              )
            })}
          </div>
          {(() => {
            const t = cmsTypes[activeCmsType]
            const Icon = t.icon
            return (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200 rounded-3xl overflow-hidden">
                <div className="lg:col-span-2 p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${t.color}15` }}>
                      <Icon size={22} style={{ color: t.color }} />
                    </div>
                    <div>
                      <div className="font-black text-[#0a1628] text-xl">{t.type}</div>
                      <div className="text-sm font-semibold" style={{ color: t.color }}>{t.tagline}</div>
                    </div>
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-6">{t.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Advantages</div>
                      <div className="space-y-2">
                        {t.pros.map(pro => (
                          <div key={pro} className="flex items-start gap-2">
                            <CheckCircle2 size={13} style={{ color: t.color }} className="flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">{pro}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Considerations</div>
                      <div className="space-y-2">
                        {t.cons.map(con => (
                          <div key={con} className="flex items-start gap-2">
                            <ChevronRight size={13} className="flex-shrink-0 mt-0.5 text-gray-400" />
                            <span className="text-gray-400 text-sm">{con}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button onClick={openModal} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all" style={{ background: t.color }}>
                    Discuss This Architecture <ArrowRight size={15} />
                  </button>
                </div>
                <div className="p-8 border-t lg:border-t-0 lg:border-l border-gray-100 bg-[#fafafa]">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Best for</div>
                  <div className="font-semibold text-[#0a1628] text-sm mb-6 leading-snug">{t.bestFor}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Platforms we use</div>
                  <div className="flex flex-wrap gap-2">
                    {t.platforms.map(p => (
                      <span key={p} className="px-3 py-1.5 rounded-full text-xs font-semibold border border-gray-200 bg-white text-gray-700">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })()}
        </section>

        {/* ── Platform Deep-Dive ─────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Platform Selection" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Four Platforms We Master — Compared
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            We are platform-agnostic and choose based on your requirements. Here is how we evaluate each option.
          </p>
          {/* Platform tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {platforms.map((p, i) => (
              <button key={i} onClick={() => setActivePlatform(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${activePlatform === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                style={activePlatform === i ? { background: p.color } : {}}>
                {p.name}
              </button>
            ))}
          </div>
          {(() => {
            const p = platforms[activePlatform]
            return (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200 rounded-3xl overflow-hidden">
                <div className="lg:col-span-2 p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="font-black text-[#0a1628] text-2xl">{p.name}</div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white" style={{ background: p.color }}>
                      Our Rating: {p.ourRating}/100
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-gray-400 mb-6 italic">{p.tagline}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {p.strengths.map(s => (
                      <div key={s} className="flex items-start gap-2">
                        <CheckCircle2 size={14} style={{ color: p.color }} className="flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{s}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200" style={{ background: ACCENT_LIGHT }}>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Content Delivery</div>
                    <div className="font-semibold text-[#0a1628] text-sm">{p.delivery}</div>
                  </div>
                </div>
                <div className="p-8 border-t lg:border-t-0 lg:border-l border-gray-100 bg-[#fafafa] flex flex-col gap-5">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Ideal for</div>
                    <div className="text-[#0a1628] font-semibold text-sm">{p.ideal}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Pricing</div>
                    <div className="text-[#0a1628] font-semibold text-sm">{p.pricing}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Our Rating</div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${p.ourRating}%`, background: p.color }} />
                    </div>
                    <div className="text-right text-xs font-black mt-1" style={{ color: p.color }}>{p.ourRating}/100</div>
                  </div>
                  <button onClick={openModal} className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all" style={{ background: p.color }}>
                    Build with {p.name} <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )
          })()}
        </section>

        {/* ── Content Types ──────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Content Modelling" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Every Content Type Your Business Needs
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            We design a content schema that maps precisely to your business — no generic templates that force you to work around them.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {contentTypes.map((ct, i) => {
              const Icon = ct.icon
              return (
                <div key={i} className="group flex gap-4 p-6 border border-gray-200 rounded-2xl hover:border-indigo-300 hover:shadow-md hover:-translate-y-0.5 transition-all bg-white">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: ACCENT_LIGHT }}>
                    <Icon size={18} style={{ color: ACCENT_DARK }} />
                  </div>
                  <div>
                    <div className="font-bold text-[#0a1628] text-sm mb-1.5 group-hover:text-indigo-700 transition-colors">{ct.name}</div>
                    <div className="text-gray-400 text-xs leading-relaxed">{ct.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Editorial Workflow ─────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Editorial Workflow" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Content Lifecycle: Draft to Published
          </h2>
          <p className="text-gray-500 text-base mb-14 max-w-2xl">
            We configure a structured editorial workflow so content never goes live without proper review, approval, and preview.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 rounded-3xl overflow-hidden">
            {workflowSteps.map((w, i) => {
              const Icon = w.icon
              return (
                <div key={i} className={`p-6 ${i < workflowSteps.length - 1 ? 'border-b md:border-b-0 md:border-r lg:border-b-0 lg:border-r border-gray-200' : ''}`}>
                  {/* Phase header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${w.color}15` }}>
                      <Icon size={18} style={{ color: w.color }} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: w.color }}>Step {i + 1}</div>
                      <div className="font-black text-[#0a1628] text-base">{w.step}</div>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-gray-400 mb-2">{w.who}</div>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{w.desc}</p>
                  <div className="space-y-1.5">
                    {w.features.map(f => (
                      <div key={f} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: w.color }} />
                        <span className="text-gray-400 text-xs">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Role-Based Access ──────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel text="Access Control" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                Role-Based Permissions — The Right Person Sees the Right Things
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Not everyone on your team should be able to publish content or manage users. We configure granular role-based access control so each team member sees only what they need to do their job confidently.
              </p>
              <div className="space-y-4">
                {userRoles.map((role, i) => (
                  <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 px-5 py-3.5" style={{ background: `${role.color}10`, borderBottom: `1px solid ${role.color}20` }}>
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: role.color }} />
                      <span className="font-bold text-[#0a1628] text-sm">{role.role}</span>
                    </div>
                    <div className="px-5 py-3 flex flex-wrap gap-2">
                      {role.permissions.map(perm => (
                        <span key={perm} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">{perm}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Integrations */}
            <div>
              <SectionLabel text="Integrations" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                Your CMS at the Centre of Your Stack
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                A properly configured headless CMS is not isolated — it connects your content to every tool in your marketing and development stack via webhooks and APIs.
              </p>
              <div className="space-y-3">
                {integrations.map((intg, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-indigo-200 hover:shadow-sm transition-all bg-white">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: ACCENT_LIGHT }}>
                      <Puzzle size={14} style={{ color: ACCENT_DARK }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-bold text-[#0a1628] text-sm">{intg.name}</span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">{intg.type}</span>
                      </div>
                      <div className="text-gray-400 text-xs">{intg.desc}</div>
                    </div>
                    <ChevronRight size={14} className="text-gray-300 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Headless Delivery Diagram ─────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Content Delivery" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Write Once. Deliver Everywhere.
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            One headless CMS powers every channel simultaneously. Your content team updates one place — every frontend updates automatically.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
            {/* Source */}
            <div className="border-2 rounded-2xl p-6 text-center" style={{ borderColor: `${ACCENT}40`, background: ACCENT_LIGHT }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: ACCENT }}>
                <FileText size={24} className="text-white" />
              </div>
              <div className="font-black text-[#0a1628] text-lg mb-1">CMS Content Hub</div>
              <div className="text-gray-500 text-sm mb-4">One source of truth for all your content</div>
              <div className="flex flex-wrap justify-center gap-2">
                {['Sanity', 'Contentful', 'Strapi', 'Payload'].map(p => (
                  <span key={p} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white border border-indigo-200 text-indigo-700">{p}</span>
                ))}
              </div>
            </div>
            {/* Arrow + API */}
            <div className="flex flex-col items-center gap-3">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 text-center">Delivers via</div>
              <div className="flex gap-3 justify-center">
                {['REST API', 'GraphQL', 'Webhooks'].map(method => (
                  <span key={method} className="text-xs font-bold px-3 py-1.5 rounded-full text-white" style={{ background: ACCENT_DARK }}>{method}</span>
                ))}
              </div>
              <div className="flex items-center gap-3 w-full justify-center">
                <div className="flex-1 h-0.5 rounded-full bg-gray-200 hidden md:block" />
                <ArrowRight size={20} style={{ color: ACCENT }} className="rotate-0 md:rotate-0 rotate-90" />
                <div className="flex-1 h-0.5 rounded-full bg-gray-200 hidden md:block" />
              </div>
            </div>
            {/* Targets */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Website', icon: Globe, color: '#f5a623' },
                { label: 'Mobile App', icon: Columns, color: '#22c55e' },
                { label: 'Email', icon: Rss, color: '#ec4899' },
                { label: 'Digital Signage', icon: MonitorPlay, color: '#0ea5e9' },
              ].map(target => {
                const Icon = target.icon
                return (
                  <div key={target.label} className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-xl bg-white hover:shadow-sm transition-all">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2" style={{ background: `${target.color}15` }}>
                      <Icon size={16} style={{ color: target.color }} />
                    </div>
                    <span className="text-[#0a1628] font-semibold text-xs">{target.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="relative rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #0a1628 100%)' }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-[100px]" style={{ background: ACCENT }} />
            <div className="relative px-8 md:px-16 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#818cf8' }} />
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Free CMS Consultation</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Give Your Team the Power<br />
                  <span style={{ color: '#818cf8' }}>to Publish Independently</span>
                </h2>
                <p className="text-white/55 text-base max-w-md">
                  Tell us your current content workflow and we&apos;ll recommend the right CMS architecture, platform, and editorial setup for your team in 24 hours.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
                <button onClick={openModal} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white hover:opacity-90 transition-all text-sm whitespace-nowrap" style={{ background: ACCENT }}>
                  Get Free CMS Consultation <ArrowRight size={16} />
                </button>
                <Link href="/live-demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/80 border border-white/20 hover:bg-white/10 transition-all text-sm">
                  See Examples <ExternalLink size={14} />
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
            <p className="text-gray-500 text-base mb-10">Everything you need to know before choosing a CMS for your project.</p>
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
          <SectionLabel text="Complete Your Web Stack" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3">Services That Work with Your CMS</h2>
          <p className="text-gray-500 text-base mb-10">A great CMS powers a great website. Pair it with these services for the full picture.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { slug: 'web-design', tag: 'Web Design', title: 'Custom Website Design', desc: 'The Next.js frontend that consumes your headless CMS content with pixel-perfect design.', color: '#f5a623', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80' },
              { slug: 'ecommerce', tag: 'E-Commerce', title: 'E-Commerce Development', desc: 'Product catalogue and content managed through your CMS, powering your storefront.', color: '#22c55e', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80' },
              { slug: 'seo', tag: 'SEO', title: 'SEO Optimisation', desc: 'CMS-managed meta, structured data, and content strategy that ranks on Google.', color: '#f59e0b', img: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=80' },
              { slug: 'pwa', tag: 'PWA', title: 'Progressive Web App', desc: 'CMS-powered PWA that works offline and installs on the home screen.', color: '#8b5cf6', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80' },
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
