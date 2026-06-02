'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import {
  LayoutGrid, Zap, ShoppingBag, Utensils, HeartPulse,
  Car, Building2, Briefcase, Leaf, Flame, ArrowRight, Layers,
  GraduationCap, Plane, Tv2, Users2, Wrench, Newspaper,
} from 'lucide-react';

const categories = [
  { id: 'all',        name: 'All Solutions',   icon: LayoutGrid },
  { id: 'latest',     name: 'Latest Suites',   icon: Zap },
  { id: 'ecommerce',  name: 'E-Commerce',      icon: ShoppingBag },
  { id: 'food',       name: 'Food & Grocery',  icon: Utensils },
  { id: 'health',     name: 'Health',          icon: HeartPulse },
  { id: 'education',  name: 'Education',       icon: GraduationCap },
  { id: 'travel',     name: 'Travel',          icon: Plane },
  { id: 'realestate', name: 'Real Estate',     icon: Building2 },
  { id: 'services',   name: 'Services',        icon: Briefcase },
  { id: 'lifestyle',  name: 'Lifestyle',       icon: Leaf },
  { id: 'automotive', name: 'Automotive',      icon: Car },
  { id: 'trending',   name: 'Trending',        icon: Flame },
];

type Product = {
  id: string
  category: string
  title: string
  description: string
  image: string
  badge: { text: string; type: string; icon: React.ComponentType<{ size?: number; strokeWidth?: number }> } | null
  platform: string
  features: string[]
  tech: string[]
}

