function alquilerVehiculo(tipoVehiculo, diasAlquiler, sillaBebe) {
  let montoPorDia = 0;
  let montoSillaBebe = 0;
  switch (tipoVehiculo) {
    case "compacto":
      montoPorDia = 14000;
      break;
    case "mediano":
      montoPorDia = 17000;
      break;
    case "camioneta":
      montoPorDia = 28000;
      break;
    default:
      console.log("Tipo de vehiculo no valido");
      break;
  }
  if (sillaBebe) {
    montoSillaBebe = 1200;
  }
  return (montoPorDia + montoSillaBebe) * diasAlquiler;
}

function alquilerVehiculoMensaje(tipoVehiculo, diasAlquiler, sillaBebe) {
  const montoTotal = alquilerVehiculo(tipoVehiculo, diasAlquiler, sillaBebe);
  return `Estimado cliente: en base al tipo de vehículo ${tipoVehiculo} alquilado, considerando los ${diasAlquiler} días utilizados, el monto total a pagar es de $${montoTotal} ${
    sillaBebe ? "con silla para bebe" : ""
  }`;
}

console.log(alquilerVehiculoMensaje("compacto", 3, true));
