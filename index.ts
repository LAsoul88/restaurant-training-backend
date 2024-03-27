import express from 'express'
import { Member } from './models/Member'

const app = express()
const port = 3000

app.get('/', async (req, res) => {
  try {
    const tev = await Member.create({ first_name: 'Tevenn', last_name: 'Lewis' })
    console.log(tev.toJSON())
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  res.send('Hello, TypeScript with Express!')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})