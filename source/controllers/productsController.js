const path = require('path')
const {all,one,generate, write} = require('../models/productsModel')

const productsController = {
    index: (req , res) => { // GET index
        return res.render('./products/index')
    },
    
    listProduct: (req, res) => { // 1. GET products. Listado de productos
        
        let products = all();                               

        if (req.params.category) {                         
            products = products.filter(e => 
                e.category == req.params.category)         
            return res.render('products/categoriesList',{products})            
        }
        
        return res.render('products/categoriesList',{products})  
    },

    createProductGet: (req, res) => {  // 2. GET products/create. Formulario de creación de productos aún sin hacer
        return res.render('./products/createProduct.ejs');
    },

    idProduct: (req , res) => { // 3. GET products/:id. Pasará a renderizar el producto con el ID seleccionado cuando se implemente EJS en la hoja productDetail
        let { id } = req.params;
        return res.render('./products/productDetail.ejs', {id: one(id)});
    },

    productDetail: (req , res) => { // Será reemplazado por idProduct una vez implementado EJS en la hoja
        return res.render('./products/productDetail.ejs');
    },
    
    createProductPost: (req, res) => { // 4. POST products. Acción del botón de creación de producto

    },

    editProductGet: (req, res) => { // 5. GET products/:id/edit. Acceder a formulario de edición de producto. LOGRAR que capture sku del producto que se muestra o dirección web 
        let sku = req.params.sku; 
        let skuToEdit = products[sku];
        return res.render('./products/editProduct.ejs');// , {: }));
    },

    editProductPost: (req, res) => { // 6. PUT products/:id. Botón del formulario de edición de producto
        
        return res.render('./products/index.ejs');
    },

    deleteProduct: (req, res) => { // 7. DELETE products/:id. Botón de borrado de producto

        return res.render('/products/index.ejs');

    }
};

module.exports = productsController;