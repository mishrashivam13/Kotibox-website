'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, ChevronDown, ChevronUp,
  CheckCircle2, ExternalLink, Mic,
  Bot, Search, Star, Globe, Zap,
  BarChart3, TrendingUp, Users, Shield,
  FileText, MessageSquare, Database, Layers,
  Code2, Settings, Eye, Bell,
  BookOpen, Lightbulb, Award, Target,
  RefreshCw, Share2, Link2, Brain,
  CircleDot, Sparkles, Radio, Telescope
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const AEO_COLOR = '#06b6d4'
const GEO_COLOR = '#a855f7'
const ACCENT = '#06b6d4'
const NAVY = '#0a1628'

// --- Data -------------------------------------------------------------------

const aiEngines = [
  { name: 'ChatGPT', company: 'OpenAI', share: '63%', color: '#10a37f', note: 'Largest AI chat user base. Cites web sources in GPT-4o Browse mode.' },
  { name: 'Perplexity', company: 'Perplexity AI', share: '18%', color: '#20808d', note: 'Real-time web search with inline citations. Highest citation rate of all AI engines.' },
  { name: 'Gemini', company: 'Google', share: '11%', color: '#4285f4', note: 'Deeply integrated into Google Search as AI Overviews. Massive organic reach.' },
  { name: 'Copilot', company: 'Microsoft / OpenAI', share: '6%', color: '#0078d4', note: 'Powers Bing AI, integrated into Edge and Microsoft 365 ecosystem.' },
  { name: 'Claude', company: 'Anthropic', share: '2%', color: '#c85b3a', note: 'Growing adoption in enterprise. Claude.ai now searches the web for Pro users.' },
]

const aeoVsGeo = [
  {
    type: 'AEO',
    fullName: 'Answer Engine Optimization',
    color: AEO_COLOR,
    icon: Mic,
    whatIt: 'Optimising your content to be the direct answer shown in Google featured snippets, People Also Ask boxes, knowledge panels, and voice search results.',
    channel: 'Google Search (traditional), Voice assistants (Alexa, Siri, Google Assistant)',
    signal: 'Structured content, clear question-answer format, schema markup',
    measure: 'Featured snippet share, voice result frequency, PAA appearances, zero-click traffic',
    tactics: [
      'FAQ schema & HowTo schema markup',
      'Question-format H2/H3 headings',
      'Concise 40–60 word direct answers',
      'Table and list-format content',
      'Knowledge panel optimisation',
      'Local pack & voice search tuning',
    ],
  },
  {
    type: 'GEO',
    fullName: 'Generative Engine Optimization',
    color: GEO_COLOR,
    icon: Brain,
    whatIt: 'Optimising your brand, content, and digital presence to be cited, referenced, and recommended by AI language models like ChatGPT, Perplexity, Gemini, and Bing Copilot when users ask questions in your niche.',
    channel: 'ChatGPT, Perplexity, Gemini AI Overviews, Bing Copilot, Claude.ai',
    signal: 'Brand authority, topical expertise signals, citation-worthy content, E-E-A-T',
    measure: 'AI citation frequency, brand mention monitoring in AI responses, Share of Model (SOM)',
    tactics: [
      'Brand entity strengthening across the web',
      'High-authority backlink acquisition',
      'Long-form expert content (2,000+ words)',
      'Wikipedia & Wikidata presence',
      'Structured data for brand/org entities',
      'AI-readable content formatting',
    ],
  },
]

