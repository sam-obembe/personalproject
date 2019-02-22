import React,{Component} from 'react'
import axios from 'axios'
import Select from './Select'

class JobCreateForm extends Component{
  constructor(){
    super()
    this.state = {
      jobScopes : [] 
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

  render(){
    return(
      <div className = "jobCreate">
        <h2>Post a New Job</h2>
        <input type ="text" placeholder = "Job Title"/>
        <p>Job Category: <Select options = {this.state.jobScopes}/></p>
        <textarea type = "text" placeholder = "description"/>
        <input type = "number" placeholder = "price" />
        <input type = "text" placeholder = "duration"/>
        <button>Post Job</button>
      </div>
    )
  }
}

export default JobCreateForm