const db = require('../../database/models/index');

const apiUsersController = {
    index: (req, res) => {
        db.User.findAll({attributes: ['id', 'first_name', 'last_name', 'email', 'avatar']})
        .then ( users => {
            return res.status(200).json({
                count: users.length,
                users: users.map(user => Object({
                id : user.id,
                name : user.first_name + ' ' + user.last_name,
                email : user.email,
                detail : `http://localhost:3030/api/users/${user.id}`
            }))
            })
        })
    },

    detail: (req, res) => {
		db.User.findByPk(req.params.id, {attributes: ['id', 'first_name', 'last_name', 'email', 'avatar']})
		.then(user => {
			return res.status(200).json({
                user: user,
                avatar: `http://localhost:3030/img/users/${user.avatar}`
			})
		})
	.catch(err => {
		res.send(err)
	})
	}

}


module.exports = apiUsersController