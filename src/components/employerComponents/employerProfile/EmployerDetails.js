import React from 'react'
import {connect} from 'react-redux'

function mapStateToProps(state){
  return state.employerReducer
}


const EmployerDetails = (props)=>{
  return(
    <div className = "jobCreate">
      <h1>{props.employer_name}</h1>
      <p>{props.employer_bio}</p>
      <p>{props.employer_number}</p>
      <p>{props.employer_email}</p>
      <p>{props.city} {props.state} {props.country}</p>
    </div>
  )
}

export default connect(mapStateToProps) (EmployerDetails)