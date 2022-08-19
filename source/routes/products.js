const express = require ('express');
const productsController = require ('../controllers/productsController');
const router = express.Router();

router.get('/', productsController.index); // Index

// GET productDetail que quedará en desuso cuando se introduzca ejs a productDetail y se direccione por id
router.get('/productDetail', productsController.productDetail);

router.get('/products/list/:category?', productsController.listProduct); // 1. GET products.

router.get('/products/create', productsController.createProductGet); // 2. GET products/create.

router.get('/products/:id', productsController.idProduct); // 3. GET products/:id

router.post('/products', productsController.createProductPost); // 4. POST products falta pasar Multer

router.get('/products/:id/edit', productsController.editProductGet); // 5. GET products/:id/edit

router.put('/products/:id', productsController.editProductPost); // 6. PUT products/id falta pasar Multer

router.delete('/products/:id', productsController.createProductPost); // 7. DELETE products/:id

module.exports = router;