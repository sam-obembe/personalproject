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
  user_suggestions:"",
  userLikedJobs: [],
  userMatches: [],
}


  //ActionTypes
  const SET_USER_INFO = "SET_USER_INFO"
  const UPDATE_SUGGESTIONS = "UPDATE_SUGGESTIONS"

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

  export default function userReducer(state =userDet, action){
    switch(action.type){
      case `${SET_USER_INFO}_FULFILLED`: 
        return Object.assign({},state,action.payload.data[0]);

      case `${UPDATE_SUGGESTIONS}_FULFILLED`:
        return Object.assign({},state,{user_suggestions:action.payload.data});
        
      default : return state
    }

  }