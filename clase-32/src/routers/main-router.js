const { Router, urlencoded } = require("express");
const mainController = require("../controllers/main-controller");

const router = Router();

router.get("/", mainController.showLogin);
router.post(
  "/login",
  urlencoded({
    extended: false,
  }),
  mainController.login
);

module.exports = router;
