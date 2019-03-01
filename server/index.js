require("dotenv").config()
const express = require('express')
const app = express()
const {google} = require('googleapis')
const bodyParser = require("body-parser")
const massive = require("massive")
const session = require("express-session")
const cors = require('cors')

const ac = require("./controllers/authControl") 
const uc = require("./controllers/userControl")
const ec = require("./controllers/employerControl")
const gc = require("./controllers/googleControl")

const port = process.env.S_PATH
const clientID = process.env.G_CLIENT_ID
const sec = process.env.G_CLIENT_SEC
const redirect = process.env.REDIRECT

const oauth2Client = new google.auth.OAuth2(clientID,sec,redirect)
const authURL = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: "https://www.googleapis.com/auth/photoslibrary.readonly"
})

app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
  }))


app.use(bodyParser.json())

massive(process.env.D_PATH).then(db =>{ 
  app.set('db',db)
  console.log("database connected")
}).catch(err => console.log(err))

app.use(session({
  secret: process.env.AGENT,
  resave: true,
  saveUninitialized: false,
  expires: 7*24*60*60*1000
}))


//endpoints to OAuth and googleAPI
app.get("/", async(req,res)=>{
  res.status(200).send(authURL)
})

app.post("/credcheck",gc.getCode,gc.swapToken) //swap auth code for token

app.get("/user/profile/userGooglePhotos",gc.getPhotos)//getPhotos
app.get("/user/profile/userGooglePhotos/next/:pageToken",gc.getMorePhotos)
app.get("/user/profile/profilepic/:picID",gc.getProfilePic)

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
app.get("/user/likes",uc.getLikes)//get a user's likes 
app.post("/user/like/:jobID", uc.likeJob) //like a job, needs more work
app.get("/user/matches", uc.getMatches)
app.get("/user/details", uc.getDetails)//get a user's details
app.put("/user/profile/edit",uc.editProfile)//edit a user's profile
app.get("/user/interests",uc.getInterests) //get a user's interests
app.get("/user/jobScopes",uc.getJobScopes)//get job scopes for user
app.delete("/user/interest/delete/:scope_id", uc.deleteInterest)//delete a user's interes
app.post("/user/interest/addInterest",uc.addInterest)//add a user's interest
app.post("/user/portfolio",uc.addPortfolio)//add items to a user's portfolio
app.get("/user/portfolio",gc.getPortfolio)

//employer endpoints
app.get("/employer/info", ec.getDetails) ///get an employer's details
app.get(`/search/job/users/:jobID`, ec.getUsers) //get all users interested in a job
app.get(`/employer/selecteduser/:userID`,ec.getUserDetails) //get a selected user's details
app.get("/employer/postedJobs", ec.listjobs) //list all jobs
app.post("/employer/jobs", ec.postJob) //post a job
app.delete("/employer/:jobID", ec.deleteJob) //delete a job
app.post("/employer/like/:jobID/:userID", ec.likeUser) //like a user for a job
app.get("/employer/job/matches/:jobID", ec.getJobMatches)//get matches for a job
app.post("/employer/job/unmatch/:jobID/:userID", ec.unMatchUser)//unmatch a user
app.get("/employer/jobScopes",ec.getJobScopes)


app.listen(port, ()=>console.log(`listening on localhost:${port}`))