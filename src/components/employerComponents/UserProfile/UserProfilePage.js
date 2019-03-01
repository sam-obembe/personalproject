import React,{Component} from 'react'
import {connect} from 'react-redux'
import {setUserDetails} from '../../../ducks/reducers/employerReducer'
import UserBio from './UserBio'
import UserPortfolio from './UserPortfolio'
// import axios from 'axios'

class UserProfilePage extends Component{
  componentDidMount(){
    // axios.get(`/employer/selecteduser/${+this.props.selectedUserId}`).then(res=>console.log(res.data))
    // this.props.setUserDetails(this.props.selectedUserId)
  }
  render(){
    return(
      <div>
       <UserBio/>
       <UserPortfolio/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state.employerReducer
}

export default connect(mapStateToProps,{setUserDetails})(UserProfilePage)