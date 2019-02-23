import React, {Component} from 'react'
// import axios from 'axios';

class Suggestions extends Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }

  clickHandle=()=>{
    if(this.state.count<this.props.suggestions.length-1){
      let newCount = this.state.count+1
      this.setState({count:newCount})
    }else{
      this.setState({count:0})
    }
   
  }

  render(){
    let {count} = this.state
    let suggestions = this.props.suggestions
    const sugg = suggestions[count]
    const toShow = ()=>{
      if(suggestions.length===0){
        return  <h1>No suggestions yet</h1>
      }
      else{
        return(
          <div>
          <div className = "workerCard">
            <img src = {sugg.profilepictureurl} alt = ""></img>
            <h3>{sugg.firstname} {sugg.lastname}</h3>
            <p>{sugg.user_bio}</p>
            <p>{sugg.socialnetworkurl}</p>
            <p>{sugg.city} {sugg.state} {sugg.country}</p>
            <div className = "iconSpaceEmployer">
            <i className="fas fa-thumbs-down fa-2x"/>
            <i className="fas fa-thumbs-up fa-2x" onClick = {()=>this.clickHandle()}/> 
            </div>
          
          </div>
        
          </div>
        )
      }
  }

  return(
    toShow()
 
    )
  }
}

export default Suggestions