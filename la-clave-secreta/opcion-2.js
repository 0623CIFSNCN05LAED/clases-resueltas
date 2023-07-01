// Recorro el array de derecha a izquierda y si el elemento es distinto a * lo pusheo a un nuevo array llamado claveLimpia
// Lo uno en string

function laClaveSecreta(array) {
  const claveLimpia = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] !== "*") {
      claveLimpia.push(array[i]);
    }
  }
  return claveLimpia.join("");
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
