import React from 'react'
import {connect} from 'react-redux'
import {getUserLikes} from '../../../ducks/reducers/userReducer'
// import {Link} from 'react-router-dom'
import axios from 'axios'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import UserHeader from '../UserHeader'

function mapStateToProps(state){
  return state.userReducer
}

const deleteLike = (id)=>{
  axios.delete(`/user/matches/delete/${id}`)
}

const LikeList = (props)=>{
  return(
      <div>
        <UserHeader/>
       
        <div className = "likelist">
          
          {props.userLikedJobs.map((job,i)=>{
            return(
              <div style = {{marginTop:"50px", minWidth: "340px", width: "40vw"}}> 
                <Card>
                  <CardContent>
                    <Typography variant = "h5" >{job.title}, {job.duration}, {job.price}</Typography>
                    <Typography variant = "p" >{job.description}</Typography>
                  </CardContent>

                  <CardActions>
                    <Button onClick = {async()=>{ 
                      await deleteLike(job.job_id)
                      await props.getUserLikes()
                      }}>Delete Like</Button>
                  </CardActions>
                </Card>

              </div>
            
            )
          })}
        </div>

      </div>
  )
}

export default connect(mapStateToProps,{getUserLikes}) (LikeList)

/* 
<div className = "header">
  <Link to ="/Home"><h3>Back</h3></Link>
</div>

<div key = {i} className = "miniCard">
  <h3 > {job.title}, {job.duration}, {job.price} </h3>
  <p>{job.description}</p>
  <button onClick = {async()=>{ await deleteLike(job.job_id)
    await props.getUserLikes()}}>Delete like</button>
</div>

*/

/**
 This renders a list of jobs a user has liked . The list is gotten from an array userLikedJobs which is located in the userReducer. 
 */