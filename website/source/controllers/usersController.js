const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const {User} = require("../database/models");

const usersController = {

    //Login de usuarios
    login: async (req, res) => {
        try {
            return res.render('users/login')

        } catch (error) { console.log(error); }
    },

    access: async (req, res) => {
        try {
            const resultValidation = validationResult(req);
            if (resultValidation.errors.length > 0) {
                return res.render('users/login', {
                    errors: resultValidation.mapped(),
                    old : req.body
                });
            }

            const userToLogin = await User.findOne({ where : {email : req.body.email} });
            if (!userToLogin) {
                return res.render('users/login', {
                    errors: {email: {msg: 'El email con el que intenta ingresar no existe'}}
                });
            }

            const correctPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (correctPassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                req.session.isAdmin = userToLogin.admin == 1;
                if (req.body.remember) {
                    res.cookie('userEmail', req.body.email, {maxAge : (((1000 * 60) * 60)*24)});
                }
                return res.redirect('profile');
            } else {
                return res.render('users/login', {
                    errors: {password: {msg: 'Contraseña incorrecta'}},
                    old : req.body
                });
            }
        } catch (error) { console.log(error.message); }
    },

    // Registro de usuarios
    register: async (req , res) => { 
        try {
            return res.render('users/register');

        } catch (error) { console.log(error.message); }
    },

    record: async (req , res) => {
        const resultValidation = validationResult(req)
        try {
            if (resultValidation.errors.length > 0) {
                return res.render('users/register' , {
                    errors: resultValidation.mapped(),
                    old : req.body
                })
            }

            const result = await User.findOne({ where : {email : req.body.email} });
            if (!result) {
                await User.create({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: bcryptjs.hashSync(req.body.password, 10),
                    avatar: req.file ? req.file.filename : 'default.png',
                    admin: req.body.email.includes('@beelegantmen.com') ? 1 : 0
                });
                return res.render('users/login');

            } else {
                return res.render('users/register', {
                    errors: {email: {msg: 'Este email ya se encuentra registrado'}},
                    old : req.body
                })
            }

        } catch (error) { console.log(error.message); }
    },

    //Profile access y logout
    profile: async (req , res) => { // GET profile
        try {
            return res.render('users/profile', {
                user: req.session.userLogged
            })

        } catch (error) { console.log(error.message); }
    },

    logout: async (req, res) => {
        try {
            res.clearCookie('userEmail')
            req.session.destroy()
            return res.redirect('/')

        } catch (error) { console.log(error.message); }
    },

    // Profile edit y erase
    updateUserNames: async (req, res) => {
        try {
            await User.update({
                first_name: req.body.first_name,
                last_name: req.body.last_name
                }, {where : {id: req.params.id} })
            return res.redirect('/users/profile');

        } catch (error) { console.log(error.message); }
    },

    updateUserAvatar: async (req, res) => {
        try {
            await User.update({
                avatar: req.file ? req.file.filename : 'default.png',
                }, {where : {id: req.params.id}}
                )
                return res.redirect('/users/profile');

            } catch (error) { console.log(error.message); }
    },

    updateUserPass: async (req, res) => {
        try {
            const userToUpdate = await User.findOne({ where: { email: req.body.email } });
            const correctPassword = bcryptjs.compareSync(req.body.actualPass, userToUpdate.password);
            if ((correctPassword) && (req.body.newPass == req.body.checkNewPass)) {
                User.update({
                    password: bcryptjs.hashSync(req.body.newPass, 10),
                        }, {where : {id: userToUpdate.id}}
                        )
                    return res.redirect('/users/profile');
                }
        } catch (error) { console.log(error.message); }
    },

    destroy: async (req, res) => {
        try {
            await User.destroy({ where: {id: req.params.id} });
            req.session.destroy();
            return res.redirect('/');
        } catch (error) { console.log(error.message); }
    },

    // Cart
    cart: async (req , res) => {
        try {
            return res.render('users/cart');
        } catch (error) { console.log(error.message); }
    },

    // Contact
    contact: async (req , res) => {
        try {
            return res.render('users/contact');
        } catch (error) { console.log(error.message); }
    }
}

module.exports = usersController;
