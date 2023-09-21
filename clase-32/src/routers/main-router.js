const { Router, urlencoded } = require("express");
const mainController = require("../controllers/main-controller");
const validations = require("../validations/login-validations");
const validateForm = require("../middlewares/validate-form");
const router = Router();

router.get("/", mainController.home);

router.get("/login", mainController.showLogin);
router.post(
  "/login",
  urlencoded({
    extended: false,
  }),
  validations,
  validateForm,
  mainController.login
);

module.exports = router;
