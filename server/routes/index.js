const express = require('express');
const controller = require('../controllers')
const router = express.Router();

router.post('/login', controller.login);
router.post('/register', controller.register);
router.get('/products', controller.getProducts);

module.exports = router;