// Micro desafío - Paso 2:
// Implementar un middleware que nos permita autorizar el ingreso de usuarios
// administradores a la ruta localhost:3000/admin, solo si los mismos están en esta lista
// de usuarios: Ada, Greta, Vim o Tim.
// Es decir, solo permitiremos acceder si el texto enviado en el queryString como user
// pertenece a los usuarios autorizados. Por ejemplo, si enviamos lo siguiente:

// 2

// ● localhost:3000/admin?user=Ada
// Permitiremos el ingreso y se enviará como response el siguiente mensaje:
// ● Hola Admin: Ada
// En caso contrario, el texto del response será:
// ● No tienes los privilegios para ingresar
// Importante: al momento de crear la ruta, la misma deberá responder a dos callbacks. El
// primero será el middleware y el segundo, el método que maneja el caso de ingreso
// exitoso. Por ejemplo:
// ● router.get("/admin", middleware, método);

module.exports = (req, res, next) => {
  const { user } = req.query;
  const usuariosAutorizados = ["Ada", "Greta", "Vim", "Tim"];
  if (usuariosAutorizados.includes(user)) {
    return next();
  }
  return res.send("No tienes los privilegios para ingresar");
};
