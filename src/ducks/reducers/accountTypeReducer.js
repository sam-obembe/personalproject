
const initialState = {
  isEmployer: false,
  isAdmin: false
}

//actionTypes
const IS_EMPLOYER = "IS_EMPLOYER"
const IS_NOT_EMPLOYER = "IS_NOT_EMPLOYER"

//actionCreators
export function isEmployer(){
  return {
    type: IS_EMPLOYER,
  }
}

export function isNotEmployer(){
  return{
    type: IS_NOT_EMPLOYER
  }
}

//reducer

export default function accountTypeReducer(state= initialState, action){
  switch(action.type){
    case IS_EMPLOYER: return {...state, isEmployer:true};
    case IS_NOT_EMPLOYER: return{...state, isEmployer: false};
    default: return state
  }
}