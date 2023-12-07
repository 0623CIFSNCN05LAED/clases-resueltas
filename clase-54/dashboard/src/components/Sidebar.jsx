import { Link } from "react-router-dom";

export default function Sidebar() {
  const iconStyle = {
    fontSize: "1.5rem",
    color: "cornflowerblue",
  };

  return (
    <nav>
      <section className="dicover">
        <h3>Opciones</h3>
        <ul>
          <li>
            <Link to="/search">
              <i className="bi bi-search" style={iconStyle}></i>- Buscar
            </Link>
          </li>
          <li>
            <Link to="/peliculas">
              <i className="bi bi-film" style={iconStyle}></i>- Películas
            </Link>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-play-circle" style={iconStyle}></i>- Cines
            </a>
          </li>
          <li>
            <Link to="/generos">
              <i className="bi bi-person" style={iconStyle}></i>- Géneros
            </Link>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-bar-chart"></i>- Más populares
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-tags"></i>- Promociones
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-graph-up"></i>- Estadísticas
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
}
