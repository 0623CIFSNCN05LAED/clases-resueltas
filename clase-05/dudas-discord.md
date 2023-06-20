# Markdown

# Escribir ejemplos de JS en Discord

# Declaración de variables

```js
// let persona = ((nombre = "Juan"), (edad = 30)); // NO!!!

//opción 1
const nombre = "Juan";
const edad = 30;

//opción 2
const persona = {
  nombre: "Juan",
  edad: 30,
};
console.log(persona);

//opción 3
let persona2 = "persona",
  nombre2 = "Juan2";
```

# Evitar código ninja

```js
const p = { n: "Juan", e: 30 };
```

# Template literals

```js
const nombre = "Juan";
const apellido = "Gomez";
const nombreCompleto = `Mi nombre es ${nombre} y 
                        mi apellido es ${apellido}`;
```

# Test automatizados de PG

```js
//resultado de la ejercitación:
function suma(a, b) {
  return a + b;
}

function testSuma() {
  const resultado1 = suma(1, 2);
  const resultadoEsperado1 = 3;
  const resultado2 = suma(3, 2);
  const resultadoEsperado2 = 5;

  if (resultado1 != resultadoEsperado1) {
    return false; // incorrecto
  }
  if (resultado2 != resultadoEsperado2) {
    return false; // incorrecto
  }
  return true; // correcto
}
```
