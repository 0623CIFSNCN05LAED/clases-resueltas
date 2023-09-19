const { validationResult } = require("express-validator");

const loginMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json(errors.mapped());
  }
  next();
};

module.exports = loginMiddleware;
