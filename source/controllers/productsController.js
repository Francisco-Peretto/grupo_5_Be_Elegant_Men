const path = require('path')
const {all,one,generate, write} = require('../models/productsModel')
const {unlinkSync} = require('fs');

const productsController = {
    index: (req , res) => { // GET index
        return res.render('./products/index')
    },
    
    listProduct: (req, res) => { // 1. GET products. Listado de productos
        
        let products = all();                               

        if (req.params.category) {                         
            products = products.filter(e => 
                e.category == req.params.category)         
            return res.render('./products/categoriesList',{products})            
        }
        
        return res.render('./products/categoriesList',{products})  
    },

    createProductGet: (req, res) => {  // 2. GET products/create. Formulario de creación de productos aún sin hacer
        return res.render('./products/createProduct.ejs');
    },

    idProduct: (req , res) => { // 3. GET products/:id. Pasará a renderizar el producto con el ID seleccionado cuando se implemente EJS en la hoja productDetail
        let { id } = req.params;
        return res.render('./products/productDetail.ejs', {id: one(id)});
    },
    
    createProductPost: (req, res) => { // 4. POST products. Acción del botón de creación de producto. Image se sube pero no es listada en products.json
        req.files && req.files.length > 0 ? req.body.image = req.files[0].filename : req.body.image = 'default.png';
        let product = generate(req.body);
        let allProducts = all();
        allProducts.push(product);
        write(allProducts);        
        return res.redirect('/');

    },

    editProductGet: (req, res) => { // 5. GET products/:id/edit. Acceder a formulario de edición de producto. LOGRAR que capture sku del producto que se muestra o dirección web 
        let { id } = req.params;
        return res.render('./products/editProduct.ejs', {id: one(id)});
    },

    editProductPost: (req, res) => { // 6. PUT products/:id. Botón del formulario de edición de producto
        let allProducts = all();
        let updProducts = allProducts.map(product => {
            if (product.sku == req.body.sku) {
                product.name = req.body.name;
                product.detail = req.body.detail;
                product.category = req.body.category;
                product.brand = req.body.brand;
                product.price = parseInt(req.body.price);
                product.image = req.files && req.files.length > 0 ? req.files[0].filename : product.image;
            }
            return product;
        })
        write(updProducts);
        return res.redirect('/');
    },

    deleteProduct: (req, res) => { // 7. DELETE products/:id. Botón de borrado de producto
        let product = one(req.body.sku)
        if (product.image != 'default.png'){
            let file = path.resolve(__dirname,'..','..','public','img',product.image)
            unlinkSync(file)
        }
        let allProducts = all();
        let notDelProducts = allProducts.filter(elemento => elemento.sku != req.body.sku)
        write(notDelProducts);
        return res.render('./products/index.ejs');
    }
};

module.exports = productsController;