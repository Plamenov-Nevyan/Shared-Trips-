const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('home')
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

router.get('/register', (req,res) => {
    res.render('register')
})

module.exports = router