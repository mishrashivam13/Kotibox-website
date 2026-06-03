'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, ChevronDown, ChevronUp,
  CheckCircle2, ExternalLink,
  Heart, MessageCircle, Share2, Play,
  TrendingUp, Users, Eye, BarChart3,
  Camera, Video, Image, FileText,
  Bell, Star, Zap, Globe,
  Calendar, Clock, Target, Layers,
  Settings, RefreshCw, Shield, Award,
  Sparkles, Mic, Radio, Repeat,
  ThumbsUp, AtSign, Hash, Bookmark
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const ACCENT = '#ec4899'
const ACCENT_DARK = '#be185d'
const ACCENT_LIGHT = '#fdf2f8'
const NAVY = '#0a1628'

// --- Data -------------------------------------------------------------------

const platforms = [
  {
    name: 'Instagram',
    handle: '@yourbrand',
    color: '#e1306c',
    gradient: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
    icon: Camera,
    bestFor: 'Visual brands, D2C, lifestyle, food, fashion',
    contentTypes: ['Reels (15–90s)', 'Carousels (10 slides)', 'Stories (24hr)', 'Static Posts', 'Broadcast Channel', 'Collab Posts'],
    metric1: { label: 'Avg Reach/Post', val: '12K+' },
    metric2: { label: 'Engagement Rate', val: '4.2%' },
    strategy: 'Reels-first strategy for maximum organic reach. 30–40% Reels in content mix, carousel for saves, stories for daily touchpoints.',
  },
  {
    name: 'LinkedIn',
    handle: 'Company Page',
    color: '#0a66c2',
    gradient: 'linear-gradient(135deg, #0a66c2, #004182)',
    icon: Users,
    bestFor: 'B2B, SaaS, professional services, HR, finance',
    contentTypes: ['Thought Leadership Posts', 'Document Carousels', 'Company News', 'Employee Stories', 'LinkedIn Articles', 'LinkedIn Live'],
    metric1: { label: 'Avg Impressions', val: '8K+' },
    metric2: { label: 'Click-Through Rate', val: '2.8%' },
    strategy: 'Founder-led content gets 5x more reach than brand posts. We ghostwrite for your leadership team and build company page authority simultaneously.',
  },
  {
    name: 'YouTube',
    handle: 'YouTube Channel',
    color: '#ff0000',
    gradient: 'linear-gradient(135deg, #ff0000, #cc0000)',
    icon: Play,
    bestFor: 'Educational brands, tech, tutorials, product reviews',
    contentTypes: ['Long-form Videos (8–20 min)', 'YouTube Shorts', 'Community Posts', 'Playlists', 'Premieres', 'Live Streams'],
    metric1: { label: 'Avg Views', val: '5K+' },
    metric2: { label: 'Watch Time', val: '4.5 min' },
    strategy: 'Shorts drive subscriber growth; long-form drives revenue via search. We produce both in one filming session using repurposing workflows.',
  },
  {
    name: 'X (Twitter)',
    handle: '@yourbrand',
    color: '#000000',
    gradient: 'linear-gradient(135deg, #14171a, #292f33)',
    icon: AtSign,
    bestFor: 'Tech, startups, news, finance, real-time brands',
    contentTypes: ['Threads', 'Single Tweets', 'Polls', 'Spaces (Audio)', 'Quote Tweets', 'X Premium Articles'],
    metric1: { label: 'Avg Impressions', val: '15K+' },
    metric2: { label: 'Engagement Rate', val: '3.1%' },
    strategy: 'Threads outperform single tweets 4x. We write hook-driven threads that build following, reply to trending conversations for organic exposure.',
  },
  {
    name: 'Facebook',
    handle: 'Business Page',
    color: '#1877f2',
    gradient: 'linear-gradient(135deg, #1877f2, #0d5bb5)',
    icon: Globe,
    bestFor: 'Local business, community, 30+ demographics, events',
    contentTypes: ['Feed Posts', 'Facebook Reels', 'Stories', 'Facebook Groups', 'Facebook Live', 'Events'],
    metric1: { label: 'Avg Reach', val: '6K+' },
    metric2: { label: 'Group Growth', val: '+200/mo' },
    strategy: 'Facebook Groups outperform pages for community building. We manage branded groups alongside the page for 3x more organic content reach.',
  },
  {
    name: 'Pinterest',
    handle: 'Brand Boards',
    color: '#e60023',
    gradient: 'linear-gradient(135deg, #e60023, #ad081b)',
    icon: Bookmark,
    bestFor: 'Home decor, food, fashion, weddings, DIY, travel',
    contentTypes: ['Standard Pins', 'Idea Pins (multi-slide)', 'Video Pins', 'Shoppable Pins', 'Rich Pins', 'Story Pins'],
    metric1: { label: 'Monthly Views', val: '50K+' },
    metric2: { label: 'Link Clicks', val: '800+/mo' },
    strategy: 'Pinterest is a search engine, not a social network. We keyword-optimise every pin title, description, and board to drive evergreen organic discovery.',
  },
]

