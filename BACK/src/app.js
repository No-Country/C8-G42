const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const routerApi = require('./routers/index');

// Init our Express app
const app = express();

// Enable Express app to receive JSON data
app.use(express.json());

// Routers
routerApi(app);

app.use(helmet());

app.use(compression());

app.use(morgan("dev"));

// Define endpoints
app.listen(3000, () => {
  console.log(`Servidor funcionando en el puerto 3000`)
})

// Catch non-existing endpoints
app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});

module.exports = { app };
