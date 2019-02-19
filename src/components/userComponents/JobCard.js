import React from 'react'

const JobCard = (props)=>{
  return(
    <div className = "card">
      <h1>{props.jobtit}</h1>
      <p>{props.jobdes}</p>
      <p>{props.jobdur}</p>
      <p>{props.jobprice}</p>
    </div>
  )
}

export default JobCard