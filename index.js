require('dotenv').config()
const express = require('express')
const app = express()
const port = 6000

app.get('/twitter',(req,res) => {
  res.send("jstara.com")
})

app.get('/login',(req,res) => {
  res.send('please login as your username')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})