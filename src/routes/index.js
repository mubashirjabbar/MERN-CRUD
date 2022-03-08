const express = require('express');
const router = express.Router();
// const { Authenticate, DecodeToken } = require('../middlewares');
// INCLUDING ROUTES
const user = require('./user');
const authentication = require('./authentication');


// REGESTRING ROUTES
router.use('/users', user);
router.use('/authentication', authentication);

module.exports = router;






