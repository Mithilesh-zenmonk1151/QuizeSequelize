const router = require('express').Router();
const {  responseController } = require('../controller');

router.post('/',responseController.createResponse);
router.get('/',responseController.getResponses);

module.exports = router;