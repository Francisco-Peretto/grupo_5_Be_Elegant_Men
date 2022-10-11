const db = require("../database/models")

let middleware = async (req,res,next) => {
    res.locals.isLogged = false
    
    if (req.cookies && req.cookies.userEmail) {
        let user = await db.User.findOne({
            where : {email : req.cookies.userEmail}
        })
        if (user) {
            req.session.userLogged = user
        }
    }

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true
        res.locals.userLogged = req.session.userLogged
    }

    return next()


}

module.exports= middleware