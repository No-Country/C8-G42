const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const routerApi = require('./routers/routerApi');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');


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
routerApi(app);

// Log all errors
app.use(logErrors);
// Catch errors raised by boom
app.use(boomErrorHandler);
// Catch the rest of the errors
app.use(errorHandler);

// Catch non-existing endpoints
app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});

module.exports = { app };
