import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import EmployerDetails from './EmployerDetails'
import EmployerEdit from './EmployerEdit'

class EmployerProfile extends Component{
  constructor(){
    super()
    this.state = {
      edit: false
    }
  }

  editToggle=()=>{
    if(this.state.edit){
      this.setState({edit:false})
    }else{
      this.setState({edit:true})
    }
  }

  render(){
    const toShow = this.state.edit? <EmployerEdit/>:<EmployerDetails/>
    const buttonText = this.state.edit? "Show profile":"EditProfile"
    return(
      <div>
        
        <Link to = "/home"><h2>Back</h2></Link>
        <button onClick = {()=>this.editToggle()}>{buttonText}</button>
        {toShow}
      </div>

    )
  }
}



export default EmployerProfile