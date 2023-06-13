const nombre = "Gloria";
//Apellido
const edad = 42;
const numeroDeTelefono = "+54-911-2804-2335";
const socio = true;
const fechaDelPartido = "12/06/2023";
//const horaDelPartido
//Número de silla
//let precioDelBoleto = 420;
//precioDelBoleto = "AR$420";

const precioDeLosBoletos = [
  {
    location: "top",
    currency: "AR$",
    price: 420.1,
  },
  {
    location: "bottom",
    currency: "US$",
    price: 42.5,
  },
];

console.log(
  nombre,
  edad,
  fechaDelPartido,
  numeroDeTelefono,
  precioDeLosBoletos
);

console.log(
  typeof nombre,
  typeof edad,
  typeof fechaDelPartido,
  typeof numeroDeTelefono,
  typeof precioDeLosBoletos
);
