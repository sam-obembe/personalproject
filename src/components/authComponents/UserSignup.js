import React,{Component} from 'react'
import axios from 'axios';
import {Redirect} from 'react-router-dom'


class UserSignup extends Component {
  
  constructor(){
    super()
    this.state = {
      firstname : "",
      lastname : "", 
      dob : "",
      city : "",
      state: "",
      country: "",
      phonenumber: "",
      emailaddress: "",
      password: "",
      isSuccess: false
    }
  }
  
  inputHandle = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  submission = ()=>{
    axios.post("/register/user",this.state).then(res=>this.setState({isSuccess: true})).catch(res=> alert("Please check credentials and try again"))
    this.setState({
      firstname : "",
      lastname : "", 
      dob : "",
      city : "",
      state: "",
      country: "",
      phonenumber: "",
      emailaddress: "",
      password: ""
    })
  }

  render(){
  if(this.state.isSuccess){
    return <Redirect to = "/home"/>
  }
  const{firstname,lastname,dob,city,state,country,phonenumber,emailaddress,password} = this.state
  return(
    <div className = "signUpForm">
      
    <input placeholder = "firstname" type = "text" name = "firstname" value = {firstname} onChange = {(e)=>{this.inputHandle(e)}}/>

    <input placeholder = "lastname" type = "text" name = "lastname" value = {lastname} onChange = {(e)=>{this.inputHandle(e)}}/>

    <input placeholder = "date of birth" type = "date" name = "dob" value = {dob} onChange = {(e)=>{this.inputHandle(e)}}/>

    <input placeholder = "city" type = "text" name = "city" value = {city} onChange = {(e)=>{this.inputHandle(e)}}/>

    <input placeholder = "state" type = "text" name = "state" value = {state} onChange = {(e)=>{this.inputHandle(e)}}/>

    <input placeholder = "country" type = "text" name = "country" value = {country} onChange = {(e)=>{this.inputHandle(e)}}/>

    <input placeholder = "phonenumber" type = "text" name = "phonenumber" value = {phonenumber} onChange = {(e)=>{this.inputHandle(e)}}/>

    <input placeholder = "emailaddress" type = "text" name = "emailaddress" value = {emailaddress} onChange = {(e)=>{this.inputHandle(e)}}/>

    <input placeholder = "password" type = "password" name = "password" value ={password} onChange = {(e)=>{this.inputHandle(e)}}/>  

    <button onClick = {()=>this.submission()} action = "/home">Register</button>       
    </div>
  )
}

}
export default UserSignup