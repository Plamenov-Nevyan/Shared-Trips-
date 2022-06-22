const router = require('express').Router()
const authController = require('../controllers/authController')
const tripsController = require('../controllers/tripsController')

router.use('/', authController)
router.use('/trips', tripsController)

module.exports = router