const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const PORT = process.env.PORT || 8080
const app = express()

module.exports = app

const createApp = () => {

  const corsOptions = {
    origin: '*'
  }

  app.use(cors(corsOptions))

  // parse requests of content-type --aplication/json
  app.use(bodyParser.json())

  //parse request of content-type application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({extended:true}))

    // api routes
    app.use('/api', require('./api'))

      // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  })

    // error handling endware
    app.use((err, req, res, next) => {
      console.error(err)
      console.error(err.stack)
      res.status(err.status || 500).send(err.message || 'Internal server error.')
    })

}

const startListening = () => {
  app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}.`)
  })
}

const syncDb = () => db.sync()



// db.sequelize.sync().then(() => {
//   console.log("Drop and re-sync db.");
// });

async function bootApp() {
  await syncDb()
  await createApp()
  await startListening()
}

if (require.main === module) {
  bootApp()
} else {
  createApp()
}
