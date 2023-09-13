// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const mainController = require("../controllers/mainController");

router.get("/", mainController.index);
router.get("/search", mainController.search);

const productsRouter = require("./products");
router.use("/products", productsRouter);

module.exports = router;
