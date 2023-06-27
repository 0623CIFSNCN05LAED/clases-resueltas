// Imprimir una tabla
function imprimirTabla(numeroDeTabla) {
  // Imprimo "Tabla de multiplicar del número"
  console.log(`Tabla de multiplicar del ${numeroDeTabla}`);
  // por cada número del 1 al 10
  for (let numero = 1; numero <= 10; numero++) {
    // multiplico numeroDeTabla por ese número y lo guardo en "resultado"
    const resultado = numeroDeTabla * numero;
    console.log(`${numeroDeTabla} * ${numero} = ${resultado}`);
    // Imprimir `númeroDeTabla * número = resultado`
  }
}

// Imprimir todas las tablas
function imprimirTablas() {
  // por cada número del 1 al 10
  for (let numero = 1; numero <= 10; numero++) {
    // Imprimir la tabla de multiplicar de ese número
    imprimirTabla(numero);
  }
}

imprimirTablas();
