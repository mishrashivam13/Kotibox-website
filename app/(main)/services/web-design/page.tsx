'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, ChevronDown, ChevronUp,
  CheckCircle2, Play, ExternalLink,
  Paintbrush, Code2, Zap, Search, BarChart3,
  Globe, Monitor, Smartphone, Tablet,
  Star, Users, TrendingUp, Shield,
  Layout, Type, Image, MousePointer,
  Server, Database, Cloud, GitBranch,
  RefreshCw, Settings, Eye, Heart
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const ACCENT = '#f5a623'
const ACCENT_DARK = '#e8950f'
const ACCENT_LIGHT = '#fffbf0'
const NAVY = '#0a1628'
const NAVY2 = '#1a2f4e'

// --- Data -------------------------------------------------------------------

const websiteTypes = [
  {
    name: 'Landing Pages',
    tag: 'High-Converting',
    color: '#f5a623',
    timeline: '1 – 2 weeks',
    desc: 'Single-purpose pages built to convert visitors into leads, sign-ups, or sales. A/B tested headlines, above-the-fold CTAs, and social proof sections.',
    includes: ['Custom Figma Design', 'Conversion-focused Layout', 'A/B Testing Ready', 'Lead Capture Forms', 'Analytics Setup', 'Mobile-first'],
  },
  {
    name: 'Business Websites',
    tag: 'Brand-first',
    color: '#6366f1',
    timeline: '3 – 5 weeks',
    desc: 'Multi-page corporate websites that communicate your brand, services, and credibility. Full CMS so your team can update content without a developer.',
    includes: ['5–15 Custom Pages', 'CMS Integration', 'SEO Architecture', 'Blog & News Section', 'Contact & Forms', 'Team & About Pages'],
  },
  {
    name: 'Portfolio & Creative',
    tag: 'Showcase',
    color: '#ec4899',
    timeline: '2 – 4 weeks',
    desc: 'Visually stunning portfolio sites for agencies, studios, photographers, and creatives. Smooth scroll animations, case study pages, and project showcases.',
    includes: ['Animation & Motion', 'Case Study Pages', 'Gallery & Lightbox', 'Client Testimonials', 'Award-worthy Design', 'Fast Image Loading'],
  },
  {
    name: 'SaaS & Product Sites',
    tag: 'Growth',
    color: '#10b981',
    timeline: '4 – 6 weeks',
    desc: 'Feature-rich product marketing websites with pricing tables, interactive demos, comparison pages, and content designed to drive trial sign-ups.',
    includes: ['Pricing Page', 'Feature Showcase', 'Integration Directory', 'Docs Structure', 'Sign-up Funnels', 'Interactive Demos'],
  },
  {
    name: 'Enterprise Portals',
    tag: 'Custom',
    color: '#0ea5e9',
    timeline: '8 – 16 weeks',
    desc: 'Complex multi-user platforms with role-based dashboards, data visualisation, API integrations, and enterprise-grade security and authentication.',
    includes: ['Role-Based Access', 'Custom Dashboards', 'Data Visualisation', 'API Integration', 'SSO / OAuth', 'Audit Logs'],
  },
  {
    name: 'Marketing Microsites',
    tag: 'Campaign',
    color: '#8b5cf6',
    timeline: '1 – 3 weeks',
    desc: 'Campaign-specific microsites for product launches, events, and promotions with countdown timers, gated content, and campaign analytics.',
    includes: ['Countdown Timer', 'Gated Downloads', 'Event Registration', 'Campaign UTM Tracking', 'Social Share', 'CRM Integration'],
  },
]

