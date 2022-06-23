const {Trip} = require('../models/Trip') 

const createTrip = (tripData, user) => {
    tripData.creator = user._id
   return Trip.create(tripData)
}

const getTripDetails = (tripId) => Trip.findById(tripId).populate('buddies').populate('creator').lean()

const getAllTrips = () => Trip.find().lean()

module.exports = {
    createTrip,
    getAllTrips,
    getTripDetails
}