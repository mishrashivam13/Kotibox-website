'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, ChevronDown, ChevronUp,
  CheckCircle2, ExternalLink,
  Code2, Cpu, Zap, Shield,
  GitMerge, Layers, Database, Globe,
  TrendingDown, TrendingUp, Clock, Star,
  FileText, MessageSquare, Image, Mic,
  Search, RefreshCw, Settings, Lock,
  Package, Activity, BarChart3, Sparkles,
  Brain, Terminal, Box, ArrowDown,
  Play, Pause, Eye, Users, DollarSign
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const ACCENT = '#7c3aed'
const ACCENT2 = '#6d28d9'
const SOFT = '#ede9fe'
const NAVY = '#0a1628'

// ─── Data ────────────────────────────────────────────────────────────────────

const providers = [
  {
    name: 'GPT-4o',
    company: 'OpenAI',
    color: '#10a37f',
    badge: 'Most Popular',
    contextWindow: '128K tokens',
    costInput: '$2.50 / 1M tokens',
    costOutput: '$10.00 / 1M tokens',
    latency: '~800ms avg',
    strengths: ['Best overall reasoning', 'Image + text + audio input', 'Largest developer ecosystem', 'Function calling & tool use'],
    weaknesses: ['Higher cost at scale', 'US data residency only'],
    bestFor: 'Complex reasoning, multi-modal apps, general-purpose AI features',
    stars: 4.8,
  },
  {
    name: 'Claude 3.5 Sonnet',
    company: 'Anthropic',
    color: '#c85b3a',
    badge: 'Best for Code',
    contextWindow: '200K tokens',
    costInput: '$3.00 / 1M tokens',
    costOutput: '$15.00 / 1M tokens',
    latency: '~700ms avg',
    strengths: ['200K context window', 'Exceptional code generation', 'Long-document analysis', 'Lowest hallucination rate'],
    weaknesses: ['No image generation', 'Slightly fewer integrations'],
    bestFor: 'Code review, long-document processing, technical writing, legal/compliance',
    stars: 4.9,
  },
  {
    name: 'Gemini 1.5 Pro',
    company: 'Google',
    color: '#4285f4',
    badge: 'Best Context',
    contextWindow: '1M tokens',
    costInput: '$1.25 / 1M tokens',
    costOutput: '$5.00 / 1M tokens',
    latency: '~1200ms avg',
    strengths: ['1M token context (largest)', 'Native Google Search grounding', 'Lowest cost at scale', 'Multi-modal video + audio'],
    weaknesses: ['Slower latency', 'Less consistent outputs'],
    bestFor: 'Cost-sensitive apps, massive document processing, Google Workspace integration',
    stars: 4.5,
  },
  {
    name: 'Llama 3.1 (70B)',
    company: 'Meta (Self-hosted)',
    color: '#0668e1',
    badge: 'Private Deployment',
    contextWindow: '128K tokens',
    costInput: 'Your infra cost only',
    costOutput: 'Your infra cost only',
    latency: 'Depends on hardware',
    strengths: ['100% data privacy', 'No API costs at scale', 'Fully customisable', 'Fine-tune on your data'],
    weaknesses: ['Requires GPU infrastructure', 'Model management overhead'],
    bestFor: 'Healthcare / finance / legal apps where data cannot leave your servers',
    stars: 4.3,
  },
]

