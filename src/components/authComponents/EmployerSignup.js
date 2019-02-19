import React, {Component} from 'react'
import axios from 'axios';
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
      }
    
  }

  inputChange = (e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  submission = ()=>{
    
    axios.post("/register/employer", this.state).then((res)=>{
      console.log(res.data)
      window.location = "/home"
    }).catch(()=>window.location = "/auth" )

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
    return(
      <div>
        <form className = "signUpForm">

        <input placeholder = "Name" type = "text" name = "employer_name" onChange = {(e)=> this.inputChange(e)} value = {this.state.employer_name}/>

          <input placeholder = "City" type = "text" name = "city" onChange = {(e)=>this.inputChange(e)} value = {this.state.city}/>

          <input placeholder = "State" type = "text" name = "state" onChange = {(e)=>this.inputChange(e)} value = {this.state.state}/>

          <input placeholder = "Country" type = "text" name = "country" onChange = {(e)=>this.inputChange(e)} value = {this.state.country} />  

          <input placeholder = "Email" type = "text" name = "employer_email" onChange = {(e)=>this.inputChange(e)} value = {this.state.employer_email} />     

          <input placeholder = "Phone Number" type = "text" name = "employer_number" onChange = {(e)=>this.inputChange(e)} value = {this.state.employer_number} />

          <input placeholder = "Password" type = "password" name = "password" onChange = {(e)=>this.inputChange(e)} value = {this.state.password}/>
            
        </form>
        <button onClick = {()=>this.submission()}>Register</button>
        
      </div>
    )
  }
  
}

// function mapStateToProps(state){
//   return state.employerReducer
// }


export default EmployerSignup