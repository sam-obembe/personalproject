import React, {Component} from 'react'
import {connect} from 'react-redux'

class LikeList extends Component {
  render(){
    return(
      <div>
        
      </div>
    )
  }
}

function mapStateToProps(state){
  return state.userReducer
}

export default connect(mapStateToProps) (LikeList)