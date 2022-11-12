const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");

// Routers

// Controllers

// Init our Express app
const app = express();

// Enable Express app to receive JSON data
app.use(express.json());

app.use(helmet());

app.use(compression());

app.use(morgan("dev"));

// Define endpoints

// Catch non-existing endpoints
app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});

module.exports = { app };
