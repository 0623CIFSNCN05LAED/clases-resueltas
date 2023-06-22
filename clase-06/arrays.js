const array = ["elem1", "elem2", "elem3"];

const arrayLength = array.length; //3

//console.log(arrayLength);

const primerElemento = array[0]; //elem1

// console.log(primerElemento);

const ultimoElemento = array[array.length - 1]; //elem3

// console.log(ultimoElemento)

const myFruits = [
  "banana",
  "manzana",
  "pera",
  "frutilla",
  "mandarina",
  "mango",
];

myFruits.push(myFruits.shift());
console.log(myFruits);

const myFruit = myFruits.indexOf("banana"); //0
// console.log(myFruit);

const hasMyFruit = myFruits.includes("fresa"); // false
// console.log(hasMyFruit);

const myFruit2 = myFruits.indexOf("fresa"); // -1
// console.log(myFruit2);

// myFruits.push("fresa");
myFruits[myFruits.length] = "fresa";
// console.log(myFruits);

myFruits[0] = "maracuya";
// console.log(myFruits);
