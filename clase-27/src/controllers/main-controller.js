const mainServices = require("../services/main-services");

module.exports = {
  buscarAuto: (req, res) => {
    const patente = req.params.patente;
    const auto = mainServices.buscarAuto(patente);
    res.send(JSON.stringify(auto));
  },
};
