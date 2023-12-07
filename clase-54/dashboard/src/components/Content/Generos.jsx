import { Route } from "react-router-dom";
import GenreDetail from "./Detalle-genero";
import GenreLink from "./Link-genero";
import { useEffect, useState } from "react";

// const genres = [
//   { id: 1, name: "Acción" },
//   { id: 2, name: "Aventura" },
//   { id: 3, name: "Animación" },
//   { id: 4, name: "Documentales" },
//   { id: 5, name: "Drama" },
//   { id: 6, name: "Fantasía" },
//   { id: 7, name: "Terror" },
//   { id: 8, name: "Romance" },
// ];

// export default function Generos() {
//   return (
//     <section className="content">
//       <h2 className="mt-3">Géneros</h2>
//       <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
//         <button
//           type="button"
//           className="list-group-item list-group-item-action active text-center"
//           aria-current="true"
//         >
//           Listado de géneros de las películas
//         </button>
//         {genres.map((genre) => (
//           <GenreItem key={genre.id} name={genre.name} />
//         ))}
//       </div>
//     </section>
//   );
// }

// import { Component } from "react";

// class Generos extends Component {
//   constructor(props) {
//     super(props);
//     //Especifico de Generos
//     this.state = {
//       genres: [],
//     };
//   }

//   componentDidMount() {
//     fetch("http://localhost:3001/api/genres")
//       .then((response) => {
//         return response.json();
//       })
//       .then((json) => {
//         const genres = json.data;
//         console.log("genres", genres);
//         this.setState({
//           genres: genres,
//         });
//       });
//   }

//   render() {
//     return (
//       <section className="content row">
//         <div className="col-6">
//           <h2 className="mt-3">Géneros</h2>
//           <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
//             <button
//               type="button"
//               className="list-group-item list-group-item-action active text-center"
//               aria-current="true"
//             >
//               Listado de géneros de las películas
//             </button>
//             {this.state.genres.length === 0
//               ? "Cargando..."
//               : this.state.genres.map((genre) => (
//                   <GenreLink key={genre.id} name={genre.name} />
//                 ))}
//           </div>
//         </div>
//         <div className="col-6">
//           <h2>Genero Seleccionado:</h2>
//           <Route path="/generos/:name" component={GenreDetail} />
//         </div>
//       </section>
//     );
//   }
// }

// export default Generos;

function Generos() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/api/genres");
      const result = await response.json();
      setGenres(result.data);
    };

    fetchData();
  }, []);

  return (
    <section className="content row">
      <div className="col-6">
        <h2 className="mt-3">Géneros</h2>
        <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
          <button
            type="button"
            className="list-group-item list-group-item-action active text-center"
            aria-current="true"
          >
            Listado de géneros de las películas
          </button>
          {genres.length === 0
            ? "Cargando..."
            : genres.map((genre) => (
                <GenreLink key={genre.id} name={genre.name} />
              ))}
        </div>
      </div>
      <div className="col-6">
        <h2>Genero Seleccionado:</h2>
        <Route path="/generos/:name" component={GenreDetail} />
      </div>
    </section>
  );
}

export default Generos;