const contentPillars = [
  { pillar: 'Educational', icon: FileText, color: '#6366f1', pct: 35, desc: 'How-to content, tips, explainers, and insights that demonstrate expertise and earn saves & shares.' },
  { pillar: 'Entertaining', icon: Sparkles, color: '#ec4899', pct: 25, desc: 'Trending audio reels, relatable memes, behind-the-scenes, and brand personality content that earns comments.' },
  { pillar: 'Inspirational', icon: Star, color: '#f59e0b', pct: 20, desc: 'Success stories, transformations, testimonials, and aspirational content that earns saves and followers.' },
  { pillar: 'Promotional', icon: Target, color: '#22c55e', pct: 20, desc: 'Product showcases, offers, announcements, and conversion-focused content done without the hard sell.' },
]

const contentFormats = [
  { format: 'Short-Form Video (Reels / Shorts)', icon: Video, color: '#ec4899', reach: 'Highest', effort: 'High', bestFor: 'New audience discovery, follower growth', stat: '3x more reach than static posts' },
  { format: 'Carousel Posts', icon: Layers, color: '#6366f1', reach: 'High', effort: 'Medium', bestFor: 'Saves, shares, educational content', stat: '3x more saves than single images' },
  { format: 'Static Image Posts', icon: Image, color: '#f59e0b', reach: 'Medium', effort: 'Low', bestFor: 'Quotes, announcements, product shots', stat: 'Fast to produce, consistent presence' },
  { format: 'Stories (24hr)', icon: Radio, color: '#0ea5e9', reach: 'Medium', effort: 'Low', bestFor: 'Daily touchpoints, polls, behind scenes', stat: '500M+ daily Stories viewers' },
  { format: 'Long-Form Video', icon: Play, color: '#ef4444', reach: 'Medium', effort: 'Very High', bestFor: 'Deep dives, tutorials, thought leadership', stat: 'Drives highest watch time & authority' },
  { format: 'Text / Threads', icon: FileText, color: '#14b8a6', reach: 'High', effort: 'Low', bestFor: 'LinkedIn thought leadership, X threads', stat: 'Founder threads get 5x brand reach' },
]

const monthlyProcess = [
  {
    week: 'Week 1',
    phase: 'Strategy & Planning',
    icon: Target,
    color: '#6366f1',
    tasks: [
      'Monthly content theme & campaign brief',
      'Content calendar draft (all platforms)',
      'Trending audio & format research',
      'Competitor content audit for the month',
      'Approval of calendar with client',
    ],
  },
  {
    week: 'Week 1–2',
    phase: 'Content Creation',
    icon: Camera,
    color: ACCENT,
    tasks: [
      'Graphic design (Figma / Canva Pro)',
      'Reel scripting & video editing',
      'Copywriting for all captions',
      'Hashtag research per post',
      'Story design & animation',
    ],
  },
  {
    week: 'Week 2–4',
    phase: 'Publishing & Engagement',
    icon: Calendar,
    color: '#22c55e',
    tasks: [
      'Scheduled publishing via Buffer / Later',
      'Comment replies within 2 hours',
      'DM management & lead routing',
      'Story polls & interactive content',
      'Cross-platform repurposing',
    ],
  },
  {
    week: 'End of Month',
    phase: 'Analytics & Reporting',
    icon: BarChart3,
    color: '#f59e0b',
    tasks: [
      'Platform analytics review (all channels)',
      'Top-performing content analysis',
      'Follower growth & reach metrics',
      'Engagement rate benchmarking',
      'Next month strategy adjustment',
    ],
  },
]

