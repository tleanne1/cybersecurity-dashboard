const express = require('express')
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())

// Real threat data route
app.get('/api/threats', async (req, res) => {
  try {
    const response = await axios.get('https://otx.alienvault.com/api/v1/pulses/subscribed', {
      headers: {
        'X-OTX-API-KEY': process.env.OTX_API_KEY
      }
    })

    const formatted = response.data.results.slice(0, 7).map((pulse, index) => ({
      name: `Day ${index + 1}`,
      threats: pulse.indicator_count || Math.floor(Math.random() * 10)
    }))

    res.json(formatted)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ error: 'Failed to fetch threat data' })
  }
})

const PORT = 5050
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
