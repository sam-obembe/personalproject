import React from 'react'
import { Switch, Route} from 'react-router-dom'
import UserAuth from './components/authComponents/UserAuth'
import EmployerAuth from './components/authComponents/EmployerAuth'
import Landing from './components/Landing'

export default(
  
    <Switch>
      <Route exact path = "/user" component = {UserAuth}/>
      <Route exact path = "/employer" component = {EmployerAuth}/>
      <Route exact path = "/" component = {Landing}/>
    </Switch>
 
)
