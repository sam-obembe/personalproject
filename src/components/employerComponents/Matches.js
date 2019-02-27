import React,{Component} from 'react'
import axios from 'axios'

class Matches extends Component{
  constructor(){
    super()
    this.state = {
      count:0
    }
  }

  unmatch=(userID,jobID)=>{
    axios.post(`/employer/job/unmatch/${jobID}/${userID}`)
  }

  render(){
    let matches = this.props.matches
    let {count} = this.state
    const toShow = ()=>{
      if(matches.length===0){
        return <h1>No matches yet</h1>
      }else{
        return(
          <div className = "workerCard">
            <img src = {matches[count].profilepictureurl} alt = ""/> 
            <h3>{matches[count].firstname} {matches[count].lastname}</h3>
            <p>{matches[count].user_bio}</p>
            <p>{matches[count].city}, {matches[count].state}</p>
            <p>{matches[count].country}</p>
            <p>{matches[count].phonenumber}</p>
            <p>{matches[count].emailaddress}</p>
            <button onClick = {()=>this.unmatch(matches[count].user_id,this.props.jobID)}>Unmatch</button>
          </div>
        
        )
      }
    }
    return(
      <div>
        {toShow()}
      </div>
    )
  }
}

export default Matches