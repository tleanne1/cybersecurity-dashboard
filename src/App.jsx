import React from 'react'
import Layout from './components/Layout'
import DashboardCards from './components/DashboardCards'
import ThreatChart from './components/ThreatChart'
import AlertsPanel from './components/AlertsPanel'
import { motion } from 'framer-motion'

const App = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <DashboardCards />
        <ThreatChart />
        <AlertsPanel />
      </motion.div>
    </Layout>
  )
}

export default App
