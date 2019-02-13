import React, {Component} from 'react'

import {Link} from 'react-router-dom'
//import UserAuth from './authComponents/UserAuth'


class Landing extends Component{
  render(){
    return(
      <div>
        
        
        <h1>I am the Landing component</h1>
        <Link to ="/user"><h2>Looking for work</h2></Link>
        <h2>Looking to hire</h2>
        
      </div>
    )
  }
}

export default Landing;