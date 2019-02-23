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
    let id = this.props.id
    await axios.get(`/search/job/users/${+id}`).then((res)=>{
      this.setState({suggestions:res.data})
    })
    
    await axios.get(`/employer/job/matches/${+id}`).then((res)=>{
      console.log(res.data)
      this.setState({matches:res.data})
    })
  }

  suggestionsToggle = ()=>{
    this.state.showSuggestion? this.setState({showSuggestion:false}):this.setState({showSuggestion:true})
  }

  matchesToggle = ()=>{
    this.state.showMatches? this.setState({showMatches:false}): this.setState({showMatches:true})
  }
  
  render(){
    let buttonText = this.state.showSuggestion? "Hide Suggestion":"Show Suggestions"

    let matchButtonText = this.state.showMatches? "Hide Matches":"Show matches"

    const suggestion = ()=>{
      if(this.state.showSuggestion){
        return <Suggestions jobID = {this.props.id} suggestions = {this.state.suggestions}/>
      } 
    }

    const match = ()=>{
      if(this.state.showMatches){
        return <Matches jobID = {this.props.id}  matches = {this.state.matches}/>
      }
    }

    return(
      <div>

      <div className = "employerJobCard">
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <p>{this.props.duration}</p>
        <p>{this.props.price}</p>
        <button onClick = {()=>{this.suggestionsToggle()}}>{buttonText}</button>
        <button onClick = {()=>{this.matchesToggle()}}>{matchButtonText}</button>
        <button>Delete</button>
      </div> 
      {suggestion()}
      {match()}

      </div>
    )
  }
 
}

export default JobCard