const router = require('express').Router()

router.get('/trips-shared', (req, res) => {
    res.render('shared-trips')
})

router.get('/trips-offer', (req, res) => {
    res.render('trip-create')
})

module.exports = router