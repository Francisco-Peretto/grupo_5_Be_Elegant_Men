const {findByField} = require('../models/usersModel')

let middleware = (req,res, next) => {
    res.locals.isLogged = false

    let emailInCookie = req.cookies.userEmail
    let userFromCookie = findByField('email', emailInCookie)

    if (userFromCookie) {
        req.session.userLogged = userFromCookie
    }

    if (req.session.userLogged) {
        res.locals.isLogged = true
        res.locals.userLogged = req.session.userLogged
    }

    next()
}

module.exports= middleware