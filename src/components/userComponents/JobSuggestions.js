import React, {Component } from 'react'
import JobCard from './JobCard'
import {connect} from 'react-redux'
import {updateSuggestions} from '../../ducks/reducers/userReducer'

class JobSuggestions extends Component{
  componentDidMount(){
    //run the updateSuggestions function from redux which will get all the job suggestions for a user and load them in the redux state
    this.props.updateSuggestions()
  }

  displayCards(){
    this.props.user_suggestions.map((sugg,i)=>{
      return(
        <JobCard key = {i} jobtit = {sugg.title} jobdes = {sugg.description} jobdur={sugg.duration} jobprice = {sugg.price}/>
      )
    })
  }

  render(){
    return(
      <div>
        
      </div>
    )
  }
}

//map the userReducer stat to the props of this component
function mapStateToProps(state){
  return state.userReducer
}

export default connect(mapStateToProps,{updateSuggestions})(JobSuggestions)