import React from 'react'
import { motion } from 'framer-motion'

const cards = [
  { title: 'Active Threats', value: '12', icon: '🛡️', color: 'bg-red-600' },
  { title: 'Systems Monitored', value: '34', icon: '🖥️', color: 'bg-blue-600' },
  { title: 'Logs Collected', value: '87K', icon: '📂', color: 'bg-green-600' },
  { title: 'Critical Alerts', value: '5', icon: '🚨', color: 'bg-yellow-500 text-black' }
]

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {cards.map((card) => (
        <motion.div
          key={card.title}
          className={`p-6 rounded-xl shadow-md ${card.color} text-white`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-3xl mb-2">{card.icon}</div>
          <p className="text-sm uppercase tracking-wide">{card.title}</p>
          <h2 className="text-2xl font-bold">{card.value}</h2>
        </motion.div>
      ))}
    </div>
  )
}

export default DashboardCards
