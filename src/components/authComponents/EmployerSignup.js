import React from 'react'


const EmployerSignup = ()=>{
  return(
    <div>
      <form className = "signUpForm">
          <input placeholder = "Company or Employer Name" type = "text"/>
          <input placeholder = "Bio" type = "text"/>
          <input placeholder = "City" type = "text"/>
          <input placeholder = "State" type = "text"/>
          <input placeholder = "Country" type = "text"/>        
          <input placeholder = "Email" type = "text"/>     
          <input placeholder = "Phone Number" type = "text"/>
          <input placeholder = "Password" type = "password"/>
          <div><button>Register</button></div>
      </form>
      
    </div>
  )
}

export default EmployerSignup