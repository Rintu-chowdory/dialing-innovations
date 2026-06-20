import React, { useState } from 'react'
import { Phone, ChevronDown } from 'lucide-react'

export default function Softphone() {
  const [isOpen, setIsOpen] = useState(false)
  const [showKeypad, setShowKeypad] = useState(false)

  return (
    <>
      {/* Floating Phone Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-[#f97316] hover:bg-orange-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-40"
      >
        <Phone className="w-6 h-6" />
      </button>

      {/* Softphone Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 bg-[#111827] border border-[#1a2535] rounded-lg shadow-2xl p-4 w-80 z-40">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-300">Ready</span>
          </div>

          {/* Phone Number Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="+1 (555) 000-0000"
              className="w-full bg-[#0d1420] border border-[#1a2535] rounded px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f97316]"
            />
          </div>

          {/* Call Button */}
          <button className="w-full bg-[#f97316] hover:bg-orange-600 text-white rounded px-4 py-2 text-sm font-medium flex items-center justify-center gap-2 mb-3 transition-colors">
            <Phone className="w-4 h-4" />
            Call
          </button>

          {/* Keypad Toggle */}
          <button
            onClick={() => setShowKeypad(!showKeypad)}
            className="flex items-center gap-1 text-xs text-[#f97316] hover:text-orange-400 transition-colors"
          >
            <ChevronDown className="w-4 h-4" />
            Show Keypad
          </button>

          {/* Keypad */}
          {showKeypad && (
            <div className="mt-3 pt-3 border-t border-[#1a2535]">
              <div className="grid grid-cols-3 gap-2">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((key) => (
                  <button
                    key={key}
                    className="bg-[#0d1420] hover:bg-[#1a2535] border border-[#1a2535] rounded p-2 text-sm font-medium text-white transition-colors"
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
