import React from 'react'

const Select = (props)=>{
  return (
    <select name = "scope_id" onChange = {props.handle}> 
    {
      props.options.map((scope,i)=> {
    
      return (
      <option name = "scope_id"value = {scope.scope_id} key ={i} >
        {scope.scope_name}
      </option>
      )})}
   

    </select>
    )
}

export default Select