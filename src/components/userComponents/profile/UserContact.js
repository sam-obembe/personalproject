import React from 'react'
import {connect} from 'react-redux'

function mapStateToProps(state){
  return state.userReducer
}

const UserContact  = (props)=>{
  return(
    <div className = "userContact">
      <h3>Contact</h3>
      <p>Phone number: {props.phonenumber}</p>
      <p>Email address: {props.emailaddress}</p>
      <p></p>
      <button><a href = {props.socialnetworkurl} > Social Media</a></button>
    </div>

  )
}

export default connect(mapStateToProps) (UserContact)