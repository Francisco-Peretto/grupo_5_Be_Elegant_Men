const path = require('path');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator')

const db = require("../database/models")

const usersController = {
    //CARRITO
    cart: (req , res) => {  // GET cart
        return res.render('users/cart');
    },

    //LOGUEO
    login: (req , res) => { // GET login
        return res.render('users/login');
    },

    access: (req , res) => { // POST login

        db.User.findOne({
            where : {
                email : req.body.email,
            }
        })
            .then((userToLogin) => {

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
            })       
            .catch((fail) => {
                return res.render('users/login' , {
                    errors: {
                        email: {
                            msg: 'El email con el que intenta ingresar no existe'
                        }
                    }})
            })

    },

    //REGISTRO
    register: (req , res) => { // GET register
        return res.render('users/register');
    },

    record: (req , res) => { // POST register
        const resultValidation = validationResult(req)

        if (resultValidation.errors.length > 0) { 
            return res.render('users/register' , {errors: resultValidation.mapped() , old : req.body})
        } 

        db.User.findOne({
            where : {
                email : req.body.email,
            }
        })
            .then((result) => {
                userInDB = result
            })
            
        if (userInDB) {
            return res.render('users/register' , {
                errors: {
                    email: {
                        msg: 'Este email ya se encuentra registrado'
                    }
                }, 
                old : req.body})
        } 


        db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            image: req.files && req.files.length > 0 ? req.files[0].filename : 'default.png',
        })

        return res.render('users/login');
        
    },

    //PERFIL
    profile: (req , res) => { // GET profile
        return res.render('users/profile', {
            user: req.session.userLogged
        })
    },

    //LOGOUT
    logout: (req, res) => { // GET logout
        res.clearCookie('userEmail')
        req.session.destroy()
        return res.redirect('/')
    }
}

module.exports = usersController;