import React, { Component } from 'react'
import UserSignup from './UserSignup'
import UserLogin from './UserLogin'

class UserAuth extends Component{
  constructor(){
    super()
    this.state = {
      isLogin: true,
    }
  }

  signUpDisplay = ()=>{
    if(this.state.isLogin){
      this.setState({
        isLogin: false,
      })
    }
    else{
      this.setState({
        isLogin:true,
      })
    }
  }

  render(){

    const form = ()=>{
      if(this.state.isLogin){
        return <div><UserLogin/></div>
      } 
      else{
        return <div><UserSignup/></div>
      }
    }

    return(
      <div>
        {form()}
        <button onClick = {()=>this.signUpDisplay()}>Register</button>
      </div>
    )
  }
}

export default UserAuth

