import React from 'react'
import {connect} from 'react-redux'

function mapStateToProps(state){
  return state.userReducer
}

const UserInterest  = (props)=>{
  return(
    <div className = "userInterest">
      <h3>Interests</h3>
          {
            props.userInterests.map((interest,i)=> <p key = {i}>{interest.scope_name}</p>)
          }
    </div>
  )
}

export default connect(mapStateToProps) (UserInterest)