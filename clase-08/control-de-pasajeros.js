// Control de pasajeros
// Un tren va desde terminal hasta terminal con algunas estaciones intermedias, y la empresa necesita saber cuantos pasajeros lleva luego de la parada en cada estación. Para ello nos contrataron a nosotros, quienes somos responsables de generar un programa que lo resuelva.

// Para ayudar a la empresa escribamos una función reporteDePasajeros(), la cual cuando reciba la cantidad de estaciones que avanzó el tren nos devuelva un reporte de la cantidad de cada una de las estaciones y la cantidad de pasajeros que lleva el tren. La empresa nos provee los siguientes datos:

function reporteDePasajeros(estacionFinal) {
  //estacionFinal number
  const informes = [];
  let pasajeros = 0;
  // por cada estación desde 0 hasta "estacionFinal"
  // quiero sumar y restar pasajeros
  // quiero agregar un mensaje al array de informes
  for (let estacion = 0; estacion <= estacionFinal; estacion++) {
    // si la estación es 0 no se suma nada
    // si la estación es 5 suben 120, bajan 80
    // cualquier otra estación suben 50, bajan 30
    switch (estacion) {
      case 0:
        pasajeros += 200;
        break;
      case 5:
        pasajeros += 120;
        pasajeros -= 80;
        break;
      default:
        pasajeros += 50;
        pasajeros -= 30;
    }
    informes.push(
      "En la estación " +
        estacion +
        " hay " +
        pasajeros +
        " pasajeros arriba del tren"
    );
  }
  const ended = "terminó el informe";
  informes.push(ended);

  return informes; // array de strings
}

console.log(reporteDePasajeros(0));
console.log(reporteDePasajeros(3));
console.log(reporteDePasajeros(5));
