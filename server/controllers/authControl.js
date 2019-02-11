const bcrypt = require("bcryptjs")
module.exports = {
  //user signup controller
  userSignup: async (req,res)=>{
    const {firstName, lastName, DOB, city, state, country, phoneNumber, emailAddress, socialNetworkURL, profilePictureURL, user_bio,password} = req.body
    const db = req.app.get("db")
    //assign registered details to variable called new user
    const newUser = await db.register_user(firstName, lastName, DOB, city, state, country, phoneNumber, emailAddress, socialNetworkURL, profilePictureURL, user_bio,password)

    //once new user has been created, login with the credentials
    const user = await db.user_login(emailAddress, password)
    res.status(200).send(user[0])
    console.log(user[0])
  },

  //employer signup controller
  employerSignup: async (req,res)=>{
    const{employer_name, employer_bio, employer_number, employer_email, city, state, country, password} = req.body
    const db = req.app.get("db")

    //assign registration details to variable called new employer and insert into database
    const newEmployer = await db.register_employer(employer_name, employer_bio, employer_number, employer_email, city, state, country, password)
    const employer = await db.employer_login(employer_email,password)
    res.status(200).send(employer[0])
    console.log(employer[0])
  },

  //user login controller
  userLogin: async (req,res)=>{
    const {email,password} = req.body
    const db = req.app.get("db")
    const user = await db.user_login(email) //add password here once bcrycpt is set up
    res.status(200).json(user[0])
    console.log(user);
  },
  //employer login controller
  employerLogin: async(req,res)=>{
    const {email,password} = req.body
    const db = req.app.get("db")
    const employer = await db.employer_login(email)//add password here once bcrypt is set up
    res.status(200).json(employer[0])
    console.log(employer)
  }
  //logout controller
}

//register user test data
// {
//   "user_id": 21,
//   "firstname": "testFirst",
//   "lastname": "testLast",
//   "dob": "2000-01-01T06:00:00.000Z",
//   "city": "Dallas",
//   "state": "TX",
//   "country": "USA",
//   "phonenumber": "8978687191",
//   "emailaddress": "testme@test.com",
//   "socialnetworkurl": "noURL",
//   "profilepictureurl": "gotNoFace",
//   "user_bio": "Just a random test subject",
//   "password": "NULL"
// }

//register employer test data
// {
//   "employer_id": 16,
//   "employer_name": "Odin and Sons",
//   "employer_bio": "Biggest manufacturer in Valhala",
//   "employer_number": "9990236767",
//   "employer_email": "bigodin@valhala.nw",
//   "city": "Dallas",
//   "state": "Texas",
//   "country": "USA",
//   "hash": "NULL"
// }
