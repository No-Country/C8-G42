const express = require('express');
const userRouter = require('./api/users');
const shelterRouter = require('./api/shelters');
const notFoundRouter = require('./404');

function routerApi(app) {
  const router = express.Router();
  app.use('', router);

  router.use('/user', userRouter);
  router.use('/shelter', shelterRouter);
  router.use('*', notFoundRouter);
}

module.exports = routerApi;
