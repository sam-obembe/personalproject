import React,{Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class EmployerEdit extends Component{
  constructor(){
    super()
    this.state = {
      employer_name: "",
      employer_bio: "",
      employer_number: "",
      employer_email: "",
      city: "",
      state: "",
      country: ""
    }
  }

  componentDidMount(){
    const{employer_name,employer_bio,employer_number,employer_email,city,state,country} = this.props
    this.setState({employer_name,
    employer_bio,
    employer_number,
    employer_email,
    city,
    state,
    country})
  }

  inputHandle = (e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  saveChanges = ()=>{
    axios.put(`/employer/profile/edit`,this.state).then((res)=>console.log(res.data)).catch(err=>console.log(err))
  }

  render(){
    
    return(
      <div className = "jobCreate">
        <input type = "text" placeholder = "name" name = "employer_name"  onChange = {(e)=>this.inputHandle(e)} value = {this.state.employer_name}/>

        <textarea type = "text" placeholder = "Bio" name = "employer_bio" onChange = {(e)=>this.inputHandle(e)} value = {this.state.employer_bio}/>

        <input type = "text" placeholder = "Number" name = "employer_number"  onChange = {(e)=>this.inputHandle(e)} value = {this.state.employer_number}/>

        <input type = "text" placeholder = "Email" name = "employer_email" onChange = {(e)=>this.inputHandle(e)} value = {this.state.employer_email}/>

        <input type = "text" placeholder = "City" name = "city"  onChange = {(e)=>this.inputHandle(e)} value = {this.state.city}/>

        <input type = "text" placeholder = "State" name = "state" onChange = {(e)=>this.inputHandle(e)} value = {this.state.state}/>

        <input type = "text" placeholder = "Country" name = "country" onChange = {(e)=>this.inputHandle(e)} value = {this.state.country}/>

        <button onClick = {()=>this.saveChanges()}>Save changes</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state.employerReducer
}

export default connect(mapStateToProps)(EmployerEdit)