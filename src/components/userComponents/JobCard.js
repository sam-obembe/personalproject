import React, {Component} from 'react'
import {connect} from 'react-redux'
// import '../../materialize'


class JobCard extends Component{

  constructor(){
    super()
    this.state = {
      position: 0
    }
  }

  clickToggle = ()=>{
    if(this.state.position<this.props.user_suggestions.length-1){
      let newPos = this.state.position+1
      this.setState({position: newPos })
    } else{
      this.setState({position:0})
    }
    
    console.log(this.state.position)
  }

  render(){
    let i = this.state.position
    return(
    <div>
      <div className = "jobSuggestContainer">
        <div className = "jobcard" key = {i}>
            <h2>{this.props.user_suggestions[i].title}</h2>
            <p>{this.props.user_suggestions[i].description}</p>
            <p>{this.props.user_suggestions[i].duration}</p>
            <p>{this.props.user_suggestions[i].price}</p>
            <div className = "iconSpace">
              <i class="fas fa-thumbs-up" onClick = {()=>this.clickToggle()}/> 
              <i class="fas fa-thumbs-down"/>
            </div>
            
          </div>
      </div>
    </div>
      
    )
  }
  
}

function mapStateToProps(state){
  return state.userReducer
}


export default connect(mapStateToProps)(JobCard)

