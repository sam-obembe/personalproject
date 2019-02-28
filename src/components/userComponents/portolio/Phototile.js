import React from 'react'
// import {connect} from 'react-redux'

// function mapStateToProps(state){
//   return state.userReducer
// }

// let images =(props)=>{
//   return(
//     props.userPortfolio.map((photo,i)=>{
//       console.log(photo.mediaItem.baseUrl)
//       return <img src = {photo.mediaItem.baseUrl} alt = "" key = {i}/>
//     })
//   )
  
//}

const Phototile = (props)=>{
  return(
    <div>
      {/* <img alt = "" src = {props.imgUrl}/> */}
      <img src = {props.imgUrl} alt = ""/>
    </div>
  )
}

export default Phototile