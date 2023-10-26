const fetch = require("node-fetch");

const REST_COUNTRIES_URL = "https://restcountries.com/v3.1";

module.exports = {
  getCountryFlag: async (countryName) => {
    const response = await fetch(
      `${REST_COUNTRIES_URL}/name/${countryName}?fullText=true`
    );
    const result = await response.json();
    return result[0].flags.png;
  },
};
