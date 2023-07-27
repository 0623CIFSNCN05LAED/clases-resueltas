const path = require("path");

const express = require("express");
const app = express();

// const pathToPublic = path.join(__dirname, '../public')
// const static = express.static(pathToPublic);
// app.use(static);

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/lovelace", function (req, res) {
  res.sendFile(path.join(__dirname, "views/lovelace.html"));
});

app.listen(3030, () => {
  console.log("El servidor prendió");
});
