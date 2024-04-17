const router = require('express').Router();
const {  authController } = require('../controller');

router.post('/signup',   authController.signup)

module.exports = router;