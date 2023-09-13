// ************ Require's ************
const express = require("express");
const router = express.Router();
const path = require("path");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/images/products"),
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

// ************ Controller Require ************
const productsController = require("../controllers/productsController");

// /*** GET ALL PRODUCTS ***/
router.get("/", productsController.index);

/*** CREATE ONE PRODUCT ***/
router.get("/create/", productsController.create);
router.post("/", upload.single("image"), productsController.store);

/*** GET ONE PRODUCT ***/
router.get("/:id/", productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get("/edit/:id", productsController.edit);
router.put("/:id", upload.single("image"), productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete("/:id", productsController.destroy);

module.exports = router;
