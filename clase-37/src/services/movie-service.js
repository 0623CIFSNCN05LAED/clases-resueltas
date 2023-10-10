const { Movies } = require("../database/models");

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
};
