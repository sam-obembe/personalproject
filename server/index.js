require("dotenv").config()
const express = require('express')
const app = express()
const massive = require("massive")
const session = require("express-session")
const port = process.env.S_PATH

massive(process.env.D_PATH).then(db =>{ 
  app.set('db',db)
  console.log("database connected")
}).catch(err => console.log(err))

app.use(session({
  secret: process.env.AGENT,
  resave: true,
  saveUninitialized: false,
  expires: 1000*7*24*60*60
}))

app.listen(port, ()=>console.log(`listening on localhost:${port}`))