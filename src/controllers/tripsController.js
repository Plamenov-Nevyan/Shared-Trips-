const router = require('express').Router()
const createMiddleware = require('../middlewares/createTripValidator')

router.get('/trips-shared', (req, res) => {
    res.render('shared-trips')
})

router.get('/trips-offer', (req, res) => {
    res.render('trip-create')
})
router.post('/trips-offer',createMiddleware,(req, res) => {
   
})

module.exports = router