const packages = [
  {
    name: 'Starter',
    color: '#6366f1',
    platforms: '2 platforms',
    posts: '20 posts/month',
    includes: ['20 designed posts/month', 'Caption copywriting', 'Hashtag research', 'Scheduled publishing', 'Monthly report', 'Comment moderation (5 days/week)'],
    notIncluded: ['Reels production', 'Story design', 'DM management', 'Paid ads management'],
    ideal: 'Small businesses starting out on social',
  },
  {
    name: 'Growth',
    color: ACCENT,
    platforms: '3 platforms',
    posts: '30 posts + 4 Reels',
    includes: ['30 posts + 4 Reels/month', 'Full caption & hashtag strategy', 'Story design (15/month)', 'Scheduled publishing', 'DM management', 'Community comment replies', 'Monthly analytics report', 'Competitor tracking'],
    notIncluded: ['Paid ads management', 'Influencer outreach'],
    ideal: 'Growing brands wanting real engagement',
    recommended: true,
  },
  {
    name: 'Enterprise',
    color: '#f59e0b',
    platforms: '5+ platforms',
    posts: '50 posts + 8 Reels + Shorts',
    includes: ['50+ posts/month across 5 platforms', '8 Reels + YouTube Shorts', 'Full story strategy & design', '24/7 DM management', 'Influencer research & outreach', 'Paid social ad management', 'Weekly performance calls', 'Brand crisis monitoring', 'UGC curation & reposting'],
    notIncluded: [],
    ideal: 'Large brands needing full social management',
  },
]

const communityActions = [
  { action: 'Comment Replies', time: '< 2 hours', desc: 'Every comment on your posts replied to within 2 business hours. Positive engagement, negative handled diplomatically.' },
  { action: 'DM Management', time: 'Daily', desc: 'Inbound DMs categorised, replied to, or routed to your sales/support team with context. No lead left unread.' },
  { action: 'Brand Mention Monitoring', time: 'Real-time', desc: 'We monitor brand mentions, tags, and relevant hashtags. Positive mentions amplified, negative addressed proactively.' },
  { action: 'Proactive Engagement', time: 'Daily', desc: 'We engage on relevant posts, industry conversations, and potential customer content to build organic reach and brand presence.' },
  { action: 'UGC Curation', time: 'Weekly', desc: 'User-generated content identified, permission requested, and reposted with credit — the most trusted content format available.' },
  { action: 'Crisis Response', time: 'Same day', desc: 'If negative content goes viral, we have a crisis response protocol to address it quickly and professionally before it compounds.' },
]

const metrics = [
  { metric: 'Follower Growth Rate', why: 'Quality audience size over time', good: '> 5% monthly', color: ACCENT },
  { metric: 'Engagement Rate', why: 'How many followers actually interact', good: '> 3% (Instagram)', color: '#6366f1' },
  { metric: 'Reach per Post', why: 'How far content travels beyond followers', good: '> 20% of followers', color: '#22c55e' },
  { metric: 'Saves & Shares', why: 'Strongest algorithmic signals for growth', good: '> 1% of impressions', color: '#f59e0b' },
  { metric: 'Profile Visits', why: 'Content driving interest in your brand', good: '> 500/week', color: '#0ea5e9' },
  { metric: 'Story Completion Rate', why: 'How engaging your story content is', good: '> 70% completion', color: '#ec4899' },
  { metric: 'DM Conversations', why: 'Warm leads entering your pipeline', good: '> 20/month', color: '#10b981' },
  { metric: 'Link in Bio Clicks', why: 'Social converting to website traffic', good: '> 2% of followers', color: '#f87171' },
]

const influencerTiers = [
  {
    tier: 'Nano',
    range: '1K – 10K followers',
    color: '#10b981',
    engagementRate: '7–10%',
    costPerPost: '₹2K – ₹8K',
    bestFor: 'Local businesses, niche products, authentic reviews',
    pros: ['Highest engagement rates', 'Highly authentic audience trust', 'Affordable for testing', 'Very niche targeting possible'],
  },
  {
    tier: 'Micro',
    range: '10K – 100K followers',
    color: '#6366f1',
    engagementRate: '3–7%',
    costPerPost: '₹8K – ₹50K',
    bestFor: 'D2C brands, product launches, lifestyle, beauty',
    pros: ['Strong community trust', 'Good reach + engagement balance', 'Category expertise', 'Measurable ROI'],
  },
  {
    tier: 'Macro',
    range: '100K – 1M followers',
    color: ACCENT,
    engagementRate: '1–3%',
    costPerPost: '₹50K – ₹5L',
    bestFor: 'Brand awareness, new product launch, mass market',
    pros: ['Large audience reach', 'Brand credibility lift', 'Reachable at scale', 'High production value'],
  },
  {
    tier: 'Mega / Celebrity',
    range: '1M+ followers',
    color: '#f59e0b',
    engagementRate: '0.5–1.5%',
    costPerPost: '₹5L+',
    bestFor: 'IPO-level brands, national campaigns, entertainment',
    pros: ['Maximum visibility', 'Cultural impact potential', 'TV-scale reach', 'Premium brand association'],
  },
]

