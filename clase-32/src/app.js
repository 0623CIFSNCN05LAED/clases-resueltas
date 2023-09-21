const express = require("express");
const path = require("path");
const session = require("express-session");

const mainRouter = require("./routers/main-router");

const app = express();

app.listen(3000);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(
  session({
    secret: "lalaRocks",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(mainRouter);
