const express = require("express");
const path = require("path");
const autoprefixer = require("express-autoprefixer");
const routes = require("./routes");
const app = express();
const PORT = 3000;

// view engine setup
app.set("view engine", "pug");
app.set("views", [path.join(__dirname, "./views")]);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(autoprefixer({ browsers: "last 2 versions", cascade: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes());

var server = app.listen(PORT, () => {
  console.log(`NODE_ENV is ${app.get("env")}`);
  console.log(`server is listening on port ${server.address().port}`);
});
