'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, ChevronDown, ChevronUp,
  CheckCircle2, ExternalLink,
  Sparkles, FileText, Image, Code2, Mic, Video, BookOpen,
  Shield, AlertTriangle, Eye, Users, RefreshCw,
  TrendingUp, Clock, Zap, Star,
  Brain, Layers, Settings, Lock,
  Play, BarChart3, Target, Globe,
  Pen, Camera, Music, Package,
  CheckCheck, XCircle, AlertCircle, Filter
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const ACCENT = '#f97316'
const ACCENT2 = '#ea580c'
const NAVY = '#0a1628'

// ─── Data ────────────────────────────────────────────────────────────────────

const outputTypes = [
  {
    type: 'Text & Copy',
    icon: FileText,
    color: '#f97316',
    tagline: '10x your written output without adding headcount',
    what: 'Blog articles, product descriptions, email campaigns, social captions, ad copy, legal summaries, technical docs, chatbot dialogue, and more — in your exact brand voice.',
    scaleExample: { manual: '4 articles/week', ai: '40 articles/week', saving: '10× output' },
    realOutputs: [
      { label: 'SEO Blog Article', sample: '"The Ultimate Guide to HIPAA Compliance for SaaS Products in 2025 — covering the 7 technical safeguards, breach notification rules, and a 30-day implementation checklist..."', tokens: '~2,400 words, 12 sec', quality: 'Human-edited, brand voice trained' },
      { label: 'Product Description', sample: '"Lightweight titanium frame meets aerospace-grade carbon fiber in the ProRide X3. At just 8.2kg, it handles mountain descents with precision grip technology that adjusts in real-time to terrain..."', tokens: '~180 words, 2 sec', quality: 'Variant-tested, SEO keywords injected' },
      { label: 'Cold Email Copy', sample: '"Hi Priya — I noticed Meesho recently expanded into Tier-2 cities and your logistics team must be dealing with a 3x spike in return rates. We helped Nykaa cut returns by 34% using predictive..."', tokens: '~95 words, 1.5 sec', quality: 'Personalised from CRM data at scale' },
    ],
    models: ['GPT-4o', 'Claude 3.5 Sonnet', 'Gemini 1.5 Pro', 'Fine-tuned Llama 3.1'],
    useCases: ['E-commerce product descriptions', 'News & editorial content', 'Marketing copy at scale', 'Legal document drafting', 'Technical documentation', 'Localisation & translation'],
  },
  {
    type: 'Images & Visuals',
    icon: Image,
    color: '#8b5cf6',
    tagline: 'On-demand visuals from a one-line prompt',
    what: 'Product images, marketing banners, social media graphics, UI mockups, illustrations, brand assets, and photo-realistic scenes — generated in seconds without a designer for every request.',
    scaleExample: { manual: '5 images/day (designer)', ai: '500 images/day', saving: '100× output' },
    realOutputs: [
      { label: 'Product Hero Image', sample: 'Prompt: "Minimalist white sneaker on a dark gradient background, studio lighting, 8K, professional product photography, shadow at base"', tokens: '4 variants, 8 sec', quality: 'DALL-E 3 / Midjourney V6' },
      { label: 'Social Banner', sample: 'Prompt: "Bold typographic sale banner, 70% OFF, electric blue background, clean sans-serif, white text, confetti particles, 1200×628px"', tokens: '4 variants, 6 sec', quality: 'Optimised for platform specs' },
      { label: 'UI Screenshot Mockup', sample: 'Prompt: "SaaS dashboard on MacBook Pro, dark theme, charts and graphs, modern minimal, blurred background, natural desk environment"', tokens: '4 variants, 10 sec', quality: 'Brand-consistent style lock' },
    ],
    models: ['DALL-E 3', 'Midjourney V6', 'Stable Diffusion XL', 'Ideogram 2'],
    useCases: ['E-commerce product imagery', 'Marketing & social assets', 'UI/UX mockup generation', 'Interior design visualisation', 'Fashion lookbook creation', 'Real estate rendering'],
  },
  {
    type: 'Code Generation',
    icon: Code2,
    color: '#0ea5e9',
    tagline: 'From spec to working code in minutes',
    what: 'Feature implementation, test writing, code review, documentation, refactoring, API client generation, database query optimisation, and bug fixing — AI as a senior developer on your team.',
    scaleExample: { manual: '1 feature/3 days', ai: '1 feature/4 hours', saving: '10× faster' },
    realOutputs: [
      { label: 'API Endpoint (Node.js)', sample: 'Generated: Express route with input validation (Zod), JWT auth middleware, Prisma DB query, error handling, rate limiting, and inline JSDoc — 127 lines in 18 seconds', tokens: '~127 lines, 18 sec', quality: 'Passes ESLint, types strict' },
      { label: 'React Component', sample: 'Generated: Fully accessible data table component with sorting, filtering, pagination, skeleton loading, empty state, and mobile-responsive layout — TypeScript, Tailwind', tokens: '~280 lines, 24 sec', quality: 'WCAG 2.1 AA compliant' },
      { label: 'SQL Query Optimised', sample: 'Input: slow 8-second query. Output: rewritten with proper indexes, CTEs, and execution plan — dropped to 120ms. Explanation of every optimisation included.', tokens: 'Original → optimised, 6 sec', quality: 'Tested against real schema' },
    ],
    models: ['Claude 3.5 Sonnet', 'GPT-4o', 'GitHub Copilot API', 'DeepSeek Coder'],
    useCases: ['Feature development acceleration', 'Automated test generation', 'Legacy code modernisation', 'API client generation', 'Database query optimisation', 'Technical documentation'],
  },
  {
    type: 'Audio & Voice',
    icon: Mic,
    color: '#10b981',
    tagline: 'Text to natural speech in 120+ voices',
    what: 'Text-to-speech for products, podcast scripts narrated automatically, voice cloning for consistent brand voice, multilingual audio from a single text source, and speech-to-text transcription.',
    scaleExample: { manual: '1 audio/2 hrs (studio)', ai: '1 audio/30 sec', saving: '240× faster' },
    realOutputs: [
      { label: 'Product Audio Guide', sample: '"Welcome to the TechPro X7 Setup Guide. Please ensure your device is charged to at least 30% before beginning. Step 1: Remove the protective film from the rear panel by pulling the tab gently upward..."', tokens: '~90 sec audio, 8 sec gen', quality: 'ElevenLabs voice cloning, brand voice' },
      { label: 'Podcast Script Narration', sample: 'Input: 2,500-word episode script → Output: 18-minute narrated audio, two-voice conversation format, natural pacing, emphasis on key phrases, export as MP3 + SRT captions', tokens: '18 min audio, 4 min gen', quality: 'OpenAI TTS HD, 44.1kHz' },
      { label: 'Multilingual IVR Prompts', sample: 'Input: 40 IVR prompt scripts in English → Output: Hindi, Tamil, Kannada, Bengali, and Marathi audio files, all in consistent brand voice, production-ready', tokens: '200 audio files, 15 min', quality: '5 languages, 1 voice identity' },
    ],
    models: ['ElevenLabs', 'OpenAI TTS', 'PlayHT', 'Whisper (STT)'],
    useCases: ['Product onboarding audio', 'Podcast production', 'IVR & voice bot prompts', 'Audiobook creation', 'Multilingual content', 'Accessibility narration'],
  },
  {
    type: 'Documents & Reports',
    icon: BookOpen,
    color: '#ec4899',
    tagline: 'Structured documents generated from your data',
    what: 'Contracts, proposals, reports, presentations, financial summaries, compliance documents, investor updates, and personalised certificates — generated in seconds from structured data inputs.',
    scaleExample: { manual: '1 proposal/3 hrs', ai: '1 proposal/45 sec', saving: '240× faster' },
    realOutputs: [
      { label: 'Sales Proposal (PDF)', sample: 'Input: client name + industry + pain points + product scope → Output: 12-page branded proposal with executive summary, solution architecture, timeline, team bios, and pricing — personalised throughout', tokens: '12 pages, 45 sec', quality: 'DocuSign-ready, brand template' },
      { label: 'Financial Summary Report', sample: 'Input: Q3 raw financial data (CSV) → Output: 8-page executive report with narrative commentary, KPI highlights, charts described in natural language, variance analysis, and forward outlook', tokens: '8 pages, 60 sec', quality: 'Board-presentation quality' },
      { label: 'Compliance Audit Trail', sample: 'Input: system logs + user actions → Output: GDPR Article 30 compliant Records of Processing Activities document, pre-formatted for DPA submission', tokens: '25 pages, 90 sec', quality: 'Legally structured, audit-ready' },
    ],
    models: ['GPT-4o', 'Claude 3.5 Sonnet', 'Gemini 1.5 Pro', 'Custom templates'],
    useCases: ['Sales proposal generation', 'Automated reporting', 'Contract drafting', 'Compliance documentation', 'Investor updates', 'Certificate & credential generation'],
  },
  {
    type: 'Video & Animation',
    icon: Video,
    color: '#f59e0b',
    tagline: 'Text to video — explainers, ads, and product demos',
    what: 'Marketing video scripts auto-narrated and animated, product explainer videos from slides, AI avatar presenters, social short-form video from blog content, and animated infographics.',
    scaleExample: { manual: '1 video/3 days', ai: '1 video/2 hours', saving: '36× faster' },
    realOutputs: [
      { label: 'Product Explainer (60s)', sample: 'Input: product one-pager → Output: 60-second explainer video with AI avatar presenter, branded lower thirds, motion graphics, background music, and captions — exported in 1080p', tokens: '60 sec video, 90 min gen', quality: 'HeyGen / Synthesia quality' },
      { label: 'Social Reel from Blog', sample: 'Input: 1,500-word blog article → Output: 45-second vertical Reel with auto-extracted key points, animated text overlays, royalty-free B-roll, and trending audio sync', tokens: '45 sec reel, 40 min gen', quality: 'Platform-optimised (9:16)' },
      { label: 'Training Module Video', sample: 'Input: 200-slide PowerPoint training deck → Output: 18-minute narrated walkthrough video, chapter markers, quiz overlays, and SCORM-compatible export for LMS upload', tokens: '18 min video, 3 hr gen', quality: 'LMS-ready, accessibility captions' },
    ],
    models: ['Sora', 'RunwayML Gen-3', 'HeyGen', 'Synthesia'],
    useCases: ['Marketing ad creatives', 'Product explainer videos', 'Social media content', 'Employee training modules', 'Investor pitch videos', 'Personalised video outreach'],
  },
]

