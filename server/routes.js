const express = require('express');
const router = express.Router();

router.use('/addresses', require('./address').routes);
router.use('/companies', require('./company').routes);
router.use('/contractors', require('./contractor').routes);
router.use('/people', require('./person').routes);
router.use('/skills', require('./skill').routes);
router.use('/jobs', require('./job').routes);

module.exports = router;
