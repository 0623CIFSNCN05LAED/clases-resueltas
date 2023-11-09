let titulo = document.querySelector(".moviesAddTitulo");
let formulario = document.querySelector("#formulario");
let article = document.querySelector("article");
titulo.innerHTML = "AGREGAR PELÍCULA";
titulo.classList.add("titulo");
article.classList.add("fondoTransparente");
formulario.classList.add("fondoCRUD");

//https://stackoverflow.com/questions/1484506/random-color-generator
// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// titulo.addEventListener("mouseover", function () {
//   titulo.style.color = getRandomColor();
// });

// const palabraSecreta = "secret";
// let estadoSecreto = 0;

// const input = document.querySelector("#titulo");

// input.addEventListener("keydown", (e) => {
//   const letra = e.key;

//   if (palabraSecreta[estadoSecreto] === letra) {
//     estadoSecreto++;
//   } else {
//     estadoSecreto = 0;
//   }

//   if (estadoSecreto === palabraSecreta.length) {
//     estadoSecreto = 0;
//     setTimeout(() => {
//       alert("SECRETO!!!");
//     }, 500);
//   }
// });
