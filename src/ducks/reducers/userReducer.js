import axios from 'axios'

//state structure
const userDet = {
  user_id : "",
  firstname : "",
  lastname : "", 
  dob : "",
  city : "",
  state: "",
  country: "",
  phonenumber: "",
  emailaddress: "",
  socialnetworkurl: "",
  profilepictureurl: "",
  user_bio: "",
  user_suggestions:[],
  userLikedJobs: [],
  userMatches: [],
  userInterests:[]
}


  //ActionTypes
  const SET_USER_INFO = "SET_USER_INFO"
  const UPDATE_SUGGESTIONS = "UPDATE_SUGGESTIONS"
  const GET_USER_LIKES = "GET_USER_LIKES"
  const GET_USER_MATCHES = "GET_USER_MATCHES"
  const GET_USER_INTERESTS = "GET_USER_INTERESTS"
 

  //Action creator
  export const setUserInfo = ()=>{
    return {
      type: SET_USER_INFO,
      payload: axios.get("/user/details")
    }
  }

  export const updateSuggestions = ()=>{
    return{
      type: UPDATE_SUGGESTIONS,
      payload: axios.get("/search/jobs")
    }
  }

  export const getUserLikes = ()=>{
    return{
      type: GET_USER_LIKES,
      payload: axios.get("/user/likes")
    }
  }

  export const getUserMatches = ()=>{
    return{
      type: GET_USER_MATCHES,
      payload: axios.get("/user/matches")
    }
  }

  export const getUserInterests = ()=>{
    return{
      type: GET_USER_INTERESTS,
      payload: axios.get("/user/interests")
    }
  }


  export default function userReducer(state =userDet, action){
    switch(action.type){
      case `${SET_USER_INFO}_FULFILLED`: 
        return Object.assign({},state,action.payload.data[0]);

      case `${UPDATE_SUGGESTIONS}_FULFILLED`:
        return Object.assign({},state,{user_suggestions:action.payload.data});

      case `${GET_USER_LIKES}_FULFILLED`:
        return Object.assign({},state,{userLikedJobs:action.payload.data});
      
      case `${GET_USER_MATCHES}_FULFILLED`:
        return Object.assign({},state, {userMatches:action.payload.data});
      
      case `${GET_USER_INTERESTS}_FULFILLED`:
        return Object.assign({},state, {userInterests:action.payload.data})
      default : return state
    }

  }