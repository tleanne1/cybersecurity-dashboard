import React from 'react'
import { motion } from 'framer-motion'

const alerts = [
  {
    title: 'Unauthorized Access Attempt',
    severity: 'Critical',
    time: '2 mins ago',
    color: 'bg-red-600'
  },
  {
    title: 'Malware Signature Detected',
    severity: 'High',
    time: '15 mins ago',
    color: 'bg-orange-500'
  },
  {
    title: 'Unusual Login Pattern',
    severity: 'Medium',
    time: '1 hour ago',
    color: 'bg-yellow-400 text-black'
  },
  {
    title: 'Outdated Software Detected',
    severity: 'Low',
    time: '3 hours ago',
    color: 'bg-green-500'
  }
]

const AlertsPanel = () => {
  return (
    <div className="bg-[#1e293b] p-6 mt-10 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-4">🚨 Recent Security Alerts</h3>
      <ul className="space-y-4">
        {alerts.map((alert, index) => (
          <motion.li
            key={index}
            className="flex items-center justify-between p-4 rounded-lg bg-gray-800"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="font-semibold">{alert.title}</p>
              <p className="text-sm text-gray-400">{alert.time}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${alert.color}`}>
              {alert.severity}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default AlertsPanel
