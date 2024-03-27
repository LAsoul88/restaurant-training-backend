import { DataTypes } from 'sequelize'
import { sequelize } from '../db/db.connection'

const Member = sequelize.define(
  'Member', 
  {
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
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profile_pic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    quizzes: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: []
    },
    teams: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: []
    }
  },
  {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

const Quiz = sequelize.define(
  'Quiz',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }, 
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    questions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: []
    }
  },
  {
    timestamps: false
  }
)

export { Member, Quiz }