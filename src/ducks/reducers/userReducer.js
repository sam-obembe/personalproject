

//state structure
const userDet = {
  userID : "",
  userFirstName : "",
  userLastName : "", 
  userDOB : "",
  userCity : "",
  userState: "",
  userCountry: "",
  userPhoneNumber: "",
  userEmailAddress: "",
  userSocialNetworkURL: "",
  userProfilePicture: "",
  userBio: "",
  userLikedJobs: [],
  userMatches: [],
}


  //ActionTypes
  const USER_INFO = "USER_INFO"

  //Action creator
  export const userInfo = ()=>{
    return {
      type: USER_INFO,
    }
  }

  export default function userReducer(state =userDet, action){
    switch(action.type){
      case USER_INFO: return state
      default : return state
    }

  }