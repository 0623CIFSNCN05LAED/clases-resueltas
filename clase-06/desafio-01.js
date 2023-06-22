// Instrucciones
// 1. Crea una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).
// Vamos a afianzar nuestros conocimientos sobre arrays y strings realizando diferentes
// acciones sobre ellos. Verificaremos si se comportan como esperamos u ocurren resultados
// diferentes a los esperados.
// 2. Define un array que contenga un conjunto de seis (6) productos de
// electrodomésticos.

const electrodomesticos = [
  "televisor",
  "heladera",
  "lavadora",
  "microondas",
  "aspiradora",
  "licuadora",
];

// 3. Ejecutar sobre el array creado las siguientes acciones:
// ● Acceder de manera aleatoria a diferentes elementos del array. Recuerda mostrar por
// la consola los resultados.
// const random = Math.floor(Math.random() * electrodomesticos.length);
// console.log(electrodomesticos[random]);
const electrodomestico = electrodomesticos[4];
console.log("3a", electrodomestico);

// ● Extraer el primer elemento del array y agregarlo al final del mismo.
// myFruits.push(myFruits.shift());
const primerElemento = electrodomesticos.shift();

electrodomesticos.push(primerElemento);

console.log("3b", electrodomesticos);

// ● Agregar al final del array dos (2) nuevos productos.
electrodomesticos.push("plancha", "cafetera");

console.log("3c", electrodomesticos);

// ● Mostrar por la consola la cantidad de elementos que contiene el array.
console.log("3d", electrodomesticos.length);

// ● Buscar un elemento del array y crear una condición responsable de establecer si
// existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje:
// “Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado
// no existe”.
function hasProduct(product) {
  if (electrodomesticos.includes(product)) {
    return "Producto encontrado";
  } else {
    return "El producto buscado no existe";
  }
}

console.log("3e", hasProduct("heladera"));

// ● Unificar todos los elementos del array en una cadena de texto (string), separando los
// elementos por espacios en blanco.
const electrodomesticosString = electrodomesticos.join(" ");

console.log("3f", electrodomesticosString);

// ● Determinar la cantidad de elementos que posee la cadena de texto obtenida.
console.log("3g", electrodomesticosString.length);

// ● Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la
// función adecuada para ello.
const electrodomesticosStringReplace = electrodomesticosString.replace(
  "heladera",
  "aire acondicionado"
);

console.log("3h", electrodomesticosStringReplace);
// ● Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras
// de la cadena de texto. Tener en cuenta que los elementos deben estar separados por
// una coma.
const electrodomesticosArray = electrodomesticosString.split(" ");

console.log("3i", electrodomesticosArray);