const approachComparison = [
  {
    approach: 'Prompt Engineering',
    icon: Pen,
    color: '#f97316',
    complexity: 'Low',
    cost: 'Lowest',
    timeToValue: '1–3 days',
    bestWhen: 'Your use case is well-covered by base model knowledge and just needs precise instructions.',
    notWhen: 'You need domain-specific language the model has never seen, or consistent brand voice output.',
    howWeApply: 'We write structured system prompts with role assignment, output format, few-shot examples, chain-of-thought instructions, and explicit constraints — improving output quality by 40–60% vs naive prompts.',
    example: 'Customer support bot that answers queries about software documentation',
    fits: ['General Q&A', 'Summarisation', 'Classification', 'Translation', 'Writing assistance'],
  },
  {
    approach: 'RAG (Retrieval-Augmented)',
    icon: Layers,
    color: '#7c3aed',
    complexity: 'Medium',
    cost: 'Medium',
    timeToValue: '5–10 days',
    bestWhen: 'The model needs to answer questions from your proprietary data — docs, products, policies — that it was not trained on.',
    notWhen: 'Your data changes so frequently that a vector DB would be perpetually stale, or when sub-second latency is critical.',
    howWeApply: 'Ingest your documents into a vector database, embed user queries at runtime, retrieve the top-K relevant chunks, and inject them as context before generation — responses are always grounded in your data.',
    example: 'Legal document Q&A, internal knowledge base, product support bot',
    fits: ['Knowledge base Q&A', 'Document search', 'Policy compliance checker', 'Product catalogue bot'],
  },
  {
    approach: 'Fine-Tuning (LoRA)',
    icon: Brain,
    color: '#0ea5e9',
    complexity: 'High',
    cost: 'Higher upfront',
    timeToValue: '2–4 weeks',
    bestWhen: 'You need the model to produce a very specific output format, adopt a distinct voice, or use domain terminology consistently at scale.',
    notWhen: 'Your training data is sparse (<500 examples), or when RAG would solve the problem at lower cost.',
    howWeApply: 'We curate high-quality input/output training pairs from your existing content, apply LoRA fine-tuning on a base model (GPT-3.5, Llama, Mistral), evaluate on holdout test set, and deploy your custom model endpoint.',
    example: 'Brand voice writer that sounds exactly like your editorial team, medical note formatter',
    fits: ['Brand voice consistency', 'Medical/legal terminology', 'Structured output formats', 'Low-latency edge deployment'],
  },
]

