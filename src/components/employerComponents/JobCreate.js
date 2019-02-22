import React from 'react'
import {Link} from 'react-router-dom'

const JobCreate = ()=>{
  return(
    <Link to = "/employer/jobCreate">
    <div className = "tile">
      <h2>Create New Job</h2>
    </div>
    </Link>
  )
}

export default JobCreate