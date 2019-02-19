import React, {Component} from 'react'
import User from './User'
import Employer from './Employer'
import {connect} from 'react-redux'

class Dashboard extends Component{
 
  toShow = ()=>{
    if(this.props.isEmployer){
      return <Employer/>
    }else{
      return <User/>
    }
  }

  render(){
    return(
      <div>
        <h1>Welcome Home</h1>
       {this.toShow()}
      </div>

    )
  }
}

function mapStateToProps(state){
  return state.accountTypeReducer
}

export default connect(mapStateToProps) (Dashboard)