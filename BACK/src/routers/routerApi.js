const express = require("express");
const { petsRouter } = require("./api/pets.routes");
const userRouter = require('./api/users.routes');
const shelterRouter = require('./api/shelters');
const notFoundRouter = require('./404');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/users', userRouter);
  router.use("/pets", petsRouter);
  router.use('/shelter', shelterRouter);
  router.use('*', notFoundRouter);
}

module.exports = routerApi;
