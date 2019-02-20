import React, {Component } from 'react'
//import JobCard from './JobCard'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateSuggestions} from '../../ducks/reducers/userReducer'

class JobSuggestions extends Component{
  componentDidMount(){
    //run the updateSuggestions function from redux which will get all the job suggestions for a user and load them in the redux state
    this.props.updateSuggestions()
  }

  render(){
    return(
        <Link to = "/jobSuggestions">
          <div className = "tile">
            <h1>Click to see Suggestions</h1>
          </div>
        </Link>
    )
  }
}

//map the userReducer stat to the props of this component
function mapStateToProps(state){
  return state.userReducer
}

export default connect(mapStateToProps,{updateSuggestions})(JobSuggestions)