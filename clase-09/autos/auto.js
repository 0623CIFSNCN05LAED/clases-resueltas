const uuid = require("uuid");

const auto = {
  id: uuid.v4(),
  marca: "Ford",
  modelo: 2020,
};

console.log(auto);

module.exports = auto;
