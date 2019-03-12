import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getEmployerInfo,getPostedJobs} from '../ducks/reducers/employerReducer'
import JobCreate from '../components/employerComponents/JobCreate'
import SeeJobs from './employerComponents/SeeJobs'
import EmployerHeader from './employerComponents/EmployerHeader'
import '../styles/employer.css'

class Employer extends Component{
  componentDidMount(){
    this.props.getEmployerInfo()
    this.props.getPostedJobs()
  }
  render(){
    return(
      <div>
        <EmployerHeader/>
        <h2 style = {{marginLeft: "25px"}}>Welcome {this.props.employer_name}</h2>
        <div className = "employermain">
          <JobCreate/>
          <SeeJobs/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state.employerReducer
}

export default connect(mapStateToProps,{getEmployerInfo,getPostedJobs})(Employer)