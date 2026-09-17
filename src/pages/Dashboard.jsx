import React from 'react'
import { Phone, CheckCircle, XCircle, Clock, ArrowUpRight, PhoneIncoming, PhoneMissed, Voicemail } from 'lucide-react'
import { StatCard, BarChart, Ring, Section, Avatar, Sparkline } from '../components/ui'
import { useCallback } from 'react'
import { agents, calls, hourlyVolume } from '../data/mock'
import { api, useDataSource } from '../api/client'

const statusPill = {
  completed: <span className="pill pill-success">Completed</span>,
  missed: <span className="pill pill-danger">Missed</span>,
  voicemail: <span className="pill pill-accent">Voicemail</span>,
}

export default function Dashboard() {
  const callsLoader = useCallback(() => api.getJson('/api/calls?per_page=50').then((r) => r.calls), [])
  const agentsLoader = useCallback(() => api.getJson('/api/agents'), [])
  const summaryLoader = useCallback(() => api.getJson('/api/summary'), [])

  const { data: liveCalls, source } = useDataSource(callsLoader, calls)
  const { data: liveAgents } = useDataSource(agentsLoader, agents)
  const { data: summary } = useDataSource(summaryLoader, null)
  const hourly = summary?.hourly || hourlyVolume

  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="card p-6 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
        <div className="relative flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Good morning, <span className="gradient-text">Sabine</span> 👋
            </h1>
            <p className="text-gray-400 text-sm mt-1">Your team is handling <span className="text-white font-semibold">14 calls</span> right now — everything is green.</p>
            <span className={`mt-3 inline-flex pill ${source === 'live' ? 'pill-success' : 'pill-muted'}`}>
              {source === 'live' ? 'Live API' : source === 'loading' ? 'Connecting…' : 'Demo data'}
            </span>
          </div>
          <div className="flex gap-1 bg-surface2 border border-line rounded-xl p-1">
            {['Today', '7d', '30d'].map((t, i) => (
              <button key={t} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${i === 0 ? 'bg-accent text-white shadow-glow-sm' : 'text-gray-400 hover:text-white'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard icon={Phone} iconBg="#6366f1" label="Total Calls Today" value="247" delta={12.4} spark={[34, 42, 38, 58, 52, 66, 72]} />
        <StatCard icon={CheckCircle} iconBg="#34d399" label="Completed" value="189" delta={8.1} spark={[22, 26, 24, 34, 38, 41, 47]} />
        <StatCard icon={XCircle} iconBg="#f87147" label="Missed" value="21" delta={-14.6} spark={[6, 5, 4, 4, 3, 3, 2]} />
        <StatCard icon={Clock} iconBg="#fbbf24" label="Avg. Duration" value="4m 32s" delta={-3.2} spark={[52, 48, 46, 47, 44, 45, 43]} />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <Section
          title="Call Volume"
          className="xl:col-span-2"
          action={<span className="pill pill-accent"><ArrowUpRight className="w-3.5 h-3.5" /> +9.1% vs. yesterday</span>}
        >
          <BarChart data={hourly} />
        </Section>

        <Section title="Service Level">
          <div className="flex flex-col items-center gap-6 py-2">
            <div className="flex gap-8">
              <div className="flex flex-col items-center gap-2">
                <Ring value={92} label="SLA" />
                <span className="text-xs text-gray-400">Answered &lt; 20s</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Ring value={78} color="#22d3ee" label="CSAT" />
                <span className="text-xs text-gray-400">Satisfaction</span>
              </div>
            </div>
            <div className="w-full grid grid-cols-3 gap-2 text-center">
              {[['Abandon', '3.4%', 'text-danger'], ['First call res.', '76%', 'text-success'], ['Voicemails', '9', 'text-accent-soft']].map(([l, v, c]) => (
                <div key={l} className="bg-surface2 rounded-xl border border-line py-3">
                  <p className={`text-lg font-bold ${c}`}>{v}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* Recent calls + agents */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <Section
          title="Recent Calls"
          className="xl:col-span-2"
          action={<span className="text-xs text-accent-soft font-medium cursor-pointer hover:underline">View all →</span>}
        >
          <div className="divide-y divide-line/60">
            {liveCalls.slice(0, 6).map((c) => (
              <div key={c.id} className="flex items-center gap-4 py-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  c.status === 'missed' ? 'bg-danger/10 text-danger'
                  : c.status === 'voicemail' ? 'bg-accent/10 text-accent-soft'
                  : c.direction === 'in' ? 'bg-success/10 text-success' : 'bg-cyanx/10 text-cyanx'}`}>
                  {c.status === 'missed' ? <PhoneMissed className="w-4 h-4" />
                    : c.status === 'voicemail' ? <Voicemail className="w-4 h-4" />
                    : <PhoneIncoming className="w-4 h-4" />}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-white truncate">{c.from}</p>
                  <p className="text-xs text-gray-500">{c.to} · {c.agent}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-gray-400">{c.duration}</p>
                  <p className="text-[11px] text-gray-600">{c.time}</p>
                </div>
                {statusPill[c.status]}
              </div>
            ))}
          </div>
        </Section>

        <Section title="Agent Leaderboard">
          <div className="space-y-1">
            {liveAgents.slice(0, 4).map((a, i) => (
              <div key={a.id} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-surface2 transition-colors">
                <span className="text-xs text-gray-600 font-bold w-4">{i + 1}</span>
                <Avatar initials={a.initials} color={a.color} status={a.status} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">{a.name}</p>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 flex-1 bg-surface2 rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-accent to-cyanx transition-all duration-500"
                        style={{ width: `${(a.answered / a.calls) * 100}%` }} />
                    </div>
                    <span className="text-[11px] text-gray-500 shrink-0">{a.answered}/{a.calls}</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold text-white">★ {a.csat}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}
