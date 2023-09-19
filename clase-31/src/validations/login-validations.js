const { body } = require("express-validator");

const validations = [
  body("name")
    .isLength({ min: 3 })
    .withMessage("El nombre es obligatorio.")
    .isAlpha()
    .withMessage("El nombre solo puede contener letras.")
    .custom((value, { req }) => {
      const { password } = req.body;
      if (value === password) {
        throw new Error("El nombre no puede ser igual a la contraseña.");
      }
      return true;
    }) // Validación personalizada
    .trim() // Elimina espacios en blanco al principio y al final
    .escape(), // Elimina caracteres especiales
  body("password")
    .isLength({ min: 3 })
    .withMessage("La contraseña debe tener al menos 3 caracteres."),
];

module.exports = validations;
