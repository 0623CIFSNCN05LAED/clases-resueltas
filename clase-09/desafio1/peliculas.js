const uuid = require("uuid");
const generos = require("./generos");

const peliculas = [
  {
    id: uuid.v4(),
    titulo: "El señor de los anillos",
    rating: 8.8,
    premios: 5,
    precio: 1000,
    genero: generos[0],
  },
  {
    id: uuid.v4(),
    titulo: "El conjuro",
    rating: 7.5,
    premios: 3,
    precio: 500,
    genero: generos[1],
  },
  {
    id: uuid.v4(),
    titulo: "La mascara",
    rating: 6.5,
    premios: 2,
    precio: 300,
    genero: generos[2],
  },
];
console.log(peliculas);
module.exports = peliculas;
