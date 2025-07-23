const express = require("express");
const cors = require("cors");
const path = require("path");
const setupHandlebars = require("./config/handlebars");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));

// Setup view engine
setupHandlebars(app);

// Routes
app.use("/", require("./routes/view.route"));
app.use("/api/auth", require("./routes/auth.route"));

module.exports = app;
