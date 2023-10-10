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
};
