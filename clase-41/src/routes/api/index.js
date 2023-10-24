const express = require('express');
const router = express.Router();
const apiGenresRouter = require('./genresRoutes')
const apiMoviesRouter = require("./moviesRoutes");

router.use("/genres", apiGenresRouter);
router.use("/movies", apiMoviesRouter);


module.exports = router;