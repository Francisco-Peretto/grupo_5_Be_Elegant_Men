const express = require ('express');
const productsController = require ('../controllers/productsController');
const router = express.Router();


router.get('/', productsController.index); // Index

// GET productDetail que quedará en desuso cuando se introduzca ejs a productDetail y se direccione por id
router.get('/productDetail', productsController.productDetail);

router.get('/products', productsController.listProduct); // 1. GET products.

router.get('/products/create', productsController.createProductGet); // 2. GET products/create.

router.get('/products/:id', productsController.idProduct); // 3. GET products/:id

router.get('/products', productsController.createProductPost); // 4. POST products

router.get('/products/:id/edit', productsController.editProductGet); // 5. GET products/:id/edit

router.get('/products/:id', productsController.editProductPost); // 6. PUT products/id

router.get('/products/:id', productsController.createProductPost); // 7. DELETE products/:id

module.exports = router;