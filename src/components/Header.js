import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {isEmployer, isNotEmployer} from '../ducks/reducers/accountTypeReducer'
//import routes from '../routes'

function mapStateToProps(props){
  return props
}

const Header = (props)=>{
  return(
    <div className = "header">
      <Link to = "/" >Home</Link>
      <Link to = "/auth" onClick = {props.isNotEmployer} >Looking for Jobs</Link>
      <Link to = "/auth" onClick = {props.isEmployer}>Looking to hire</Link>
    </div>
  )
}




export default connect(mapStateToProps,{isEmployer,isNotEmployer}) (Header)