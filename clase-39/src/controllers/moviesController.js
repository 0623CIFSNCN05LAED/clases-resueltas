const movieService = require("../services/movie-service");
const genreService = require("../services/genre-service");

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
