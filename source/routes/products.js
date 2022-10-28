const express = require ('express');

const productsController = require ('../controllers/productsController');

const router = express.Router();

const multer = require('multer');
const storage = require('../modules/storage');
const upload = multer({storage:storage('../../uploads/users')});

const isAdmin = require('../middlewares/noLogged');
const productValidation = require('../validations/products/createProductValidations')

// rutas de pagina principal
router.get('/', productsController.index);

//rutas de creación
router.get('/products/create', productsController.create); 
router.post('/products/save', upload.any(), productValidation, productsController.save);

// rutas de lectura
router.get('/products/search', productsController.search);
router.get('/products/list/:category?', productsController.list);
router.get('/products/:id', productsController.detail);

//rutas de edición
router.get('/products/:id/edit', productsController.edit);
router.put('/products/:id', upload.any(),productValidation, productsController.update);

//ruta de borrado
router.delete('/products/:id', productsController.erase);

module.exports = router;