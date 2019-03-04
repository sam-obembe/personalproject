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

  nextMatch =()=>{
    if(this.props.matches.length>1 && this.state.count<this.props.matches.length-1){
      let newCount = this.state.count + 1
      this.setState({count:newCount})
    }else{
      this.setState({count:0})
    }
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
            <div>
              <button onClick = {async ()=>{
                await this.unmatch(matches[count].user_id,this.props.jobID)
                await this.props.getMatch()
                }}>Unmatch</button>
            </div>
            <div>
              <button onClick = {()=>{this.nextMatch()}}>Next</button>
            </div>
            
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