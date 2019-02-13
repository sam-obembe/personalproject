module.exports = {
  getjobs: async (req,res)=>{
    const db = req.app.get('db')
    const jobs = await db.get_jobs(req.session.user.id)
    console.log(jobs)
    res.status(200).json(jobs)
  },

  likeJob: async(req,res)=>{
    const db = req.app.get('db')
    const{jobID} = req.params
    const {id} = req.session.user
    const liked = await db.like_job(id, jobID).catch(()=>db.trigger_match(id,jobID))
    res.status(200).send(liked)
  },

  getMatches: async(req,res)=>{
    const db = req.app.get('db')
    const {id} = req.session.user
    const matches = await db.get_user_matches(id)
    res.status(200).json(matches)
  }
}