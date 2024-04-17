// const { authenticateUser } = require('../middleware/auth');

const router = require('express').Router();

router.use('/auth', require('./auth.route'));
router.use('/test',require('./test.route'))


module.exports = router;