import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {setEmployer, setNotEmployer} from '../ducks/reducers/accountTypeReducer'
import '../styles/App.css'

function mapStateToProps(props){
  return props
}

const Header = (props)=>{
  return(
    <div className = "header">
      <NavLink to = "/" ><p>Home</p></NavLink>
      <NavLink to = "/auth" onClick = {()=>props.setNotEmployer()} > <p>Looking for Jobs</p></NavLink>
      <NavLink to = "/auth" onClick = {()=>props.setEmployer()}><p>Looking to hire</p></NavLink>
    </div>
  )
}




export default connect(mapStateToProps,{setEmployer,setNotEmployer}) (Header)