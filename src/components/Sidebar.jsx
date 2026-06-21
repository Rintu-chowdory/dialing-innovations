import React from 'react'
import { Phone, FileText, Users, MessageSquare, BarChart3, Settings, Lock, FileCheck } from 'lucide-react'

export default function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Phone },
    { id: 'call-logs', label: 'Call Logs', icon: FileText },
    { id: 'contacts', label: 'Contacts', icon: Users },
    { id: 'voicemail', label: 'Voicemail', icon: MessageSquare },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ]

  const bottomItems = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'datenschutz', label: 'Datenschutz', icon: Lock },
    { id: 'impressum', label: 'Impressum', icon: FileCheck },
  ]

  return (
    <div className="w-64 bg-black border-r border-gray-800 p-6 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Phone className="w-8 h-8 text-blue-600" />
          <span>Dialing</span>
        </h1>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const IconComponent = item.icon
          const isActive = activePage === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-900'
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="pt-6 border-t border-gray-800 space-y-2">
        {bottomItems.map((item) => {
          const IconComponent = item.icon
          const isActive = activePage === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-900'
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          )
        })}
        <p className="text-xs text-gray-500 pt-4">© 2024 Dialing Innovations</p>
      </div>
    </div>
  )
}
