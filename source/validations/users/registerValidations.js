const {body} = require('express-validator')

const validations = [
    body('first_name')
        .notEmpty().withMessage('El campo esta vacio')
        .bail().isLength({ min: 2 }).withMessage('El nombre debe contener al menos 2 caracteres'),

    body('last_name')
        .notEmpty().withMessage('El campo esta vacio')
        .bail().isLength({ min: 2 }).withMessage('El apellido debe contener al menos 2 caracteres'),
    
    body('email')
        .isEmail().withMessage('Debes escribir un correo válido'),
    
    body('password')
        .isLength({ min: 8 }).withMessage('La contraseña debe contener al menos 8 caracteres')/* ,
    
    body('avatar')
        .isIn([ "PNG", "JPEG", "GIF" , "JPG"]).withMessage('Los formatos soportados son solo JPG, JPEG, PNG y GIF'), */
    ]
        
module.exports = validations