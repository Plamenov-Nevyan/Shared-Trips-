const router = require('express').Router()
const registerMiddleware = require('../middlewares/registerValidator')
const authConstants = require('../config/authConstants')
const authServices = require('../services/authServices')
const jwt = require('jsonwebtoken')

router.get('/', (req, res, next) => {
   try{res.render('home')}
   catch(err){next(err)}
})

router.get('/profile/:userId', (req,res,next) => {
  authServices.getUserProfile(req.params.userId)
    .then((user) => res.render('profile', {user}))
    .catch(err => next(err))
})

router.get('/login', (req, res, next) => {
    try{res.render('login')}
    catch(err){next(err)}
})
router.post('/login', async (req, res, next) => {
   try{
        let user = await authServices.checkIfUserHaveAccount(req.body.email, req.body.password)
        let token = jwt.sign({email: user.email, _id: user._id}, authConstants.secret, {expiresIn:'2d'})
        res.cookie(authConstants.cookieName, token, {httpOnly:true})
        res.redirect('/')
   }
   catch(err){
        if(err.hasOwnProperty('status')){
            next(err)
        }
        else{
        res.locals.error = err
        res.render('login')
        }
   }
})


router.get('/register', (req,res, next) => {
    try{res.render('register')}
    catch(err){next(err)}
})
router.post('/register',registerMiddleware,(req,res,next) => {
   authServices.checkIfUserExists(req.body.email)
   .then(async (result) => {
    if(result){
        res.locals.error = {message:'User already exists!'}
        res.render('register')
    }
    else{
        let user = await authServices.registerUser(req.body)
         let token = jwt.sign({email:user.email, _id:user._id}, authConstants.secret,{expiresIn:'2d'})
        res.cookie(authConstants.cookieName,token, {httpOnly: true})
        res.redirect('/')
    }
   })
})

   router.get('/logout', (req,res, next) => {
    try{
        res.clearCookie(authConstants.cookieName)
        res.redirect('/')
    }
    catch(err){
        console.log(err) 
        next(err)}
   })


module.exports = router