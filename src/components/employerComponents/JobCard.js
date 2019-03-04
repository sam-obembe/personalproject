import React, {Component} from 'react'
import Suggestions from './Suggestions'
import Matches from './Matches'
import axios from 'axios'

class JobCard extends Component{
  constructor(){
    super()
    this.state = {
      suggestions: [],
      matches: [],
      showSuggestion: false,
      showMatches: false
    }
  }

  async componentDidMount(){
    await this.getUsers()
    await this.getMatches()
  }

  getUsers = async ()=>{
    let id = this.props.id
    axios.get(`/search/job/users/${+id}`).then((res)=>{
      this.setState({suggestions:res.data})
    })
  }

  getMatches = async ()=>{
    let id = this.props.id
    axios.get(`/employer/job/matches/${+id}`).then((res)=>{
      this.setState({matches: res.data})
    })
  }

  suggestionsToggle = ()=>{
    this.state.showSuggestion? this.setState({showSuggestion:false}):this.setState({showSuggestion:true})
  }

  matchesToggle = ()=>{
    this.state.showMatches? this.setState({showMatches:false}): this.setState({showMatches:true})
  }

  deleteJob = ()=>{
    let jobID = this.props.id
    axios.delete(`/employer/${jobID}`).then(()=>alert("Deleted Job"))
  }

  
  render(){
    let buttonText = this.state.showSuggestion? "Hide Suggestions":"Suggestions"

    let matchButtonText = this.state.showMatches? "Hide Matches":"Matches"

    const suggestion = ()=>{
      if(this.state.showSuggestion){
        return <Suggestions jobID = {this.props.id} suggestions = {this.state.suggestions} getUsers = {this.getUsers}/>
      } 
    }

    const match = ()=>{
      if(this.state.showMatches){
        return <Matches jobID = {this.props.id}  matches = {this.state.matches} getMatch = {this.getMatches}/>
      }
    }

    return(
      <div>

      <div className = "employerJobCard">
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <p>{this.props.duration}</p>
        <p>{this.props.price}</p>
        <div className = "iconSpaceEmployer">
          <button onClick = {()=>this.suggestionsToggle()}>{buttonText}</button>
          <button onClick = {()=>this.matchesToggle()}>{matchButtonText}</button>
          <button onClick = {()=>this.deleteJob()}>Delete</button>
        </div>
        
      </div> 
      {suggestion()}
      {match()}

      </div>
    )
  }
 
}

export default JobCard