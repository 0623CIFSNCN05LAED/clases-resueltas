const paises = [
  { name: "Argentina", code: "Arg" },
  { name: "Colombia", code: "Col" },
  { name: "México", code: "Mex" },
  { name: "Uruguay", code: "Uru" },
  { name: "Perú", code: "Per" },
];

// tenemos un listado de países, queremos mostrarlos por consola uno por uno

function listadoPaises(paises) {
  for (let i = 0; i < paises.length; i++) {
    const pais = paises[i];
    // { name: 'Argentina', code: 'Arg' }
    console.log(pais.name);
  }
}

// listadoPaises(paises);

function listadoPaisesForEach(paises) {
  paises.forEach(function (pais) {
    console.log(pais.name);
  });
}

// listadoPaisesForEach(paises);

//listado de números y quiero que mi función retorne un nuevo array con los números al cuadrado

const numbers = [1, 2, 3, 4, 5];

function numbersSquaredLoop(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    newNumbers.push(numbers[i] ** 2);
  }
  return newNumbers;
}

// console.log(numbersSquaredLoop(numbers));

function numbersSquaredMap(numbers) {
  const newNumbers = numbers.map((number) => number ** 2);
  return newNumbers;
}

// console.log(numbersSquaredMap(numbers));
// console.log(numbers);

// quiero una función que me diga si un número es par.
// y después quiero un nuevo array con sólo los números pares

function isEven(number) {
  return number % 2 === 0;
}

function evenNumbersLoop(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (isEven(numbers[i])) {
      newNumbers.push(numbers[i]);
    }
  }
  return newNumbers;
}

function evenNumbersFilter(numbers) {
  const newNumbers = numbers.filter((number) => {
    return isEven(number);
  });
  return newNumbers;
}

function evenNumbersSquared(numbers) {
  return numbers
    .filter((number) => isEven(number))
    .map((number) => number ** 2);
}

// Crear una función que retorne la suma del array de numbers,
// primero con un loop y después con reduce.
// concepto clave: acumulador
