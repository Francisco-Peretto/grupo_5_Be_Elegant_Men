module.exports = (sequelize, dataTypes) => {

    const Brand = sequelize.define(
	    'Brand',
        {
            id : {
                type : dataTypes.INTEGER(10).UNSIGNED,
                primaryKey : true,
                autoIncrement : true,
                allowNull: false
            },
            name : {
                type : dataTypes.STRING(100),
                allowNull: false
            }
        },
        {
            tablename : 'brand',
            timestamps : false
        }
    )

    Brand.associate = function (models) {
        Brand.hasMany(models.Product, {
            as : 'productBrands',
            foreignKey : 'brand_id'
        })
    }
        
    return Brand
}