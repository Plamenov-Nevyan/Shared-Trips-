const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const databaseInit = require('./config/mongoDB')

require('./config/express')(app)

databaseInit()
.then(() => app.listen(port, console.log(`Server listening on port: ${port}...`)))
.catch(err => {throw err})