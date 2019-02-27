import React from 'react'
import {connect} from 'react-redux'



function mapStateToProps(state){
  return state.userReducer
}

const UserInterestDelete = (props)=>{
  return(
    <div className = "userInterest">
    {props.userInterests.map((interest,i)=>{

        return(
          <p key = {i}>{interest.scope_name}
            <span>
              <i className = "fas fa-trash" onClick = {() => props.deleteInterest(interest.scope_id)}>
              </i>
            </span></p>
        )
    })}
  </div>
  )
}

export default connect(mapStateToProps)(UserInterestDelete)