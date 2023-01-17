const express = require('express');
const router = express.Router();
const usersControllers = require('./users');

router.use('/users', usersControllers);

module.exports = router;
