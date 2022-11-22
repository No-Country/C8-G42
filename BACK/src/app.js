const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const corsOptions = require("./config/corsOptions");
const routerApi = require('./routers/routerApi');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
// Init our Express app
const app = express();

// Enable Express app to receive JSON data
app.use(express.json());

// cors
const cors = require('cors');
// Usar cors con opciones (para todas las conexiones)
app.use(cors(corsOptions));

// Routers
routerApi(app);

app.use(helmet());

app.use(compression());

app.use(morgan("dev"));

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


module.exports = { app };
