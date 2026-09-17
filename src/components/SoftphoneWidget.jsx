import React, { useState } from "react"
import { Phone, PhoneCall, X, ChevronDown, Mic, Volume2, UserPlus } from "lucide-react"

const KEYS = [
  ["1", ""], ["2", "ABC"], ["3", "DEF"],
  ["4", "GHI"], ["5", "JKL"], ["6", "MNO"],
  ["7", "PQRS"], ["8", "TUV"], ["9", "WXYZ"],
  ["*", ""], ["0", "+"], ["#", ""],
]

export default function SoftphoneWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showKeypad, setShowKeypad] = useState(true)
  const [phoneNumber, setPhoneNumber] = useState("+49 ")

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-[86px] right-0 w-80 card !rounded-2xl p-5 space-y-4 animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse-soft" />
              <span className="text-sm text-gray-300 font-medium">Ready</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Display */}
          <div className="bg-surface2 border border-line rounded-xl px-4 py-3 text-center">
            <p className="text-lg font-semibold tracking-wide text-white tabular-nums">{phoneNumber}</p>
            <p className="text-[10px] text-gray-500 mt-0.5">SIP · Line 1</p>
          </div>

          {/* Keypad */}
          {showKeypad && (
            <div className="grid grid-cols-3 gap-2">
              {KEYS.map(([digit, letters]) => (
                <button
                  key={digit}
                  onClick={() => setPhoneNumber(phoneNumber + digit)}
                  className="bg-surface2 hover:bg-line border border-line text-white py-2.5 rounded-xl font-semibold text-base transition-all hover:border-accent/40 hover:shadow-glow-sm active:scale-95"
                >
                  {digit}
                  <span className="block text-[9px] text-gray-500 font-normal tracking-widest">{letters}</span>
                </button>
              ))}
            </div>
          )}

          {/* Call button */}
          <button className="w-full btn-primary !py-3 !rounded-xl">
            <PhoneCall className="w-4 h-4" /> Call
          </button>

          {/* Row buttons */}
          <div className="grid grid-cols-3 gap-2">
            {[
              [Mic, "Mute"], [Volume2, "Audio"], [UserPlus, "Transfer"],
            ].map(([Icon, label]) => (
              <button key={label} className="flex flex-col items-center gap-1 py-2 rounded-xl bg-surface2 border border-line text-gray-400 hover:text-white hover:border-accent/40 transition-colors">
                <Icon className="w-4 h-4" />
                <span className="text-[10px]">{label}</span>
              </button>
            ))}
          </div>

          {/* Hide keypad */}
          <button
            onClick={() => setShowKeypad(!showKeypad)}
            className="w-full flex items-center justify-center gap-1.5 py-2 text-xs text-gray-500 hover:text-accent-soft transition-colors"
          >
            {showKeypad ? "Hide" : "Show"} keypad
            <ChevronDown size={14} className={`transition-transform ${showKeypad ? "rotate-180" : ""}`} />
          </button>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 active:scale-95 ${
          isOpen
            ? "bg-surface2 border border-line rotate-90"
            : "bg-gradient-to-br from-accent to-cyanx shadow-glow"
        }`}
      >
        {isOpen ? <X size={26} /> : <PhoneCall size={26} />}
      </button>
    </div>
  )
}
