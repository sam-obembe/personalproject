import React from 'react'
import { Switch, Route} from 'react-router-dom'
//import UserAuth from './components/authComponents/UserAuth'
//import EmployerAuth from './components/authComponents/EmployerAuth'
import Auth from './components/authComponents/Auth'
import Home from './components/Home'
import Landing from './components/Landing'
import JobCard from './components/userComponents/jobs/JobCard'
import LikeList from './components/userComponents/likes/LikeList';
import MatchesList from './components/userComponents/matches/MatchesList'
import Profile from './components/userComponents/profile/Profile'
import EmployerProfile from './components/employerComponents/employerProfile/EmployerProfile'
import JobCreateForm from './components/employerComponents/JobCreateForm'
import JobList from './components/employerComponents/JobList'
import Suggestions from './components/employerComponents/Suggestions'
import SeeGooglePhotos from './components/userComponents/portolio/SeeGooglePhotos'
import UserProfilePage from './components/employerComponents/UserProfile/UserProfilePage'



export default(
  
    <Switch>
      <Route exact path = "/auth" component = {Auth}/>
      <Route exact path = "/home" component = {Home}/>
      <Route exact path = "/jobSuggestions" component = {JobCard}/>
      <Route exact path = "/userlikes" component  = {LikeList}/>
      <Route exact path = "/usermatches" component  = {MatchesList}/>
      <Route exact path = "/userProfile" component  = {Profile}/>
      <Route exact path = "/employerProfile" component = {EmployerProfile}/>
      <Route exact path = "/employer/jobCreate" component = {JobCreateForm}/>
      <Route exact path = "/employer/jobList" component = {JobList}/>
      <Route exact path = "/employer/jobList/suggestions" component = {Suggestions}/>
      <Route exact path = "/" component = {Landing}/>
      <Route exact path = "/seeGooglePhotos" component = {SeeGooglePhotos}/>
      <Route exact path = "/employer/userProfilePage" component={UserProfilePage}/>
    </Switch>
 
)
