const express = require('express');
const router = express.Router();

// Controller
const apiUsersController = require('../../controllers/api/usersController')

// Routes
router.get('/users', apiUsersController.index);
router.get('/users/:id', apiUsersController.detail);

module.exports = router;