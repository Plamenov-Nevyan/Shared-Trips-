const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
const passwordRegex = /^[a-zA-Z0-9]+$/

exports.isEmailvalid = (email) => {
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
        if(passToCheck.length < 8 && passToCheck !== rePass){
            throw {
                message : 'Please enter valid password that is atleast 8 characters long and matches the repeat-password!'
            }
        }
        else if(passToCheck.length < 8){
            throw {
                message : 'Please enter valid password that is atleast 8 characters long!'
            }
        }
        else if(passToCheck !== rePass){
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
else if(passToCheck.length < 8 && passToCheck !== rePass){
    throw {
    message : 'Please enter valid password that is atleast 8 characters long and matches the repeat-password!'
    }
}
else if(passToCheck.length < 8){
    throw {
        message : 'Please enter valid password that is atleast 8 characters long!'
    }
}
else if(passToCheck !== rePass){
    throw {
        message : 'Please enter a valid password and repeat-password that match each-other!'
    }
}
}