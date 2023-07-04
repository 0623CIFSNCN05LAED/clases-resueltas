const person = {
  name: "lala", // propiedades // llave: valor
  saludar: function () {
    console.log(this);
    return "hola soy " + this.name;
    // método
  },
};

person.apellido = "lolo";
person.saltar = function saltar() {
  console.log("salto");
};

const dog = {
  name: "Firulai",
  saludar: function () {
    return "guau, yo soy" + this.name;
  },
};

console.log(person.saludar());
