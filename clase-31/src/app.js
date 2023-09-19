const express = require("express");

const mainRouter = require("./routes/main-router");
const loggerMiddleware = require("./middleware/path-logger");

const app = express();

app.listen(3001);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(loggerMiddleware);

app.use(mainRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
