import React from 'react'

const Login = () =>{
  return(
    <div className = "loginForm">
      <input type = "text" placeholder = "email"/>
      <input type = "password" placeholder = "password"/>
      <button>Sign in</button>
    </div>
  )
}

export default Login