'use client';
import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import Image from "next/image";

// --- Custom Social Media SVG Icons ---
const Facebook = ({ size = 24, fill = "none" }: { size?: number; fill?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Twitter = ({ size = 24, fill = "none" }: { size?: number; fill?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const Linkedin = ({ size = 24, fill = "none" }: { size?: number; fill?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const Instagram = ({ size = 24, fill = "none" }: { size?: number; fill?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

// --- Skyline Components ---
// const IndiaSkyline = () => (
//   <svg viewBox="0 0 500 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//     <path d="M220 105 L220 72 Q221 68 225 65 Q230 55 240 50 Q250 45 260 50 Q270 55 275 65 Q279 68 280 72 L280 105" stroke="white" strokeWidth="1.2" fill="none"/>
//     <path d="M235 65 Q250 42 265 65" stroke="white" strokeWidth="1.2" fill="none"/>
//     <path d="M240 58 Q250 38 260 58" stroke="white" strokeWidth="1" fill="none"/>
//     <path d="M244 52 Q250 35 256 52" stroke="white" strokeWidth="0.8" fill="none"/>
//     <line x1="250" y1="35" x2="250" y2="22" stroke="white" strokeWidth="1.2"/>
//     <path d="M246 35 Q250 30 254 35" stroke="white" strokeWidth="1" fill="none"/>
//     <circle cx="250" cy="21" r="2" stroke="white" strokeWidth="1" fill="none"/>
//     <path d="M228 105 L228 78 Q229 72 235 70 L237 70 Q243 72 244 78 L244 105" stroke="white" strokeWidth="1" fill="none"/>
//     <path d="M256 105 L256 78 Q257 72 263 70 L265 70 Q271 72 272 78 L272 105" stroke="white" strokeWidth="1" fill="none"/>
//     <path d="M195 105 L195 80 L220 80 L220 105" stroke="white" strokeWidth="1" fill="none"/>
//     <path d="M280 105 L280 80 L305 80 L305 105" stroke="white" strokeWidth="1" fill="none"/>
//     <path d="M200 80 Q207 72 214 80" stroke="white" strokeWidth="1" fill="none"/>
//     <path d="M286 80 Q293 72 300 80" stroke="white" strokeWidth="1" fill="none"/>
//     <path d="M188 105 L188 55 L195 55 L195 105" stroke="white" strokeWidth="1" fill="none"/>
//     <ellipse cx="191" cy="54" rx="5" ry="8" stroke="white" strokeWidth="1" fill="none"/>
//     <line x1="191" y1="46" x2="191" y2="38" stroke="white" strokeWidth="1"/>
//     <circle cx="191" cy="37" r="2" stroke="white" strokeWidth="0.8" fill="none"/>
//     <path d="M305 105 L305 55 L312 55 L312 105" stroke="white" strokeWidth="1" fill="none"/>
//     <ellipse cx="308" cy="54" rx="5" ry="8" stroke="white" strokeWidth="1" fill="none"/>
//     <line x1="308" y1="46" x2="308" y2="38" stroke="white" strokeWidth="1"/>
//     <circle cx="308" cy="37" r="2" stroke="white" strokeWidth="0.8" fill="none"/>
//     <path d="M170 105 L170 62 L176 62 L176 105" stroke="white" strokeWidth="0.8" fill="none"/>
//     <ellipse cx="173" cy="61" rx="4" ry="6" stroke="white" strokeWidth="0.8" fill="none"/>
//     <line x1="173" y1="55" x2="173" y2="48" stroke="white" strokeWidth="0.8"/>
//     <path d="M324 105 L324 62 L330 62 L330 105" stroke="white" strokeWidth="0.8" fill="none"/>
//     <ellipse cx="327" cy="61" rx="4" ry="6" stroke="white" strokeWidth="0.8" fill="none"/>
//     <line x1="327" y1="55" x2="327" y2="48" stroke="white" strokeWidth="0.8"/>
//     <path d="M165 105 L165 108 L335 108 L335 105" stroke="white" strokeWidth="0.8" fill="none"/>
//     <path d="M155 108 L155 112 L345 112 L345 108" stroke="white" strokeWidth="0.8" fill="none"/>
//     <path d="M100 112 L100 85 L140 85 L140 112" stroke="white" strokeWidth="0.8" fill="none"/>
//     <path d="M110 85 Q120 75 130 85" stroke="white" strokeWidth="0.8" fill="none"/>
//     <path d="M360 112 L360 85 L400 85 L400 112" stroke="white" strokeWidth="0.8" fill="none"/>
//     <path d="M370 85 Q380 75 390 85" stroke="white" strokeWidth="0.8" fill="none"/>
//     <path d="M80 112 L80 95 M75 100 Q80 90 85 100" stroke="white" strokeWidth="0.7" fill="none"/>
//     <path d="M420 112 L420 95 M415 100 Q420 90 425 100" stroke="white" strokeWidth="0.7" fill="none"/>
//     <path d="M50 115 Q150 112 250 115 Q350 118 450 115" stroke="white" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.4"/>
//     <line x1="30" y1="112" x2="470" y2="112" stroke="white" strokeWidth="0.8" opacity="0.5"/>
//   </svg>
// );

const UKSkyline = () => (
  <svg viewBox="0 0 500 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M148 112 L148 28 L165 28 L165 112" stroke="white" strokeWidth="1.2" fill="none"/>
    <path d="M145 28 L168 28 L168 22 L165 18 L156 12 L148 18 L145 22 Z" stroke="white" strokeWidth="1.2" fill="none"/>
    <line x1="156" y1="12" x2="156" y2="5" stroke="white" strokeWidth="1.2"/>
    <path d="M153 5 L156 0 L159 5" stroke="white" strokeWidth="1" fill="none"/>
    <circle cx="156" cy="38" r="6" stroke="white" strokeWidth="1" fill="none"/>
    <line x1="156" y1="35" x2="156" y2="32" stroke="white" strokeWidth="0.8"/>
    <line x1="156" y1="41" x2="158" y2="44" stroke="white" strokeWidth="0.8"/>
    <path d="M148 50 L165 50" stroke="white" strokeWidth="0.7"/>
    <path d="M148 65 L165 65" stroke="white" strokeWidth="0.7"/>
    <path d="M148 80 L165 80" stroke="white" strokeWidth="0.7"/>
    <path d="M148 95 L165 95" stroke="white" strokeWidth="0.7"/>
    <path d="M60 112 L60 60 L148 60 L148 112" stroke="white" strokeWidth="1" fill="none"/>
    <path d="M65 60 L65 50 L72 50 L72 60" stroke="white" strokeWidth="0.8" fill="none"/>
    <path d="M80 60 L80 50 L87 50 L87 60" stroke="white" strokeWidth="0.8" fill="none"/>
    <path d="M95 60 L95 50 L102 50 L102 60" stroke="white" strokeWidth="0.8" fill="none"/>
    <path d="M110 60 L110 50 L117 50 L117 60" stroke="white" strokeWidth="0.8" fill="none"/>
    <path d="M125 60 L125 50 L132 50 L132 60" stroke="white" strokeWidth="0.8" fill="none"/>
    <rect x="65" y="68" width="8" height="10" stroke="white" strokeWidth="0.7" fill="none"/>
    <rect x="80" y="68" width="8" height="10" stroke="white" strokeWidth="0.7" fill="none"/>
    <rect x="95" y="68" width="8" height="10" stroke="white" strokeWidth="0.7" fill="none"/>
    <rect x="110" y="68" width="8" height="10" stroke="white" strokeWidth="0.7" fill="none"/>
    <rect x="125" y="68" width="8" height="10" stroke="white" strokeWidth="0.7" fill="none"/>
    <path d="M175 112 L175 55 L185 55 L185 112" stroke="white" strokeWidth="1.2" fill="none"/>
    <path d="M175 55 L180 40 L185 55" stroke="white" strokeWidth="1.2" fill="none"/>
    <path d="M215 112 L215 55 L225 55 L225 112" stroke="white" strokeWidth="1.2" fill="none"/>
    <path d="M215 55 L220 40 L225 55" stroke="white" strokeWidth="1.2" fill="none"/>
    <path d="M180 40 L185 112" stroke="white" strokeWidth="0.6" opacity="0.6"/>
    <path d="M180 40 L175 80" stroke="white" strokeWidth="0.6" opacity="0.6"/>
    <path d="M220 40 L225 80" stroke="white" strokeWidth="0.6" opacity="0.6"/>
    <path d="M220 40 L215 112" stroke="white" strokeWidth="0.6" opacity="0.6"/>
    <path d="M185 75 L215 75" stroke="white" strokeWidth="1" fill="none"/>
    <path d="M248 112 L242 15 L252 112" stroke="white" strokeWidth="1.5" fill="none"/>
    <path d="M242 15 L247 2 L252 15" stroke="white" strokeWidth="1.2" fill="none"/>
    <path d="M244 50 L250 50" stroke="white" strokeWidth="0.6"/>
    <path d="M243 70 L251 70" stroke="white" strokeWidth="0.6"/>
    <path d="M243 90 L251 90" stroke="white" strokeWidth="0.6"/>
    <path d="M268 112 L263 45 Q275 30 287 45 L282 112" stroke="white" strokeWidth="1.2" fill="none"/>
    <path d="M264 70 L281 70" stroke="white" strokeWidth="0.5"/>
    <path d="M263 85 L282 85" stroke="white" strokeWidth="0.5"/>
    <path d="M300 112 L300 35 L316 35 L316 112" stroke="white" strokeWidth="1.2" fill="none"/>
    <path d="M300 35 L308 25 L316 35" stroke="white" strokeWidth="1" fill="none"/>
    <path d="M325 112 L325 50 L338 50 L338 112" stroke="white" strokeWidth="1" fill="none"/>
    <path d="M325 50 L331 42 L338 50" stroke="white" strokeWidth="0.8" fill="none"/>
    <path d="M345 112 L345 60 L358 60 L358 112" stroke="white" strokeWidth="1" fill="none"/>
    <path d="M380 112 L380 70 Q395 52 410 70 L410 112" stroke="white" strokeWidth="1" fill="none"/>
    <path d="M385 70 Q395 55 405 70" stroke="white" strokeWidth="0.8" fill="none"/>
    <line x1="395" y1="55" x2="395" y2="45" stroke="white" strokeWidth="0.8"/>
    <path d="M30 115 Q150 112 250 115 Q350 118 470 115" stroke="white" strokeWidth="0.5" strokeDasharray="4 3" opacity="0.35"/>
    <line x1="30" y1="112" x2="470" y2="112" stroke="white" strokeWidth="0.8" opacity="0.5"/>
  </svg>
);

const UAESkyline = () => (
  <svg viewBox="0 0 500 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M238 112 L234 8 L242 2 L250 8 L246 112" stroke="white" strokeWidth="1.5" fill="none"/>
    <path d="M236 35 L248 35" stroke="white" strokeWidth="0.8"/>
    <path d="M235 55 L249 55" stroke="white" strokeWidth="0.8"/>
    <path d="M234 75 L250 75" stroke="white" strokeWidth="0.8"/>
    <path d="M234 90 L250 90" stroke="white" strokeWidth="0.8"/>
    <path d="M237 25 L247 25" stroke="white" strokeWidth="0.7"/>
    <path d="M239 15 L245 15" stroke="white" strokeWidth="0.7"/>
    <line x1="242" y1="2" x2="242" y2="-3" stroke="white" strokeWidth="1.2"/>
    <path d="M148 112 L148 32 L170 32 L170 112" stroke="white" strokeWidth="1.2" fill="none"/>
    <path d="M148 32 Q159 8 170 32" stroke="white" strokeWidth="1.2" fill="none"/>
    <path d="M150 55 Q159 40 168 55" stroke="white" strokeWidth="0.7" fill="none"/>
    <path d="M151 70 Q159 58 167 70" stroke="white" strokeWidth="0.7" fill="none"/>
    <line x1="159" y1="8" x2="159" y2="0" stroke="white" strokeWidth="1.2"/>
    <path d="M152 28 L166 28" stroke="white" strokeWidth="0.8"/>
    <ellipse cx="159" cy="28" rx="6" ry="2" stroke="white" strokeWidth="0.7" fill="none"/>
    <path d="M110 112 L108 45 L118 42 L122 112" stroke="white" strokeWidth="1" fill="none"/>
    <path d="M109 70 L121 68" stroke="white" strokeWidth="0.5"/>
    <path d="M108 85 L121 87" stroke="white" strokeWidth="0.5"/>
    <path d="M185 112 L185 40 L198 40 L198 112" stroke="white" strokeWidth="1.2" fill="none"/>
    <path d="M185 40 L191 30 L198 40" stroke="white" strokeWidth="1" fill="none"/>
    <path d="M186 60 L197 60" stroke="white" strokeWidth="0.5"/>
    <path d="M186 75 L197 75" stroke="white" strokeWidth="0.5"/>
    <path d="M186 90 L197 90" stroke="white" strokeWidth="0.5"/>
    <path d="M260 112 L260 38 L272 38 L272 112" stroke="white" strokeWidth="1.2" fill="none"/>
    <path d="M260 38 L266 25 L272 38" stroke="white" strokeWidth="1" fill="none"/>
    <line x1="266" y1="25" x2="266" y2="18" stroke="white" strokeWidth="1"/>
    <path d="M280 112 L280 50 L292 50 L292 112" stroke="white" strokeWidth="1" fill="none"/>
    <path d="M280 50 L286 38 L292 50" stroke="white" strokeWidth="0.8" fill="none"/>
    <line x1="286" y1="38" x2="286" y2="30" stroke="white" strokeWidth="0.8"/>
    <path d="M305 112 L305 45 L318 45 L318 112" stroke="white" strokeWidth="1.2" fill="none"/>
    <path d="M305 45 L311 32 L318 45" stroke="white" strokeWidth="1" fill="none"/>
    <path d="M330 112 L330 55 L342 55 L342 112" stroke="white" strokeWidth="1" fill="none"/>
    <path d="M330 55 L336 46 L342 55" stroke="white" strokeWidth="0.8" fill="none"/>
    <path d="M350 112 L350 65 L360 65 L360 112" stroke="white" strokeWidth="0.8" fill="none"/>
    <path d="M368 112 L368 72 L378 72 L378 112" stroke="white" strokeWidth="0.8" fill="none"/>
    <path d="M385 112 L385 60 L398 60 L398 112" stroke="white" strokeWidth="1" fill="none"/>
    <path d="M385 60 L391 48 L398 60" stroke="white" strokeWidth="0.8" fill="none"/>
    <path d="M405 112 L405 78 L415 78 L415 112" stroke="white" strokeWidth="0.8" fill="none"/>
    <path d="M75 112 L75 75 L90 75 L90 112" stroke="white" strokeWidth="0.8" fill="none"/>
    <path d="M55 112 L55 82 L70 82 L70 112" stroke="white" strokeWidth="0.8" fill="none"/>
    <path d="M88 112 L88 68 L100 68 L100 112" stroke="white" strokeWidth="0.8" fill="none"/>
    <path d="M130 115 Q140 110 150 115" stroke="white" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.5"/>
    <path d="M30 115 Q150 113 250 116 Q350 119 470 115" stroke="white" strokeWidth="0.5" strokeDasharray="4 3" opacity="0.35"/>
    <line x1="30" y1="112" x2="470" y2="112" stroke="white" strokeWidth="0.8" opacity="0.5"/>
  </svg>
);

const locations = [
  {
    country: 'INDIA',
    flag: '/images/footer/flag1.png',
    SkylineComponent: '/images/footer/india.svg',
    address: '214, giriraj nagar, Sumer Nagar, Mansarovar, Jaipur, Rajasthan 302020',
    phone: '+91 72402-47809'
  },
  {
    country: 'UK',
    flag: '/images/footer/flag2.png',
    SkylineComponent: '/images/footer/uk.svg',
    address: '275 New North Road Islington, London, N17AA united-kingdom',
    phone: '+44 70212-47809'
  },
  {
    country: 'UAE',
    flag: '/images/footer/flag3.png',
    SkylineComponent: '/images/footer/uae.svg',
    address: 'Parklane tower, 16th floor office 1616 Business Bay, Dubai',
    phone: '+971 54 508 7885'
  }
];

const InteractiveLetter = ({
  char,
  role,
  pos,
  img
}: {
  char: string;
  role: string;
  pos: 'top' | 'bottom';
  img: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="relative inline-block text-[#f5a623] cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {char}
      {hovered && (
        <div
          className={`absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white px-2 py-1 rounded-sm shadow-lg pointer-events-none whitespace-nowrap z-20 ${
            pos === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
          }`}
        >
          <img src={img} alt={role} className="w-4 h-4 rounded-full object-cover bg-slate-200" />
          <span className="text-[9px] md:text-[10px] text-black font-bold uppercase tracking-wider">{role}</span>
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 ${
              pos === 'top' ? '-bottom-1' : '-top-1'
            }`}
          />
        </div>
      )}
    </span>
  );
};

export default function Footer() {
  return (
    <footer className="bg-[#0b1727] pt-12 md:pt-16 font-sans border-t border-slate-800">

      {/* 1. LOCATIONS SECTION */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 mb-12 md:mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/50">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center px-4 sm:px-6 ${
                idx !== 0 ? 'pt-10 sm:pt-0' : ''
              } ${idx !== locations.length - 1 ? 'pb-10 sm:pb-0' : ''}`}
            >
              {/* Skyline */}
<div className="h-20 sm:h-24 md:h-28 mb-4 w-full max-w-[280px] sm:max-w-none flex justify-center items-end">
<Image
  src={loc.SkylineComponent}
  alt={`${loc.country} skyline`}
  width={300}
  height={120}
  className="max-h-full object-contain"
  style={{ width: 'auto' }}
/>
</div>
              {/* Divider */}
              <div className="w-24 sm:w-28 md:w-32 h-px bg-slate-700 mb-5 md:mb-6" />

              {/* Flag + Country */}
              <div className="flex items-center gap-2 sm:gap-3 mb-3 md:mb-4">
                <img
                  src={loc.flag}
                  alt={loc.country}
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full object-cover"
                />
                <h4 className="text-white font-bold tracking-widest text-xs sm:text-sm">
                  {loc.country}
                </h4>
              </div>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 md:mb-6 max-w-[220px] sm:max-w-[200px] md:max-w-[260px] lg:max-w-[280px]">
                {loc.address}
              </p>

              <button className="flex items-center gap-2 sm:gap-3 bg-[#1a2f4e]/40 hover:bg-[#1a2f4e] border border-slate-700/50 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full transition-colors duration-300">
                <Phone size={14} className="text-slate-300 flex-shrink-0" />
                <span className="font-medium text-xs sm:text-sm whitespace-nowrap">{loc.phone}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-800" />

      {/* 2. MAIN FOOTER LINKS */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-8">

          {/* Column 1: Brand */}
          <div className="flex flex-col items-start sm:col-span-2 lg:col-span-1">
            <img
              src="/images/footer/footer_logo.png"
              alt="Kotibox"
              className="h-10 md:h-12 mb-5 md:mb-6 object-contain"
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-6 md:mb-8 max-w-xs">
              We provide cutting-edge web and mobile app development services, enabling companies all over the world with technology, imagination, and dependable IT support.
            </p>
            <img
              src="/images/footer/si.jpg"
              alt="Certificate of Recognition"
              className="w-36 sm:w-40 md:w-48 border-4 border-white/10 rounded-sm"
            />
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Services</h4>
            <ul className="space-y-3 md:space-y-4 flex flex-col">
              {['Mobile Apps', 'Web Development', 'Digital Marketing', 'UI/UX Design', 'Game Development', 'Artificial Intelligence'].map((link) => (
                <a key={link} href="#" className="text-slate-400 hover:text-[#f5a623] text-sm font-medium transition-colors w-fit">
                  {link}
                </a>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Company</h4>
            <ul className="space-y-3 md:space-y-4 flex flex-col">
              {['About Us', 'Industries', 'Career', 'Portfolio', 'Live Demo', 'Hire Developers', 'Contact Us'].map((link) => (
                <a key={link} href="#" className="text-slate-400 hover:text-[#f5a623] text-sm font-medium transition-colors w-fit">
                  {link}
                </a>
              ))}
            </ul>
          </div>

          {/* Column 4: Social & Ventures */}
          <div>
            <h4 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Follow Us</h4>
            <div className="flex gap-2 sm:gap-3 mb-8 md:mb-10 flex-wrap">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#1a2f4e]/60 flex items-center justify-center text-slate-300 hover:bg-[#f5a623] hover:text-white transition-all flex-shrink-0"
                >
                  <Icon size={16} fill={i !== 3 ? "currentColor" : "none"} />
                </a>
              ))}
            </div>

            <h4 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Our Ventures</h4>
            <div className="flex gap-3 md:gap-4 flex-wrap">
              <div className="bg-white p-2 rounded-sm w-28 sm:w-28 md:w-32 h-14 md:h-16 flex items-center justify-center">
                <img src="/images/footer/logoksx.png" alt="Kotibox Skillx Academy" className="max-h-full object-contain" />
              </div>
              <div className="bg-white p-2 rounded-sm w-28 sm:w-28 md:w-32 h-14 md:h-16 flex items-center justify-center">
                <img src="/images/footer/logokp.png" alt="Kotibox Properties" className="max-h-full object-contain" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. INTERACTIVE LARGE TEXT SECTION */}
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 pt-6 md:pt-8 pb-8 md:pb-12 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <h1 className="w-max mx-auto text-2xl sm:text-3xl md:text-5xl lg:text-[4rem] xl:text-6xl font-bold text-white tracking-tight leading-loose whitespace-nowrap">
          <InteractiveLetter char="K" role="Strategist" pos="bottom" img="https://i.pravatar.cc/100?img=11" />
          OTIBOX{' '}
          <InteractiveLetter char="G" role="Manager" pos="top" img="https://i.pravatar.cc/100?img=32" />
          LOBAL{' '}
          <InteractiveLetter char="T" role="Designer" pos="bottom" img="https://i.pravatar.cc/100?img=47" />
          ECHNOLOG
          <InteractiveLetter char="I" role="Developer" pos="top" img="https://i.pravatar.cc/100?img=15" />
          ES (OPC){' '}
          <InteractiveLetter char="P" role="Marketer" pos="bottom" img="https://i.pravatar.cc/100?img=5" />
          VT L
          <InteractiveLetter char="T" role="Investor" pos="top" img="https://i.pravatar.cc/100?img=68" />
          D
        </h1>
      </div>

      <hr className="border-slate-800/60" />

      {/* COPYRIGHT BAR */}
      <div className="text-center py-5 md:py-6 px-4">
        <p className="text-slate-500 text-xs sm:text-sm">
          Â© {new Date().getFullYear()} Kotibox. All rights reserved.
        </p>
      </div>

    </footer>
  );
}