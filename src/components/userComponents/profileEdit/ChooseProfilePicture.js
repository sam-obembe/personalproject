import React, {Component} from 'react'
// import axios from 'axios'
import PhotoThumbs from '../portolio/PhotoThumbs'
import {connect} from 'react-redux'
import {getGooglePhotos,getMorePhotos} from '../../../ducks/reducers/userReducer'

class ChooseProfilePicture extends Component{
  constructor(){
    super()
    this.state = {
      selected: ""
    } 
  }
  componentDidMount(){
    
    this.props.getGooglePhotos()
    
  }

  selectPhoto= async (e)=>{
    await this.setState({selected:e})
    console.log(this.state.selected)
  }

  render(){
    const toShow = ()=>{
      return(
        this.props.googlePhotos.map((photo,i)=>{
          return <PhotoThumbs url = {photo.baseUrl} key = {i} select = {this.selectPhoto} id = {photo.id}/>
        })
      )
    }
    const token = this.props.nextToken
    return(
      <div>
      <div className = "gPhotosPage">
        {toShow()}
        <button onClick ={()=>this.props.getMorePhotos(token)}>Get more</button>
        <button onClick = {()=>this.props.setPicture(this.state.selected)}>Set as profile photo</button>
      </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return state.userReducer
}

export default connect(mapStateToProps,{getGooglePhotos,getMorePhotos})(ChooseProfilePicture)



  // getPhotos = async()=>{
  //   let existingMedia = this.state.media.slice(0)
  //   await axios.get("/user/profile/userGooglePhotos").then(res=>{
  //     let newMedia = existingMedia.concat(res.data.mediaItems)
  //     this.setState({media:newMedia})
  //     this.setState({nextToken: res.data.nextPageToken})
  //   })
  // }

  // getMorePhotos = async()=>{
  //   let existingMedia = this.state.media.slice(0)
  //   await axios.get(`/user/profile/userGooglePhotos/next/${this.state.nextToken}`).then(res=>{
  //     let newMedia = existingMedia.concat(res.data.mediaItems)
  //     console.log(newMedia)
  //     this.setState({media:newMedia})
  //     this.setState({nextToken: res.data.nextPageToken})
  //     console.log(this.state.media)
  //   })
  // }