const express = require("express");
const { petsRouter } = require("./api/pets.routes");
const userRouter = require('./api/users.routes');

function routerApi(app) {
  const router = express.Router();
  app.use(router);

  router.use('/api/v1/users', userRouter);
  router.use("/api/v1/pets", petsRouter);
}

module.exports = routerApi;
