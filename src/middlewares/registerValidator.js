const {isEmailValid, isPasswordValid, areFieldsEmpty} = require('../utils/validators')

module.exports = (req,res,next) => {
    try{
        areFieldsEmpty([req.body.email, req.body.password, req.body.rePassword ])
        isEmailValid(req.body.email)
        isPasswordValid(req.body.password, req.body.rePassword)
        next()
    }
    catch(err){
        res.locals.error = err
        res.render('register')
    }
}