const citationTriggers = [
  {
    trigger: 'Topical Authority',
    icon: BookOpen,
    color: AEO_COLOR,
    weight: 'Very High',
    desc: 'AI models cite sources that demonstrably cover a topic comprehensively. A single great article is rarely cited; a cluster of interconnected, expert content on every facet of a topic is.',
    actions: ['Build topic clusters (pillar page + 15–20 supporting posts)', 'Cover sub-topics competitors skip', 'Internal link cluster content to the pillar'],
  },
  {
    trigger: 'E-E-A-T Signals',
    icon: Award,
    color: GEO_COLOR,
    weight: 'Very High',
    desc: 'Experience, Expertise, Authoritativeness, Trustworthiness. AI models are trained on data that rewards these signals. Author credentials, bylines, about pages, and citations from known sources all feed E-E-A-T.',
    actions: ['Author bio pages with credentials', 'Cite primary sources & research', 'Get cited by high-DA publications', 'Display accreditations & case studies'],
  },
  {
    trigger: 'Structured Data & Schema',
    icon: Code2,
    color: AEO_COLOR,
    weight: 'High',
    desc: 'JSON-LD schema helps both Google and AI crawlers understand exactly what your content says, who wrote it, what organisation it belongs to, and what the content type is.',
    actions: ['Organization schema with sameAs links', 'FAQPage & HowTo schema', 'Article schema with author entity', 'Speakable schema for voice'],
  },
  {
    trigger: 'Brand Entity Presence',
    icon: Globe,
    color: GEO_COLOR,
    weight: 'High',
    desc: 'AI models build a picture of your brand from mentions across the web. A brand that appears on Wikipedia, Crunchbase, LinkedIn, industry directories, and reputable publications is seen as more authoritative.',
    actions: ['Wikipedia / Wikidata listing (if eligible)', 'Crunchbase, LinkedIn company page', 'Industry directory listings', 'PR & media mentions in niche publications'],
  },
  {
    trigger: 'Citation-Worthy Content Format',
    icon: FileText,
    color: AEO_COLOR,
    weight: 'Medium-High',
    desc: 'AI models prefer content they can cleanly extract and cite. Short paragraphs, clear headings, bullet lists, numbered steps, and direct declarative sentences are significantly more citation-friendly than long prose.',
    actions: ['Use H2 questions, H3 sub-answers', 'Lead every section with a summary sentence', 'Use numbered lists for processes', 'Include pull-quote style key stats'],
  },
  {
    trigger: 'Freshness & Updates',
    icon: RefreshCw,
    color: GEO_COLOR,
    weight: 'Medium',
    desc: 'AI Overviews (Google Gemini) and Perplexity actively search the web in real-time, strongly preferring recently updated content. A 2024 article beats a 2020 article with identical quality.',
    actions: ['Add "Last updated" dates visibly', 'Republish updated posts with new date', 'Add current year data / statistics', 'Create content around recent events in niche'],
  },
]

const contentFramework = [
  {
    layer: 'Foundation Layer',
    desc: 'The non-negotiable base every AI-visible site must have',
    color: '#1e293b',
    items: ['HTTPS + Core Web Vitals passing', 'Technical SEO fundamentals (crawlability, indexing)', 'Organization / Person schema with sameAs identifiers', 'Clean semantic HTML with clear content hierarchy'],
  },
  {
    layer: 'Authority Layer',
    desc: 'Signals that tell AI models your brand is trustworthy',
    color: AEO_COLOR,
    items: ['Wikipedia, Wikidata, or Crunchbase entity listing', 'High-DA backlinks from niche publications', 'Author entities with credential pages', 'Brand mentions in journalism & media'],
  },
  {
    layer: 'Content Layer',
    desc: 'Content engineered to be extracted and cited by AI',
    color: GEO_COLOR,
    items: ['Topic cluster architecture (pillar + satellite)', 'Question-format headings throughout', 'Direct 40–60 word answer paragraphs', 'Statistics, data, and primary research'],
  },
  {
    layer: 'Schema Layer',
    desc: 'Structured data that AI crawlers can parse precisely',
    color: '#f59e0b',
    items: ['FAQPage schema on all Q&A content', 'HowTo schema on process content', 'Article schema with author & dateModified', 'Speakable schema for voice-extractable passages'],
  },
  {
    layer: 'Measurement Layer',
    desc: 'Tracking AI visibility that standard analytics misses',
    color: '#10b981',
    items: ['Share of Model (SOM) tracking via AI prompt monitoring', 'Perplexity citation monitoring', 'Google AI Overview appearance tracking (Search Console)', 'Brand mention monitoring across AI platforms'],
  },
]

