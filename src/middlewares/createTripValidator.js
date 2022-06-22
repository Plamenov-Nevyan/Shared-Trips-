const {
    isDateValid,
    areFieldsEmpty,
    areDestinationsPresent, 
    isCarImagePresent, 
    areCarSeatsValid, 
    isCarBrandValid, 
    isPriceValid, 
    isDescriptionValid} = require('../utils/validators')

    module.exports = (req, res, next) => {
        try{
            areFieldsEmpty(Object.values(req.body))
            isDateValid(req.body.date)
            areDestinationsPresent(req.body.startPoint, req.body.endPoint) 
            isCarImagePresent(req.body.carImage) 
            areCarSeatsValid(req.body.seats) 
            isCarBrandValid(req.body.carBrand) 
            isPriceValid(req.body.price) 
            isDescriptionValid(req.body.description)
        }
        catch(err){
            res.locals.error = err
            res.render('trip-create')
        }
    }