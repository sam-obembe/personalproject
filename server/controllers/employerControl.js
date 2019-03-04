require('dotenv').config()
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
})




module.exports = {
  getUsers: async(req,res)=>{
    const db = req.app.get("db")
    //destructure jobID from req.params. It would be passed as a parameter in the sql query
    const {jobID} = req.params
    // console.log(jobID)
    //run a sql query to get the users whose interest's match a job's scope, using the jobID as a parameter. store the result in a users variable
    const users = await db.get_users(Number(jobID))
    //send back result
    res.status(200).send(users)
  },

  listjobs: async(req,res)=>{
    const db = req.app.get('db')
    //list all jobs posted by an employer using the employer's ID as a search parameter gotten from the session.
    const allJobs = await db.see_posted_jobs(req.session.user.id)
    //send back the result of the sql query
    res.status(200).send(allJobs)
  },

  postJob: async(req,res)=>{
    const {scope_id,price,duration,title,description} = req.body
    const id = req.session.user.id
    const db = req.app.get('db')
    const jobPost = await db.create_job(id, scope_id, price, duration, title, description)
    const job = {
      id,
      scope_id,
      price,
      duration,
      title,
      description
    }
    
    res.status(200).json(job)
  },

  likeUser: async(req,res)=>{
    const db = req.app.get('db')
    const {jobID} = req.params
    const {userID} = req.params
    const emailAddress = await db.get_employer_email(jobID)
    const userDetails = await db.get_user_details(userID)
    const jobDetails = await db.get_job_details(jobID)
    const liked = await db.like_user(userID,jobID).catch(async()=>await db.trigger_match(userID,jobID).then(()=>{
      transporter.sendMail({
        from : process.env.EMAIL,
        to: [userDetails[0].emailAddress,emailAddress[0].employer_email],
        subject: "New user Match",
        text: `you have matched
        Job Details:
        ${jobDetails[0].title}
        ${jobDetails[0].description}
        ${jobDetails[0].duration}
        ${jobDetails[0].price}
        User Details:
        ${userDetails[0].firstname} ${userDetails[0].lastname}
        ${userDetails[9]}.bio
        `
      },(err,info)=>{
        if(err){ console.log (err) }
    })
    }))
    res.status(200).send(liked)
  },

  getJobMatches: async(req,res)=>{
    const db = req.app.get('db')
    const {jobID} = req.params
    const matches = await db.get_job_matches(jobID)
    res.status(200).send(matches)
  },

  getDetails: async(req,res)=>{
    const db = req.app.get('db')
    const {id} = req.session.user
    const info = await db.get_employer_details(id)
    res.status(200).send(info)
  },

  getJobScopes : async(req,res)=>{
    const db = req.app.get('db')
    const scopes = await db.get_job_scopes();
    res.status(200).send(scopes)
  },

  unMatchUser: async(req,res)=>{
    const db = req.app.get('db')
    const {userID, jobID} = req.params
    const matchUpdate = await db.trigger_unmatch(userID, jobID).then(db.get_job_matches(jobID))
    res.status(200).send(matchUpdate)
  },

  deleteJob: async(req,res)=>{
    const db = req.app.get('db')
    const {jobID} = req.params
    const {id} = req.session.user
    const deleted = await db.delete_job(jobID,id)
    res.status(200).send(deleted)
  },

  getUserDetails: async(req,res)=>{
    const db = req.app.get('db')
    const {userID} = req.params
    const userDets = await db.get_user_details(userID)
    const userPortfolio = await db.get_user_portfolio(userID)
    const extractedPortfolio = userPortfolio.map((pics)=>pics.picture_id)
    const toSend = Object.assign({},userDets[0],{portfolio:extractedPortfolio})
    res.status(200).send(toSend)
  },

  editProfile : async(req,res)=>{
    const db = req.app.get('db')
    const {id} = req.session.user
    const{employer_name,employer_bio,employer_number,employer_email,city,state,country} = req.body
    await db.edit_employer_profile(id,employer_name,employer_bio,employer_number,employer_email,city,state,country)
    res.status(200).send(`successfully changed`)
  }
    

}