const integrationPatterns = [
  {
    pattern: 'RAG Pipeline',
    icon: Database,
    color: '#7c3aed',
    complexity: 'Medium',
    useCase: 'Q&A over your documents, knowledge bases, product catalogues',
    howItWorks: 'User query → embed → vector search → retrieve chunks → LLM generates grounded answer',
    daysToIntegrate: '3–7 days',
    techStack: ['Pinecone / pgvector', 'LangChain / LlamaIndex', 'OpenAI Embeddings', 'Any LLM'],
    bestFor: ['Internal knowledge bases', 'Customer support bots', 'Legal document Q&A', 'Product catalogue search'],
  },
  {
    pattern: 'Function Calling / Tool Use',
    icon: Settings,
    color: '#059669',
    complexity: 'Medium',
    useCase: 'AI that takes real actions — books appointments, queries APIs, updates databases',
    howItWorks: 'LLM reads user intent → selects the right function → passes structured args → executes → reports back',
    daysToIntegrate: '4–8 days',
    techStack: ['OpenAI Function Calling', 'Claude Tool Use', 'LangChain Agents', 'Your REST APIs'],
    bestFor: ['Booking & scheduling bots', 'CRM-integrated assistants', 'E-commerce order management', 'Data query agents'],
  },
  {
    pattern: 'Streaming Responses',
    icon: Activity,
    color: '#0ea5e9',
    complexity: 'Low',
    useCase: 'Token-by-token streaming for instant perceived response in chat UIs',
    howItWorks: 'LLM stream → SSE / WebSocket → frontend renders tokens as they arrive → no waiting',
    daysToIntegrate: '1–2 days',
    techStack: ['SSE (Server-Sent Events)', 'WebSockets', 'React hooks', 'Edge runtime'],
    bestFor: ['Chat interfaces', 'Writing assistants', 'Code completion', 'Any UX requiring instant feedback'],
  },
  {
    pattern: 'Fine-tuning (LoRA)',
    icon: Brain,
    color: '#f59e0b',
    complexity: 'High',
    useCase: 'Train the model to match your brand voice, domain vocabulary, or output format exactly',
    howItWorks: 'Curate training pairs → LoRA fine-tune → evaluate → deploy custom model endpoint',
    daysToIntegrate: '10–21 days',
    techStack: ['OpenAI Fine-tuning API', 'LoRA / QLoRA', 'Hugging Face', 'AWS SageMaker'],
    bestFor: ['Brand voice consistency', 'Medical/legal terminology', 'Structured output formats', 'Classification tasks'],
  },
  {
    pattern: 'Semantic Search & Embeddings',
    icon: Search,
    color: '#ec4899',
    complexity: 'Low–Medium',
    useCase: 'Replace keyword search with meaning-based search across your content',
    howItWorks: 'Embed all content → store in vector DB → embed query → cosine similarity search → ranked results',
    daysToIntegrate: '2–5 days',
    techStack: ['text-embedding-3-large', 'Weaviate / Chroma', 'PostgreSQL + pgvector', 'Hybrid search'],
    bestFor: ['E-commerce product search', 'Job board matching', 'Support article search', 'Content recommendation'],
  },
  {
    pattern: 'Multi-modal (Vision + Text)',
    icon: Eye,
    color: '#ef4444',
    complexity: 'Medium',
    useCase: 'Process images, screenshots, documents, or video frames alongside text',
    howItWorks: 'Image → base64 / URL → LLM vision model → structured text output (description, extraction, classification)',
    daysToIntegrate: '3–6 days',
    techStack: ['GPT-4o Vision', 'Gemini Pro Vision', 'Claude 3 Sonnet', 'AWS Textract'],
    bestFor: ['Invoice OCR', 'Product image tagging', 'Screenshot analysis', 'Medical image descriptions'],
  },
]

const featureCards = [
  {
    feature: 'AI Search',
    icon: Search,
    color: '#7c3aed',
    replaces: 'CTRL+F keyword search',
    delivers: 'Semantic understanding — finds results by meaning, not exact words',
    timeToAdd: '3–5 days',
    example: '"Show me contracts with liability clauses" → finds 47 relevant contracts instantly',
  },
  {
    feature: 'AI Writing Assistant',
    icon: FileText,
    color: '#059669',
    replaces: 'Manual copywriting in your product',
    delivers: 'In-app AI that drafts, rewrites, and improves text in your brand voice',
    timeToAdd: '2–4 days',
    example: 'User clicks "Improve with AI" on any text field — instantly gets 3 rewritten options',
  },
  {
    feature: 'AI Summarisation',
    icon: Layers,
    color: '#0ea5e9',
    replaces: 'Users reading entire documents',
    delivers: 'TL;DR + key points + action items extracted from any document in seconds',
    timeToAdd: '2–3 days',
    example: 'Upload a 100-page legal contract → get a 5-bullet summary with risk flags in 8 seconds',
  },
  {
    feature: 'AI Data Extraction',
    icon: Package,
    color: '#f59e0b',
    replaces: 'Manual form filling from documents',
    delivers: 'Structured JSON data pulled from unstructured PDFs, emails, and images',
    timeToAdd: '3–5 days',
    example: 'Invoice image → {vendor, amount, date, line_items} as structured data, 99.2% accuracy',
  },
  {
    feature: 'AI Recommendations',
    icon: Sparkles,
    color: '#ec4899',
    replaces: 'Rule-based "you might also like" widgets',
    delivers: 'Semantic similarity recommendations that understand context and user intent',
    timeToAdd: '5–7 days',
    example: 'User reading "Node.js performance" → recommended "Redis caching strategies" not just "More Node.js articles"',
  },
  {
    feature: 'AI Voice Input',
    icon: Mic,
    color: '#ef4444',
    replaces: 'Typing-only interfaces',
    delivers: 'Voice-to-text with intent understanding — user speaks, app acts',
    timeToAdd: '3–5 days',
    example: 'User says "create a meeting with Rahul tomorrow at 3pm" → calendar event created automatically',
  },
  {
    feature: 'AI Image Generation',
    icon: Image,
    color: '#a855f7',
    replaces: 'Stock photos and manual design requests',
    delivers: 'On-demand AI image generation from user prompts inside your product',
    timeToAdd: '2–4 days',
    example: 'Marketing user types "professional hero banner for SaaS product, dark theme" → 4 options in 12 seconds',
  },
  {
    feature: 'AI Chatbot Widget',
    icon: MessageSquare,
    color: '#14b8a6',
    replaces: 'Static FAQ pages',
    delivers: 'Contextual AI assistant trained on your product docs and knowledge base',
    timeToAdd: '5–7 days',
    example: 'User on pricing page asks "which plan is right for a 50-person team?" → personalised recommendation',
  },
]

