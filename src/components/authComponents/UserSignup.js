import React from 'react'


const UserSignup = ()=>{
  return(
    <div>
      <form className = "signUpForm">
      
        <input placeholder = "firstname" type = "text"/>
        <input placeholder = "lastname" type = "text"/>
        <input placeholder = "date of birth" type = "date"/>
        <input placeholder = "city" type = "text"/>
        <input placeholder = "state" type = "text"/>
        <input placeholder = "country" type = "text"/>
        <input placeholder = "phonenumber" type = "text"/>
        <input placeholder = "emailaddress" type = "text"/>
        <input placeholder = "password" type = "password"/>

        <div><button>Register</button></div>
        
      
      </form>
    </div>
  )
}
export default UserSignup