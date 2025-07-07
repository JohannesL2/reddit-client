import express from 'express'
import axios from 'axios'
import cors from 'cors'

const app = express()
const PORT = 5000

app.use(cors())

app.get('/api/reddit/:subreddit', async (req, res) => {
  const { subreddit } = req.params
  try {
    const response = await axios.get(`https://www.reddit.com/r/${subreddit}.json`)
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from Reddit' })
  }
})

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`)
})
