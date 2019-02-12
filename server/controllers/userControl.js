module.exports = {
  getjobs: async (req,res)=>{
    const db = req.app.get('db')
    const jobs = await db.get_jobs(req.session.user.id)
    console.log(jobs)
    res.status(200).json(jobs)
  }
}