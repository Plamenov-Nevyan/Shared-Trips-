const {Trip} = require('../models/Trip') 

const createTrip = (tripData, user) => {
    tripData.owner = user._id
   return Trip.create(tripData)
}

const getAllTrips = () => Trip.find().lean()

module.exports = {
    createTrip,
    getAllTrips
}