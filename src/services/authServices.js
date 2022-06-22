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

module.exports = {
    checkIfUserExists,
    registerUser
}