import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { LayoutDashboard, Phone, MessageSquare, Users, Mail, Settings, LogOut } from 'lucide-react'

export default function Sidebar() {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/call-history', label: 'Call History', icon: Phone },
    { path: '/messaging', label: 'Messaging', icon: MessageSquare },
    { path: '/leads', label: 'Leads', icon: Users },
    { path: '/voicemails', label: 'Voicemails', icon: Mail },
    { path: '/settings', label: 'Settings', icon: Settings },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className="w-52 bg-[#0a1020] border-r border-[#1a2535] flex flex-col h-screen">
      {/* Logo */}
      <div className="p-4 border-b border-[#1a2535]">
        <div className="flex items-center gap-2 mb-2">
          <Phone className="w-6 h-6 text-[#f97316]" />
          <div className="text-sm font-semibold">
            <span className="text-[#f97316]">DIALING</span>
            <br />
            <span className="text-white">INNOVATIONS</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.path)
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                active
                  ? 'bg-[#f97316] text-white'
                  : 'text-gray-300 hover:bg-[#111827]'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* User Footer */}
      <div className="p-4 border-t border-[#1a2535]">
        <div className="mb-3">
          <p className="text-sm font-medium text-white">Rintu Chowdory</p>
          <p className="text-xs text-gray-400">User</p>
        </div>
        <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:bg-[#111827] rounded-lg transition-colors">
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  )
}
