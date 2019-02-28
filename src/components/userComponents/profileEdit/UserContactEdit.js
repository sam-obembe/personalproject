import React from 'react'

const UserContactEdit = (props)=>{
  return(
    <div className = "userContact">
    <input type = "text" value = "" name = "phonenumber" onChange = {(e)=>this.inputHandle(e)} placeholder = "Phone number"/>

    <input type = "text" value = "" name = "emailaddress" onChange = {(e)=>this.inputHandle(e)} placeholder = "Email address"/>

    <input type = "text" value = "" name = "socialnetworkurl" onChange = {(e)=>props.inputHandle(e)} placeholder = "Social network url"/>

  </div>
  )
}

export default UserContactEdit

/*
  props.phonenumber
  props.emailaddress
  props.socialnetworkurl
*/