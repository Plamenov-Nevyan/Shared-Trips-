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

router.get('/details/:tripId', (req, res, next) => {
    tripServices.getTripDetails(req.params.tripId)
    .then((trip) => {
        trip.areBuddiesAvailable = trip.buddies.length > 0
        req.user ? trip.isOwner = trip.creator._id == req.user._id : trip.isOwner = false
        req.user ? trip.hasJoined = trip.buddies.map(buddy => buddy.email).includes(req.user.email) : trip.hasJoined = false
        trip.seats = trip.seats - trip.buddies.length
        if(trip.seats - 1 < 0){trip.areSeatsAvailable = false}
        else{
            trip.areSeatsAvailable = true
        } 
        res.render('trip-details', {trip, user: req.user})
    })
    .catch(err => next(err))
})

router.get('/join/:tripId', (req, res, next) => {
    tripServices.joinTrip(req.params.tripId,req.user._id)
    .then(() => res.redirect(`/trips/details/${req.params.tripId}`))
    .catch(err => next(err))
})
module.exports = router