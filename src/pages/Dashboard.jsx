import React from 'react'
import { Phone, CheckCircle, XCircle, Clock } from 'lucide-react'

export default function Dashboard() {
  const metrics = [
    { label: 'Total Calls', value: '0', icon: Phone, iconColor: 'text-[#f97316]' },
    { label: 'Completed', value: '0', icon: CheckCircle, iconColor: 'text-green-500' },
    { label: 'Missed', value: '0', icon: XCircle, iconColor: 'text-red-500' },
    { label: 'Avg Duration', value: '0m 0s', icon: Clock, iconColor: 'text-yellow-500' },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Call Center Dashboard</h1>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-4 gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <div key={metric.label} className="bg-[#111827] border border-[#1a2535] rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <Icon className={`w-8 h-8 ${metric.iconColor}`} />
              </div>
              <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
              <p className={`text-3xl font-bold ${metric.iconColor}`}>{metric.value}</p>
            </div>
          )
        })}
      </div>

      {/* Recent Calls Card */}
      <div className="bg-[#111827] border border-[#1a2535] rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Recent Calls</h2>
        <div className="flex flex-col items-center justify-center py-12 text-gray-400">
          <Phone className="w-12 h-12 mb-3 opacity-50" />
          <p>No recent calls</p>
        </div>
      </div>
    </div>
  )
}
