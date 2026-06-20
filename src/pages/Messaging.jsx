import React, { useState } from 'react'
import { Search } from 'lucide-react'

export default function Messaging() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="p-6 h-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">Messaging</h1>
      </div>

      {/* Two Column Layout */}
      <div className="flex gap-6 h-[calc(100vh-150px)]">
        {/* Left Column - Conversation List */}
        <div className="w-80 bg-[#111827] border border-[#1a2535] rounded-lg overflow-hidden flex flex-col">
          {/* Search */}
          <div className="p-4 border-b border-[#1a2535]">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#0d1420] border border-[#1a2535] rounded px-3 py-2 pl-9 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f97316]"
              />
            </div>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto flex items-center justify-center text-center">
            <p className="text-gray-400 text-sm">No conversations yet</p>
          </div>
        </div>

        {/* Right Column - Chat Area */}
        <div className="flex-1 bg-[#111827] border border-[#1a2535] rounded-lg flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-400 text-lg">Select a conversation</p>
          </div>
        </div>
      </div>
    </div>
  )
}
