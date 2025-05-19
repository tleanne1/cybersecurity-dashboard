import React from 'react'

const Sidebar = () => {
  const menuItems = ['Dashboard', 'Threats', 'Alerts', 'Logs', 'Settings']

  return (
    <aside className="w-64 h-screen bg-[#2E5077] text-white p-6">
      <h2 className="text-2xl font-bold mb-8">🔐 CyberSec</h2>
      <ul className="space-y-4">
        {menuItems.map(item => (
          <li key={item} className="hover:text-teal-300 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
