import React from 'react'
import {connect} from 'react-redux'


function mapStateToProps(state){
  return state.userReducer
}

const UserDetails = (props)=>{
  // const interests =()=>{
  //   props.userInterests.map((interest,i)=>{
  //     console.log(interest)
  //     return <p key = {i}>{interest.scope_name}</p>
  //   })
  // }
  return(
    <div className =  "userProfile">
      <div className = "userbio">
        <img src = {props.profilepictureurl} alt="profilepicture"/>
        <h3>Name</h3>
        <p>{props.firstname} {props.lastname}</p>
        <h3>Bio</h3>
        <p>{props.user_bio}</p>
        <h3>Date of birth</h3>
        <p>{props.dob}</p>
      </div>

      <div className = "userProfileSec2">
        <div className = "userAddress">
          <h3>Location</h3>
          <p>{props.city}</p>
          <p>{props.state}</p>
          <p>{props.country}</p>
        </div>

        <div className = "userContact">
          <h3>Contact</h3>
          <p>Phone number: {props.phonenumber}</p>
          <p>Email address: {props.emailaddress}</p>
          <p></p>
          <button><a href = {props.socialnetworkurl} > Social Media</a></button>
        </div>

        <div className = "userInterest">
          <h3>Interests</h3>
          {
            props.userInterests.map((interest,i)=> <p key = {i}>{interest.scope_name}</p>)
          }
        </div>
      
      </div> 
    </div>
  )
}

export default connect(mapStateToProps) (UserDetails)