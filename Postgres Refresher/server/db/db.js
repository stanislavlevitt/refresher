const Sequelize = require('sequelize')

const db = new Sequelize(
  process.env.DATABASE_URL || `postgresql://postgres:ZKaLykrDoIxBEBdvtCYA@containers-us-west-98.railway.app:5525/railway`,
  {
    logging: false
  }
)

module.exports = db

if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close())
}
