'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, ChevronDown, ChevronUp,
  CheckCircle2, Play, ExternalLink, ShoppingCart,
  CreditCard, Package, BarChart3, TrendingUp, Star,
  Users, Shield, Zap, Globe, RefreshCw,
  Search, Bell, Tag, Truck, RotateCcw,
  Layers, Code2, Cloud, Database, Settings,
  DollarSign, Percent, Clock, Target,
  Store, Boxes, HeartHandshake, Smartphone
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const ACCENT = '#22c55e'
const ACCENT_DARK = '#16a34a'
const ACCENT_LIGHT = '#f0fdf4'
const NAVY = '#0a1628'
const NAVY2 = '#1a2f4e'

// --- Data -------------------------------------------------------------------

const impactStats = [
  { value: '40%', label: 'Avg Conversion Rate Increase', icon: TrendingUp, color: '#22c55e' },
  { value: '3x', label: 'Revenue Growth in Year 1', icon: DollarSign, color: '#22c55e' },
  { value: '35%', label: 'Cart Abandonment Reduction', icon: ShoppingCart, color: '#22c55e' },
  { value: '99.9%', label: 'Uptime SLA Guaranteed', icon: Shield, color: '#22c55e' },
]

const storeTypes = [
  {
    type: 'D2C Brand Store',
    icon: Store,
    color: '#22c55e',
    audience: 'Direct to consumer brands',
    desc: 'Own your customer relationship completely. No marketplace fees, full brand control, and direct customer data for personalisation and retention.',
    features: ['Custom brand experience', 'Subscription & membership', 'Loyalty programme', 'Email/SMS marketing', 'Customer portal', 'Product storytelling'],
    platform: 'Next.js Custom Build',
    timeline: '6 – 10 weeks',
  },
  {
    type: 'Multi-Vendor Marketplace',
    icon: Boxes,
    color: '#6366f1',
    audience: 'Marketplace founders',
    desc: 'Connect buyers with multiple sellers. Commission engine, seller dashboards, vendor onboarding, dispute resolution, and payout management built in.',
    features: ['Seller onboarding flow', 'Commission & payout engine', 'Vendor product management', 'Dispute resolution', 'Review & rating system', 'Admin moderation panel'],
    platform: 'Next.js + Node.js Custom',
    timeline: '12 – 20 weeks',
  },
  {
    type: 'B2B Wholesale Store',
    icon: HeartHandshake,
    color: '#0ea5e9',
    audience: 'B2B & wholesale businesses',
    desc: 'Quote requests, MOQ rules, tiered pricing per customer group, bulk order discounts, net payment terms, and invoice-based checkout for business buyers.',
    features: ['Tiered customer pricing', 'MOQ & bulk discounts', 'Quote request flow', 'Net 30/60 payment terms', 'Company account management', 'Sales rep assignment'],
    platform: 'Next.js + ERP Integration',
    timeline: '10 – 16 weeks',
  },
  {
    type: 'Quick Commerce / Delivery',
    icon: Truck,
    color: '#f59e0b',
    audience: 'Grocery & quick delivery',
    desc: 'Slot-based delivery, pincode serviceability, dark store inventory, real-time order tracking map, rider app integration, and sub-30-minute delivery UX.',
    features: ['Delivery slot booking', 'Pincode serviceability', 'Live order tracking', 'Dark store inventory sync', 'Rider app integration', 'Surge pricing engine'],
    platform: 'Next.js + Mobile Apps',
    timeline: '14 – 22 weeks',
  },
  {
    type: 'Subscription Commerce',
    icon: RefreshCw,
    color: '#ec4899',
    audience: 'SaaS & subscription boxes',
    desc: 'Recurring billing, subscription lifecycle management, pause/skip/cancel flows, dunning management, cohort retention analytics, and churn prediction.',
    features: ['Recurring billing (Stripe)', 'Pause, skip, cancel flows', 'Dunning management', 'Box curation interface', 'Cohort & LTV analytics', 'Churn prediction alerts'],
    platform: 'Next.js + Stripe Billing',
    timeline: '8 – 14 weeks',
  },
  {
    type: 'Shopify / Headless',
    icon: ShoppingCart,
    color: '#96bf48',
    audience: 'Fast-launch brands',
    desc: 'Shopify as the commerce engine with a custom Next.js storefront via Storefront API. Best-in-class Shopify ecosystem plus unlimited frontend design freedom.',
    features: ['Shopify Storefront API', 'Custom Next.js frontend', 'Shopify apps compatibility', 'Faster store launch', 'Native Shopify checkout', 'Theme-independent design'],
    platform: 'Shopify Headless + Next.js',
    timeline: '4 – 8 weeks',
  },
]

