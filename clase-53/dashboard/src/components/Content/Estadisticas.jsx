import SmallCard from "./SmallCard";

const myStats = [
  {
    id: 1,
    title: "Cantidad de estrenos",
    value: "15",
    color: "cornflowerblue",
    icon: "bi bi-film",
  },
  {
    id: 2,
    title: "Categorías",
    value: "12",
    color: "orange",
    icon: "bi bi-tags-fill",
  },
  {
    id: 3,
    title: "Total ventas",
    value: "$ 489.567",
    color: "green",
    icon: "bi bi-currency-dollar",
  },
];

export default function Statistics() {
  return (
    <section className="content">
      <h2 className="mt-3">Estadísticas</h2>
      <div className="info-boxes">
        {myStats.map((stat) => (
          <SmallCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>
    </section>
  );
}
