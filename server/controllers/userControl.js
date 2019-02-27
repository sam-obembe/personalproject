module.exports = {
  getjobs: async (req,res)=>{
    const db = req.app.get('db')
    //run sql query that gets all jobs that match a user's interests, using the user ID stored in session as a parameter
    const jobs = await db.get_jobs(req.session.user.id)
   
    //send back the result of the query which was stored in a variable called jobs
    res.status(200).json(jobs)
  },

  likeJob: async(req,res)=>{
    const db = req.app.get('db')
    //like a job using the job ID which would be taken off the req.params. Destructure the jobID from req.params
    const{jobID} = req.params
    //the user ID will be needed 
    const {id} = req.session.user
    //run the sql query that lets a user like a job, using the jobID and user ID as parameters which will be inserted into a table of matches. If those IDs already exist as a pair in the matches table, run another sql query that triggers a match and matches the user to the job. 
    const liked = await db.like_job(id, jobID).catch(()=>db.trigger_match(id,jobID))

    //this sends back an empty object
    res.status(200).send(liked)
  },

  getMatches: async(req,res)=>{
    const db = req.app.get('db')
    const {id} = req.session.user
    //run a sql query using the user ID from req.session.user to find the user's matched jobs in the matches table. 
    const matches = await db.get_user_matches(id)
    //send back an object with the details of the jobs that match the user.
    res.status(200).json(matches)
  },

  //get user details from database using query and user ID from sessions
  getDetails : async(req,res)=>{
    const db = req.app.get('db')
    const {id} = req.session.user
    const det = await db.get_user_details(id)
    res.status(200).send(det)
  },

  getLikes: async(req,res)=>{
    const db = req.app.get('db')
    const {id} = req.session.user
    const likes = await db.get_user_likes(id)
    res.status(200).send(likes)
  },

  editProfile: async(req,res)=>{
    const db = req.app.get('db')
    const{firstname,lastname,user_bio,dob,city,state,country,phonenumber,emailaddress,socialnetworkurl,profilepictureurl} = req.body

    const {id} = req.session.user
    const changes = await db.edit_user_profile(id,firstname,lastname,dob,city,state,country,phonenumber,emailaddress,socialnetworkurl,profilepictureurl,user_bio)
    res.status(200).send(changes).catch(err=>console.log(err))
  },

  getInterests: async(req,res)=>{
    const db = req.app.get('db')
    const{id} = req.session.user
    const interest = await db.get_user_interests(id)
    res.status(200).send(interest)
  },

  deleteInterest: async(req,res)=>{
    const db = req.app.get('db')
    const {id} = req.session.user
    console.log(req.params)
    const {scope_id} = req.params
    await db.delete_user_interest(+scope_id,+id)
    res.status(200).send(scope_id)
  },

  getJobScopes : async(req,res)=>{
    const db = req.app.get('db')
    const scopes = await db.get_job_scopes()
    res.status(200).send(scopes)
  }
}