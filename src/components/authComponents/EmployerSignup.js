import React, {Component} from 'react'
import axios from 'axios';
import {Redirect} from 'react-router-dom'
//import {connect} from 'react-redux'
//import {employerRegistration} from '../../ducks/reducers/employerReducer'

class  EmployerSignup extends Component {
  constructor(){
    super()
      this.state = {
        employer_name: "",
        employer_number: "",
        employer_email: "",
        city: "",
        state: "",
        country: "",
        password: "",
        isSuccess: false
      }
    
  }

  inputChange = (e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  submission = ()=>{
    
    axios.post("/register/employer", this.state).then(()=>this.setState({isSuccess:true})).catch(()=> alert("Please check form again and refill") )

    this.setState({
      employer_name: "",
      employer_number: "",
      employer_email: "",
      city: "",
      state: "",
      country: "",
      password: "",
    }
    )
  }

  render(){
    if(this.state.isSuccess){
      return <Redirect to = "/home"/>
    }
    return(
      <div className = "signUpForm">
    
        <input placeholder = "Name" type = "text" name = "employer_name" onChange = {(e)=> this.inputChange(e)} value = {this.state.employer_name}/>

          <input placeholder = "City" type = "text" name = "city" onChange = {(e)=>this.inputChange(e)} value = {this.state.city}/>

          <input placeholder = "State" type = "text" name = "state" onChange = {(e)=>this.inputChange(e)} value = {this.state.state}/>

          <input placeholder = "Country" type = "text" name = "country" onChange = {(e)=>this.inputChange(e)} value = {this.state.country} />  

          <input placeholder = "Email" type = "text" name = "employer_email" onChange = {(e)=>this.inputChange(e)} value = {this.state.employer_email} />     

          <input placeholder = "Phone Number" type = "text" name = "employer_number" onChange = {(e)=>this.inputChange(e)} value = {this.state.employer_number} />

          <input placeholder = "Password" type = "password" name = "password" onChange = {(e)=>this.inputChange(e)} value = {this.state.password}/>
          <button onClick = {()=>this.submission()}>Register</button>  
 
       
      </div>
    )
  }
  
}

export default EmployerSignup