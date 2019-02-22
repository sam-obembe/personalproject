module.exports = {
  getUsers: async(req,res)=>{
    const db = req.app.get("db")
    //destructure jobID from req.params. It would be passed as a parameter in the sql query
    const {jobID} = req.params
    console.log(jobID)
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
    const {jobID} = req.body
    const {userID} = req.params
    const liked = await db.like_user(userID,jobID).catch(()=>db.trigger_match(userID,jobID))
    res.status(200).send(liked)
  },

  getJobMatches: async(req,res)=>{
    const db = req.app.get('db')
    const {jobID} = req.body
    const matches = await db.get_job_matches(jobID)
    res.status(200).json(matches)
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
  }
}




