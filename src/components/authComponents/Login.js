import React from 'react'

const Login = (props) =>{
  return(
    <div className = "loginForm">
      <input type = "text" placeholder = "email" name = "email" onChange = {(e)=>{props.inputLogger(e)}} />
      <input type = "password" placeholder = "password" name = "password" onChange = {(e)=>{props.inputLogger(e)}}/>
      <button onClick = {()=>{props.loginSubmit()}}>Sign in</button>
    </div>
  )
}

export default Login