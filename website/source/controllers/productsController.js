const db = require("../database/models");
const { Op } = require("sequelize");
const {validationResult} = require('express-validator');

const productsController = {

    // Vista de productos

    index: async (req, res) => {
        try {
            let products = await db.Product.findAll();
            let categories = await db.Category.findAll();
            let brands = await db.Brand.findAll();

            return res.render('./products/index.ejs', {
                products: products,
                categories : categories,
                brands : brands
            });

        } catch (error) { console.log(error.message); }
    },

    search: async (req,res) => {
        try {

            let products = await db.Product.findAll({ where: { name: { [Op.like] : `%${req.query.search}%` }} });

                return res.render('./products/listProducts', {products});

        } catch (error) { console.log(error.message); }
    },

    list: async (req, res) => {
        try {
            if (req.params.category) {
                let products = await db.Product.findAll({ where: {category_id : req.params.category} });
                return res.render('./products/listProducts', {products});

            } else {
                let products = await db.Product.findAll()
                return res.render('./products/listProducts', {products});
            }
        }

        catch (error) { console.log(error.message); }
    },

    detail: async (req, res) => {
        try {
            let product = await db.Product.findByPk(req.params.id, {include: [{association: "categories"}, {association:"brands"}] });
            let category = await db.Product.findAll({where : {category_id : product.category_id} });

            return res.render('./products/productDetail.ejs', {
                        product: product,
                        categoryProducts : category
                    });

        } catch (error) { console.log(error.message); }
    },

    // Creación de productos

    create: async (req, res) => {
        try {
            let products = await db.Product.findAll();
            let categories = await db.Category.findAll();
            let brands = await db.Brand.findAll();

            return res.render('./products/createProduct.ejs', {
                products: products,
                categories : categories,
                brands : brands
            })

        } catch (error) { console.log(error.message); }
    },

    save: async (req, res) => {
        const resultValidation = validationResult(req);
        try {
            if (resultValidation.errors.length > 0) {
                let categories = await db.Category.findAll();
                let brands = await db.Brand.findAll();
                return res.render('./products/createProduct.ejs', {
                    errors: resultValidation.mapped(),
                    old : req.body,
                    categories : categories,
                    brands : brands
                })
            }

            else {
                await db.Product.create({
                    name: req.body.name,
                    detail: req.body.detail,
                    price: req.body.price,
                    image: req.file ? req.file.filename : 'default.png',
                    category_id: req.body.category,
                    brand_id: req.body.brand
                },{ include: [{association : "categories"}, {association : "brands"}] })
                return res.redirect('/');
            }

        } catch (error) { console.log(error.message); }
    },

    // Edición y eliminación de productos

    edit: async (req, res) => {
        try {
            let product = await db.Product.findByPk(req.params.id, { include: [{association: "categories"}, {association:"brands"}] });
            let categories = await db.Category.findAll();
            let brands = await db.Brand.findAll();

            return res.render('./products/editProduct.ejs', {
                product: product,
                categories : categories,
                brands : brands
            })

        } catch (error) { console.log(error.message); }
    },

    update: async (req, res) => {
        const resultValidation = validationResult(req);
        try {
            if (resultValidation.errors.length > 0) {
                let product = await db.Product.findByPk(req.params.id);
                let categories = await db.Category.findAll();
                let brands = await db.Brand.findAll();

                return res.render('./products/editProduct.ejs', {
                    errors : resultValidation.mapped(),
                    old : req.body,
                    product: product,
                    categories : categories,
                    brands : brands
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

            } catch (error) { console.log(error.message); }
        },

    erase: async (req, res) => {
        try {
            await db.Product.destroy({ where: {sku: req.params.id} });
            return res.render('./products/index.ejs');

        } catch (error) { console.log(error.message); }
    }

}

module.exports = productsController;