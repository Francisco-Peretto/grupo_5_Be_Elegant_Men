module.exports = (sequelize, dataTypes) => {

    const User = sequelize.define(
	    'User',
        {
            id : {
                type : dataTypes.INTEGER(10).UNSIGNED,
                primaryKey : true,
                autoIncrement : true,
                allowNull: false
            },
            first_name : {
                type : dataTypes.STRING(100),
                allowNull: false
            },
            last_name : {
                type : dataTypes.STRING(100),
                allowNull: false
            },
            email : {
                type : dataTypes.STRING(100),
                allowNull: false
            },
            password : {
                type : dataTypes.STRING(100),
                allowNull: false
            },
            avatar : {
                type : dataTypes.STRING(200),
                allowNull: false
            },
            admin : {
                type : dataTypes.INTEGER(1),
                allowNull: false
            }
        },
        {
            tablename : 'users',
            timestamps : false
        }
    )   

    return User
}
