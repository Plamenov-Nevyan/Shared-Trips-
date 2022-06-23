const router = require('express').Router()
const createMiddleware = require('../middlewares/createTripValidator')
const tripServices = require('../services/tripServices')

router.get('/trips-shared', (req, res, next) => {
    tripServices.getAllTrips()
    .then((trips) => res.render('shared-trips', {trips}))
    .catch(err => next(err))
    
})

router.get('/trips-offer', (req, res, next) => {
    try{
        res.render('trip-create')
    }
    catch(err){
        next(err)
    }
})
router.post('/trips-offer',createMiddleware,(req, res, next) => {
   tripServices.createTrip(req.body, req.user)
   .then(() => res.redirect('/trips/trips-shared'))
   .catch(err => next(err))
})

module.exports = router