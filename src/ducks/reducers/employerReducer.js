
const employerDetails ={
  employerID: "",
  employerName: "",
  employerBio: "",
  employerNumber: "",
  employerEmail: "",
  employerCity: "",
  employerState: "",
  employerCountry: "",
  password: "",
  jobs: []
}

//action types
// const EMPLOYER_REGISTER_INPUT = "EMPLOYER_REGISTER_INPUT"
// const EMPLOYER_SUBMIT_REGISTRATION = "EMPLOYER_SUBMIT_REGISTRATION"

// function reset(){
//   for(let i in employerDetails){
//     employerDetails[i] = ""
//   }
// }


//action creators
// export function employerRegistration(input){
//   return{
//     type: EMPLOYER_REGISTER_INPUT,
//     name: input.target.name,
//     payload: input.target.value,
//   }
// }

// export function submitRegistration(){
//   return{
//     type: EMPLOYER_SUBMIT_REGISTRATION,
//   }
// }

export default function employerReducer(state = employerDetails, action){
  switch(action.type){
    // case EMPLOYER_REGISTER_INPUT: 
    //   let name = action.name
    //   return {
    //   ...state, [name]:action.payload
    //   };
    // case EMPLOYER_SUBMIT_REGISTRATION:
    //   return{
    //     ...state, 
    //   }
    default: return state
  }
  
}