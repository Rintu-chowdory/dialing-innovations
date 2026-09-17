import React, { useCallback } from 'react'
import { Play, Pause, PhoneIncoming, Trash2, CheckCheck } from 'lucide-react'
import { Section } from '../components/ui'
import { voicemails as mockVoicemails } from '../data/mock'
import { api, useDataSource } from '../api/client'

export default function Voicemails() {
  const vmLoader = useCallback(() => api.getJson('/api/voicemails'), [])
  const { data: voicemails } = useDataSource(vmLoader, mockVoicemails)
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">Voicemail</h1>
          <p className="text-sm text-gray-500 mt-0.5">{voicemails.filter((v) => v.unread).length} new · {voicemails.length} total</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-ghost"><CheckCheck className="w-4 h-4" /> Mark all read</button>
          <button className="btn-primary"><PhoneIncoming className="w-4 h-4" /> Call back</button>
        </div>
      </div>

      <div className="space-y-3">
        {voicemails.map((v) => (
          <div key={v.id} className={`card card-hover p-5 flex flex-wrap items-center gap-4 ${v.unread ? 'border-accent/30' : ''}`}>
            <button className="w-12 h-12 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent-soft hover:bg-accent hover:text-white hover:shadow-glow transition-all shrink-0">
              {v.unread ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
            </button>
            <div className="flex-1 min-w-[220px]">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-white">{v.from}</p>
                {v.unread && <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />}
              </div>
              <p className="text-sm text-gray-400 mt-1 italic">"{v.transcript}"</p>
              <p className="text-[11px] text-gray-600 mt-1.5">Received {v.received}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-300">{v.duration}</p>
              <button className="text-gray-600 hover:text-danger transition-colors mt-1.5"><Trash2 className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>

      <Section title="How voicemail works">
        <p className="text-sm text-gray-400 leading-relaxed">
          Unanswered calls after 3 rings are routed to the queue's voicemail box. Transcripts are generated
          automatically and new messages appear in the agent inbox. Enable per-queue rules under Settings → Queues.
        </p>
      </Section>
    </div>
  )
}
