import React,{Component} from 'react'
import {connect} from 'react-redux'
import UserBio from './UserBio'
import UserAddress from './UserAddress'
import UserContact from './UserContact'
import UserInterest from './UserInterest'
import Portfolio from '../portolio/Portfolio'
import {setAuthUrl, setAccessToken} from '../../../ducks/reducers/userReducer'
// import axios from 'axios'
class UserDetails extends Component{
  constructor(){
    super()
    this.state = {
      authorized: false,
    }
  }

  componentDidMount(){
    let reg = /code=4/
    let present = reg.test(window.location.href)
    const authProcess = async()=>{
      await this.props.setAuthUrl()
      window.location.href = this.props.authurl
      // await this.props.setAccessToken(window.location.href)
    }
    if(this.props.actualurl===""){
      if(!present & this.props.authurl===""){ 
        authProcess()
      }else if(this.props.authurl !=="" & present){
        this.props.setAccessToken(window.location.href)
      } else{
        this.props.setAccessToken(window.location.href)
      }
    } 
  
  }

  render(){

    return(
   
      <div className =  "userProfile">

        <UserBio/>
  
        <div className = "userProfileSec2">
          <UserAddress/>
          <UserContact/>
          <UserInterest/>
  
        </div> 
  
        <Portfolio/>
        
      </div>
    )
  }
  
}

function mapStateToProps(state){
  return state.userReducer
}

export default connect(mapStateToProps,{setAuthUrl,setAccessToken}) (UserDetails)


  // async componentDidMount(){
  //   let url = window.location.href
  //   let reg = /code=4/
  //   let present = reg.test(url)
  //   const authProcess = ()=>{
  //     if(!present && !this.state.authorized){
  //       axios.get("http://localhost:4000").then(
  //         async(res)=>{
  //           console.log(res.data)
  //           window.location.href = res.data

  //           let newurl = res.data
  //           await axios.post("/credcheck",{newurl}).then(res=>{ 
  //             console.log(res.data)
  //             this.setState({authorized:true})
  //           })
  //         }
  //       )
  //     }
  //   }
  //   await authProcess()
  // }


