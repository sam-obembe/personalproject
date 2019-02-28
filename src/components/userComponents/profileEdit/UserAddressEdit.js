import React from 'react'

const UserAddressEdit = (props)=>{
  return(
    <div className = "userAddress">
      <input type = "text" value = {props.city} name = "city" onChange = {(e)=>props.inputHandle(e)} placeholder = "City"/>

      <input type = "text" value = {props.state} name = "state" onChange = {(e)=>props.inputHandle(e)} placeholder = "State"/>

      <input type = "text" value = {props.country} name = "country" onChange = {(e)=>props.inputHandle(e)} placeholder = "Country"/>
   
    </div>
  )
}

export default UserAddressEdit

/*
props.city
props.state
props.country
 */