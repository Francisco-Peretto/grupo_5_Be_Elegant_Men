const db = require("../database/models")

const productsController = {

    //INDEX

    index: (req, res) => {
        return res.render('./products/index')
    },
    
    //C - Creacion

    create: (req, res) => { 
        return res.render('./products/createProduct.ejs');
    },

    save: (req, res) => {
        db.Product.create({
            name: req.body.name,
            detail: req.body.detail,
            price: req.body.price,
            image: req.files && req.files.length > 0 ? req.files[0].filename : 'default.png',
            category_id: req.body.category,
            brand_id: req.body.brand,
        })

        return res.redirect('/');
    },

    //R - Lectura

    list: (req, res) => {                      

        if (req.params.category) {    
            db.Product.findAll()
                .then(function(products) {
                    products = products.filter(e => 
                        e.category == req.params.category)         
                    return res.render('./products/listProducts',{products})  
                })             
        } else {
            db.Product.findAll()
                .then(function(products) {
                    return res.render('./products/listProducts',{products})  
                })
        }
    },

    detail: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: [{association: "categories"}, {association:"brands"}]
        })
            .then(function(product) {
                return res.render('./products/productDetail.ejs', {product: product}); 
            })
    },
    
    //U - Actualizacion

    edit: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: [{association: "categories"}, {association:"brands"}]
        })
            .then(function(product) {
                return res.render('./products/editProduct.ejs', {product: product}); 
            })
    },

    update: (req, res) => {
        db.Product.update({
            name: req.body.name,
            detail: req.body.detail,
            price: req.body.price,
            image: req.files && req.files.length > 0 ? req.files[0].filename : 'default.png',
            category_id: req.body.category,
            brand_id: req.body.brand,
        },{
            where : {
                sku: req.params.id
            }
        })

        return res.redirect('/');
    },

    //D - Eliminacion

    erase: (req, res) => {
        db.Product.destroy({
            where: {
                sku: req.params.id
            }
        })

        return res.render('./products/index.ejs');
    },
};

module.exports = productsController;


//CHEQUEAR EL NOMBRE DE LAS VARIBALES EN LAS VISTAS (PASO DE LLAMARSE ID A LLAMARSE PRODUCT)
//BORRAR MODELOS CON JSON