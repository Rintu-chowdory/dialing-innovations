import React from 'react'
import { Mail } from 'lucide-react'

export default function Voicemails() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Voicemails</h1>
      </div>

      {/* Empty State */}
      <div className="bg-[#111827] border border-[#1a2535] rounded-lg flex flex-col items-center justify-center py-16">
        <Mail className="w-16 h-16 text-gray-500 mb-4 opacity-50" />
        <p className="text-gray-400 text-lg">No voicemails yet</p>
        <p className="text-gray-500 text-sm mt-1">Voicemails will appear here when received</p>
      </div>
    </div>
  )
}
