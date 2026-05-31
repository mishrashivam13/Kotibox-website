'use client'
import React, { useState } from 'react';
import { 
  LayoutGrid, Zap, ShoppingBag, Utensils, HeartPulse, 
  Car, Building2, Briefcase, Leaf, Flame, ArrowRight 
} from 'lucide-react';

// Filter Categories Data
const categories = [
  { id: 'all', name: 'All', icon: LayoutGrid },
  { id: 'latest', name: 'Latest Suites', icon: Zap },
  { id: 'ecommerce', name: 'E-Commerce', icon: ShoppingBag },
  { id: 'food', name: 'Food & Grocery', icon: Utensils },
  { id: 'health', name: 'Health', icon: HeartPulse },
  { id: 'automotive', name: 'Automotive', icon: Car },
  { id: 'realestate', name: 'Real Estate', icon: Building2 },
  { id: 'services', name: 'Services', icon: Briefcase },
  { id: 'lifestyle', name: 'Lifestyle', icon: Leaf },
  { id: 'trending', name: 'Trending', icon: Flame },
];

// Product Grid Data (Extracted exactly from your screenshots)
const products = [
  {
    id: 1,
    title: 'AI Agent Web & App Suite',
    description: 'Smart automation platform for chatbots, lead follow-ups, workflows, reports, and business...',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + App'
  },
  {
    id: 2,
    title: 'Security Monitoring Dashboard',
    description: 'Real-time security workspace for alerts, audits, user access, threat logs, and...',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + App'
  },
  {
    id: 3,
    title: 'CRM & Sales Automation Suite',
    description: 'Lead pipeline, customer history, quotations, tasks, reminders, analytics, and team...',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + App'
  },
  {
    id: 4,
    title: 'Digital Wallet & Payment App',
    description: 'Secure payment platform with wallet, invoices, merchant panel, transaction...',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + App'
  },
  {
    id: 5,
    title: 'Telemedicine & Clinic Suite',
    description: 'Online consultation, appointment booking, patient records, e-prescriptions, and clinic...',
    image: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + App'
  },
  {
    id: 6,
    title: 'Business ERP & Operations Suite',
    description: 'Cloud-ready ERP for inventory, HR, billing, projects, approvals, reporting, and multi-...',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Latest', type: 'latest', icon: Zap },
    platform: 'Web + App'
  },
  {
    id: 7,
    title: 'E-Commerce Suite',
    description: 'Complete multi-vendor digital storefront infrastructure built for high scalability.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web + App'
  },
  {
    id: 8,
    title: 'Job Portal Matrix',
    description: 'Advanced interactive recruitment networks containing smart profiling filters.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600',
    badge: null,
    platform: 'Web + App'
  },
  {
    id: 9,
    title: 'Food Tech Ecosystem',
    description: 'Hyper-local ordering delivery engine supporting live location workflows.',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web + App'
  },
  {
    id: 10,
    title: 'Grocery Engine',
    description: 'Real-time mapping solutions handling direct slot booking schedules seamlessly.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Ps', type: 'design', icon: null },
    platform: 'Web + App'
  },
  {
    id: 11,
    title: 'Car Care App',
    description: 'On-demand servicing schedules built alongside live tracking modules.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=600',
    badge: null,
    platform: 'Web + App'
  },
  {
    id: 12,
    title: 'Pharmacy Platform',
    description: 'Digital diagnostic inventory channels alongside medical workspace loops.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=600',
    badge: { text: 'Trending', type: 'trending', icon: Flame },
    platform: 'Web + App'
  }
];

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section className="bg-[#f8fafc] py-12 px-4 md:px-8 font-sans min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- FILTERS SECTION --- */}
        <div className="mb-10">
          <div className="flex gap-3 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
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
            Showing <span className="text-[#f5a623] font-bold">24</span> products
          </p>
        </div>

        {/* --- PRODUCT GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
            >
              
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Dynamic Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    {product.badge.type === 'design' ? (
                      <div className="bg-[#001e36] text-[#31a8ff] text-xs font-extrabold px-2 py-1 rounded shadow-sm border border-[#31a8ff]/20">
                        {product.badge.text}
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm text-[#ff5a5f] text-xs font-bold px-2.5 py-1.5 rounded-full shadow-sm">
                        {product.badge.icon && <product.badge.icon size={12} strokeWidth={3} />}
                        {product.badge.text}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-[#0a1628] mb-2 leading-tight group-hover:text-[#f5a623] transition-colors">
                  {product.title}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Footer / CTA */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
                  <span className="flex items-center gap-1.5 text-sm font-bold text-[#0a1628] group-hover:text-[#f5a623] transition-colors">
                    Explore Now
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md">
                    {product.platform}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* --- LOAD MORE BUTTON --- */}
        <div className="flex justify-center mt-8 pb-12">
          <button className="flex items-center gap-3 border-2 border-[#f5a623] text-[#f5a623] hover:bg-[#f5a623] hover:text-white px-8 py-3 rounded-full font-bold transition-all duration-300 cursor-pointer group">
            <Layers size={18} className="group-hover:animate-bounce" />
            Load More Products
            <span className="bg-[#f5a623] text-white group-hover:bg-white group-hover:text-[#f5a623] text-xs px-2.5 py-1 rounded-full transition-colors">
              +16 more
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}

// Just adding the Layers icon for the Load More button since it wasn't imported top
import { Layers } from 'lucide-react';