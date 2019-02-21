import React from 'react'
import { Switch, Route} from 'react-router-dom'
//import UserAuth from './components/authComponents/UserAuth'
//import EmployerAuth from './components/authComponents/EmployerAuth'
import Auth from './components/authComponents/Auth'
import Home from './components/Home'
import Landing from './components/Landing'
import JobCard from './components/userComponents/JobCard'
import LikeList from './components/userComponents/LikeList';
import MatchesList from './components/userComponents/MatchesList'
import Profile from './components/userComponents/Profile'

export default(
  
    <Switch>
      <Route exact path = "/auth" component = {Auth}/>
      <Route exact path = "/home" component = {Home}/>
      <Route exact path = "/jobSuggestions" component = {JobCard}/>
      <Route exact path = "/userlikes" component  = {LikeList}/>
      <Route exact path = "/usermatches" component  = {MatchesList}/>
      <Route exact path = "/userProfile" component  = {Profile}/>
      {/* <Route exact path = "/user" component = {UserAuth}/>
      <Route exact path = "/employer" component = {EmployerAuth}/> */}
      <Route exact path = "/" component = {Landing}/>
    </Switch>
 
)
