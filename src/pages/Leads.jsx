import React, { useCallback } from 'react'
import { Users, Building2, MapPin, ArrowUpRight } from 'lucide-react'
import { Section } from '../components/ui'
import { leads as mockLeads } from '../data/mock'
import { api, useDataSource } from '../api/client'

const stages = [
  { id: 'new', label: 'New', color: '#6366f1' },
  { id: 'contacted', label: 'Contacted', color: '#22d3ee' },
  { id: 'qualified', label: 'Qualified', color: '#fbbf24' },
  { id: 'won', label: 'Won', color: '#34d399' },
  { id: 'lost', label: 'Lost', color: '#f87147' },
]

const pipeline = [
  { label: 'New', count: 12, pct: 38, color: '#6366f1' },
  { label: 'Contacted', count: 18, pct: 56, color: '#22d3ee' },
  { label: 'Qualified', count: 9, pct: 28, color: '#fbbf24' },
  { label: 'Won', count: 6, pct: 19, color: '#34d399' },
]

export default function Leads() {
  const leadsLoader = useCallback(() => api.getJson('/api/leads'), [])
  const { data: leads } = useDataSource(leadsLoader, mockLeads)
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">Lead Management</h1>
          <p className="text-sm text-gray-500 mt-0.5">45 active leads · €77.900 pipeline value</p>
        </div>
        <button className="btn-primary"><Users className="w-4 h-4" /> Add Lead</button>
      </div>

      {/* Funnel */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {pipeline.map((s) => (
          <div key={s.label} className="card card-hover p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">{s.label}</p>
              <span className="pill pill-muted">{s.count}</span>
            </div>
            <p className="text-2xl font-bold text-white mt-2">{s.pct}%</p>
            <div className="h-1.5 bg-surface2 rounded-full mt-3 overflow-hidden">
              <div className="h-full rounded-full transition-all duration-500" style={{ width: `${s.pct}%`, background: s.color }} />
            </div>
          </div>
        ))}
      </div>

      {/* Kanban */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
        {stages.map((stage) => {
          const items = leads.filter((l) => l.stage === stage.id)
          return (
            <div key={stage.id} className="flex flex-col gap-3">
              <div className="flex items-center gap-2 px-1">
                <span className="w-2 h-2 rounded-full" style={{ background: stage.color }} />
                <p className="text-sm font-semibold text-white">{stage.label}</p>
                <span className="text-xs text-gray-600 ml-auto">{items.length}</span>
              </div>
              <div className="space-y-3 min-h-[120px]">
                {items.map((l) => (
                  <div key={l.id} className="card card-hover p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-white">{l.name}</p>
                      <span className="text-xs font-bold" style={{ color: stage.color }}>{l.value}</span>
                    </div>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1.5"><Building2 className="w-3 h-3" /> {l.company}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><MapPin className="w-3 h-3" /> {l.city}</p>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-line/60">
                      <span className="pill pill-muted !px-2 !py-0.5 text-[10px]">{l.source}</span>
                      <span className="text-[10px] text-gray-600">{l.touched}</span>
                    </div>
                  </div>
                ))}
                {items.length === 0 && (
                  <div className="card border-dashed p-4 text-center text-xs text-gray-600">Empty</div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
