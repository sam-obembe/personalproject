import React from 'react'
import {connect} from 'react-redux'
import {getUserMatches} from '../../../ducks/reducers/userReducer'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../../../styles/user.css'

function mapStateToProps(state){
  return state.userReducer
}

const deleteMatch = (id)=>{
  axios.delete(`/user/matches/delete/${id}`).then((res)=>{
    console.log(res.data)
  })
}

const MatchesList = (props)=>{
  return(
    <div className = "matchesmain">
      <div className = "header">
        <Link to = "/home"><h3>Back</h3></Link>
      </div>
      
      {props.userMatches.map((job,i)=>{
          return(
            <div key = {i} className = "miniCard">
              <h3 > {job.title}, {job.duration}, {job.price} </h3>
              <p>{job.description}</p>
              <p>{job.employer_name}</p>
              <p>{job.employer_bio}</p>
              <p>{job.employer_number}</p>
              <p>{job.employer_email}</p>
              <p>{job.city},{job.state}, {job.country}</p>
              <button onClick = {async()=>{
                await deleteMatch(job.job_id)
                await props.getUserMatches()
                }}>Delete Match</button>
            </div>
          )})}
    </div>
  )
}

export default connect(mapStateToProps,{getUserMatches})(MatchesList)

/*
This maps over a list of user matches, located in the userReducer under userMatches.
*/