import React from 'react'
import { Search, Bell, Headphones } from 'lucide-react'

const titles = {
  dashboard: 'Call Center Dashboard',
  'call-logs': 'Call History',
  contacts: 'Lead Management',
  voicemail: 'Voicemail',
  analytics: 'Messaging',
  settings: 'Settings',
  datenschutz: 'Datenschutz',
  impressum: 'Impressum',
}

export default function Topbar({ activePage }) {
  const today = new Date().toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <header className="h-16 shrink-0 bg-surface/80 backdrop-blur border-b border-line flex items-center justify-between px-6 gap-4">
      <div className="min-w-0">
        <h2 className="text-sm font-semibold text-white truncate">{titles[activePage] || 'Dashboard'}</h2>
        <p className="text-[11px] text-gray-500 hidden sm:block">{today}</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text" placeholder="Search calls, leads, agents…"
            className="input !w-64 !py-2 !pl-9"
          />
        </div>

        <button className="relative w-9 h-9 rounded-xl bg-surface2 border border-line flex items-center justify-center text-gray-400 hover:text-white hover:border-accent/40 transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-danger animate-pulse-soft" />
        </button>

        <div className="hidden sm:flex items-center gap-2.5 pl-3 border-l border-line">
          <div className="w-9 h-9 rounded-xl bg-accent/15 flex items-center justify-center">
            <Headphones className="w-4 h-4 text-accent-soft" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-medium text-white">Sabine Krüger</p>
            <p className="text-[11px] text-success flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-soft" /> Online
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
