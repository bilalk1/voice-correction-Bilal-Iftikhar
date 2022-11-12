const express = require('express');
let router = express.Router();
const audioRoutes = require('./audio');

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })


router.use('/audio', upload.single('audio-file'), audioRoutes);

module.exports = router;
