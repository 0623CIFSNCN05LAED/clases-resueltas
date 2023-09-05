const express = require("express");
const app = express();

const PORT = 3013;

const mainRouter = require("./routes/main-routes");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
