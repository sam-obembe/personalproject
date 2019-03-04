import React, {Component} from 'react'
import axios from 'axios'
import PhotoThumbs from './PhotoThumbs'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getGooglePhotos,getMorePhotos} from '../../../ducks/reducers/userReducer'

class SeeGooglePhotos extends Component{
  constructor(){
    super()
    this.state = {
      selected: []
    }
  }
  componentDidMount(){
    if(this.props.googlePhotos.length===0){
      this.props.getGooglePhotos()
    }
  }


  selectPhoto = async(e)=>{
    let newArr = this.state.selected.slice(0)
    await newArr.push(e)
    await this.setState({selected:newArr})
   
  }

  addToPortfolio = ()=>{
    axios.post("/user/portfolio",{photos:this.state.selected}).then(res=>console.log(res.data))
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
    console.log(token)
    return(
      <div className = "gPhotosPage">
        <Link to = "/userProfile"><h2>Back</h2></Link>
        {toShow()}
        <button onClick ={()=>this.props.getMorePhotos(token)}>Get more</button>
        <button onClick ={()=>this.addToPortfolio()}>Add To Portfolio</button>
      
      </div>
    )
  }
}

function mapStateToProps(state){
  return state.userReducer
}

export default connect(mapStateToProps,{getGooglePhotos,getMorePhotos})(SeeGooglePhotos)



  // getPhotos =async()=>{
  //   let existingMedia = this.state.media.slice(0)
  //   await axios.get("/user/profile/userGooglePhotos").then(res=>{
  //     let newMedia = existingMedia.concat(res.data.mediaItems)
  //      this.setState({media:newMedia})
  //      this.setState({nextToken: res.data.nextPageToken})
  //   })
  // }

  // getMorePhotos= async()=>{
  //   let existingMedia = this.state.media.slice(0)
  //   let newMedia = existingMedia.concat()
  //   await axios.get(`/user/profile/userGooglePhotos/next/${this.state.nextToken}`).then(res=>{
  //     // let newMedia = await existingMedia.concat(res.data.mediaItems)
  //     newMedia.push(res.data.mediaItems)
  //     this.setState({media:newMedia})
  //     this.setState({nextToken: res.data.nexPageToken})
  //   })
  //   console.log(this.state)
  // }