const designProcess = [
  {
    phase: 'Discover',
    number: '01',
    icon: Eye,
    color: '#f5a623',
    duration: 'Week 1',
    headline: 'We understand before we design',
    steps: [
      'Brand deep-dive workshop (goals, voice, audience)',
      'Competitor & market landscape analysis',
      'Sitemap and information architecture planning',
      'Content inventory and copywriting brief',
    ],
  },
  {
    phase: 'Design',
    number: '02',
    icon: Paintbrush,
    color: '#ec4899',
    duration: 'Week 2–3',
    headline: 'Pixel-perfect Figma designs',
    steps: [
      'Low-fidelity wireframes for structure approval',
      'Mood board and visual direction proposal',
      'High-fidelity desktop + mobile designs',
      'Interactive clickable Figma prototype',
    ],
  },
  {
    phase: 'Build',
    number: '03',
    icon: Code2,
    color: '#6366f1',
    duration: 'Week 3–6',
    headline: 'Next.js development, pixel-perfect',
    steps: [
      'Next.js App Router with TypeScript',
      'Component-by-component development',
      'CMS integration (Sanity / Contentful / Strapi)',
      'Framer Motion animations & micro-interactions',
    ],
  },
  {
    phase: 'Optimise',
    number: '04',
    icon: Zap,
    color: '#10b981',
    duration: 'Week 6–7',
    headline: 'Performance & SEO-ready',
    steps: [
      'Core Web Vitals tuning (LCP, CLS, FID)',
      'Image optimisation (WebP, lazy load, CDN)',
      'SEO meta, structured data, sitemap',
      'Cross-browser and device QA testing',
    ],
  },
  {
    phase: 'Launch',
    number: '05',
    icon: Play,
    color: '#0ea5e9',
    duration: 'Week 7–8',
    headline: 'Go-live & post-launch monitoring',
    steps: [
      'Vercel / Netlify deployment with CDN',
      'Google Search Console submission',
      'Analytics (GA4 + heatmaps) setup',
      '30-day post-launch bug fix support',
    ],
  },
]

const techLayers = [
  {
    layer: 'Frontend',
    icon: Monitor,
    color: '#f5a623',
    desc: 'What users see and interact with',
    techs: ['Next.js 15 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP ScrollTrigger'],
  },
  {
    layer: 'CMS & Content',
    icon: Type,
    color: '#6366f1',
    desc: 'Non-technical content editing',
    techs: ['Sanity.io', 'Contentful', 'Strapi', 'WordPress (Headless)', 'Tina CMS', 'Payload CMS'],
  },
  {
    layer: 'Backend & APIs',
    icon: Server,
    color: '#10b981',
    desc: 'Business logic and data',
    techs: ['Next.js API Routes', 'Node.js / Express', 'Prisma ORM', 'PostgreSQL', 'REST & GraphQL', 'Webhook integrations'],
  },
  {
    layer: 'Hosting & DevOps',
    icon: Cloud,
    color: '#0ea5e9',
    desc: 'Reliable, fast global delivery',
    techs: ['Vercel (recommended)', 'Netlify', 'AWS Amplify', 'Cloudflare CDN', 'GitHub Actions CI/CD', 'Domain & SSL setup'],
  },
]

const performanceStats = [
  { metric: 'Largest Contentful Paint', target: '< 1.5s', what: 'How fast the main content loads', color: '#10b981' },
  { metric: 'Cumulative Layout Shift', target: '< 0.05', what: 'No unexpected layout jumps', color: '#10b981' },
  { metric: 'Interaction to Next Paint', target: '< 100ms', what: 'How fast the page responds to clicks', color: '#10b981' },
  { metric: 'Time to First Byte', target: '< 200ms', what: 'Server response speed', color: '#f5a623' },
  { metric: 'Lighthouse Performance', target: '95 – 100', what: 'Overall performance score', color: '#f5a623' },
  { metric: 'SEO Score', target: '100 / 100', what: 'Lighthouse SEO audit result', color: '#f5a623' },
]

const designPrinciples = [
  {
    icon: Eye,
    title: 'Visual Hierarchy First',
    desc: 'Every page guides the visitor\'s eye from attention to interest to action. We use size, weight, colour, and whitespace intentionally so your CTA is never missed.',
    color: '#f5a623',
  },
  {
    icon: MousePointer,
    title: 'Conversion-Driven Layout',
    desc: 'We place conversion elements based on scroll depth data and eye-tracking research. Above the fold is for attention. Scroll sections are for persuasion. Bottom is for commitment.',
    color: '#6366f1',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First, Always',
    desc: 'Over 60% of your visitors are on mobile. We design mobile first, then enhance for tablet and desktop. Not the other way around.',
    color: '#10b981',
  },
  {
    icon: Zap,
    title: 'Performance as UX',
    desc: 'A 1-second delay reduces conversions by 7%. We treat page speed as a design requirement, not an afterthought. Every image, font, and script is optimised.',
    color: '#ec4899',
  },
  {
    icon: Search,
    title: 'SEO Baked In',
    desc: 'Semantic HTML, structured data, Open Graph, canonical tags, and sitemap submission are part of our development checklist -- not an optional add-on at the end.',
    color: '#0ea5e9',
  },
  {
    icon: Heart,
    title: 'Brand Fidelity',
    desc: 'Your website should feel unmistakably yours. We build a design system (typography, colours, spacing, components) that makes every page feel cohesive.',
    color: '#f472b6',
  },
]

