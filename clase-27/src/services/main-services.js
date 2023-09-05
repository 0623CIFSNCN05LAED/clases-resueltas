const autosImportados = require("../data/autos");

module.exports = {
  autos: autosImportados,
  buscarAuto: function (patente) {
    let autoEncontrado = this.autos.find(
      (auto) => auto.patente == patente.toUpperCase()
    );
    if (autoEncontrado) {
      return autoEncontrado;
    } else {
      return null;
    }
  },

  autosParaLaVenta: function () {
    return this.autos.filter((auto) => auto.vendido == false);
  },
  autosNuevos: function () {
    return this.autosParaLaVenta().filter((auto) => auto.km < 100);
  },
};
