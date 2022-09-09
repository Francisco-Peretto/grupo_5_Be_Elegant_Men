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
router.post('/register', upload.any(), usersController.record)  // registra un usuario

//ruta de loguin
router.get('/login', usersController.login);    //muestra la vista del formulario de registro

// rutas de perfil
//router.get('/profile/:userId', usersController.profile);

router.post('/login', usersController.access);

module.exports = router;