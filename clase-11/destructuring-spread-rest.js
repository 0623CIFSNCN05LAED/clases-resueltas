// Destructuring

const estudiantes = ["John", "Jane", "June"];

// const estudiante1 = estudiantes[0];
// const estudiante3 = estudiantes[2];

const [estudiante1, , estudiante3] = estudiantes;

const alumno = { nombre: "John", promedio: 8.5, aprobado: true };

// const nombre = alumno.nombre;
// const promedio = alumno.promedio;
// const aprobado = alumno.aprobado;
console.log(alumno.nombre);

const { nombre, promedio, aprobado } = alumno;

console.log(nombre);

// Spread

const animalesDomesticos = ["perro", "gato", "loro"];
const animalesSalvajes = ["león", "tigre", "cebra"];

const animales = [...animalesDomesticos, "pez"];
// animales[0] = animalesDomesticos[0];

const perro = {
  patas: 4,
  cola: 2,
  ojos: 2,
};

const perro2 = {
  ...perro,
  cola: 1,
};

console.log(perro2);
