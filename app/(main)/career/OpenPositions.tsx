'use client'
import { useState } from 'react'
import { MapPin, Briefcase } from 'lucide-react'

const jobs = [
  { id: 1, category: 'Development', title: 'Senior Frontend Developer', location: 'Onsite', type: 'Full-time', description: 'Looking for experienced frontend developer with React expertise.' },
  { id: 2, category: 'Development', title: 'Backend Engineer', location: 'Onsite', type: 'Full-time', description: 'Build scalable backend systems with Node.js and cloud infrastructure.' },
  { id: 3, category: 'Design', title: 'UI/UX Designer', location: 'Onsite', type: 'Full-time', description: 'Create intuitive interfaces and user experiences for our clients.' },
  { id: 4, category: 'Design', title: 'Graphic Designer', location: 'Onsite', type: 'Full-time', description: 'Design marketing materials, social media creatives, and brand assets.' },
  { id: 5, category: 'Marketing', title: 'Digital Marketing Specialist', location: 'Onsite', type: 'Full-time', description: 'Drive our digital campaigns and brand growth across online platforms.' },
  { id: 6, category: 'Marketing', title: 'SEO Analyst', location: 'Onsite', type: 'Full-time', description: 'Optimize content and website ranking through modern SEO strategies.' },
  { id: 7, category: 'Operations', title: 'Project Manager', location: 'Onsite', type: 'Full-time', description: 'Coordinate and deliver successful projects for clients.' },
  { id: 8, category: 'Operations', title: 'HR Coordinator', location: 'Onsite', type: 'Full-time', description: 'Assist with recruitment, onboarding, and employee engagement.' },
]

const filters = ['All', 'Development', 'Design', 'Marketing', 'Operations']

export default function OpenPositions() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? jobs
    : jobs.filter(j => j.category === active)

  return (
    <section className="bg-[#fdf8f3] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] mb-4">
            Open Positions
          </h2>
          <div className="w-20 h-1 bg-[#f5a623] rounded-full mx-auto mb-6" />
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Explore our current job openings and find where you fit in our growing team
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold 
                         transition-all duration-200
                         ${active === filter
                           ? 'bg-[#0a1f3c] text-white shadow-md'
                           : 'bg-white text-[#0a1628] border border-gray-200 hover:border-[#f5a623] hover:text-[#f5a623]'
                         }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl p-6 border border-gray-100
                         hover:shadow-lg hover:-translate-y-1 
                         transition-all duration-300 flex flex-col"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="px-3 py-1 rounded-full bg-[#f5a623] 
                                 text-white text-xs font-bold">
                  {job.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-extrabold text-[#0a1628] mb-3">
                {job.title}
              </h3>

              {/* Location + Type */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <MapPin size={12} />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <Briefcase size={12} />
                  <span>{job.type}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
                {job.description}
              </p>

              {/* Apply Button */}
              <button className="text-[#f5a623] text-sm font-bold 
                                 hover:text-[#e8950f] transition-colors
                                 text-center">
                Apply Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}