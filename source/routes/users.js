const express = require ('express');

const usersController = require('../controllers/usersController');

const router = express.Router();

const multer = require('multer');
const storage = require('../modules/storage');
const upload = multer({storage:storage('../../uploads/users')});

const registerValidations = require('../validations/users/registerValidations')

//ruta para mostar el carrito
router.get('/cart', usersController.cart);

//rutas de registro
router.get('/register', usersController.register)   //muestra la vista del forulario de registro
router.post('/register', upload.any(), registerValidations, usersController.record)  // registra un usuario validando los campos

//ruta de loguin
router.get('/login', usersController.login);    //muestra la vista del formulario de registro
router.post('/login', usersController.access);  //loguea al usuario 

// rutas de perfil
router.get('/profile', usersController.profile); //esta vista no tiene funcionalidad solo existe para ir maquetandola

module.exports = router;