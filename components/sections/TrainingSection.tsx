'use client'
import React from 'react';
import { useModal } from '@/components/providers/ModalContext';
import { 
  Briefcase, 
  Users, 
  Award, 
  MonitorPlay, 
  BrainCircuit, 
  Check, 
  ArrowRight 
} from 'lucide-react';

// Data for the right side cards
const trainingFeatures = [
  {
    id: 'ai-training',
    icon: BrainCircuit,
    title: 'AI Training & Certification',
    description: 'Master practical AI implementation with hands-on projects, prompt engineering, and modern LLM workflows.',
    list: ['Generative AI tools', 'Prompt Engineering', 'AI automation workflows']
  },
  {
    id: 'placement',
    icon: Briefcase,
    title: 'Placement Support',
    description: 'Get 100% placement assistance with resume building, mock interviews, and referrals.',
    list: ['Resume building', 'Mock interviews', 'Direct company referrals']
  },
  {
    id: 'hiring-partners',
    icon: Users,
    title: '50+ Hiring Partners',
    description: 'Trusted by leading companies who actively recruit from our talent pool.',
    list: ['Leading IT companies', 'Regular hiring drives', 'Industry connections']
  },
  {
    id: 'certificates',
    icon: Award,
    title: 'Industry Certificates',
    description: 'Earn recognized certificates upon completion that add value to your resume.',
    list: ['Globally recognized', 'Resume booster', 'Skill validation']
  },
  {
    id: 'mentors',
    icon: MonitorPlay,
    title: 'Expert Mentors',
    description: 'Learn from industry professionals with years of practical experience.',
    list: ['1:1 mentorship', 'Career guidance', 'Hands-on training']
  }
];

export default function TrainingSection() {
  const { openModal } = useModal()
  return (
    <section className="bg-white py-14 md:py-24 px-4 md:px-8 lg:px-16 font-sans w-full relative">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        
        {/* LEFT COLUMN: Sticky Content */}
        <div className="w-full lg:w-[45%] lg:sticky lg:top-32 flex flex-col items-start">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] leading-snug mb-4 sm:mb-6">
            Transform Your <br />
            <span className="text-[#f5a623] relative inline-block">
              Career
              {/* Subtle underline matching screenshot */}
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#f5a623] rounded-full"></span>
            </span> with <br />
            Premium Training <br />
            Programs
          </h2>
          
          <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-md">
            Bridge the gap between knowledge and industry demands with hands-on training, expert mentorship, and career-focused guidance designed to help you achieve lasting success.
          </p>

          {/* Image CTA Card matching screenshot */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group">
            {/* Background Image (Library/Books pattern) */}
            <img 
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800" 
              alt="Library Background" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Deep Blue Overlay */}
            <div className="absolute inset-0 bg-[#2b4c65]/90 mix-blend-multiply"></div>
            
            {/* Card Content */}
            <div className="relative z-10 p-8 flex flex-col items-start">
              <h3 className="text-2xl font-bold text-white mb-4 relative inline-block">
                Guided by Expert Mentors
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#f5a623] rounded-full"></span>
              </h3>
              
              <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8">
                Learn directly from experienced professionals who provide insights, feedback, and career guidance.
              </p>
              
              <button onClick={openModal} className="bg-[#f5a623] hover:bg-[#e0931c] text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-300 shadow-lg cursor-pointer">
                Book 30 Min Consultation
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Scrollable Features List */}
        <div className="w-full lg:w-[55%] flex flex-col gap-6">
          {trainingFeatures.map((feature) => {
            const IconComponent = feature.icon;
            
            return (
              <div 
                key={feature.id}
                className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-8 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow duration-300 hover:border-slate-300"
              >
                {/* Icon Box */}
                <div className="shrink-0 w-14 h-14 bg-[#fef3c7] rounded-xl flex items-center justify-center">
                  <IconComponent size={28} className="text-[#f5a623]" strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* List Items */}
                  <ul className="space-y-3">
                    {feature.list.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1">
                          <Check size={16} strokeWidth={3} className="text-[#f5a623]" />
                        </div>
                        <span className="text-slate-700 text-sm font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}