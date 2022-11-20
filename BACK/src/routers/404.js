const express = require("express");
const router = express.Router();
const boom = require('@hapi/boom')

router.all("/", (req, res, next) => {
  throw boom.notFound(`${req.method} ${req.originalUrl} does not exists in our server`);
});


module.exports = router;