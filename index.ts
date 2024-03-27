import express from 'express'
import bodyParser from 'body-parser'
import { generateRoutes } from './helpers/generateRoutes'

import routes from './routes/index'

const app = express()
const port = 3000

// middleware to parse through url and json in requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

generateRoutes(routes, app)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})