const carro = require("../autos/auto");
const fs = require("fs");

const patente = fs.readFileSync("../autos/patente.txt", "utf-8");

console.log(patente);

// console.log(carro);

// 2 estándares
// common js => utiliza require
// EcmaScriptModules => utiliza import

// nativos
// terceros // NPM Node Package Manager
// propios o creados
