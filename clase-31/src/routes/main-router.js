const { Router } = require("express");
const router = Router();

const loginValidations = require("../validations/login-validations");
const loginMiddleware = require("../middleware/login-middleware");
const authMiddleware = require("../middleware/auth-middleware");

const mainController = require("../controllers/main-controller");

router.post("/user", loginValidations, loginMiddleware, mainController.main);

router.get("/services", (req, res) => {
  res.send("services");
});

router.get("/services/design", (req, res) => {
  res.send("services/design");
});

router.get("/admin", authMiddleware, (req, res) => {
  res.send("Hola Admin");
});

module.exports = router;
