const { Actors } = require("../database/models");

module.exports = {
  getAllActors: () => {
    return Actors.findAll();
  },
  getActor: (id) => {
    return Actors.findByPk(id);
  },
};
