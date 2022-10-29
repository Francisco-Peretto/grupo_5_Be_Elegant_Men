const db = require("../database/models")
const { Op } = require("sequelize");
const {validationResult} = require('express-validator');

const productsController = {

    //INDEX

    index: (req, res) => {
        
        db.Product.findAll()
            .then(function(product) {
                db.Category.findAll()
                .then(function(categories) {
                    db.Brand.findAll()
                    .then(function(brands) {
                        return res.render('./products/index.ejs', {
                            product: product, 
                            categories : categories, 
                            brands : brands 
                        })
                    })
                })
            })
    },

    // BÚSQUEDA

    search: (req,res) => {

        db.Product.findAll({
            where: { name: { [Op.like] : `%${req.query.search}%` }}
        })
            .then(function(products) {
                return res.render('./products/listProducts', {products})
            })
    },

    // CREACION

    create: (req, res) => {

        db.Product.findAll()
            .then(function(product) {
                db.Category.findAll()
                .then(function(categories) {
                    db.Brand.findAll()
                    .then(function(brands) {
                        return res.render('./products/createProduct.ejs', {
                            product: product, 
                            categories : categories,
                            brands : brands 
                        })
                    })
                })
            })
    },

    save: (req, res) => {
        const resultValidation = validationResult(req)

        if (resultValidation.errors.length > 0) {

            db.Product.findAll()
            .then(function(product) {
                db.Category.findAll()
                .then(function(categories) {
                    db.Brand.findAll()
                    .then(function(brands) {
                        return res.render('./products/createProduct.ejs', {
                            errors: resultValidation.mapped(),
                            old : req.body,
                            product: product, 
                            categories : categories,
                            brands : brands 
                        })
                    })
                })
            })

        } else {

            db.Product.create({
                name: req.body.name,
                detail: req.body.detail,
                price: req.body.price,
                image: req.files && req.files.length > 0 ? req.files[0].filename : 'default.png',
                category_id: req.body.category,
                brand_id: req.body.brand
            }, 
            {
                include: [{association : "categories"}, {association : "brands"}]
            }
            )
        }
        
        return res.redirect('/');
    },

    // LECTURA

    list: (req, res) => {                      

        if (req.params.category) {    
            db.Product.findAll({
                where: {category_id : req.params.category}
            })
                .then(function(products) {                    
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
        db.Product.findByPk(req.params.id,
            {include: [{association: "categories"}, {association:"brands"}]
        })
        .then(function(product) {
            db.Product.findAll( 
                {where : {category_id : product.category_id}}
            )
            .then(function(categoryProducts) {
                    return res.render('./products/productDetail.ejs', {
                        product: product, 
                        categoryProducts : categoryProducts 
                    })
                }
            )
        })
    },

    // ACTUALIZACION

    edit: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: [{association: "categories"}, {association:"brands"}]
        })
            .then(function(product) {
                db.Category.findAll()
                .then(function(categories) {
                    db.Brand.findAll()
                    .then(function(brands) {
                        return res.render('./products/editProduct.ejs', {
                            product: product,
                            categories : categories,
                            brands : brands 
                        })
                    })
                })
            })
    },

    update: (req, res) => {

        const resultValidation = validationResult(req)

        if (resultValidation.errors.length > 0) { 
            db.Product.findByPk(req.params.id, {
                include: [{association: "categories"}, {association:"brands"}]
            })
                .then(function(product) {
                    db.Category.findAll()
                    .then(function(categories) {
                        db.Brand.findAll()
                        .then(function(brands) {
                            return res.render('./products/editProduct.ejs', {
                                errors: resultValidation.mapped(),
                                old : req.body,
                                product: product,
                                categories : categories,
                                brands : brands 
                            })
                        })
                    })
                })
        } else {
            db.Product.update({
                name: req.body.name,
                detail: req.body.detail,
                price: req.body.price,
                image: req.files && req.files.length > 0 ? req.files[0].filename : 'default.png',
                category_id: req.body.category,
                brand_id: req.body.brand
                },
                {where : {sku: req.params.id}}
            )
        }

        return res.redirect('/');
    },

    // ELIMINACION

    erase: (req, res) => {
        db.Product.destroy({
            where: {sku: req.params.id}
        })

        return res.render('./products/index.ejs');
    }
}

module.exports = productsController;