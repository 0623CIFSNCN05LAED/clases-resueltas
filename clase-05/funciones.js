// funciones declaradas

function sumar(num1, num2) {
  const resultado = num1 + num2;
  return resultado;
}

// funciones expresadas

const restar = function (num1, num2) {
  const resultado = num1 - num2;
  return resultado;
};

// arrow functions

const multiplicar = (num1, num2) => {
  return num1 * num2;
};

const dividir = (num1, num2) => num1 / num2;

// tenemos dos parámetros: num1, num2
// creamos una variables: greatestNum
// si num1 es mayor num2, num1 es el mayor
// sino num2 es el mayor
// si son iguales devuelve "num1 y num 2 son iguales"

function greatestNumber(num1, num2) {
  if (num1 > num2) {
    return num1; //early return
  }
  return num2;
}

// callback
function calcular(num1, num2, operacion) {
  return operacion(num1, num2);
}

// console.log(calcular(1, 2, sumar));
// console.log(calcular(1, 2, multiplicar));

function displayResult(result) {
  console.log("The result is " + result);
}

const intensiveProcess = (callback) => {
  const intensiveProc = "lala";
  // tarda mucho tiempo
  callback(intensiveProc);
};
