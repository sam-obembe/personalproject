import React from 'react'
// import SeeGooglePhotos from '../portolio/SeeGooglePhotos'
// import ChooseProfilePicture from './ChooseProfilePicture'

const UserBioEdit = (props)=>{
  return(
    <div className = "userbio">
         
    {/* <input type = "text" value = {props.profilepictureurl} name = "profilepictureurl" onChange = {(e)=>props.inputHandle(e)} placeholder = "Profile Picture url"/> */}
   
    <input type = "text" value = {props.firstname} name = "firstname" onChange = {(e)=>props.inputHandle(e)} placeholder = "First name"/>

    <input type = "text" value  = {props.lastname} name = "lastname" onChange = {(e)=>props.inputHandle(e)} placeholder = "Last name"/>

    <textarea type = "text"value = {props.user_bio} name = "user_bio" onChange = {(e)=>props.inputHandle(e)} placeholder = "Bio"/>

    <input type = "date" value = {props.dob} name = "dob" onChange = {(e)=>props.inputHandle(e)} placeholder = "Date of birth"/>

  </div>
  )
}

export default UserBioEdit

/*
props.firstname
props.lastname
props.user_bio
props.dob
*/