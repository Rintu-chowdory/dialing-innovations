import React, { useState } from 'react'
import { Phone, Plug, Users, Bell, Shield, Globe } from 'lucide-react'
import { Avatar, Section } from '../components/ui'
import { agents } from '../data/mock'

const integrations = [
  { id: 'twilio', name: 'Twilio', desc: 'SIP trunk & phone numbers', color: '#f87147', on: true },
  { id: 'slack', name: 'Slack', desc: 'Missed-call alerts to #support', color: '#34d399', on: true },
  { id: 'crm', name: 'HubSpot CRM', desc: 'Sync contacts & call notes', color: '#f97316', on: false },
  { id: 'grafana', name: 'Grafana', desc: 'Live queue metrics dashboards', color: '#22d3ee', on: false },
]

function Toggle({ on, onClick }) {
  return (
    <button onClick={onClick}
      className={`w-11 h-6 rounded-full relative transition-colors shrink-0 ${on ? 'bg-accent' : 'bg-surface2 border border-line'}`}>
      <span className={`absolute top-1 w-4 h-4 rounded-full transition-all ${on ? 'left-6 bg-white shadow-glow-sm' : 'left-1 bg-gray-500'}`} />
    </button>
  )
}

export default function Settings() {
  const [toggles, setToggles] = useState(Object.fromEntries(integrations.map((i) => [i.id, i.on])))
  const flip = (id) => setToggles((t) => ({ ...t, [id]: !t[id] }))

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight">Settings</h1>
        <p className="text-sm text-gray-500 mt-0.5">Workspace · Dialing Innovations EU</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <Section title="Integrations" action={<Plug className="w-4 h-4 text-gray-500" />}>
          <div className="space-y-3">
            {integrations.map((i) => (
              <div key={i.id} className="flex items-center gap-3 p-3.5 rounded-xl bg-surface2 border border-line">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: i.color + '1f' }}>
                  <Phone className="w-5 h-5" style={{ color: i.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white">{i.name}</p>
                  <p className="text-xs text-gray-500 truncate">{i.desc}</p>
                </div>
                <Toggle on={toggles[i.id]} onClick={() => flip(i.id)} />
              </div>
            ))}
          </div>
        </Section>

        <div className="space-y-4">
          <Section title="Agents" action={<Users className="w-4 h-4 text-gray-500" />}>
            <div className="divide-y divide-line/50">
              {agents.slice(0, 4).map((a) => (
                <div key={a.id} className="flex items-center gap-3 py-3">
                  <Avatar initials={a.initials} color={a.color} status={a.status} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white">{a.name}</p>
                    <p className="text-xs text-gray-500 capitalize">{a.status === 'on-call' ? 'on call' : a.status}</p>
                  </div>
                  <span className="pill pill-muted">Ext. {201 + Number(a.id.slice(1))}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Notifications" action={<Bell className="w-4 h-4 text-gray-500" />}>
            <div className="space-y-3">
              {[
                ['Missed-call alerts', 'Push + email when SLA is at risk', true],
                ['Daily summary', 'Every morning at 08:00', true],
                ['New voicemail', 'Instant push notification', false],
              ].map(([title, desc, on]) => (
                <div key={title} className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-white">{title}</p>
                    <p className="text-xs text-gray-500">{desc}</p>
                  </div>
                  <Shield className="w-4 h-4 text-gray-600 shrink-0" />
                </div>
              ))}
            </div>
          </Section>

          <Section title="Language & Region" action={<Globe className="w-4 h-4 text-gray-500" />}>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500 block mb-1.5">Interface</label>
                <select className="input cursor-pointer"><option>English</option><option>Deutsch</option></select>
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1.5">Timezone</label>
                <select className="input cursor-pointer"><option>Europe/Berlin (CET)</option><option>UTC</option></select>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
