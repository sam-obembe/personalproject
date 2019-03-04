import React from 'react'
import {Link} from 'react-router-dom'

const EmployerHeader = ()=>{
  return(
    <div className = "header">
      <Link to = "/home"> <h2>Home</h2> </Link>
      <Link to = "/employerProfile"> <h2>Profile</h2></Link>
    </div>
  )
}
export default EmployerHeader