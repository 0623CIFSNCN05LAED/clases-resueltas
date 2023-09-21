const { body } = require("express-validator");

module.exports = [
  body("name").notEmpty().withMessage("Debe completar este campo"),
  body("email")
    .notEmpty()
    .withMessage("Debe completar este campo")
    .bail()
    .isEmail()
    .withMessage("Debe ser un email válido"),
  body("color").notEmpty().withMessage("Debe completar este campo"),
  body("birthDate").notEmpty().withMessage("Debe completar este campo"),
];
