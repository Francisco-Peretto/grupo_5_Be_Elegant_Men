const db = require('../../database/models/index');

const apiProductsController = {
	
    index: (req, res) => {
		db.Product.findAll({include: [{association: "categories"}, {association:"brands"}]})
		.then(product => {
				// Se recurre a este método de filtrado para no sobrecargar la DB con métodos findAll. Se cambiará por un filtro dinámico.
				const ambosFilter = { category_id : 1 };
				const camisasFilter = { category_id : 2 };
				const corbatasFilter = { category_id : 3 };
				const pantalonesFilter = { category_id : 4 };
				const sacosFilter = { category_id : 5 };
				const zapatosFilter = { category_id : 6 };
				return res.status(200).json({
				status: 200,  
				count: product.length,
				countByCategory : {
					ambos : product.filter((prod) => Object.keys(ambosFilter).every((k) => ambosFilter[k] === prod[k])).length,
					camisas : product.filter((prod) => Object.keys(camisasFilter).every((k) => camisasFilter[k] === prod[k])).length,
					corbatas : product.filter((prod) => Object.keys(corbatasFilter).every((k) => corbatasFilter[k] === prod[k])).length,
					pantalones : product.filter((prod) => Object.keys(pantalonesFilter).every((k) => pantalonesFilter[k] === prod[k])).length,
					sacos : product.filter((prod) => Object.keys(sacosFilter).every((k) => sacosFilter[k] === prod[k])).length,
					zapatos : product.filter((prod) => Object.keys(zapatosFilter).every((k) => zapatosFilter[k] === prod[k])).length
				},
				product: product.map(product => Object({
					sku : product.sku,
					name : product.name,
					price: product.price,
					description : product.detail,
					relaciones: {categoria : product.categories.name, marca : product.brands.name},
					detail : `http://localhost:3030/api/products/${product.sku}`
				}))
			})
		})
		.catch(err => {
			res.send(err)
		})
	},

	detail: (req, res) => {
		db.Product.findByPk(req.params.id, {
			attributes : ['sku', 'name', 'detail', 'price', 'image'],
			include: [{association: "categories"}, {association:"brands"}] }
				)
		.then(product => {
			return res.status(200).json({
			status: 200,
			product: product,
			url : `http://localhost:3030/img/products/${product.categories.id}/${product.image}`
			})
		})
	.catch(err => {
		res.send(err)
	})
	},


	category: (req, res) => {
		db.Category.findAll()
		.then(categories => {
			return res.status(200).json({
				count: categories.length,
				categories: categories,
			})
		})
	},
	
	lastProduct: (req, res) => {
		db.Product.findOne({
			order: [["sku", "DESC"]],
		})
		.then((product) => {
			console.log('producto', product)
			return res.status(200).json({
			url: product.image,
			status: 200,
			product: {
				...product,
				image: `http://localhost:3030/img/products/${product.category_id}/${product.image}`,
				name: product.name,
				detail: product.detail,
				price: product.price
			},
			});
		})
		.catch((err) => {
			console.log('asd', err)
			res.send(err);
		});
	},

}


module.exports = apiProductsController;