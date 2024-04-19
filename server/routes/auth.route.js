const router = require('express').Router();
const {  authController } = require('../controller');

router.post('/signup',   authController.signup);
router.post('/login',   authController.login);
router.get('/users',   authController.getAllUser);

module.exports = router;