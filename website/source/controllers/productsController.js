const {Product, Category, Brand} = require("../database/models");
const {like} = require("sequelize");
const {validationResult} = require('express-validator');

const productsController = {

    // Vista de productos
    index: async (req, res) => {
        try {
            const [products, categories, brands] = await Promise.all([
                Product.findAll(),
                Category.findAll(),
                Brand.findAll()
            ]);

            return res.render('./products/index.ejs', {
                products,
                categories,
                brands
            });

        } catch (error) { console.log(error.message); }
    },

    search: async (req,res) => {
        try {
            const products = await Product.findAll({ where: { name: { [like] : `%${req.query.search}%` }} });
                return res.render('./products/listProducts', {products});
        } catch (error) { console.log(error.message); }
    },

    list: async (req, res) => {
        try {
            if (req.params.category) {
                const products = await Product.findAll({ where: {category_id : req.params.category} });
                return res.render('./products/listProducts', {products});
            } else {
                const products = await Product.findAll()
                return res.render('./products/listProducts', {products});
            }
        }

        catch (error) { console.log(error.message); }
    },

    detail: async (req, res) => {
        try {
            const product = await Product.findByPk(req.params.id, {include: [{association: "categories"}, {association:"brands"}] });
            const category = await Product.findAll({where : {category_id : product.category_id} });

            return res.render('./products/productDetail.ejs', {
                        product: product,
                        categoryProducts : category
                    });
        } catch (error) { console.log(error.message); }
    },

    // Creación de productos
    create: async (req, res) => {
        try {
            const [products, categories, brands] = await Promise.all([
                Product.findAll(),
                Category.findAll(),
                Brand.findAll()
            ]);

            return res.render('./products/createProduct.ejs', {
                products,
                categories,
                brands
            })

        } catch (error) { console.log(error.message); }
    },

    save: async (req, res) => {
        const resultValidation = validationResult(req);
        try {
            if (resultValidation.errors.length > 0) {
                const categories = await Category.findAll();
                const brands = await Brand.findAll();
                return res.render('./products/createProduct.ejs', {
                    errors: resultValidation.mapped(),
                    old : req.body,
                    categories : categories,
                    brands : brands
                })
            }

            else {
                await Product.create({
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
            const [product, categories, brands] = await Promise.all([
                Product.findByPk(req.params.id, { include: [{association: "categories"}, {association:"brands"}] }),
                Category.findAll(),
                Brand.findAll()
            ]);

            return res.render('./products/editProduct.ejs', {
                product,
                categories,
                brands
            })

        } catch (error) { console.log(error.message); }
    },

    update: async (req, res) => {
        const resultValidation = validationResult(req);
        try {
            if (resultValidation.errors.length > 0) {
                const [product, categories, brands] = await Promise.all([
                    Product.findByPk(req.params.id),
                    Category.findAll(),
                    Brand.findAll()
                ]);

                return res.render('./products/editProduct.ejs', {
                    errors : resultValidation.mapped(),
                    old : req.body,
                    product,
                    categories,
                    brands
                })

                } else {
                    await Product.update({
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
            await Product.destroy({ where: {sku: req.params.id} });
            return res.redirect('/');
        } catch (error) { console.log(error.message); }
    }

}

module.exports = productsController;