const seoChecklist = [
  'Semantic HTML5 structure (h1–h6 hierarchy)',
  'Next.js metadata API (title, description, OG tags)',
  'Structured data (JSON-LD: Organization, WebSite, BreadcrumbList)',
  'XML sitemap auto-generated & submitted',
  'robots.txt configuration',
  'Canonical tags on all pages',
  'Image alt text & lazy loading',
  'Core Web Vitals passing (LCP, CLS, INP)',
  'HTTPS (SSL) & HSTS headers',
  'Internal linking architecture',
  'Mobile-responsive (Google mobile-first indexing)',
  'Google Search Console & Analytics 4 setup',
]

const integrations = [
  { name: 'HubSpot CRM', cat: 'CRM & Marketing' },
  { name: 'Salesforce', cat: 'CRM & Marketing' },
  { name: 'Mailchimp / Klaviyo', cat: 'Email Marketing' },
  { name: 'Google Analytics 4', cat: 'Analytics' },
  { name: 'Hotjar / Microsoft Clarity', cat: 'Heatmaps' },
  { name: 'Stripe / Razorpay', cat: 'Payments' },
  { name: 'Calendly / Cal.com', cat: 'Scheduling' },
  { name: 'Intercom / Crisp', cat: 'Live Chat' },
  { name: 'Zapier / Make', cat: 'Automation' },
  { name: 'Google Tag Manager', cat: 'Tag Management' },
  { name: 'Cloudinary', cat: 'Media CDN' },
  { name: 'SendGrid / Resend', cat: 'Transactional Email' },
]

