const path = require('path')

const {all,one,generate, write} = require('../models/productsModel')

const productsController = {
    index: (req , res) => { // GET index
        res.render(path.resolve(__dirname,'../views/products/index.ejs'))
    },
    
    listProduct: (req, res) => { // 1. GET products. Listado de productos

    },

    createProductGet: (req, res) => {  // 2. GET products/create. Formulario de creación de productos aún sin hacer
        res.render(path.resolve(__dirname,'../views/products/createProduct.ejs'));
    },

    idProduct: (req , res) => { // 3. GET products/:id. Pasará a renderizar el producto con el ID seleccionado cuando se implemente EJS en la hoja productDetail
        res.render(path.resolve(__dirname,'../views/products/productDetail.ejs'));
    },

    productDetail: (req , res) => { // Será reemplazado por idProduct una vez implementado EJS en la hoja
        res.render(path.resolve(__dirname,'../views/products/productDetail.ejs'));
    },
    
    createProductPost: (req, res) => { // 4. POST products. Acción del botón de creación de producto

    },

    editProductGet: (req, res) => { // 5. GET products/:id/edit. Acceder a formulario de edición de producto

    },

    editProductPost: (req, res) => { // 6. PUT products/:id. Formulario de edición de producto

    },

    deleteProduct: (req, rest) => { // 7. DELETE products/:id. Botón de borrado de producto

    }
};

module.exports = productsController;