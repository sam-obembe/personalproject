import React from 'react'

const UserContactEdit = (props)=>{
  return(
    <div className = "userContact">
    <input type = "text" value = {props.phonenumber} name = "phonenumber" onChange = {(e)=>this.inputHandle(e)} placeholder = "Phone number"/>

    <input type = "text" value = {props.emailaddress} name = "emailaddress" onChange = {(e)=>this.inputHandle(e)} placeholder = "Email address"/>

    <input type = "text" value = {props.socialnetworkurl} name = "socialnetworkurl" onChange = {(e)=>props.inputHandle(e)} placeholder = "Social network url"/>

  </div>
  )
}

export default UserContactEdit