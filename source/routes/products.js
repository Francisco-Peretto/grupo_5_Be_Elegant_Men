const express = require ('express');

const productsController = require ('../controllers/productsController');

const router = express.Router();

const multer = require('multer');
const storage = require('../modules/storage');
const upload = multer({storage:storage('../../uploads/users')});

const isAdmin = require('../middlewares/isAdmin');
const createProductsValidations = require('../validations/products/createProductsValidations')
const editProductsValidations = require('../validations/products/editProductsValidations')
// rutas de pagina principal
router.get('/', productsController.index);

//rutas de creación
router.get('/products/create', isAdmin, productsController.create); 
router.post('/products/save', upload.single('image'), createProductsValidations, productsController.save);

// rutas de lectura
router.get('/products/search', productsController.search);
router.get('/products/list/:category?', productsController.list);
router.get('/products/:id', productsController.detail);

//rutas de edición
router.get('/products/:id/edit', isAdmin, productsController.edit);
router.put('/products/:id', upload.single('image'), editProductsValidations, productsController.update);

//ruta de borrado
router.delete('/products/:id', productsController.erase);

module.exports = router;