const {body} = require('express-validator');
const path = require('path');

const validations = [
    body('user')
        .notEmpty().withMessage('El campo está vacío')
        .bail().isEmail().withMessage('Debe ingresar su correo electronico'),

    body('detail')
        .notEmpty().withMessage('El campo está vacío')
        .bail().isLength({ min: 20 }).withMessage('El detalle debe contener al menos 20 caracteres')
]

module.exports = validations





