const db = require("../database/models")
const { Op } = require("sequelize");

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
            category_id: req.body.category == "Ambos" ? 1 : req.body.category == "Camisas" ? 2 : req.body.category == "Corbatas" ? 3 : req.body.category == "Pantalones" ? 4 : req.body.category == "Sacos" ? 5 : 6,
            brand_id: req.body.brand == "Brooks Brothers" ? 1 : req.body.brand == "Colantuono" ? 2 : req.body.brand == "Devré" ? 3 : req.body.brand == "Ermenegildo Zegna" ? 4 : req.body.brand == "Hermes" ? 5 : 6
        },
        {include: [{association : "categories"},{association : "brands"}]}
        )
        return res.redirect('/');
    },

    //R - Lectura

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
            category_id: req.body.category == "Ambos" ? 1 : req.body.category == "Camisas" ? 2 : req.body.category == "Corbatas" ? 3 : req.body.category == "Pantalones" ? 4 : req.body.category == "Sacos" ? 5 : 6,
            brand_id: req.body.brand == "Brooks Brothers" ? 1 : req.body.brand == "Colantuono" ? 2 : req.body.brand == "Devré" ? 3 : req.body.brand == "Ermenegildo Zegna" ? 4 : req.body.brand == "Hermes" ? 5 : 6
        },({
            where : {sku: req.params.id}
        }),
        {include: [{association : "categories"},{association : "brands"}]}
        )
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

    search: (req,res) => {
        console.log(req.query.search)
        db.Product.findAll({
            where: { name: { [Op.like] : `%${req.query.search}%` }}
        })
        .then(function(products) {
            return res.render('./products/listProducts',{products})
        })
    }
}

module.exports = productsController;