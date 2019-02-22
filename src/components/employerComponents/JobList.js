import React, {Component} from 'react'
import {connect} from 'react-redux'
import JobCard from './JobCard'

class JobList extends Component{
  constructor(){
    super()
    this.state = {
      showSuggestions:false
    }
  }

  render(){

    return(
      this.props.jobs.map((job,i)=>{
        return(
          <div key = {i} >
          <JobCard id = {job.job_id}title={job.title} description = {job.description} duration = {job.duration} price = {job.price}/>

          </div>
        )
      })
    )
  }
  
}

function mapStateToProps(state){
  return state.employerReducer
}

export default connect(mapStateToProps)(JobList)