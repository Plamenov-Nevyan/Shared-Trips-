const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const databaseInit = require('./config/mongoDB')
const routes = require('./config/routes')
const isAuth = require('./middlewares/authMiddleware')
const globalErrorHandler = require('./middlewares/globalErrorMiddleware')

require('./config/express')(app)

app.use(isAuth)

app.use(routes)

app.use(globalErrorHandler)

databaseInit()
.then(() => app.listen(port, console.log(`Server listening on port: ${port}...`)))
.catch(err => {throw err})