const faqs = [
  {
    question: 'How many posts per month do you create?',
    answer: 'It depends on the package. Starter: 20 posts/month across 2 platforms. Growth: 30 posts + 4 Reels/month across 3 platforms. Enterprise: 50+ posts + 8 Reels/month across 5 platforms. All plans include caption copywriting, hashtag strategy, and scheduled publishing. Story design is included in Growth and above. Content volume is quality-first — we do not pad calendars with filler posts.',
  },
  {
    question: 'Do you shoot the content or only design graphics?',
    answer: 'For graphic content, video editing, Reels scripting, and design — yes, we create it in-house. For photography or video footage of your physical product, location, or team, we either work with footage you provide or arrange a content shoot (additional cost, quoted separately). Many clients start with brand-provided raw footage that we edit and produce into Reels and Stories.',
  },
  {
    question: 'How long before we see results?',
    answer: 'Engagement improvements (more comments, saves, DMs) typically show within the first 4 to 6 weeks as the content strategy takes hold. Follower growth at a meaningful rate takes 2 to 3 months of consistent quality content. Significant brand awareness impact (reach, profile visits, website traffic from social) takes 4 to 6 months. We are honest about social media timelines — anyone promising 10,000 followers in 30 days is using bots.',
  },
  {
    question: 'Do you run paid social ads as well?',
    answer: 'Yes, as an add-on to organic social management. We manage Meta Ads (Facebook + Instagram), LinkedIn Ads, YouTube pre-roll, and Pinterest Ads. Paid social is most effective when the organic content is already performing well — the ads amplify what is already resonating. We handle ad creative, audience targeting, A/B testing, and weekly bid optimisation. Ad spend is billed directly to you; our management fee is separate.',
  },
  {
    question: 'Who writes the captions and comes up with the content ideas?',
    answer: 'Our in-house social media strategist and copywriter handle all content ideation, caption writing, and hashtag research. We start with a brand onboarding session to understand your voice, tone, audience, and competitors. From Month 2 onwards, our content feels indistinguishable from content your own team would write — because we write in your established voice, not a generic one.',
  },
  {
    question: 'Can you manage influencer partnerships?',
    answer: 'Yes. We handle the complete influencer workflow on Growth and Enterprise plans: identifying relevant micro and macro influencers in your niche, vetting their engagement quality (not just follower count), outreach and negotiation, brief creation, content approval, and post-campaign performance reporting. We maintain a network of vetted influencers across fashion, tech, food, fitness, beauty, and business niches.',
  },
  {
    question: 'What happens if a negative comment or PR crisis appears?',
    answer: 'We monitor your brand mentions in real-time. For individual negative comments, we respond diplomatically and de-escalate within 2 hours. For coordinated negative campaigns or viral criticism, we have a crisis response protocol: assess, pause scheduled content, draft a response strategy, and consult with you before publishing. We have managed brand crises across multiple categories without lasting damage when responded to quickly and professionally.',
  },
  {
    question: 'Do you work with clients outside India?',
    answer: 'Yes. We manage social media for clients in India, the UAE, the UK, and Singapore. Platform behaviour, best posting times, and content cultural fit vary significantly by market. We customise the content strategy and posting schedule for each market. Our team works across IST, GMT, and GST time zones to ensure timely community management and posting.',
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
      <button onClick={() => onToggle(index)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-pink-50/40 transition-colors">
        <span className="text-[#0a1628] font-semibold text-sm md:text-base pr-4">{faq.question}</span>
        {open ? <ChevronUp size={18} style={{ color: ACCENT }} className="flex-shrink-0" /> : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />}
      </button>
      {open && <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.answer}</div>}
    </div>
  )
}

