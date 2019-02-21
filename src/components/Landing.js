import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {setEmployer,setNotEmployer} from '../ducks/reducers/accountTypeReducer'
import {connect} from 'react-redux'
import Header from './Header'


class Landing extends Component{
 
  render(){
    return(
      <div className = "landing">
        <Header/>
        <div className = "landingText">

          <h1>Welcome To Your Next Opportunity</h1>
        
          <div className = "authNav" id = "workerAuthNav">
            <Link to = "/auth" onClick= {()=>this.props.setNotEmployer()}>
              <h1>Workers</h1>
            </Link>
          </div>
          
          <div className = "authNav" id = "employerAuthNav" >
            <h1><Link to = "/auth" onClick = {()=>this.props.setEmployer()} >Employers</Link></h1>
          </div>

        </div>
      </div>
   
  
    )
  }
}

function mapStateToProps(state){
  return state
}


export default connect(mapStateToProps,{setEmployer,setNotEmployer}) (Landing);

/* 
This is the first page that will be shown. The functions, setEmployer and setNotEmployer are imported from the accountTypeReducer file. 
The Header component which is basically a div is also imported. 
<Header/> is rendered in this component as well as  a main div with two nested divs. 

The first nested div is a link that sets the isEmployer state in accountTypeReducer to 'true' and then redirects to the Auth component.
The second nested div is a link that sets the isEmployer state in accountTypeReducer to 'false' and then redirects to the Auth component.  */