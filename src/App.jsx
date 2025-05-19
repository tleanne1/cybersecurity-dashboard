import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import DashboardCards from './components/DashboardCards'
import ThreatChart from './components/ThreatChart'

const App = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-10">
          <DashboardCards />
          <ThreatChart />
        </main>
      </div>
    </div>
  )
}

export default App
