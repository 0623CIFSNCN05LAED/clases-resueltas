window.onload = function () {
  
    const body = document.querySelector("body");
    const moviesListTitulo = document.querySelector(".moviesListTitulo");
    function darkMode() {
      body.style.backgroundColor = "#7f7f7f";
      body.classList.add("fondoMoviesList");
    }

    function lightMode() {
      body.style.backgroundColor = "white";
      body.classList.remove("fondoMoviesList");
    }

    const modo = confirm("Desea modo oscuro");
    if (modo) {
      darkMode();
    }

    moviesListTitulo.innerText = "LISTADO DE PELÍCULAS";
    moviesListTitulo.style.color = "white";
    moviesListTitulo.style.backgroundColor = "teal";
    moviesListTitulo.style.padding = "20px";

    const logoMoviesList = document.querySelector(".container-movies-list>img");

    let currentMode = modo;
    let clickCounter = 0;

    function handleLogoMouseover() {
      currentMode ? lightMode() : darkMode();
      currentMode = !currentMode;
      clickCounter++;

      if (clickCounter >= 3) {
        logoMoviesList.removeEventListener("mouseover", handleLogoMouseover);
        console.log("Se removió el evento temporalmente");
        setTimeout(() => {
          logoMoviesList.addEventListener("mouseover", handleLogoMouseover);
          console.log("Se volvió a agregar el evento");
          clickCounter = 0;
        }, 5000);
      }
    }

    logoMoviesList.addEventListener("mouseover", handleLogoMouseover);

};