const faqs = [
  {
    question: 'How long does it take to design and build a website?',
    answer: 'It depends on scope. A high-converting landing page takes 1 to 2 weeks. A full business website with CMS (5 to 15 pages) takes 3 to 5 weeks. A SaaS product marketing site takes 4 to 6 weeks. A complex enterprise portal with custom dashboards and integrations takes 8 to 16 weeks. We provide a detailed milestone timeline after the initial discovery call.',
  },
  {
    question: 'What CMS do you recommend so we can update content ourselves?',
    answer: 'For most business sites, we recommend Sanity.io -- it has an intuitive visual editor your marketing team can use without developer help, an excellent developer experience, and a generous free tier. For WordPress familiarity, we offer headless WordPress with a modern Next.js frontend. For larger enterprises, Contentful is our preferred choice. We match the CMS to your team size and technical comfort level.',
  },
  {
    question: 'Will our website rank on Google?',
    answer: 'We build with SEO as a foundation, not an afterthought. Every site ships with semantic HTML, structured data (JSON-LD), auto-generated XML sitemaps, Open Graph tags, passing Core Web Vitals, and Google Search Console setup. We do not guarantee specific rankings (no one can), but we guarantee your site gives Google every signal it needs to rank you well.',
  },
  {
    question: 'What is your performance guarantee?',
    answer: 'We target a Lighthouse Performance score of 90+ on both mobile and desktop (95+ on desktop). Specifically: LCP under 2.5s, CLS under 0.1, and INP under 200ms. If the site does not meet these scores at launch, we fix it at no extra cost. We share a Lighthouse report screenshot with every delivery.',
  },
  {
    question: 'Do you design for mobile?',
    answer: 'Yes, we design mobile-first -- meaning we design the mobile layout first and then enhance it for tablet and desktop. Over 60% of web traffic globally is mobile. Google also uses mobile-first indexing for ranking. All our designs are tested on real iOS (Safari) and Android (Chrome) devices before delivery.',
  },
  {
    question: 'Can you redesign our existing website?',
    answer: 'Yes. Redesigns are one of our specialties. We start with a UX audit of your current site -- identifying drop-off points, slow pages, and conversion blockers. We then redesign with your existing content (or new copy we write), migrating SEO equity carefully (301 redirects, URL structure preservation where possible) to avoid ranking drops.',
  },
  {
    question: 'What is included in the post-launch support?',
    answer: 'Every project includes 30 days of post-launch bug fixing at no charge. After that, we offer monthly maintenance retainers covering: CMS plugin/dependency updates, performance monitoring, new page additions, design tweaks, analytics reporting, and priority support response. Retainer plans start from INR 8,000/month.',
  },
  {
    question: 'Do you write the website copy as well?',
    answer: 'We can. We have an in-house content team that writes conversion-focused, SEO-optimised website copy for landing pages, about pages, service pages, and blog posts. Copy is included as an add-on and is scoped per page. We can also work with your existing copy or brand guidelines if you prefer to write it yourself.',
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
  faq: { question: string; answer: string }
  index: number
  open: boolean
  onToggle: (i: number) => void
}) {
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? 'shadow-md' : 'border-gray-200'}`}
      style={open ? { borderColor: `${ACCENT}60` } : {}}
    >
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-amber-50/50 transition-colors"
      >
        <span className="text-[#0a1628] font-semibold text-sm md:text-base pr-4">{faq.question}</span>
        {open
          ? <ChevronUp size={18} style={{ color: ACCENT }} className="flex-shrink-0" />
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

// --- Page -------------------------------------------------------------------

export default function WebDesignPage() {
  const { openModal } = useModal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeType, setActiveType] = useState(0)

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0a1628]">
        {/* Warm glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full opacity-[0.15] blur-[120px]" style={{ background: ACCENT }} />
        {/* Faint grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(${ACCENT} 1px, transparent 1px), linear-gradient(90deg, ${ACCENT} 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-32 pb-0">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium bg-white/8 border border-white/15 px-4 py-2 rounded-full transition-colors mb-10"
          >
            <ArrowLeft size={15} /> Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            {/* Left */}
            <div className="pb-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[#0a1628] text-xs font-extrabold tracking-wider uppercase" style={{ background: ACCENT }}>
                  <Globe size={12} /> Web Development
                </span>
                <span className="text-white/40 text-sm">Custom Design & Build</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.06] mb-6">
                Custom Website<br />
                <span style={{ color: ACCENT }}>Design &amp;</span><br />
                Development
              </h1>

              <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl">
                Bespoke websites designed to convert visitors into customers. Built on Next.js with pixel-perfect Figma designs, CMS integration, and Lighthouse scores of 95+.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-[#0a1628] hover:opacity-90 transition-all shadow-lg"
                  style={{ background: ACCENT }}
                >
                  Start Your Project <ArrowRight size={16} />
                </button>
                <Link
                  href="/live-demo"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white border border-white/20 hover:bg-white/10 transition-all"
                >
                  See Live Examples <ExternalLink size={14} />
                </Link>
              </div>
            </div>

            {/* Right -- browser mockup */}
            <div className="relative hidden lg:block self-end">
              <div className="rounded-t-2xl overflow-hidden shadow-2xl border border-white/15" style={{ background: '#1a2f4e' }}>
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10" style={{ background: '#0d1f38' }}>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <div className="w-3 h-3 rounded-full" style={{ background: ACCENT, opacity: 0.8 }} />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white/10 rounded-full px-4 py-1.5 flex items-center gap-2">
                      <Shield size={10} className="text-green-400 flex-shrink-0" />
                      <span className="text-white/50 text-xs font-mono truncate">www.yourclient.com</span>
                    </div>
                  </div>
                  <div className="flex gap-2 text-white/30">
                    <RefreshCw size={12} />
                    <ExternalLink size={12} />
                  </div>
                </div>
                {/* Simulated page */}
                <div className="p-5 space-y-4">
                  {/* Hero strip */}
                  <div className="rounded-xl p-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1628, #1a2f4e)' }}>
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 blur-3xl" style={{ background: ACCENT }} />
                    <div className="w-2/3 h-3 bg-white/20 rounded-full mb-3" />
                    <div className="w-1/2 h-2 bg-white/10 rounded-full mb-5" />
                    <div className="flex gap-2">
                      <div className="px-4 py-1.5 rounded-lg text-[#0a1628] text-xs font-bold" style={{ background: ACCENT }}>Get Started</div>
                      <div className="px-4 py-1.5 rounded-lg text-xs text-white/70 border border-white/20">Learn More</div>
                    </div>
                  </div>
                  {/* Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {['#f5a623', '#6366f1', '#10b981'].map((c, i) => (
                      <div key={i} className="rounded-xl p-3 border border-white/10" style={{ background: '#0d1f38' }}>
                        <div className="w-6 h-6 rounded-lg mb-2" style={{ background: `${c}30` }} />
                        <div className="w-full h-1.5 bg-white/15 rounded-full mb-1.5" />
                        <div className="w-3/4 h-1.5 bg-white/10 rounded-full" />
                      </div>
                    ))}
                  </div>
                  {/* Stats bar */}
                  <div className="grid grid-cols-4 gap-2">
                    {['95', '100', '<2s', '100'].map((v, i) => (
                      <div key={i} className="rounded-lg p-2 text-center border border-white/10" style={{ background: '#0d1f38' }}>
                        <div className="text-sm font-black" style={{ color: ACCENT }}>{v}</div>
                        <div className="text-white/30 text-[9px] mt-0.5">
                          {['Perf', 'SEO', 'Speed', 'A11y'][i]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Lighthouse badge */}
              <div className="absolute -bottom-5 -right-5 bg-[#0a1628] border rounded-2xl px-5 py-3 shadow-xl z-10" style={{ borderColor: `${ACCENT}40` }}>
                <div className="text-white/50 text-[10px] mb-0.5">Lighthouse Score</div>
                <div className="text-2xl font-black" style={{ color: ACCENT }}>95+</div>
                <div className="text-white/40 text-[10px]">Performance & SEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Numbers ───────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { val: '250+', label: 'Websites Delivered', icon: Globe },
              { val: '95+', label: 'Avg Lighthouse Score', icon: Zap },
              { val: '3x', label: 'More Conversions vs Old Site', icon: TrendingUp },
              { val: '48h', label: 'First Design Prototype', icon: Paintbrush },
            ].map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="flex flex-col items-center text-center py-8 px-4 hover:bg-amber-50/50 transition-colors">
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

        {/* ── Website Types (Interactive Tabs) ──────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="What We Build" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Six Types of Websites We Specialise In
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Every project type has a different goal, structure, and success metric. We tailor our process to the specific website you need.
          </p>

          {/* Tab nav */}
          <div className="flex flex-wrap gap-2 mb-8">
            {websiteTypes.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveType(i)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${activeType === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                style={activeType === i ? { background: t.color } : {}}
              >
                {t.name}
              </button>
            ))}
          </div>

          {/* Active type detail */}
          {(() => {
            const t = websiteTypes[activeType]
            return (
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 border border-gray-200 rounded-3xl overflow-hidden">
                {/* Left detail */}
                <div className="lg:col-span-3 p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-white text-xs font-bold" style={{ background: t.color }}>{t.tag}</span>
                    <span className="text-gray-400 text-xs">Timeline: {t.timeline}</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#0a1628] mb-4">{t.name}</h3>
                  <p className="text-gray-500 leading-relaxed mb-8">{t.desc}</p>
                  <button
                    onClick={openModal}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all"
                    style={{ background: t.color }}
                  >
                    Discuss This Project <ArrowRight size={15} />
                  </button>
                </div>
                {/* Right includes */}
                <div className="lg:col-span-2 p-8 border-t lg:border-t-0 lg:border-l border-gray-100" style={{ background: '#fafafa' }}>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">What is included</div>
                  <div className="space-y-3">
                    {t.includes.map(item => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 size={16} style={{ color: t.color }} className="flex-shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })()}
        </section>

        {/* ── Design Philosophy ─────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Design Philosophy" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Beautiful. Fast. Built to Convert.
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Great web design is not just about looking good. Every design decision we make serves a business purpose.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {designPrinciples.map((p, i) => {
              const Icon = p.icon
              return (
                <div key={i} className="group p-7 border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${p.color}15` }}>
                    <Icon size={22} style={{ color: p.color }} />
                  </div>
                  <h3 className="text-[#0a1628] font-bold text-base mb-3">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Design Process (Horizontal Flow) ──────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="How We Work" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Our 5-Phase Web Design Process
          </h2>
          <p className="text-gray-500 text-base mb-14 max-w-2xl">
            A structured process that eliminates guesswork and keeps your project on time and budget.
          </p>

          {/* Horizontal phase nav */}
          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200 z-0" style={{ marginLeft: '10%', marginRight: '10%' }} />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {designProcess.map((phase, i) => {
                const Icon = phase.icon
                return (
                  <div key={i} className="flex flex-col items-center md:items-start">
                    {/* Circle */}
                    <div className="relative z-10 w-16 h-16 rounded-full flex flex-col items-center justify-center mb-4 shadow-lg text-white font-black text-xs" style={{ background: `linear-gradient(135deg, ${phase.color}, ${phase.color}cc)` }}>
                      <Icon size={20} />
                    </div>
                    {/* Phase name + duration */}
                    <div className="text-center md:text-left">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{phase.duration}</div>
                      <div className="font-black text-[#0a1628] text-base mb-1">{phase.phase}</div>
                      <div className="text-xs font-semibold mb-3" style={{ color: phase.color }}>{phase.headline}</div>
                      <div className="space-y-1.5">
                        {phase.steps.map((s, si) => (
                          <div key={si} className="flex items-start gap-1.5 text-left">
                            <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: phase.color }} />
                            <span className="text-gray-400 text-xs leading-relaxed">{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Tech Stack (Layered) ──────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel text="Technology" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                Built on Next.js &mdash; The Gold Standard for Web
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                We build every website on Next.js with the App Router, giving you server-side rendering for blazing-fast first loads, static generation for perfect SEO, and React for rich interactivity &mdash; all in one framework trusted by Vercel, OpenAI, and thousands of production sites.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                The result: your site loads faster, ranks higher on Google, and scales without infrastructure headaches.
              </p>
              {/* Layer cards */}
              <div className="space-y-4">
                {techLayers.map((layer, i) => {
                  const Icon = layer.icon
                  return (
                    <div key={i} className="flex gap-4 p-5 border border-gray-200 rounded-2xl hover:shadow-sm transition-all bg-white">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${layer.color}15` }}>
                        <Icon size={18} style={{ color: layer.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-[#0a1628] text-sm">{layer.layer}</span>
                          <span className="text-gray-400 text-xs">{layer.desc}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {layer.techs.map(tech => (
                            <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* SEO section */}
            <div>
              <SectionLabel text="SEO & Performance" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                SEO Is Architecture, Not an Add-On
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                We build SEO in from line one, not as a post-launch checklist. Every element of our Next.js architecture is designed to give Google exactly what it needs to rank your site.
              </p>

              {/* Core Web Vitals */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden mb-6">
                <div className="px-5 py-3 font-bold text-sm text-white" style={{ background: NAVY }}>
                  Core Web Vitals Targets (Every Project)
                </div>
                <div className="divide-y divide-gray-100">
                  {performanceStats.map(stat => (
                    <div key={stat.metric} className="flex items-center justify-between px-5 py-3">
                      <div>
                        <div className="text-[#0a1628] font-semibold text-sm">{stat.metric}</div>
                        <div className="text-gray-400 text-xs">{stat.what}</div>
                      </div>
                      <span className="text-sm font-black px-3 py-1 rounded-full" style={{ color: stat.color, background: `${stat.color}15` }}>
                        {stat.target}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SEO checklist */}
              <div className="border border-gray-200 rounded-2xl p-5">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">SEO Checklist (Included on Every Site)</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {seoChecklist.map(item => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 size={13} style={{ color: ACCENT }} className="flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500 text-xs leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Integrations ──────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Integrations" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Connects with Your Entire Marketing Stack
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Your website does not exist in isolation. We integrate it with your CRM, email marketing, analytics, payments, and support tools from day one.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {integrations.map(intg => (
              <div key={intg.name} className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-2xl hover:border-[#f5a623]/40 hover:shadow-md transition-all bg-white group">
                <div className="w-8 h-8 rounded-xl mb-2 flex items-center justify-center" style={{ background: `${ACCENT}15` }}>
                  <Settings size={14} style={{ color: ACCENT }} />
                </div>
                <div className="text-[#0a1628] font-semibold text-xs leading-snug mb-1">{intg.name}</div>
                <div className="text-gray-400 text-[10px]">{intg.cat}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Responsive Design ─────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="Responsive Design" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                Looks Perfect on Every Screen, Every Time
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                We design and test on every breakpoint: phone (320px), large phone (428px), tablet portrait (768px), tablet landscape (1024px), desktop (1280px), and wide desktop (1440px+). No squished text, no broken layouts, no horizontal scroll.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Smartphone, device: 'Mobile (320 – 428px)', note: 'Designed first. Touch targets 44px+, no hover-only interactions.', color: '#10b981' },
                  { icon: Tablet, device: 'Tablet (768 – 1024px)', note: 'Adapted grid layouts, side navigation, larger content columns.', color: '#6366f1' },
                  { icon: Monitor, device: 'Desktop (1280px+)', note: 'Full layout with sidebars, hover states, and content-rich sections.', color: '#f5a623' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex gap-4 items-start p-4 border border-gray-100 rounded-xl bg-[#fafafa]">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}15` }}>
                        <Icon size={18} style={{ color: item.color }} />
                      </div>
                      <div>
                        <div className="text-[#0a1628] font-bold text-sm mb-0.5">{item.device}</div>
                        <div className="text-gray-400 text-xs leading-relaxed">{item.note}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Why choose us */}
            <div>
              <SectionLabel text="Why Kotibox" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                What Sets Our Web Projects Apart
              </h2>
              <div className="space-y-4">
                {[
                  { title: 'Figma-first Design', desc: 'You approve every page design in Figma before a single line of code is written. No surprises at delivery.' },
                  { title: 'Next.js App Router', desc: 'Every site is built on Next.js 15 with the App Router, server components, and streaming for maximum performance and SEO.' },
                  { title: 'CMS Empowerment', desc: 'Your marketing team updates content independently. We build intuitive CMS interfaces your non-technical staff can use confidently on day one.' },
                  { title: '30-Day Post-Launch Bug Fix', desc: 'Every website ships with a free 30-day bug fix period. Cross-browser issues, content tweaks, and layout bugs resolved at no charge.' },
                  { title: 'Core Web Vitals Guarantee', desc: 'We guarantee 90+ Lighthouse scores on Performance, SEO, Accessibility, and Best Practices at delivery. Verified by shared Lighthouse report.' },
                  { title: 'Source Code Ownership', desc: 'Full source code is yours on delivery. GitHub repository transfer, deployment credentials, CMS access -- everything handed over completely.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:border-[#f5a623]/40 hover:shadow-sm transition-all">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={18} style={{ color: ACCENT }} />
                    </div>
                    <div>
                      <div className="text-[#0a1628] font-bold text-sm mb-1">{item.title}</div>
                      <div className="text-gray-400 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="relative rounded-3xl overflow-hidden" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY2} 100%)` }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-[100px]" style={{ background: ACCENT }} />
            <div className="relative px-8 md:px-16 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Free Consultation</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Ready to Build a Website<br />
                  <span style={{ color: ACCENT }}>That Actually Converts?</span>
                </h2>
                <p className="text-white/55 text-base max-w-md">
                  Tell us about your project and get a design proposal, tech recommendation, and timeline within 24 hours.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
                <button
                  onClick={openModal}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[#0a1628] hover:opacity-90 transition-all text-sm whitespace-nowrap"
                  style={{ background: ACCENT }}
                >
                  Start Your Project <ArrowRight size={16} />
                </button>
                <Link
                  href="/live-demo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/80 border border-white/20 hover:bg-white/10 transition-all text-sm"
                >
                  See Our Work <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQs ──────────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <SectionLabel text="FAQs" />
            <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-base mb-10">
              Everything you need to know before starting your web project.
            </p>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <FaqItem
                  key={i}
                  faq={faq}
                  index={i}
                  open={openFaq === i}
                  onToggle={(idx) => setOpenFaq(openFaq === idx ? null : idx)}
                />
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* ── Related Web Services ──────────────────────────────────────────── */}
      <section className="bg-[#f8fafc] py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <SectionLabel text="More Web Services" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3">Complete Your Web Strategy</h2>
          <p className="text-gray-500 text-base mb-10">Pair your new website with our other web development services.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { slug: 'ecommerce', tag: 'E-Commerce', title: 'E-Commerce Development', desc: 'High-converting online stores with AI recommendations, abandoned cart recovery, and multi-currency support.', color: '#22c55e', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80' },
              { slug: 'cms', tag: 'CMS', title: 'CMS Development', desc: 'Headless CMS integration so your marketing team can publish and update content without developer help.', color: '#6366f1', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&q=80' },
              { slug: 'pwa', tag: 'PWA', title: 'Progressive Web Apps', desc: 'App-like experience on the browser with offline support, push notifications, and home screen installation.', color: '#8b5cf6', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80' },
              { slug: 'seo', tag: 'SEO', title: 'SEO Optimisation', desc: 'Data-driven SEO to rank on page one of Google and drive qualified organic traffic to your new site.', color: '#f59e0b', img: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=80' },
            ].map(s => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
              >
                <div className="h-40 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-3" style={{ background: s.color }}>{s.tag}</span>
                  <h3 className="font-bold text-[#0a1628] group-hover:text-[#f5a623] transition-colors mb-1.5 text-sm leading-snug">{s.title}</h3>
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
