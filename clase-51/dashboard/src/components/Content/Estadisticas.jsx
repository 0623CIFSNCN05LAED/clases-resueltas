export default function Statistics() {
  return (
    <section className="content">
      <h2 className="mt-3">Estadísticas</h2>
      <div className="info-boxes">
        <div className="info-box">
          <div className="box-icon">
            <i
              className="bi bi-film"
              style={{
                fontSize: "1.5rem",
                color: "cornflowerblue",
              }}
            ></i>
          </div>

          <div className="box-content">
            <span className="big">15</span>
            Cantidad de estrenos
          </div>
        </div>

        <div className="info-box">
          <div className="box-icon">
            <i
              className="bi bi-tags-fill"
              style={{
                fontSize: "2.5rem",
                color: "orange",
              }}
            ></i>
          </div>

          <div className="box-content">
            <span className="big">12</span>
            Categorías
          </div>
        </div>

        <div className="info-box active">
          <div className="box-icon">
            <i
              className="bi bi-currency-dollar"
              style={{
                fontSize: "2.5rem",
                color: "green",
              }}
            ></i>
          </div>

          <div className="box-content">
            <span className="big">$ 489.567</span>
            Total ventas
          </div>
        </div>
      </div>
    </section>
  );
}
