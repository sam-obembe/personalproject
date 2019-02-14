import React, {Component} from 'react'
//import {HashRouter as Router} from 'react-router-dom'
//import UserAuth from './authComponents/UserAuth'
import { Link } from 'react-router-dom'




class Landing extends Component{
  render(){
    return(
      <div className = "landing">
        <div className = "landingText">
          <h1>Welcome To Your Next Opportunity</h1>
          
          <div className = "authNav" id = "workerAuthNav">
            <Link to = "/user">
              <h1>Workers</h1>
            </Link>
          </div>
          
          
          <div className = "authNav" id = "employerAuthNav">
            <h1><Link to = "/employer">Employers</Link></h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;