const movies = require("./peliculas");

const printMovies = (movies) => {
  for (let i = 0; i < movies.length; i++) {
    console.log("-------------------------------");
    console.log("Película", i + 1);
    console.log("Título: ", movies[i].titulo);
    console.log("Género: ", movies[i].genero);
    console.log("Rating: ", movies[i].rating);
    console.log("Premios: ", movies[i].premios);
    console.log("Precio: ", movies[i].precio);
    console.log("-------------------------------");
  }
};

printMovies(movies);
