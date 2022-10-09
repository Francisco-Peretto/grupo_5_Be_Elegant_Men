const db = require("../database/models")

let middleware = (req,res, next) => {
    res.locals.isLogged = false

    let emailInCookie = req.cookies.userEmail

    db.User.findOne({
        where : {
            email : emailInCookie,
        }
    })
        .then((userFromCookie) => {
            req.session.userLogged = userFromCookie
            res.locals.isLogged = true
            res.locals.userLogged = req.session.userLogged
        })
        .then(function(){
            next()
        })
}

module.exports= middleware