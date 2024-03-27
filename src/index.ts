import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log('this works')
  res.send('Hello, TypeScript with Express!')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})