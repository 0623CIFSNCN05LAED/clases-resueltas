const fetch = require("node-fetch");

const OMDB_API_KEY = "446b4f42";
const OMDB_API_URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&`;

module.exports = {
  search: async (query) => {
    const response = await fetch(`${OMDB_API_URL}s=${query}`);
    const result = await response.json();

    if (result.Search) {
      return result.Search[0];
    }
    return null;
  },
  findMovie: async (imdbID) => {
    const response = await fetch(`${OMDB_API_URL}i=${imdbID}&plot=full`);
    const result = await response.json();

    return result;
  },
};
