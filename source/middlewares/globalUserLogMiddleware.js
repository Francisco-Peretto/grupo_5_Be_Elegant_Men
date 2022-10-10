const db = require("../database/models")

let middleware = (req,res,next) => {
    res.locals.isLogged = false
/*     if (req.cookies.userEmail)  */
    db.User.findOne({
        where : {email : req.cookies.userEmail}
    })
        .then((user) => {
            if (user) {
                req.session.userLogged = user
            }
            if (req.session.userLogged) {
                res.locals.userLogged = req.session.userLogged
                res.locals.isLogged = true
            }
            return next()
        })
        .catch(()=> next())
        
}

module.exports= middleware