// --- Page -------------------------------------------------------------------

export default function SocialMediaPage() {
  const { openModal } = useModal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activePlatform, setActivePlatform] = useState(0)
  const [activePackage, setActivePackage] = useState(1)

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0a1a 0%, #0a1628 55%, #1a0818 100%)' }}>
        <div className="absolute top-0 right-0 w-[700px] h-[600px] rounded-full opacity-[0.12] blur-[120px]" style={{ background: ACCENT }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.07] blur-[100px]" style={{ background: '#f472b6' }} />
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
                  <Heart size={12} /> Social Media
                </span>
                <span className="text-white/40 text-sm">Digital Marketing</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.06] mb-6">
                Social Media<br />
                <span style={{ color: '#f9a8d4' }}>Marketing</span><br />
                That Converts
              </h1>
              <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
                Full-service social media management across Instagram, LinkedIn, YouTube, X, and Facebook. Strategy, content creation, community management, and analytics — done for you every month.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Instagram Reels', 'LinkedIn Strategy', 'YouTube Shorts', 'Community Management', 'Influencer Outreach', 'Monthly Reports'].map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 text-white/70 bg-white/8">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <button onClick={openModal} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all shadow-lg" style={{ background: ACCENT }}>
                  Get Free Social Audit <ArrowRight size={16} />
                </button>
                <Link href="/live-demo" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white border border-white/20 hover:bg-white/10 transition-all">
                  See Our Work <ExternalLink size={14} />
                </Link>
              </div>
            </div>

            {/* Right — social feed grid mockup */}
            <div className="relative hidden lg:block">
              {/* Instagram-style grid */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10" style={{ background: '#1a0a1a' }}>
                {/* Profile bar */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                  <div className="w-9 h-9 rounded-full border-2 flex items-center justify-center" style={{ borderColor: ACCENT, background: `${ACCENT}20` }}>
                    <Heart size={16} style={{ color: ACCENT }} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">@yourbrand</div>
                    <div className="text-white/40 text-[10px]">23.4K followers</div>
                  </div>
                  <div className="ml-auto px-4 py-1.5 rounded-full text-xs font-bold text-white" style={{ background: ACCENT }}>Follow</div>
                </div>
                {/* Post grid */}
                <div className="grid grid-cols-3 gap-0.5 p-0.5">
                  {[
                    { type: 'reel', bg: 'linear-gradient(135deg, #ec4899, #a855f7)', label: '▶ 42K views' },
                    { type: 'carousel', bg: 'linear-gradient(135deg, #6366f1, #0ea5e9)', label: '⊞ 8 slides' },
                    { type: 'image', bg: 'linear-gradient(135deg, #f59e0b, #ef4444)', label: '❤ 1.2K' },
                    { type: 'image', bg: 'linear-gradient(135deg, #10b981, #0ea5e9)', label: '❤ 856' },
                    { type: 'reel', bg: 'linear-gradient(135deg, #f59e0b, #ec4899)', label: '▶ 28K views' },
                    { type: 'carousel', bg: 'linear-gradient(135deg, #a855f7, #ec4899)', label: '⊞ 10 slides' },
                    { type: 'carousel', bg: 'linear-gradient(135deg, #0ea5e9, #6366f1)', label: '⊞ 5 slides' },
                    { type: 'image', bg: 'linear-gradient(135deg, #ec4899, #f59e0b)', label: '❤ 2.1K' },
                    { type: 'reel', bg: 'linear-gradient(135deg, #6366f1, #10b981)', label: '▶ 67K views' },
                  ].map((post, i) => (
                    <div key={i} className="aspect-square relative overflow-hidden" style={{ background: post.bg }}>
                      <div className="absolute bottom-1.5 left-1.5 text-white text-[9px] font-bold">{post.label}</div>
                    </div>
                  ))}
                </div>
                {/* Engagement bar */}
                <div className="flex items-center justify-around px-4 py-3 border-t border-white/10">
                  <div className="flex items-center gap-1.5">
                    <Heart size={14} style={{ color: ACCENT }} />
                    <span className="text-white text-xs font-bold">4.2%</span>
                    <span className="text-white/40 text-[10px]">Eng Rate</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Eye size={14} className="text-blue-400" />
                    <span className="text-white text-xs font-bold">12K</span>
                    <span className="text-white/40 text-[10px]">Avg Reach</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp size={14} className="text-green-400" />
                    <span className="text-white text-xs font-bold">+28%</span>
                    <span className="text-white/40 text-[10px]">This Month</span>
                  </div>
                </div>
              </div>
              {/* Floating notification */}
              <div className="absolute -top-4 -right-4 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl z-10" style={{ borderColor: `${ACCENT}40` }}>
                <div className="flex items-center gap-2 mb-1">
                  <Bell size={12} style={{ color: ACCENT }} />
                  <span className="text-white text-xs font-semibold">New Reel went viral</span>
                </div>
                <div className="text-white/40 text-[10px]">67K views in 48 hours 🔥</div>
              </div>
              {/* Floating DM badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl z-10" style={{ borderColor: `${ACCENT}40` }}>
                <div className="flex items-center gap-2">
                  <MessageCircle size={12} style={{ color: '#f472b6' }} />
                  <span className="text-white text-xs font-semibold">34 new DM leads</span>
                </div>
                <div className="text-white/40 text-[10px]">This week from content</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Platform Stats Bar ───────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { val: '6', label: 'Platforms We Manage', icon: Globe },
              { val: '50+', label: 'Posts Created Per Month', icon: Image },
              { val: '2hr', label: 'Comment Reply Time', icon: MessageCircle },
              { val: '2x', label: 'Avg Engagement Increase', icon: TrendingUp },
            ].map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="flex flex-col items-center text-center py-8 px-4 hover:bg-pink-50/40 transition-colors">
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

        {/* ── Platform Deep-Dive ───────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Platform Strategy" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Tailored Strategy for Every Platform
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Each platform has a different algorithm, audience behaviour, and content format. We do not post the same content everywhere — we optimise for each platform individually.
          </p>
          {/* Platform tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {platforms.map((p, i) => (
              <button key={i} onClick={() => setActivePlatform(i)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${activePlatform === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                style={activePlatform === i ? { background: p.color } : {}}>
                {p.name}
              </button>
            ))}
          </div>
          {(() => {
            const p = platforms[activePlatform]
            const Icon = p.icon
            return (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200 rounded-3xl overflow-hidden">
                {/* Left — platform identity */}
                <div className="p-8 flex flex-col gap-6" style={{ background: `${p.color}08`, borderRight: '1px solid #e5e7eb' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg" style={{ background: p.gradient }}>
                      <Icon size={26} />
                    </div>
                    <div>
                      <div className="font-black text-[#0a1628] text-xl">{p.name}</div>
                      <div className="text-gray-400 text-sm">{p.handle}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Best For</div>
                    <div className="text-gray-700 text-sm">{p.bestFor}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl p-3 border border-gray-200 text-center bg-white">
                      <div className="text-xl font-black" style={{ color: p.color }}>{p.metric1.val}</div>
                      <div className="text-gray-400 text-[10px] mt-0.5">{p.metric1.label}</div>
                    </div>
                    <div className="rounded-xl p-3 border border-gray-200 text-center bg-white">
                      <div className="text-xl font-black" style={{ color: p.color }}>{p.metric2.val}</div>
                      <div className="text-gray-400 text-[10px] mt-0.5">{p.metric2.label}</div>
                    </div>
                  </div>
                </div>
                {/* Middle — content types */}
                <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-100">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Content We Create</div>
                  <div className="space-y-2.5">
                    {p.contentTypes.map(ct => (
                      <div key={ct} className="flex items-center gap-3">
                        <CheckCircle2 size={14} style={{ color: p.color }} className="flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{ct}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Right — strategy note */}
                <div className="p-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Our {p.name} Strategy</div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{p.strategy}</p>
                  <button onClick={openModal} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all w-full justify-center" style={{ background: p.color }}>
                    Start {p.name} Strategy <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )
          })()}
        </section>

        {/* ── Content Pillars ──────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel text="Content Strategy" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                The 4-Pillar Content Mix That Builds Audiences
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Every piece of content we create falls into one of four strategic pillars. The right mix builds audiences, earns trust, and drives conversions — without feeling like a constant advertisement.
              </p>
              <div className="space-y-4">
                {contentPillars.map((pillar, i) => {
                  const Icon = pillar.icon
                  return (
                    <div key={i} className="flex gap-4 items-start p-5 border border-gray-200 rounded-2xl hover:shadow-sm transition-all bg-white">
                      <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${pillar.color}15` }}>
                        <Icon size={20} style={{ color: pillar.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-bold text-[#0a1628] text-sm">{pillar.pillar}</span>
                          <span className="text-xs font-black px-2 py-0.5 rounded-full text-white" style={{ background: pillar.color }}>{pillar.pct}%</span>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed">{pillar.desc}</p>
                      </div>
                      {/* Mini bar */}
                      <div className="w-16 flex-shrink-0">
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${pillar.pct / 40 * 100}%`, background: pillar.color }} />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Content formats */}
            <div>
              <SectionLabel text="Content Formats" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                Every Format, Ranked by Impact
              </h2>
              <div className="space-y-3">
                {contentFormats.map((f, i) => {
                  const Icon = f.icon
                  return (
                    <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                      <div className="flex items-center gap-3 px-5 py-3" style={{ background: `${f.color}10`, borderBottom: `1px solid ${f.color}20` }}>
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${f.color}20` }}>
                          <Icon size={15} style={{ color: f.color }} />
                        </div>
                        <span className="font-bold text-[#0a1628] text-sm flex-1">{f.format}</span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: f.reach === 'Highest' ? '#22c55e' : f.reach === 'High' ? '#6366f1' : '#94a3b8' }}>
                          {f.reach} reach
                        </span>
                      </div>
                      <div className="px-5 py-2.5 flex items-center justify-between gap-3">
                        <span className="text-gray-400 text-xs">{f.bestFor}</span>
                        <span className="text-xs font-semibold flex-shrink-0" style={{ color: f.color }}>{f.stat}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Monthly Process ──────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="How We Work" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            What Happens Every Month
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            A structured monthly cadence so nothing falls through the cracks and you always know what is happening with your social media.
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
            Social Media Management Plans
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Three plans built around where your brand is today and where you want to go.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div key={i} className={`rounded-3xl overflow-hidden border-2 transition-all ${activePackage === i ? 'shadow-xl scale-[1.02]' : 'border-gray-200 hover:shadow-md'}`}
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
                  <div className="font-black text-[#0a1628] text-2xl mb-1">{pkg.posts}</div>
                  <div className="text-gray-400 text-sm">{pkg.platforms} · Monthly management</div>
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

        {/* ── Community Management ─────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Community Management" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Your Brand Never Goes Silent
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Content without community is broadcasting. We manage every conversation, comment, and DM — turning followers into customers and customers into advocates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {communityActions.map((action, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-6 hover:border-pink-300 hover:shadow-md transition-all bg-white group">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-[#0a1628] text-sm group-hover:text-pink-600 transition-colors">{action.action}</div>
                  <div className="text-xs font-bold px-2.5 py-1 rounded-full text-white" style={{ background: ACCENT }}>{action.time}</div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{action.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Influencer Strategy ──────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Influencer Marketing" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Influencer Tiers — Matching Budget to Impact
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Bigger is not always better. Nano-influencers often deliver higher ROI than celebrities for product launches. We match the right tier to your goal and budget.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {influencerTiers.map((tier, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                <div className="px-5 py-4" style={{ background: `${tier.color}12`, borderBottom: `2px solid ${tier.color}` }}>
                  <div className="font-black text-2xl" style={{ color: tier.color }}>{tier.tier}</div>
                  <div className="text-gray-500 text-xs mt-1">{tier.range}</div>
                </div>
                <div className="p-5 space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl p-2.5 bg-gray-50 text-center">
                      <div className="text-sm font-black text-[#0a1628]">{tier.engagementRate}</div>
                      <div className="text-[10px] text-gray-400">Eng. Rate</div>
                    </div>
                    <div className="rounded-xl p-2.5 bg-gray-50 text-center">
                      <div className="text-sm font-black text-[#0a1628]">{tier.costPerPost}</div>
                      <div className="text-[10px] text-gray-400">Per Post</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Best For</div>
                    <div className="text-gray-600 text-xs">{tier.bestFor}</div>
                  </div>
                  <div className="space-y-1.5">
                    {tier.pros.map(pro => (
                      <div key={pro} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0" style={{ background: tier.color }} />
                        <span className="text-gray-500 text-xs">{pro}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Metrics We Track ─────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel text="Analytics & Reporting" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                8 Metrics We Track Every Month
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Vanity metrics are not our focus. Every number we report is tied to a real business outcome — audience growth, engagement quality, and traffic or leads generated from social.
              </p>
              <div className="space-y-3">
                {metrics.map((m, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:border-pink-200 transition-all bg-white">
                    <div className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: m.color }} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-bold text-[#0a1628] text-sm">{m.metric}</span>
                      </div>
                      <div className="text-gray-400 text-xs">{m.why}</div>
                    </div>
                    <div className="text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0" style={{ background: `${m.color}15`, color: m.color }}>
                      Target: {m.good}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why choose us */}
            <div>
              <SectionLabel text="Why Kotibox Social" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6 leading-tight">
                What Sets Our Social Team Apart
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Video, color: '#ec4899', title: 'Reels-First Strategy', desc: 'We lead with Reels because they deliver 3x the organic reach of static posts. Our team scripts, edits, and produces Reels optimised for the Explore page and Shorts feed.' },
                  { icon: Users, color: '#6366f1', title: 'Platform-Specific Teams', desc: 'Instagram strategy is managed by an Instagram specialist; LinkedIn by a B2B content strategist. Not one generalist managing everything.' },
                  { icon: BarChart3, color: '#f59e0b', title: 'Data-Driven Decisions', desc: 'Every content decision is backed by platform analytics. We kill what does not work and double down on what does — monthly.' },
                  { icon: Heart, color: ACCENT, title: 'Brand Voice That Is Yours', desc: 'After a 2-hour brand onboarding, our copy reads like it was written by your best team member. Not generic marketing copy.' },
                  { icon: Shield, color: '#10b981', title: 'No Bot Followers, Ever', desc: 'We grow real, engaged audiences only. No purchased followers, no engagement pods, no shady growth tactics that damage your account health.' },
                  { icon: Calendar, color: '#0ea5e9', title: 'Content Calendar Approval', desc: 'You approve every post before it goes live. The monthly content calendar is shared in a client portal with comment access.' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:border-pink-200 hover:shadow-sm transition-all">
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
          <div className="relative rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0a1a 0%, #0a1628 100%)' }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-[100px]" style={{ background: ACCENT }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-8 blur-[80px]" style={{ background: '#f472b6' }} />
            <div className="relative px-8 md:px-16 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Free Social Media Audit</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Ready to Turn Followers<br />
                  <span style={{ color: '#f9a8d4' }}>Into Customers?</span>
                </h2>
                <p className="text-white/55 text-base max-w-md">
                  We audit your current social presence across all platforms and give you a free strategy document — what to post, when, and on which platforms to focus first.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
                <button onClick={openModal} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white hover:opacity-90 transition-all text-sm whitespace-nowrap" style={{ background: ACCENT }}>
                  Get Free Social Audit <ArrowRight size={16} />
                </button>
                <Link href="/services/ppc" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/80 border border-white/20 hover:bg-white/10 transition-all text-sm">
                  Explore Paid Social Ads <ExternalLink size={14} />
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
            <p className="text-gray-500 text-base mb-10">Everything about social media management, content creation, and results.</p>
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
          <p className="text-gray-500 text-base mb-10">Social media works best alongside these complementary services.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { slug: 'ppc', tag: 'PPC Ads', title: 'PPC Advertising', desc: 'Paid Meta, LinkedIn & YouTube ads to amplify your organic social reach.', color: '#ef4444', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
              { slug: 'content', tag: 'Content', title: 'Content Marketing', desc: 'Long-form blog and video content that fuels your social media calendar.', color: '#14b8a6', img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80' },
              { slug: 'aeo-geo', tag: 'AEO & GEO', title: 'AEO & GEO Optimization', desc: 'Get your brand cited in ChatGPT, Perplexity, and Google AI Overviews.', color: '#06b6d4', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80' },
              { slug: 'web-design', tag: 'Web Design', title: 'Website Design', desc: 'Convert social traffic with a high-performing landing page and website.', color: '#f5a623', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80' },
            ].map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
                <div className="h-40 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-3" style={{ background: s.color }}>{s.tag}</span>
                  <h3 className="font-bold text-[#0a1628] group-hover:text-pink-600 transition-colors mb-1.5 text-sm leading-snug">{s.title}</h3>
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
