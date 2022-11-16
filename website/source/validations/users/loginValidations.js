const {body} = require('express-validator');
const path = require('path');

const validations = [    
    body('email')
        .notEmpty().withMessage('Debes ingresar un email')
        .isEmail().withMessage('Debes escribir un correo válido'),
    
    body('password')
        .notEmpty().withMessage('Debes ingresar una contraseña')
        .isLength({ min: 8 }).withMessage('La contraseña debe contener al menos 8 caracteres'),
]

module.exports = validations