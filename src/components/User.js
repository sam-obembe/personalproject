import React, {Component} from 'react'
import JobSuggestions from './userComponents/JobSuggestions'
import Likes from './userComponents/Likes'
import {connect} from 'react-redux'
import {setUserInfo} from '../ducks/reducers/userReducer'
import '../styles/user.css'
// import '../styles/icons.css'

class User extends Component{
  componentDidMount(){
    //call the set userInfo function from the reducer which will run an axios request in redux and update the user details
      this.props.setUserInfo()
  }

  render(){
    return(
      <div>
        <h1>Welcome {this.props.firstname}</h1>
        <div className = "main">
          
          <JobSuggestions/>
          <Likes/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state.userReducer
}

export default connect(mapStateToProps, {setUserInfo})(User);