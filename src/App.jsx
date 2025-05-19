import React from 'react'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar />
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-4xl font-bold">✅ Cybersecurity Dashboard</h1>
      </main>
    </div>
  )
}

export default App
