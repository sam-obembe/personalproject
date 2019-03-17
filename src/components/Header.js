import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setEmployer, setNotEmployer} from '../ducks/reducers/accountTypeReducer'
// import '../styles/App.css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'

function mapStateToProps(props){
  return props
}

let styling = {
  background: "#000000"
}

const Header = (props)=>{
  // let {classes} = props
 
  return(
    <div>
      <AppBar color="default">
        <Toolbar>
          <NavLink to = "/" ><Button>Home</Button></NavLink>
  
          <NavLink to = "/auth" onClick = {()=>props.setNotEmployer()} > <Button>Looking for Jobs</Button></NavLink>

          <NavLink to = "/auth" onClick = {()=>props.setEmployer()}><Button>Looking to hire</Button></NavLink>

        </Toolbar>
        
      </AppBar>
    </div>
   
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};


export default connect(mapStateToProps,{setEmployer,setNotEmployer})  (withStyles(styling)(Header))

/*
   <div className = "header">
      <NavLink to = "/" ><p>Home</p></NavLink>
      <NavLink to = "/auth" onClick = {()=>props.setNotEmployer()} > <p>Looking for Jobs</p></NavLink>
      <NavLink to = "/auth" onClick = {()=>props.setEmployer()}><p>Looking to hire</p></NavLink>
    </div>
    #343d46
*/