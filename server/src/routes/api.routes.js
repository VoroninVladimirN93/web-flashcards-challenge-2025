const router = require('express').Router();
const apiDeckRouter = require('./api/api.deck.routes');

router.use('/deck', apiDeckRouter);

module.exports = router;