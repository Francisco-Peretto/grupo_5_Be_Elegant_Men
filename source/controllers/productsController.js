const db = require("../database/models");
const { Op } = require("sequelize");
const {validationResult} = require('express-validator');

const productsController = {

    // Vista de productos

    index: async (req, res) => {
        try {
            await db.Product.findAll()
                .then(products => { db.Category.findAll()
                    .then(categories => { db.Brand.findAll()
                        .then(brands => {
                            return res.render('./products/index.ejs', {
                                products: products,
                                categories : categories,
                                brands : brands
                            })
                        })
                    })
                })
            } catch (error) { console.log(error); }
        },

    search: async (req,res) => {
        try {
            await db.Product.findAll({ where: { name: { [Op.like] : `%${req.query.search}%` }} })
                .then(products => res.render('./products/listProducts', {products}))
        } catch (error) { console.log(error); }
    },

    list: async (req, res) => {
        try {
            if (req.params.category) {
                await db.Product.findAll({ where: {category_id : req.params.category} })
                    .then(products => { return res.render('./products/listProducts',{products}) })
            } else {
                await db.Product.findAll()
                    .then(products => { return res.render('./products/listProducts',{products}) })
            }
        }
        catch (error) { console.log(error); }
    },

    detail: async (req, res) => {
        try {
            await db.Product.findByPk(req.params.id, {include: [{association: "categories"}, {association:"brands"}] })
        .then(product => { db.Product.findAll({where : {category_id : product.category_id} })
            .then(categoryProducts => {
                    return res.render('./products/productDetail.ejs', {
                        product: product,
                        categoryProducts : categoryProducts
                    })
                })
            })
        } catch (error) { console.log(error); }
    },

    // Creación de productos

    create: async (req, res) => {
        try {
            await db.Product.findAll()
            .then(product => { db.Category.findAll()
                .then(categories => { db.Brand.findAll()
                    .then(brands => { 
                        return res.render('./products/createProduct.ejs', {
                            product: product,
                            categories : categories,
                            brands : brands
                        })
                    })
                })
            })
        } catch (error) { console.log(error); }
    },

    save: async (req, res) => {
        const resultValidation = validationResult(req)
        try {
            if (resultValidation.errors.length > 0) {
                await db.Category.findAll()
                .then(categories => { db.Brand.findAll()
                    .then(brands => {
                        return res.render('./products/createProduct.ejs', {
                            errors: resultValidation.mapped(),
                            old : req.body,
                            categories : categories,
                            brands : brands
                        })
                    })
                })
            } else {
            await db.Product.create({
                name: req.body.name,
                detail: req.body.detail,
                price: req.body.price,
                image: req.file ? req.file.filename : 'default.png',
                category_id: req.body.category,
                brand_id: req.body.brand
            }, { include: [{association : "categories"}, {association : "brands"}] })
            return res.redirect('/');
        }
    } catch (error) { console.log(error); }
},

    // Edición y eliminación de productos

    edit: async (req, res) => {
        try {
            await db.Product.findByPk(req.params.id, { include: [{association: "categories"}, {association:"brands"}] })
            .then(product => { db.Category.findAll()
                .then(categories => { db.Brand.findAll()
                    .then(brands => {
                        return res.render('./products/editProduct.ejs', {
                            product: product,
                            categories : categories,
                            brands : brands
                        })
                    })
                })
            })
        } catch (error) { console.log(error); }
    },

    update: async (req, res) => {
        const resultValidation = validationResult(req)
        try {
            if (resultValidation.errors.length > 0) {
                await db.Product.findByPk(req.params.id)
                    .then(product => { db.Category.findAll()
                        .then(categories => { db.Brand.findAll()
                            .then(brands => {
                                return res.render('./products/editProduct.ejs', {
                                    errors : resultValidation.mapped(),
                                    old : req.body,
                                    product: product,
                                    categories : categories,
                                    brands : brands
                                })
                            })
                        })
                    })
                } else {
                    await db.Product.update({
                        name: req.body.name,
                        detail: req.body.detail,
                        price: req.body.price,
                        image: req.file ? req.file.filename : req.previousImage,
                        category_id: req.body.category,
                        brand_id: req.body.brand
                        }, {where : {sku: req.params.id}}
                    )
                    return res.redirect('/');
                }
            } catch (error) { console.log(error); }
        },

    erase: async (req, res) => {
        try {
            await db.Product.destroy({ where: {sku: req.params.id} })
            return res.render('./products/index.ejs');
        } catch (error) { console.log(error); }
    },

    //APIs

    indexApi: async (req, res) => {
        try {
            await db.Product.findAll({
                include: [{association: "categories"}, {association:"brands"}]
            })
                .then(products => {
                    // Se recurre a este método de filtrado para no sobrecargar la DB con métodos findAll. Se cambiará por un filtro dinámico.
                    const ambosFilter = { category_id : 1 };
                    const camisasFilter = { category_id : 2 };
                    const corbatasFilter = { category_id : 3 };
                    const pantalonesFilter = { category_id : 4 };
                    const sacosFilter = { category_id : 5 };
                    const zapatosFilter = { category_id : 6 };

                    return res.json({
                        count: products.length,
                        countByCategory : {
                            ambos : products.filter((prod) => Object.keys(ambosFilter).every((k) => ambosFilter[k] === prod[k])).length,
                            camisas : products.filter((prod) => Object.keys(camisasFilter).every((k) => camisasFilter[k] === prod[k])).length,
                            corbatas : products.filter((prod) => Object.keys(corbatasFilter).every((k) => corbatasFilter[k] === prod[k])).length,
                            pantalones : products.filter((prod) => Object.keys(pantalonesFilter).every((k) => pantalonesFilter[k] === prod[k])).length,
                            sacos : products.filter((prod) => Object.keys(sacosFilter).every((k) => sacosFilter[k] === prod[k])).length,
                            zapatos : products.filter((prod) => Object.keys(zapatosFilter).every((k) => zapatosFilter[k] === prod[k])).length
                        },
                        productos : products
                    })
                })
            } catch (error) { console.log(error); }
        },

        detailApi: async (req, res) => {
            try {
                await db.Product.findByPk(req.params.id, {
                    include: [{association: "categories"}, {association:"brands"}]
                })
                    .then(product => { 
                            return res.json({
                                producto: product
                            })
                    })
            } catch (error) { console.log(error); }
        }
}

module.exports = productsController;