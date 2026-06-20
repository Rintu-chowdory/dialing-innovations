import React, { useState } from "react"
import { Phone, X, ChevronDown } from "lucide-react"

export default function SoftphoneWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showKeypad, setShowKeypad] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("+1 (555) 000-0000")

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-navy-light border border-border rounded-lg shadow-2xl p-5 space-y-4">
          {/* Status */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Ready</span>
          </div>

          {/* Phone Input */}
          <div>
            <label className="text-xs text-gray-400 block mb-2">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full bg-navy-lighter border border-border rounded-lg px-3 py-2 text-white placeholder-gray-500 text-sm"
              placeholder="Enter number"
            />
          </div>

          {/* Call Button */}
          <button className="w-full bg-navy-lighter hover:bg-navy border border-border text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all">
            <Phone size={16} />
            <span className="text-sm font-medium">Call</span>
          </button>

          {/* Show Keypad Toggle */}
          <button
            onClick={() => setShowKeypad(!showKeypad)}
            className="w-full flex items-center justify-between px-4 py-2 bg-navy hover:bg-navy-light text-gray-300 hover:text-white rounded-lg transition-all border border-transparent hover:border-border text-sm"
          >
            <span>Show Keypad</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${showKeypad ? "rotate-180" : ""}`}
            />
          </button>

          {/* Keypad */}
          {showKeypad && (
            <div className="grid grid-cols-3 gap-2">
              {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map((digit) => (
                <button
                  key={digit}
                  className="bg-navy hover:bg-navy-light border border-border text-white py-2 rounded font-semibold text-sm transition-all"
                  onClick={() => setPhoneNumber(phoneNumber + digit)}
                >
                  {digit}
                </button>
              ))}
            </div>
          )}

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-orange hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
      >
        <Phone size={28} />
      </button>
    </div>
  )
}
