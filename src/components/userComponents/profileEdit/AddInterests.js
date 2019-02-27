import React, {Component} from 'react'
// import axios from 'axios';
import InterestSelect from './InterestSelect'
import {connect} from 'react-redux'

class AddInterests extends Component {
  constructor(){
    super()
    this.state = {
      scopes: [],
      interests: []
    }
  }

  addInterest =(e)=>{
    let newInterests = this.state.interests.slice(0)
    newInterests.push(e)
    this.setState({interests:newInterests})
  }

  submitInterests = ()=>{
    
  }
  render(){
    const selectedInterests = ()=>{
      if(this.state.interests.length === 0){
        return <p>No interests selected</p>
      } else{
        return(
          <ul>
            {this.state.interests.map((interest,i)=><li key = {i}>{interest}</li>)}
          </ul>
        )
        
      }
    }
    return(
      <div className = "addInterests">
        <div>
          <InterestSelect add = {this.addInterest}/>
        </div>
        <div>
          {selectedInterests()}
          
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state.userReducer
}

export default connect(mapStateToProps)(AddInterests)