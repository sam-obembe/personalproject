import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Select from './Select'

class JobCreateForm extends Component{
  constructor(){
    super()
    this.state = {
      jobScopes : [],
      scope_id : "",
      price: 0,
      duration: "",
      title: "",
      description:"" 
    }
  }

  componentDidMount(){
    axios.get("/employer/jobScopes").then(res=>{
      this.setState({jobScopes:res.data})
    }).then(this.dropdownMap())
  }

  dropdownMap = ()=>{
    this.state.jobScopes.map((scope,i)=> {
    
    return <option value = {scope.scope_id} key ={i}>{scope.scope_name}</option>
  
  })
  }

  inputHandle = (e)=>{ this.setState({[e.target.name]:e.target.value}) }

  jobPost = ()=>{
    let {scope_id,price,duration,title,description} = this.state
    let toSend = {
      scope_id:+scope_id,
      price:+price,
      duration,title,description}
    axios.post("/employer/jobs",toSend).then(()=>{this.setState({
      scope_id : "",
      price: 0,
      duration: "",
      title: "",
      description:"" 
    })})
    
  }

  render(){
    return(
      <div className = "employermain">
      <Link to = "/home"><h1>Home</h1></Link>
      <div className = "jobCreate">
        <h2>Post a New Job</h2>

        <input type ="text" placeholder = "Job Title" name = "title"  value = {this.state.title}onChange = {(e)=>this.inputHandle(e)}/>

        <p>Job Category: <Select options = {this.state.jobScopes} handle = {this.inputHandle}/></p>

        <textarea type = "text" placeholder = "description" name = "description" value = {this.state.description} onChange = {(e)=>this.inputHandle(e)}/>

        <input type = "number" placeholder = "price" name = "price" value = {this.state.price}onChange = {(e)=>this.inputHandle(e)}/>

        <input type = "text" placeholder = "duration" name = "duration" value = {this.state.duration} onChange = {(e)=>this.inputHandle(e)}/>
        
        <button onClick = {()=>this.jobPost()}>Post Job</button>
      </div>
      </div>
    )
  }
}

export default JobCreateForm

/*
This is the form for the employer to create a job.
The job scopes are gotten through an endpoint and these would then be added to a drop down list in the <Select/> component. 
The input handle is passed to the select component as props.
When the user clicks 'Post Job' the jobPost() function is called which sends an axios request along with the user inputs added to the body. 
*/