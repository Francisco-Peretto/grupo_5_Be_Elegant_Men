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
                type : dataTypes.VARCHAR(100),
                allowNull: false
            },
            last_name : {
                type : dataTypes.VARCHAR(100),
                allowNull: false
            },
            email : {
                type : dataTypes.VARCHAR(100),
                allowNull: false
            },
            password : {
                type : dataTypes.VARCHAR(100),
                allowNull: false
            },
            image : {
                type : dataTypes.VARCHAR(200),
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
