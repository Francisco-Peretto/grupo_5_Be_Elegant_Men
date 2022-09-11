const {body} = require('express-validator')

const validations = [
    body('firstName')
        .notEmpty().withMessage('El campo esta vacio'),

    body('lastName')
        .notEmpty().withMessage('El campo esta vacio'),

    body('email')
        .isEmail().withMessage('Debes escribir un correo válido'),

    body('password')
        .isLength({ min: 5 }).withMessage('La contraseña debe contener al menos 5 caracteres')
]

module.exports = validations