const guardrailLayers = [
  {
    layer: 'Input Filtering',
    icon: Filter,
    color: '#f97316',
    position: '01 — Before the model',
    what: 'Block harmful, off-topic, or policy-violating inputs before they reach the LLM',
    techniques: ['Content moderation API (OpenAI Moderation, Azure AI)', 'Custom keyword & pattern blocklists', 'PII detection & redaction (names, emails, card numbers)', 'Topic classifier (only allow in-scope queries)'],
    stops: ['Prompt injection attacks', 'Jailbreak attempts', 'Sensitive data leakage', 'Off-topic abuse'],
  },
  {
    layer: 'Prompt Guardrails',
    icon: Shield,
    color: '#7c3aed',
    position: '02 — In the system prompt',
    what: 'Constrain model behaviour through constitutional AI principles and explicit rules',
    techniques: ['Role & boundary definition ("You are X, you only discuss Y")', 'Refused topics list (politics, competitor mentions, medical advice)', 'Output format enforcement (respond only in JSON / only in English)', 'Fact-grounding instruction ("Only use information from the provided context")'],
    stops: ['Scope creep', 'Hallucination on sensitive topics', 'Off-brand responses', 'Inconsistent formatting'],
  },
  {
    layer: 'Output Validation',
    icon: CheckCheck,
    color: '#0ea5e9',
    position: '03 — After generation',
    what: 'Validate and sanitise model output before it reaches the user',
    techniques: ['JSON schema enforcement (structured outputs)', 'Secondary LLM judge for factual consistency', 'Regex validation for formats (emails, phone numbers, URLs)', 'Toxicity & bias scoring with threshold alerts'],
    stops: ['Malformed structured output', 'Factually incorrect responses', 'Offensive or biased content', 'Data that fails business rules'],
  },
  {
    layer: 'Human-in-the-Loop',
    icon: Users,
    color: '#10b981',
    position: '04 — For high-stakes outputs',
    what: 'Route uncertain or sensitive AI-generated content to human reviewers before publishing',
    techniques: ['Confidence score thresholding (low confidence → human queue)', 'Category-based routing (legal / medical / financial → mandatory review)', 'A/B review workflow (random 5% sample for quality monitoring)', 'Feedback loop (reviewer edits improve future prompts)'],
    stops: ['Compliance failures in regulated industries', 'Reputational damage from bad outputs', 'Quality drift over time', 'Undetected systematic errors'],
  },
]

const scaleComparisons = [
  {
    task: 'E-commerce Product Descriptions',
    icon: Package,
    color: '#f97316',
    manual: { output: '20 descriptions/day', cost: '₹8,000/day (copywriter)', bottleneck: 'Writer capacity & research time' },
    genAI: { output: '2,000 descriptions/day', cost: '₹400/day (API cost)', bottleneck: 'None — scales on demand' },
    saving: '99× cost reduction',
    timeToScale: 'Immediate',
  },
  {
    task: 'Marketing Blog Articles',
    icon: FileText,
    color: '#8b5cf6',
    manual: { output: '2 articles/week', cost: '₹12,000/article (agency)', bottleneck: 'Research, brief, review cycles' },
    genAI: { output: '20 articles/week', cost: '₹600/article (gen + edit)', bottleneck: 'Human final review' },
    saving: '95% cost reduction',
    timeToScale: '10× output same budget',
  },
  {
    task: 'Customer Support Email Drafts',
    icon: RefreshCw,
    color: '#0ea5e9',
    manual: { output: '50 emails/agent/day', cost: '₹250/email (fully loaded)', bottleneck: 'Agent typing + research time' },
    genAI: { output: '500 emails/agent/day', cost: '₹27/email (draft + approve)', bottleneck: 'Agent approval only' },
    saving: '89% cost reduction',
    timeToScale: '10× agent throughput',
  },
  {
    task: 'Sales Proposal Documents',
    icon: BookOpen,
    color: '#ec4899',
    manual: { output: '2 proposals/week (BD team)', cost: '₹15,000/proposal (hours)', bottleneck: 'Customisation for each prospect' },
    genAI: { output: '20 proposals/week', cost: '₹500/proposal', bottleneck: 'Senior review for large deals' },
    saving: '97% cost reduction',
    timeToScale: 'Reply to every RFP same day',
  },
]

