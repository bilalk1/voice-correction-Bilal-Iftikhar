const express = require('express');
const { audioControllers } = require('../../controllers');
let router = express.Router();

router.post('/', audioControllers.upload);

module.exports = router;
