const datosBici = require("./datos-bici");

const dhBici = {
  //jonathan
  bicicletas: datosBici(),
  buscarBici: function (id) {
    const bicisEncontradas = this.bicicletas.filter((bicicleta) => {
      // recorro los objetos y si el id que me pasan es el mismo que el del objeto true
      return bicicleta.id == id;
    });

    // si no encuentra bici retorno null
    return bicisEncontradas.length > 0 ? bicisEncontradas[0] : null;
  },
  venderBici: function (id) {
    const biciEncontrada = this.buscarBici(id);

    if (biciEncontrada) {
      biciEncontrada.vendida = "si";
      return biciEncontrada;
    }
    return "Bicicleta no encontrada";
  },
  biciParaLaVenta: function () {
    return this.bicicletas.filter((bicicleta) => {
      return bicicleta.vendida == "no";
    });
  },
  totalDeVentas: function () {
    const bicisVendidas = this.bicicletas.filter((bicicleta) => {
      return bicicleta.vendida == "si";
    });
    return bicisVendidas.reduce((acum, bici) => {
      return acum + bici.precio;
    }, 0);
  },
};

console.log("Bicis para la venta: ", dhBici.biciParaLaVenta());
dhBici.venderBici(4);
console.log("Bicis para la venta: ", dhBici.biciParaLaVenta());
console.log("Total de ventas: ", dhBici.totalDeVentas());
