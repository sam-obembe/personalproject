module.exports = {
  getUsers: async(req,res)=>{
    
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


// sampleJobPost
//  {
//       "scope_id":" ",
//       "price":" ",
//       "duration": " ",
//       "title" : " ",
//       "description" : " "
//  }

// {
//   "scope_id":"1",
//   "price":"10000",
//   "duration": "9 months",
//   "title" : "Front end Web Developer",
//   "description" : "Need a front end web developer to redesign the landing page for the Asgard residents portal."
// }