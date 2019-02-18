import React from 'react'
import User from './User'
import Employer from './Employer'

class Dashboard extends Component{
  render(){
    return(
      <div>
        <h1>Welcome Home</h1>
        <User/>
        <Employer/>
      </div>

    )
  }
}

export default Dashboard