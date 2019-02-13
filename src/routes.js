import React from 'react'
import { Switch, Route} from 'react-router-dom'
import UserAuth from './components/authComponents/UserAuth'
import EmployerAuth from './components/authComponents/EmployerAuth'
import App from './App'

export default(
  
    <Switch>
      
      <Route exact path = "/user" component = {UserAuth}/>
      <Route exact path = "/employer" component = {EmployerAuth}/>
      <Route exact path = "/" component = {App}/>
    </Switch>
 
)
