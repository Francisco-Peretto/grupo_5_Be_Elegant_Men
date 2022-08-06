const express = require ('express');
const productsController = require ('../controllers/productsController');
const router = express.Router();


router.get('/', productsController.index);

router.get('/productDetail', productsController.productDetail);

module.exports = router;