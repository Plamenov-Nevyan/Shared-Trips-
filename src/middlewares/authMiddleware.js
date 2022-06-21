const jwt = require('jsonwebtoken')
const authConstants = require('../config/authConstants')

module.exports = (res, req, next) => {
    let token = res.cookie[authConstants.cookieName]
    if(token){
        jwt.verify(token,authConstants.secret,(err, decodedToken) => {
            if(err){
                throw{
                    status: 401,
                    message: 'Token validity has expired!'
                }
            }
            req.user = decodedToken
        })
    }
    next()
}