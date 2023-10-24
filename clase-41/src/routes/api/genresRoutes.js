const express = require("express");
const router = express.Router();
const apiGenresController = require("../../controllers/api/genresController");

router.get("/", apiGenresController.list);

module.exports = router;
