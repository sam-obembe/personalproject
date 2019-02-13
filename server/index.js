require("dotenv").config()
const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const massive = require("massive")
const session = require("express-session")
const ac = require("./controllers/authControl") //controller file for authorisation and setting session
const uc = require("./controllers/userControl")
const ec = require("./controllers/employerControl")
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
  cookie: {
    expires: 1000*7*24*60*60
  }
}))


//signups
app.post("/register/user", ac.userSignup)
app.post("/register/employer", ac.employerSignup)
//logins
app.post("/login/user",ac.userLogin)
app.post("/login/employer", ac.employerLogin)
//logout
app.post("/logout",ac.logout)

//user endpoints
app.get("/search/jobs", uc.getjobs) //get all jobs that match a user's interests
app.post("/user/like/:jobID", uc.likeJob) //like a job, needs more work
app.get("/user/matches", uc.getMatches)

//employer endpoints
app.get(`/search/job/users/:jobID`, ec.getUsers) //get all users interested in a job
app.get("/employer/postedJobs", ec.listjobs) //list all jobs
app.post("/employer/jobs", ec.postJob) //post a job
app.post("/employer/job/like/:userID", ec.likeUser) //like a user for a job
app.get("/employer/job/matches", ec.getJobMatches)

app.listen(port, ()=>console.log(`listening on localhost:${port}`))