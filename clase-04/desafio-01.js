// variable "perfil" que puede adoptar cualquier valor
// estos perfiles tienen accesos: "administrador", "asistente", "invitado", " " (espacio en blanco)
const perfil = "administrador";
// declarar la variable mensaje para que sea definida dependiendo el caso
let mensaje;

switch (perfil) {
  // En el caso de ser " " (espacio en blanco) le asignamos a mensaje
  // "Debe especificar el perfil del usuario"
  // cortar la ejecución del bloque
  case " ": {
    mensaje = "Debe especificar el perfil del usuario";
    break;
  }
  // En caso de ser "administrador" le asignamos a mensaje
  // "Usted tiene todos los privilegios de uso del sistema"
  // cortar la ejecución del bloque
  case "administrador":
  case "Administrador":
  case "ADMINISTRADOR": {
    mensaje = "Usted tiene todos los privilegios de uso del sistema";
    break;
  }
  // En el caso de ser "asistente" le asignamos a mensaje
  //"Usted sólo tiene permisos de registrar, modificar y consultar datos"
  // cortar la ejecución del bloque
  case "asistente":
  case "Asistente":
  case "ASISTENTE": {
    mensaje =
      "Usted sólo tiene permisos de registrar, modificar y consultar datos";
    break;
  }
  // En el caso de ser "invitado" le asignamos a mensaje
  //"Usted sólo tiene permisos de consultar datos"
  // cortar la ejecución del bloque
  case "invitado":
  case "Invitado":
  case "INVITADO": {
    mensaje = "Usted sólo tiene permisos de consultar datos";
    break;
  }
  // si no está entre los perfiles le asignamos a mensaje
  //"Debe especificar un perfil válido"
  default: {
    mensaje = "Debe especificar un perfil válido";
  }
}

// imprimir el mensaje en la terminal
console.log(mensaje);

// Que pasa con misma palabra en distintos cases
if (perfil === "administrador" || perfil === "ADMINISTRADOR") {
}
