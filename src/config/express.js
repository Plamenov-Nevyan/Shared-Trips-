const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const handlebars = require('express-handlebars')
const routes = require('./routes')

module.exports = (app) => {
   app.engine('hbs', handlebars.engine({extname: 'hbs'}))
   app.set('view engine', 'hbs')

   app.use(bodyParser.urlencoded({extended:'true'}))
   app.use(cookieParser())

   app.use(routes)
}