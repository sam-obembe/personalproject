import React,{Component} from 'react'
import {connect} from 'react-redux'
import EditProfile from '../profileEdit/EditProfile'
import UserDetails from './UserDetails'
import AddInterests from '../profileEdit/AddInterests'
import {Link} from 'react-router-dom'

class Profile extends Component{
  constructor(){
    super()
    this.state = {
      shouldEdit : false,
      addInterest: false
    }
  }

  edit=()=>{
    this.state.shouldEdit? this.setState({shouldEdit:false}): this.setState({shouldEdit:true})
  }

  addInterest =()=>{
    this.state.addInterest? this.setState({addInterest:false}): this.setState({addInterest:true})
  }

  render(){

    const toEdit = this.state.shouldEdit? <EditProfile displayToggle={this.edit}/> : <UserDetails/>
    const toAdd = this.state.addInterest? <AddInterests/> : ""

    return(
      <div>
        <Link to = "/home"><h1>Back</h1></Link>
      {toEdit}
      {toAdd}

      <button onClick = {()=>{this.edit()}}>EditProfile</button>
      <button onClick = {()=>{this.addInterest()}}>Add Interests </button>

      </div>
    )
  }
}

function mapStateToProps(state){
  return state.userReducer
}

export default connect(mapStateToProps)(Profile)