const deliverables = [
  { category: 'Month 1 — Foundation', color: AEO_COLOR, icon: Settings, items: ['AEO + GEO baseline audit', 'AI visibility score report', 'Entity & schema gap analysis', 'Topic cluster architecture design', 'Competitor AI citation analysis'] },
  { category: 'Month 2–3 — Content Build', color: GEO_COLOR, icon: FileText, items: ['Pillar page (3,000–5,000 words)', '10–15 cluster articles (800–1,500 words each)', 'FAQ schema implementation', 'HowTo & Speakable schema rollout', 'Author entity pages creation'] },
  { category: 'Month 3–4 — Authority', color: '#f59e0b', icon: Award, items: ['Digital PR & link acquisition (10–15 links)', 'Wikipedia / Wikidata listing (if eligible)', 'Niche directory submissions', 'Organization schema with full sameAs', 'Thought leadership article placement'] },
  { category: 'Ongoing — Monitor & Grow', color: '#10b981', icon: BarChart3, items: ['Monthly AI citation monitoring report', 'Google AI Overview tracking', 'Share of Model (SOM) measurement', 'Content freshness updates', 'New cluster topic expansion'] },
]

const aeoSnippetTypes = [
  { type: 'Featured Snippet', icon: Star, color: '#f59e0b', desc: 'The "position zero" answer box at the top of Google. Paragraph, list, or table format. Gets 35% of all clicks on that SERP.' },
  { type: 'People Also Ask', icon: MessageSquare, color: AEO_COLOR, desc: 'Expandable Q&A boxes. Appearing here signals to AI models that you are a trusted answer source for related questions.' },
  { type: 'Knowledge Panel', icon: Database, color: GEO_COLOR, desc: 'The right-side entity panel for brands and people. Powered by Google\'s Knowledge Graph — the same graph that informs Gemini AI.' },
  { type: 'AI Overview (Gemini)', icon: Brain, color: '#4285f4', desc: 'Google\'s Gemini-powered answer that appears above organic results. Sources cited here get extraordinary brand visibility.' },
  { type: 'Voice Search Answer', icon: Mic, color: '#10b981', desc: 'Alexa, Siri, and Google Assistant read one answer per query. Winning voice results drives significant local and mobile traffic.' },
  { type: 'Perplexity Citation', icon: Link2, color: '#20808d', desc: 'Perplexity cites 3–5 sources per answer with inline numbers. Being cited here builds direct referral traffic from AI users.' },
]

