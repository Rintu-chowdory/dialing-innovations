import React, { useState } from 'react'
import { Mail, Phone, Users, Mic, RotateCw } from 'lucide-react'

export default function Settings() {
  const [greetingMessage, setGreetingMessage] = useState('')

  const settings = [
    {
      id: 'gmail',
      title: 'Gmail Lead Capture',
      icon: Mail,
      iconBgColor: 'bg-teal-500/20',
      iconColor: 'text-teal-400',
      description: 'Incoming emails are automatically captured as leads in the Gmail Leads list.',
      content: (
        <div className="bg-green-500/10 border border-green-500/30 rounded p-4">
          <p className="text-green-400 text-sm">
            <span className="font-semibold">Gmail Connected & Active</span> - New emails will be automatically added to your Gmail Leads list.
          </p>
        </div>
      ),
    },
    {
      id: 'phone',
      title: 'Phone Numbers',
      icon: Phone,
      iconBgColor: 'bg-orange-500/20',
      iconColor: 'text-orange-400',
      description: 'Manage Telnyx phone numbers, routing, and call recording.',
      showSync: true,
      content: (
        <div className="text-gray-400 text-sm">
          <p>No phone numbers found. Click Sync to load from Telnyx.</p>
        </div>
      ),
    },
    {
      id: 'agents',
      title: 'Agent Management',
      icon: Users,
      iconBgColor: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
      description: 'Invite new agents and manage roles.',
      content: (
        <div className="space-y-3">
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter agent email..."
              className="flex-1 bg-[#0d1420] border border-[#1a2535] rounded px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f97316]"
            />
            <button className="bg-[#f97316] hover:bg-orange-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
              Invite
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 'greeting',
      title: 'Inbound Call Greeting',
      icon: Mic,
      iconBgColor: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
      description: 'This message is read to callers via WellSaid Labs AI voice when they are being connected to an agent.',
      content: (
        <div className="space-y-4">
          <div className="bg-[#0d1420] border border-[#1a2535] rounded p-3">
            <p className="text-xs text-gray-400">
              Could not load voices — <span className="text-gray-300">WELLSAID_API_KEY</span> may not be configured. Using speaker ID: 3
            </p>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-2">Greeting Message</label>
            <textarea
              value={greetingMessage}
              onChange={(e) => setGreetingMessage(e.target.value)}
              placeholder="Enter your greeting message..."
              className="w-full bg-[#0d1420] border border-[#1a2535] rounded px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f97316] h-24 resize-none"
            />
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Settings</h1>
      </div>

      {/* Settings Cards */}
      <div className="space-y-4">
        {settings.map((setting) => {
          const Icon = setting.icon
          return (
            <div key={setting.id} className="bg-[#111827] border border-[#1a2535] rounded-lg p-6">
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className={`${setting.iconBgColor} p-3 rounded-lg`}>
                    <Icon className={`w-6 h-6 ${setting.iconColor}`} />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white mb-1">{setting.title}</h2>
                    <p className="text-sm text-gray-400">{setting.description}</p>
                  </div>
                </div>
                {setting.showSync && (
                  <button className="flex items-center gap-2 px-3 py-2 text-sm text-white bg-[#0d1420] border border-[#1a2535] rounded hover:bg-[#1a2535] transition-colors">
                    <RotateCw className="w-4 h-4" />
                    Sync
                  </button>
                )}
              </div>

              {/* Card Content */}
              {setting.content}
            </div>
          )
        })}
      </div>
    </div>
  )
}
