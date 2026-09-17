import React from 'react'
import { PhoneCall, FileText, Users, MessageSquare, BarChart3, Settings, Lock, FileCheck, ChevronRight } from 'lucide-react'

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: PhoneCall },
  { id: 'call-logs', label: 'Call Logs', icon: FileText },
  { id: 'contacts', label: 'Leads', icon: Users },
  { id: 'voicemail', label: 'Voicemail', icon: MessageSquare },
  { id: 'analytics', label: 'Messaging', icon: BarChart3 },
]
const bottomItems = [
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'datenschutz', label: 'Datenschutz', icon: Lock },
  { id: 'impressum', label: 'Impressum', icon: FileCheck },
]

export default function Sidebar({ activePage, setActivePage }) {
  const Item = ({ item }) => {
    const isActive = activePage === item.id
    const Icon = item.icon
    return (
      <button
        onClick={() => setActivePage(item.id)}
        className={`group relative w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-150 ${
          isActive ? 'bg-accent/15 text-white' : 'text-gray-400 hover:text-white hover:bg-surface2'
        }`}
      >
        {isActive && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r bg-gradient-to-b from-accent-soft to-cyanx" />}
        <Icon className={`w-[18px] h-[18px] ${isActive ? 'text-accent-soft' : 'group-hover:text-accent-soft transition-colors'}`} />
        <span className="font-medium">{item.label}</span>
        {isActive && <ChevronRight className="w-4 h-4 ml-auto text-accent-soft/60" />}
      </button>
    )
  }

  return (
    <aside className="w-64 shrink-0 bg-surface border-r border-line flex flex-col h-full">
      <div className="px-6 pt-7 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-cyanx flex items-center justify-center shadow-glow-sm">
            <PhoneCall className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-extrabold tracking-tight leading-none">
              Dialing<span className="gradient-text">Innovations</span>
            </h1>
            <p className="text-[11px] text-gray-500 mt-1">Cloud Contact Center</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => <Item key={item.id} item={item} />)}
      </nav>

      <div className="px-3 pb-4 space-y-1 border-t border-line pt-4">
        {bottomItems.map((item) => <Item key={item.id} item={item} />)}
        <p className="text-[11px] text-gray-600 text-center pt-3">© 2026 Dialing Innovations</p>
      </div>
    </aside>
  )
}
