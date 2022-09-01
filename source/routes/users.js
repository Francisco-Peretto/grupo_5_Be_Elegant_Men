const express = require ('express');

const usersController = require('../controllers/usersController');

const router = express.Router();

const multer = require('multer');
const storage = require('../modules/storage');
const upload = multer({storage:storage('../../uploads/users')});

router.get('/cart', usersController.cart);

router.get('/login', usersController.login);

router.get('/register', usersController.register)

router.get('/profile', usersController.profile);

router.post('/login', usersController.access);

router.post('/register', upload.any(), usersController.record)

module.exports = router;