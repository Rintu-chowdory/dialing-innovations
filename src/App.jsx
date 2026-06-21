import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import CallLogs from './pages/CallLogs'
import Contacts from './pages/Contacts'
import Voicemail from './pages/Voicemail'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'
import Datenschutz from './pages/Datenschutz'
import Header from './components/Header'

export default function App() {
  const [activePage, setActivePage] = useState('dashboard')

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />
      case 'call-logs':
        return <CallLogs />
      case 'contacts':
        return <Contacts />
      case 'voicemail':
        return <Voicemail />
      case 'analytics':
        return <Analytics />
      case 'settings':
        return <Settings />
      case 'datenschutz':
        return <Datenschutz />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-black">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  )
}
