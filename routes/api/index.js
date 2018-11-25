const express = require('express');
const router = express.Router();
const v1apiController = require('./V1/apiV1');


router.use('/v1', v1apiController);

module.exports = router;