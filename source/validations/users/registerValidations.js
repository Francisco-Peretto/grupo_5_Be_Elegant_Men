const {body} = require('express-validator')
const path = require('path')

let firstName = body('firstName')
    .notEmpty().withMessage('El campo esta vacio')

let lastName = body('lastName')
    .notEmpty().withMessage('El campo esta vacio')

let email = body('email')
    .notEmpty().withMessage('El campo esta vacio').bail()
    .isEmail().withMessage('Debes escribir un correo válido')

let password = body('password')
    .notEmpty().withMessage('El campo esta vacio')

let image = body('image')
    .custom((value, {req}) => {
        let file = req.file
        let acceptedExtensions = ['.jpg','.png','.gif']
        if(!file) {
            throw new Error ('Tienes que subir una imagen')
        } else {
            let fileExtension = path.extname(file.originalname)
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error ('Las extendiones de archivo permitidas son: .jpg, .png y .gif')
            }
        }
        return true
    })

const registerValidations = [firstName, lastName, email, password, image]

module.exports = registerValidations