const faqs = [
  {
    question: 'What is AEO and how is it different from traditional SEO?',
    answer: 'AEO (Answer Engine Optimization) focuses specifically on getting your content selected as the direct answer to a query — in Google featured snippets, People Also Ask boxes, voice search results, and Google Knowledge Panels. Traditional SEO optimises for ranking on page 1; AEO optimises for position zero and zero-click answers. The key shift is from "rank for keywords" to "own the answer to specific questions." Both are complementary and share technical foundations, but AEO requires question-format content, concise 40–60 word direct answers, and specific schema types (FAQPage, Speakable, HowTo).',
  },
  {
    question: 'What is GEO and why does it matter now?',
    answer: 'GEO (Generative Engine Optimization) is the practice of optimising your brand to be cited, referenced, and recommended by AI language models like ChatGPT, Perplexity, Gemini, and Bing Copilot when users ask questions in your industry. It matters because AI-powered search is fundamentally changing how people find information. ChatGPT has over 100 million daily users. Perplexity processes millions of searches per day. Google AI Overviews now appear for over 50% of US searches. If your brand is not being cited in AI responses, you are invisible to a rapidly growing segment of your potential customers.',
  },
  {
    question: 'Can you actually control whether ChatGPT mentions your brand?',
    answer: 'Not directly — there is no "ChatGPT ad placement." But AI models are trained on and continuously updated with web data, and they cite sources they encounter during real-time web search (GPT-4o Browse, Perplexity, Bing Copilot, Gemini). The brands that get cited are those with high topical authority, strong backlink profiles from trusted sources, comprehensive content that thoroughly answers niche questions, and entity presence across Wikipedia, Crunchbase, and industry databases. GEO is about being so credible and comprehensive on your topic that AI models naturally cite you when they search the web.',
  },
  {
    question: 'How do you measure GEO success if Google Analytics does not track AI citations?',
    answer: 'We use a combination of approaches: (1) Share of Model (SOM) monitoring — we periodically prompt AI engines with target questions and track whether your brand is cited; (2) Perplexity citation tracking — Perplexity shows which domains it cites, we monitor your domain frequency; (3) Google Search Console for AI Overview appearances (Google is adding this data); (4) Referral traffic from Perplexity.ai, which shows in your analytics as a referral source; (5) Brand mention monitoring tools (Brand24, Mention) tracking AI-platform mentions. We report on all of these monthly.',
  },
  {
    question: 'How long does AEO & GEO take to show results?',
    answer: 'AEO results are faster — featured snippet appearances and PAA box wins can happen within 4 to 8 weeks of implementing the right content structure and schema. GEO results take longer because AI model training and web index updates happen on longer cycles. Perplexity and GPT-4o Browse results can improve within 6 to 10 weeks as your content authority grows. Broader AI model adoption of your brand typically shows meaningful change in 4 to 6 months. We set milestone expectations clearly: Month 1 is foundation, Month 2–3 is content build, Month 4+ is AI citation growth.',
  },
  {
    question: 'Does AEO & GEO replace traditional SEO?',
    answer: 'No — it extends it. Traditional SEO (technical health, backlinks, Core Web Vitals) is the foundation that AEO and GEO are built on. You cannot win AI citations if your site is slow, thin on content, or has no domain authority. Think of it as three layers: SEO is the technical foundation, AEO is optimising for direct answer extraction in Google, and GEO is optimising for AI model citation across all AI engines. We build all three together in a unified strategy.',
  },
  {
    question: 'What types of businesses benefit most from AEO & GEO?',
    answer: 'Any business where customers ask research questions before buying. This includes: SaaS and software companies (people ask AI "what is the best tool for X?"), professional services (legal, accounting, consulting — people ask AI for advice), healthcare (symptom checkers, treatment questions), e-commerce (product comparison questions), B2B companies (industry knowledge questions), and educational content creators. If your customers are the type to ask ChatGPT or Perplexity before making a decision, GEO is directly relevant to your customer acquisition.',
  },
  {
    question: 'Do you write the content or just optimise existing content?',
    answer: 'Both. Our AEO & GEO service includes a full content strategy and writing team. We write pillar pages, cluster articles, FAQ content, and thought leadership pieces — all optimised for AI citation from the first draft. We can also audit and restructure your existing content to be more citation-friendly. Content is the single most important lever in both AEO and GEO, so we treat it as the core of the engagement rather than an add-on.',
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
      <button onClick={() => onToggle(index)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-cyan-50/40 transition-colors">
        <span className="text-[#0a1628] font-semibold text-sm md:text-base pr-4">{faq.question}</span>
        {open ? <ChevronUp size={18} style={{ color: ACCENT }} className="flex-shrink-0" /> : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />}
      </button>
      {open && <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.answer}</div>}
    </div>
  )
}

// --- Page -------------------------------------------------------------------

