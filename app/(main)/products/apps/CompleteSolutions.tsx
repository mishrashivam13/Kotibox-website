'use client'
import React, { useState } from 'react';

// Data structure for tabs and their respective cards
const solutionsData = [
  {
    id: 'orders',
    tabTitle: 'KGT Orders',
    tabSubtitle: 'On-demand Marketplace',
    cards: [
      { badge: 'Food & Grocery', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600' },
      { badge: 'E-Commerce', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600' },
      { badge: 'Home Services', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600' },
      { badge: 'Laundry', image: 'https://images.unsplash.com/photo-1582735689146-212d2643a60c?auto=format&fit=crop&q=80&w=600' },
    ]
  },
  {
    id: 'rides',
    tabTitle: 'KGT Rides',
    tabSubtitle: 'Transportation Services',
    cards: [
      { badge: 'Taxi Booking', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=600' },
      { badge: 'Vehicle Rental', image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=600' },
      { badge: 'Carpool & Sharing', image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=600' },
      { badge: 'Car Washing', image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=600' },
    ]
  },
  {
    id: 'consult',
    tabTitle: 'KGT Consult',
    tabSubtitle: 'Online Consultation Platform',
    cards: [
      { badge: 'Healthcare', image: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?auto=format&fit=crop&q=80&w=600' },
      { badge: 'Finance', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600' },
      { badge: 'Tutor', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600' },
      { badge: 'Fitness Experts', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600' },
    ]
  },
  {
    id: 'dispatcher',
    tabTitle: 'KGT Dispatcher',
    tabSubtitle: 'On-demand Delivery Software',
    cards: [
      { badge: 'Pickup & Delivery', image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=600' },
      { badge: 'Logistics', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600' },
      { badge: 'Courier', image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80&w=600' },
      { badge: 'Dispatch & Routing', image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=600' },
    ]
  }
];

export default function CompleteSolutions() {
  const [activeTab, setActiveTab] = useState('orders');

  // Find the currently active tab's data
  const currentData = solutionsData.find(tab => tab.id === activeTab);

  return (
    <section className="bg-[#243e56] py-24 px-6 font-sans min-h-screen">
      <div className="max-w-[1300px] mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-6 tracking-tight">
            Combine Your <span className="text-[#f5a623]">Business Concept</span> With <br className="hidden md:block" />
            <span className="relative inline-block mt-2">
              Complete
              {/* Orange Underline matching the screenshot */}
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#f5a623] rounded-full"></span>
            </span> Solutions
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-10">
            Obtain a comprehensive set of "ready-to-use" base products that are easily customizable to meet your changing business requirements.
          </p>
        </div>

        {/* --- TABS NAVIGATION --- */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-16">
          {solutionsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center px-6 py-4 rounded-xl transition-all duration-300 cursor-pointer border
                ${activeTab === tab.id 
                  ? 'border-[#f5a623] bg-[#1a2f4c]/50 shadow-lg' 
                  : 'border-transparent hover:bg-white/5 opacity-70 hover:opacity-100'
                }`}
            >
              <span className="text-[#f5a623] font-semibold text-lg mb-1">{tab.tabTitle}</span>
              <span className="text-white text-sm">{tab.tabSubtitle}</span>
            </button>
          ))}
        </div>

        {/* --- DYNAMIC GRID CONTENT --- */}
        {/* Added a key to the grid so React re-animates the cards when tab changes */}
        <div key={activeTab} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-in fade-in zoom-in-95 duration-500">
          {currentData?.cards.map((card, index) => (
            <div key={index} className="flex flex-col gap-6 group cursor-pointer">
              
              {/* Image Box */}
              <div className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden shadow-lg border border-slate-700/50">
                {/* Background Image */}
                <img 
                  src={card.image} 
                  alt={card.badge} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Overlay (Fades out on hover) */}
                <div className="absolute inset-0 bg-[#0a1628]/60 group-hover:bg-[#0a1628]/20 transition-colors duration-500"></div>

                {/* Orange Badge */}
                <div className="absolute top-4 right-4 bg-[#f5a623]/90 backdrop-blur-sm text-white font-bold text-sm px-4 py-1.5 rounded-full shadow-md z-10 transition-transform duration-300 group-hover:-translate-y-1">
                  {card.badge}
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-transparent border border-slate-500 text-slate-300 font-semibold py-3 rounded-full transition-all duration-300 group-hover:border-[#f5a623] group-hover:text-white group-hover:bg-[#f5a623]/10">
                Book Free Demo
              </button>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}