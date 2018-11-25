const express = require('express');
const router = express.Router();
const Controller = require('../../../controllers/apis/url')


router.get('/monitorURL', Controller.urlFetch);
router.get('/monitorURL/:id', Controller.urlFetch);
router.post('/monitorURLs/save', Controller.urlSave);
router.put('/updateUrl/:id', Controller.urlEdit);
router.delete('/deleteUrl/:id', Controller.urlDelete);



module.exports = router;