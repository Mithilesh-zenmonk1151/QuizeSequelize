const router = require('express').Router();
const {  responseController } = require('../controller');

router.post('/',responseController.createResponse);
// router.get('/',testController.getTests);

module.exports = router;