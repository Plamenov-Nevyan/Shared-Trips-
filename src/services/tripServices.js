const {Trip} = require('../models/Trip') 
const {User} = require('../models/User')

const createTrip = (tripData, user) => {
    tripData.creator = user._id
   return Trip.create(tripData)
}

const getTripDetails = (tripId) => Trip.findById(tripId).populate('buddies').populate('creator').lean()

const getAllTrips = () => Trip.find().lean()

const joinTrip = async (tripId, userId) => {
try{
    let [trip, user] = await Promise.all([
        Trip.findById(tripId),
        User.findById(userId)
      ]) 
     trip.buddies.push(user)
     user.tripsHistory.push(trip)
     return Promise.all([
        trip.save(),
        user.save()
     ])
}catch(err){
    throw err
}
}

module.exports = {
    createTrip,
    getAllTrips,
    getTripDetails, 
    joinTrip
}