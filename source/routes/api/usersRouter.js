const express = require('express');
const router = express.Router();

const apiUsersController = require('../../controllers/api/usersController')

router.get('/users', apiUsersController.index)
router.get('/users/:id', apiUsersController.detail)
module.exports = router;