const customerJourney = [
  {
    stage: 'Discovery',
    icon: Search,
    color: '#6366f1',
    userAction: 'Finds your store via Google, Social, or Ad',
    whatWeBuild: [
      'SEO-optimised category & product pages',
      'Rich snippets (Product schema, ratings)',
      'Open Graph for social sharing',
      'Google Shopping feed integration',
    ],
  },
  {
    stage: 'Browse',
    icon: Tag,
    color: '#f59e0b',
    userAction: 'Explores products, filters, and wishlists',
    whatWeBuild: [
      'AI-powered search (Algolia / Typesense)',
      'Faceted filters (size, colour, price, brand)',
      'Wishlist & save-for-later',
      'Recently viewed & recommendations',
    ],
  },
  {
    stage: 'Product Page',
    icon: Package,
    color: '#22c55e',
    userAction: 'Reads reviews, checks variants, adds to cart',
    whatWeBuild: [
      'Variant selector (size, colour, bundle)',
      'Image gallery with zoom & 360-view',
      'Verified review system with photos',
      'Stock scarcity & urgency signals',
    ],
  },
  {
    stage: 'Cart & Checkout',
    icon: ShoppingCart,
    color: '#ec4899',
    userAction: 'Reviews cart, applies coupon, checks out',
    whatWeBuild: [
      'Persistent cart (logged out & logged in)',
      'Upsell & cross-sell in cart drawer',
      'One-page express checkout',
      'Multiple payment methods + EMI',
    ],
  },
  {
    stage: 'Payment',
    icon: CreditCard,
    color: '#0ea5e9',
    userAction: 'Pays with preferred method securely',
    whatWeBuild: [
      'Razorpay, Stripe, PayPal integration',
      'UPI, Apple Pay, Google Pay',
      'Buy Now Pay Later (Simpl, LazyPay)',
      'PCI-DSS compliant implementation',
    ],
  },
  {
    stage: 'Post-Purchase',
    icon: Bell,
    color: '#f5a623',
    userAction: 'Tracks order, reviews, reorders',
    whatWeBuild: [
      'Order confirmation & tracking emails',
      'WhatsApp order status notifications',
      'Return & exchange portal',
      'Loyalty points & reorder incentives',
    ],
  },
]

const conversionFeatures = [
  {
    category: 'Cart Recovery',
    icon: ShoppingCart,
    color: '#ec4899',
    stat: '35% abandoned carts recovered',
    features: [
      'Abandoned cart email sequences (1hr, 24hr, 72hr)',
      'WhatsApp abandoned cart reminders',
      'Exit-intent popup with discount offer',
      'Browser push notification for cart items',
      'Persistent cart across devices (logged in)',
    ],
  },
  {
    category: 'Average Order Value',
    icon: TrendingUp,
    color: '#22c55e',
    stat: '25% higher AOV with recommendations',
    features: [
      'AI "Frequently Bought Together" bundles',
      'Post-purchase one-click upsell',
      'Cart drawer cross-sell recommendations',
      'Minimum order free shipping threshold',
      'Bundle builder with savings display',
    ],
  },
  {
    category: 'Social Proof',
    icon: Star,
    color: '#f59e0b',
    stat: '270% more conversions with reviews',
    features: [
      'Verified buyer review system',
      'Photo & video review uploads',
      'Review request email automation',
      'Q&A section on product pages',
      'Trust badges & certification display',
    ],
  },
  {
    category: 'Search & Discovery',
    icon: Search,
    color: '#6366f1',
    stat: '43% of revenue from search',
    features: [
      'AI-powered search with typo tolerance (Algolia)',
      'Predictive search with product previews',
      'Personalised recommendations per user',
      'Recently viewed product carousel',
      'Zero-result page recovery suggestions',
    ],
  },
]

