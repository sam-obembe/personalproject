import React, {Component} from 'react'
import Suggestions from './Suggestions'
import axios from 'axios'

class JobCard extends Component{
  constructor(){
    super()
    this.state = {
      suggestions: [],
      showSuggestion: false
    }
  }

  componentDidMount(){
    let id = this.props.id
    axios.get(`/search/job/users/${+id}`).then((res)=>{
      this.setState({suggestions:res.data})
      console.log(this.state.suggestions)
    })
  }

  showToggle = ()=>{
    this.state.showSuggestion? this.setState({showSuggestion:false}):this.setState({showSuggestion:true})
  }
  
  render(){
    let buttonText = this.state.showSuggestion? "Hide Suggestion":"Show Suggestions"

    const suggestion = ()=>{
      if(this.state.showSuggestion){
        return <Suggestions jobID = {this.props.id} suggestions = {this.state.suggestions}/>
      } 
    }

    return(
      <div>

      <div className = "employerJobCard">
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <p>{this.props.duration}</p>
        <p>{this.props.price}</p>
        <button onClick = {()=>{this.showToggle()}}>{buttonText}</button>
        <button>Delete</button>
      </div> 
      {suggestion()}

      </div>
    )
  }
 
}

export default JobCard