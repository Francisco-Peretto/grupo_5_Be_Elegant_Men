const path = require('path')

const usersController = {
    cart: (req , res) => {
        res.render(path.resolve(__dirname,'../views/users/cart.ejs'))
    },

    login: (req , res) => {
        res.render(path.resolve(__dirname,'../views/users/login.ejs'));
    },

    register: (req , res) => {
        res.render(path.resolve(__dirname,'.../views/users/productDetail.ejs'));
    }
}

module.exports = usersController;