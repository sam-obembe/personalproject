module.exports = {
  getUsers: async(req,res)=>{
    const db = req.app.get("db")
    const jobID = req.params.jobID
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
  }
}




