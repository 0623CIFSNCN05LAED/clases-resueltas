const genreService = require("../services/genre-service");

module.exports = {
  list: (req, res) => {
    genreService.getAllGenres().then((genres) => {
      res.render("genresList", { genres });
    });
  },
  detail: (req, res) => {
    genreService.getGenreDetail(req.params.id).then((genre) => {
      res.render("genresDetail", { genre });
    });
  },
};
