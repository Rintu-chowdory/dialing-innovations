import React, { useState, useMemo } from 'react'
import { calls } from '../data/mock'
import { Download, RotateCw, Search, PhoneIncoming, PhoneOutgoing } from 'lucide-react'

const statusStyle = {
  completed: 'pill-success', missed: 'pill-danger', voicemail: 'pill-accent',
}
const statusLabel = { completed: 'Completed', missed: 'Missed', voicemail: 'Voicemail' }

export default function CallHistory() {
  const [search, setSearch] = useState('')
  const [direction, setDirection] = useState('all')
  const [status, setStatus] = useState('all')
  const [page, setPage] = useState(0)
  const perPage = 8
  
  const filtered = useMemo(() => calls.filter((c) => {
    const q = search.toLowerCase()
    const match = !q || c.from.toLowerCase().includes(q) || c.agent.toLowerCase().includes(q) || c.to.toLowerCase().includes(q)
    return match && (direction === 'all' || c.direction === direction) && (status === 'all' || c.status === status)
  }), [calls, search, direction, status])

  const pageCount = Math.max(1, Math.ceil(filtered.length / perPage))
  const visible = filtered.slice(page * perPage, (page + 1) * perPage)

  const exportCsv = () => {
    const head = 'Date,Time,From,To,Direction,Duration,Status,Agent'
    const rows = filtered.map((c) => `2026-09-17,${c.time},"${c.from}",${c.to},${c.direction},${c.duration},${statusLabel[c.status]},"${c.agent}"`)
    const blob = new Blob([[head, ...rows].join('\n')], { type: 'text/csv' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `call-history-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(a.href)
  }

  const resetPage = (fn, val) => { fn(val); setPage(0) }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">Call History</h1>
          <p className="text-sm text-gray-500 mt-0.5">{filtered.length} calls · updated 2 min ago</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-ghost"><RotateCw className="w-4 h-4" /> Refresh</button>
          <button onClick={exportCsv} className="btn-primary"><Download className="w-4 h-4" /> Export CSV</button>
        </div>
      </div>

      {/* Filter bar */}
      <div className="card p-4 flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            className="input !pl-10"
            placeholder="Search by number, agent or queue…"
            value={search}
            onChange={(e) => resetPage(setSearch, e.target.value)}
          />
        </div>
        <div className="flex gap-1 bg-surface2 border border-line rounded-xl p-1">
          {[['all', 'All'], ['in', 'Inbound'], ['out', 'Outbound']].map(([v, l]) => (
            <button key={v} onClick={() => resetPage(setDirection, v)}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${direction === v ? 'bg-accent text-white' : 'text-gray-400 hover:text-white'}`}>
              {l}
            </button>
          ))}
        </div>
        <div className="flex gap-1 bg-surface2 border border-line rounded-xl p-1">
          {[['all', 'All'], ['completed', 'Completed'], ['missed', 'Missed'], ['voicemail', 'Voicemail']].map(([v, l]) => (
            <button key={v} onClick={() => resetPage(setStatus, v)}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${status === v ? 'bg-accent text-white' : 'text-gray-400 hover:text-white'}`}>
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <table className="w-full">
          <thead className="bg-surface2/60 border-b border-line">
            <tr>
              {['Time', 'From', 'To', 'Direction', 'Duration', 'Status', 'Agent'].map((h) => (
                <th key={h} className="table-head">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line/50">
            {visible.map((c) => (
              <tr key={c.id} className="hover:bg-surface2/50 transition-colors">
                <td className="table-cell text-gray-400">{c.time}</td>
                <td className="table-cell font-medium text-white">{c.from}</td>
                <td className="table-cell">{c.to}</td>
                <td className="table-cell">
                  <span className="inline-flex items-center gap-1.5 text-gray-400">
                    {c.direction === 'in' ? <PhoneIncoming className="w-3.5 h-3.5 text-success" /> : <PhoneOutgoing className="w-3.5 h-3.5 text-cyanx" />}
                    {c.direction === 'in' ? 'Inbound' : 'Outbound'}
                  </span>
                </td>
                <td className="table-cell text-gray-400">{c.duration}</td>
                <td className="table-cell"><span className={`pill ${statusStyle[c.status]}`}>{statusLabel[c.status]}</span></td>
                <td className="table-cell">{c.agent}</td>
              </tr>
            ))}
            {visible.length === 0 && (
              <tr><td colSpan="7" className="table-cell text-center text-gray-500 py-10">No calls match your filters.</td></tr>
            )}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-line bg-surface2/40">
          <p className="text-xs text-gray-500">Page {page + 1} of {pageCount}</p>
          <div className="flex gap-2">
            <button onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0}
              className="btn-ghost !px-3 !py-1.5 disabled:opacity-30 disabled:cursor-not-allowed">← Prev</button>
            <button onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))} disabled={page >= pageCount - 1}
              className="btn-ghost !px-3 !py-1.5 disabled:opacity-30 disabled:cursor-not-allowed">Next →</button>
          </div>
        </div>
      </div>
    </div>
  )
}
