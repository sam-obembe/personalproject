import React,{Component} from 'react'
import {connect} from 'react-redux'
import EditProfile from './EditProfile'
import UserDetails from './UserDetails'
import {Link} from 'react-router-dom'

class Profile extends Component{
  constructor(){
    super()
    this.state = {
      shouldEdit : false
    }
  }

  edit=()=>{
    this.state.shouldEdit? this.setState({shouldEdit:false}):this.setState({shouldEdit:true})
  }

  render(){
    const toShow = ()=>{
      if(!this.state.shouldEdit){
        return(
          <UserDetails/>
        )
      }else{
        return <EditProfile displayToggle = {this.edit}/>
      }
    }

    return(
      <div>
        <Link to = "/home"><h1>Back</h1></Link>
      {toShow()}
      <button onClick = {()=>{this.edit()}}>EditProfile</button>
      </div>
   
    )
  }
}

function mapStateToProps(state){
  return state.userReducer
}

export default connect(mapStateToProps)(Profile)