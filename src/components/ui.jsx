import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

// ---------- Stat card with sparkline ----------
export function StatCard({ icon: Icon, iconBg, label, value, delta, spark }) {
  const up = delta >= 0
  return (
    <div className="card card-hover p-5">
      <div className="flex items-start justify-between">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: iconBg + '1f' }}>
          <Icon className="w-5 h-5" style={{ color: iconBg }} />
        </div>
        <span className={`pill ${up ? 'pill-success' : 'pill-danger'} font-semibold`}>
          {up ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
          {up ? '+' : ''}{delta}%
        </span>
      </div>
      <p className="text-gray-400 text-sm mt-4">{label}</p>
      <div className="flex items-end justify-between gap-3 mt-1">
        <p className="text-3xl font-bold text-white">{value}</p>
        {spark && <Sparkline data={spark} />}
      </div>
    </div>
  )
}

// ---------- Tiny sparkline ----------
export function Sparkline({ data, color = '#818cf8' }) {
  const w = 84, h = 32, max = Math.max(...data), min = Math.min(...data)
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w
    const y = h - ((v - min) / (max - min || 1)) * (h - 4) - 2
    return `${x.toFixed(1)},${y.toFixed(1)}`
  }).join(' ')
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="shrink-0">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={w} cy={pts.split(' ').pop().split(',')[1]} r="2.5" fill={color} />
    </svg>
  )
}

// ---------- Bar chart ----------
export function BarChart({ data, unit = '' }) {
  const max = Math.max(...data.map((d) => d.calls))
  return (
    <div className="flex items-end gap-2 h-44 px-1">
      {data.map((d, i) => (
        <div key={d.hour} className="flex-1 flex flex-col items-center gap-2 group">
          <div className="relative w-full flex justify-center">
            <span className="absolute -top-7 text-[11px] text-white opacity-0 group-hover:opacity-100 transition-opacity bg-surface2 border border-line px-2 py-0.5 rounded-md font-medium whitespace-nowrap">
              {d.calls}{unit}
            </span>
            <div
              className="w-full max-w-[26px] rounded-t-lg transition-all duration-300 group-hover:shadow-glow"
              style={{
                height: `${(d.calls / max) * 130}px`,
                background: i === data.length - 1
                  ? 'linear-gradient(180deg,#22d3ee,#6366f1)'
                  : 'linear-gradient(180deg,rgba(129,140,248,.85),rgba(79,70,229,.35))',
              }}
            />
          </div>
          <span className="text-[11px] text-gray-500 font-medium">{d.hour}:00</span>
        </div>
      ))}
    </div>
  )
}

// ---------- Radial progress ring ----------
export function Ring({ value, size = 72, color = '#6366f1', label }) {
  const r = (size - 8) / 2, c = 2 * Math.PI * r
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#1c2740" strokeWidth="6" />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="6"
          strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - value / 100)}
          className="transition-all duration-700"
        />
      </svg>
      <span className="absolute text-sm font-bold text-white">{value}%</span>
      {label && <span className="sr-only">{label}</span>}
    </div>
  )
}

// ---------- Avatar ----------
export function Avatar({ initials, color = '#6366f1', size = 'md', status }) {
  const px = size === 'lg' ? 'w-10 h-10 text-sm' : size === 'sm' ? 'w-7 h-7 text-[10px]' : 'w-9 h-9 text-xs'
  const dot = { online: 'bg-success', 'on-call': 'bg-cyanx animate-pulse-soft', break: 'bg-warn', offline: 'bg-gray-600' }
  return (
    <div className="relative shrink-0">
      <div className={`${px} rounded-full flex items-center justify-center font-bold text-white`} style={{ backgroundColor: color + '2e', color }}>
        {initials}
      </div>
      {status && <span className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-surface ${dot[status] || 'bg-gray-600'}`} />}
    </div>
  )
}

// ---------- Section card with header ----------
export function Section({ title, action, children, className = '' }) {
  return (
    <div className={`card p-5 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-white">{title}</h2>
        {action}
      </div>
      {children}
    </div>
  )
}
