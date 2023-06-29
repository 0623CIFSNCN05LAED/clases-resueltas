// Crear un array multidimensional que contenga los nombres de los cursos y su
// precio en pesos: “html5, 4000”, “css3, 5000”, “javascript, 10000”, “react,
// 7000”, “nodejs, 15000”.

const cursos = [
  ["html5", 4000],
  ["css3", 5000],
];

const cursosAlumno = ["HTML5", "CSS3"]; //nombre de los cursos

function calcularMonto(cursos, cursosAlumno) {
  // definir monto
  let monto = 0;
  // por cada curso tenemos que saber si el titulo del curso está en el array de cursosAlumno
  for (let i = 0; i < cursos.length; i++) {
    // quiero saber si el array cursosAlumno incluye el título del curso que estoy iterando
    if (cursosAlumno.includes(cursos[i][0].toUpperCase()))
      // para comparar hay que pasar los titulos de cursos a mayúscula
      // si está lo sumo
      monto += cursos[i][1];
  }
  return monto; //number
}

function imprimirFactura(nombre, apellido, cursos, cursosAlumno) {
  const monto = calcularMonto(cursos, cursosAlumno);
  console.log(
    `Estimado ${nombre} ${apellido}, en función de los cursos seleccionados:`
  );
  for (let i = 0; i < cursosAlumno.length; i++) {
    console.log(`${i + 1}.- ${cursosAlumno[i]}`);
  }
  console.log(`El monto total a pagar es de: $${monto}.
  Bienvenido a la gran aventura Digital House.`);
}

imprimirFactura("Liops", "Fstr", cursos, cursosAlumno);
