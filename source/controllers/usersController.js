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

    access: (req , res) => { // POST login
        let userToLogin = all().find(e => e.email == req.body.email);
        if (userToLogin) {
            let correctPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (correctPassword) {
                return res.redirect('/');
             }
             return res.render('../views/users/login.ejs');        
        }
    },
    
    record: (req , res) => { // POST register
        req.files && req.files.length > 0 ? req.body.image = req.files[0].filename : req.body.image = 'default.png';
        let user = generate(req.body);
        let allUsers = all();
        allUsers.push(user);
        write(allUsers);

        return res.redirect('/'); // Cuando sea creado profile puede redirigir a esa vista
        return res.render('../views/users/profile.ejs');
    }
}

module.exports = usersController;