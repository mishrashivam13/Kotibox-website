'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const stats = [
  { label: 'Total Pages', value: '12', icon: '📄' },
  { label: 'Services', value: '6', icon: '⚙️' },
  { label: 'Products', value: '4', icon: '📦' },
  { label: 'Case Studies', value: '5', icon: '📊' },
]

const quickLinks = [
  { label: 'Home Page', href: '/', desc: 'View public homepage' },
  { label: 'About Page', href: '/about', desc: 'Company info & team' },
  { label: 'Career Page', href: '/career', desc: 'Job listings' },
  { label: 'Live Demo', href: '/live-demo', desc: 'Product demos' },
]

export default function AdminDashboardClient() {
  const router = useRouter()
  const [loggingOut, setLoggingOut] = useState(false)

  async function handleLogout() {
    setLoggingOut(true)
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Nav */}
      <header className="bg-[#0a1628] text-white px-6 py-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#f5a623] flex items-center justify-center text-[#0a1628] font-bold text-sm">
            A
          </div>
          <div>
            <p className="font-bold text-sm leading-none">Admin Panel</p>
            <p className="text-xs text-gray-400 mt-0.5">Kotibox Global Technologies</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors disabled:opacity-60"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16,17 21,12 16,7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          {loggingOut ? 'Logging out...' : 'Logout'}
        </button>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#0a1628]">Dashboard</h1>
          <p className="text-gray-500 mt-1">Welcome back, Admin</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map(stat => (
            <div key={stat.label} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <p className="text-2xl font-bold text-[#0a1628]">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <h2 className="text-lg font-semibold text-[#0a1628] mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quickLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-[#f5a623] hover:bg-amber-50 transition-all group"
              >
                <div>
                  <p className="font-medium text-[#0a1628] text-sm">{link.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{link.desc}</p>
                </div>
                <svg className="text-gray-400 group-hover:text-[#f5a623] transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15,3 21,3 21,9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
          <svg className="text-blue-500 mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p className="text-sm text-blue-700">
            More management features can be added here — content editing, contact form submissions, blog posts, etc.
          </p>
        </div>
      </main>
    </div>
  )
}
