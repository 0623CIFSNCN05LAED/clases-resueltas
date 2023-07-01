// Invierto el array
// Lo convierto en string
// Reeemplazo los asteriscos por espacios en todos los casos
// OJO: El método replace solo reemplaza el primer caso que encuentra
// pero podemos pensar que por cada asterisco que encuentre, lo reemplazo por un string vacío
// y esto lo tengo que hacer hasta que mi string no tenga más asteriscos

function laClaveSecreta(array) {
  const claveInvertida = array.reverse();

  let claveString = claveInvertida.join(""); // Esta es mi condición de inicio!!!

  while (claveString.includes("*")) {
    // Esta es mi condición de corte!!!
    claveString = claveString.replace("*", ""); // este es mi modificador en la iteración!!!
  }

  return claveString;
}

console.log(
  laClaveSecreta([
    "s",
    "*",
    "e",
    "n",
    "u",
    "l",
    " ",
    "s",
    "*",
    "e",
    " ",
    "a",
    "í",
    "*",
    "d",
    " ",
    "l",
    "*",
    "E",
    "*",
  ])
);

console.log(
  laClaveSecreta([
    "a",
    "*",
    "d",
    "a",
    "r",
    "f",
    "*",
    "i",
    "c",
    "*",
    "s",
    "e",
    "d",
    " ",
    "e",
    "*",
    "v",
    "a",
    "l",
    "C",
  ])
);
