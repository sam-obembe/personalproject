import React from 'react'

const Select = (props)=>{
  return <select> 
    {
      props.options.map((scope,i)=> {
    
      return (
      <option value = {scope.scope_id} key ={i}>
        {scope.scope_name}
      </option>
      )})}
   

    </select>
}

export default Select