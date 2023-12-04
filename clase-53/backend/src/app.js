const express = require("express");
const path = require("path");
const app = express();

const cors = require("cors");
app.use(
  cors(
    (corsOptions = {
      origin: "*",
    })
  )
);

// let allowCrossDomain = function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "OPTIONS, POST, GET, PUT, DELETE");
//   res.header("Access-Control-Allow-Headers", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
//   );
//   next();
// };
// app.use(allowCrossDomain);

app.use(express.json());

//Aquí llamo a la ruta de las api de movies
const apiMoviesRouter = require("./routes/api/movies");
//Aquí llamo a la ruta de las api de actors
const apiGenresRouter = require("./routes/api/genres");
//Aquí llamo a la ruta de las api de actors
const apiActorsRouter = require("./routes/api/actors");

app.use(express.static(path.resolve(__dirname, "../public")));

//Aquí creo la colección de mis recursos de movies (APIs)
app.use("/api/movies", apiMoviesRouter);
app.use("/api/actors", apiActorsRouter);
app.use("/api/genres", apiGenresRouter);

//Activando el servidor desde express
app.listen("3001", () => console.log("Servidor corriendo en el puerto"));
