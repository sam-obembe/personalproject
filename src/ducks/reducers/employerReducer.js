import axios from 'axios'
const employerDetails ={
  employer_id: "",
  employer_name: "",
  employer_bio: "",
  employer_number: "",
  employer_email: "",
  city: "",
  state: "",
  country: "",
  jobs: [],
  selectedUserId: "",
  selectedUserDetails: {}
}

//action types
const SET_EMPLOYER_INFO = "SET_EMPLOYER_INFO"
const GET_POSTED_JOBS = "GET_POSTED_JOBS"
const SELECT_USER = "SELECT_USER"
const SET_SELECTED_USER_DETAILS = "SET_SELECTED_USER_DETAILS"
//action creators
export const getEmployerInfo = ()=>{
  return{
    type: SET_EMPLOYER_INFO,
    payload: axios.get("/employer/info")
  }
}

export const getPostedJobs = ()=>{
  return{
    type: GET_POSTED_JOBS,
    payload: axios.get("/employer/postedJobs")
  }
}

export const selectUser = (id)=>{
  return{
    type:  SELECT_USER,
    payload: id
  }
}

export const setUserDetails = (id)=>{
  return{
    type: SET_SELECTED_USER_DETAILS,
    payload: axios.get(`/employer/selectedUser/${id}`)
  }
}



export default function employerReducer(state = employerDetails, action){
  switch(action.type){
    case `${SET_EMPLOYER_INFO}_FULFILLED`:
      return Object.assign({},state, action.payload.data[0])
    case `${GET_POSTED_JOBS}_FULFILLED`:
      return Object.assign({},state,{jobs:action.payload.data})
    case SELECT_USER:
      return Object.assign({},state,{selectedUserId:action.payload})
    case `${SET_SELECTED_USER_DETAILS}_FULFILLED`:
      return Object.assign({},state,{selectedUserDetails:action.payload.data})
    default: return state
  }
  
}