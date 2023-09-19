// Micro desafío - Paso 1:
// Utilizando de base el siguiente proyecto, vamos a desarrollar un middleware para
// registrar el ingreso a cualquier ruta del sistema. Por lo que dentro de la aplicación
// debemos crear un archivo de texto llamado userLogs.txt. Este deberá estar ubicado en
// una carpeta con nombre logs y dentro de él deberemos registrar el ingreso a cualquier
// ruta del sistema. Cada registro deberá quedar así:
// ● El usuario ingresó a la ruta: ______
// Para ello será necesario que tengamos una carpeta denominada middlewares y, dentro de
// ella, el middleware llamado: userLogs.js.
// Este middleware se usará en toda la aplicación, por lo tanto deberemos implementarlo
// según corresponda. Asimismo, podremos crear las rutas que estimemos necesarias para
// probar el middleware.
// Importante: el archivo userLogs.txt deberá ir almacenando TODAS las rutas a las que
// accede el usuario. El mismo deberá verse así:
// ● El usuario ingresó a la ruta: /services
// ● El usuario ingresó a la ruta: /services/design
// ● El usuario ingresó a la ruta: /
// ● Y así sucesivamente con el resto de las rutas.

const fs = require("fs");
const path = require("path");

module.exports = (req, res, next) => {
  const ruta = path.join(__dirname, "../../logs/userLogs.txt");
  const fecha = new Date().toISOString();
  const rutaActual = req.url;
  const registro = `[${fecha}] - El usuario ingresó a la ruta: ${rutaActual}\n`;
  fs.appendFileSync(ruta, registro);
  next();
};
