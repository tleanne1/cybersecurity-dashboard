import React from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

const data = [
  { name: 'Mon', threats: 4 },
  { name: 'Tue', threats: 9 },
  { name: 'Wed', threats: 5 },
  { name: 'Thu', threats: 7 },
  { name: 'Fri', threats: 3 },
  { name: 'Sat', threats: 6 },
  { name: 'Sun', threats: 2 },
]

const ThreatChart = () => {
  return (
    <div className="bg-[#1e293b] p-6 mt-10 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-4">📈 Threat Activity - Last 7 Days</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Line type="monotone" dataKey="threats" stroke="#79D7BE" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ThreatChart
