import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios';

class JobCard extends Component{

  constructor(){
    super()
    this.state = {
      position: 0
    }
  }

  clickToggle = ()=>{
    if(this.state.position<this.props.user_suggestions.length-1){
      let newPos = this.state.position+1
      this.setState({position: newPos })
    } else{
      this.setState({position:0})
    }
  }

  likeJob = (id)=>{
    axios.post(`user/like/${id}`).then(()=>{
      this.clickToggle()
    })
  }

  render(){
    let i = this.state.position
    const toShow = () =>{if(this.props.user_suggestions.length===0){
      return <h1>No suggestions yet</h1>
    }else{
      return(
        <div className = "jobSuggestContainer">
      {/* <Link to = "/home"><h1>Back</h1></Link> */}
        <div className = "jobcard" key = {i}>
          <h2>{this.props.user_suggestions[i].title}</h2>
          <p>{this.props.user_suggestions[i].description}</p>
          <p>{this.props.user_suggestions[i].duration}</p>
          <p>{this.props.user_suggestions[i].price}</p>
          <div className = "iconSpace">
              
            <i className="fas fa-thumbs-down fa-2x" onClick = {()=>{this.clickToggle()}}/>

            <i className="fas fa-thumbs-up fa-2x" onClick = {()=>{
                this.likeJob(this.props.user_suggestions[i].job_id)
            }}/> 
            </div>
            
          </div>
      </div>
      )
    }}
    return(
    <div>
      <div className = "header">
        <Link to = "/home"><h2>Back</h2></Link>
      </div>
      
      {toShow()}
    </div>
      
    )
  }
  
}

function mapStateToProps(state){
  return state.userReducer
}


export default connect(mapStateToProps)(JobCard)

/*
This component is a class based component that renders a card that shows job details for a job that matches a user's interest. The user can like or dislike the job. 
In the local state, we track what card we are on using this.state.position, which is initialised at 0, which would be the starting point of the array of user suggestions from the user_suggestions array in the userReducer section of the redux state. 

CLICK TOGGLE FUNCTION
This funcion helps update the position after each click. It increases the position by 1 when the current position is less thatn the user_suggestions array length-1.

LIKE JOB FUNCTION
This function lets user like a job by firing off a post request to an endpoint that handles that functionality. After that, the click toggle function is called which would take us to the next card. 

RENDER
In this section, the job details are rendered along with two icons, one to like a job and one to disklike a job. When a job is liked, likeJob() is invoked with the job_id of the particular job passed as an argument. The job id is sent through the params of axios post.
*/

