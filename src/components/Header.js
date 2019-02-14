import React from 'react'
import {Link} from 'react-router-dom'
//import routes from '../routes'
const Header = ()=>{
  return(
    <div className = "header">
      <Link to = "/">Home</Link>
      <Link to = "/user">Looking for Jobs</Link>
      <Link to = "/employer">Looking to hire</Link>
    </div>
  )
}

export default Header