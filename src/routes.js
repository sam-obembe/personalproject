import React from 'react'
import { Switch, Route} from 'react-router-dom'
//import UserAuth from './components/authComponents/UserAuth'
//import EmployerAuth from './components/authComponents/EmployerAuth'
import Auth from './components/authComponents/Auth'
import Home from './components/Home'
import Landing from './components/Landing'
import JobCard from './components/userComponents/JobCard'

export default(
  
    <Switch>
      <Route exact path = "/auth" component = {Auth}/>
      <Route exact path = "/home" component = {Home}/>
      <Route exact path = "/jobSuggestions" component = {JobCard}/>
      {/* <Route exact path = "/user" component = {UserAuth}/>
      <Route exact path = "/employer" component = {EmployerAuth}/> */}
      <Route exact path = "/" component = {Landing}/>
    </Switch>
 
)
