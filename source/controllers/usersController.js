const path = require('path')

const usersController = {
    cart: (req , res) => {  // GET cart
        res.render(path.resolve(__dirname,'../views/users/cart.ejs'))
    },

    login: (req , res) => { // GET login
        res.render(path.resolve(__dirname,'../views/users/login.ejs'));
    },

    register: (req , res) => { // GET register
        res.render(path.resolve(__dirname,'../views/users/register.ejs'));
    }

    /* POST register. El siguiente código servirá para validar los campos del registro enviados por POST con express-valitator        
    processRegister: (req,res) => {  // POST register
        const resultValidation = validationResult(req);
        if (resultValidationValidation.errors.length > 0) { 
                res.render(path.resolve(__dirname,'../views/users/register.ejs', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                }); 
        res.render(path.resolve(__dirname,'../views/users/register.ejs'));
        }
    }*/
}

module.exports = usersController;