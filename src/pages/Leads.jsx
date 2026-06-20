import React from 'react'
import { Plus, MoreHorizontal } from 'lucide-react'

export default function Leads() {
  const mockLeads = [
    {
      id: 1,
      name: 'John Smith',
      phone: '+1 (555) 123-4567',
      email: 'john@example.com',
      source: 'Web Form',
      status: 'New',
      created: '2024-01-15',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      phone: '+1 (555) 234-5678',
      email: 'sarah@example.com',
      source: 'Phone Call',
      status: 'Contacted',
      created: '2024-01-14',
    },
    {
      id: 3,
      name: 'Michael Brown',
      phone: '+1 (555) 345-6789',
      email: 'michael@example.com',
      source: 'Email',
      status: 'Qualified',
      created: '2024-01-13',
    },
    {
      id: 4,
      name: 'Emily Davis',
      phone: '+1 (555) 456-7890',
      email: 'emily@example.com',
      source: 'Referral',
      status: 'New',
      created: '2024-01-12',
    },
    {
      id: 5,
      name: 'David Wilson',
      phone: '+1 (555) 567-8901',
      email: 'david@example.com',
      source: 'Web Form',
      status: 'Contacted',
      created: '2024-01-11',
    },
  ]

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'New':
        return 'bg-blue-500/20 text-blue-400'
      case 'Contacted':
        return 'bg-yellow-500/20 text-yellow-400'
      case 'Qualified':
        return 'bg-green-500/20 text-green-400'
      default:
        return 'bg-gray-500/20 text-gray-400'
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Leads</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#f97316] hover:bg-orange-600 rounded-lg text-white font-medium transition-colors text-sm">
          <Plus className="w-4 h-4" />
          Add Lead
        </button>
      </div>

      {/* Table */}
      <div className="bg-[#111827] border border-[#1a2535] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#0a1020] border-b border-[#1a2535]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300">Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300">Email</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300">Source</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300">Created</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockLeads.map((lead, idx) => (
              <tr key={lead.id} className={idx !== mockLeads.length - 1 ? 'border-b border-[#1a2535]' : ''}>
                <td className="px-6 py-4 text-sm text-white">{lead.name}</td>
                <td className="px-6 py-4 text-sm text-gray-300">{lead.phone}</td>
                <td className="px-6 py-4 text-sm text-gray-300">{lead.email}</td>
                <td className="px-6 py-4 text-sm text-gray-300">{lead.source}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(lead.status)}`}>
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-300">{lead.created}</td>
                <td className="px-6 py-4 text-sm">
                  <button className="p-1 hover:bg-[#1a2535] rounded transition-colors">
                    <MoreHorizontal className="w-4 h-4 text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