const costOptimisation = [
  {
    technique: 'Prompt Caching',
    icon: RefreshCw,
    color: '#7c3aed',
    saving: 'Up to 90% cost reduction',
    howItWorks: 'Cache the system prompt + context so repeated similar queries reuse the cached prefix. Anthropic charges 10% of normal for cached tokens.',
    bestFor: 'Apps where system prompt is long and consistent (RAG pipelines, document Q&A)',
  },
  {
    technique: 'Model Routing',
    icon: GitMerge,
    color: '#059669',
    saving: '50–70% cost reduction',
    howItWorks: 'Route simple queries (keyword lookup, basic classification) to cheap models (GPT-3.5, Haiku) and complex ones to premium models (GPT-4o, Claude Sonnet).',
    bestFor: 'High-volume apps with a mix of simple and complex queries',
  },
  {
    technique: 'Semantic Response Caching',
    icon: Database,
    color: '#0ea5e9',
    saving: '30–50% cost reduction',
    howItWorks: 'Cache responses by semantic similarity — if a new query is 95%+ similar to a cached one, return the cached answer without an API call.',
    bestFor: 'Support bots and Q&A apps where many users ask the same question in different words',
  },
  {
    technique: 'Streaming + Chunking',
    icon: Activity,
    color: '#f59e0b',
    saving: 'Better UX, same cost',
    howItWorks: 'Stream responses token-by-token instead of waiting for the full response. Users perceive 3–4x faster responses even with the same backend latency.',
    bestFor: 'Any chat or writing assistant UI — dramatically improves perceived performance',
  },
]

const packages = [
  {
    name: 'Feature Add-On',
    color: '#6366f1',
    scope: '1–2 AI features',
    ideal: 'Adding a specific AI capability to an existing product',
    timeline: '1–2 weeks',
    includes: [
      '1–2 AI features integrated (see feature list)',
      'Provider selection & prompt engineering',
      'API integration into your codebase',
      'Basic error handling & fallbacks',
      'Cost tracking setup',
      '2-week post-launch support',
    ],
    notIncluded: ['RAG pipeline', 'Fine-tuning', 'Semantic caching', 'Multi-model routing'],
  },
  {
    name: 'AI Product Layer',
    color: ACCENT,
    scope: 'Full AI layer across your product',
    ideal: 'Products that want AI across multiple features with cost optimisation',
    timeline: '3–5 weeks',
    recommended: true,
    includes: [
      '4–6 AI features integrated',
      'RAG pipeline (if knowledge base needed)',
      'Multi-model routing for cost optimisation',
      'Semantic response caching',
      'Streaming UI implementation',
      'Prompt versioning & A/B testing setup',
      'Cost monitoring dashboard',
      'Team training on AI layer management',
      '90-day post-launch support',
    ],
    notIncluded: ['Fine-tuning', 'On-premise deployment'],
  },
  {
    name: 'Enterprise AI Platform',
    color: '#f59e0b',
    scope: 'Full enterprise AI infrastructure',
    ideal: 'Enterprises with compliance, scale, and customisation requirements',
    timeline: '6–10 weeks',
    includes: [
      'Unlimited AI feature integrations',
      'Custom fine-tuned models (LoRA)',
      'Private cloud / on-premise deployment option',
      'Full GDPR / HIPAA compliance layer',
      'Provider failover (GPT-4o → Claude fallback)',
      'Custom model gateway with rate limiting',
      'Real-time cost & quality monitoring',
      'Dedicated AI engineer (part-time)',
      'Model evaluation & monthly retraining',
      '12-month SLA with 99.9% uptime',
    ],
    notIncluded: [],
  },
]

const migrationSteps = [
  { step: '01', title: 'Audit Current Stack', color: ACCENT, desc: 'We review your existing codebase, identify all AI touch-points, assess provider lock-in, and document token usage patterns.', output: 'Dependency map + risk assessment' },
  { step: '02', title: 'Provider Selection', color: '#059669', desc: 'We benchmark GPT-4o, Claude, and Gemini on your actual use case prompts — measuring accuracy, cost, and latency before recommending.', output: 'Benchmark report + recommendation' },
  { step: '03', title: 'Abstraction Layer', color: '#0ea5e9', desc: 'We build a provider-agnostic AI gateway layer so you can swap models without touching application code — future-proofing your integration.', output: 'AI gateway with unified API' },
  { step: '04', title: 'Optimise & Monitor', color: '#f59e0b', desc: 'Implement caching, routing, and streaming. Set up cost dashboards and quality monitoring with automated alerts.', output: 'Cost dashboard + alert system' },
]

