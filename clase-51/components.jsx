const usuarios = ["Maru", "Uriel", "Daniel"];

function Item({ item }) {
  return <li>{item}</li>;
}

function MiLista({ items }) {
  return (
    <div>
      <ol>
        {items.map((item) => (
          <Item item={item} />
        ))}
      </ol>
    </div>
  );
}

<MiLista items={usuarios} />;

function Saludo(props) {
  return <div>{props.children}</div>;
}

<Saludo>
  <p>Hola</p>
</Saludo>;

{
  /* <Saludo children="<p>Hola</p>" /> */
}
