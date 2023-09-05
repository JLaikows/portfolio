const express = require('express');
const router = express.Router();

const users = require('./api/user');
const articles = require('./api/article');

router.use('/users', users);
router.use('/articles', articles);

module.exports = router;
