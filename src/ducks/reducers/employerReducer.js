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
  jobs: []
}

//action types
const SET_EMPLOYER_INFO = "SET_EMPLOYER_INFO"
const GET_POSTED_JOBS = "GET_POSTED_JOBS"
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



export default function employerReducer(state = employerDetails, action){
  switch(action.type){
    case `${SET_EMPLOYER_INFO}_FULFILLED`:
      return Object.assign({},state, action.payload.data[0])
    case `${GET_POSTED_JOBS}_FULFILLED`:
      return Object.assign({},state,{jobs:action.payload.data})

    default: return state
  }
  
}