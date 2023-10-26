const { Genres } = require("../database/models");

module.exports = {
  getAllGenres: () => {
    return Genres.findAll();
  },
  getAllGenresAndCount: ({
    pageSize, offset
  }) => {
    return Genres.findAndCountAll({
      limit: pageSize, 
      offset: offset
    })
  },
  getGenreDetail: (id) => {
    return Genres.findByPk(id);
  },
};
