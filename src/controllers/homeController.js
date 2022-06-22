const router = require('express').Router()
const registerMiddleware = require('../middlewares/registerValidator')
const authConstants = require('../config/authConstants')
const authServices = require('../services/authServices')
const jwt = require('jsonwebtoken')

router.get('/', (req, res, next) => {
   try{res.render('home')}
   catch(err){next(err)}
})

router.get('/trips-shared', (req, res) => {
    res.render('shared-trips')
})

router.get('/trips-offer', (req, res) => {
    res.render('trip-create')
})

router.get('/profile', (req,res) => {
    res.render('profile')
})

router.get('/login', (req, res) => {
    res.render('login')
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
        console.log(res.cookie);
        res.redirect('/')
    }
   })
   .catch(err => next(err))
})

module.exports = router