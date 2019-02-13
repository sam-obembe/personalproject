module.exports = {
  getUsers: async(req,res)=>{
    const db = req.app.get("db")
    const {jobID} = req.params
    console.log(jobID)
    const users = await db.get_users(Number(jobID))
    res.status(200).send(users)
  },

  listjobs: async(req,res)=>{
    const db = req.app.get('db')
    const allJobs = await db.see_posted_jobs(req.session.user.id)
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
  }
}




