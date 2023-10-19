const { Movies, Actors } = require("../database/models");
const Sequelize = require("sequelize");
const dayjs = require("dayjs");

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
    return Movies.findByPk(id, {
      include: ["genre", "actors"],
    }).then((movie) => {
      // return movie.toJSON()

      return {
        id: movie.id,
        title: movie.title,
        rating: movie.rating,
        awards: movie.awards,
        release_date: dayjs(movie.release_date).format("YYYY-MM-DD"),
        actors: movie.actors.map((actor) => {
          return {
            id: actor.id,
            firstName: actor.firstName,
            lastName: actor.lastName,
            rating: actor.rating,
          };
        }),
        genreName: movie.genre?.name ?? "No tiene género",
        genre_id: movie.genre_id,
        length: movie.length,
      };
    });
  },
  createMovie: (body) => {
    return Movies.create({
      title: body.title,
      rating: body.rating,
      awards: body.awards,
      release_date: body.release_date,
      length: body.length,
      genre_id: body.genre_id,
    });
  },
  updateMovie: (id, body) => {
    return Movies.update(
      {
        title: body.title,
        rating: body.rating,
        awards: body.awards,
        release_date: body.release_date,
        length: body.length,
        genre_id: body.genre_id,
      },
      {
        where: { id: id },
      }
    );
  },
  deleteMovie: (id) => {
    // Busco todos los actores que tengan como pelicula favorita la que quiero borrar
    const actorsWithFavoriteMovie = Actors.findAll({
      where: { favorite_movie_id: id },
    }).then((actors) => {
      return actors.map((actor) => {
        return actor.update({ favorite_movie_id: null });
      });
    });

    // Busco la pelicula que quiero borrar y elimino la relacion con los actores
    const actorMovies = Movies.findByPk(id, {
      include: ["actors"],
    }).then((movie) => {
      return movie.actors.map((actor) => {
        return actor.removeMovie(movie);
      });
    });

    // Espero a que se eliminen las relaciones y luego elimino la pelicula
    return Promise.all([actorsWithFavoriteMovie, actorMovies]).then(() => {
      return Movies.destroy({
        where: { id: id },
      });
    });
  },
};
