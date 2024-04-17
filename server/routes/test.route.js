const router = require('express').Router();
const {  testController } = require('../controller');

router.post('/',   testController.createTest);
router.get('/',testController.getTests);

module.exports = router;