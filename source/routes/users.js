const express = require ('express');

const usersController = require('../controllers/usersController');

const router = express.Router();

const multer = require('multer');
const storage = require('../modules/storage');
const upload = multer({storage:storage('../../uploads/users')});

const registerValidations = require('../validations/users/registerValidations')

const isLogged = require('../middlewares/isLogged')
const noLogged = require('../middlewares/noLogged')

//ruta para mostar el carrito
router.get('/cart', usersController.cart);

//rutas de registro
router.get('/register', isLogged, usersController.register)   //muestra la vista del forulario de registro
router.post('/register', upload.any(), registerValidations, usersController.record)  // registra un usuario validando los campos

//ruta de loguin
router.get('/login', isLogged, usersController.login);    //muestra la vista del formulario de registro
router.post('/login', usersController.access);  //loguea al usuario 

// rutas de perfil
router.get('/profile', noLogged, usersController.profile); // este middlewarre no seria necesario en tanto no tengamos un boton para acceder directamente al perfil de usuario
router.get('/logout', usersController.logout); // este middlewarre no seria necesario en tanto no tengamos un boton para acceder directamente al perfil de usuario
module.exports = router;