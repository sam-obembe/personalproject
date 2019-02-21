import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function mapStateToProps(state){
  return state.userReducer
}

const MatchesList = (props)=>{
  return(
    <div>
      <Link to = "/home">Back</Link>
      {props.userMatches.map((job,i)=>{
          return(
            <div key = {i} className = "miniCard">
              <h3 > {job.title}, {job.duration}, {job.price} </h3>
              <p>{job.description}</p>
            </div>
          )})}
    </div>
  )
}

export default connect(mapStateToProps)(MatchesList)

/*
This maps over a list of user matches, located in the userReducer under userMatches.
*/