const useCaseGrid = [
  { industry: 'E-commerce', useCase: 'AI product description engine', icon: Package, color: '#f97316', impact: '10,000 SKUs described in 2 hours' },
  { industry: 'Media', useCase: 'AI-assisted newsroom', icon: FileText, color: '#8b5cf6', impact: '3× journalist output on same deadlines' },
  { industry: 'EdTech', useCase: 'Personalised quiz & exercise generation', icon: Brain, color: '#0ea5e9', impact: 'Infinite unique exercises from one curriculum' },
  { industry: 'Legal', useCase: 'Contract first-draft generation', icon: BookOpen, color: '#10b981', impact: 'NDA/MSA drafts in 90 seconds' },
  { industry: 'Healthcare', useCase: 'Clinical note AI scribe', icon: Pen, color: '#ec4899', impact: 'SOAP notes from consultation audio, 30 sec' },
  { industry: 'Finance', useCase: 'Automated investor reporting', icon: BarChart3, color: '#f59e0b', impact: 'Q4 board pack generated from raw data' },
  { industry: 'Real Estate', useCase: 'AI property listing copy', icon: Globe, color: '#06b6d4', impact: '500 listings written from specs, 1 hour' },
  { industry: 'SaaS', useCase: 'In-app writing assistant', icon: Sparkles, color: '#7c3aed', impact: 'Users produce 5× more content in product' },
  { industry: 'HR Tech', useCase: 'Job description & offer letter gen', icon: Users, color: '#ef4444', impact: 'JD → tailored offer in 60 seconds' },
  { industry: 'Gaming', useCase: 'NPC dialogue & quest generation', icon: Play, color: '#14b8a6', impact: 'Infinite procedural storylines from rules' },
  { industry: 'D2C Brands', useCase: 'AI-generated ad creative variants', icon: Camera, color: '#f97316', impact: '200 ad copy variants tested in parallel' },
  { industry: 'Logistics', useCase: 'Exception message generation', icon: AlertCircle, color: '#6366f1', impact: 'Personalised delay comms at 10M/day scale' },
]

const packages = [
  {
    name: 'GenAI Feature',
    color: '#6366f1',
    scope: '1 generative AI feature',
    ideal: 'Adding one specific GenAI capability to your product or workflow',
    timeline: '1–2 weeks',
    includes: [
      '1 GenAI output type (text / image / code / audio)',
      'Provider selection & prompt engineering',
      'Output quality evaluation (50+ test cases)',
      'Basic content moderation guardrail',
      'API integration into your stack',
      '30-day post-launch support',
    ],
    notIncluded: ['Fine-tuning', 'RAG pipeline', 'Human review workflow', 'Multi-modal outputs'],
  },
  {
    name: 'GenAI Product',
    color: ACCENT,
    scope: 'Full generative AI product or module',
    ideal: 'Building a complete AI-powered product or adding GenAI across your platform',
    timeline: '3–6 weeks',
    recommended: true,
    includes: [
      '3–5 GenAI features (any output types)',
      'RAG pipeline (if knowledge base required)',
      'Prompt versioning & A/B testing',
      'Full 4-layer guardrail stack',
      'Human-in-the-loop review workflow',
      'Quality monitoring dashboard',
      'Fine-tuning assessment (included if justified)',
      'Team training on prompt management',
      '90-day post-launch support + monthly quality audit',
    ],
    notIncluded: ['Full fine-tuning training run'],
  },
  {
    name: 'GenAI Platform',
    color: '#f59e0b',
    scope: 'Enterprise-scale generative AI infrastructure',
    ideal: 'Enterprise building GenAI at scale across departments with compliance requirements',
    timeline: '8–14 weeks',
    includes: [
      'Unlimited GenAI features across all output types',
      'Custom fine-tuned model (LoRA — your domain/voice)',
      'Private deployment option (on-prem / VPC)',
      'Enterprise guardrail stack (GDPR / HIPAA ready)',
      'Multi-model routing (cost + quality optimisation)',
      'Real-time output quality monitoring & alerts',
      'Content moderation review pipeline',
      'Dedicated GenAI engineer (part-time)',
      'Monthly model retraining & improvement cycle',
      '12-month SLA with 99.9% uptime',
    ],
    notIncluded: [],
  },
]

