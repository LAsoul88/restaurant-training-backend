import express from 'express'
import { Sequelize, DataTypes } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = 3000

const sequelize = new Sequelize(process.env.DB_URL!)

const Member = sequelize.define('Member', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  tableName: 'member',
  timestamps: false
})

app.get('/', async (req, res) => {
  try {
    await sequelize.authenticate();
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