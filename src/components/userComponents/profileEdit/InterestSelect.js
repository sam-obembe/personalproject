import React from 'react'
import {connect} from 'react-redux'

function mapStateToProps(state){
  return state.userReducer
} 

const InterestSelect = (props)=>{
  return(
    <div>
      {
        props.jobScopes.map((scope,i)=>{
          return(
            <p key = {i}>{scope.scope_name}<span><i className = "fas fa-plus" onClick = {()=>props.add(scope.scope_name)}/></span></p>
          )
        })
      }
    </div>
  )
}

export default connect(mapStateToProps)(InterestSelect)