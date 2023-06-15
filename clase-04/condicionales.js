// Si llueve salgo con paraguas
const clima = "lluvia";
/* 
if (clima === "lluvia") {
  console.log("salgo con paraguas");
}

// Si llueve salgo con paraguas, si no llueve salgo con anteojos de sol

if (clima) {
  console.log("salgo con paraguas");
} else {
  console.log("salgo con anteojos de sol");
}

// Si llueve salgo con paraguas,
// si no llueve salgo con anteojos de sol,
// si hay viento me quedo en casa

if (clima === "lluvia") {
  console.log("salgo con paraguas");
} else if (clima === "no lluvia") {
  console.log("salgo con anteojos de sol");
} else if (clima === "viento") {
  console.log("me quedo en casa");
} else {
  console.log("no se el clima");
} */

/* const temperatura = "30"; // valor: 30 // tipo: string

if (temperatura === 30) {
  // valor: 30 // tipo: number
  console.log("hace calor");
} else {
  console.log("no hace calor");
} */

// switch
/* let accion;
switch (clima) {
  case "lluvia":
    accion = "salgo con paraguas";
    break;
  case "no lluvia":
    accion = "salgo con anteojos de sol";
    break;
  case "viento":
    accion = "me quedo en casa";
    break;
  default:
    accion = "no se el clima";
}

console.log(accion);
 */

// if ternario

const accion = clima === "lluvia" ? "salgo con paraguas" : "no se el clima";
console.log(accion);
