module.exports = (sequelize, dataTypes) => {

    const Category = sequelize.define(
	    'categories',
        {
            id : {
                type : dataTypes.INTEGER(10).UNSIGNED,
                primaryKey : true,
                autoIncrement : true,
                allowNull: false
            },
            name : {
                type : dataTypes.VARCHAR(100),
                allowNull: false
            }
        },
        {
            tablename : 'categories',
            timestamps : false
        }
    )

    Category.associate = function (models) {
        Category.hasMany(models.Product, {
            as : 'productCategories',
            foreignKey : 'category_id'
        })
    }
        

    return Category
}