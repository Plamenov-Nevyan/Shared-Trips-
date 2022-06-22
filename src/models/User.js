const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, 'Email is required to register!']
    },
    password:{
        type:String,
        required: [true, 'Password is required to register']
    },
    gender: {
        type: String,
        required:[true, 'Gender is required to register']
    },
    tripsHistory :[
        {
            type: mongoose.Types.ObjectId,
            ref:'Trip'
        }
    ]
})

const User = mongoose.model('User', userSchema)
exports.User = User