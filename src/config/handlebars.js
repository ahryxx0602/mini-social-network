const exphbs = require("express-handlebars");
const path = require("path");

function setupHandlebars(app) {
  app.engine(
    "hbs",
    exphbs.engine({
      extname: ".hbs",
      layoutsDir: path.join(__dirname, "../views/layouts"),
      partialsDir: path.join(__dirname, "../views/partials"),
      defaultLayout: "main",
    })
  );
  app.set("view engine", "hbs");
  app.set("views", path.join(__dirname, "../views"));
}

module.exports = setupHandlebars;
