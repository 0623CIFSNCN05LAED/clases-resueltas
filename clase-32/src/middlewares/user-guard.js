module.exports = (req, res, next) => {
  if (req.session.userData) {
    next();
  } else {
    res.redirect("/login");
  }
};
