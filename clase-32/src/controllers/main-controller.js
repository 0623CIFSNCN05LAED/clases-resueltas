module.exports = {
  showLogin: (req, res) => {
    res.render("login");
  },
  login: (req, res) => {
    const data = req.body;
    console.log(data);
    res.redirect("/");
  },
};
