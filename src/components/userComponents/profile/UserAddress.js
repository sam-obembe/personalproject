import React from 'react'
import {connect} from 'react-redux'

function mapStateToProps(state){
  return state.userReducer
}
const UserAddress = (props)=>{
  return(
    <div className = "userAddress">
    <h3>Location</h3>
    <p>{props.city}</p>
    <p>{props.state}</p>
    <p>{props.country}</p>
  </div>
  )
}



export default connect(mapStateToProps) (UserAddress)