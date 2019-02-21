import React, {Component} from 'react'
import Login from './Login'
import EmployerSignup from './EmployerSignup'
import UserSignup from './UserSignup'
import Header from '../Header'
import {Redirect} from 'react-router-dom'
import {setEmployer} from '../../ducks/reducers/accountTypeReducer'
import {connect} from 'react-redux'
import '../../styles/auth.css'
import axios from 'axios';

class Auth extends Component {
  constructor(){
    super()
    this.state = {
      isLogin: true,
      email: "",
      password: "",
      isSuccess: false
    }
  }

  loginOrRegister = ()=>{
    if(this.state.isLogin){ this.setState({isLogin:false}) } 
    else{ this.setState({isLogin:true}) }
  }

  inputHandle = (e)=>{ this.setState({[e.target.name]: e.target.value}) }

  submission=()=>{
    const {email,password} = this.state

    if(this.props.isEmployer){
    
      axios.post("/login/employer",{email,password}).then(()=> this.setState({isSuccess:true})).catch(()=> alert("Wrong username or password"))
    }

    else{
      axios.post("/login/user",{email,password}).then(()=> this.setState({isSuccess:true})).catch(()=> alert("wrong username or password")) 
    }
  }

  
  formRender = ()=>{
    let text = this.props.isEmployer? "Employer":"User"
    let buttonText = this.state.isLogin? "Register":"Login"

    if(this.props.isEmployer && this.state.isLogin){
      return (
        <div className = "authCard authCardLogin">
          <h3>Login as {text}</h3>
          <Login loginSubmit = {this.submission} inputLogger = {this.inputHandle}/>
          <button onClick = {()=>{this.loginOrRegister()}}>{buttonText}</button>
        </div>
      )
    }


    else if(this.props.isEmployer && this.state.isLogin===false){
      return(
        <div className = "authCard authCardRegister">
          <h3>Register as {text}</h3>
          <EmployerSignup/>
          <button onClick ={()=>{this.loginOrRegister()}}>{buttonText}</button>

        </div>
      )
    } 

    else if(!this.props.isEmployer && this.state.isLogin){
      return(
        <div className = "authCard authCardLogin">
          <h3>Login as {text}</h3>
          <Login loginSubmit = {this.submission} inputLogger = {this.inputHandle}/>
          <button onClick = {()=>{this.loginOrRegister()}}>{buttonText}</button>
        </div>
      )
    }

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
    if(this.state.isSuccess){
      return <Redirect to= "/home"/>
    }
    return(
      <div className = "main">
      <Header/>
        {this.formRender()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return state.accountTypeReducer
}

export default connect(mapStateToProps,{setEmployer})(Auth)

/* 
In this component, we import three other components, EmployerSignup, UserSignup and Login. 
EmployerSignup and UserSignup are class based components which render registration forms for the employer and user.
Login is a functional component which will accept props from this component. 
The styling for this component is achieved through auth.css
In the initial state for this component, we have isLogin, email and password. isLogin is defaulted to true while the others are empty strings.

LOGIN OR REGISTER FUNCTION
loginOrRegister is a function that toggles isLogin from 'true' to 'false' and vice versa whenever it is invoked. This will be passed to an onClick attribute.
inputHandle tracks user input. The 'name' attributes on the input fields are set to match the key values in our local state i.e 'email', 'password'.

SUBMISSION FUNCTION
submission is a function that takes the email and password from the local state. 
Based on the isEmployer value in the accountTypeReducer file, if isEmployer is true, an axios post request is made to the employer login endpoint "/login/employer" wiith the email and password passed into the body of the request as an object. When the request is successfully completed, the window is redirected to the home page, <Home/> component.
If isEmployer in accountTypeReducer is false, then the post request is made to the user login endpoint. When succesfully completed, the window is redirectoed to the home page, <Home/> component. 
The submission function is passed as props to the <Login/> functional component

FORM RENDER FUNCTION
The formRender() function is very long. 
The variable 'text' is a conditional string that references isEmployer from accountTypeReducer. If isEmployer is true , the text to be displayed is "Employer" or else the text to be displayed is "User".

The variable buttonText is also conditional. If isLogin, which is in the local component state, has a value of 'true', then the button text will be 'Register' and if it is false, the button text should be 'Login'. This is applied to a button that toggles between registration forms and login forms. 

If isEmployer = true and isLogin = true, return an employer login form passing in all the necessary attributes and functions.
If isEmployer = true and isLogin = false, return the employer signup form, <EmployerSignup/> with the necessary attributes.
If isEmployer = false and isLogin = true, return the user login form, passing in all the necessary attibutes and functions.
If isEmployer = false and isLogin = false, return the user signup form , <UserSignup/> with the necessary attributes. 

The forms are wrapped in divs and styled using classes from auth.css in the styles folder.

In the body, render a <Header/> component and the result of the formRender function invoked, thisformRender()
*/