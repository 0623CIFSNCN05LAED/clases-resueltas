const movieService = require("../../services/movie-service");

// Usando JSDOCS para documentar https://jsdoc.app/
/**
 * Controller for handling movie-related API requests.
 * @module moviesController
 */

module.exports = {
  /**
   * Creates a new movie.
   * @async
   * @function
   * @param {Object} req.body - The movie data to be created. This object should contain the following fields:
   * @param {string} req.body.title - The title of the movie.
   * @param {number} req.body.rating -  The rating of the movie.
   * @param {number} req.body.awards -  The awards of the movie.
   * @param {Date} req.body.release_date -  The release date of the movie.
   * @param {number} req.body.length - The length of the movie in minutes.
   * @returns {Object} The HTTP response with the created movie data.
   */
  create: async (req, res) => {
    const movie = await movieService.createMovie(req.body);
    res.json({
      meta: {
        status: 201,
        url: req.originalUrl,
      },
      data: movie,
    });
  },

  /**
   * Deletes a movie with the specified ID.
   * @async
   * @function
   * @param {Object} req.params.id - The ID of the movie to be deleted.
   * @returns {Object} The HTTP response with the deleted movie data.
   */
  destroy: async (req, res) => {
    await movieService.deleteMovie(req.params.id);
    res.json({
      meta: {
        status: 200,
        url: req.originalUrl,
      },
    });
  },
};
