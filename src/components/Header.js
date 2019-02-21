import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setEmployer, setNotEmployer} from '../ducks/reducers/accountTypeReducer'

function mapStateToProps(props){
  return props
}

const Header = (props)=>{
  return(
    <div className = "header">
      <Link to = "/" >Home</Link>
      <Link to = "/auth" onClick = {()=>props.setNotEmployer()} >Looking for Jobs</Link>
      <Link to = "/auth" onClick = {()=>props.setEmployer()}>Looking to hire</Link>
    </div>
  )
}




export default connect(mapStateToProps,{setEmployer,setNotEmployer}) (Header)