import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {isEmployer,isNotEmployer} from '../ducks/reducers/accountTypeReducer'
import {connect} from 'react-redux'


class Landing extends Component{
 
  render(){
    return(
      
      
      <div className = "landing">
        <div className = "landingText">
          <h1>Welcome To Your Next Opportunity</h1>
          
          <div className = "authNav" id = "workerAuthNav">
            <Link to = "/auth" onClick= {this.props.isNotEmployer}>
              <h1>Workers</h1>
            </Link>
          </div>
          
          
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
export default connect(mapStateToProps,{isEmployer,isNotEmployer}) (Landing);