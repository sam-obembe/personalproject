import React from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import axios from 'axios'
// import {withStyles} from '@material-ui/core/styles'
// import PropTypes from 'prop-types'

const UserHeader = ()=>{
  return(
    <div>
      <AppBar color = "primary">
        <Toolbar>
          <Link to = "/home"> <Button>Home</Button> </Link>
          <Link to = "/userProfile"> <Button>Profile</Button> </Link>
          <Link to = "/"> 
            <Button onClick = {()=>axios.post("/logout")}>Logout</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default UserHeader

/*
   <div className = "header">
      <Link to = "/home"> <h2>Home</h2> </Link>
      <Link to = "/userProfile"> <h2>Profile</h2></Link>
    </div>

*/