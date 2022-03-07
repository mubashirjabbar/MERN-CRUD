const express = require('express');
const router = express.Router();
// const { Authenticate, DecodeToken } = require('../middlewares');
// INCLUDING ROUTES
const user = require('./user');


// REGESTRING ROUTES
router.use('/users', user);

module.exports = router;