const faqs = [
  {
    q: 'Which AI provider should we use — OpenAI, Claude, or Gemini?',
    a: 'There is no universally correct answer — it depends on your use case. GPT-4o is the best general-purpose choice with the largest ecosystem. Claude 3.5 Sonnet leads for code generation, long-document analysis, and compliance-sensitive applications (lowest hallucination rate). Gemini 1.5 Pro is the most cost-effective for high-volume, cost-sensitive applications and has a 1M token context window. For maximum privacy (healthcare, legal, finance), we often recommend self-hosted Llama 3.1. We always benchmark all options on your specific prompts before recommending one.',
  },
  {
    q: 'Will AI responses always be accurate? How do you prevent hallucinations?',
    a: 'Hallucination is a real risk and we engineer specifically to reduce it. Our primary technique is RAG (Retrieval-Augmented Generation) — the model can only answer from retrieved context from your knowledge base, not from its general training. We also set confidence thresholds: if the retrieved context does not clearly answer the question, the system says "I don\'t know" rather than guessing. Additionally, we implement output validation for structured responses (JSON schema enforcement) so the model cannot produce malformed data. Finally, we run monthly quality audits on sampled conversations to catch any drift.',
  },
  {
    q: 'How do we control AI API costs as usage scales?',
    a: 'Cost optimisation is built into every integration we build — not an afterthought. We implement four techniques: prompt caching (saves up to 90% on cached prefixes), semantic response caching (reuses cached answers for similar queries), model routing (sends simple queries to cheap models, complex ones to premium models), and token budget enforcement (truncate context before hitting expensive thresholds). We also set up a real-time cost dashboard so you can see spend per feature and set budget alerts.',
  },
  {
    q: 'Can the AI be deployed privately so our data never goes to OpenAI/Anthropic?',
    a: 'Yes. For applications where data privacy is non-negotiable — healthcare, legal, banking, defence — we deploy open-source models (Llama 3.1 70B/405B, Mixtral, Mistral) on your own cloud infrastructure (AWS, GCP, Azure, or on-premise). Your data never leaves your VPC. For applications that can use public APIs but need data agreements, both OpenAI and Anthropic offer enterprise agreements with zero training data retention and SOC 2 Type II / HIPAA BAAs. We advise the right approach for your compliance requirements.',
  },
  {
    q: 'How long does it take to add an AI feature to our existing product?',
    a: 'It depends on the feature. Simple integrations (AI summarisation, writing assistant, basic Q&A) take 2–4 days with a clean API. A RAG pipeline over a large knowledge base takes 5–10 days. A full fine-tuned model integration takes 2–4 weeks including data preparation and evaluation. The timeline is primarily driven by: API access and credentials availability, quality of your existing codebase documentation, and turnaround on client review during integration. We give precise estimates during the initial technical call.',
  },
  {
    q: 'What if a better AI model comes out after we have integrated? Are we locked in?',
    a: 'This is exactly why we build a provider-agnostic AI gateway layer on every integration. Your application code calls our internal AI gateway which then routes to the selected provider. When GPT-5 or Claude 4 launches, we update the gateway configuration — your product code does not change at all. On Enterprise plans, we also implement automatic A/B routing so you can test new models on 10% of traffic before fully migrating, ensuring quality does not drop.',
  },
  {
    q: 'Do you handle prompt engineering, or do we provide the prompts?',
    a: 'We handle everything. Prompt engineering is one of the highest-leverage parts of AI integration — a well-engineered prompt can improve output quality by 40–60% compared to a naive one. Our process: we study your use case deeply, write 5–10 prompt candidates, evaluate each against a test set of representative inputs, iterate based on failure cases, and document the final prompts with version control. We also set up prompt A/B testing infrastructure so you can continuously improve prompt quality post-launch.',
  },
  {
    q: 'Can you integrate AI into our mobile app (iOS/Android)?',
    a: 'Yes. For mobile apps, we build the AI integration as a backend API layer (Node.js / Python) which the mobile app calls — keeping API keys secure and enabling server-side caching and cost controls. We provide React Native, Flutter, and Swift/Kotlin SDK wrappers for the most common AI features (chat, summarisation, voice input). For on-device AI (completely offline), we can integrate small quantised models (Phi-3, Gemma 2B) using Core ML (iOS) or TensorFlow Lite (Android), though capability is limited compared to API-based models.',
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

function StarRating({ val }: { val: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(s => (
        <div key={s} className="w-2.5 h-2.5 rounded-full" style={{ background: s <= Math.round(val) ? '#f59e0b' : '#e5e7eb' }} />
      ))}
      <span className="text-xs font-bold text-gray-600 ml-1">{val}</span>
    </div>
  )
}

function FaqItem({ faq, index, open, onToggle }: {
  faq: { q: string; a: string }; index: number; open: boolean; onToggle: (i: number) => void
}) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? 'shadow-md' : 'border-gray-200'}`}
      style={open ? { borderColor: `${ACCENT}60` } : {}}>
      <button onClick={() => onToggle(index)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-violet-50/40 transition-colors">
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

export default function AIIntegrationPage() {
  const { openModal } = useModal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeProvider, setActiveProvider] = useState(0)
  const [activePattern, setActivePattern] = useState(0)
  const [activePackage, setActivePackage] = useState(1)

  const provider = providers[activeProvider]
  const pattern = integrationPatterns[activePattern]
  const PatternIcon = pattern.icon

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0a38 0%, #0a1628 55%, #130820 100%)' }}>
        <div className="absolute top-0 right-0 w-[800px] h-[700px] rounded-full opacity-[0.1] blur-[150px]" style={{ background: ACCENT }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[120px]" style={{ background: '#a78bfa' }} />
        <div className="absolute inset-0 opacity-[0.02]" style={{
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
                  <Code2 size={12} /> AI Development
                </span>
                <span className="text-white/40 text-sm">Integration Services</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
                Add AI to Your<br />
                <span style={{ color: '#c4b5fd' }}>Existing Product</span><br />
                in Days, Not Months
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl">
                We integrate GPT-4o, Claude, Gemini, and open-source models into your existing web apps, mobile apps, and workflows — with prompt engineering, RAG pipelines, cost optimisation, and provider-agnostic architecture built in.
              </p>

              {/* Provider logos strip */}
              <div className="flex flex-wrap items-center gap-3 mb-10">
                <span className="text-white/30 text-xs font-semibold">Providers we integrate:</span>
                {[
                  { name: 'OpenAI', color: '#10a37f' },
                  { name: 'Anthropic', color: '#c85b3a' },
                  { name: 'Google', color: '#4285f4' },
                  { name: 'Meta', color: '#0668e1' },
                  { name: 'Mistral', color: '#ff6b35' },
                  { name: 'Cohere', color: '#39594d' },
                ].map(p => (
                  <span key={p.name} className="text-xs font-bold px-3 py-1 rounded-full border border-white/15 text-white/70"
                    style={{ background: `${p.color}18` }}>
                    {p.name}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button onClick={openModal} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all shadow-lg" style={{ background: ACCENT }}>
                  Get a Technical Consultation <ArrowRight size={16} />
                </button>
                <Link href="/live-demo" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white border border-white/20 hover:bg-white/10 transition-all">
                  See AI Products <ExternalLink size={14} />
                </Link>
              </div>
            </div>

            {/* Right — code terminal mockup */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 font-mono text-sm" style={{ background: '#0d0d1a' }}>
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8" style={{ background: '#141420' }}>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-white/30 text-[11px]">ai-integration.ts</span>
                  </div>
                  <Terminal size={12} className="text-white/20" />
                </div>

                {/* Code */}
                <div className="p-5 space-y-0.5 text-[12px] leading-relaxed">
                  <div><span className="text-purple-400">import</span> <span className="text-white/80">{'{ AIGateway }'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@kotibox/ai-sdk'</span></div>
                  <div className="h-2" />
                  <div><span className="text-blue-400">const</span> <span className="text-white/80">ai</span> <span className="text-white/50">=</span> <span className="text-yellow-400">new</span> <span className="text-cyan-400">AIGateway</span><span className="text-white/50">{'({'}</span></div>
                  <div className="pl-4"><span className="text-orange-400">providers</span><span className="text-white/50">:</span> <span className="text-white/50">['</span><span className="text-green-400">gpt-4o</span><span className="text-white/50">',</span> <span className="text-white/50">'</span><span className="text-red-400">claude-3-5-sonnet</span><span className="text-white/50">'],</span></div>
                  <div className="pl-4"><span className="text-orange-400">routing</span><span className="text-white/50">:</span> <span className="text-white/50">'</span><span className="text-green-400">cost-optimised</span><span className="text-white/50">',</span></div>
                  <div className="pl-4"><span className="text-orange-400">cache</span><span className="text-white/50">:</span> <span className="text-blue-400">true</span><span className="text-white/50">,</span></div>
                  <div><span className="text-white/50">{'})'})</span></div>
                  <div className="h-2" />
                  <div><span className="text-blue-400">const</span> <span className="text-white/80">response</span> <span className="text-white/50">=</span> <span className="text-purple-400">await</span> <span className="text-white/80">ai</span><span className="text-white/50">.</span><span className="text-cyan-400">complete</span><span className="text-white/50">({'{'}</span></div>
                  <div className="pl-4"><span className="text-orange-400">prompt</span><span className="text-white/50">:</span> <span className="text-white/80">userMessage</span><span className="text-white/50">,</span></div>
                  <div className="pl-4"><span className="text-orange-400">context</span><span className="text-white/50">:</span> <span className="text-purple-400">await</span> <span className="text-white/80">rag</span><span className="text-white/50">.</span><span className="text-cyan-400">retrieve</span><span className="text-white/50">(</span><span className="text-white/80">userMessage</span><span className="text-white/50">),</span></div>
                  <div className="pl-4"><span className="text-orange-400">stream</span><span className="text-white/50">:</span> <span className="text-blue-400">true</span></div>
                  <div><span className="text-white/50">{'}'}</span><span className="text-white/50">)</span></div>
                  <div className="h-2" />
                  <div className="flex items-center gap-2">
                    <span className="text-white/30">{'// '}</span>
                    <span className="text-white/40 text-[11px]">Provider: claude-3-5-sonnet (cache hit) · 0.3ms · $0.0004</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  </div>
                </div>

                {/* Cost bar */}
                <div className="border-t border-white/8 px-5 py-3 grid grid-cols-3 gap-0 divide-x divide-white/8">
                  {[
                    { label: 'Cache hit rate', val: '73%', color: '#a78bfa' },
                    { label: 'Cost today', val: '$0.84', color: ACCENT },
                    { label: 'vs no-cache', val: '-68%', color: '#34d399' },
                  ].map((s, i) => (
                    <div key={i} className="text-center px-3">
                      <div className="font-black text-sm" style={{ color: s.color }}>{s.val}</div>
                      <div className="text-white/25 text-[9px] mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-5 -right-5 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl z-10" style={{ borderColor: `${ACCENT}40` }}>
                <div className="flex items-center gap-2 mb-0.5">
                  <Zap size={12} style={{ color: ACCENT }} />
                  <span className="text-white text-xs font-bold">Provider-agnostic</span>
                </div>
                <div className="text-white/40 text-[10px]">Swap GPT → Claude in 1 config line</div>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl z-10" style={{ borderColor: `${ACCENT}40` }}>
                <div className="flex items-center gap-2">
                  <TrendingDown size={12} style={{ color: '#34d399' }} />
                  <span className="text-white text-xs font-bold">68% cost reduction</span>
                </div>
                <div className="text-white/40 text-[10px]">Via caching + smart routing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────────────────── */}
      <section style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { icon: Code2, val: '10+', label: 'AI providers integrated', color: ACCENT },
              { icon: TrendingDown, val: '60%', label: 'Avg token cost reduction', color: '#a78bfa' },
              { icon: Clock, val: '2 days', label: 'Fastest feature integration', color: '#34d399' },
              { icon: Shield, val: '0 data', label: 'Leaves your VPC (private deployment)', color: '#c4b5fd' },
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

        {/* ── AI Features You Can Add ───────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="What We Add to Your Product" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            8 AI Features — Ready to Drop Into Your Product
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Each of these is a standalone AI capability we can integrate into your existing web app, mobile app, or internal tool — with a precise timeline.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featureCards.map((fc, i) => {
              const Icon = fc.icon
              return (
                <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all group bg-white">
                  {/* Header */}
                  <div className="px-5 py-4 border-b border-gray-100" style={{ background: `${fc.color}08` }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${fc.color}18` }}>
                        <Icon size={17} style={{ color: fc.color }} />
                      </div>
                      <span className="text-[10px] font-black px-2.5 py-1 rounded-full text-white" style={{ background: fc.color }}>
                        {fc.timeToAdd}
                      </span>
                    </div>
                    <div className="font-bold text-[#0a1628] text-sm">{fc.feature}</div>
                  </div>
                  {/* Body */}
                  <div className="px-5 py-4 space-y-3">
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Replaces</div>
                      <div className="text-gray-500 text-xs">{fc.replaces}</div>
                    </div>
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-widest mb-1" style={{ color: fc.color }}>Delivers</div>
                      <div className="text-gray-700 text-xs font-medium leading-relaxed">{fc.delivers}</div>
                    </div>
                    <div className="px-3 py-2.5 rounded-xl text-[10px] text-gray-500 italic leading-relaxed border border-gray-100 bg-gray-50">
                      {fc.example}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Provider Comparison ──────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Provider Comparison" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            GPT-4o vs Claude vs Gemini vs Llama — We Help You Choose
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            We benchmark every provider on your actual prompts before recommending. Here is an honest breakdown of strengths, costs, and best-fit use cases.
          </p>

          {/* Provider tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {providers.map((p, i) => (
              <button key={i} onClick={() => setActiveProvider(i)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${activeProvider === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                style={activeProvider === i ? { background: p.color } : {}}>
                {p.name}
              </button>
            ))}
          </div>

          {/* Provider detail */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200 rounded-3xl overflow-hidden">

            {/* Left — identity */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200" style={{ background: `${provider.color}06` }}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-black text-[#0a1628] text-2xl">{provider.name}</div>
                  <div className="text-gray-400 text-sm">{provider.company}</div>
                </div>
                <span className="text-[10px] font-black px-3 py-1.5 rounded-full text-white" style={{ background: provider.color }}>
                  {provider.badge}
                </span>
              </div>
              <StarRating val={provider.stars} />
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { label: 'Context Window', val: provider.contextWindow },
                  { label: 'Input Cost', val: provider.costInput },
                  { label: 'Output Cost', val: provider.costOutput },
                  { label: 'Avg Latency', val: provider.latency },
                ].map(m => (
                  <div key={m.label} className="rounded-xl p-3 border border-gray-200 bg-white">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">{m.label}</div>
                    <div className="font-black text-[#0a1628] text-xs">{m.val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle — strengths & weaknesses */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Strengths</div>
                <div className="space-y-2 mb-6">
                  {provider.strengths.map(s => (
                    <div key={s} className="flex items-center gap-2.5">
                      <CheckCircle2 size={13} style={{ color: provider.color }} className="flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{s}</span>
                    </div>
                  ))}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Limitations</div>
                <div className="space-y-2 mb-6">
                  {provider.weaknesses.map(w => (
                    <div key={w} className="flex items-center gap-2.5">
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-gray-300 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{w}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — best for + CTA */}
            <div className="p-8">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Best For</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{provider.bestFor}</p>
              <div className="p-4 rounded-2xl border mb-6" style={{ borderColor: `${provider.color}30`, background: `${provider.color}06` }}>
                <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: provider.color }}>Our Recommendation</div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {provider.name === 'GPT-4o' && 'Start here if you don\'t have a strong reason to use another provider. Best ecosystem, most tutorials, and reliable general capability.'}
                  {provider.name === 'Claude 3.5 Sonnet' && 'Choose Claude if your use case is code-heavy, requires long document analysis, or needs the lowest hallucination rate for compliance.'}
                  {provider.name === 'Gemini 1.5 Pro' && 'Choose Gemini if cost at scale is a primary concern, you need a 1M token context window, or you\'re deeply integrated into Google Workspace.'}
                  {provider.name === 'Llama 3.1 (70B)' && 'Choose self-hosted Llama only when data privacy regulations prohibit using external APIs — healthcare, banking, or classified data.'}
                </p>
              </div>
              <button onClick={openModal} className="w-full py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all" style={{ background: provider.color }}>
                Integrate {provider.name} <ArrowRight size={14} className="inline ml-1" />
              </button>
            </div>
          </div>
        </section>

        {/* ── Integration Patterns ─────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Integration Patterns" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            6 Patterns — Pick the Right Architecture for Your Use Case
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            How you wire AI into your product matters as much as which model you use. Here are the six patterns we implement — each with different trade-offs.
          </p>

          {/* Pattern pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {integrationPatterns.map((p, i) => {
              const Icon = p.icon
              return (
                <button key={i} onClick={() => setActivePattern(i)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all border ${activePattern === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                  style={activePattern === i ? { background: p.color } : {}}>
                  <Icon size={13} />
                  {p.pattern.split(' ')[0]}
                </button>
              )
            })}
          </div>

          {/* Pattern detail */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200 rounded-3xl overflow-hidden">

            {/* Left */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200" style={{ background: `${pattern.color}06` }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${pattern.color}18` }}>
                  <PatternIcon size={22} style={{ color: pattern.color }} />
                </div>
                <div>
                  <div className="font-black text-[#0a1628] text-base leading-tight">{pattern.pattern}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: pattern.color }}>
                      {pattern.complexity} complexity
                    </span>
                    <span className="text-[10px] font-bold text-gray-400">{pattern.daysToIntegrate}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{pattern.useCase}</p>
              <div className="rounded-2xl p-4 border border-gray-200 bg-white">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">How it works</div>
                <p className="text-gray-500 text-xs leading-relaxed font-mono">{pattern.howItWorks}</p>
              </div>
            </div>

            {/* Middle — tech stack */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Tech Stack</div>
              <div className="space-y-2.5 mb-8">
                {pattern.techStack.map(t => (
                  <div key={t} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${pattern.color}15` }}>
                      <Code2 size={10} style={{ color: pattern.color }} />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{t}</span>
                  </div>
                ))}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Best For</div>
              <div className="space-y-2">
                {pattern.bestFor.map(b => (
                  <div key={b} className="flex items-center gap-2">
                    <CheckCircle2 size={13} style={{ color: pattern.color }} className="flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — CTA */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Timeline to Go Live</div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${pattern.color}15` }}>
                    <Clock size={20} style={{ color: pattern.color }} />
                  </div>
                  <div>
                    <div className="font-black text-[#0a1628] text-2xl">{pattern.daysToIntegrate}</div>
                    <div className="text-gray-400 text-xs">from kickoff to production</div>
                  </div>
                </div>
                <div className="p-4 rounded-2xl border" style={{ borderColor: `${pattern.color}30`, background: `${pattern.color}06` }}>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    This pattern is included in our <strong>AI Product Layer</strong> and <strong>Enterprise</strong> packages. Can also be implemented as a standalone Feature Add-On.
                  </p>
                </div>
              </div>
              <button onClick={openModal} className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all w-full justify-center" style={{ background: pattern.color }}>
                Build This Pattern <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </section>

        {/* ── Cost Optimisation ────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">

            <div className="lg:col-span-2">
              <SectionLabel text="Cost Optimisation" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-5 leading-tight">
                Cut AI API Costs by 50–90%
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                Most AI integrations burn money unnecessarily. Every integration we build includes cost optimisation by default — not as an afterthought.
              </p>
              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100" style={{ background: `${ACCENT}08` }}>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Typical client result</div>
                  <div className="font-black text-[#0a1628] text-xl">$1,200/mo → $380/mo</div>
                  <div className="text-gray-400 text-xs mt-0.5">After implementing all 4 techniques</div>
                </div>
                <div className="p-5 space-y-3">
                  {[
                    { technique: 'Prompt caching', saving: '-90%', color: ACCENT },
                    { technique: 'Model routing', saving: '-60%', color: '#059669' },
                    { technique: 'Response caching', saving: '-45%', color: '#0ea5e9' },
                    { technique: 'Streaming', saving: 'UX boost', color: '#f59e0b' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                        <span className="text-gray-600 text-sm">{item.technique}</span>
                      </div>
                      <span className="font-black text-sm" style={{ color: item.color }}>{item.saving}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technique cards */}
            <div className="lg:col-span-3 space-y-4">
              {costOptimisation.map((tech, i) => {
                const Icon = tech.icon
                return (
                  <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all group">
                    <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-100" style={{ background: `${tech.color}06` }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${tech.color}15` }}>
                        <Icon size={18} style={{ color: tech.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-[#0a1628] text-sm">{tech.technique}</div>
                      </div>
                      <div className="font-black text-sm px-3 py-1 rounded-full text-white flex-shrink-0" style={{ background: tech.color }}>
                        {tech.saving}
                      </div>
                    </div>
                    <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">How it works</div>
                        <p className="text-gray-500 text-xs leading-relaxed">{tech.howItWorks}</p>
                      </div>
                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">Best for</div>
                        <p className="text-gray-500 text-xs leading-relaxed">{tech.bestFor}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Provider-Agnostic Architecture ──────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Architecture" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Provider-Agnostic by Design — Swap Models in One Line
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            AI models improve every 6 months. We build an abstraction layer so you can upgrade providers without touching application code — your product evolves as AI evolves.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-gray-200 rounded-3xl overflow-hidden">
            {migrationSteps.map((step, i) => (
              <div key={i} className={`p-6 relative ${i < migrationSteps.length - 1 ? 'border-b md:border-b-0 md:border-r border-gray-200' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 shadow-md" style={{ background: step.color }}>
                    {step.step}
                  </div>
                  <div className="font-black text-[#0a1628] text-sm leading-tight">{step.title}</div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">{step.desc}</p>
                <div className="rounded-xl p-3 border border-gray-100 bg-gray-50">
                  <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">Output</div>
                  <div className="text-xs font-semibold text-gray-600">{step.output}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Packages ─────────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Packages" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            AI Integration Packages
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            From a single AI feature to a full enterprise AI platform — three scopes, one standard of engineering quality.
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
                  <div className="font-black text-[#0a1628] text-xl mb-1">{pkg.scope}</div>
                  <div className="flex items-center gap-1.5 mt-2">
                    <Clock size={11} className="text-gray-400" />
                    <span className="text-gray-400 text-xs">Live in {pkg.timeline}</span>
                  </div>
                </div>

                <div className="px-7 py-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">What's Included</div>
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
          <div className="relative rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0a38 0%, #0a1628 100%)' }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-[100px]" style={{ background: ACCENT }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[80px] opacity-10" style={{ background: '#a78bfa' }} />
            <div className="relative px-8 md:px-16 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Free Technical Consultation</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Tell Us What You're Building.<br />
                  <span style={{ color: '#c4b5fd' }}>We'll Tell You How to Add AI.</span>
                </h2>
                <p className="text-white/55 text-base max-w-md">
                  A free 45-minute technical call where we review your stack, identify the right integration pattern, pick the best provider for your use case, and give you a cost estimate.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <button onClick={openModal} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white hover:opacity-90 transition-all text-sm whitespace-nowrap" style={{ background: ACCENT }}>
                  Book Technical Consultation <ArrowRight size={16} />
                </button>
                <Link href="/services/ai-chatbot" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/80 border border-white/20 hover:bg-white/10 transition-all text-sm">
                  Explore AI Chatbot Dev <ExternalLink size={14} />
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
            <p className="text-gray-500 text-base mb-10">Technical questions about AI integration, providers, cost, and architecture — answered directly.</p>
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
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3">Build a Complete AI Stack</h2>
          <p className="text-gray-500 text-base mb-10">AI integration is the foundation — extend it with these services.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { slug: 'ai-chatbot', tag: 'AI Chatbot', title: 'AI Chatbot Development', desc: 'The most common use of AI integration — a full chatbot built on your RAG pipeline, deployed across Web, WhatsApp, and more.', color: '#6366f1', img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80' },
              { slug: 'ai-automation', tag: 'AI Automation', title: 'AI Workflow Automation', desc: 'Use AI integration as the intelligence layer in multi-step business automations — trigger actions based on AI decisions.', color: '#10b981', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
              { slug: 'web-design', tag: 'Web Design', title: 'Website Design & Dev', desc: 'Need a product built from scratch with AI built in from day one? We design and develop the full application.', color: '#f5a623', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80' },
              { slug: 'aeo-geo', tag: 'AEO & GEO', title: 'AEO & GEO Optimization', desc: 'The same AI models you integrate into your product also power search — get your brand cited in ChatGPT and Gemini.', color: '#06b6d4', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80' },
            ].map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
                <div className="h-40 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-3" style={{ background: s.color }}>{s.tag}</span>
                  <h3 className="font-bold text-[#0a1628] group-hover:text-violet-600 transition-colors mb-1.5 text-sm leading-snug">{s.title}</h3>
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
