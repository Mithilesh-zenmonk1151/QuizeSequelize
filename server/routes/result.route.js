const router = require('express').Router();
const {  resultController } = require('../controller');

router.post('/',resultController.createResult);
router.get("/",resultController.getResults);

module.exports = router;