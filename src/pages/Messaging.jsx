import React, { useState } from 'react'
import { Search, Send, Paperclip, Smile } from 'lucide-react'
import { Avatar } from '../components/ui'
import { conversations, messages } from '../data/mock'

export default function Messaging() {
  const [activeId, setActiveId] = useState('c1')
  const [draft, setDraft] = useState('')
  const [thread, setThread] = useState(messages)
  const active = conversations.find((c) => c.id === activeId)

  const send = () => {
    if (!draft.trim()) return
    setThread([...thread, { id: Date.now(), from: 'me', text: draft.trim(), time: '09:40' }])
    setDraft('')
  }

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight">Messaging</h1>
        <p className="text-sm text-gray-500 mt-0.5">3 unread · SMS & web chat in one inbox</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[calc(100vh-220px)] min-h-[480px]">
        {/* Conversation list */}
        <div className="card overflow-y-auto p-3">
          <div className="relative mb-3">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input className="input !pl-10 !py-2" placeholder="Search conversations…" />
          </div>
          {conversations.map((c) => (
            <button key={c.id} onClick={() => setActiveId(c.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-colors ${
                activeId === c.id ? 'bg-accent/15 border border-accent/30' : 'hover:bg-surface2 border border-transparent'}`}>
              <Avatar initials={c.name.split(' ').map((n) => n[0]).join('')} color="#6366f1" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white truncate">{c.name}</p>
                  <span className="text-[10px] text-gray-500 shrink-0 ml-2">{c.time}</span>
                </div>
                <p className="text-xs text-gray-500 truncate mt-0.5">{c.last}</p>
              </div>
              {c.unread > 0 && <span className="w-5 h-5 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center shrink-0">{c.unread}</span>}
            </button>
          ))}
        </div>

        {/* Thread */}
        <div className="card lg:col-span-2 flex flex-col overflow-hidden">
          <div className="flex items-center gap-3 p-4 border-b border-line">
            <Avatar initials={active.name.split(' ').map((n) => n[0]).join('')} color="#22d3ee" status="online" />
            <div>
              <p className="text-sm font-semibold text-white">{active.name}</p>
              <p className="text-[11px] text-success">● Online · {active.company}</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {thread.map((m) => (
              <div key={m.id} className={`flex ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] px-4 py-2.5 text-sm leading-relaxed ${
                  m.from === 'me'
                    ? 'bg-accent text-white rounded-2xl rounded-br-sm shadow-glow-sm'
                    : 'bg-surface2 text-gray-200 rounded-2xl rounded-bl-sm border border-line'}`}>
                  {m.text}
                  <span className={`block text-[10px] mt-1 ${m.from === 'me' ? 'text-white/60' : 'text-gray-500'}`}>{m.time}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-line flex items-center gap-2">
            <button className="w-9 h-9 rounded-xl bg-surface2 border border-line flex items-center justify-center text-gray-400 hover:text-white hover:border-accent/40 transition-colors"><Paperclip className="w-4 h-4" /></button>
            <input
              className="input flex-1" placeholder="Type a message…"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
            />
            <button className="w-9 h-9 rounded-xl bg-surface2 border border-line flex items-center justify-center text-gray-400 hover:text-white hover:border-accent/40 transition-colors"><Smile className="w-4 h-4" /></button>
            <button onClick={send} className="btn-primary !px-4"><Send className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
