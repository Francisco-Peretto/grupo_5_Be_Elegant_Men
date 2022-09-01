const path = require('path');
const {all,one,generate, write} = require('../models/usersModel');
const bcryptjs = require('bcryptjs');

const usersController = {
    cart: (req , res) => {  // GET cart
        return res.render('../views/users/cart.ejs');
    },

    login: (req , res) => { // GET login
        return res.render('../views/users/login.ejs');
    },

    register: (req , res) => { // GET register
        return res.render('../views/users/register.ejs');
    },

    profile: (req , res) => { // GET profile
        return res.render(__dirname,'../views/users/profile.ejs');
    },

    access: (req , res) => { // POST login Esto no está testeado porque hay que crear contraseña encriptada al crear al usuario
        let userToLogin = all().find(e => e.email == req.body.email);
        if (userToLogin) {
            let correctPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (correctPassword) {
                return res.redirect('/');
             }
             return res.render('../views/users/login.ejs'); // HACER PARA DEVOLVER ERRORES          
        }
    },
    
    record: (req , res) => { // POST register
        return res.render('../views/users/profile.ejs');
    }
}

module.exports = usersController;