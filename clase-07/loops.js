const fruits = ["🍅", "🍇", "🍈", "🍉", "🍊", "🍌"];

console.log("For Loop");
for (let indexFor = 0; indexFor < fruits.length; indexFor++) {
  console.log(fruits[indexFor]);
}

console.log("While Loop");
let indexWhile = 0;
while (indexWhile < fruits.length) {
  console.log(fruits[indexWhile]);
  indexWhile++;
}

console.log("Do-while Loop");
let indexDoWhile = 0;
do {
  console.log(fruits[indexDoWhile]);
  indexDoWhile++;
} while (indexDoWhile < 0);

//quiero una copia del array pero de atrás para adelante
const reverseFruits = [];
for (let indexReverse = fruits.length - 1; indexReverse >= 0; indexReverse--) {
  reverseFruits.push(fruits[indexReverse]);
}
console.log(reverseFruits);
