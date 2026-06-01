'use client'
import { useState } from 'react'
import { FileText, Phone, ClipboardList, Users, Handshake } from 'lucide-react'

const steps = [
  {
    num: 1,
    Icon: FileText,
    title: 'Application Review',
    description: 'Submit your application through our portal. Our hiring team reviews each application personally within 3 business days.',
    duration: '1-3 days',
    tip: '💡 Pro tip: Tailor your resume to highlight relevant skills for the role',
  },
  {
    num: 2,
    Icon: Phone,
    title: 'Initial Screening',
    description: 'A 30-minute call with our HR team to discuss your experience, skills, and career aspirations.',
    duration: '30 minutes',
    tip: null,
  },
  {
    num: 3,
    Icon: ClipboardList,
    title: 'Skills Assessment',
    description: "Complete a practical task that simulates real work you'd do on the job. We respect your time with reasonable tasks.",
    duration: '2-4 hours',
    tip: '💡 Pro tip: Focus on quality over speed and document your thought process',
  },
  {
    num: 4,
    Icon: Users,
    title: 'Team Interviews',
    description: 'Meet with team members and leaders through 2-3 interviews focusing on technical skills and culture fit.',
    duration: '2-3 hours',
    tip: '💡 Pro tip: Be prepared to discuss both technical challenges and teamwork experiences.',
  },
  {
    num: 5,
    Icon: Handshake,
    title: 'Offer & Onboarding',
    description: 'Successful candidates receive an offer within 2 business days, followed by our comprehensive onboarding process.',
    duration: '1-2 days',
    tip: null,
  },
]

export default function HiringProcess() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="bg-[#f5f7fa] py-24 px-6 font-sans overflow-hidden">
      <div className="max-w-[1300px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] mb-6">
            Our Hiring Process
          </h2>
          <div className="w-20 h-1 bg-[#f5a623] rounded-full mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We've designed a transparent, efficient process that respects your 
            time while ensuring we find the perfect match for our team
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 mb-16">
          {steps.map((step) => (
            <div
              key={step.num}
              onMouseEnter={() => setHoveredId(step.num)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative flex flex-col items-center text-center px-2 cursor-default group"
            >
              
              {/* Icon Circle with number badge */}
              <div className="relative mb-8 mt-4">
                
                {/* Main Icon Circle */}
                <div className={`w-[85px] h-[85px] rounded-full border-[3px] border-[#f5a623] 
                                flex items-center justify-center transition-all duration-300 shadow-sm
                                ${hoveredId === step.num ? 'bg-[#214358]' : 'bg-white'}`}>
                  <step.Icon
                    size={36}
                    strokeWidth={1.5}
                    className={`transition-colors duration-300
                               ${hoveredId === step.num ? 'text-white' : 'text-[#214358]'}`}
                  />
                </div>
                
                {/* Number Badge */}
                <div className={`absolute -top-1 -right-2 w-8 h-8 rounded-full 
                                flex items-center justify-center text-sm font-bold shadow-md
                                transition-colors duration-300
                                ${hoveredId === step.num ? 'bg-[#f5a623] text-white' : 'bg-[#214358] text-white'}`}>
                  {step.num}
                </div>

              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-[#0a1628] mb-3">
                {step.title}
              </h3>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Duration & Tip Wrapper (Fixed min-height to prevent layout shifts) */}
              <div className="relative w-full flex flex-col items-center mt-auto min-h-[120px]">
                
                {/* Duration Badge */}
                <div className="px-5 py-2 bg-white rounded-full text-[13px] font-bold text-[#0a1628] shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 z-10">
                  {step.duration}
                </div>

                {/* Hover Tip (Absolute positioned below the duration) */}
                {step.tip && (
                  <div className={`absolute top-12 w-[110%] bg-[#214358] text-white text-[13px] p-4 rounded-xl shadow-xl leading-relaxed z-20 
                                  transition-all duration-300 ease-out pointer-events-none
                                  ${hoveredId === step.num ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-3 invisible'}`}>
                    {step.tip}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* BOTTOM STATS BANNER */}
        <div className="mt-10 bg-[#2b4d66] rounded-[2rem] py-14 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl">
          
          <div className="text-center mb-10 md:mb-0">
            <div className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">97%</div>
            <div className="text-white/90 font-medium text-lg">Candidate Satisfaction</div>
          </div>
          
          <div className="hidden md:block w-px h-24 bg-white/10"></div>
          
          <div className="text-center mb-10 md:mb-0">
            <div className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">14 days</div>
            <div className="text-white/90 font-medium text-lg">Average Hiring Time</div>
          </div>
          
          <div className="hidden md:block w-px h-24 bg-white/10"></div>

          <div className="text-center">
            <div className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">95%</div>
            <div className="text-white/90 font-medium text-lg">Offer Acceptance Rate</div>
          </div>

        </div>

      </div>
    </section>
  )
}