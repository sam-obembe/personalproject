import React,{Component} from 'react'
import {connect} from 'react-redux'

class Profile extends Component{
  render(){
    return(
      <div>
        <p>{this.props.firstname}</p>
        <p>{this.props.lastname}</p>
        <p>{this.props.dob}</p>
        <p>{this.props.city}</p>
        <p>{this.props.state}</p>
        <p>{this.props.country}</p>
        <p>{this.props.phonenumber}</p>
        <p>{this.props.emailaddress}</p>
        <p>{this.props.socialnetworkurl}</p>
        <p>{this.props.user_bio}</p>
        <p>{this.props.profilepictureurl}</p>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state.userReducer
}

export default connect(mapStateToProps)(Profile)