const express = require("express");
const { petsRouter } = require("./api/pets.routes");
const userRouter = require("./api/users.routes");
const shelterRouter = require("./api/shelters.routes");
const messageRouter = require("./api/messages.routes");
const requestRouter = require("./api/requests.routes");
const notFoundRouter = require("./404");
const { unless } = require("express-unless");
const { reportsRouter } = require("./api/reports.routes");
const { checkJwt } = require("./../middlewares/auth0.middleware");

function routerApi(app) {
  const router = express.Router();

  checkJwt.unless = unless;
  app.use(
    checkJwt.unless({
      path: [
        { url: /^\/api\/v1\/pets\/.*/, methods: ["GET"] },
        { url: /^\/api\/v1\/pets\/shelter\/.*/, methods: ["GET"] },
        { url: "/api/v1/pets", methods: ["GET"] },
        { url: /^\/api\/v1\/reports\/.*/, methods: ["GET"] },
      ],
    })
  );

  app.use("/api/v1", router);

  router.use("/users", userRouter);
  router.use("/pets", petsRouter);
  router.use("/shelters", shelterRouter);
  router.use("/messages", messageRouter);
  router.use("/reports", reportsRouter);
  router.use("/requests", requestRouter)
  router.use("*", notFoundRouter);
}

module.exports = routerApi;
