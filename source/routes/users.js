const express = require ('express');

const usersController = require('../controllers/usersController');

const router = express.Router();

const multer = require('multer');
const storage = require('../modules/storage');
const upload = multer({storage:storage('../../uploads/users')});

const registerValidations = require('../validations/users/registerValidations');

const isLogged = require('../middlewares/isLogged');
const noLogged = require('../middlewares/noLogged');

//ruta para mostrar el carrito
router.get('/cart', noLogged, usersController.cart);

//rutas de registro
router.get('/register', isLogged, usersController.register);
router.post('/register', upload.any(), registerValidations, usersController.record);

//ruta de login
router.get('/login', isLogged, usersController.login);
router.post('/login', usersController.access);

// rutas de perfil
router.get('/profile', usersController.profile);
router.get('/logout', usersController.logout);

//rutas de edición de usuario
router.patch('/updateNames/:id', usersController.updateUserNames);
router.patch('/updateAvatar/:id', upload.any(), usersController.updateUserAvatar);
router.patch('/updatePass/:id', usersController.updateUserPass);

//ruta de borrado
router.delete('/destroyUser/:id', usersController.destroy);

module.exports = router;