const bcrypt = require("bcryptjs")
module.exports = {
  //user signup controller
  userSignup: async (req,res)=>{
    const {firstname, lastname, dob, city, state, country, phonenumber, emailaddress, password} = req.body
    const db = req.app.get("db")
    //assign registered details to variable called new user
    const findUser = await db.find_user(emailaddress)
    //if a user with the email address already exists in the database, send back this error
    if (findUser[0]){
      res.status(401).send("email address already taken")
    } 
    else{
    //if this is a new user, hash the given password from the input form and push all the details to the database.
    const salt = await  bcrypt.genSaltSync(12)
    const hash = await  bcrypt.hashSync(password,salt)
    const newUser = await db.register_user(firstname, lastname, dob, city, state, country, phonenumber, emailaddress,  hash)
    //once new user has been created, login with the credentials
    const user = await db.user_login(emailaddress,hash)
    const loggedin = user[0]
    req.session.user = {
      id: loggedin.user_id,
      name: `${loggedin.firstname} ${loggedin.lastname}`,
      email: loggedin.emailaddress,
    }
    //send back user details -- at this point, set the session to contain the relevant user details
    res.status(200).json(req.session.user)
    }
  },

  //employer signup controller
  employerSignup: async (req,res)=>{
    const{employer_name, employer_number, employer_email, city, state, country, password} = req.body
    const db = req.app.get("db")
    const findEmployer = await db.find_employer(employer_email)

    if(findEmployer[0]){
      res.status(401).send("An account with this email already exists")
    } 
    else{
      const salt = await bcrypt.genSaltSync(12)
      const hash = await bcrypt.hashSync(password,salt)
      //assign registration details to variable called new employer and insert into database
      const newEmployer = await db.register_employer(employer_name,  employer_number, employer_email, city, state, country, hash)
      const employer = await db.employer_login(employer_email,password)
      const loggedin = employer[0]
      req.session.user = {
        name: loggedin.employer_name,
        id: loggedin.employer_id,
        email: loggedin.employer_email
      }
      res.status(200).json(req.session.user)
    } 
  },

  //user login controller
  userLogin: async (req,res)=>{
    const {email,password} = req.body
    const db = req.app.get("db")
    const user = await db.find_user(email)
    if(!user[0]){
      res.status(401).send("user does not exist")
    } 
    else{
         //add password here once bcrycpt is set up
      const tologin = user[0]
      const authenticated = bcrypt.compareSync(password,tologin.hash)
      if(authenticated){
        req.session.user = {
        id: tologin.user_id,
        name: `${tologin.firtname} ${tologin.lastname}`,
        email: `${tologin.emailaddress}`
        }
        res.status(200).json(req.session.user)
        } 
      else{
        res.status(401).send("wrong email address or password")
      }
    }
 
  },

  //employer login controller
  employerLogin: async(req,res)=>{
    const {email,password} = req.body
    const db = req.app.get("db")
    const findEmployer = await db.find_employer(email)//add password here once bcrypt is set up
    if(!findEmployer[0]){
      res.status(401).send("This account does not exist")
    }
    else{
      const employer = findEmployer[0]
      const authenticated = bcrypt.compareSync(password, employer.hash)
      if(authenticated){
        req.session.user = {
          name: employer.employer_name,
          id: employer.employer_id,
          email: employer.employer_email
        }
        res.status(200).json(req.session.user)
      }
      else{
        res.status(401).send("wrong email address or passwod")
      }
    }
  },

  //logout controller
  logout: async(req,res)=>{
    req.session.destroy()
    res.status(200).send("logged out")
  }
}







