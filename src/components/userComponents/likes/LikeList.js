import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function mapStateToProps(state){
  return state.userReducer
}

const LikeList = (props)=>{
  return(
      <div>
       <Link to ="/Home">Back</Link>
      <div className = "likelist">
        
        {props.userLikedJobs.map((job,i)=>{
          return(
            <div key = {i} className = "miniCard">
              <h3 > {job.title}, {job.duration}, {job.price} </h3>
              <p>{job.description}</p>
            </div>
          )
        })}
      </div>
      </div>
  )
}

export default connect(mapStateToProps) (LikeList)

/**
 This renders a list of jobs a user has liked . The list is gotten from an array userLikedJobs which is located in the userReducer. 
 */