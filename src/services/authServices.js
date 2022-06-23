const { User } = require("../models/User");
const bcrypt = require('bcrypt')
const authConstants = require('../config/authConstants')

const checkIfUserExists = (email) => User.exists({email}).exec()

const registerUser = async (userData) => {
   let hash = await bcrypt.hash(userData.password, authConstants.saltRounds)
   return User.create({
     email : userData.email,
     password: hash,
     gender: userData.gender
   })
}

const checkIfUserHaveAccount = async (email, password) => {
  let user = await User.findOne({email}).lean()
  if(user){
      let isPassCorrect = await bcrypt.compare(password, user.password)
      if(isPassCorrect){
        return user
      }
      else {
        throw {
          message : 'Username or password is incorrect!'
        }
      }
  }
  else{
      throw {
        message : 'Username or password is incorrect!'
      }
  }
}

const getUserProfile = (userId) => User.findById(userId).populate('tripsHistory').lean()

module.exports = {
    checkIfUserExists,
    checkIfUserHaveAccount,
    registerUser,
    getUserProfile
}