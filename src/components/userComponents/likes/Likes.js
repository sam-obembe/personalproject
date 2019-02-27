import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function mapStateToProps(state){
  return state.userReducer
}

const Likes = (props) => {
  return(
    <Link to = "/userLikes">
      <div className = "tile">
        <h2>See jobs you liked</h2>
      </div>
    </Link>
  )
}


export default connect(mapStateToProps) (Likes)