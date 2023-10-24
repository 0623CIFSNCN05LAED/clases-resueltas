const express = require("express");
const router = express.Router();
const apiMoviesController = require("../../controllers/api/moviesController");

router.post("/", apiMoviesController.create);
router.delete("/:id", apiMoviesController.destroy);

module.exports = router;
