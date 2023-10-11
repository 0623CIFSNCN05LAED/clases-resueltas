const { Movies } = require("../database/models");
const Sequelize = require("sequelize");

module.exports = {
  getAllMovies: () => {
    return Movies.findAll();
  },
  getNewestMovies: () => {
    return Movies.findAll({
      order: [["release_date", "DESC"]],
      limit: 5,
    });
  },
  getRecomendedMovies: () => {
    return Movies.findAll({
      where: {
        rating: { [Sequelize.Op.gte]: 8 },
      },
    });
  },
  getMovieDetail: (id) => {
    return Movies.findByPk(id);
  },
};
