const {body} = require('express-validator');
const path = require('path');

const validations = [
    body('first_name')
        .notEmpty().withMessage('El campo está vacío')
        .bail().isLength({ min: 2 }).withMessage('El nombre debe contener al menos 2 caracteres'),

    body('last_name')
        .notEmpty().withMessage('El campo está vacío')
        .bail().isLength({ min: 2 }).withMessage('El apellido debe contener al menos 2 caracteres'),
    
    body('email')
        .isEmail().withMessage('Debes escribir un correo válido'),
    
    body('password')
        .isLength({ min: 8 }).withMessage('La contraseña debe contener al menos 8 caracteres'),
    
    body('avatar').custom((value, { req }) => {
        let file = req.files;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif' ];

        if (file[0] == undefined ) {
            throw new Error('Debes de subir una imagen');
        } else {
        let fileExtension = path.extname(file[0].originalname)
        if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error (`las extensiones de imagen permitidas son ${acceptedExtensions.join(', ')}`);
        } else {
            return true
        }
    }
})
]

module.exports = validations