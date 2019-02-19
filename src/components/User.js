import React, {Component} from 'react'
import JobSuggestions from './userComponents/JobSuggestions'
import '../materialize.css'
import {connect} from 'react-redux'
import {setUserInfo} from '../ducks/reducers/userReducer'


class User extends Component{
  componentDidMount(){
    //call the set userInfo function from the reducer which will run an axios request in redux and update the user details
      this.props.setUserInfo()
  }

  render(){
    return(
      <div>
        <h1>Welcome {this.props.firstname}</h1>
        <JobSuggestions/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state.userReducer
}

export default connect(mapStateToProps, {setUserInfo})(User);