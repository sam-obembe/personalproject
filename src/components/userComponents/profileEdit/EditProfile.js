import React,{Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
// import AddInterests from './AddInterests'
import UserBioEdit from './UserBioEdit'
import UserAddressEdit from './UserAddressEdit'
import UserContactEdit from './UserContactEdit'
import UserInterestDelete from './UserInterestDelete'
import ChooseProfilePicture from './ChooseProfilePicture'

class EditProfile extends Component{
  constructor(){
    super()
    this.state = {
      firstname: "",
      lastname: "",
      user_bio: "",
      dob: "",
      city: "",
      state: "",
      country: "",
      phonenumber: "",
      emailaddress: "",
      profilepictureurl: "",
      socialnetworkurl: ""
    }
  }

  componentDidMount(){
    const {firstname, lastname, user_bio,dob, city, state, country, phonenumber, emailaddress, profilepictureurl, socialnetworkurl,userInterests} = this.props
    this.setState({
      firstname,
      lastname,
      user_bio,
      dob,
      city,
      state,
      country,
      phonenumber,
      emailaddress,
      profilepictureurl,
      socialnetworkurl,
      userInterests
    })
  }

  inputHandle = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  submit =async ()=>{
      axios.put("/user/profile/edit",this.state).then((res)=>{
      console.log(res.data)
      }).catch(err=>console.log(err))
  }

  deleteInterest = (id)=>{
    axios.delete(`/user/interest/delete/${id}`).then(
      (res)=>console.log(res.data)
    )
  }

  setProfilePic = async (e)=>{
    await this.setState({profilepictureurl:e})
    console.log(this.state.profilepictureurl)
  }

  
  render(){
    const {firstname, lastname, user_bio,dob, city, state, country, phonenumber, emailaddress, profilepictureurl,socialnetworkurl} = this.state
    
    return(
      <div className =  "userProfile">
      
         <div className = "chooseProfilePicture">
          <ChooseProfilePicture setPicture ={this.setProfilePic}/>
        </div>

        <UserBioEdit firstname = {firstname} lastname = {lastname} user_bio ={user_bio} dob = {dob} profilepictureurl = {profilepictureurl} inputHandle = {this.inputHandle} />

        <div className = "userProfileSec2">
      
          <UserAddressEdit city = {city} state = {state} country = {country} inputHandle = {this.inputHandle}/>

          <UserContactEdit phonenumber = {phonenumber} emailaddress = {emailaddress} profilepictureurl = {profilepictureurl} socialnetworkurl = {socialnetworkurl} inputHandle = {this.inputHandle}/>
          
          <UserInterestDelete deleteInterest = {this.deleteInterest}/>


          <button onClick = {()=>this.submit()}>Submit Changes</button>
          <button onClick = {()=>{this.props.displayToggle()}}>Back</button>

        </div> 
     
      </div>
    )
  }
}

function mapStateToProps(state){
  return state.userReducer
}

export default connect(mapStateToProps) (EditProfile)

