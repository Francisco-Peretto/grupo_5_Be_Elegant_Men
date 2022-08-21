const express = require ('express');
const productsController = require ('../controllers/productsController');
const router = express.Router();
const multer = require('multer');
const storage = require('../modules/storage');
const upload = multer({storage:storage('../../uploads/users')});

router.get('/', productsController.index); // Index

router.get('/products/list/:category?', productsController.listProduct); // 1. GET products.

router.get('/products/create', productsController.createProductGet); // 2. GET products/create.

router.get('/products/:id', productsController.idProduct); // 3. GET products/:id

router.post('/products/save', upload.any(), productsController.createProductPost); // 4. POST products

router.get('/products/:id/edit', productsController.editProductGet); // 5. GET products/:id/edit

router.put('/products/:id', upload.any(), productsController.editProductPost); // 6. PUT products/id

router.delete('/products/:id', productsController.deleteProduct); // 7. DELETE products/:id

module.exports = router;