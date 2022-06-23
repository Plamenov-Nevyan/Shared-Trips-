const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
const passwordRegex = /^[a-zA-Z0-9]+$/
const imageRegex = /^http/

exports.isEmailValid = (email) => {
  let isValid = emailRegex.test(email)
  if(!isValid){
    throw {
        message : 'Please enter a valid email!'
    }
  }
}

exports.isPasswordValid = (password, rePassword) => {
    let isValid = passwordRegex.test(password)
    if(!isValid){
        if(password.length < 8 && password !== rePassword){
            throw {
                message : 'Please enter valid password that is atleast 8 characters long and matches the repeat-password!'
            }
        }
        else if(password.length < 8){
            throw {
                message : 'Please enter valid password that is atleast 8 characters long!'
            }
        }
        else if(password !== rePass){
            throw {
                message : 'Please enter a valid password and repeat-password that match each-other!'
            }
        }
        else {
            throw {
                message : 'Please enter a valid password!'
            }
        }
    }
else if(password.length < 8 && password !== rePassword){
    throw {
    message : 'Please enter valid password that is atleast 8 characters long and matches the repeat-password!'
    }
}
else if(password.length < 8){
    throw {
        message : 'Please enter valid password that is atleast 8 characters long!'
    }
}
else if(password !== rePassword){
    throw {
        message : 'Please enter a valid password and repeat-password that match each-other!'
    }
}
}

exports.areFieldsEmpty = (fields) => {
    if(fields.includes('')){
        throw{
            message: 'Please fill all the required information!'
        }
    }
}

exports.areDestinationsPresent = (startPoint, endPoint) => {
    let isValid = startPoint !== `` && endPoint !== ``
    if(!isValid){
        throw{
            message : 'Please enter your trip\'s start/end point!'
        }
    }
}
exports.isCarImagePresent = (carImageInput) => {
    let isValid = imageRegex.test(carImageInput)
    if(!isValid){
        throw{
            message: 'Please enter valid image url!'
        }
    }
}

exports.areCarSeatsValid = (carSeatsInput) => {
    let isValid = !isNaN(carSeatsInput)
    if(!isValid){
        throw{
            message: 'Please enter a number representing available seats!'
        }
    }
    else if(carSeatsInput == ``){
        throw{
            message: 'Info about vehicle seats is required!'
        }
    }
}

exports.isCarBrandValid = (carBrand) => {
    let isValid = carBrand !== ``
    if(!isValid){
        throw{
            message: 'Vehicle brand is required!'
        }
    }
}

exports.isPriceValid = (price) => {
    let isValid = !isNaN(price)
    if(!isValid){
        throw{
            message: 'Please enter a number representing trip\'s price!'
        }
    }
    else if(price == ``){
        throw{
            message: 'Trip price is required!'
        }
    }
}

exports.isDescriptionValid = (description) => {
    let isValid = description !== ``
    if(!isValid){
        throw{
            message:'Please enter some description about your trip!'
        }
    }
}

exports.isDateValid = (date) => {
    let currDate = new Date().toISOString().split("T")[0].split('-').map(Number)
    let [currYear, currMonth, currDay] = currDate
    date = date.split('-').map(Number)
    let [year, month, day] = date
     if(year < currYear){
        throw{
            message : 'You can\'t choose a date that has already passed, for your trip'
        }
     }
     else if(month < currMonth){
        throw{
            message : 'You can\'t choose a date that has already passed, for your trip'
        }
     }
     else if(day < currDay){
        throw{
            message : 'You can\'t choose a date that has already passed, for your trip'
        }
     }
}