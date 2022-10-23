const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator')

const db = require("../database/models")

const usersController = {
    //CARRITO
    cart: (req , res) => {  
        return res.render('users/cart');
    },

    //LOGUEO
    login: (req , res) => { 
        return res.render('users/login');
    },

    access: (req , res) => { 

        db.User.findOne({
            where : {email : req.body.email}
        })
            .then((userToLogin) => {

                let correctPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
                if (correctPassword) {
                    delete userToLogin.password
                    req.session.userLogged = userToLogin
                    if (req.body.remember != undefined) {
                        res.cookie('userEmail' , req.body.email, {maxAge : (((1000 * 60) * 60)*24)}) // cookie de 24 hs
                    }   

                    return res.redirect('profile');

                } else {
                    return res.render('users/login' , {
                        errors: {password: {msg: 'Contraseña incorrecta'}},
                        old : req.body
                    })
                }
            })       
            .catch((fail) => {
                return res.render('users/login' , {
                    errors: {email: {msg: 'El email con el que intenta ingresar no existe'}}
                })
            })

    },

    //REGISTRO
    register: (req , res) => { 
        return res.render('users/register');
    },

    record: (req , res) => {                    
        const resultValidation = validationResult(req)

        if (resultValidation.errors.length > 0) { 
            return res.render('users/register' , {
                errors: resultValidation.mapped(),
                old : req.body
            })
        } 

        db.User.findOne({
            where : {email : req.body.email}
        })
            .then((result) => {
                let userFound = result

                if (userFound == null) {
                    db.User.create({
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        password: bcryptjs.hashSync(req.body.password, 10),
                        avatar: req.files && req.files.length > 0 ? req.files[0].filename : 'default.png',
                        admin: req.body.email.includes('@beelegantmen.com') ? 1 : 0
                    })

                    return res.render('users/login');
                } else {
                    return res.render('users/register' , {
                        errors: {email: {msg: 'Este email ya se encuentra registrado'}}, 
                        old : req.body
                    })
                }
            })

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