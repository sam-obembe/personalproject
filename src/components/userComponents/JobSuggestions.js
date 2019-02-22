import React from 'react'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'



function mapStateToProps(state){
  return state.userReducer
}

const JobSuggestions =(props)=>{
  return(
    <div>
       
      <Link to = "/jobSuggestions">
        <div className = "tile">
            <h2>Job Suggestions</h2>
        </div>
      </Link>
      </div>
  )  
}

export default connect(mapStateToProps)(JobSuggestions)

/*
This is a functional component that links to the <JobCard/> component. It is connected to the userReducer.
*/