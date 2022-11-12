const Sequelize = require('sequelize')
const db = require('../db')

const Tutorial = db.define('tutorial',{
  title:{
    type: Sequelize.STRING
  },
  description:{
    type: Sequelize.STRING
  },
  published:{
    type: Sequelize.BOOLEAN
  }
})

module.exports = Tutorial
