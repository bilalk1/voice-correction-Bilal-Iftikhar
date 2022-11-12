const express = require('express');
const { s2sAuth, auth } = require('../middlewares');
let router = express.Router();
const authorise = require('./authorise');


router
    // .use((req, res, next) => {
    //     next();
    // })
    .use(s2sAuth, authorise);

module.exports = router;
