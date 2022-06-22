const jwt = require('jsonwebtoken')
const authConstants = require('../config/authConstants')

module.exports = (req, res, next) => {
    let token = req.cookies[authConstants.cookieName]
    console.log(token);
    if(token){
        jwt.verify(token,authConstants.secret,(err, decodedToken) => {
            if(err){
                throw{
                    status: 401,
                    message: 'Token validity has expired!'
                }
            }
            req.user = decodedToken
            res.locals.user = decodedToken
        })
    }
    next()
}