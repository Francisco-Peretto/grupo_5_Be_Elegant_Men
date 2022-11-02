const {body} = require('express-validator');
const path = require('path');

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
        let file = req.files;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif' ];

        if (file[0] == undefined ) {
            throw new Error('Debes subir una imagen');
        } else {
        let fileExtension = path.extname(file[0].originalname)
        if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error (`las extensiones de imagen permitidas son ${acceptedExtensions.join(', ')}`);
        } else {
            return true
    }}
})
]

module.exports = validations