const paymentGateways = [
  { name: 'Razorpay', region: 'India', methods: 'UPI, Cards, Net Banking, EMI, Wallets' },
  { name: 'Stripe', region: 'Global', methods: 'Cards, Apple Pay, Google Pay, BNPL' },
  { name: 'PayPal', region: 'Global', methods: 'PayPal, Cards, Pay Later' },
  { name: 'PayU', region: 'India & SEA', methods: 'UPI, Cards, Net Banking' },
  { name: 'Cashfree', region: 'India', methods: 'UPI, Cards, QR, Payout' },
  { name: 'Apple Pay', region: 'iOS/macOS', methods: 'Face ID / Touch ID payment' },
  { name: 'Google Pay', region: 'Android', methods: 'UPI & Card via GPay' },
  { name: 'Simpl / LazyPay', region: 'India', methods: 'Buy Now Pay Later (BNPL)' },
]

const techStack = [
  { layer: 'Storefront', color: '#22c55e', icon: Globe, techs: ['Next.js 15 (App Router)', 'React 19 + TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel Edge CDN'] },
  { layer: 'Commerce Engine', color: '#6366f1', icon: ShoppingCart, techs: ['Custom Cart & Checkout', 'Shopify Storefront API (optional)', 'WooCommerce REST API', 'Product variant engine', 'Inventory sync service'] },
  { layer: 'Search & Discovery', color: '#f59e0b', icon: Search, techs: ['Algolia / Typesense', 'AI recommendation engine', 'Personalisation layer', 'Faceted filter engine', 'Google Shopping feed'] },
  { layer: 'Payments & Finance', color: '#ec4899', icon: CreditCard, techs: ['Razorpay / Stripe SDK', 'Webhook event handlers', 'Refund & dispute management', 'GST invoice generation', 'Revenue reconciliation'] },
  { layer: 'Backend & Database', color: '#0ea5e9', icon: Database, techs: ['Node.js / Next.js API Routes', 'PostgreSQL (products, orders)', 'Redis (cart, sessions, cache)', 'Prisma ORM', 'S3 / Cloudinary (images)'] },
  { layer: 'Marketing & Analytics', color: '#f5a623', icon: BarChart3, techs: ['Google Analytics 4 + eCommerce', 'Meta Pixel + CAPI', 'Klaviyo / Mailchimp', 'Google Tag Manager', 'Hotjar / Microsoft Clarity'] },
]

