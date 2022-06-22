const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
    startPoint:{
        type:String,
        required:[true, 'Trip start point is required!']
    },
    endPoint: {
        type:String,
        required:[true, 'Trip end point is required!']
    },
    date: {
        type:String,
        required:[true, 'Trip date is required!']
    },
    time: {
        type:String,
        required:[true, 'Trip time longevity is required!']
    },
    carImage: {
        type:String,
        required:[true, 'Vehicle image is required!']
    },
    carBrand: {
        type:String,
        required:[true, 'Vehicle brand is required!']
    },
    seats: {
        type:String,
        required:[true, 'Info about vehicle seats available, is required!']
    },
    price: {
        type:String,
        required:[true, 'Trip price is required!']
    },
    description: {
        type:String,
        required:[true, 'Trip description is required!']
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    buddies: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    ]
})

const Trip = mongoose.model('Trip', tripSchema)
exports.Trip = Trip