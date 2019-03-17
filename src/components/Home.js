import React, {Component} from 'react'
import User from './User'
import Employer from './Employer'
import {connect} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'


class Home extends Component{
  componentDidMount(){
    this.toShow()
  }
  toShow = ()=>{
    if(this.props.isEmployer){
      return <Employer/>
    }else{
      return <User/>
    }
  }
  
  logout=()=>{
    axios.post("/logout")
  }

  render(){
    return(
  
      <div className = "homeMain">
        {this.toShow()}
        <div>
          <h3 onClick = {()=>this.logout()} id = "logout"> <Link to = "/">Logout</Link>  </h3>
        </div>
       </div>
       
 

    )
  }
}

function mapStateToProps(state){
  return state.accountTypeReducer
}

export default connect(mapStateToProps) (Home)

/* 
This is a class based component which conditionally renders the <Employer/> component or the <User/> component. Both are class components. 
All the actions done in the landing page and auth component would have set the value of isEmployer in accountTypeReducer to true or false. 
Based on that value, one of the components (User or Employer) would be rendered.
The function handling this conditional rendering is called toShow(). 
*/