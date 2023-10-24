const express = require('express');
const router = express.Router();
const apiGenresRouter = require('./genresRoutes')

router.use('/genres', apiGenresRouter);


module.exports = router;