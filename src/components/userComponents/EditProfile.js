import React,{Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'


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
    // console.log(id)
  }
  
  render(){
    const {firstname, lastname, user_bio,dob, city, state, country, phonenumber, emailaddress, profilepictureurl,socialnetworkurl} = this.state
    return(
      <div className =  "userProfile">
        <div className = "userbio">
         
          <input type = "text" value = {profilepictureurl} name = "profilepictureurl" onChange = {(e)=>this.inputHandle(e)} placeholder = "Profile Picture url"/>
          <input type = "text" value = {firstname} name = "firstname" onChange = {(e)=>this.inputHandle(e)} placeholder = "First name"/>

          <input type = "text" value  = {lastname} name = "lastname" onChange = {(e)=>this.inputHandle(e)} placeholder = "Last name"/>

          <textarea type = "text"value = {user_bio} name = "user_bio" onChange = {(e)=>this.inputHandle(e)} placeholder = "Bio"/>

          <input type = "date" value = {dob} name = "dob" onChange = {(e)=>this.inputHandle(e)} placeholder = "Date of birth"/>
    
        </div>

        <div className = "userProfileSec2">
          <div className = "userAddress">
          <input type = "text" value = {city} name = "city" onChange = {(e)=>this.inputHandle(e)} placeholder = "City"/>
          <input type = "text" value = {state} name = "state" onChange = {(e)=>this.inputHandle(e)} placeholder = "State"/>
          <input type = "text" value = {country} name = "country" onChange = {(e)=>this.inputHandle(e)} placeholder = "Country"/>
   
        </div>
        
          <div className = "userContact">
          <input type = "text" value = {phonenumber} name = "phonenumber" onChange = {(e)=>this.inputHandle(e)} placeholder = "Phone number"/>

          <input type = "text" value = {emailaddress} name = "emailaddress" onChange = {(e)=>this.inputHandle(e)} placeholder = "Email address"/>

          <input type = "text" value = {socialnetworkurl} name = "socialnetworkurl" onChange = {(e)=>this.inputHandle(e)} placeholder = "Social network url"/>
    
        </div>

        <div className = "userInterest">
          {this.props.userInterests.map((interest,i)=>{

              return(
                <p key = {i}>{interest.scope_name}
                  <span>
                    <i className = "fas fa-trash" onClick = {() => this.deleteInterest(interest.scope_id)}>
                    </i>
                  </span></p>
              )
          })}
        </div>

        
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