const menu = require("../data/menu");

module.exports = {
  home: (req, res) => {
    res.render("index", {
      platos: menu,
    });
  },
  detail: (req, res) => {
    const id = req.params.id;
    const plato = menu.find((plato) => plato.id == id);

    if (!plato) {
      return res.redirect("/");
    }

    res.render("detalleMenu", {
      plato,
    });
  },
};
