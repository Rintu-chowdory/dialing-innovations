import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import CallHistory from './pages/CallHistory'
import Leads from './pages/Leads'
import Voicemails from './pages/Voicemails'
import Messaging from './pages/Messaging'
import Settings from './pages/Settings'
import Datenschutz from './pages/Datenschutz'
import Impressum from './pages/Impressum'

export default function App() {
  const [activePage, setActivePage] = useState('dashboard')

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />
      case 'call-logs':
        return <CallHistory />
      case 'contacts':
        return <Leads />
      case 'voicemail':
        return <Voicemails />
      case 'analytics':
        return <Messaging />
      case 'settings':
        return <Settings />
      case 'datenschutz':
        return <Datenschutz />
      case 'impressum':
        return <Impressum />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-black">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  )
}
