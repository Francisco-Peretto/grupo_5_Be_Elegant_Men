const path = require('path')
const {all,one,generate, write} = require('../models/usersModel')
const bcryptjs = require('bcryptjs');

const usersController = {
    cart: (req , res) => {  // GET cart
        return res.render(path.resolve(__dirname,'../views/users/cart.ejs'))
    },

    login: (req , res) => { // GET login
        return res.render(path.resolve(__dirname,'../views/users/login.ejs'));
    },

    register: (req , res) => { // GET register
        return res.render(path.resolve(__dirname,'../views/users/register.ejs'));
    },

    profile: (req , res) => { // GET profile
        return res.render(path.resolve(__dirname,'../views/users/profile.ejs'));
    },

    log: (req , res) => { // POST login  ESTO NO ESTÁ TESTEADO
        let userToLogin = one('email', req.body.email); // Capturar email del formulario de login y buscar usuario con método. Se le puede cambiar el nombre
        if (userToLogin) {
            let correctPassword = bcryptjs.CompareSync(req.body.password, userToLogin.password)
            if (correctPassword) {
                return res.redirect('/'); // Se podría crear una ventana de confirmación o reenviar al perfil
             }
             return res.render(path.resolve(__dirname,'../views/users/login.ejs')); // HACER PARA DEVOLVER ERRORES          
        }
    },
    
    record: (req , res) => { // POST register
        return res.render(path.resolve(__dirname,'../views/users/profile.ejs'));
    }
}

module.exports = usersController;