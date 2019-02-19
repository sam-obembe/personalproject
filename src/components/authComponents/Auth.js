import React, {Component} from 'react'
import Login from './Login'
import EmployerSignup from './EmployerSignup'
import UserSignup from './UserSignup'
import {connect} from 'react-redux'
import './auth.css'
//import '../../materialize.css'
import axios from 'axios';

class Auth extends Component {
  constructor(){
    super()
    this.state = {
      isLogin: true,
      email: "",
      password: "",
    }
  }

  // componentDidMount(){
  //   //set isEmployer in state to the isEmployer value in redux
  //   // this.setState({isEmployer:this.props.isEmployer})
  // }
  //toggle isLogin to true or false which will conditionally render login form or registration form 
  loginOrRegister = ()=>{
    if(this.state.isLogin){ this.setState({isLogin:false}) } 
    else{ this.setState({isLogin:true}) }
  }

  inputHandle = (e)=>{ this.setState({[e.target.name]: e.target.value}) }

  //submit login details to either employer end point or user endpoint
  submission=()=>{
    const {email,password} = this.state
    //if this is an employer, post the email and password to the employer path
    if(this.props.isEmployer){
      axios.post("/login/employer",{email,password}).then(res=>{
        console.log(res.data)
        //after successful login, redirect to the dashboard on the /home path
        window.location = "/home"
        //for unsuccessful login, redirect to the auth page
      }).catch(()=> window.location = "/auth")
    } 
    else{
      axios.post("/login/user",{email,password}).then(()=> window.location = "/home").catch(()=> window.location = "/auth") 
    }
  }

  //dynamically render the right form based of isLogin and isEmployer values
  formRender = ()=>{
    let text = this.props.isEmployer? "Employer":"User"
    let buttonText = this.state.isLogin? "Register":"Login"
    //if this is an employer trying to login, return the Login form an pass down the following props
    if(this.props.isEmployer && this.state.isLogin){
      return (
        <div className = "authCard authCardLogin">
          <h3>Login as {text}</h3>
          <Login loginSubmit = {this.submission} inputLogger = {this.inputHandle}/>
          <button onClick = {()=>{this.loginOrRegister()}}>{buttonText}</button>
        </div>
      )
    }

    //if this is an Employer and this person is not trying to login, render the Employer Signup form
    else if(this.props.isEmployer && this.state.isLogin===false){
      return(
        <div className = "authCard authCardRegister">
          <h3>Register as {text}</h3>
          <EmployerSignup/>
          <button onClick ={()=>{this.loginOrRegister()}}>{buttonText}</button>

        </div>
      )
    } 
    //if this is not an employer, ie a worker and this person is trying to login, render the login form and pass in these props
    else if(!this.props.isEmployer && this.state.isLogin){
      return(
        <div className = "authCard authCardLogin">
          <h3>Login as {text}</h3>
          <Login loginSubmit = {this.submission} inputLogger = {this.inputHandle}/>
          <button onClick = {()=>{this.loginOrRegister()}}>{buttonText}</button>
        </div>
      )
    }
    //if the person is not an employer and is not trying to login, ie a worker trying to register, render the User Signup form 
    else if(!this.props.isEmployer && !this.state.isLogin){
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
        {/* call the render function here and it will show the right form depending on the conditions */}
        {this.formRender()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return state.accountTypeReducer
}

export default connect(mapStateToProps)(Auth)