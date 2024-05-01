// const { authenticateUser } = require('../middleware/auth');

const router = require('express').Router();

router.use('/auth', require('./auth.route'));
router.use('/test',require('./test.route'));
router.use('/question',require('./question.route'));
router.use('/response',require("./response.route"))


module.exports = router;