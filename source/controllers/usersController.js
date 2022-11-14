const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
/*const fs = require('fs');
const {extname,resolve} = require('path');*/
const db = require("../database/models");

const usersController = {

    login: async (req, res) => {
        try {
            return res.render('users/login')
        } catch (error) { console.log(error); }
    },

    //Login de usuarios

    access: async (req , res) => {
        try {
            const resultValidation = validationResult(req)

            if (resultValidation.errors.length > 0) { 
                return res.render('users/login', {
                    errors: resultValidation.mapped(),
                    old : req.body
                })
            } else {
                await db.User.findOne({
                    where : {email : req.body.email}
                })
                    .then(userToLogin => {        
                        let correctPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
                        if (correctPassword) {
                            delete userToLogin.password;
                            req.session.userLogged = userToLogin;
                            userToLogin.admin == 1 ? req.session.isAdmin = true : req.session.isAdmin = false;
                            req.body.remember != undefined ?
                            res.cookie('userEmail', req.body.email, {maxAge : (((1000 * 60) * 60)*24)}) : null; // cookie de 24 hs 
                            return res.redirect('profile');
                        } else {
                            return res.render('users/login', {
                                errors: {password: {msg: 'Contraseña incorrecta'}},
                                old : req.body
                            })
                        }
                    })
                    .catch((fail) => { return res.render('users/login', {
                            errors: {email: {msg: 'El email con el que intenta ingresar no existe'}}
                        })
                    })
            }
        } catch (error) { console.log(error); }
    },

    //register de usuarios

    register: async (req , res) => { 
        try {
            return res.render('users/register');
        } catch (error) { console.log(error); }
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
            await db.User.findOne({ where : {email : req.body.email} })
                .then(result => {
                    if (result == null) {
                        db.User.create({
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            email: req.body.email,
                            password: bcryptjs.hashSync(req.body.password, 10),
                            avatar: req.file ? req.file.filename : 'default.png',
                            admin: req.body.email.includes('@beelegantmen.com') ? 1 : 0
                        })
                        return res.render('users/login');
                    } else {
                        return res.render('users/register', {
                            errors: {email: {msg: 'Este email ya se encuentra registrado'}},
                            old : req.body
                        })
                    }
                })
        } catch (error) { console.log(error); }
    },

    //Profile access y logout

    profile: async (req , res) => { // GET profile
        try {
            return res.render('users/profile', {
                user: req.session.userLogged
            })
        } catch (error) { console.log(error); }
    },

    logout: async (req, res) => {
        try {
            res.clearCookie('userEmail')
            req.session.destroy()
            return res.redirect('/')
        } catch (error) { console.log(error); }
    },

    // Profile edit y erase

    updateUserNames: async (req, res) => {
        try {
            await db.User.update({
                first_name: req.body.first_name,
                last_name: req.body.last_name
                }, {where : {id: req.params.id} })
            return res.redirect('/users/profile');
        } catch (error) { console.log(error); }
    },

    updateUserAvatar: async (req, res) => {
        try {
            await db.User.update({
                avatar: req.file ? req.file.filename : 'default.png',
                }, {where : {id: req.params.id}}
                /*.then(function(file) {
                    let path = resolve(__dirname,'..','..','public','img','users',)
                    fs.unlink(path)
                }) */
                )
                return res.redirect('/users/profile');
            } catch (error) { console.log(error); }
    },

    updateUserPass: async (req, res) => {
        try {
            await db.User.findOne({ where : {email : req.body.email} })
                .then(userToUpdate => {
                    let correctPassword = bcryptjs.compareSync(req.body.actualPass, userToUpdate.password);
                    if ((correctPassword) && (req.body.newPass == req.body.checkNewPass)) {
                        db.User.update({
                            password: bcryptjs.hashSync(req.body.newPass, 10),
                            }, {where : {id: userToUpdate.id}}
                            )
                        return res.redirect('/users/profile');
                    }
                })
        } catch (error) { console.log(error); }
    },

    destroy: async (req, res) => {
        try {
            await db.User.destroy({ where: {id: req.params.id} });
            req.session.destroy();
            return res.redirect('/');
        } catch (error) { console.log(error); }
    },

    // Cart 

    cart: async (req , res) => {
        try {
            return res.render('users/cart');
        } catch (error) { console.log(error); }
    },

    //APIs

    listUsersApi: async (req, res) => {
        try {
            await db.User.findAll()
                .then(users => {

                    return res.json({
                            count: users.length,
                            usuarios : users
                    })
                })
            } catch (error) { console.log(error); }
        },

    userDetailApi: async (req, res) => {
            try {
                await db.User.findByPk(req.params.id)
                    .then(user => { 
                            return res.json({
                                Usuario: user
                            })
                    })
            } catch (error) { console.log(error); }
        }
}

module.exports = usersController;