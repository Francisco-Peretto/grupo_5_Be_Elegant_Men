let middleware = (req,res) => {
    if (req.session && req.session.user) {
        next()
    }
    return res.redirect('/users/login')
}

module.exports= middleware