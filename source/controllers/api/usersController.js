const db = require('../../database/models/index');

const apiUsersController = {
    index: (req, res) => {
      db.User.findAll({attributes: ['id', 'first_name', 'last_name', 'email', 'password', 'avatar', 'admin' ]})
       .then ( users => {
           return res.status(200).json({
               count: users.length,
               users: users
           })
       })  
    },
    
    detail: (req, res) => {
		db.User.findByPk(req.params.id, {attributes: ['id', 'first_name', 'last_name', 'email', 'password', 'avatar', 'admin'  ]})
		.then(user => {
			return res.status(200).json({
                user: user
			 
			})
		})
	   .catch(err => {
		res.send(err)
	})
	}

}


module.exports = apiUsersController