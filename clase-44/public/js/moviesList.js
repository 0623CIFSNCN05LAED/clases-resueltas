window.onload = function () {
  const body = document.querySelector("body");
  const moviesListTitulo = document.querySelector(".moviesListTitulo");

  const modo = confirm("Desea modo oscuro");
  if (modo) {
    body.style.backgroundColor = "#7f7f7f";
    body.classList.add("fondoMoviesList");
  }

  moviesListTitulo.innerText = "LISTADO DE PELÍCULAS";
  moviesListTitulo.style.color = "white";
  moviesListTitulo.style.backgroundColor = "teal";
  moviesListTitulo.style.padding = "20px";
};
