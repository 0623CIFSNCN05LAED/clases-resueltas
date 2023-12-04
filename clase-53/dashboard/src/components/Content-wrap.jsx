import Estadisticas from "./Content/Estadisticas";
import Generos from "./Content/Generos";
import PeliculasMasPopulares from "./Content/Peliculas-mas-populares";
import Preventa from "./Content/Preventa";
import ProximosEstrenos from "./Content/Proximos-estrenos";

export default function ContentWrap() {
  return (
    <main
      className="content-wrap"
      style={{
        maxHeight: "calc(100vh - 6rem)",
      }}
    >
      <Preventa />
      <Estadisticas />
      <ProximosEstrenos />
      <PeliculasMasPopulares />
      <Generos />
    </main>
  );
}
