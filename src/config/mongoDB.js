const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/shared-trips'

module.exports = () => mongoose.connect(url)