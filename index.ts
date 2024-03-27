import express from 'express'
import bodyParser from 'body-parser'
import { Member } from './models/Member'

const app = express()
const port = 3000

// middleware to parse through url and json in requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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