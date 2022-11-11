const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const corsOptions = {
  origin: 'http://localhost:8081'
}

app.use(cors(corsOptions))

// parse requests of content-type --aplication/json
app.use(bodyParser.json())

//parse request of content-type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
  res.json({message: 'Welcome to the Refresher App'})
})

const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
  console.log(`server is running on port ${PORT}.`)
})
