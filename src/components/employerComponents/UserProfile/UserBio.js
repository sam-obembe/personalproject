import React from 'react'
import {connect} from 'react-redux'

function mapStateToProps(state){
  return state.employerReducer
}

const UserBio = (props)=>{
  const {firstname,lastname,city,state,country,userbio,socialnetworkurl} = props.selectedUserDetails
  return(
    <div>
      <h1>{firstname} {lastname}</h1>
      <h2>{city}, {state}, {country}</h2>
      <p>{userbio}</p>
      <a href = {socialnetworkurl}><button>See social media</button></a>

    </div>
  )
}

export default connect(mapStateToProps)(UserBio)