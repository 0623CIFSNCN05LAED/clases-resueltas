// Contar impares
// En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for .

// Ejemplo de cómo se usaría esta función (ustedes solo deben concentrarse en su implementación):

//  console.log(noParesDeContarImparesHasta(4))

function noParesDeContarImparesHasta(numero) {
  // inicializar una variable que guarde la cantidad de impares llamada impares
  let impares = 0;
  // contar o hacer ciclos desde 0 (indice) a numero inclusive
  for (let i = 0; i <= numero; i++) {
    // cada vez que mi indice sea impar tengo que incrementar mi variable impares
    if (i % 2 !== 0) {
      impares++;
    }
  }
  // retornar impares
  return impares;
}
console.log("caso 0", noParesDeContarImparesHasta(0)); //0
console.log("caso 5", noParesDeContarImparesHasta(5)); //3
console.log("caso 6", noParesDeContarImparesHasta(6)); //3
console.log("caso -1", noParesDeContarImparesHasta(-1)); //0
