import React, { useState } from 'react'
import { Download, RotateCw } from 'lucide-react'

export default function CallHistory() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Call History</h1>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#111827] border border-[#1a2535] rounded-lg text-white hover:bg-[#1a2535] transition-colors text-sm">
            <RotateCw className="w-4 h-4" />
            Refresh Recordings
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors text-sm">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div>
        <input
          type="text"
          placeholder="Search by phone number or agent..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#111827] border border-[#1a2535] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#f97316]"
        />
      </div>

      {/* Table */}
      <div className="bg-[#111827] border border-[#1a2535] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#0a1020] border-b border-[#1a2535]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300">Date & Time</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300">From</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300">To</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300">Direction</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300">Agent</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-12 text-center text-gray-400 text-sm">
              <td colSpan="7" className="py-8">No calls found</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
