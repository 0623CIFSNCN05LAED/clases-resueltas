const { Genres } = require("../database/models");

module.exports = {
  getAllGenres: () => {
    return Genres.findAll();
  },
  getGenreDetail: (id) => {
    return Genres.findByPk(id);
  },
};
