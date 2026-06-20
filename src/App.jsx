import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Softphone from './components/Softphone'
import Dashboard from './pages/Dashboard'
import CallHistory from './pages/CallHistory'
import Messaging from './pages/Messaging'
import Leads from './pages/Leads'
import Voicemails from './pages/Voicemails'
import Settings from './pages/Settings'

export default function App() {
  return (
    <HashRouter>
      <div className="flex h-screen overflow-hidden bg-[#0d1420]">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/call-history" element={<CallHistory />} />
            <Route path="/messaging" element={<Messaging />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/voicemails" element={<Voicemails />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <Softphone />
      </div>
    </HashRouter>
  )
}
