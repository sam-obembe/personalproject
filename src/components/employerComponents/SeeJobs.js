import React from 'react'
import {Link} from 'react-router-dom'

const SeeJobs = ()=>{
  return(
    <Link to = "/employer/jobList">
    <div className = "tile">
      <h2>SeeJobs</h2>
    </div>
    </Link>
  )
}

export default SeeJobs