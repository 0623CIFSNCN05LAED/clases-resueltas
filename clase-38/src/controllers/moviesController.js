const movieService = require("../services/movie-service");

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
};
