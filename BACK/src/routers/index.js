const express = require('express');
const userRouter = require('./api/users');

function routerApi(app) {
  const router = express.Router();
  app.use('', router);

  router.use('/user', userRouter);
}

module.exports = routerApi;
