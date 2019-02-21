import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function mapStateToProps(state){
  return state.userReducer
}

const Matches = (props)=>{
  return(
    <Link to = "/usermatches">
    <div className = "tile">
      <h2>Matches</h2>
    </div>
    </Link>
  )
}

export default connect(mapStateToProps)(Matches)

/*
This links to the list of matches.
*/