const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const path = require('path')

module.exports = (app) => {
   app.engine('hbs', handlebars.engine({extname: 'hbs'}))
   app.set('view engine', 'hbs')
   app.set('views', path.resolve('src', 'views'))
   app.use(cookieParser())
   app.use(bodyParser.urlencoded({extended: true}))
   app.use('/static', express.static('static'))
}