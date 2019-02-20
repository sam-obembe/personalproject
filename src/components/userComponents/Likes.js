import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserLikes} from '../../ducks/reducers/userReducer'

class Likes extends Component {
  componentDidMount(){
    this.props.getUserLikes()
  }
  render(){
    console.log(this.props.userLikedJobs)
    return(
      <div className = "tile">

      </div>
    )
  }
}

function mapStateToProps(state){
  return state.userReducer
}

export default connect(mapStateToProps,{getUserLikes}) (Likes)