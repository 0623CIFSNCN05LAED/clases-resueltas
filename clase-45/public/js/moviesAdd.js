window.onload = function () {
  let titulo = document.querySelector(".moviesAddTitulo");
  let formulario = document.querySelector("#formulario");
  let article = document.querySelector("article");
  titulo.innerHTML = "AGREGAR PELÍCULA";
  titulo.classList.add("titulo");
  article.classList.add("fondoTransparente");
  formulario.classList.add("fondoCRUD");

  //https://stackoverflow.com/questions/1484506/random-color-generator
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    const color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  titulo.addEventListener("mouseover", function () {
    titulo.style.color = getRandomColor();
  });
};
