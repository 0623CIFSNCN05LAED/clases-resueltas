// Crear en la carpeta raíz del proyecto un archivo (collectibles.js). Este archivo será un
// módulo propio, en el que debes construir una función (importar). Esta recibirá como
// parámetro el nombre de la marca de las figuras coleccionables. Tendrá la responsabilidad
// de leer el archivo en formato JSON y devolver un array de objetos de cada una de las
// marcas que reciba.

const fs = require("fs");
const path = require("path");

const readJson = (ruta) => {
  const collectibles = fs.readFileSync(path.join(__dirname, ruta), "utf-8");
  return JSON.parse(collectibles);
};

const findRoute = (marca) => {
  const rutas = {
    hotToys: "./datos/figuras1.json",
    bandai: "./datos/figuras2.json",
    starWars: "./datos/figuras3.json",
  };
  return rutas[marca];
};

const importar = (marca) => {
  const ruta = findRoute(marca);
  const collectibles = readJson(ruta);
  return collectibles;
};

module.exports = importar;
