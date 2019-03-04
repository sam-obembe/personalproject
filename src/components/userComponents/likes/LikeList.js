import React from 'react'
import {connect} from 'react-redux'
import {getUserLikes} from '../../../ducks/reducers/userReducer'
import {Link} from 'react-router-dom'
import axios from 'axios'

function mapStateToProps(state){
  return state.userReducer
}

const deleteLike = (id)=>{
  axios.delete(`/user/matches/delete/${id}`)
}

const LikeList = (props)=>{
  return(
      <div>
        <div className = "header">
          <Link to ="/Home"><h3>Back</h3></Link>
        </div>
       
      <div className = "likelist">
        
        {props.userLikedJobs.map((job,i)=>{
          return(
            <div key = {i} className = "miniCard">
              <h3 > {job.title}, {job.duration}, {job.price} </h3>
              <p>{job.description}</p>
              <button onClick = {async()=>{
                await deleteLike(job.job_id)
                await props.getUserLikes()
                }}>Delete like</button>
            </div>
          )
        })}
      </div>
      </div>
  )
}

export default connect(mapStateToProps,{getUserLikes}) (LikeList)

/**
 This renders a list of jobs a user has liked . The list is gotten from an array userLikedJobs which is located in the userReducer. 
 */