const {body} = require('express-validator');
const {extname} = require('path');

const validations = [
    body('name')
        .notEmpty().withMessage('El campo está vacío')
        .bail().isLength({ min: 5 }).withMessage('El nombre debe contener al menos 5 caracteres'),

    body('detail')
        .notEmpty().withMessage('El campo está vacío')
        .bail().isLength({ min: 20 }).withMessage('El detalle debe contener al menos 20 caracteres'),

    body('price')
        .notEmpty().withMessage('Debes indicar el precio'),

    body('image').custom((value, { req }) => {
        let file = req.files[0];
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif' ];
        if (!file) {
            throw new Error('Debes de subir una imagen');
        } else {
        let fileExtension = path.extname(file.originalname)
        if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error (`las extensiones de imagen permitidas son ${acceptedExtensions.join(', ')}`);
        }
            return true
        }
    }),

    body('category')
        .notEmpty().withMessage('El campo está vacío'),

    body('brand')
        .notEmpty().withMessage('El campo está vacío')

]

module.exports = validations





