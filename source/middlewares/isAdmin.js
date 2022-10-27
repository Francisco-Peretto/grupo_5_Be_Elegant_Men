let middleware = (req,res, next) => {
    if (!req.session.isAdmin) {
        return res.redirect('/')
    }
    next()
}

module.exports= middleware