const express = require("express");
const { petsRouter } = require("./api/pets.routes");

function routerApi(app) {
  const router = express.Router();
  app.use(router);

  router.use('/user', userRouter);
  router.use("/api/v1/pets", petsRouter);
}

module.exports = routerApi;
