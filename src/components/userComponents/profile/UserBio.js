import React,{Component} from 'react'
import {connect} from 'react-redux'


class UserBio extends Component{

  render(){
    
    return(
      <div className = "userbio">
          <img src = {this.props.actualurl} alt="profilepicture"/>
          <h3>Name</h3>
          <p>{this.props.firstname} {this.props.lastname}</p>
          <h3>Bio</h3>
          <p>{this.props.user_bio}</p>
          <h3>Date of birth</h3>
          <p>{this.props.dob}</p>
        </div>
    )
  }

  
}

function mapStateToProps(state){
  return state.userReducer
}

export default connect(mapStateToProps) (UserBio)