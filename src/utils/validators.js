const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
const passwordRegex = /^[a-zA-Z0-9]+$/

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