import React, {Component} from 'react'
import {connect} from 'react-redux'
import JobCard from './JobCard'
import {Link} from 'react-router-dom'

class JobList extends Component{
  constructor(){
    super()
    this.state = {
      showSuggestions:false
    }
  }

  render(){

    return(
      <div className = "jobListMain">
        <Link to = "/home"><h1>Home</h1></Link>
      {this.props.jobs.map((job,i)=>{
        return(
          <div key = {i} className = "jobListMain">
          <JobCard id = {job.job_id}title={job.title} description = {job.description} duration = {job.duration} price = {job.price}/>

          </div>
        )
      })}
      </div>
    )
  }
  
}

function mapStateToProps(state){
  return state.employerReducer
}

export default connect(mapStateToProps)(JobList)