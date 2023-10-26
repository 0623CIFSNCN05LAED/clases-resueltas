const movieService = require("../services/movie-service");
const genreService = require("../services/genre-service");
const omdbApiService = require("../services/omdb-api-service");
const restCountriesService = require("../services/countries-api-service");
const countriesApiService = require("../services/countries-api-service");

module.exports = {
  list: (req, res) => {
    movieService.getAllMovies().then((movies) => {
      res.render("moviesList", { movies });
    });
  },
  new: (req, res) => {
    movieService.getNewestMovies().then((movies) => {
      res.render("newestMovies", { movies });
    });
  },
  recomended: (req, res) => {
    movieService.getRecomendedMovies().then((movies) => {
      res.render("recommendedMovies", { movies });
    });
  },
  detail: (req, res) => {
    movieService.getMovieDetail(req.params.id).then((movie) => {
      res.render("moviesDetail", { movie });
    });
  },
  search: async (req, res) => {
    //1. Buscar la película en nuestra base de datos
    //1b. si está, mostramos el detalle de la película
    //2. Buscar la película en la API de OMDB
    //2b. Si está,  mostramos el detalle de la película con los datos de OMDB
    //3. Mostramos mensaje de error 404 not found
    const query = req.query.search;
    const movieInOurDB = await movieService.search(query);
    if (movieInOurDB) {
      return res.render("moviesDetail", { movie: movieInOurDB });
    }

    const movieInApi = await omdbApiService.search(query);
    if (movieInApi) {
      const movieDetail = await omdbApiService.findMovie(movieInApi.imdbID);
      const countryName = movieDetail.Country;
      const countryFlag = await countriesApiService.getCountryFlag(countryName);
      return res.render("moviesOMDBDetail", {
        movie: movieInApi,
        plot: movieDetail.Plot,
        countryFlag,
      });
    }

    res.send("404");
  },
  add: (req, res) => {
    const genres = genreService.getAllGenres();
    genres.then((genres) => {
      res.render("moviesAdd", { genres });
    });
  },
  create: (req, res) => {
    movieService.createMovie(req.body).then((movie) => {
      res.redirect("/movies/detail/" + movie.id);
    });
  },
  edit: (req, res) => {
    const genres = genreService.getAllGenres();
    const movie = movieService.getMovieDetail(req.params.id);
    Promise.all([genres, movie]).then(([genres, movie]) => {
      console.log("movie", movie);
      res.render("moviesEdit", { movie, genres });
    });
  },
  update: (req, res) => {
    movieService.updateMovie(req.params.id, req.body).then((movie) => {
      res.redirect("/movies/detail/" + req.params.id);
    });
  },
  confirmDelete: (req, res) => {
    movieService.getMovieDetail(req.params.id).then((movie) => {
      res.render("moviesDelete", { movie });
    });
  },
  delete: (req, res) => {
    movieService.deleteMovie(req.params.id).then(() => {
      res.redirect("/movies");
    });
  },
};