const faqs = [
  {
    question: 'Should we build a custom store or use Shopify?',
    answer: "It depends on your requirements and growth plans. Shopify is excellent for faster launch (4 to 8 weeks), brands that don't need heavy customisation, and teams who want to use Shopify's app ecosystem. Custom Next.js is better when you need unique UX (multi-vendor, B2B pricing, complex bundles), want full code ownership with no monthly platform fees, need deep ERP/WMS integrations, or are building a marketplace. We offer both -- and a headless Shopify option that combines Shopify's checkout reliability with a fully custom Next.js storefront.",
  },
  {
    question: 'Which payment gateways do you integrate?',
    answer: "We integrate Razorpay (UPI, cards, net banking, EMI, wallets -- best for India), Stripe (global cards, Apple Pay, Google Pay), PayPal, PayU, Cashfree, and Buy Now Pay Later providers like Simpl and LazyPay. For international stores, we support multi-currency with automatic exchange rates. All integrations are PCI-DSS compliant -- card data never touches your servers.",
  },
  {
    question: 'How do you reduce cart abandonment?',
    answer: "We implement a layered abandoned cart recovery system: triggered email sequences at 1hr, 24hr, and 72hr after abandonment; WhatsApp cart reminders (open rate 85%+); exit-intent popups with a timed discount offer; persistent cart across devices for logged-in users; and browser push notifications for abandoned carts. Our implementations typically recover 30 to 40% of abandoned carts.",
  },
  {
    question: 'Can the store handle high traffic during sales events?',
    answer: "Yes. We architect for traffic spikes from day one: Redis caching for product pages, Vercel Edge CDN with global distribution, database connection pooling, inventory reservation locks to prevent overselling, and queue-based order processing. For flash sales, we implement a virtual queue system that protects your database from concurrent write storms. We load test every store before launch.",
  },
  {
    question: 'How do you handle inventory management?',
    answer: "We build real-time inventory tracking with low-stock alerts, out-of-stock handling (back-in-stock notifications), and multi-warehouse/location support. For enterprise clients, we integrate with existing ERP systems (SAP, Oracle, Tally) or WMS platforms via API. For smaller stores, we include a built-in inventory management dashboard with CSV import/export and variant-level stock tracking.",
  },
  {
    question: 'Do you build the admin panel for managing products and orders?',
    answer: "Yes. Every store includes a fully custom admin panel with: product management (variants, images, SEO fields, bundles), order management (status, fulfilment, partial refunds), customer management (order history, notes, segments), discount and coupon management, and a reporting dashboard with revenue, conversion, and AOV metrics. If you prefer, we can also integrate with existing tools like Notion, Airtable, or a headless CMS for product content.",
  },
  {
    question: 'How long does it take to build an e-commerce store?',
    answer: "A Shopify headless storefront with custom design takes 4 to 8 weeks. A custom-built D2C store with standard features (product catalogue, cart, checkout, payments, basic admin) takes 6 to 10 weeks. A multi-vendor marketplace or B2B wholesale store with custom pricing logic takes 12 to 20 weeks. Complex platforms with mobile apps, ERP integration, and marketplace features take 16 to 24+ weeks. We share a detailed milestone plan in week one.",
  },
  {
    question: 'What happens after the store is launched?',
    answer: "Every project includes 30 days of post-launch bug fixing. After that, we offer monthly growth retainers covering: A/B testing new features, conversion rate optimisation (CRO), performance monitoring, plugin/dependency updates, new feature development, and analytics reporting. We also offer a 12-month post-launch CRO programme where we systematically test and improve your checkout funnel, product pages, and email sequences.",
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
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? 'shadow-md' : 'border-gray-200'}`}
      style={open ? { borderColor: `${ACCENT}60` } : {}}>
      <button onClick={() => onToggle(index)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-green-50/50 transition-colors">
        <span className="text-[#0a1628] font-semibold text-sm md:text-base pr-4">{faq.question}</span>
        {open ? <ChevronUp size={18} style={{ color: ACCENT }} className="flex-shrink-0" /> : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />}
      </button>
      {open && <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.answer}</div>}
    </div>
  )
}

// --- Page -------------------------------------------------------------------

export default function EcommercePage() {
  const { openModal } = useModal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeStore, setActiveStore] = useState(0)

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #052e16 0%, #0a1628 50%, #052e16 100%)' }}>
        <div className="absolute top-0 right-0 w-[700px] h-[600px] rounded-full opacity-[0.12] blur-[130px]" style={{ background: ACCENT }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[100px]" style={{ background: '#86efac' }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: `radial-gradient(${ACCENT} 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-32 pb-20">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium bg-white/8 border border-white/15 px-4 py-2 rounded-full transition-colors mb-10">
            <ArrowLeft size={15} /> Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[#052e16] text-xs font-extrabold tracking-wider uppercase" style={{ background: ACCENT }}>
                  <ShoppingCart size={12} /> E-Commerce
                </span>
                <span className="text-white/40 text-sm">Web Development</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.06] mb-6">
                E-Commerce<br />
                <span style={{ color: ACCENT }}>Website</span><br />
                Development
              </h1>
              <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
                High-converting online stores that turn browsers into buyers. Custom-built with AI recommendations, abandoned cart recovery, and payment gateways that drive measurable revenue growth.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Razorpay / Stripe', 'AI Recommendations', 'Cart Recovery', 'Multi-vendor', 'Inventory Mgmt', 'Admin Dashboard'].map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 text-white/70 bg-white/8">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <button onClick={openModal} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-[#052e16] hover:opacity-90 transition-all shadow-lg" style={{ background: ACCENT }}>
                  Start Your Store <ArrowRight size={16} />
                </button>
                <Link href="/live-demo" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white border border-white/20 hover:bg-white/10 transition-all">
                  See Live Stores <ExternalLink size={14} />
                </Link>
              </div>
            </div>

            {/* Right -- store revenue card */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10" style={{ background: '#0d2010' }}>
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: ACCENT }} />
                    <span className="text-white/60 text-xs font-mono">store-analytics.dashboard</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: ACCENT, opacity: 0.7 }} />
                  </div>
                </div>
                {/* Revenue chart area */}
                <div className="px-5 pt-5 pb-3">
                  <div className="flex items-end justify-between mb-1">
                    <div>
                      <div className="text-white/50 text-xs mb-1">Today&apos;s Revenue</div>
                      <div className="text-3xl font-black text-white">₹2,84,920</div>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold" style={{ background: `${ACCENT}25`, color: ACCENT }}>
                      <TrendingUp size={12} /> +38% vs last week
                    </div>
                  </div>
                  {/* Bar chart */}
                  <div className="flex items-end gap-1.5 h-20 mt-4 mb-2">
                    {[35, 55, 40, 70, 45, 80, 95, 60, 85, 75, 90, 100, 72, 88].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm" style={{
                        height: `${h}%`,
                        background: i === 13 ? ACCENT : `${ACCENT}40`,
                      }} />
                    ))}
                  </div>
                  <div className="text-white/30 text-[10px] text-right">Last 14 days</div>
                </div>
                {/* Mini KPIs */}
                <div className="grid grid-cols-3 gap-0 border-t border-white/10">
                  {[
                    { label: 'Orders', value: '847', delta: '+12%' },
                    { label: 'Conv. Rate', value: '4.2%', delta: '+0.8%' },
                    { label: 'Avg Order', value: '₹3,366', delta: '+24%' },
                  ].map((kpi, i) => (
                    <div key={i} className={`px-4 py-3 text-center ${i < 2 ? 'border-r border-white/10' : ''}`}>
                      <div className="text-white/40 text-[10px] mb-1">{kpi.label}</div>
                      <div className="text-white font-black text-sm">{kpi.value}</div>
                      <div className="text-[10px] font-bold mt-0.5" style={{ color: ACCENT }}>{kpi.delta}</div>
                    </div>
                  ))}
                </div>
                {/* Recent orders */}
                <div className="px-5 py-4 border-t border-white/10">
                  <div className="text-white/40 text-[10px] uppercase tracking-widest mb-3">Recent Orders</div>
                  <div className="space-y-2">
                    {[
                      { id: '#8821', item: 'Premium Sneakers — Black/42', status: 'Paid', amt: '₹4,299' },
                      { id: '#8820', item: 'Cotton T-Shirt × 3', status: 'Processing', amt: '₹1,797' },
                      { id: '#8819', item: 'Leather Wallet — Brown', status: 'Shipped', amt: '₹2,499' },
                    ].map(order => (
                      <div key={order.id} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-white/40 font-mono">{order.id}</span>
                          <span className="text-white/70 truncate max-w-[140px]">{order.item}</span>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold" style={{
                            background: order.status === 'Paid' ? `${ACCENT}25` : order.status === 'Shipped' ? '#0ea5e925' : '#f5a62325',
                            color: order.status === 'Paid' ? ACCENT : order.status === 'Shipped' ? '#0ea5e9' : '#f5a623',
                          }}>{order.status}</span>
                          <span className="text-white font-bold">{order.amt}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Float badge */}
              <div className="absolute -top-4 -right-4 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl z-10" style={{ borderColor: `${ACCENT}40` }}>
                <div className="text-white/50 text-[10px] mb-0.5">Conversion Rate</div>
                <div className="text-2xl font-black" style={{ color: ACCENT }}>4.2%</div>
                <div className="text-white/40 text-[10px]">Industry avg: 1.8%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact Numbers ───────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {impactStats.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="flex flex-col items-center text-center py-8 px-4 hover:bg-green-50/50 transition-colors">
                  <Icon size={20} className="mb-2" style={{ color: ACCENT }} />
                  <div className="text-2xl md:text-3xl font-black" style={{ color: NAVY }}>{s.value}</div>
                  <div className="text-gray-400 text-xs mt-1 leading-snug">{s.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

        {/* ── Store Types (Tab + Detail) ────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Store Types" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Six E-Commerce Models We Build
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Every e-commerce business model has different technical requirements. We build the right architecture for your specific model.
          </p>
          {/* Tab row */}
          <div className="flex flex-wrap gap-2 mb-8">
            {storeTypes.map((t, i) => {
              const Icon = t.icon
              return (
                <button key={i} onClick={() => setActiveStore(i)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border ${activeStore === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                  style={activeStore === i ? { background: t.color } : {}}>
                  <Icon size={13} /> {t.type}
                </button>
              )
            })}
          </div>
          {/* Detail panel */}
          {(() => {
            const t = storeTypes[activeStore]
            const Icon = t.icon
            return (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200 rounded-3xl overflow-hidden">
                <div className="lg:col-span-2 p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${t.color}15` }}>
                      <Icon size={22} style={{ color: t.color }} />
                    </div>
                    <div>
                      <div className="font-black text-[#0a1628] text-xl">{t.type}</div>
                      <div className="text-gray-400 text-sm">{t.audience}</div>
                    </div>
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-6">{t.desc}</p>
                  <div className="flex items-center gap-6 mb-8 flex-wrap">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Platform</div>
                      <div className="font-bold text-[#0a1628] text-sm">{t.platform}</div>
                    </div>
                    <div className="w-px h-8 bg-gray-200 hidden sm:block" />
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Timeline</div>
                      <div className="font-bold text-[#0a1628] text-sm">{t.timeline}</div>
                    </div>
                  </div>
                  <button onClick={openModal} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all" style={{ background: t.color }}>
                    Discuss This Store Type <ArrowRight size={15} />
                  </button>
                </div>
                <div className="p-8 border-t lg:border-t-0 lg:border-l border-gray-100" style={{ background: '#fafafa' }}>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Key Features</div>
                  <div className="space-y-3">
                    {t.features.map(f => (
                      <div key={f} className="flex items-center gap-3">
                        <CheckCircle2 size={15} style={{ color: t.color }} className="flex-shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })()}
        </section>

        {/* ── Customer Journey ─────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Customer Journey" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            We Optimise Every Step of the Buying Journey
          </h2>
          <p className="text-gray-500 text-base mb-14 max-w-2xl">
            Most stores lose customers between Discovery and Payment. We engineer each stage to minimise drop-off and maximise revenue.
          </p>
          <div className="relative">
            {/* Vertical connector */}
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
            <div className="grid grid-cols-1 gap-6">
              {customerJourney.map((stage, i) => {
                const Icon = stage.icon
                return (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all">
                    {/* Stage label */}
                    <div className="p-6 flex gap-5 items-start" style={{ background: `${stage.color}08` }}>
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: stage.color }}>
                          <Icon size={22} className="text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: stage.color }}>Stage {i + 1}</div>
                        <div className="text-[#0a1628] font-black text-lg mb-2">{stage.stage}</div>
                        <div className="text-gray-500 text-sm italic">&ldquo;{stage.userAction}&rdquo;</div>
                      </div>
                    </div>
                    {/* What we build */}
                    <div className="p-6 border-t md:border-t-0 md:border-l border-gray-100">
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">What we build for this stage</div>
                      <div className="space-y-2">
                        {stage.whatWeBuild.map(item => (
                          <div key={item} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: stage.color }} />
                            <span className="text-gray-600 text-sm">{item}</span>
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

        {/* ── Conversion Features ───────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Conversion Engineering" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Built-In Features That Grow Your Revenue
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            These are not add-ons. Every Kotibox e-commerce store ships with conversion engineering built into the product from day one.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conversionFeatures.map((section, i) => {
              const Icon = section.icon
              return (
                <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                  <div className="px-6 py-5 flex items-center gap-4" style={{ background: `${section.color}10`, borderBottom: `2px solid ${section.color}` }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${section.color}20` }}>
                      <Icon size={20} style={{ color: section.color }} />
                    </div>
                    <div>
                      <div className="font-black text-[#0a1628] text-base">{section.category}</div>
                      <div className="text-sm font-semibold mt-0.5" style={{ color: section.color }}>{section.stat}</div>
                    </div>
                  </div>
                  <div className="p-5 space-y-2.5">
                    {section.features.map(f => (
                      <div key={f} className="flex items-start gap-3">
                        <CheckCircle2 size={14} style={{ color: section.color }} className="flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Payment Gateways ──────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel text="Payments" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                Every Payment Method Your Customers Prefer
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Cart abandonment spikes 50% when a customer&apos;s preferred payment method is missing. We integrate every gateway your target market uses &mdash; UPI, cards, wallets, BNPL, and international options &mdash; all PCI-DSS compliant.
              </p>
              <div className="space-y-3">
                {paymentGateways.map((gw, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-green-200 hover:shadow-sm transition-all bg-white">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: ACCENT_LIGHT }}>
                        <CreditCard size={14} style={{ color: ACCENT_DARK }} />
                      </div>
                      <div>
                        <div className="font-bold text-[#0a1628] text-sm">{gw.name}</div>
                        <div className="text-gray-400 text-xs">{gw.methods}</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: ACCENT_LIGHT, color: ACCENT_DARK }}>{gw.region}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div>
              <SectionLabel text="Technology" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                Scalable Architecture Built for Growth
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                From 100 orders/month to 100,000 orders/month &mdash; our stack scales with you. Redis caching, CDN-delivered assets, and queue-based order processing ensure you never miss a sale.
              </p>
              <div className="space-y-3">
                {techStack.map((layer, i) => {
                  const Icon = layer.icon
                  return (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <div className="flex items-center gap-3 px-4 py-3" style={{ background: `${layer.color}10`, borderBottom: `1px solid ${layer.color}20` }}>
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${layer.color}20` }}>
                          <Icon size={14} style={{ color: layer.color }} />
                        </div>
                        <span className="font-bold text-[#0a1628] text-sm">{layer.layer}</span>
                      </div>
                      <div className="px-4 py-3 flex flex-wrap gap-1.5">
                        {layer.techs.map(tech => (
                          <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Platform comparison ──────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Platform Options" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Custom Build, Shopify, or Headless? We Help You Decide.
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            The right platform depends on your budget, timeline, and growth plans. We are platform-agnostic and recommend based on your needs only.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr style={{ background: NAVY }}>
                  <th className="text-left text-white font-bold text-sm px-6 py-4">Factor</th>
                  <th className="text-center text-sm px-5 py-4 font-bold" style={{ color: ACCENT }}>Custom Next.js</th>
                  <th className="text-center text-white/80 text-sm px-5 py-4 font-semibold">Shopify Headless</th>
                  <th className="text-center text-white/80 text-sm px-5 py-4 font-semibold">Shopify Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { factor: 'Design Freedom', custom: '100% custom', headless: 'Full custom frontend', standard: 'Theme-limited' },
                  { factor: 'Timeline', custom: '6–20 weeks', headless: '4–8 weeks', standard: '2–4 weeks' },
                  { factor: 'Monthly Platform Fees', custom: 'None (hosting only)', headless: '$79–$299/mo + hosting', standard: '$29–$299/mo' },
                  { factor: 'Code Ownership', custom: 'Full ownership', headless: 'Frontend owned', standard: 'No code ownership' },
                  { factor: 'Scalability', custom: 'Unlimited', headless: 'Shopify limits apply', standard: 'Shopify limits apply' },
                  { factor: 'Custom Business Logic', custom: 'Anything possible', headless: 'Frontend flexible', standard: 'App ecosystem only' },
                  { factor: 'Best For', custom: 'Marketplace / B2B / Complex', headless: 'Brand stores needing speed', standard: 'Simple product stores' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="text-[#0a1628] font-semibold text-sm px-6 py-3.5">{row.factor}</td>
                    <td className="text-center text-sm px-5 py-3.5 font-bold" style={{ color: ACCENT_DARK }}>{row.custom}</td>
                    <td className="text-center text-gray-500 text-sm px-5 py-3.5">{row.headless}</td>
                    <td className="text-center text-gray-400 text-sm px-5 py-3.5">{row.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Post-Launch Growth ───────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel text="Analytics & Growth" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                Data-Driven Growth After Launch
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Launching the store is the beginning. Every Kotibox store ships with a full analytics stack so you can measure, iterate, and grow from week one.
              </p>
              <div className="space-y-4">
                {[
                  { icon: BarChart3, title: 'GA4 Enhanced E-Commerce', desc: 'Product impressions, add-to-cart, checkout funnel, and purchase events tracked via GTM. Full revenue attribution by source, campaign, and product.' },
                  { icon: Percent, title: 'Conversion Rate Optimisation', desc: 'Monthly CRO programme: heatmaps (Hotjar), session recordings, A/B testing of product pages and checkout, and data-driven UX improvements.' },
                  { icon: Target, title: 'Meta Pixel + CAPI', desc: 'Accurate ad attribution even with ad blockers via Conversions API (CAPI) server-side events. Feeds accurate data back to Meta for better ROAS.' },
                  { icon: Bell, title: 'Retention Marketing Stack', desc: 'Klaviyo / Mailchimp email flows: welcome series, post-purchase review request, win-back sequence, and VIP customer segments.' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:border-green-200 hover:shadow-sm transition-all bg-white">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: ACCENT_LIGHT }}>
                        <Icon size={18} style={{ color: ACCENT_DARK }} />
                      </div>
                      <div>
                        <div className="text-[#0a1628] font-bold text-sm mb-1">{item.title}</div>
                        <div className="text-gray-400 text-xs leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* What sets us apart */}
            <div>
              <SectionLabel text="Why Kotibox" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                What Every Kotibox Store Includes
              </h2>
              <div className="space-y-3">
                {[
                  { title: 'Revenue-First Design', desc: 'Every design decision is tested against conversion data. We design CTAs, product pages, and checkout flows to maximise the percentage of visitors who buy.' },
                  { title: 'Admin Panel Included', desc: 'Custom admin dashboard for products, orders, customers, discounts, and reports. Your team manages the store independently from day one.' },
                  { title: 'Mobile-Commerce Ready', desc: 'Over 70% of e-commerce traffic is mobile. Every store is mobile-first with touch-optimised product cards, swipe-able image galleries, and one-tap checkout.' },
                  { title: 'SEO for Product Pages', desc: 'Product schema (JSON-LD), auto-generated meta titles, breadcrumbs, canonical tags, and image alt text so every product page can rank on Google.' },
                  { title: 'Inventory Oversell Protection', desc: 'Redis-based inventory reservation locks prevent two customers from buying the same last item simultaneously during flash sales.' },
                  { title: 'PCI-DSS Compliant', desc: 'Card data never touches our servers. All payment processing goes through tokenised gateway SDKs ensuring PCI-DSS compliance out of the box.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 border border-gray-100 rounded-xl hover:border-green-200 hover:shadow-sm transition-all">
                    <CheckCircle2 size={18} style={{ color: ACCENT }} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[#0a1628] font-bold text-sm mb-0.5">{item.title}</div>
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
          <div className="relative rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #052e16 0%, #0a1628 100%)' }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-[100px]" style={{ background: ACCENT }} />
            <div className="relative px-8 md:px-16 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Free Store Consultation</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Ready to Launch Your<br />
                  <span style={{ color: ACCENT }}>Online Store?</span>
                </h2>
                <p className="text-white/55 text-base max-w-md">
                  Tell us your store type and we&apos;ll give you a platform recommendation, feature list, and revenue estimate in 24 hours.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
                <button onClick={openModal} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[#052e16] hover:opacity-90 transition-all text-sm whitespace-nowrap" style={{ background: ACCENT }}>
                  Start Your Store <ArrowRight size={16} />
                </button>
                <Link href="/live-demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/80 border border-white/20 hover:bg-white/10 transition-all text-sm">
                  See Live Examples <ExternalLink size={14} />
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
            <p className="text-gray-500 text-base mb-10">Everything you need to know before building your e-commerce store.</p>
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
          <SectionLabel text="Complete Your Stack" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3">Services That Pair with Your Store</h2>
          <p className="text-gray-500 text-base mb-10">Maximise your store&apos;s performance with these complementary services.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { slug: 'web-design', tag: 'Web Design', title: 'Custom Website Design', desc: 'Brand-first landing pages and marketing websites that feed traffic to your store.', color: '#f5a623', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80' },
              { slug: 'seo', tag: 'SEO', title: 'SEO Optimisation', desc: 'Rank product and category pages on Google and drive organic purchase-intent traffic.', color: '#f59e0b', img: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=80' },
              { slug: 'ppc', tag: 'PPC Ads', title: 'PPC Advertising', desc: 'Google Shopping, Meta product ads, and retargeting campaigns that drive ROAS.', color: '#ef4444', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
              { slug: 'android', tag: 'Mobile App', title: 'Mobile Commerce App', desc: 'Native Android and iOS shopping apps with push notifications and faster checkout.', color: '#3ddc84', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80' },
            ].map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
                <div className="h-40 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-3" style={{ background: s.color }}>{s.tag}</span>
                  <h3 className="font-bold text-[#0a1628] group-hover:text-[#22c55e] transition-colors mb-1.5 text-sm leading-snug">{s.title}</h3>
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
