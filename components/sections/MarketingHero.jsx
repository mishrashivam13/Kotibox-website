import React from 'react';
import { 
  TrendingUp, 
  MessageCircle, 
  Camera 
} from 'lucide-react';

// Custom SVG Components for Brand Icons (Since Lucide removed them)
const Facebook = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function MarketingHero() {
  return (
    <section className="relative bg-[#0b1727] min-h-screen py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans flex items-center">
      
      {/* Subtle Background Glow/Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="flex flex-col items-start text-left max-w-2xl">
          
          {/* Subtitle */}
          <div className="flex items-center gap-2 text-[#a3e635] mb-6 font-semibold tracking-[0.2em] uppercase text-sm md:text-base">
            <TrendingUp size={24} strokeWidth={2} />
            Premium Marketing Solutions
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
            Your One-Stop Marketing <br className="hidden md:block" />
            Agency for <span className="text-[#f5a623]">Complete 360° Brand <br className="hidden md:block" /> Growth</span>
          </h1>
          
          {/* CTA Button */}
          <button className="bg-[#f5a623] hover:bg-[#e0931c] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-[0_8px_20px_rgba(245,166,35,0.3)] hover:shadow-[0_10px_25px_rgba(245,166,35,0.4)] transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            Let's Start Your Marketing Journey Together
          </button>

        </div>

        {/* RIGHT COLUMN: Visual Composition */}
        <div className="relative w-full max-w-[600px] mx-auto aspect-square flex items-center justify-center mt-10 lg:mt-0">
          
          {/* Main Background Circles */}
          <div className="absolute inset-0 bg-white rounded-full shadow-2xl scale-95"></div>
          <div className="absolute inset-4 bg-[#fde047] rounded-full overflow-hidden flex items-end justify-center">
            {/* Main Woman Image - Replace src with your actual image path */}
            <img 
              src="https://img.magnific.com/free-photo/cute-freelance-girl-using-laptop-sitting-floor-smiling_176420-20221.jpg?semt=ais_hybrid&w=740&q=80" 
              alt="Marketing Professional using phone" 
              className="h-[100%] w-auto object-cover object-bottom"
            />
            
            {/* Tech Overlay lines (Simulated with CSS gradient) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] pointer-events-none"></div>
          </div>

          {/* Floating Social Media Icons */}
          
          {/* LinkedIn */}
          <div className="absolute top-[20%] left-[-2%] bg-[#0077b5] p-3 rounded-full text-white shadow-xl animate-[bounce_4s_infinite] flex items-center justify-center">
            <Linkedin size={24} />
          </div>

          {/* WhatsApp (Green) */}
          <div className="absolute top-[5%] right-[10%] bg-[#25D366] p-3 rounded-full text-white shadow-xl animate-[bounce_5s_infinite_0.5s] flex items-center justify-center">
            <MessageCircle size={28} strokeWidth={2} />
          </div>

          {/* Pinterest (Red) */}
          <div className="absolute top-[40%] right-[-5%] bg-[#E60023] p-3 rounded-full text-white shadow-xl animate-[bounce_4.5s_infinite_1s] flex items-center justify-center">
            <Camera size={24} strokeWidth={2} /> 
          </div>

          {/* Facebook */}
          <div className="absolute bottom-[20%] right-[5%] bg-[#1877F2] p-3.5 rounded-full text-white shadow-xl animate-[bounce_6s_infinite_1.5s] flex items-center justify-center">
            <Facebook size={26} />
          </div>

          {/* Instagram */}
          <div className="absolute bottom-[40%] left-[-5%] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-3 rounded-full text-white shadow-xl animate-[bounce_5s_infinite_0.8s] flex items-center justify-center">
            <Instagram size={24} />
          </div>

          {/* Floating Stats Card */}
          <div className="absolute bottom-[-5%] left-[5%] bg-white rounded-2xl p-4 md:p-5 shadow-2xl flex flex-col items-center justify-center gap-2 w-40 md:w-48 animate-[pulse_4s_infinite]">
            
            {/* Custom SVG Donut Chart */}
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                {/* Background Track */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#f1f5f9"
                  strokeWidth="4"
                />
                {/* Turquoise Segment (35%) */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#2dd4bf"
                  strokeWidth="4"
                  strokeDasharray="35, 100"
                />
                {/* Blue Segment (65%) */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="4"
                  strokeDasharray="65, 100"
                  strokeDashoffset="-35"
                />
              </svg>
              {/* Chart Inner Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-sm md:text-base font-bold text-slate-800 leading-none">491K</span>
                <span className="text-[8px] md:text-[10px] text-slate-500 font-medium text-center leading-tight mt-1">Total <br/> Audience</span>
              </div>
            </div>

            {/* Label marks */}
            <div className="flex justify-between w-full px-2 mt-1">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div>
                <span className="text-[10px] font-bold text-slate-600">65%</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#2dd4bf]"></div>
                <span className="text-[10px] font-bold text-slate-600">35%</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}