const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const routerApi = require('./routers/index');
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
app.listen(3000, () => {
  console.log(`Servidor funcionando en el puerto 3000`)
})

// Log all errors
app.use(logErrors);
// Catch errors raised by boom
app.use(boomErrorHandler);
// Catch the rest of the errors
app.use(errorHandler);


module.exports = { app };
