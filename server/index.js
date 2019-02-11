require("dotenv").config()
const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const massive = require("massive")
const session = require("express-session")
const ac = require("./controllers/authControl") //controller file for authorisation and setting session
const port = process.env.S_PATH

app.use(bodyParser.json())

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


//signups
app.post("/register/user", ac.userSignup)
app.post("/register/employer", ac.employerSignup)
//logins
app.post("/login/user",ac.userLogin)
app.post("/login/employer", ac.employerLogin)

app.listen(port, ()=>console.log(`listening on localhost:${port}`))