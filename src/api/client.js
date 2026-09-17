import { useEffect, useState } from 'react'

// Base URL of the FastAPI backend (backend/app.py). Set VITE_API_URL at build time:
//   VITE_API_URL=http://localhost:8000 npm run build
// If unset or unreachable, every hook transparently falls back to the bundled
// demo dataset so the static GitHub Pages build stays fully functional.
export const API_URL = import.meta.env.VITE_API_URL || ''

let apiAvailable = null // tri-state: null = unknown, true/false

async function getJson(path) {
  const res = await fetch(`${API_URL}${path}`)
  if (!res.ok) throw new Error(`API ${res.status}`)
  return res.json()
}

async function postJson(path, body) {
  const res = await fetch(`${API_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`API ${res.status}`)
  return res.json()
}

export const api = { getJson, postJson }

/**
 * Load data with a live-API attempt and a mock fallback.
 * Returns { data, source } where source is 'demo' | 'live' | 'loading'.
 */
export function useDataSource(loader, fallback) {
  const [state, setState] = useState({ data: fallback, source: API_URL ? 'loading' : 'demo' })

  useEffect(() => {
    let cancelled = false
    if (!API_URL) return
    loader()
      .then((data) => { if (!cancelled) setState({ data, source: 'live' }) })
      .catch(() => { if (!cancelled) setState((s) => ({ data: s.data, source: 'demo' })) })
    return () => { cancelled = true }
  }, [loader])

  return state
}
