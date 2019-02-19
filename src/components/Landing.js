import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {isEmployer,isNotEmployer} from '../ducks/reducers/accountTypeReducer'
import {connect} from 'react-redux'
//is employer and isNotEmployer are methods from the accountType reducer that set the isEmployer value to true or false.

class Landing extends Component{
 
  render(){
    return(
      
      
      <div className = "landing">
        <div className = "landingText">
          <h1>Welcome To Your Next Opportunity</h1>
          {/* the worker is not an employer so call isNotEmployer from this props */}
          <div className = "authNav" id = "workerAuthNav">
            <Link to = "/auth" onClick= {this.props.isNotEmployer}>
              <h1>Workers</h1>
            </Link>
          </div>
          
          {/* employer authentication will be needed so call isEmployer from this.props */}
          <div className = "authNav" id = "employerAuthNav" >
            <h1><Link to = "/auth" onClick = {this.props.isEmployer} >Employers</Link></h1>
            {/* <button onClick = {this.props.isEmployer}>hi</button> */}
          </div>
        </div>
      </div>
   
  
    )
  }
}

function mapStateToProps(state){
  return state
}

//connect isEmployer and isNotEmployer to props and to the store
export default connect(mapStateToProps,{isEmployer,isNotEmployer}) (Landing);