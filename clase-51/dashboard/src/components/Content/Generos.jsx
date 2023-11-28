export default function Generos() {
  return (
    <section className="content">
      <h2 className="mt-3">Géneros</h2>
      <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <button
          type="button"
          className="list-group-item list-group-item-action active text-center"
          aria-current="true"
        >
          Listado de géneros de las películas
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action text-center"
        >
          Acción
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action text-center"
        >
          Avetura
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action text-center"
        >
          Animación
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action text-center"
        >
          Documentales
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action text-center"
        >
          Drama
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action text-center"
        >
          Fantasía
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action text-center"
        >
          Terror
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action text-center"
        >
          Romance
        </button>
      </div>
    </section>
  );
}
