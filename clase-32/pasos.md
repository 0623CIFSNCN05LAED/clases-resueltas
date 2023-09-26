# crear servidor

- inicializar proyecto
- instalar dependencias
- crear punto de entrada
- exponer un puerto
- crear una ruta y su controlador

# crear vista

- creamos login.ejs
- seteamos para utilizar ejs en nuestro proyecto
- armamos nuestro ejs con:
  - body
    - form:
      - name
      - color (select)
      - email
      - edad
    - submit

# crear ruta y controlador del post

# armar camino feliz, qué pasa si la data del form es válida

- vista home
- ruta y controlador

# validaciones

- instalar dependencias
- armar validaciones (preferentemente en su propio módulo)
- armar validaciones de resultados (middleware), manejo de errores

# guardar la data del usuario en session

- instalar dependencias
- agregar middleware de session
- agregar lógica en controladores

# Auth guard (si no hay sesión válida redirigir al login)

- crear middleware
- incluir middleware en la ruta

# Logout

- creamos form de logout
- agregamos ruta correspondiente
- agregamos método para borrar la sesión

# Flash errors (mostrar errores de validación y borrarlos cuando sean corregidos)

- mandar los errores al front
- si no hay más errores, borrarlos y mantener los que sigan siendo errores
- mantener la data que ya agrego el usuario
