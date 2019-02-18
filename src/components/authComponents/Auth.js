import React, {Component} from 'react'
import Login from './Login'
import EmployerSignup from './EmployerSignup'
import UserSignup from './UserSignup'
import {connect} from 'react-redux'
import './auth.css'
//import axios from 'axios';

class Auth extends Component {
  constructor(){
    super()
    this.state = {
      isLogin: true,
      email: "",
      password: "",
      isEmployer: ""
    }
  }

  componentDidMount(){
    //set isEmployer in state to the isEmployer value in redux
    this.setState({isEmployer:this.props.isEmployer})
  }

  loginOrRegister = ()=>{
    if(this.state.isLogin){ this.setState({isLogin:false}) } 
    else{ this.setState({isLogin:true}) }
  }

  formRender = ()=>{
    let text = this.state.isEmployer? "Employer":"User"
    let buttonText = this.state.isLogin? "Register":"Login"
    if(this.state.isEmployer && this.state.isLogin){
      return (
        <div className = "authCard authCardLogin">
          <h3>Login as {text}</h3>
          <Login/>
          <button onClick = {()=>{this.loginOrRegister()}}>{buttonText}</button>
        </div>
      )
    }
    else if(this.state.isEmployer && this.state.isLogin===false){
      return(
        <div className = "authCard authCardRegister">
          <h3>Register as {text}</h3>
          <EmployerSignup/>
          <button onClick ={()=>{this.loginOrRegister()}}>{buttonText}</button>

        </div>
      )
    } 
    else if(!this.state.isEmployer && this.state.isLogin){
      return(
        <div className = "authCard authCardLogin">
          <h3>Login as {text}</h3>
          <Login/>
          <button onClick = {()=>{this.loginOrRegister()}}>{buttonText}</button>
        </div>
      )
    }
    else if(!this.state.isEmployer && !this.state.isLogin){
      return(
        <div className = "authCard authCardRegister">
          <h3>Register as {text}</h3>
          <UserSignup/>
          <button onClick = {()=>{this.loginOrRegister()}}>{buttonText}</button>
        </div>
      )
    }
  }

  render(){
    
    return(
      <div className = "main">
        
        {this.formRender()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return state.accountTypeReducer
}

export default connect(mapStateToProps)(Auth)