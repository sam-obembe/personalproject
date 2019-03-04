import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectUser,setUserDetails} from '../../ducks/reducers/employerReducer'
import axios from 'axios';
// import {Link} from 'react-router-dom'

class Suggestions extends Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }

  likeUser = async ()=>{
    let jobID = this.props.jobID
    let userID = this.props.suggestions[this.state.count].user_id
    await axios.post(`/employer/like/${jobID}/${userID}`).then(()=>{
      this.clickHandle()
    })
  }

  clickHandle=()=>{
    if(this.state.count<this.props.suggestions.length-1){
      let newCount = this.state.count+1
      this.setState({count:newCount})
    }else{
      this.setState({count:0})
    }
   
  }

  seeProfile=(id)=>{
    this.props.selectUser(id)
  }

  render(){
    let {count} = this.state
    let suggestions = this.props.suggestions
    const sugg = suggestions[count]
    const toShow = ()=>{
      if(suggestions.length===0){
        return  <h1>No suggestions yet</h1>
      } else{
        return(
          <div>
          <div className = "workerCard">
            {/* <img src = {sugg.profilepictureurl} alt = ""></img> */}
            <h3>{sugg.firstname} {sugg.lastname}</h3>
            <p>{sugg.user_bio}</p>
            <p>{sugg.socialnetworkurl}</p>
            <p>{sugg.city} {sugg.state} {sugg.country}</p>
            <div className = "iconSpaceEmployer">
            <i className="fas fa-thumbs-down fa-1.5x" onClick = {()=>this.clickHandle()}/>
            <i className="fas fa-thumbs-up fa-1.5x" onClick = {async()=>{
              await this.likeUser()
             
            }
            }/>
      
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

function mapStateToProps(state){
  return state.employerReducer
}
export default connect(mapStateToProps,{selectUser,setUserDetails}) (Suggestions)

/*
      {/* <Link to = "/employer/userProfilePage">
            <button onClick = {async()=>{
               await this.seeProfile(sugg.user_id)
               await this.props.setUserDetails(sugg.user_id)
            }}>
            See profile
            </button> 
            </Link> }
            */