const {body} = require('express-validator')

const validations = [
    body('name')
        .notEmpty().withMessage('El campo esta vacio'),

    body('detail')
        .notEmpty().withMessage('El campo esta vacio'),

    body('price')
        .notEmpty().withMessage('Debes indicar el precio')
]

module.exports = validations