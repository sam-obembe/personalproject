import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Phototile from './Phototile'

class Portfolio extends Component{

  pictureRender=()=>{
    return(
      this.props.userPortfolio.map((photo,i)=>{
        console.log(photo.mediaItem.baseUrl)
        return <Phototile imgUrl = {photo.mediaItem.baseUrl}/>
      })
    )
  }


  render(){
    return(
      <div>
       <Link to = "/seeGooglePhotos">Add Photos From Google</Link> 
      <div className = "portfolio">
        {this.pictureRender()}
      </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state.userReducer
}

export default connect(mapStateToProps) (Portfolio)

/*
--pit of redundancy
testAuth=()=>{
  axios.get("http://localhost:4000").then((res)=>{
    console.log(res.data)
    window.location.href = res.data
  })
}

 <button onClick = {()=>this.testAuth()}>Click to Authorise</button> 
*/

