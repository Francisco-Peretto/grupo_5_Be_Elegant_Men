const path = require('path')

const productsController = {
    index: (req , res) => {
        res.render(path.resolve(__dirname,'../views/products/index.ejs'))
    },

    productDetail: (req , res) => {
        res.render(path.resolve(__dirname,'../views/products/productDetail.ejs'));
    },
};

module.exports = productsController;