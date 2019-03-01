import React, {Component} from 'react'
import JobSuggestions from './userComponents/jobs/JobSuggestions'
import Likes from './userComponents/likes/Likes'
import Matches from './userComponents/matches/Matches'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setUserInfo,updateSuggestions,getUserLikes,getUserMatches,getUserInterests,getJobScopes} from '../ducks/reducers/userReducer'
import '../styles/user.css'


class User extends Component{
  componentDidMount(){
  
      this.props.setUserInfo()
      this.props.updateSuggestions()
      this.props.getUserLikes()
      this.props.getUserMatches()
      this.props.getUserInterests()
      this.props.getJobScopes()
  }

  render(){
    return(
      <div className = "outline">
        <h1>Welcome {this.props.firstname}</h1>
        <Link to = "/userProfile">See profile</Link>
        <div className = "usermain">
          
          <JobSuggestions/>
          <Likes/>
          <Matches/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state.userReducer
}

export default connect(mapStateToProps, {setUserInfo,updateSuggestions,getUserLikes,getUserMatches,getUserInterests,getJobScopes})(User);


/*
This is the primary User component and it will need the JobSuggestions, Likes and Matches components which are all functional components that display tiles. 
This component also needs the setUserInfo(), updateSuggestions(), getUserLikes(), and getUserMatches() functions from the userReducer in redux. 
These functions are all called in componentDidMount.

setUserInfo sets the user details in redux by sending a request to an endpoint. 
getUserLikes gets all the jobs a user has liked and stores it in redux
getUserMatches gets all the jobs a user has matched with
updateSuggestions gets all the jobs that would be suggested to a user

<JobSuggestions/> is a tile that links to JobCard.js
<Likes/> is a tile that  links to LikeList.js
<Matches/> is a tile that  links to MatchesList.js

The part of the reducer that this component requires is the userReducer, gotten through mapStateToProps as state.userReducer
*/