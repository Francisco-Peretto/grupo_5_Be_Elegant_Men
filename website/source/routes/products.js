const express = require ('express');
const router = express.Router();

// Controller
const productsController = require ('../controllers/productsController');

// Middlewares
const multer = require('multer');
const storage = require('../modules/storage');
const upload = multer({storage:storage('../../uploads/users')});

// Validators
const isAdmin = require('../middlewares/isAdmin');
const createProductsValidations = require('../validations/products/createProductsValidations');
const editProductsValidations = require('../validations/products/editProductsValidations');

// Index route
router.get('/', productsController.index);

// Product creation routes
router.get('/products/create', isAdmin, productsController.create); 
router.post('/products/save', upload.single('image'), createProductsValidations, productsController.save);

// Product reading routes
router.get('/products/search', productsController.search);
router.get('/products/list/:category?', productsController.list);
router.get('/products/:id', productsController.detail);

// Product edition routes
router.get('/products/:id/edit', isAdmin, productsController.edit);
router.put('/products/:id', upload.single('image'), editProductsValidations, productsController.update);

// Product erasing route
router.delete('/products/:id', productsController.erase);

module.exports = router;