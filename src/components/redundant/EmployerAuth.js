import React, { Component } from 'react'
import Login from '../authComponents/Login'
import EmployerSignup from '../authComponents/EmployerSignup'
import {connect} from 'react-redux'
import './auth.css'
import axios from 'axios';

class EmployerAuth extends Component{
  constructor(){
    super()
    this.state = {
      isLogin: true,
      email: "",
      password: ""
    }
  }
  
  formChange = ()=>{
    if(this.state.isLogin){ this.setState({isLogin:false}) } 
    else{ this.setState({isLogin:true}) }
  }

  employerInputHandle = (e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  submission=()=>{
    const {email,password} = this.state
    axios.post("/login/employer",{email,password}).then(res=>{
      console.log(res.data)
    })
  }

  render(){
    console.log(this.props.isEmployer)
    let buttonText
    const form = ()=>{
      if(this.state.isLogin){
        buttonText = "Register"
        return( <div className = "authCard authCardLogin">
          <h3>Employer</h3>
          <Login inputLogger = {this.employerInputHandle} loginSubmit = {this.submission}/>
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

function mapStateToProps(state){
  return state.accountTypeReducer
}

export default connect(mapStateToProps)(EmployerAuth)