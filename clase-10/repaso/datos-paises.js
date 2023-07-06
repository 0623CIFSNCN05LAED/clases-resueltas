const fs = require("fs");

function importarPaises() {
  const paisesJson = fs.readFileSync("./paises.json", "utf-8");
  const paises = JSON.parse(paisesJson);
  return paises;
}

module.exports = importarPaises;
