# Variables

- var
- let
- const

## Tipo de datos

### Primitivos

- number
- string
- boolean
- undefined, null, NaN

### No-primitivos

- array
- objeto
- function

# Condicionales

## if

```js
if(true){
    //body
} else if() {

} else {};
```

## switch

```js
const ejemplo = "lala";
switch (ejemplo) {
  case "lala":
    //body
    break;
  default:
}
```

## if ternario

```js
const booleanoDelIfTernario = true;
const resultado = booleanoDelIfTernario ? "trueBody" : "falseBody";
```

# Funciones

## Declarada

```js
function declaredFunctionName(number1, number2) {
  const sum = number1 + number2;
  return sum;
}
```

## Expresada

```js
const expressedFunctionName = function (number1, number2) {
  const sum = number1 + number2;
  return sum;
};
```

## Arrow function

```js
const expressedFunctionName = (number1, number2) => number1 + number2;
```

# Arrays

```js
const fruits = ["banana", "manzana"];
```

## Strings

se pueden interpretar como un array de caracteres

## Método de array

funciones que ya tienen los arrays

- .push
- .pop
- .indexOf
- .include
- ...

# Ciclos

## for loop

```js
for(inicio, condicion, modificador){
    //body
}
```

## while loop

```js
let inicio;
while (condicion) {
  // body
  modificador;
}
```

## do while loop

```js
let inicio;
do {
  //body
  modificador;
} while (condicion);
```
