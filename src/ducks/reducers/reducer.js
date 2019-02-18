import {combineReducers} from 'redux'
import userReducer from './userReducer'
import employerReducer from './employerReducer'
import accountTypeReducer from './accountTypeReducer'

export default combineReducers({
  userReducer,
  employerReducer,
  accountTypeReducer
})