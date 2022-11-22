const express = require("express");
const { petsRouter } = require("./api/pets.routes");
const userRouter = require("./api/users.routes");
const shelterRouter = require("./api/shelters.routes");
const messageRouter = require("./api/messages.routes");
const notFoundRouter = require("./404");
const { reportsRouter } = require("./api/reports.routes");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/users", userRouter);
  router.use("/pets", petsRouter);
  router.use("/shelters", shelterRouter);
  router.use("/messages", messageRouter);
  router.use("/reports", reportsRouter);
  router.use("*", notFoundRouter);
}

module.exports = routerApi;