const faqs = [
  {
    q: 'How do you ensure AI-generated content doesn\'t get flagged by Google as spam?',
    a: 'Google\'s guidelines focus on content quality and helpfulness — not on whether content was AI-generated. The issue is not that AI wrote it; the issue is when AI-generated content is thin, repetitive, or adds no value. Every piece we generate goes through human editorial review before publishing, is grounded in real research and data, and is enhanced with original perspectives. We also use fine-tuned brand voice models so content reads like your team wrote it. This approach has driven consistent organic traffic growth for our clients without any manual penalties.',
  },
  {
    q: 'Will AI-generated images create copyright issues?',
    a: 'This depends on the image model and use. DALL-E 3 (OpenAI) provides commercial usage rights for all generated images. Midjourney has commercial rights on paid plans. Stable Diffusion (open-source, self-hosted) is generally copyright-clear for outputs. We always use commercially licensed models for client work, document the generation prompt as provenance, and recommend avoiding highly specific recreations of real people or branded assets. For regulated industries, we source only from providers with explicit commercial clearance and provide the paper trail.',
  },
  {
    q: 'What is the difference between GenAI and a regular AI chatbot?',
    a: 'A traditional AI chatbot retrieves and presents existing information — it answers questions from a knowledge base. Generative AI creates net-new content that did not exist before: a new article, a new image, a new piece of code, a new proposal. They can be combined — a chatbot that not only retrieves your policy documents but also generates a personalised email draft based on what it found. In practice, most sophisticated AI products we build combine both: retrieval for accuracy and generation for output quality.',
  },
  {
    q: 'How do you prevent the AI from generating harmful or incorrect content?',
    a: 'We implement a 4-layer guardrail stack on every GenAI deployment: (1) Input filtering — blocks harmful queries before they reach the model; (2) Prompt guardrails — constitutional AI instructions that define what the model can and cannot produce; (3) Output validation — a secondary LLM judges factual consistency and a schema validator enforces format; (4) Human-in-the-loop — for high-stakes outputs (medical, legal, financial), all generated content is reviewed by a human before it reaches the end user. The specific layers depend on your use case\'s risk profile.',
  },
  {
    q: 'Can we train a model on our proprietary content to match our brand voice exactly?',
    a: 'Yes — this is fine-tuning. We curate 500–2,000 high-quality input/output pairs from your existing content, apply LoRA (Low-Rank Adaptation) fine-tuning on a base model, and evaluate the result against a holdout test set. After fine-tuning, the model produces outputs that are measurably closer to your style than any prompt-engineered approach. We have fine-tuned models for editorial brands, legal firms, and SaaS companies. Fine-tuning is included in the GenAI Platform package and can be added to the GenAI Product package for an additional scope.',
  },
  {
    q: 'How much does it cost to run GenAI in production — ongoing API costs?',
    a: 'It depends heavily on volume and output type. For text generation: at GPT-4o rates, generating 1,000 1,500-word articles/month costs approximately $180–$250 in API fees. For image generation (DALL-E 3): 1,000 images/month costs approximately $40. For audio TTS: 1,000 minutes of audio/month costs approximately $15. We implement cost optimisation by default — prompt caching, model routing, and semantic response caching typically reduce API costs by 50–70% vs naive implementations. We provide a cost estimate and a live cost dashboard with every deployment.',
  },
  {
    q: 'Can GenAI work offline or on-device for privacy-sensitive use cases?',
    a: 'Yes, for text and code generation, we can deploy small quantised language models (Llama 3.1 8B, Phi-3 Mini, Gemma 2B) on-device using llama.cpp, Core ML (iOS), or TensorFlow Lite (Android). These run entirely offline — no data leaves the device. Capability is more limited than cloud APIs, but for focused use cases (autocomplete, short-form generation, classification) on-device models are surprisingly capable. For image generation on-device, Stable Diffusion with optimised weights runs on modern iPhones and Android flagships.',
  },
  {
    q: 'How do you measure the quality of GenAI outputs — what metrics do you track?',
    a: 'We use a combination of automated and human evaluation. Automated: ROUGE and BERTScore for text similarity to reference outputs, factual consistency scoring with a secondary LLM judge, format compliance rate (does output match the required JSON schema or structure), and cost-per-output tracking. Human: a sample of 10–20% of outputs reviewed on accuracy, brand voice adherence, and usefulness each week. We set up dashboards showing all these metrics so quality drift is caught within days, not weeks. Prompt A/B testing is also standard — we continuously improve prompts based on quality scores.',
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
      <button onClick={() => onToggle(index)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-orange-50/40 transition-colors">
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

export default function GenerativeAIPage() {
  const { openModal } = useModal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeOutputType, setActiveOutputType] = useState(0)
  const [activeApproach, setActiveApproach] = useState(0)
  const [activePackage, setActivePackage] = useState(1)
  const [activeSample, setActiveSample] = useState(0)

  const output = outputTypes[activeOutputType]
  const approach = approachComparison[activeApproach]
  const OutputIcon = output.icon
  const ApproachIcon = approach.icon

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0800 0%, #0a1628 55%, #1a0500 100%)' }}>
        <div className="absolute top-0 right-0 w-[900px] h-[700px] rounded-full opacity-[0.1] blur-[160px]" style={{ background: ACCENT }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[130px]" style={{ background: '#fdba74' }} />
        <div className="absolute inset-0 opacity-[0.018]" style={{
          backgroundImage: `radial-gradient(circle, ${ACCENT} 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
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
                  <Sparkles size={12} /> AI Development
                </span>
                <span className="text-white/40 text-sm">Generative AI</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
                Generate Text, Images,<br />
                Code, Audio <span style={{ color: '#fed7aa' }}>&</span><br />
                <span style={{ color: '#fed7aa' }}>Video at Scale</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl">
                Custom Generative AI applications that produce real content your business needs — trained on your data, aligned to your brand voice, protected by a 4-layer safety stack.
              </p>

              {/* Output type pills */}
              <div className="flex flex-wrap gap-2 mb-10">
                {outputTypes.map((ot, i) => {
                  const Icon = ot.icon
                  return (
                    <div key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 text-white/60 text-xs font-semibold">
                      <Icon size={11} style={{ color: ot.color }} />
                      {ot.type}
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-wrap gap-4">
                <button onClick={openModal} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all shadow-lg" style={{ background: ACCENT }}>
                  See a Live Demo <ArrowRight size={16} />
                </button>
                <Link href="/live-demo" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white border border-white/20 hover:bg-white/10 transition-all">
                  View AI Products <ExternalLink size={14} />
                </Link>
              </div>
            </div>

            {/* Right — generation studio mockup */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl" style={{ background: '#0d0800' }}>
                {/* Studio header */}
                <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/8" style={{ background: 'rgba(249,115,22,0.08)' }}>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: ACCENT }}>
                    <Sparkles size={14} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-bold text-sm">GenAI Studio</div>
                    <div className="text-white/30 text-[10px]">6 output types · live generation</div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
                    <span className="text-[10px] font-bold" style={{ color: ACCENT }}>Generating</span>
                  </div>
                </div>

                {/* Output panels */}
                <div className="p-4 grid grid-cols-2 gap-3">
                  {/* Text panel */}
                  <div className="col-span-2 rounded-xl p-4 border border-white/8" style={{ background: 'rgba(249,115,22,0.06)' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <FileText size={11} style={{ color: ACCENT }} />
                      <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: ACCENT }}>Text · Blog Intro</span>
                      <div className="ml-auto flex gap-0.5">
                        {[0, 1, 2].map(d => <div key={d} className="w-1 h-1 rounded-full animate-bounce" style={{ background: ACCENT, animationDelay: `${d * 0.15}s` }} />)}
                      </div>
                    </div>
                    <p className="text-white/70 text-[11px] leading-relaxed">
                      "In 2025, the average SaaS company spends 47% of its marketing budget on content — yet only 12% of that content ranks on Page 1. The difference between brands that dominate search and those that don't isn't budget..."
                    </p>
                  </div>

                  {/* Image panel */}
                  <div className="rounded-xl p-3 border border-white/8" style={{ background: 'rgba(139,92,246,0.06)' }}>
                    <div className="flex items-center gap-1.5 mb-2">
                      <Image size={10} style={{ color: '#8b5cf6' }} />
                      <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: '#8b5cf6' }}>Image</span>
                    </div>
                    <div className="rounded-lg h-20 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899, #f97316)' }}>
                      <div className="text-white text-[9px] font-bold text-center opacity-80">Product Hero<br />Generated</div>
                    </div>
                  </div>

                  {/* Code panel */}
                  <div className="rounded-xl p-3 border border-white/8" style={{ background: 'rgba(14,165,233,0.06)' }}>
                    <div className="flex items-center gap-1.5 mb-2">
                      <Code2 size={10} style={{ color: '#0ea5e9' }} />
                      <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: '#0ea5e9' }}>Code</span>
                    </div>
                    <div className="space-y-1 font-mono">
                      <div className="text-[9px]"><span className="text-blue-400">const</span> <span className="text-white/60">handler</span> <span className="text-white/30">= async</span></div>
                      <div className="text-[9px] pl-2"><span className="text-green-400">await</span> <span className="text-white/60">ai.generate</span><span className="text-white/30">(</span></div>
                      <div className="text-[9px] pl-4 text-yellow-400">prompt, context</div>
                      <div className="text-[9px] pl-2 text-white/30">)</div>
                    </div>
                  </div>

                  {/* Audio + stats */}
                  <div className="col-span-2 grid grid-cols-2 gap-3">
                    <div className="rounded-xl p-3 border border-white/8" style={{ background: 'rgba(16,185,129,0.06)' }}>
                      <div className="flex items-center gap-1.5 mb-2">
                        <Mic size={10} style={{ color: '#10b981' }} />
                        <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: '#10b981' }}>Audio · TTS</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[3, 5, 4, 6, 3, 5, 7, 4, 6, 3, 5, 4].map((h, i) => (
                          <div key={i} className="flex-1 rounded-sm animate-pulse" style={{ height: h * 3, background: '#10b981', opacity: 0.6 + (i % 3) * 0.15 }} />
                        ))}
                      </div>
                      <div className="text-white/30 text-[9px] mt-1.5">Narrating — 00:42 / 01:18</div>
                    </div>
                    <div className="rounded-xl p-3 border border-white/8 flex flex-col justify-between" style={{ background: 'rgba(249,115,22,0.06)' }}>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-white/30 mb-2">Session Stats</div>
                      <div className="space-y-1.5">
                        {[{ label: 'Outputs', val: '284' }, { label: 'Cost', val: '$2.14' }, { label: 'Guardrails', val: '3 blocked' }].map(s => (
                          <div key={s.label} className="flex justify-between">
                            <span className="text-white/30 text-[9px]">{s.label}</span>
                            <span className="font-bold text-[9px]" style={{ color: ACCENT }}>{s.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-5 -right-5 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl z-10" style={{ borderColor: `${ACCENT}40` }}>
                <div className="flex items-center gap-2 mb-0.5">
                  <Sparkles size={12} style={{ color: ACCENT }} />
                  <span className="text-white text-xs font-bold">Fine-tuned on your voice</span>
                </div>
                <div className="text-white/40 text-[10px]">Outputs match your brand 95% of the time</div>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl z-10" style={{ borderColor: `${ACCENT}40` }}>
                <div className="flex items-center gap-2">
                  <Shield size={12} style={{ color: '#10b981' }} />
                  <span className="text-white text-xs font-bold">4-layer safety stack</span>
                </div>
                <div className="text-white/40 text-[10px]">Input filter → guardrails → output validation → human review</div>
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
              { icon: Layers, val: '6', label: 'Output types — text, image, code, audio, docs, video', color: ACCENT },
              { icon: TrendingUp, val: '10–100×', label: 'Content output vs manual production', color: '#fdba74' },
              { icon: Shield, val: '4-layer', label: 'Guardrail stack on every deployment', color: '#34d399' },
              { icon: Clock, val: '2 weeks', label: 'Typical time to first live GenAI feature', color: '#c4b5fd' },
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

        {/* ── Output Type Navigator ────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Output Types" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            What Can Generative AI Actually Produce for You?
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Browse by output type to see real examples, scale comparisons, and which AI models we use for each.
          </p>

          {/* Output type tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {outputTypes.map((ot, i) => {
              const Icon = ot.icon
              return (
                <button key={i} onClick={() => { setActiveOutputType(i); setActiveSample(0) }}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all border ${activeOutputType === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                  style={activeOutputType === i ? { background: ot.color } : {}}>
                  <Icon size={14} />
                  {ot.type}
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200 rounded-3xl overflow-hidden">

            {/* Left — overview */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200" style={{ background: `${output.color}06` }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${output.color}18` }}>
                  <OutputIcon size={22} style={{ color: output.color }} />
                </div>
                <div>
                  <div className="font-black text-[#0a1628] text-lg leading-tight">{output.type}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{output.tagline}</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{output.what}</p>

              {/* Scale pill */}
              <div className="rounded-2xl p-4 border border-gray-200 bg-white mb-5">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Scale comparison</div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 text-center p-2.5 rounded-xl bg-red-50">
                    <div className="font-black text-red-600 text-sm">{output.scaleExample.manual}</div>
                    <div className="text-red-400 text-[9px]">manual</div>
                  </div>
                  <ArrowRight size={14} className="text-gray-400 flex-shrink-0" />
                  <div className="flex-1 text-center p-2.5 rounded-xl" style={{ background: `${output.color}12` }}>
                    <div className="font-black text-sm" style={{ color: output.color }}>{output.scaleExample.ai}</div>
                    <div className="text-[9px]" style={{ color: output.color }}>with GenAI</div>
                  </div>
                </div>
                <div className="text-center mt-2 font-black text-sm" style={{ color: output.color }}>{output.scaleExample.saving}</div>
              </div>

              {/* Models */}
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Models we use</div>
                <div className="flex flex-wrap gap-1.5">
                  {output.models.map(m => (
                    <span key={m} className="text-xs font-semibold px-2.5 py-1 rounded-full border border-gray-200 text-gray-600 bg-white">{m}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle — real output examples */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Real Output Examples</div>

              {/* Sample selector */}
              <div className="flex gap-2 mb-4">
                {output.realOutputs.map((_, si) => (
                  <button key={si} onClick={() => setActiveSample(si)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${activeSample === si ? 'text-white border-transparent' : 'text-gray-400 border-gray-200'}`}
                    style={activeSample === si ? { background: output.color } : {}}>
                    {si + 1}. {output.realOutputs[si].label.split(' ')[0]}
                  </button>
                ))}
              </div>

              {output.realOutputs[activeSample] && (
                <div className="space-y-3">
                  <div className="font-bold text-[#0a1628] text-sm">{output.realOutputs[activeSample].label}</div>
                  <div className="rounded-2xl p-4 border border-gray-100 bg-gray-50 text-gray-600 text-xs leading-relaxed italic">
                    {output.realOutputs[activeSample].sample}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl p-2.5 bg-white border border-gray-200">
                      <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Generation time</div>
                      <div className="font-bold text-xs" style={{ color: output.color }}>{output.realOutputs[activeSample].tokens}</div>
                    </div>
                    <div className="rounded-xl p-2.5 bg-white border border-gray-200">
                      <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Quality notes</div>
                      <div className="font-semibold text-gray-600 text-xs">{output.realOutputs[activeSample].quality}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right — use cases + CTA */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Use Cases</div>
                <div className="space-y-2.5 mb-6">
                  {output.useCases.map(uc => (
                    <div key={uc} className="flex items-center gap-2.5">
                      <CheckCircle2 size={13} style={{ color: output.color }} className="flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{uc}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={openModal} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all w-full justify-center" style={{ background: output.color }}>
                Build {output.type} AI Feature <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </section>

        {/* ── Scale at a Glance ────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Scale Math" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            The Economics of Generative AI — Before vs After
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            GenAI's real value is not replacing humans — it's multiplying their output 10–100× at a fraction of the marginal cost.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {scaleComparisons.map((sc, i) => {
              const Icon = sc.icon
              return (
                <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all">
                  {/* Header */}
                  <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between" style={{ background: `${sc.color}06` }}>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${sc.color}18` }}>
                        <Icon size={17} style={{ color: sc.color }} />
                      </div>
                      <span className="font-bold text-[#0a1628] text-sm">{sc.task}</span>
                    </div>
                    <span className="text-xs font-black px-3 py-1 rounded-full text-white flex-shrink-0" style={{ background: sc.color }}>{sc.saving}</span>
                  </div>
                  {/* Comparison rows */}
                  <div className="grid grid-cols-2 divide-x divide-gray-100">
                    <div className="p-5">
                      <div className="flex items-center gap-1.5 mb-3">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Manual</span>
                      </div>
                      <div className="font-black text-[#0a1628] text-base mb-1">{sc.manual.output}</div>
                      <div className="text-gray-500 text-xs mb-2">{sc.manual.cost}</div>
                      <div className="flex items-start gap-1.5">
                        <AlertTriangle size={10} className="text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400 text-[10px]">{sc.manual.bottleneck}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-1.5 mb-3">
                        <div className="w-2 h-2 rounded-full" style={{ background: sc.color }} />
                        <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: sc.color }}>With GenAI</span>
                      </div>
                      <div className="font-black text-base mb-1" style={{ color: sc.color }}>{sc.genAI.output}</div>
                      <div className="text-gray-500 text-xs mb-2">{sc.genAI.cost}</div>
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 size={10} style={{ color: sc.color }} className="flex-shrink-0 mt-0.5" />
                        <span className="text-gray-500 text-[10px]">{sc.genAI.bottleneck}</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-2.5 border-t border-gray-100 flex items-center gap-2" style={{ background: `${sc.color}06` }}>
                    <Zap size={11} style={{ color: sc.color }} />
                    <span className="text-xs font-semibold" style={{ color: sc.color }}>{sc.timeToScale}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Approach: Prompt vs RAG vs Fine-tune ─────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Technical Approach" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Prompt Engineering vs RAG vs Fine-Tuning — How We Choose
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            The right architecture depends on your data, quality requirements, and budget. Here is how we think about it.
          </p>

          {/* Approach tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {approachComparison.map((ap, i) => {
              const Icon = ap.icon
              return (
                <button key={i} onClick={() => setActiveApproach(i)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all border ${activeApproach === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                  style={activeApproach === i ? { background: ap.color } : {}}>
                  <Icon size={13} />
                  {ap.approach.split(' ')[0]}
                </button>
              )
            })}
          </div>

          {/* Approach detail — 4-panel horizontal */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-gray-200 rounded-3xl overflow-hidden">

            {/* Identity */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200" style={{ background: `${approach.color}06` }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: `${approach.color}18` }}>
                  <ApproachIcon size={20} style={{ color: approach.color }} />
                </div>
                <div className="font-black text-[#0a1628] text-base leading-tight">{approach.approach}</div>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Complexity', val: approach.complexity },
                  { label: 'Cost', val: approach.cost },
                  { label: 'Time to value', val: approach.timeToValue },
                ].map(m => (
                  <div key={m.label} className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{m.label}</span>
                    <span className="font-bold text-xs text-[#0a1628]">{m.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* When to use */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={13} style={{ color: approach.color }} />
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: approach.color }}>Use when</span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">{approach.bestWhen}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle size={13} className="text-gray-300" />
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Not when</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">{approach.notWhen}</p>
                </div>
              </div>
            </div>

            {/* How we apply */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">How We Apply It</div>
              <p className="text-gray-600 text-xs leading-relaxed mb-4">{approach.howWeApply}</p>
              <div className="p-3 rounded-xl border border-gray-100 bg-gray-50">
                <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">Example</div>
                <p className="text-gray-600 text-xs italic">{approach.example}</p>
              </div>
            </div>

            {/* Best fits */}
            <div className="p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Fits Best For</div>
              <div className="space-y-2.5 mb-6">
                {approach.fits.map(f => (
                  <div key={f} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: approach.color }} />
                    <span className="text-gray-600 text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <button onClick={openModal} className="w-full py-2.5 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all" style={{ background: approach.color }}>
                Use This Approach <ArrowRight size={13} className="inline ml-1" />
              </button>
            </div>
          </div>
        </section>

        {/* ── Guardrails & Safety ──────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">

            <div className="lg:col-span-2">
              <SectionLabel text="Responsible AI" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-5 leading-tight">
                4-Layer Safety Stack on Every Deployment
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                Generative AI without guardrails is a liability. Every GenAI system we build ships with a layered safety architecture — from input to human oversight.
              </p>
              {/* Visual pipeline */}
              <div className="space-y-2">
                {guardrailLayers.map((gl, i) => {
                  const Icon = gl.icon
                  return (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-white hover:shadow-sm transition-all">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${gl.color}15` }}>
                        <Icon size={14} style={{ color: gl.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-[#0a1628] text-xs">{gl.layer}</div>
                        <div className="text-gray-400 text-[10px]">{gl.position}</div>
                      </div>
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: gl.color }} />
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Guardrail detail cards */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {guardrailLayers.map((gl, i) => {
                const Icon = gl.icon
                return (
                  <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100" style={{ background: `${gl.color}08` }}>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${gl.color}18` }}>
                        <Icon size={16} style={{ color: gl.color }} />
                      </div>
                      <div>
                        <div className="font-black text-[#0a1628] text-sm">{gl.layer}</div>
                        <div className="text-[9px] font-bold uppercase tracking-widest" style={{ color: gl.color }}>{gl.position}</div>
                      </div>
                    </div>
                    <div className="p-5 space-y-3">
                      <p className="text-gray-500 text-xs leading-relaxed">{gl.what}</p>
                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-2">Techniques</div>
                        <div className="space-y-1.5">
                          {gl.techniques.map(t => (
                            <div key={t} className="flex items-start gap-2">
                              <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: gl.color }} />
                              <span className="text-gray-600 text-xs">{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-2">Stops</div>
                        <div className="flex flex-wrap gap-1.5">
                          {gl.stops.map(s => (
                            <span key={s} className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: `${gl.color}12`, color: gl.color }}>{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Use Case Gallery ─────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Use Case Gallery" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            GenAI in Every Industry
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Real Generative AI applications we have built or can build — across 12 industries with measurable outcomes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCaseGrid.map((uc, i) => {
              const Icon = uc.icon
              return (
                <div key={i} className="border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all bg-white group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${uc.color}15` }}>
                      <Icon size={16} style={{ color: uc.color }} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">{uc.industry}</div>
                      <div className="font-bold text-[#0a1628] text-sm leading-tight">{uc.useCase}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: `${uc.color}10` }}>
                    <Zap size={11} style={{ color: uc.color }} />
                    <span className="text-xs font-semibold" style={{ color: uc.color }}>{uc.impact}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Packages ─────────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Packages" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Generative AI Packages
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            From a single AI content feature to a full enterprise generative AI platform with fine-tuning and compliance.
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
                    <div className="mb-4">
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-2">Not included</div>
                      {pkg.notIncluded.map(item => (
                        <div key={item} className="flex items-start gap-2 mb-1.5">
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
          <div className="relative rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0800 0%, #0a1628 100%)' }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-[100px]" style={{ background: ACCENT }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[80px] opacity-10" style={{ background: '#fdba74' }} />
            <div className="relative px-8 md:px-16 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Free GenAI Prototype</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  See Your Use Case<br />
                  <span style={{ color: '#fed7aa' }}>Generated Live in 48 Hours</span>
                </h2>
                <p className="text-white/55 text-base max-w-md">
                  Share your use case — we will build a working GenAI prototype on your actual data in 48 hours so you see exactly what the output looks like before committing to a full build.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <button onClick={openModal} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white hover:opacity-90 transition-all text-sm whitespace-nowrap" style={{ background: ACCENT }}>
                  Request Free Prototype <ArrowRight size={16} />
                </button>
                <Link href="/services/ai-integration" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/80 border border-white/20 hover:bg-white/10 transition-all text-sm">
                  Explore AI Integration <ExternalLink size={14} />
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
            <p className="text-gray-500 text-base mb-10">Quality, copyright, safety, and cost questions answered honestly.</p>
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
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3">Extend Your GenAI Capabilities</h2>
          <p className="text-gray-500 text-base mb-10">Generative AI delivers most value when connected to these services.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { slug: 'ai-integration', tag: 'AI Integration', title: 'AI Integration Services', desc: 'GenAI features need to be integrated into your existing product — we handle the full API layer, routing, and cost optimisation.', color: '#7c3aed', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80' },
              { slug: 'ai-automation', tag: 'AI Automation', title: 'AI Workflow Automation', desc: 'Trigger GenAI generation automatically — publish a blog post at 9am daily, generate 500 product descriptions overnight.', color: '#10b981', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
              { slug: 'content', tag: 'Content', title: 'Content Marketing', desc: 'We pair GenAI with human editorial oversight — AI generates, humans refine — for content that ranks and converts.', color: '#14b8a6', img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80' },
              { slug: 'ai-chatbot', tag: 'AI Chatbot', title: 'AI Chatbot Development', desc: 'The most popular GenAI application — a chatbot that generates personalised responses grounded in your knowledge base.', color: '#6366f1', img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80' },
            ].map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
                <div className="h-40 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-3" style={{ background: s.color }}>{s.tag}</span>
                  <h3 className="font-bold text-[#0a1628] group-hover:text-orange-600 transition-colors mb-1.5 text-sm leading-snug">{s.title}</h3>
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
