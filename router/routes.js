const express = require('express');
const router = express.Router();
const configController = require('../controller/configController');

router.post('/configuration', configController.getAllConfig);
router.post('/setconfig', configController.setConfig);

module.exports = router;
