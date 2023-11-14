window.onload = () => {
    const titleInput = document.getElementById("title");
    let movie = {};

    fetch("http://localhost:3001/api/movies/3")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        titleInput.value = json.data.title;
        movie = json.data;
      });

    const form = document.getElementById("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log("titleInput.value", titleInput.value);
      movie.title = titleInput.value;

      updateMovie(movie);
    });

    function updateMovie(movie) {
      console.log("movie", movie);
      return fetch("http://localhost:3001/api/movies/update/" + movie.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      });
    }

    const deleteBtn = document.getElementById("botonBorrar");
    deleteBtn.addEventListener("click", () => {
      fetch("http://localhost:3001/api/movies/delete/" + movie.id, {
        method: "DELETE",
      });
    });


}