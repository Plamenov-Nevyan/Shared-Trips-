const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const handlebars = require('express-handlebars')
const routes = require('./routes')
const path = require('path')

module.exports = (app) => {
   app.engine('hbs', handlebars.engine({extname: 'hbs'}))
   app.set('view engine', 'hbs')
   app.set('views', path.resolve('src', 'views'))

   app.use(bodyParser.urlencoded({extended:'true'}))
   app.use(cookieParser())

   app.use('/static', express.static('static'))

   app.use(routes)
}