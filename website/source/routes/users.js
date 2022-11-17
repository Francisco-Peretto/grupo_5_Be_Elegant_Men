const express = require ('express');
const router = express.Router();

// Controller
const usersController = require('../controllers/usersController');

// Middlewares
const multer = require('multer');
const storage = require('../modules/storage');
const upload = multer({storage:storage('../../uploads/users')});
const isLogged = require('../middlewares/isLogged');
const noLogged = require('../middlewares/noLogged');

// Validators
const registerValidations = require('../validations/users/registerValidations');
const loginValidations = require('../validations/users/loginValidations');

// User register routes
router.get('/register', isLogged, usersController.register);
router.post('/register', upload.single('avatar'), registerValidations, usersController.record);

// User login routes
router.get('/login', isLogged, usersController.login);
router.post('/login', loginValidations, usersController.access);

// Profile routes
router.get('/profile', usersController.profile);
router.get('/logout', usersController.logout);

// User editing routes
router.patch('/updateNames/:id', usersController.updateUserNames);
router.patch('/updateAvatar/:id', upload.single('avatar'), registerValidations, usersController.updateUserAvatar);
router.patch('/updatePass/:id', usersController.updateUserPass);

// User deleting route
router.delete('/destroyUser/:id', usersController.destroy);

// User cart route
router.get('/cart', noLogged, usersController.cart);

module.exports = router;