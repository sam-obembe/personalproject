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
  actualurl: "",
  user_bio: "",
  user_suggestions:[],
  userLikedJobs: [],
  userMatches: [],
  userInterests:[],
  jobScopes:[],
  userPortfolio: [],
  access_token: "",
  authurl: "",
  googlePhotos: [],
  nextToken: ""
}


  //ActionTypes
  const SET_USER_INFO = "SET_USER_INFO"
  const UPDATE_SUGGESTIONS = "UPDATE_SUGGESTIONS"
  const GET_USER_LIKES = "GET_USER_LIKES"
  const GET_USER_MATCHES = "GET_USER_MATCHES"
  const GET_USER_INTERESTS = "GET_USER_INTERESTS"
  const GET_JOB_SCOPES = "GET_JOB_SCOPES"
  const SET_AUTH_URL = "SET_AUTH_URL"
  const SET_PROFILE_PICTURE = "SET_PROFILE_PICTURE"
  const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN"
  const GET_GOOGLE_PHOTOS = "GET_GOOGLE_PHOTOS"
  const GET_MORE_PHOTOS = "GET_MORE_PHOTOS"
  const GET_USER_PORTFOLIO = "GET_USER_PORTFOLIO"
  
 

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

  export const getJobScopes = ()=>{
    return{
      type: GET_JOB_SCOPES,
      payload:  axios.get("/user/jobScopes")
    }
  }

  export const setAuthUrl = ()=>{
    return{
      type: SET_AUTH_URL,
      payload: axios.get("http://localhost:4000")
    }
  }

  export const setAccessToken = (url)=>{
    return{
      type: SET_ACCESS_TOKEN,
      payload: axios.post("/credcheck",{url})
    }
  }

  export const setProfilePicture = (id)=>{
    return{
      type: SET_PROFILE_PICTURE,
      payload:  axios.get(`/user/profile/profilepic/${id}`)
    }
  }

  export const getGooglePhotos = ()=>{
    return{
      type: GET_GOOGLE_PHOTOS,
      payload: axios.get("/user/profile/userGooglePhotos")
    }
  }

  export const getMorePhotos = (token)=>{
    return{
      type: GET_MORE_PHOTOS,
      payload: axios.get(`/user/profile/userGooglePhotos/next/${token}`)
    }
  }

  export const getUserPortfolio = ()=>{
    return{
      type: GET_USER_PORTFOLIO,
      payload: axios.get(`/user/portfolio`)
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

      case `${GET_JOB_SCOPES}_FULFILLED`:
        return Object.assign({},state,{jobScopes:action.payload.data})

      case `${SET_PROFILE_PICTURE}_FULFILLED`:
        return Object.assign({},state,{actualurl:action.payload.data.baseUrl})
      
      case `${SET_AUTH_URL}_FULFILLED`:
        return Object.assign({},state,{authurl:action.payload.data})

      case `${SET_ACCESS_TOKEN}_FULFILLED`:
        return Object.assign({},state,{access_token:action.payload.data})
      
      case `${GET_GOOGLE_PHOTOS}_FULFILLED`:
        return Object.assign({},state,{
          googlePhotos:action.payload.data.mediaItems,
          nextToken: action.payload.data.nextPageToken})
      case `${GET_MORE_PHOTOS}_FULFILLED`:
        return Object.assign({},state,{
          googlePhotos: state.googlePhotos.concat(action.payload.data.mediaItems),
          nextToken:action.payload.data.nextPageToken})
      case `${GET_USER_PORTFOLIO}_FULFILLED`:
          return Object.assign({},state,{userPortfolio:action.payload.data})
      default : return state
    }

  }