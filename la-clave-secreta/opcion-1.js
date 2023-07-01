// Recorro el array y si el elemento es distinto a * lo pusheo a un nuevo array llamado claveLimpia
// Invierto el array claveLimpia
// Lo uno en string

function laClaveSecreta(array) {
  const claveLimpia = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== "*") {
      claveLimpia.push(array[i]);
    }
  }
  const claveLimpiaInvertida = claveLimpia.reverse();
  return claveLimpiaInvertida.join("");
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
