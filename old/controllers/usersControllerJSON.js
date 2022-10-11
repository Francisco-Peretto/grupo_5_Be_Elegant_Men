const path = require('path');
const {all,findByField,generate,write} = require('../models/usersModel');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator')

const usersController = {
    cart: (req , res) => {  // GET cart
        return res.render('users/cart');
    },
    login: (req , res) => { // GET login
        return res.render('users/login');
    },
    register: (req , res) => { // GET register
        return res.render('users/register');
    },
    record: (req , res) => { // POST register
        const resultValidation = validationResult(req)

        if (resultValidation.errors.length > 0) { 
            return res.render('users/register' , {errors: resultValidation.mapped() , old : req.body})
        } 

        let userInDB = findByField('email', req.body.email)
        if (userInDB) {
            return res.render('users/register' , {
                errors: {
                    email: {
                        msg: 'Este email ya se encuentra registrado'
                    }
                }, 
                old : req.body})
        } 

        req.files && req.files.length > 0 ? req.body.image = req.files[0].filename : req.body.image = 'default.png';
        let user = generate(req.body);
        let allUsers = all();
        allUsers.push(user);
        write(allUsers);

        return res.render('users/login');
        
    },
    
    access: (req , res) => { // POST login
        let userToLogin = findByField('email', req.body.email)

        if (userToLogin) {
            let correctPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (correctPassword) {
                delete userToLogin.password
                req.session.userLogged = userToLogin

                if (req.body.remember) {
                    res.cookie('userEmail' , req.body.email, {maxAge : (((1000 * 60) * 60)*24)}) // cookie de 24 hs
                }

                return res.redirect('profile');
             } else {
                return res.render('users/login' , {
                    errors: {
                        password: {
                            msg: 'Contraseña incorrecta'
                        }
                    },
                    old : req.body
                })
             }
        } else {
            return res.render('users/login' , {
                errors: {
                    email: {
                        msg: 'El email con el que intenta ingresar no existe'
                    }
                }})
        }
    },
    profile: (req , res) => { // GET profile
        return res.render('users/profile', {
            user: req.session.userLogged
        })
    },
    logout: (req, res) => { // GET logout
        res.clearCookie('userEmail')
        req.session.destroy()
        return res.redirect('/')
    }
}

module.exports = usersController;