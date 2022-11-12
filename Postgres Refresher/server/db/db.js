const Sequelize = require('sequelize')

const databaseName = 'testdb'

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  {
    logging: false
  }
)

module.exports = db

if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close())
}
