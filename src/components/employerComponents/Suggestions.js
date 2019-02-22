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
    return(
      <div>
        <div className = "workerCard">
          <img src = {sugg.profilepictureurl} alt = ""></img>
          <h3>{sugg.firstname} {sugg.lastname}</h3>
          <p>{sugg.user_bio}</p>
          <p>{sugg.socialnetworkurl}</p>
          <p>{sugg.city} {sugg.state} {sugg.country}</p>
          <div className = "iconSpace">
          <i className="fas fa-thumbs-down"/>
          <i className="fas fa-thumbs-up" onClick = {()=>this.clickHandle()}/> 
          </div>
        
        </div>
       
      </div>
    )
  }
}

export default Suggestions