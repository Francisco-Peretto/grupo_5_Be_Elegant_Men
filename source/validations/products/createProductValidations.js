const {body} = require('express-validator')

const validations = [
    body('name')
        .notEmpty().withMessage('El campo esta vacio')
        .bail().isLength({ min: 5 }).withMessage('El nombre debe contener al menos 5 caracteres'),

    body('detail')
        .notEmpty().withMessage('El campo esta vacio')
        .bail().isLength({ min: 20 }).withMessage('El detalle debe contener al menos 20 caracteres'),

    body('price')
        .notEmpty().withMessage('Debes indicar el precio'),

    body('imagen')
        .isIn([ "PNG", "JPEG", "GIF" , "JPG"]).withMessage('Los formatos soportados son solo JPG, JPEG, PNG y GIF'),

]

module.exports = validations





