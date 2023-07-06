// jorge
const fs = require("fs"); // simon

function importarBicicletas() {
  const bicicletasJson = fs.readFileSync("./bicicletas.json", "utf8"); //sebastian
  const bicis = JSON.parse(bicicletasJson); // claudio
  return bicis;
}

module.exports = importarBicicletas; // Eugenia
