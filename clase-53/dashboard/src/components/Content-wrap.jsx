import Estadisticas from "./Content/Estadisticas";
import Generos from "./Content/Generos";
import PeliculasMasPopulares from "./Content/Peliculas-mas-populares";
import Preventa from "./Content/Preventa";
import ProximosEstrenos from "./Content/Proximos-estrenos";
import { Route, Switch } from "react-router-dom";
import GenreDetail from "./Content/Detalle-genero";

export default function ContentWrap() {
  return (
    <main
      className="content-wrap"
      style={{
        maxHeight: "calc(100vh - 6rem)",
      }}
    >
      <Switch>
        <Route path="/peliculas">
          <ProximosEstrenos />
        </Route>
        <Route path="/preventa">
          <Preventa />
        </Route>
        <Route path="/estadisticas">
          <Estadisticas />
        </Route>
        <Route path="/populares">
          <PeliculasMasPopulares />
        </Route>
        <Route path="/generos">
          <Generos />
        </Route>
        <Route path="*">
          <p>404 - página no encontrada</p>
        </Route>
      </Switch>
      <div className="col-6">
        <h1>Genero Seleccionado:</h1>
        <Route path="/generos/:name" component={GenreDetail} />
      </div>
    </main>
  );
}
