const express = require ('express');

const productsController = require ('../controllers/productsController');

const router = express.Router();

const multer = require('multer');
const storage = require('../modules/storage');
const upload = multer({storage:storage('../../uploads/users')});


// rutas de pagina principal
router.get('/', productsController.index); 

//rutas de creacion
router.get('/products/create', productsController.create); 
router.post('/products/save', upload.any(), productsController.save); 

// rutas de lectura
router.get('/products/search', productsController.search);
router.get('/products/list/:category?', productsController.list); 
router.get('/products/:id', productsController.detail); 

//rutas de edicion
router.get('/products/:id/edit', productsController.edit); 
router.put('/products/:id', upload.any(), productsController.update); 

//ruta de borrado
router.delete('/products/:id', productsController.erase); 

module.exports = router;