module.exports = (sequelize, dataTypes) => {

    const Product = sequelize.define(
	    'products',
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
                type : dataTypes.LONGTEXT,
                allowNull: false
            },
            price : {
                type : dataTypes.INTEGER(10).UNSIGNED,
                allowNull: false
            },
            image_id : {
                type : dataTypes.INTEGER(10).UNSIGNED,
                allowNull: false,
                references: {
                    model: Product_Image, 
                    key: 'id'
                }
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
        Product.hasMany(models.Product_Image, {
            as : 'products_images',
            foreignKey : 'image_id'
        })
        Product.hasMany(models.Category, {
            as : 'categories',
            foreignKey : 'category_id'
        })
        Product.hasMany(models.Product_Image, {
            as : 'brands',
            foreignKey : 'brand_id'
        })
    }
        

    return Product
}
