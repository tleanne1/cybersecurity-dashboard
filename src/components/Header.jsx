import React from 'react'

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between bg-[#4DA1A9] text-white px-6 py-4 shadow-md">
      <h1 className="text-2xl font-semibold">Security Overview</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => document.documentElement.classList.toggle('dark')}
          className="px-3 py-1 rounded-md bg-white text-black"
        >
          Toggle Theme
        </button>
        <span className="text-xl">🔔</span>
        <div className="bg-white text-gray-800 px-3 py-1 rounded-full font-medium">
          Analyst
        </div>
      </div>
    </header>
  )
}

export default Header
