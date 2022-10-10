const express = require ('express');

const productsController = require ('../controllers/productsController');

const router = express.Router();

const multer = require('multer');
const storage = require('../modules/storage');
const upload = multer({storage:storage('../../uploads/users')});

router.get('/', productsController.index); // Index

router.get('/products/list/:category?', productsController.list); // 1. GET products.

router.get('/products/create', productsController.create); // 2. GET products/create.

router.get('/products/:id', productsController.detail); // 3. GET products/:id

router.post('/products/save', upload.any(), productsController.save); // 4. POST products

router.get('/products/:id/edit', productsController.edit); // 5. GET products/:id/edit

router.put('/products/:id', upload.any(), productsController.update); // 6. PUT products/id

router.delete('/products/:id', productsController.erase); // 7. DELETE products/:id

module.exports = router;