const products: Product[] = [
  {
    id: 'ai-agent-suite',
    category: 'latest',
    title: 'AI Agent Web & App Suite',
    description: 'Smart automation platform for chatbots, lead follow-ups, workflows, reports, and business intelligence.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + App',
    features: ['AI Chatbot', 'Workflow Automation', 'Analytics Dashboard'],
    tech: ['Python', 'LangChain', 'React'],
  },
  {
    id: 'security-monitoring',
    category: 'latest',
    title: 'Security Monitoring Dashboard',
    description: 'Real-time security workspace for alerts, audits, user access, threat logs, and compliance tracking.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + App',
    features: ['Threat Detection', 'Access Control', 'Audit Logs'],
    tech: ['Node.js', 'MongoDB', 'WebSocket'],
  },
  {
    id: 'crm-sales',
    category: 'latest',
    title: 'CRM & Sales Automation Suite',
    description: 'Lead pipeline, customer history, quotations, tasks, reminders, analytics, and team collaboration.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + App',
    features: ['Lead Pipeline', 'Email Automation', 'Sales Reports'],
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'digital-wallet',
    category: 'latest',
    title: 'Digital Wallet & Payment App',
    description: 'Secure payment platform with wallet, invoices, merchant panel, and full transaction history.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + App',
    features: ['UPI/Wallet', 'Merchant Panel', 'Transaction History'],
    tech: ['Flutter', 'Node.js', 'Razorpay'],
  },
  {
    id: 'telemedicine',
    category: 'health',
    title: 'Telemedicine & Clinic Suite',
    description: 'Online consultation, appointment booking, patient records, e-prescriptions, and full clinic management.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + App',
    features: ['Video Consultation', 'E-Prescription', 'Patient Records'],
    tech: ['React Native', 'WebRTC', 'Firebase'],
  },
  {
    id: 'business-erp',
    category: 'latest',
    title: 'Business ERP & Operations Suite',
    description: 'Cloud-ready ERP for inventory, HR, billing, projects, approvals, reporting, and multi-branch management.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + App',
    features: ['Inventory', 'HR & Payroll', 'Multi-branch'],
    tech: ['Next.js', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'ecommerce-suite',
    category: 'ecommerce',
    title: 'E-Commerce Suite',
    description: 'Complete multi-vendor digital storefront infrastructure built for high scalability and maximum conversions.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web + App',
    features: ['Multi-Vendor', 'AI Recommendations', 'Analytics'],
    tech: ['Next.js', 'Stripe', 'MongoDB'],
  },
  {
    id: 'b2b-marketplace',
    category: 'ecommerce',
    title: 'B2B Wholesale Marketplace',
    description: 'Bulk ordering, GST invoicing, credit management, vendor portal, and procurement workflow automation.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600',
    badge: null,
    platform: 'Web + App',
    features: ['Bulk Orders', 'GST Invoicing', 'Credit Limits'],
    tech: ['React', 'Node.js', 'MySQL'],
  },
  {
    id: 'job-portal',
    category: 'services',
    title: 'AI Job Portal & Recruitment',
    description: 'Smart recruitment platform with AI resume matching, applicant tracking, video interviews, and analytics.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600',
    badge: null,
    platform: 'Web + App',
    features: ['AI Matching', 'Video Interview', 'ATS System'],
    tech: ['Python', 'React', 'OpenAI'],
  },
  {
    id: 'food-tech',
    category: 'food',
    title: 'Food Delivery Ecosystem',
    description: 'Hyper-local ordering with live tracking, restaurant management, rider app, and multi-zone support.',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web + App',
    features: ['Live Tracking', 'Restaurant Panel', 'Rider App'],
    tech: ['Flutter', 'Node.js', 'Google Maps'],
  },
  {
    id: 'grocery-engine',
    category: 'food',
    title: 'Grocery Delivery Engine',
    description: 'Real-time slot booking, inventory management, dark store support, and express delivery workflows.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600',
    badge: null,
    platform: 'Web + App',
    features: ['Slot Booking', 'Dark Store', 'Inventory Sync'],
    tech: ['React Native', 'Firebase', 'Node.js'],
  },
  {
    id: 'lms-edtech',
    category: 'education',
    title: 'LMS & EdTech Platform',
    description: 'Live classes, recorded courses, quizzes, certificates, student analytics, and instructor management.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web + App',
    features: ['Live Classes', 'Certificates', 'Quizzes & Exams'],
    tech: ['Next.js', 'WebRTC', 'Zoom API'],
  },
  {
    id: 'school-erp',
    category: 'education',
    title: 'School & College ERP',
    description: 'Admissions, attendance, fee management, timetables, parent portal, exams, and report cards.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=600',
    badge: null,
    platform: 'Web + App',
    features: ['Attendance', 'Fee Management', 'Parent App'],
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'travel-booking',
    category: 'travel',
    title: 'Travel & Tour Booking Platform',
    description: 'Flight, hotel, and tour package booking with itinerary builder, group travel, and agent portal.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web + App',
    features: ['Package Booking', 'Itinerary Builder', 'Agent Panel'],
    tech: ['Next.js', 'Amadeus API', 'MongoDB'],
  },
  {
    id: 'hotel-booking',
    category: 'services',
    title: 'Hotel & Hospitality System',
    description: 'Room management, online reservations, housekeeping schedules, POS billing, and revenue analytics.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web + App',
    features: ['Booking Engine', 'Housekeeping', 'Revenue Dashboard'],
    tech: ['React', 'Node.js', 'Stripe'],
  },
  {
    id: 'real-estate-portal',
    category: 'realestate',
    title: 'Real Estate Portal & CRM',
    description: 'Property listing, virtual tours, agent management, EMI calculators, and buyer-seller live chat.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600',
    badge: null,
    platform: 'Web + App',
    features: ['Virtual Tours', 'EMI Calculator', 'Agent CRM'],
    tech: ['Next.js', 'Three.js', 'Node.js'],
  },
  {
    id: 'ott-platform',
    category: 'services',
    title: 'OTT Streaming Platform',
    description: 'Video streaming with subscription plans, content management, multi-language, and monetization tools.',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + App',
    features: ['HLS Streaming', 'Subscriptions', 'CMS Panel'],
    tech: ['React Native', 'AWS CloudFront', 'Stripe'],
  },
  {
    id: 'car-care',
    category: 'automotive',
    title: 'Car Care & Service App',
    description: 'On-demand servicing with live tracking, service history, spare parts, and mechanic management.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=600',
    badge: null,
    platform: 'Web + App',
    features: ['Service Booking', 'Live Tracking', 'Parts Inventory'],
    tech: ['Flutter', 'Firebase', 'Google Maps'],
  },
  {
    id: 'pharmacy-platform',
    category: 'health',
    title: 'Pharmacy & MedTech Platform',
    description: 'Online pharmacy with prescription uploads, inventory management, delivery tracking, and diagnostics.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web + App',
    features: ['Rx Upload', 'Inventory', 'Home Delivery'],
    tech: ['React Native', 'Node.js', 'Firebase'],
  },
  {
    id: 'fitness-app',
    category: 'lifestyle',
    title: 'Fitness & Gym Management',
    description: 'Membership plans, workout tracking, trainer schedules, nutrition plans, and progress analytics.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web + App',
    features: ['Workout Plans', 'Member App', 'Trainer Portal'],
    tech: ['Flutter', 'Firebase', 'Node.js'],
  },
  {
    id: 'salon-booking',
    category: 'lifestyle',
    title: 'Salon & Spa Booking App',
    description: 'Appointment booking, stylist profiles, loyalty points, POS billing, and customer feedback system.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600',
    badge: null,
    platform: 'Web + App',
    features: ['Slot Booking', 'POS Billing', 'Loyalty Points'],
    tech: ['React Native', 'Stripe', 'Firebase'],
  },
  {
    id: 'home-services',
    category: 'services',
    title: 'Home Services Marketplace',
    description: 'On-demand plumbing, cleaning, electrical, and repair services with provider management and ratings.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600',
    badge: null,
    platform: 'Web + App',
    features: ['Service Booking', 'Provider App', 'Rating System'],
    tech: ['Flutter', 'Node.js', 'Google Maps'],
  },
  {
    id: 'logistics-platform',
    category: 'services',
    title: 'Logistics & Fleet Management',
    description: 'Vehicle tracking, route optimization, delivery management, driver app, and real-time notifications.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600',
    badge: null,
    platform: 'Web + App',
    features: ['Fleet Tracking', 'Route Optimizer', 'Driver App'],
    tech: ['React', 'Node.js', 'Google Maps'],
  },
  {
    id: 'social-community',
    category: 'trending',
    title: 'Social Community App',
    description: 'Niche community platform with posts, groups, live rooms, events, and creator monetization.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web + App',
    features: ['Live Rooms', 'Creator Tools', 'Groups & Events'],
    tech: ['React Native', 'WebRTC', 'Firebase'],
  },
  {
    id: 'news-media',
    category: 'trending',
    title: 'News & Media Portal',
    description: 'Multi-editor news platform with CMS, push notifications, ads management, and analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web + App',
    features: ['CMS Editor', 'Push Notifications', 'Ad Management'],
    tech: ['Next.js', 'Sanity', 'Firebase'],
  },
  {
    id: 'laundry-app',
    category: 'services',
    title: 'On-Demand Laundry App',
    description: 'Pickup & delivery scheduling, order tracking, pricing management, and customer loyalty rewards.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=600',
    badge: null,
    platform: 'Web + App',
    features: ['Pickup Scheduling', 'Order Tracking', 'Loyalty Rewards'],
    tech: ['Flutter', 'Firebase', 'Razorpay'],
  },
];

const PAGE_SIZE = 9;

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section className="bg-[#f8fafc] py-12 px-4 md:px-8 font-sans min-h-screen">
      <div className="max-w-[1400px] mx-auto">

        {/* ── Filters ── */}
        <div className="mb-10">
          <div className="flex gap-3 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap border shrink-0
                    ${isActive
                      ? 'bg-[#f5a623] text-white border-[#f5a623] shadow-md shadow-orange-500/20'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-[#f5a623] hover:text-[#f5a623]'
                    }`}
                >
                  <Icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                  {category.name}
                </button>
              );
            })}
          </div>
          <p className="text-slate-500 text-sm mt-2 font-medium">
            Showing{' '}
            <span className="text-[#f5a623] font-bold">{visible.length}</span>
            {' '}of{' '}
            <span className="text-[#f5a623] font-bold">{filtered.length}</span>
            {' '}ready-made solutions
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {visible.map((product) => (
            <Link
              key={product.id}
              href={`/live-demo/${product.id}`}
              className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm text-[11px] font-bold px-2.5 py-1.5 rounded-full shadow-sm"
                      style={{ color: product.badge.type === 'latest' ? '#f5a623' : '#ef4444' }}>
                      <product.badge.icon size={11} strokeWidth={2.5} />
                      {product.badge.text}
                    </div>
                  </div>
                )}
                {/* Platform tag */}
                <div className="absolute top-3 right-3">
                  <span className="bg-[#0a1628]/80 text-white text-[10px] font-semibold px-2 py-1 rounded-md backdrop-blur-sm">
                    {product.platform}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-[#0a1628] mb-1.5 leading-snug group-hover:text-[#f5a623] transition-colors">
                  {product.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.features.map((f, i) => (
                    <span key={i} className="text-[11px] font-medium bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3.5 border-t border-slate-100">
                  <span className="flex items-center gap-1.5 text-sm font-bold text-[#0a1628] group-hover:text-[#f5a623] transition-colors">
                    Live Demo
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="flex gap-1">
                    {product.tech.slice(0, 2).map((t, i) => (
                      <span key={i} className="text-[10px] font-semibold bg-[#f5a623]/10 text-[#f5a623] px-2 py-0.5 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Load More ── */}
        {hasMore && (
          <div className="flex justify-center pb-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
              className="flex items-center gap-3 border-2 border-[#f5a623] text-[#f5a623] hover:bg-[#f5a623] hover:text-white px-8 py-3 rounded-full font-bold transition-all duration-300 group"
            >
              <Layers size={18} className="group-hover:animate-bounce" />
              Load More Solutions
              <span className="bg-[#f5a623] text-white group-hover:bg-white group-hover:text-[#f5a623] text-xs px-2.5 py-1 rounded-full transition-colors">
                +{Math.min(PAGE_SIZE, filtered.length - visibleCount)} more
              </span>
            </button>
          </div>
        )}

        {!hasMore && filtered.length > PAGE_SIZE && (
          <div className="flex justify-center pb-12">
            <p className="text-slate-400 text-sm font-medium">✓ All {filtered.length} solutions loaded</p>
          </div>
        )}

      </div>
    </section>
  );
}
