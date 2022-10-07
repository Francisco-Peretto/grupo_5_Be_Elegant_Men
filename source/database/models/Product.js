module.exports = (sequelize, dataTypes) => {

    const Product = sequelize.define(
	    'Product',
        {
            sku : {
                type : dataTypes.INTEGER(10).UNSIGNED,
                primaryKey : true,
                autoIncrement : true,
                allowNull: false
            },
            name : {
                type : dataTypes.VARCHAR(100),
                allowNull: false
            },
            detail : {
                type : dataTypes.TEXT,
                allowNull: false
            },
            price : {
                type : dataTypes.INTEGER(10).UNSIGNED,
                allowNull: false
            },
            image : {
                type : dataTypes.VARCHAR(200),
                allowNull: false
            },
            category_id : {
                type : dataTypes.INTEGER(10).UNSIGNED,
                allowNull: false,
                references: {
                    model: Category, 
                    key: 'id'
                }
            },
            brand_id : {
                type : dataTypes.INTEGER(10).UNSIGNED,
                allowNull: false,
                references: {
                    model: Brand, 
                    key: 'id'
                }
            }
        },
        {
            tablename : 'products',
            timestamps : false
        }
    )

    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
            as : 'categories',
            foreignKey : 'category_id'
        })
        Product.belongsTo(models.Brand, {
            as : 'brands',
            foreignKey : 'brand_id'
        })
    }
        
    return Product
}
