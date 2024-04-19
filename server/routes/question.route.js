const router = require('express').Router();
const {  questionController } = require('../controller');

router.post('/',  questionController.addQuestion);
// router.get('/',questionController.getTests);

module.exports = router;