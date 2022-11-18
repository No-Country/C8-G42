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

app.listen(3000, () => {
  console.log('My port: 3000')
})

// Routers
routerApi(app);

app.use(helmet());

app.use(compression());

app.use(morgan("dev"));


app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


module.exports = { app };