export default function AeoGeoPage() {
  const { openModal } = useModal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeTrigger, setActiveTrigger] = useState(0)

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #020b18 0%, #0a1628 50%, #0d0a1f 100%)' }}>
        {/* Dual glow — AEO cyan left, GEO purple right */}
        <div className="absolute top-0 left-0 w-[600px] h-[500px] rounded-full opacity-[0.12] blur-[120px]" style={{ background: AEO_COLOR }} />
        <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full opacity-[0.10] blur-[120px]" style={{ background: GEO_COLOR }} />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle, ${AEO_COLOR} 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-32 pb-20">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium bg-white/8 border border-white/15 px-4 py-2 rounded-full transition-colors mb-10">
            <ArrowLeft size={15} /> Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[#020b18] text-xs font-extrabold tracking-wider uppercase" style={{ background: AEO_COLOR }}>
                  <Mic size={12} /> AEO
                </span>
                <span className="text-white/40 text-sm">+</span>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-xs font-extrabold tracking-wider uppercase" style={{ background: GEO_COLOR }}>
                  <Brain size={12} /> GEO
                </span>
                <span className="text-white/30 text-xs">Digital Marketing</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.06] mb-6">
                <span style={{ color: AEO_COLOR }}>Answer</span> &amp;<br />
                <span style={{ color: GEO_COLOR }}>Generative</span><br />
                Engine Optimization
              </h1>

              <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
                The future of search is AI. We optimize your brand to appear in ChatGPT, Perplexity, Google Gemini, and Bing Copilot answers — and capture Google&apos;s featured snippets, AI Overviews, and voice results simultaneously.
              </p>

              {/* AI engine pills */}
              <div className="flex flex-wrap gap-2 mb-10">
                {['ChatGPT', 'Perplexity', 'Gemini AI', 'Bing Copilot', 'Featured Snippets', 'Voice Search'].map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 text-white/70 bg-white/8">{tag}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button onClick={openModal} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-[#020b18] hover:opacity-90 transition-all shadow-lg" style={{ background: AEO_COLOR }}>
                  Get AI Visibility Audit <ArrowRight size={16} />
                </button>
                <Link href="/services/content" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white border border-white/20 hover:bg-white/10 transition-all">
                  See Content Strategy <ExternalLink size={14} />
                </Link>
              </div>
            </div>

            {/* Right -- AI answer simulation */}
            <div className="relative hidden lg:block space-y-3">
              {/* Perplexity-style answer */}
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl" style={{ background: '#0f172a' }}>
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10" style={{ background: '#1e293b' }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: '#20808d' }}>
                    <Search size={10} className="text-white" />
                  </div>
                  <span className="text-white/60 text-xs font-mono">perplexity.ai</span>
                  <div className="ml-auto text-[10px] px-2 py-0.5 rounded font-bold text-white" style={{ background: '#20808d' }}>AI Search</div>
                </div>
                <div className="px-5 py-4">
                  <div className="text-white/40 text-[10px] uppercase tracking-widest mb-2">User query</div>
                  <div className="text-white text-sm font-semibold mb-4">&ldquo;What is the best digital marketing agency for SaaS?&rdquo;</div>
                  <div className="text-white/40 text-[10px] uppercase tracking-widest mb-2">AI Answer</div>
                  <p className="text-white/70 text-xs leading-relaxed mb-3">
                    Based on expertise in SaaS marketing, <span className="text-white font-bold" style={{ color: AEO_COLOR }}>Kotibox</span> <span className="text-white/50">[1]</span> is frequently cited for its AEO and GEO strategies that help SaaS brands appear in AI-generated responses...
                  </p>
                  <div className="flex gap-2">
                    {['[1] kotibox.com', '[2] clutch.co', '[3] g2.com'].map((src, i) => (
                      <span key={i} className="text-[10px] px-2 py-1 rounded-lg border border-white/10 text-white/50" style={i === 0 ? { borderColor: `${AEO_COLOR}40`, color: AEO_COLOR } : {}}>{src}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Google AI Overview simulation */}
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl" style={{ background: '#0f172a' }}>
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10" style={{ background: '#1e293b' }}>
                  <div className="flex gap-1">
                    <span className="text-[#4285f4] font-black text-xs">G</span>
                    <span className="text-[#ea4335] font-black text-xs">o</span>
                    <span className="text-[#fbbc04] font-black text-xs">o</span>
                    <span className="text-[#4285f4] font-black text-xs">g</span>
                    <span className="text-[#34a853] font-black text-xs">l</span>
                    <span className="text-[#ea4335] font-black text-xs">e</span>
                  </div>
                  <span className="text-white/40 text-[10px]">AI Overview</span>
                  <div className="ml-auto flex items-center gap-1">
                    <Sparkles size={10} style={{ color: '#4285f4' }} />
                    <span className="text-[10px] font-bold text-[#4285f4]">Gemini</span>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <div className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Featured Answer</div>
                  <p className="text-white/70 text-xs leading-relaxed">
                    AEO focuses on optimising for <span className="font-bold text-white">direct answer extraction</span> in search engines, while GEO optimises for <span className="font-bold" style={{ color: GEO_COLOR }}>AI model citations</span> across platforms like ChatGPT and Perplexity. Together they form a complete AI search strategy...
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-[10px] text-white/30">Sources:</span>
                    <span className="text-[10px] px-2 py-0.5 rounded border text-[#4285f4]" style={{ borderColor: '#4285f4', background: '#4285f420' }}>kotibox.com</span>
                  </div>
                </div>
              </div>

              {/* Floating stat */}
              <div className="absolute -top-4 -right-4 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl z-10" style={{ borderColor: `${GEO_COLOR}40` }}>
                <div className="text-white/40 text-[10px] mb-0.5">AI Search Growth</div>
                <div className="text-2xl font-black" style={{ color: GEO_COLOR }}>+400%</div>
                <div className="text-white/30 text-[9px]">YoY 2023 → 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Shift ────────────────────────────────────────────────── */}
      <section className="border-b border-gray-100" style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
          <div className="text-center mb-8">
            <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: AEO_COLOR }}>The Search Landscape Has Changed</div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Search is No Longer Just Google Blue Links</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { val: '50%+', label: 'Google searches show AI Overviews (US)', icon: Brain, color: '#4285f4' },
              { val: '100M+', label: 'Daily ChatGPT users searching for information', icon: Bot, color: '#10a37f' },
              { val: '63%', label: 'of B2B buyers use AI tools for vendor research', icon: Users, color: GEO_COLOR },
              { val: '0', label: 'clicks — zero-click searches are now the majority', icon: Search, color: AEO_COLOR },
            ].map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="flex flex-col items-center text-center py-8 px-4">
                  <Icon size={22} className="mb-3 opacity-80" style={{ color: s.color }} />
                  <div className="text-2xl md:text-3xl font-black text-white mb-1">{s.val}</div>
                  <div className="text-white/40 text-xs leading-snug">{s.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

        {/* ── AEO vs GEO ─────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="AEO vs GEO" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Two Disciplines. One Unified Strategy.
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            AEO and GEO target different AI-powered answer surfaces. Together they ensure your brand owns the answer across every platform where your customers are asking questions.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {aeoVsGeo.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="rounded-3xl overflow-hidden border-2" style={{ borderColor: `${item.color}40` }}>
                  {/* Header */}
                  <div className="px-8 py-6" style={{ background: `${item.color}12` }}>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: item.color }}>
                        <Icon size={22} className="text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-black" style={{ color: item.color }}>{item.type}</div>
                        <div className="text-gray-500 text-sm">{item.fullName}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.whatIt}</p>
                  </div>
                  {/* Details */}
                  <div className="px-8 py-6 space-y-5">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Channels</div>
                      <div className="text-gray-700 text-sm">{item.channel}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Primary Signals</div>
                      <div className="text-gray-700 text-sm">{item.signal}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">How We Measure It</div>
                      <div className="text-gray-700 text-sm">{item.measure}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Key Tactics</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.tactics.map(t => (
                          <div key={t} className="flex items-start gap-2">
                            <CheckCircle2 size={13} style={{ color: item.color }} className="flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-xs">{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── AI Engines Landscape ─────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="AI Search Landscape" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            The AI Engines We Optimize For
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Each AI engine has different citation behaviour, content preferences, and update cycles. We understand each one.
          </p>
          <div className="space-y-4">
            {aiEngines.map((engine, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all">
                {/* Engine identity */}
                <div className="p-5 flex items-center gap-4 border-b md:border-b-0 md:border-r border-gray-100" style={{ background: `${engine.color}08` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: engine.color }}>
                    <Bot size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-black text-[#0a1628] text-base">{engine.name}</div>
                    <div className="text-gray-400 text-xs">{engine.company}</div>
                  </div>
                </div>
                {/* Market share */}
                <div className="p-5 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col justify-center">
                  <div className="text-xs text-gray-400 mb-2 font-semibold uppercase tracking-wider">AI Search Share</div>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl font-black" style={{ color: engine.color }}>{engine.share}</div>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: engine.share, background: engine.color }} />
                    </div>
                  </div>
                </div>
                {/* Citation note */}
                <div className="p-5 md:col-span-2 flex items-center">
                  <p className="text-gray-500 text-sm leading-relaxed">{engine.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Answer Surface Types ─────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Answer Surfaces" color={AEO_COLOR} />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Six Answer Surfaces We Target
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            AEO & GEO covers every format where AI and search engines surface direct answers to user questions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aeoSnippetTypes.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="group border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${s.color}15` }}>
                      <Icon size={20} style={{ color: s.color }} />
                    </div>
                    <div>
                      <div className="font-bold text-[#0a1628] text-sm mb-2 group-hover:text-cyan-600 transition-colors">{s.type}</div>
                      <div className="text-gray-400 text-xs leading-relaxed">{s.desc}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Citation Triggers (Accordion-style) ──────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="What Gets You Cited" color={GEO_COLOR} />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            The Six Signals That Make AI Cite Your Brand
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            AI models do not randomly cite sources. There are identifiable signals that predict whether a brand gets cited. We engineer all of them.
          </p>
          {/* Trigger selector */}
          <div className="flex flex-wrap gap-2 mb-8">
            {citationTriggers.map((t, i) => (
              <button key={i} onClick={() => setActiveTrigger(i)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${activeTrigger === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                style={activeTrigger === i ? { background: t.color } : {}}>
                {t.trigger}
              </button>
            ))}
          </div>
          {(() => {
            const t = citationTriggers[activeTrigger]
            const Icon = t.icon
            return (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200 rounded-3xl overflow-hidden">
                <div className="lg:col-span-2 p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${t.color}15` }}>
                      <Icon size={22} style={{ color: t.color }} />
                    </div>
                    <div>
                      <div className="font-black text-[#0a1628] text-xl">{t.trigger}</div>
                      <div className="text-xs font-bold px-3 py-1 rounded-full mt-1 inline-block text-white" style={{ background: t.color }}>
                        Impact Weight: {t.weight}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-8">{t.desc}</p>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">How We Implement This</div>
                    <div className="space-y-3">
                      {t.actions.map(action => (
                        <div key={action} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                          <CheckCircle2 size={15} style={{ color: t.color }} className="flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-8 border-t lg:border-t-0 lg:border-l border-gray-100 bg-[#fafafa] flex flex-col gap-6">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Signal Type</div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1.5 rounded-full text-xs font-bold text-white" style={{ background: t.color }}>
                        {t.color === AEO_COLOR ? 'AEO Signal' : 'GEO Signal'}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl p-5 border border-gray-200 bg-white flex flex-col gap-3">
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Timeline to Impact</div>
                    {[
                      { label: 'Technical Schema', weeks: '1–2 weeks' },
                      { label: 'Content Published', weeks: '4–8 weeks' },
                      { label: 'Authority Signals', weeks: '3–6 months' },
                      { label: 'AI Model Training', weeks: '6–12 months' },
                    ].map(item => (
                      <div key={item.label} className="flex justify-between text-xs">
                        <span className="text-gray-500">{item.label}</span>
                        <span className="font-bold text-[#0a1628]">{item.weeks}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })()}
        </section>

        {/* ── Content Framework (Layered) ──────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Our Framework" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            The 5-Layer AEO &amp; GEO Framework
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            AI visibility is built in layers. Skipping a lower layer makes the upper layers less effective. We build all five simultaneously.
          </p>
          <div className="relative">
            {/* Stack visual */}
            <div className="flex flex-col gap-3">
              {contentFramework.map((layer, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-0 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-md transition-all" style={{ paddingLeft: `${i * 12}px` }}>
                  <div className="p-5 flex items-start gap-4" style={{ background: `${layer.color}12`, borderRight: '1px solid #e5e7eb' }}>
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-xs font-black" style={{ background: layer.color === '#1e293b' ? '#334155' : layer.color }}>
                      {5 - i}
                    </div>
                    <div>
                      <div className="font-black text-[#0a1628] text-sm">{layer.layer}</div>
                      <div className="text-gray-400 text-xs mt-0.5">{layer.desc}</div>
                    </div>
                  </div>
                  <div className="md:col-span-3 p-5 flex flex-wrap gap-2 items-center">
                    {layer.items.map(item => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: layer.color === '#1e293b' ? '#94a3b8' : layer.color }} />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Deliverables Timeline ────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="What You Get" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Month-by-Month Deliverables
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            A transparent engagement timeline so you know exactly what happens every month and what results to expect.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliverables.map((block, i) => {
              const Icon = block.icon
              return (
                <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 px-6 py-4" style={{ background: `${block.color}10`, borderBottom: `2px solid ${block.color}` }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${block.color}20` }}>
                      <Icon size={18} style={{ color: block.color }} />
                    </div>
                    <div className="font-black text-[#0a1628] text-base">{block.category}</div>
                  </div>
                  <div className="p-5 space-y-2.5">
                    {block.items.map(item => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 size={14} style={{ color: block.color }} className="flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="relative rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #020b18 0%, #0a1628 100%)' }}>
            <div className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-15 blur-[100px]" style={{ background: AEO_COLOR }} />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-12 blur-[100px]" style={{ background: GEO_COLOR }} />
            <div className="relative px-8 md:px-16 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: AEO_COLOR }} />
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Free AI Visibility Audit</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Is Your Brand Visible<br />
                  <span style={{ color: AEO_COLOR }}>in AI Search?</span>
                </h2>
                <p className="text-white/55 text-base max-w-md">
                  We run your brand through ChatGPT, Perplexity, and Gemini and show you exactly where you appear — and where your competitors are stealing your AI visibility.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
                <button onClick={openModal} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[#020b18] hover:opacity-90 transition-all text-sm whitespace-nowrap" style={{ background: AEO_COLOR }}>
                  Get Free AI Audit <ArrowRight size={16} />
                </button>
                <Link href="/services/content" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/80 border border-white/20 hover:bg-white/10 transition-all text-sm">
                  See Content Strategy <ExternalLink size={14} />
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
            <p className="text-gray-500 text-base mb-10">Everything about AEO, GEO, and AI-era search optimization.</p>
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
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3">Complete Your Digital Marketing Strategy</h2>
          <p className="text-gray-500 text-base mb-10">AEO & GEO works best as part of a full-funnel digital marketing approach.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { slug: 'content', tag: 'Content', title: 'Content Marketing', desc: 'AI-optimised long-form content, topic clusters, and thought leadership that gets cited.', color: '#14b8a6', img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80' },
              { slug: 'social-media', tag: 'Social', title: 'Social Media Marketing', desc: 'Brand authority signals across LinkedIn, X, and Instagram that feed AI model training.', color: '#ec4899', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80' },
              { slug: 'ppc', tag: 'PPC', title: 'PPC Advertising', desc: 'Paid search to capture intent while organic AEO & GEO authority is building.', color: '#ef4444', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
              { slug: 'web-design', tag: 'Web Design', title: 'Website Design & Dev', desc: 'The technical foundation — Core Web Vitals, schema, and site speed — that AEO & GEO is built on.', color: '#f5a623', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80' },
            ].map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
                <div className="h-40 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-3" style={{ background: s.color }}>{s.tag}</span>
                  <h3 className="font-bold text-[#0a1628] group-hover:text-cyan-600 transition-colors mb-1.5 text-sm leading-snug">{s.title}</h3>
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
