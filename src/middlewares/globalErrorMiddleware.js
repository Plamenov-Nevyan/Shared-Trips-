
module.exports = (error, res, req) => {
  res.render('404', 
    {status:error.status || 404,
    message: error.message || 'Oops, something went wrong...'
    }
  )
}