const path = require('path');
const {all,one,generate, write} = require('../models/usersModel');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator')

const usersController = {
    cart: (req , res) => {  // GET cart
        return res.render('../views/users/cart.ejs');
    },
    login: (req , res) => { // GET login
        return res.render('../views/users/login.ejs');
    },
    profile: (req , res) => { // GET login
        return res.render('../views/users/profile.ejs'); // controlador sin funcionalidad mas qu mostrat la vista para ir maquetanola
    },
    register: (req , res) => { // GET register
        return res.render('../views/users/register.ejs');
    },
    record: (req , res) => { // POST register
        const resultValidation = validationResult(req)

        if (resultValidation.errors.length > 0) { 
            return res.render('../views/users/register.ejs' , {errors: resultValidation.mapped() , old : req.body})
        } else {
            req.files && req.files.length > 0 ? req.body.image = req.files[0].filename : req.body.image = 'default.png';
            let user = generate(req.body);
            let allUsers = all();
            allUsers.push(user);
            write(allUsers);

            return res.redirect('/');  // Cuando sea creado profile puede redirigir a esa vista
        }
    },
    access: (req , res) => { // POST login
        let userToLogin = all().find(e => e.email == req.body.email);
        if (userToLogin) {
            let correctPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (correctPassword) {
                return res.redirect('/');
             }
             return res.render('../views/users/login.ejs');        //faltan las validaciones
        }
    }
}

module.exports = usersController;