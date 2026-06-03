'use client'
import { useState, useRef } from 'react'
import { MapPin, Briefcase, X, Upload, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react'

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

type Job = typeof jobs[0]

type FormData = {
  name: string
  email: string
  phone: string
  experience: string
  currentRole: string
  portfolio: string
  coverLetter: string
  resume: File | null
}

const emptyForm: FormData = {
  name: '',
  email: '',
  phone: '',
  experience: '',
  currentRole: '',
  portfolio: '',
  coverLetter: '',
  resume: null,
}

// ── Apply Modal ──────────────────────────────────────────────────────────────

function ApplyModal({ job, onClose }: { job: Job; onClose: () => void }) {
  const [form, setForm] = useState<FormData>(emptyForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const set = (key: keyof FormData, value: string) =>
    setForm(prev => ({ ...prev, [key]: value }))

  const handleFile = (file: File | null) => {
    if (!file) return
    const allowed = ['application/pdf', 'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (allowed.includes(file.type)) setForm(prev => ({ ...prev, resume: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1400))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(10,22,40,0.65)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">

        {/* ── Header ── */}
        <div className="flex items-start justify-between px-7 pt-6 pb-5 border-b border-gray-100 flex-shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-black px-2.5 py-1 rounded-full text-white bg-[#f5a623]">
                {job.category}
              </span>
              <span className="flex items-center gap-1 text-gray-400 text-xs">
                <MapPin size={11} /> {job.location}
              </span>
              <span className="flex items-center gap-1 text-gray-400 text-xs">
                <Briefcase size={11} /> {job.type}
              </span>
            </div>
            <h2 className="text-xl font-black text-[#0a1628]">Apply — {job.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0 mt-0.5"
          >
            <X size={15} className="text-gray-500" />
          </button>
        </div>

        {/* ── Body ── */}
        <div className="overflow-y-auto flex-1 px-7 py-6">
          {submitted ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                <CheckCircle2 size={32} className="text-green-500" />
              </div>
              <h3 className="text-xl font-black text-[#0a1628] mb-2">Application Submitted!</h3>
              <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-6">
                Thanks <strong>{form.name}</strong>! We've received your application for{' '}
                <strong>{job.title}</strong>. Our team will review it and get back to you within
                3–5 business days.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#0a1628] text-white text-sm font-bold hover:bg-[#0a1628]/90 transition-all"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Row 1 — Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0a1628] mb-1.5">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Rahul Sharma"
                    value={form.name}
                    onChange={e => set('name', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-[#f5a623] focus:ring-2 focus:ring-[#f5a623]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0a1628] mb-1.5">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="rahul@email.com"
                    value={form.email}
                    onChange={e => set('email', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-[#f5a623] focus:ring-2 focus:ring-[#f5a623]/20 transition-all"
                  />
                </div>
              </div>

              {/* Row 2 — Phone + Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0a1628] mb-1.5">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={e => set('phone', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-[#f5a623] focus:ring-2 focus:ring-[#f5a623]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0a1628] mb-1.5">
                    Years of Experience <span className="text-red-400">*</span>
                  </label>
                  <select
                    required
                    value={form.experience}
                    onChange={e => set('experience', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#0a1628] focus:outline-none focus:border-[#f5a623] focus:ring-2 focus:ring-[#f5a623]/20 transition-all bg-white"
                  >
                    <option value="" disabled>Select experience</option>
                    <option>0–1 year (Fresher)</option>
                    <option>1–2 years</option>
                    <option>2–4 years</option>
                    <option>4–6 years</option>
                    <option>6–10 years</option>
                    <option>10+ years</option>
                  </select>
                </div>
              </div>

              {/* Current Role */}
              <div>
                <label className="block text-xs font-bold text-[#0a1628] mb-1.5">
                  Current Job Title / Company
                </label>
                <input
                  type="text"
                  placeholder="e.g. Frontend Developer at Infosys"
                  value={form.currentRole}
                  onChange={e => set('currentRole', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-[#f5a623] focus:ring-2 focus:ring-[#f5a623]/20 transition-all"
                />
              </div>

              {/* Portfolio / LinkedIn */}
              <div>
                <label className="block text-xs font-bold text-[#0a1628] mb-1.5">
                  Portfolio / LinkedIn / GitHub URL
                </label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={form.portfolio}
                  onChange={e => set('portfolio', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-[#f5a623] focus:ring-2 focus:ring-[#f5a623]/20 transition-all"
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-xs font-bold text-[#0a1628] mb-1.5">
                  Resume / CV <span className="text-red-400">*</span>
                  <span className="text-gray-400 font-normal ml-1">(PDF or Word, max 5 MB)</span>
                </label>
                <div
                  className={`relative border-2 border-dashed rounded-2xl px-5 py-6 text-center cursor-pointer transition-all ${
                    dragOver
                      ? 'border-[#f5a623] bg-[#f5a623]/5'
                      : form.resume
                      ? 'border-green-400 bg-green-50'
                      : 'border-gray-200 hover:border-[#f5a623] hover:bg-[#f5a623]/5'
                  }`}
                  onClick={() => fileRef.current?.click()}
                  onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={e => { e.preventDefault(); setDragOver(false); handleFile(e.dataTransfer.files[0]) }}
                >
                  <input
                    ref={fileRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={e => handleFile(e.target.files?.[0] ?? null)}
                    required={!form.resume}
                  />
                  {form.resume ? (
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 size={18} className="text-green-500" />
                      <span className="text-sm font-semibold text-green-700">{form.resume.name}</span>
                      <button
                        type="button"
                        onClick={e => { e.stopPropagation(); setForm(prev => ({ ...prev, resume: null })) }}
                        className="ml-1 text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-1.5">
                      <Upload size={22} className="text-gray-300" />
                      <p className="text-sm text-gray-400">
                        <span className="font-semibold text-[#f5a623]">Click to upload</span> or drag & drop
                      </p>
                      <p className="text-[11px] text-gray-300">PDF, DOC, DOCX up to 5 MB</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <label className="block text-xs font-bold text-[#0a1628] mb-1.5">
                  Why do you want to join Kotibox?
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us briefly why you're excited about this role and what you'd bring to the team..."
                  value={form.coverLetter}
                  onChange={e => set('coverLetter', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-[#f5a623] focus:ring-2 focus:ring-[#f5a623]/20 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0a1628] text-white text-sm font-bold hover:bg-[#0a1628]/90 transition-all disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight size={15} />
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-gray-400">
                By submitting, you agree to our{' '}
                <span className="text-[#f5a623] cursor-pointer hover:underline">Privacy Policy</span>.
                We typically respond within 3–5 business days.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Open Positions Section ───────────────────────────────────────────────────

export default function OpenPositions() {
  const [active, setActive] = useState('All')
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  const filtered = active === 'All' ? jobs : jobs.filter(j => j.category === active)

  return (
    <>
      <section className="bg-[#fdf8f3] py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-4">
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
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === filter
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
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#f5a623] text-white text-xs font-bold">
                    {job.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#0a1628] mb-3">{job.title}</h3>

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
                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full py-2.5 rounded-xl bg-[#0a1628] text-white text-sm font-bold hover:bg-[#f5a623] hover:text-[#0a1628] transition-all duration-200"
                >
                  Apply Now →
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Apply Modal */}
      {selectedJob && (
        <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </>
  )
}
