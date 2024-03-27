import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'

dotenv.config()

export const sequelize = new Sequelize(process.env.DB_URL!, {
  host: 'localhost',
  dialect: 'postgres'
})

