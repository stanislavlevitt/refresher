const router = require('express').Router()
module.exports = router

router.get("/", async (req,res)=>{
  res.json({message: 'Welcome to the Refresher App'})
})
