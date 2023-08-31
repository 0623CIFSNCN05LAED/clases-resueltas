const express = require("express");
const path = require("path");

const mainRoute = require("./routes/main-router");

const app = express();

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Using port ${PORT}`);
});

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static(path.join(__dirname, "../public")));

app.use(mainRoute);
