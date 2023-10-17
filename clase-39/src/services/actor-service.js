const { Actors } = require("../database/models");

module.exports = {
  getAllActors: () => {
    return Actors.findAll();
  },
  getActor: (id) => {
    return Actors.findByPk(id, {
      include: ["movies", "favorite_movie"],
    });
  },
  createActor: (body) => {
    return Actors.create({
      firstName: body.firstName,
      lastName: body.lastName,
      rating: body.rating,
    });
  },
  updateActor: (id, body) => {
    return Actors.update(
      {
        firstName: body.firstName,
        lastName: body.lastName,
        rating: body.rating,
      },
      {
        where: { id },
      }
    );
  },
  deleteActor: (id) => {
    return Actors.findByPk(id, {
      include: ["movies"],
    }).then((actor) => {
      actor.movies.forEach((movie) => {
        movie.actors.destroy(actor);
      });
      actor.destroy();
    });
  },
};
