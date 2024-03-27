import { DataTypes } from 'sequelize'
import { sequelize } from '../db/db.connection'

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

export { Member }