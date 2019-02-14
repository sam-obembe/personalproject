import React, { Component } from 'react'
import Login from './Login'
import EmployerSignup from './EmployerSignup'
import './auth.css'

class EmployerAuth extends Component{
  constructor(){
    super()
    this.state = {
      isLogin: true,
    }
  }

  formChange = ()=>{
    if(this.state.isLogin){
      this.setState({isLogin:false})
    } 
    else{
      this.setState({isLogin:true})
    }
  }

  render(){
    let buttonText
    const form = ()=>{
      if(this.state.isLogin){
        buttonText = "Register"
        return( <div className = "authCard authCardLogin">
          <h3>Employer</h3>
          <Login/>
          <button onClick = {()=>this.formChange()}>{buttonText}</button>
          </div>
          )
      } 
      else{
        buttonText = "Sign in"
        
        return( <div className = "authCard authCardRegister">
        <EmployerSignup/>
        <div><button onClick = {()=>this.formChange()}>{buttonText}</button></div>
        </div>
        )
      }
    }
    return(
      <div className = "main">
        {form()}
      </div>
    )
  }
}

export default EmployerAuth